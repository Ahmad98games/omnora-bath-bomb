# Diff Details

Date : 2026-01-09 17:36:08

Directory c:\\E-Commerce Website (Full)

Total : 119 files,  4845 codes, -13 comments, 1170 blanks, all 6002 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [QUICK_START.md](/QUICK_START.md) | Markdown | 142 | 0 | 78 | 220 |
| [api/index.js](/api/index.js) | JavaScript | 11 | 3 | 3 | 17 |
| [backend/MONGODB_SETUP.md](/backend/MONGODB_SETUP.md) | Markdown | 112 | 0 | 53 | 165 |
| [backend/bootstrap.js](/backend/bootstrap.js) | JavaScript | 73 | 11 | 19 | 103 |
| [backend/config/db.js](/backend/config/db.js) | JavaScript | -4 | 0 | 0 | -4 |
| [backend/config/env.js](/backend/config/env.js) | JavaScript | 110 | 1 | 18 | 129 |
| [backend/controllers/authController.js](/backend/controllers/authController.js) | JavaScript | 5 | 1 | 3 | 9 |
| [backend/controllers/contactController.js](/backend/controllers/contactController.js) | JavaScript | -15 | -4 | -1 | -20 |
| [backend/controllers/newsletterController.js](/backend/controllers/newsletterController.js) | JavaScript | -7 | -3 | -1 | -11 |
| [backend/controllers/orderController.js](/backend/controllers/orderController.js) | JavaScript | -34 | 1 | -4 | -37 |
| [backend/controllers/paymentController.js](/backend/controllers/paymentController.js) | JavaScript | -44 | -29 | -14 | -87 |
| [backend/controllers/productController.js](/backend/controllers/productController.js) | JavaScript | 6 | -2 | 2 | 6 |
| [backend/controllers/userController.js](/backend/controllers/userController.js) | JavaScript | -1 | 0 | -1 | -2 |
| [backend/controllers/webhookController.js](/backend/controllers/webhookController.js) | JavaScript | -33 | -11 | -10 | -54 |
| [backend/data/admin_action_logs.json](/backend/data/admin_action_logs.json) | JSON | 1 | 0 | 0 | 1 |
| [backend/data/orders.json](/backend/data/orders.json) | JSON | 1 | 0 | 0 | 1 |
| [backend/data/products.json](/backend/data/products.json) | JSON | 80 | 0 | 0 | 80 |
| [backend/data/users.json](/backend/data/users.json) | JSON | 13 | 0 | 0 | 13 |
| [backend/docs/API_OPERATIONS.md](/backend/docs/API_OPERATIONS.md) | Markdown | 42 | 0 | 18 | 60 |
| [backend/docs/RUNBOOK_ARCHITECTURE.md](/backend/docs/RUNBOOK_ARCHITECTURE.md) | Markdown | 32 | 0 | 19 | 51 |
| [backend/jobs/cleanupInitiatedOrders.js](/backend/jobs/cleanupInitiatedOrders.js) | JavaScript | 97 | 5 | 19 | 121 |
| [backend/lib/dbConnect.js](/backend/lib/dbConnect.js) | JavaScript | 34 | 1 | 10 | 45 |
| [backend/middleware/auth.js](/backend/middleware/auth.js) | JavaScript | 1 | 3 | 2 | 6 |
| [backend/middleware/gatekeeper.js](/backend/middleware/gatekeeper.js) | JavaScript | 102 | 13 | 22 | 137 |
| [backend/middleware/rateLimiter.js](/backend/middleware/rateLimiter.js) | JavaScript | 2 | 0 | 2 | 4 |
| [backend/models/AdminActionLog.js](/backend/models/AdminActionLog.js) | JavaScript | -21 | 1 | 0 | -20 |
| [backend/models/Order.js](/backend/models/Order.js) | JavaScript | -58 | 1 | 0 | -57 |
| [backend/models/Product.js](/backend/models/Product.js) | JavaScript | 1 | 0 | -2 | -1 |
| [backend/models/User.js](/backend/models/User.js) | JavaScript | -25 | 6 | 3 | -16 |
| [backend/package.json](/backend/package.json) | JSON | 5 | 0 | 0 | 5 |
| [backend/routes/authRoutes.js](/backend/routes/authRoutes.js) | JavaScript | 1 | 0 | 0 | 1 |
| [backend/routes/contactRoutes.js](/backend/routes/contactRoutes.js) | JavaScript | 1 | 0 | 0 | 1 |
| [backend/routes/healthRoutes.js](/backend/routes/healthRoutes.js) | JavaScript | 44 | 3 | 4 | 51 |
| [backend/routes/newsletterRoutes.js](/backend/routes/newsletterRoutes.js) | JavaScript | 1 | 0 | 0 | 1 |
| [backend/routes/orderRoutes.js](/backend/routes/orderRoutes.js) | JavaScript | 5 | 0 | 0 | 5 |
| [backend/routes/productRoutes.js](/backend/routes/productRoutes.js) | JavaScript | 1 | 0 | 0 | 1 |
| [backend/routes/userRoutes.js](/backend/routes/userRoutes.js) | JavaScript | 1 | 0 | 0 | 1 |
| [backend/scripts/check-env-leaks.js](/backend/scripts/check-env-leaks.js) | JavaScript | 35 | 0 | 8 | 43 |
| [backend/scripts/cleanup-port.js](/backend/scripts/cleanup-port.js) | JavaScript | 32 | 5 | 5 | 42 |
| [backend/scripts/precheck.js](/backend/scripts/precheck.js) | JavaScript | 59 | 0 | 10 | 69 |
| [backend/scripts/set-admin.js](/backend/scripts/set-admin.js) | JavaScript | 57 | 0 | 12 | 69 |
| [backend/server.js](/backend/server.js) | JavaScript | -45 | -8 | -6 | -59 |
| [backend/services/dbService.js](/backend/services/dbService.js) | JavaScript | 60 | 0 | 12 | 72 |
| [backend/services/emailService.js](/backend/services/emailService.js) | JavaScript | -45 | -2 | -2 | -49 |
| [backend/services/logger.js](/backend/services/logger.js) | JavaScript | 2 | 0 | 2 | 4 |
| [backend/services/mailblusterService.js](/backend/services/mailblusterService.js) | JavaScript | -3 | -8 | -1 | -12 |
| [backend/services/memoryDbService.js](/backend/services/memoryDbService.js) | JavaScript | 45 | 0 | 10 | 55 |
| [backend/services/paymentService.js](/backend/services/paymentService.js) | JavaScript | 3 | 0 | 1 | 4 |
| [backend/services/queueService.js](/backend/services/queueService.js) | JavaScript | -55 | -60 | -12 | -127 |
| [backend/services/stateService.js](/backend/services/stateService.js) | JavaScript | 147 | 8 | 29 | 184 |
| [backend/services/whatsappService.js](/backend/services/whatsappService.js) | JavaScript | 7 | 0 | 2 | 9 |
| [backend/test-boundaries.js](/backend/test-boundaries.js) | JavaScript | 93 | 8 | 19 | 120 |
| [backend/tests/integration/bootstrap.test.js](/backend/tests/integration/bootstrap.test.js) | JavaScript | 62 | 1 | 10 | 73 |
| [backend/tests/unit/config.test.js](/backend/tests/unit/config.test.js) | JavaScript | 38 | 0 | 10 | 48 |
| [backend/utils/LocalDB.js](/backend/utils/LocalDB.js) | JavaScript | 192 | 19 | 36 | 247 |
| [backend/utils/inventoryService.js](/backend/utils/inventoryService.js) | JavaScript | 4 | 0 | 0 | 4 |
| [backend/utils/orderHashService.js](/backend/utils/orderHashService.js) | JavaScript | 40 | 3 | 8 | 51 |
| [backend/utils/tokenService.js](/backend/utils/tokenService.js) | JavaScript | 2 | 0 | 1 | 3 |
| [backend/utils/whatsappService.js](/backend/utils/whatsappService.js) | JavaScript | -20 | -8 | 0 | -28 |
| [backend/verify-mongodb.js](/backend/verify-mongodb.js) | JavaScript | 96 | 3 | 23 | 122 |
| [backend/verify-order-fix.js](/backend/verify-order-fix.js) | JavaScript | 42 | 1 | 9 | 52 |
| [backend/verify-serverless.js](/backend/verify-serverless.js) | JavaScript | 69 | 10 | 19 | 98 |
| [backend/workers/notificationWorker.js](/backend/workers/notificationWorker.js) | JavaScript | -8 | -6 | -1 | -15 |
| [frontend/package.json](/frontend/package.json) | JSON | -2 | 0 | 0 | -2 |
| [frontend/src/App.tsx](/frontend/src/App.tsx) | TypeScript JSX | 20 | 3 | 0 | 23 |
| [frontend/src/api/client.ts](/frontend/src/api/client.ts) | TypeScript | 8 | 0 | 1 | 9 |
| [frontend/src/components/AdminLayout.css](/frontend/src/components/AdminLayout.css) | CSS | 160 | 0 | 22 | 182 |
| [frontend/src/components/AdminLayout.tsx](/frontend/src/components/AdminLayout.tsx) | TypeScript JSX | 72 | 8 | 9 | 89 |
| [frontend/src/components/Footer.tsx](/frontend/src/components/Footer.tsx) | TypeScript JSX | 109 | 5 | 12 | 126 |
| [frontend/src/components/Layout.css](/frontend/src/components/Layout.css) | CSS | 331 | 0 | 51 | 382 |
| [frontend/src/components/Layout.tsx](/frontend/src/components/Layout.tsx) | TypeScript JSX | -37 | -4 | -5 | -46 |
| [frontend/src/components/OmnoraLayout.css](/frontend/src/components/OmnoraLayout.css) | CSS | 229 | 0 | 39 | 268 |
| [frontend/src/components/OmnoraPosterGallery.css](/frontend/src/components/OmnoraPosterGallery.css) | CSS | 18 | 0 | 4 | 22 |
| [frontend/src/components/RequireAdmin.tsx](/frontend/src/components/RequireAdmin.tsx) | TypeScript JSX | 16 | 1 | 6 | 23 |
| [frontend/src/components/WhatsAppConfirmationDialog.css](/frontend/src/components/WhatsAppConfirmationDialog.css) | CSS | 123 | 0 | 20 | 143 |
| [frontend/src/components/WhatsAppConfirmationDialog.tsx](/frontend/src/components/WhatsAppConfirmationDialog.tsx) | TypeScript JSX | 50 | 0 | 8 | 58 |
| [frontend/src/components/home/TechStack.css](/frontend/src/components/home/TechStack.css) | CSS | 280 | 0 | 43 | 323 |
| [frontend/src/components/home/TrustSection.tsx](/frontend/src/components/home/TrustSection.tsx) | TypeScript JSX | -12 | 0 | 0 | -12 |
| [frontend/src/components/home/tech.tsx](/frontend/src/components/home/tech.tsx) | TypeScript JSX | 154 | 5 | 18 | 177 |
| [frontend/src/config/adConfig.json](/frontend/src/config/adConfig.json) | JSON | -6 | 0 | 0 | -6 |
| [frontend/src/context/AuthContext.tsx](/frontend/src/context/AuthContext.tsx) | TypeScript JSX | -27 | -9 | -1 | -37 |
| [frontend/src/context/ToastContext.tsx](/frontend/src/context/ToastContext.tsx) | TypeScript JSX | -28 | -6 | -1 | -35 |
| [frontend/src/index.css](/frontend/src/index.css) | CSS | 103 | 0 | 12 | 115 |
| [frontend/src/pages/About.css](/frontend/src/pages/About.css) | CSS | -5 | 0 | -1 | -6 |
| [frontend/src/pages/About.tsx](/frontend/src/pages/About.tsx) | TypeScript JSX | -95 | -2 | -2 | -99 |
| [frontend/src/pages/AdminDashboard.css](/frontend/src/pages/AdminDashboard.css) | CSS | 48 | 0 | 10 | 58 |
| [frontend/src/pages/AdminDashboard.tsx](/frontend/src/pages/AdminDashboard.tsx) | TypeScript JSX | -5 | 5 | 0 | 0 |
| [frontend/src/pages/AdminOrders.css](/frontend/src/pages/AdminOrders.css) | CSS | 155 | 0 | 34 | 189 |
| [frontend/src/pages/AdminOrders.tsx](/frontend/src/pages/AdminOrders.tsx) | TypeScript JSX | 136 | 2 | 13 | 151 |
| [frontend/src/pages/AdminProducts.css](/frontend/src/pages/AdminProducts.css) | CSS | 231 | 0 | 34 | 265 |
| [frontend/src/pages/AdminProducts.tsx](/frontend/src/pages/AdminProducts.tsx) | TypeScript JSX | 208 | 0 | 19 | 227 |
| [frontend/src/pages/AdminUsers.tsx](/frontend/src/pages/AdminUsers.tsx) | TypeScript JSX | 10 | 1 | 3 | 14 |
| [frontend/src/pages/Checkout.css](/frontend/src/pages/Checkout.css) | CSS | 106 | 0 | 16 | 122 |
| [frontend/src/pages/Checkout.tsx](/frontend/src/pages/Checkout.tsx) | TypeScript JSX | -97 | 2 | -2 | -97 |
| [frontend/src/pages/Collection.css](/frontend/src/pages/Collection.css) | CSS | 554 | 0 | 89 | 643 |
| [frontend/src/pages/Collection.tsx](/frontend/src/pages/Collection.tsx) | TypeScript JSX | -337 | -26 | -48 | -411 |
| [frontend/src/pages/Contact.css](/frontend/src/pages/Contact.css) | CSS | 136 | 0 | 22 | 158 |
| [frontend/src/pages/Contact.tsx](/frontend/src/pages/Contact.tsx) | TypeScript JSX | -183 | -12 | -30 | -225 |
| [frontend/src/pages/FAQ.css](/frontend/src/pages/FAQ.css) | CSS | 148 | 0 | 25 | 173 |
| [frontend/src/pages/FAQ.tsx](/frontend/src/pages/FAQ.tsx) | TypeScript JSX | -119 | -12 | -19 | -150 |
| [frontend/src/pages/Home.tsx](/frontend/src/pages/Home.tsx) | TypeScript JSX | 17 | -2 | 3 | 18 |
| [frontend/src/pages/HomeWithAds.tsx](/frontend/src/pages/HomeWithAds.tsx) | TypeScript JSX | -17 | -2 | 1 | -18 |
| [frontend/src/pages/Login.tsx](/frontend/src/pages/Login.tsx) | TypeScript JSX | -83 | 20 | 179 | 116 |
| [frontend/src/pages/OmnoraCollection.tsx](/frontend/src/pages/OmnoraCollection.tsx) | TypeScript JSX | 337 | 26 | 48 | 411 |
| [frontend/src/pages/OmnoraContact.tsx](/frontend/src/pages/OmnoraContact.tsx) | TypeScript JSX | 183 | 12 | 30 | 225 |
| [frontend/src/pages/OmnoraFAQ.tsx](/frontend/src/pages/OmnoraFAQ.tsx) | TypeScript JSX | 119 | 12 | 19 | 150 |
| [frontend/src/pages/OmnoraFinal.css](/frontend/src/pages/OmnoraFinal.css) | CSS | 365 | 0 | 43 | 408 |
| [frontend/src/pages/OrderConfirmation.tsx](/frontend/src/pages/OrderConfirmation.tsx) | TypeScript JSX | 373 | 6 | 19 | 398 |
| [frontend/src/pages/Product.css](/frontend/src/pages/Product.css) | CSS | 19 | 0 | 3 | 22 |
| [frontend/src/pages/Wishlist.tsx](/frontend/src/pages/Wishlist.tsx) | TypeScript JSX | -4 | 0 | 0 | -4 |
| [frontend/src/pages/server.js](/frontend/src/pages/server.js) | JavaScript | -90 | -13 | -19 | -122 |
| [frontend/src/styles/Animations.css](/frontend/src/styles/Animations.css) | CSS | -13 | 0 | -11 | -24 |
| [frontend/src/styles/theme.css](/frontend/src/styles/theme.css) | CSS | -66 | 0 | -19 | -85 |
| [frontend/src/utils/whatsappOrderService.ts](/frontend/src/utils/whatsappOrderService.ts) | TypeScript | 139 | 0 | 25 | 164 |
| [frontend/tsconfig.json](/frontend/tsconfig.json) | JSON with Comments | -6 | 0 | 2 | -4 |
| [frontend/vercel.json](/frontend/vercel.json) | JSON | -31 | 0 | 0 | -31 |
| [package-lock.json](/package-lock.json) | JSON | -444 | 0 | 0 | -444 |
| [package.json](/package.json) | JSON | -6 | 0 | 0 | -6 |
| [vercel.json](/vercel.json) | JSON | 10 | 0 | 0 | 10 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details