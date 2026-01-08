import { useState } from 'react';
import './WhatsAppConfirmationDialog.css';

interface WhatsAppConfirmationDialogProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    orderNumber: string;
}

export default function WhatsAppConfirmationDialog({
    isOpen,
    onConfirm,
    onCancel,
    orderNumber
}: WhatsAppConfirmationDialogProps) {
    if (!isOpen) return null;

    return (
        <div className="whatsapp-dialog-overlay" onClick={onCancel}>
            <div className="whatsapp-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="whatsapp-dialog-header">
                    <h2>📱 WhatsApp Confirmation</h2>
                </div>

                <div className="whatsapp-dialog-content">
                    <p className="whatsapp-dialog-warning">
                        You'll be redirected to WhatsApp to send your order details.
                    </p>

                    <div className="whatsapp-dialog-alert">
                        <strong>⚠️ Important:</strong> Your order <strong>#{orderNumber}</strong> is NOT confirmed until you send the WhatsApp message.
                    </div>

                    <p className="whatsapp-dialog-instructions">
                        After clicking "Continue", WhatsApp will open with a pre-filled message containing your order details. Please send this message to complete your order.
                    </p>
                </div>

                <div className="whatsapp-dialog-actions">
                    <button
                        className="whatsapp-dialog-btn whatsapp-dialog-btn-cancel"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="whatsapp-dialog-btn whatsapp-dialog-btn-confirm"
                        onClick={onConfirm}
                    >
                        Continue to WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}
