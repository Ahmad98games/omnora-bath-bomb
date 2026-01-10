const stateService = require('../backend/services/stateService');
const { LIFECYCLE, INFRA } = require('../backend/services/stateService');

// Lazy load critical modules to catch initialization errors (e.g. missing env vars)
let app;
let dbConnect;

module.exports = async (req, res) => {
    try {
        // 1. Load Modules (if not loaded)
        if (!dbConnect) dbConnect = require('../backend/lib/dbConnect');
        if (!app) app = require('../backend/server');

        // 2. Handle DB Connection
        await dbConnect();

        // 3. Update Gatekeeper State
        stateService.setInfraStatus(INFRA.DB, true);
        stateService.setLifecycle(LIFECYCLE.READY);

        // 4. Forward to Express
        return app(req, res);

    } catch (e) {
        console.error('Server Extension Initialization Failed:', e);
        // Return explicit error to helps debug Vercel env issues
        return res.status(500).json({
            error: 'Server Initialization Failed',
            message: e.message,
            code: e.code || 'INIT_ERROR',
            suggestion: e.code === 'ERR_ENV_MISSING_CRITICAL_SECRET' ? 'Please check JWT_SECRET in Vercel Environment Variables' : 'Check logs'
        });
    }
};
