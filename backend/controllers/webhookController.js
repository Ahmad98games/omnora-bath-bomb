const logger = require('../services/logger');
const MessageLog = require('../models/MessageLog');
const crypto = require('crypto');
const { validateEnv } = require('../config/env');

const config = validateEnv();
const { whatsapp } = config.services;

/**
 * Verify WhatsApp webhook signature
 */
function verifyWebhookSignature(req) {
    const signature = req.headers['x-hub-signature-256'];
    if (!signature) {
        logger.warn('Webhook signature missing', { ip: req.ip });
        return false;
    }

    if (!whatsapp.appSecret) {
        logger.error('WHATSAPP_APP_SECRET not configured');
        return false;
    }

    try {
        const payload = JSON.stringify(req.body);
        const expectedSignature = 'sha256=' + crypto
            .createHmac('sha256', whatsapp.appSecret)
            .update(payload)
            .digest('hex');

        return crypto.timingSafeEqual(
            Buffer.from(signature),
            Buffer.from(expectedSignature)
        );
    } catch (error) {
        logger.error('Signature verification error', { error: error.message });
        return false;
    }
}

exports.verifyWebhook = (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === whatsapp.verifyToken) {
            logger.info('Webhook verified successfully');
            res.status(200).send(challenge);
        } else {
            logger.warn('Webhook verification failed - invalid token');
            res.sendStatus(403);
        }
    } else {
        logger.warn('Webhook verification failed - missing parameters');
        res.sendStatus(403);
    }
};

exports.handleWebhook = async (req, res) => {
    if (!verifyWebhookSignature(req)) {
        logger.error('Webhook signature verification failed', { ip: req.ip });
        return res.status(403).json({ error: 'Invalid signature' });
    }

    const body = req.body;
    if (body.object === 'whatsapp_business_account') {
        for (const entry of body.entry) {
            const changes = entry.changes;
            for (const change of changes) {
                if (change.value.messages) {
                    for (const message of change.value.messages) {
                        logger.info('Received WhatsApp message', { from: message.from, id: message.id });
                        try {
                            await MessageLog.create({
                                messageId: message.id,
                                recipientPhone: message.from,
                                type: message.type || 'unknown',
                                direction: 'inbound',
                                status: 'received',
                                content: message
                            });
                        } catch (dbError) {
                            logger.error('Failed to persist inbound message', { error: dbError.message });
                        }
                    }
                }
                if (change.value.statuses) {
                    for (const status of change.value.statuses) {
                        try {
                            await MessageLog.findOneAndUpdate(
                                { messageId: status.id },
                                {
                                    status: status.status,
                                    error: status.errors ? JSON.stringify(status.errors) : undefined
                                },
                                { upsert: true }
                            );
                        } catch (dbError) {
                            logger.error('Failed to update message status', { error: dbError.message });
                        }
                    }
                }
            }
        }
        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
};
