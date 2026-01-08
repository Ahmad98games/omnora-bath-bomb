# Diff Details

Date : 2025-12-27 17:23:07

Directory c:\\E-Commerce Website (Full)

Total : 385 files,  1483 codes, 205 comments, 298 blanks, all 1986 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [backend/BULLMQ_STATUS.md](/backend/BULLMQ_STATUS.md) | Markdown | 104 | 0 | 32 | 136 |
| [backend/COLLECTION_PAGE_FIX.md](/backend/COLLECTION_PAGE_FIX.md) | Markdown | 99 | 0 | 22 | 121 |
| [backend/PRODUCTION_READINESS.md](/backend/PRODUCTION_READINESS.md) | Markdown | 112 | 0 | 34 | 146 |
| [backend/README.md](/backend/README.md) | Markdown | 82 | 0 | 29 | 111 |
| [backend/SECURITY_FIXES.md](/backend/SECURITY_FIXES.md) | Markdown | 86 | 0 | 22 | 108 |
| [backend/check_status.js](/backend/check_status.js) | JavaScript | 7 | 0 | 1 | 8 |
| [backend/config/db.js](/backend/config/db.js) | JavaScript | 15 | 0 | 3 | 18 |
| [backend/controllers/adminController.js](/backend/controllers/adminController.js) | JavaScript | 196 | 2 | 30 | 228 |
| [backend/controllers/analyticsController.js](/backend/controllers/analyticsController.js) | JavaScript | 38 | 0 | 4 | 42 |
| [backend/controllers/authController.js](/backend/controllers/authController.js) | JavaScript | 146 | 36 | 31 | 213 |
| [backend/controllers/cartController.js](/backend/controllers/cartController.js) | JavaScript | 217 | 0 | 32 | 249 |
| [backend/controllers/contactController.js](/backend/controllers/contactController.js) | JavaScript | 82 | 6 | 15 | 103 |
| [backend/controllers/inventoryController.js](/backend/controllers/inventoryController.js) | JavaScript | 350 | 2 | 48 | 400 |
| [backend/controllers/newsletterController.js](/backend/controllers/newsletterController.js) | JavaScript | 85 | 8 | 16 | 109 |
| [backend/controllers/orderController.js](/backend/controllers/orderController.js) | JavaScript | 639 | 46 | 97 | 782 |
| [backend/controllers/paymentController.js](/backend/controllers/paymentController.js) | JavaScript | 141 | 30 | 24 | 195 |
| [backend/controllers/phase1Controller.js](/backend/controllers/phase1Controller.js) | JavaScript | 474 | 5 | 93 | 572 |
| [backend/controllers/phase2Controller.js](/backend/controllers/phase2Controller.js) | JavaScript | 688 | 35 | 131 | 854 |
| [backend/controllers/phase3Controller.js](/backend/controllers/phase3Controller.js) | JavaScript | 809 | 53 | 155 | 1,017 |
| [backend/controllers/productController.js](/backend/controllers/productController.js) | JavaScript | 408 | 14 | 44 | 466 |
| [backend/controllers/recommendationController.js](/backend/controllers/recommendationController.js) | JavaScript | 213 | 1 | 32 | 246 |
| [backend/controllers/reviewController.js](/backend/controllers/reviewController.js) | JavaScript | 335 | 4 | 51 | 390 |
| [backend/controllers/searchController.js](/backend/controllers/searchController.js) | JavaScript | 203 | 2 | 24 | 229 |
| [backend/controllers/userController.js](/backend/controllers/userController.js) | JavaScript | 149 | 0 | 27 | 176 |
| [backend/controllers/webhookController.js](/backend/controllers/webhookController.js) | JavaScript | 134 | 11 | 20 | 165 |
| [backend/controllers/wishlistController.js](/backend/controllers/wishlistController.js) | JavaScript | 359 | 0 | 52 | 411 |
| [backend/data/defaultProducts.js](/backend/data/defaultProducts.js) | JavaScript | 87 | 2 | 3 | 92 |
| [backend/ecosystem.config.js](/backend/ecosystem.config.js) | JavaScript | 53 | 0 | 2 | 55 |
| [backend/email-templates/order-cancelled.html](/backend/email-templates/order-cancelled.html) | HTML | 60 | 0 | 11 | 71 |
| [backend/email-templates/order-delivered.html](/backend/email-templates/order-delivered.html) | HTML | 60 | 0 | 10 | 70 |
| [backend/email-templates/order-placed.html](/backend/email-templates/order-placed.html) | HTML | 71 | 0 | 12 | 83 |
| [backend/email-templates/order-shipped.html](/backend/email-templates/order-shipped.html) | HTML | 69 | 0 | 12 | 81 |
| [backend/email-templates/payment-approved.html](/backend/email-templates/payment-approved.html) | HTML | 69 | 0 | 12 | 81 |
| [backend/middleware/auth.js](/backend/middleware/auth.js) | JavaScript | 89 | 1 | 15 | 105 |
| [backend/middleware/authEnhanced.js](/backend/middleware/authEnhanced.js) | JavaScript | 1 | 0 | 1 | 2 |
| [backend/middleware/authMiddleware.js](/backend/middleware/authMiddleware.js) | JavaScript | 1 | 0 | 0 | 1 |
| [backend/middleware/rateLimiter.js](/backend/middleware/rateLimiter.js) | JavaScript | 26 | 0 | 5 | 31 |
| [backend/middleware/validate.js](/backend/middleware/validate.js) | JavaScript | 15 | 0 | 4 | 19 |
| [backend/models/AbandonedCart.js](/backend/models/AbandonedCart.js) | JavaScript | 389 | 11 | 45 | 445 |
| [backend/models/AdminActionLog.js](/backend/models/AdminActionLog.js) | JavaScript | 24 | 0 | 3 | 27 |
| [backend/models/Bundle.js](/backend/models/Bundle.js) | JavaScript | 340 | 15 | 39 | 394 |
| [backend/models/Contact.js](/backend/models/Contact.js) | JavaScript | 33 | 0 | 2 | 35 |
| [backend/models/Event.js](/backend/models/Event.js) | JavaScript | 17 | 0 | 4 | 21 |
| [backend/models/Inventory.js](/backend/models/Inventory.js) | JavaScript | 406 | 4 | 35 | 445 |
| [backend/models/MessageLog.js](/backend/models/MessageLog.js) | JavaScript | 31 | 0 | 3 | 34 |
| [backend/models/Newsletter.js](/backend/models/Newsletter.js) | JavaScript | 19 | 0 | 2 | 21 |
| [backend/models/OneClickCheckout.js](/backend/models/OneClickCheckout.js) | JavaScript | 140 | 11 | 14 | 165 |
| [backend/models/Order.js](/backend/models/Order.js) | JavaScript | 68 | 1 | 3 | 72 |
| [backend/models/Phase1Models.js](/backend/models/Phase1Models.js) | JavaScript | 521 | 61 | 73 | 655 |
| [backend/models/Phase2Models.js](/backend/models/Phase2Models.js) | JavaScript | 696 | 79 | 134 | 909 |
| [backend/models/Phase3Models.js](/backend/models/Phase3Models.js) | JavaScript | 737 | 93 | 174 | 1,004 |
| [backend/models/Product.js](/backend/models/Product.js) | JavaScript | 83 | 3 | 5 | 91 |
| [backend/models/Recommendation.js](/backend/models/Recommendation.js) | JavaScript | 85 | 0 | 6 | 91 |
| [backend/models/Review.js](/backend/models/Review.js) | JavaScript | 400 | 10 | 46 | 456 |
| [backend/models/User.js](/backend/models/User.js) | JavaScript | 55 | 2 | 5 | 62 |
| [backend/models/Wishlist.js](/backend/models/Wishlist.js) | JavaScript | 404 | 5 | 50 | 459 |
| [backend/package-lock.json](/backend/package-lock.json) | JSON | 9,611 | 0 | 1 | 9,612 |
| [backend/package-production.json](/backend/package-production.json) | JSON | 71 | 0 | 1 | 72 |
| [backend/package.json](/backend/package.json) | JSON | 51 | 0 | 0 | 51 |
| [backend/routes/adminRoutes.js](/backend/routes/adminRoutes.js) | JavaScript | 20 | 5 | 7 | 32 |
| [backend/routes/analyticsRoutes.js](/backend/routes/analyticsRoutes.js) | JavaScript | 6 | 0 | 4 | 10 |
| [backend/routes/authRoutes.js](/backend/routes/authRoutes.js) | JavaScript | 12 | 2 | 4 | 18 |
| [backend/routes/cartRoutes.js](/backend/routes/cartRoutes.js) | JavaScript | 15 | 1 | 4 | 20 |
| [backend/routes/contactRoutes.js](/backend/routes/contactRoutes.js) | JavaScript | 8 | 2 | 3 | 13 |
| [backend/routes/healthRoutes.js](/backend/routes/healthRoutes.js) | JavaScript | 13 | 0 | 4 | 17 |
| [backend/routes/inventoryRoutes.js](/backend/routes/inventoryRoutes.js) | JavaScript | 20 | 3 | 6 | 29 |
| [backend/routes/newsletterRoutes.js](/backend/routes/newsletterRoutes.js) | JavaScript | 8 | 2 | 3 | 13 |
| [backend/routes/orderRoutes.js](/backend/routes/orderRoutes.js) | JavaScript | 85 | 17 | 21 | 123 |
| [backend/routes/paymentRoutes.js](/backend/routes/paymentRoutes.js) | JavaScript | 13 | 5 | 7 | 25 |
| [backend/routes/phase1Routes.js](/backend/routes/phase1Routes.js) | JavaScript | 68 | 33 | 23 | 124 |
| [backend/routes/phase2Routes.js](/backend/routes/phase2Routes.js) | JavaScript | 62 | 28 | 14 | 104 |
| [backend/routes/phase3Routes.js](/backend/routes/phase3Routes.js) | JavaScript | 84 | 46 | 20 | 150 |
| [backend/routes/productRoutes.js](/backend/routes/productRoutes.js) | JavaScript | 20 | 0 | 4 | 24 |
| [backend/routes/recommendationRoutes.js](/backend/routes/recommendationRoutes.js) | JavaScript | 16 | 3 | 6 | 25 |
| [backend/routes/reviewRoutes.js](/backend/routes/reviewRoutes.js) | JavaScript | 18 | 3 | 6 | 27 |
| [backend/routes/searchRoutes.js](/backend/routes/searchRoutes.js) | JavaScript | 14 | 2 | 5 | 21 |
| [backend/routes/userRoutes.js](/backend/routes/userRoutes.js) | JavaScript | 16 | 0 | 3 | 19 |
| [backend/routes/webhookRoutes.js](/backend/routes/webhookRoutes.js) | JavaScript | 6 | 0 | 3 | 9 |
| [backend/routes/wishlistRoutes.js](/backend/routes/wishlistRoutes.js) | JavaScript | 19 | 3 | 6 | 28 |
| [backend/scripts/createAdmin.js](/backend/scripts/createAdmin.js) | JavaScript | 56 | 4 | 12 | 72 |
| [backend/scripts/migrateProducts.js](/backend/scripts/migrateProducts.js) | JavaScript | 67 | 0 | 11 | 78 |
| [backend/scripts/seedProducts.js](/backend/scripts/seedProducts.js) | JavaScript | 148 | 8 | 13 | 169 |
| [backend/scripts/test-approval-system.js](/backend/scripts/test-approval-system.js) | JavaScript | 130 | 25 | 27 | 182 |
| [backend/scripts/test-whatsapp.js](/backend/scripts/test-whatsapp.js) | JavaScript | 31 | 0 | 4 | 35 |
| [backend/scripts/verify-system.js](/backend/scripts/verify-system.js) | JavaScript | 109 | 9 | 23 | 141 |
| [backend/server.js](/backend/server.js) | JavaScript | 171 | 25 | 22 | 218 |
| [backend/services/cartService.js](/backend/services/cartService.js) | JavaScript | 320 | 5 | 39 | 364 |
| [backend/services/emailService.js](/backend/services/emailService.js) | JavaScript | 243 | 3 | 25 | 271 |
| [backend/services/logger.js](/backend/services/logger.js) | JavaScript | 23 | 0 | 4 | 27 |
| [backend/services/mailblusterService.js](/backend/services/mailblusterService.js) | JavaScript | 72 | 8 | 13 | 93 |
| [backend/services/paymentService.js](/backend/services/paymentService.js) | JavaScript | 326 | 54 | 56 | 436 |
| [backend/services/queueService.js](/backend/services/queueService.js) | JavaScript | 181 | 63 | 30 | 274 |
| [backend/services/recommendationService.js](/backend/services/recommendationService.js) | JavaScript | 230 | 12 | 36 | 278 |
| [backend/services/searchService.js](/backend/services/searchService.js) | JavaScript | 255 | 20 | 47 | 322 |
| [backend/services/whatsappService.js](/backend/services/whatsappService.js) | JavaScript | 20 | 1 | 2 | 23 |
| [backend/test_subscription.js](/backend/test_subscription.js) | JavaScript | 25 | 0 | 4 | 29 |
| [backend/tests/QA-SECURITY-CHECKLIST.md](/backend/tests/QA-SECURITY-CHECKLIST.md) | Markdown | 315 | 0 | 117 | 432 |
| [backend/tests/integration/payment-security.test.js](/backend/tests/integration/payment-security.test.js) | JavaScript | 219 | 26 | 51 | 296 |
| [backend/tests/security/jwt.test.js](/backend/tests/security/jwt.test.js) | JavaScript | 88 | 3 | 24 | 115 |
| [backend/tests/test_approval_flow.js](/backend/tests/test_approval_flow.js) | JavaScript | 104 | 8 | 20 | 132 |
| [backend/utils/inventoryService.js](/backend/utils/inventoryService.js) | JavaScript | 129 | 3 | 23 | 155 |
| [backend/utils/phoneFormatter.js](/backend/utils/phoneFormatter.js) | JavaScript | 56 | 10 | 17 | 83 |
| [backend/utils/tokenService.js](/backend/utils/tokenService.js) | JavaScript | 72 | 2 | 10 | 84 |
| [backend/utils/whatsappService.js](/backend/utils/whatsappService.js) | JavaScript | 162 | 8 | 28 | 198 |
| [backend/validators/orderValidators.js](/backend/validators/orderValidators.js) | JavaScript | 36 | 0 | 8 | 44 |
| [backend/validators/productValidators.js](/backend/validators/productValidators.js) | JavaScript | 28 | 0 | 8 | 36 |
| [backend/validators/userValidator.js](/backend/validators/userValidator.js) | JavaScript | 23 | 0 | 5 | 28 |
| [backend/validators/userValidators.js](/backend/validators/userValidators.js) | JavaScript | 41 | 0 | 8 | 49 |
| [backend/workers/notificationWorker.js](/backend/workers/notificationWorker.js) | JavaScript | 165 | 22 | 38 | 225 |
| [frontend/index.html](/frontend/index.html) | HTML | 104 | 0 | 17 | 121 |
| [frontend/package-lock.json](/frontend/package-lock.json) | JSON | 4,068 | 0 | 1 | 4,069 |
| [frontend/package.json](/frontend/package.json) | JSON | 35 | 0 | 1 | 36 |
| [frontend/postcss.config.js](/frontend/postcss.config.js) | JavaScript | 6 | 0 | 1 | 7 |
| [frontend/public/manifest.json](/frontend/public/manifest.json) | JSON | 26 | 0 | 0 | 26 |
| [frontend/src/App.tsx](/frontend/src/App.tsx) | TypeScript JSX | 61 | 1 | 5 | 67 |
| [frontend/src/api/client.ts](/frontend/src/api/client.ts) | TypeScript | 81 | 19 | 15 | 115 |
| [frontend/src/components/AdPlacement.css](/frontend/src/components/AdPlacement.css) | CSS | 266 | 0 | 48 | 314 |
| [frontend/src/components/AdPlacementZone.tsx](/frontend/src/components/AdPlacementZone.tsx) | TypeScript JSX | 123 | 5 | 10 | 138 |
| [frontend/src/components/Carousel.tsx](/frontend/src/components/Carousel.tsx) | TypeScript JSX | 113 | 7 | 17 | 137 |
| [frontend/src/components/ErrorBoundary.tsx](/frontend/src/components/ErrorBoundary.tsx) | TypeScript JSX | 71 | 0 | 9 | 80 |
| [frontend/src/components/Layout.tsx](/frontend/src/components/Layout.tsx) | TypeScript JSX | 167 | 19 | 28 | 214 |
| [frontend/src/components/LoadingWrapper.tsx](/frontend/src/components/LoadingWrapper.tsx) | TypeScript JSX | 43 | 5 | 5 | 53 |
| [frontend/src/components/OmnoraCarousel.css](/frontend/src/components/OmnoraCarousel.css) | CSS | 178 | 0 | 24 | 202 |
| [frontend/src/components/OmnoraLayout.css](/frontend/src/components/OmnoraLayout.css) | CSS | 331 | 0 | 51 | 382 |
| [frontend/src/components/OmnoraPosterGallery.css](/frontend/src/components/OmnoraPosterGallery.css) | CSS | 187 | 0 | 26 | 213 |
| [frontend/src/components/Payment.css](/frontend/src/components/Payment.css) | CSS | 119 | 0 | 21 | 140 |
| [frontend/src/components/PosterGallery.tsx](/frontend/src/components/PosterGallery.tsx) | TypeScript JSX | 72 | 6 | 10 | 88 |
| [frontend/src/components/ProtectedRoute.tsx](/frontend/src/components/ProtectedRoute.tsx) | TypeScript JSX | 31 | 0 | 7 | 38 |
| [frontend/src/components/Skeleton.css](/frontend/src/components/Skeleton.css) | CSS | 103 | 0 | 20 | 123 |
| [frontend/src/components/Skeleton.tsx](/frontend/src/components/Skeleton.tsx) | TypeScript JSX | 37 | 11 | 11 | 59 |
| [frontend/src/components/SkeletonProductCard.tsx](/frontend/src/components/SkeletonProductCard.tsx) | TypeScript JSX | 46 | 10 | 7 | 63 |
| [frontend/src/components/SmartImage.tsx](/frontend/src/components/SmartImage.tsx) | TypeScript JSX | 104 | 21 | 14 | 139 |
| [frontend/src/components/StripePayment.tsx](/frontend/src/components/StripePayment.tsx) | TypeScript JSX | 82 | 2 | 13 | 97 |
| [frontend/src/components/home/HowItWorks.tsx](/frontend/src/components/home/HowItWorks.tsx) | TypeScript JSX | 31 | 0 | 2 | 33 |
| [frontend/src/components/home/Newsletter.tsx](/frontend/src/components/home/Newsletter.tsx) | TypeScript JSX | 49 | 0 | 6 | 55 |
| [frontend/src/components/home/Testimonials.tsx](/frontend/src/components/home/Testimonials.tsx) | TypeScript JSX | 43 | 3 | 4 | 50 |
| [frontend/src/components/home/TrustSection.tsx](/frontend/src/components/home/TrustSection.tsx) | TypeScript JSX | 44 | 0 | 2 | 46 |
| [frontend/src/components/home/WhyUs.tsx](/frontend/src/components/home/WhyUs.tsx) | TypeScript JSX | 28 | 0 | 3 | 31 |
| [frontend/src/config/adConfig.json](/frontend/src/config/adConfig.json) | JSON | 115 | 0 | 2 | 117 |
| [frontend/src/config/firebase.ts](/frontend/src/config/firebase.ts) | TypeScript | 60 | 4 | 5 | 69 |
| [frontend/src/constants.ts](/frontend/src/constants.ts) | TypeScript | 1 | 0 | 1 | 2 |
| [frontend/src/context/AuthContext.tsx](/frontend/src/context/AuthContext.tsx) | TypeScript JSX | 145 | 16 | 17 | 178 |
| [frontend/src/context/ToastContext.tsx](/frontend/src/context/ToastContext.tsx) | TypeScript JSX | 119 | 6 | 12 | 137 |
| [frontend/src/data/fallbackProducts.ts](/frontend/src/data/fallbackProducts.ts) | TypeScript | 62 | 1 | 1 | 64 |
| [frontend/src/hooks/useImageLoader.ts](/frontend/src/hooks/useImageLoader.ts) | TypeScript | 73 | 27 | 23 | 123 |
| [frontend/src/hooks/useMinimumLoadingTime.ts](/frontend/src/hooks/useMinimumLoadingTime.ts) | TypeScript | 31 | 0 | 6 | 37 |
| [frontend/src/hooks/useScrollReveal.ts](/frontend/src/hooks/useScrollReveal.ts) | TypeScript | 26 | 1 | 8 | 35 |
| [frontend/src/index.css](/frontend/src/index.css) | CSS | 135 | 0 | 25 | 160 |
| [frontend/src/lib/loadingManager.ts](/frontend/src/lib/loadingManager.ts) | TypeScript | 135 | 20 | 27 | 182 |
| [frontend/src/main.tsx](/frontend/src/main.tsx) | TypeScript JSX | 24 | 1 | 3 | 28 |
| [frontend/src/pages/About.css](/frontend/src/pages/About.css) | CSS | 463 | 0 | 70 | 533 |
| [frontend/src/pages/About.tsx](/frontend/src/pages/About.tsx) | TypeScript JSX | 225 | 19 | 21 | 265 |
| [frontend/src/pages/AdminAnalytics.tsx](/frontend/src/pages/AdminAnalytics.tsx) | TypeScript JSX | 44 | 0 | 5 | 49 |
| [frontend/src/pages/AdminApprove.tsx](/frontend/src/pages/AdminApprove.tsx) | TypeScript JSX | 56 | 2 | 10 | 68 |
| [frontend/src/pages/AdminDashboard.css](/frontend/src/pages/AdminDashboard.css) | CSS | 147 | 0 | 27 | 174 |
| [frontend/src/pages/AdminDashboard.tsx](/frontend/src/pages/AdminDashboard.tsx) | TypeScript JSX | 140 | 0 | 13 | 153 |
| [frontend/src/pages/Cart.css](/frontend/src/pages/Cart.css) | CSS | 570 | 0 | 84 | 654 |
| [frontend/src/pages/Cart.tsx](/frontend/src/pages/Cart.tsx) | TypeScript JSX | 189 | 0 | 14 | 203 |
| [frontend/src/pages/Checkout.css](/frontend/src/pages/Checkout.css) | CSS | 550 | 0 | 88 | 638 |
| [frontend/src/pages/Checkout.tsx](/frontend/src/pages/Checkout.tsx) | TypeScript JSX | 529 | 6 | 36 | 571 |
| [frontend/src/pages/Collection.tsx](/frontend/src/pages/Collection.tsx) | TypeScript JSX | 337 | 26 | 48 | 411 |
| [frontend/src/pages/Contact.tsx](/frontend/src/pages/Contact.tsx) | TypeScript JSX | 183 | 12 | 30 | 225 |
| [frontend/src/pages/FAQ.tsx](/frontend/src/pages/FAQ.tsx) | TypeScript JSX | 119 | 12 | 19 | 150 |
| [frontend/src/pages/Home.tsx](/frontend/src/pages/Home.tsx) | TypeScript JSX | 242 | 20 | 28 | 290 |
| [frontend/src/pages/HomeWithAds.tsx](/frontend/src/pages/HomeWithAds.tsx) | TypeScript JSX | 29 | 6 | 5 | 40 |
| [frontend/src/pages/Login.css](/frontend/src/pages/Login.css) | CSS | 245 | 0 | 39 | 284 |
| [frontend/src/pages/Login.tsx](/frontend/src/pages/Login.tsx) | TypeScript JSX | 296 | 6 | 22 | 324 |
| [frontend/src/pages/NotFound.tsx](/frontend/src/pages/NotFound.tsx) | TypeScript JSX | 37 | 0 | 3 | 40 |
| [frontend/src/pages/OmnoraCollection.css](/frontend/src/pages/OmnoraCollection.css) | CSS | 554 | 0 | 89 | 643 |
| [frontend/src/pages/OmnoraContact.css](/frontend/src/pages/OmnoraContact.css) | CSS | 282 | 0 | 39 | 321 |
| [frontend/src/pages/OmnoraFAQ.css](/frontend/src/pages/OmnoraFAQ.css) | CSS | 266 | 0 | 38 | 304 |
| [frontend/src/pages/OmnoraFinal.css](/frontend/src/pages/OmnoraFinal.css) | CSS | 337 | 0 | 51 | 388 |
| [frontend/src/pages/OrderConfirmation.tsx](/frontend/src/pages/OrderConfirmation.tsx) | TypeScript JSX | 113 | 2 | 13 | 128 |
| [frontend/src/pages/OrderDetail.css](/frontend/src/pages/OrderDetail.css) | CSS | 205 | 0 | 36 | 241 |
| [frontend/src/pages/OrderDetail.tsx](/frontend/src/pages/OrderDetail.tsx) | TypeScript JSX | 170 | 6 | 17 | 193 |
| [frontend/src/pages/PaymentSuccess.css](/frontend/src/pages/PaymentSuccess.css) | CSS | 96 | 0 | 18 | 114 |
| [frontend/src/pages/PaymentSuccess.tsx](/frontend/src/pages/PaymentSuccess.tsx) | TypeScript JSX | 48 | 1 | 8 | 57 |
| [frontend/src/pages/Privacy.tsx](/frontend/src/pages/Privacy.tsx) | TypeScript JSX | 51 | 0 | 5 | 56 |
| [frontend/src/pages/Product.css](/frontend/src/pages/Product.css) | CSS | 189 | 0 | 28 | 217 |
| [frontend/src/pages/Product.tsx](/frontend/src/pages/Product.tsx) | TypeScript JSX | 224 | 17 | 44 | 285 |
| [frontend/src/pages/Profile.css](/frontend/src/pages/Profile.css) | CSS | 159 | 0 | 31 | 190 |
| [frontend/src/pages/Profile.tsx](/frontend/src/pages/Profile.tsx) | TypeScript JSX | 235 | 0 | 14 | 249 |
| [frontend/src/pages/Register.tsx](/frontend/src/pages/Register.tsx) | TypeScript JSX | 9 | 1 | 4 | 14 |
| [frontend/src/pages/Terms.tsx](/frontend/src/pages/Terms.tsx) | TypeScript JSX | 54 | 0 | 6 | 60 |
| [frontend/src/pages/Wishlist.css](/frontend/src/pages/Wishlist.css) | CSS | 125 | 0 | 21 | 146 |
| [frontend/src/pages/Wishlist.tsx](/frontend/src/pages/Wishlist.tsx) | TypeScript JSX | 124 | 2 | 12 | 138 |
| [frontend/src/pages/index.css](/frontend/src/pages/index.css) | CSS | 5 | 0 | 2 | 7 |
| [frontend/src/pages/server.js](/frontend/src/pages/server.js) | JavaScript | 90 | 13 | 19 | 122 |
| [frontend/src/pages/service.js](/frontend/src/pages/service.js) | JavaScript | 154 | 5 | 14 | 173 |
| [frontend/src/styles/Animations.css](/frontend/src/styles/Animations.css) | CSS | 95 | 0 | 22 | 117 |
| [frontend/src/styles/theme.css](/frontend/src/styles/theme.css) | CSS | 247 | 0 | 50 | 297 |
| [frontend/src/vite-env.d.ts](/frontend/src/vite-env.d.ts) | TypeScript | 24 | 1 | 7 | 32 |
| [frontend/tailwind.config.js](/frontend/tailwind.config.js) | JavaScript | 11 | 0 | 1 | 12 |
| [frontend/tsconfig.json](/frontend/tsconfig.json) | JSON with Comments | 23 | 0 | 0 | 23 |
| [frontend/vercel.json](/frontend/vercel.json) | JSON | 43 | 0 | 0 | 43 |
| [frontend/vite.config.ts](/frontend/vite.config.ts) | TypeScript | 44 | 2 | 2 | 48 |
| [package-lock.json](/package-lock.json) | JSON | 910 | 0 | 1 | 911 |
| [package.json](/package.json) | JSON | 26 | 0 | 0 | 26 |
| [scripts/check-environment.ps1](/scripts/check-environment.ps1) | PowerShell | 0 | 0 | 1 | 1 |
| [scripts/start-backend.ps1](/scripts/start-backend.ps1) | PowerShell | 0 | 0 | 1 | 1 |
| [sitemap.xml](/sitemap.xml) | XML | 18 | 0 | 2 | 20 |
| [start-dev.ps1](/start-dev.ps1) | PowerShell | 42 | 8 | 12 | 62 |
| [test_api.js](/test_api.js) | JavaScript | 32 | 0 | 4 | 36 |
| [vercel.json](/vercel.json) | JSON | 39 | 0 | 0 | 39 |
| [f:\E-Commerce Website (Full)\backend\BULLMQ_STATUS.md](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5CBULLMQ_STATUS.md) | Markdown | -104 | 0 | -32 | -136 |
| [f:\E-Commerce Website (Full)\backend\COLLECTION_PAGE_FIX.md](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5CCOLLECTION_PAGE_FIX.md) | Markdown | -99 | 0 | -22 | -121 |
| [f:\E-Commerce Website (Full)\backend\PRODUCTION_READINESS.md](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5CPRODUCTION_READINESS.md) | Markdown | -112 | 0 | -34 | -146 |
| [f:\E-Commerce Website (Full)\backend\README.md](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5CREADME.md) | Markdown | -82 | 0 | -29 | -111 |
| [f:\E-Commerce Website (Full)\backend\SECURITY_FIXES.md](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5CSECURITY_FIXES.md) | Markdown | -86 | 0 | -22 | -108 |
| [f:\E-Commerce Website (Full)\backend\config\db.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cconfig%5Cdb.js) | JavaScript | -15 | 0 | -3 | -18 |
| [f:\E-Commerce Website (Full)\backend\controllers\adminController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CadminController.js) | JavaScript | -196 | -2 | -30 | -228 |
| [f:\E-Commerce Website (Full)\backend\controllers\analyticsController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CanalyticsController.js) | JavaScript | -38 | 0 | -4 | -42 |
| [f:\E-Commerce Website (Full)\backend\controllers\authController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CauthController.js) | JavaScript | -146 | -36 | -31 | -213 |
| [f:\E-Commerce Website (Full)\backend\controllers\cartController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CcartController.js) | JavaScript | -217 | 0 | -32 | -249 |
| [f:\E-Commerce Website (Full)\backend\controllers\contactController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CcontactController.js) | JavaScript | -82 | -6 | -15 | -103 |
| [f:\E-Commerce Website (Full)\backend\controllers\inventoryController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CinventoryController.js) | JavaScript | -350 | -2 | -48 | -400 |
| [f:\E-Commerce Website (Full)\backend\controllers\newsletterController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CnewsletterController.js) | JavaScript | -85 | -8 | -16 | -109 |
| [f:\E-Commerce Website (Full)\backend\controllers\orderController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CorderController.js) | JavaScript | -639 | -46 | -97 | -782 |
| [f:\E-Commerce Website (Full)\backend\controllers\paymentController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CpaymentController.js) | JavaScript | -141 | -30 | -24 | -195 |
| [f:\E-Commerce Website (Full)\backend\controllers\phase1Controller.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5Cphase1Controller.js) | JavaScript | -474 | -5 | -93 | -572 |
| [f:\E-Commerce Website (Full)\backend\controllers\phase2Controller.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5Cphase2Controller.js) | JavaScript | -688 | -35 | -131 | -854 |
| [f:\E-Commerce Website (Full)\backend\controllers\phase3Controller.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5Cphase3Controller.js) | JavaScript | -809 | -53 | -155 | -1,017 |
| [f:\E-Commerce Website (Full)\backend\controllers\productController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CproductController.js) | JavaScript | -398 | -11 | -42 | -451 |
| [f:\E-Commerce Website (Full)\backend\controllers\recommendationController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CrecommendationController.js) | JavaScript | -213 | -1 | -32 | -246 |
| [f:\E-Commerce Website (Full)\backend\controllers\reviewController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CreviewController.js) | JavaScript | -335 | -4 | -51 | -390 |
| [f:\E-Commerce Website (Full)\backend\controllers\searchController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CsearchController.js) | JavaScript | -203 | -2 | -24 | -229 |
| [f:\E-Commerce Website (Full)\backend\controllers\userController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CuserController.js) | JavaScript | -149 | 0 | -27 | -176 |
| [f:\E-Commerce Website (Full)\backend\controllers\webhookController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CwebhookController.js) | JavaScript | -134 | -11 | -20 | -165 |
| [f:\E-Commerce Website (Full)\backend\controllers\wishlistController.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ccontrollers%5CwishlistController.js) | JavaScript | -359 | 0 | -52 | -411 |
| [f:\E-Commerce Website (Full)\backend\data\defaultProducts.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cdata%5CdefaultProducts.js) | JavaScript | -87 | -2 | -3 | -92 |
| [f:\E-Commerce Website (Full)\backend\ecosystem.config.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cecosystem.config.js) | JavaScript | -53 | 0 | -2 | -55 |
| [f:\E-Commerce Website (Full)\backend\email-templates\order-cancelled.html](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cemail-templates%5Corder-cancelled.html) | HTML | -60 | 0 | -11 | -71 |
| [f:\E-Commerce Website (Full)\backend\email-templates\order-delivered.html](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cemail-templates%5Corder-delivered.html) | HTML | -60 | 0 | -10 | -70 |
| [f:\E-Commerce Website (Full)\backend\email-templates\order-placed.html](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cemail-templates%5Corder-placed.html) | HTML | -71 | 0 | -12 | -83 |
| [f:\E-Commerce Website (Full)\backend\email-templates\order-shipped.html](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cemail-templates%5Corder-shipped.html) | HTML | -69 | 0 | -12 | -81 |
| [f:\E-Commerce Website (Full)\backend\email-templates\payment-approved.html](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cemail-templates%5Cpayment-approved.html) | HTML | -69 | 0 | -12 | -81 |
| [f:\E-Commerce Website (Full)\backend\middleware\auth.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmiddleware%5Cauth.js) | JavaScript | -89 | -1 | -15 | -105 |
| [f:\E-Commerce Website (Full)\backend\middleware\authEnhanced.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmiddleware%5CauthEnhanced.js) | JavaScript | -1 | 0 | -1 | -2 |
| [f:\E-Commerce Website (Full)\backend\middleware\authMiddleware.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmiddleware%5CauthMiddleware.js) | JavaScript | -1 | 0 | 0 | -1 |
| [f:\E-Commerce Website (Full)\backend\middleware\rateLimiter.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmiddleware%5CrateLimiter.js) | JavaScript | -26 | 0 | -5 | -31 |
| [f:\E-Commerce Website (Full)\backend\middleware\validate.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmiddleware%5Cvalidate.js) | JavaScript | -15 | 0 | -4 | -19 |
| [f:\E-Commerce Website (Full)\backend\models\AbandonedCart.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CAbandonedCart.js) | JavaScript | -389 | -11 | -45 | -445 |
| [f:\E-Commerce Website (Full)\backend\models\AdminActionLog.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CAdminActionLog.js) | JavaScript | -24 | 0 | -3 | -27 |
| [f:\E-Commerce Website (Full)\backend\models\Bundle.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CBundle.js) | JavaScript | -340 | -15 | -39 | -394 |
| [f:\E-Commerce Website (Full)\backend\models\Contact.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CContact.js) | JavaScript | -33 | 0 | -2 | -35 |
| [f:\E-Commerce Website (Full)\backend\models\Event.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CEvent.js) | JavaScript | -17 | 0 | -4 | -21 |
| [f:\E-Commerce Website (Full)\backend\models\Inventory.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CInventory.js) | JavaScript | -406 | -4 | -35 | -445 |
| [f:\E-Commerce Website (Full)\backend\models\MessageLog.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CMessageLog.js) | JavaScript | -31 | 0 | -3 | -34 |
| [f:\E-Commerce Website (Full)\backend\models\Newsletter.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CNewsletter.js) | JavaScript | -19 | 0 | -2 | -21 |
| [f:\E-Commerce Website (Full)\backend\models\OneClickCheckout.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5COneClickCheckout.js) | JavaScript | -140 | -11 | -14 | -165 |
| [f:\E-Commerce Website (Full)\backend\models\Order.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5COrder.js) | JavaScript | -68 | -1 | -3 | -72 |
| [f:\E-Commerce Website (Full)\backend\models\Phase1Models.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CPhase1Models.js) | JavaScript | -521 | -61 | -73 | -655 |
| [f:\E-Commerce Website (Full)\backend\models\Phase2Models.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CPhase2Models.js) | JavaScript | -696 | -79 | -134 | -909 |
| [f:\E-Commerce Website (Full)\backend\models\Phase3Models.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CPhase3Models.js) | JavaScript | -737 | -93 | -174 | -1,004 |
| [f:\E-Commerce Website (Full)\backend\models\Product.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CProduct.js) | JavaScript | -83 | -3 | -5 | -91 |
| [f:\E-Commerce Website (Full)\backend\models\Recommendation.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CRecommendation.js) | JavaScript | -85 | 0 | -6 | -91 |
| [f:\E-Commerce Website (Full)\backend\models\Review.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CReview.js) | JavaScript | -400 | -10 | -46 | -456 |
| [f:\E-Commerce Website (Full)\backend\models\User.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CUser.js) | JavaScript | -55 | -2 | -5 | -62 |
| [f:\E-Commerce Website (Full)\backend\models\Wishlist.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cmodels%5CWishlist.js) | JavaScript | -404 | -5 | -50 | -459 |
| [f:\E-Commerce Website (Full)\backend\package-lock.json](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cpackage-lock.json) | JSON | -9,611 | 0 | -1 | -9,612 |
| [f:\E-Commerce Website (Full)\backend\package-production.json](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cpackage-production.json) | JSON | -71 | 0 | -1 | -72 |
| [f:\E-Commerce Website (Full)\backend\package.json](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cpackage.json) | JSON | -51 | 0 | 0 | -51 |
| [f:\E-Commerce Website (Full)\backend\routes\adminRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CadminRoutes.js) | JavaScript | -20 | -5 | -7 | -32 |
| [f:\E-Commerce Website (Full)\backend\routes\analyticsRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CanalyticsRoutes.js) | JavaScript | -6 | 0 | -4 | -10 |
| [f:\E-Commerce Website (Full)\backend\routes\authRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CauthRoutes.js) | JavaScript | -12 | -2 | -4 | -18 |
| [f:\E-Commerce Website (Full)\backend\routes\cartRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CcartRoutes.js) | JavaScript | -15 | -1 | -4 | -20 |
| [f:\E-Commerce Website (Full)\backend\routes\contactRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CcontactRoutes.js) | JavaScript | -8 | -2 | -3 | -13 |
| [f:\E-Commerce Website (Full)\backend\routes\healthRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5ChealthRoutes.js) | JavaScript | -13 | 0 | -4 | -17 |
| [f:\E-Commerce Website (Full)\backend\routes\inventoryRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CinventoryRoutes.js) | JavaScript | -20 | -3 | -6 | -29 |
| [f:\E-Commerce Website (Full)\backend\routes\newsletterRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CnewsletterRoutes.js) | JavaScript | -8 | -2 | -3 | -13 |
| [f:\E-Commerce Website (Full)\backend\routes\orderRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CorderRoutes.js) | JavaScript | -85 | -17 | -21 | -123 |
| [f:\E-Commerce Website (Full)\backend\routes\paymentRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CpaymentRoutes.js) | JavaScript | -13 | -5 | -7 | -25 |
| [f:\E-Commerce Website (Full)\backend\routes\phase1Routes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5Cphase1Routes.js) | JavaScript | -68 | -33 | -23 | -124 |
| [f:\E-Commerce Website (Full)\backend\routes\phase2Routes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5Cphase2Routes.js) | JavaScript | -62 | -28 | -14 | -104 |
| [f:\E-Commerce Website (Full)\backend\routes\phase3Routes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5Cphase3Routes.js) | JavaScript | -84 | -46 | -20 | -150 |
| [f:\E-Commerce Website (Full)\backend\routes\productRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CproductRoutes.js) | JavaScript | -20 | 0 | -4 | -24 |
| [f:\E-Commerce Website (Full)\backend\routes\recommendationRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CrecommendationRoutes.js) | JavaScript | -16 | -3 | -6 | -25 |
| [f:\E-Commerce Website (Full)\backend\routes\reviewRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CreviewRoutes.js) | JavaScript | -18 | -3 | -6 | -27 |
| [f:\E-Commerce Website (Full)\backend\routes\searchRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CsearchRoutes.js) | JavaScript | -14 | -2 | -5 | -21 |
| [f:\E-Commerce Website (Full)\backend\routes\userRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CuserRoutes.js) | JavaScript | -16 | 0 | -3 | -19 |
| [f:\E-Commerce Website (Full)\backend\routes\webhookRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CwebhookRoutes.js) | JavaScript | -6 | 0 | -3 | -9 |
| [f:\E-Commerce Website (Full)\backend\routes\wishlistRoutes.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Croutes%5CwishlistRoutes.js) | JavaScript | -19 | -3 | -6 | -28 |
| [f:\E-Commerce Website (Full)\backend\scripts\migrateProducts.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cscripts%5CmigrateProducts.js) | JavaScript | -67 | 0 | -11 | -78 |
| [f:\E-Commerce Website (Full)\backend\scripts\seedProducts.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cscripts%5CseedProducts.js) | JavaScript | -148 | -8 | -13 | -169 |
| [f:\E-Commerce Website (Full)\backend\scripts\test-approval-system.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cscripts%5Ctest-approval-system.js) | JavaScript | -128 | -25 | -27 | -180 |
| [f:\E-Commerce Website (Full)\backend\scripts\test-whatsapp.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cscripts%5Ctest-whatsapp.js) | JavaScript | -31 | 0 | -4 | -35 |
| [f:\E-Commerce Website (Full)\backend\scripts\verify-system.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cscripts%5Cverify-system.js) | JavaScript | -109 | -9 | -23 | -141 |
| [f:\E-Commerce Website (Full)\backend\server.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cserver.js) | JavaScript | -151 | -20 | -20 | -191 |
| [f:\E-Commerce Website (Full)\backend\services\cartService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CcartService.js) | JavaScript | -320 | -5 | -39 | -364 |
| [f:\E-Commerce Website (Full)\backend\services\emailService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CemailService.js) | JavaScript | -243 | -3 | -25 | -271 |
| [f:\E-Commerce Website (Full)\backend\services\logger.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5Clogger.js) | JavaScript | -23 | 0 | -4 | -27 |
| [f:\E-Commerce Website (Full)\backend\services\mailblusterService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CmailblusterService.js) | JavaScript | -72 | -8 | -13 | -93 |
| [f:\E-Commerce Website (Full)\backend\services\paymentService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CpaymentService.js) | JavaScript | -326 | -54 | -56 | -436 |
| [f:\E-Commerce Website (Full)\backend\services\queueService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CqueueService.js) | JavaScript | -177 | -19 | -29 | -225 |
| [f:\E-Commerce Website (Full)\backend\services\recommendationService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CrecommendationService.js) | JavaScript | -230 | -12 | -36 | -278 |
| [f:\E-Commerce Website (Full)\backend\services\searchService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CsearchService.js) | JavaScript | -255 | -20 | -47 | -322 |
| [f:\E-Commerce Website (Full)\backend\services\whatsappService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cservices%5CwhatsappService.js) | JavaScript | -20 | -1 | -2 | -23 |
| [f:\E-Commerce Website (Full)\backend\tests\QA-SECURITY-CHECKLIST.md](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ctests%5CQA-SECURITY-CHECKLIST.md) | Markdown | -315 | 0 | -117 | -432 |
| [f:\E-Commerce Website (Full)\backend\tests\integration\payment-security.test.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ctests%5Cintegration%5Cpayment-security.test.js) | JavaScript | -219 | -26 | -51 | -296 |
| [f:\E-Commerce Website (Full)\backend\tests\security\jwt.test.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ctests%5Csecurity%5Cjwt.test.js) | JavaScript | -88 | -3 | -24 | -115 |
| [f:\E-Commerce Website (Full)\backend\tests\test_approval_flow.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Ctests%5Ctest_approval_flow.js) | JavaScript | -104 | -8 | -20 | -132 |
| [f:\E-Commerce Website (Full)\backend\utils\inventoryService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cutils%5CinventoryService.js) | JavaScript | -129 | -3 | -23 | -155 |
| [f:\E-Commerce Website (Full)\backend\utils\phoneFormatter.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cutils%5CphoneFormatter.js) | JavaScript | -56 | -10 | -17 | -83 |
| [f:\E-Commerce Website (Full)\backend\utils\tokenService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cutils%5CtokenService.js) | JavaScript | -72 | -2 | -10 | -84 |
| [f:\E-Commerce Website (Full)\backend\utils\whatsappService.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cutils%5CwhatsappService.js) | JavaScript | -162 | -8 | -28 | -198 |
| [f:\E-Commerce Website (Full)\backend\validators\orderValidators.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cvalidators%5CorderValidators.js) | JavaScript | -36 | 0 | -8 | -44 |
| [f:\E-Commerce Website (Full)\backend\validators\productValidators.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cvalidators%5CproductValidators.js) | JavaScript | -28 | 0 | -8 | -36 |
| [f:\E-Commerce Website (Full)\backend\validators\userValidator.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cvalidators%5CuserValidator.js) | JavaScript | -23 | 0 | -5 | -28 |
| [f:\E-Commerce Website (Full)\backend\validators\userValidators.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cvalidators%5CuserValidators.js) | JavaScript | -41 | 0 | -8 | -49 |
| [f:\E-Commerce Website (Full)\backend\workers\notificationWorker.js](/f:%5CE-Commerce%20Website%20(Full)%5Cbackend%5Cworkers%5CnotificationWorker.js) | JavaScript | -165 | -22 | -38 | -225 |
| [f:\E-Commerce Website (Full)\frontend\index.html](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Cindex.html) | HTML | -104 | 0 | -17 | -121 |
| [f:\E-Commerce Website (Full)\frontend\package-lock.json](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Cpackage-lock.json) | JSON | -3,230 | 0 | -1 | -3,231 |
| [f:\E-Commerce Website (Full)\frontend\package.json](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Cpackage.json) | JSON | -33 | 0 | -1 | -34 |
| [f:\E-Commerce Website (Full)\frontend\public\manifest.json](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Cpublic%5Cmanifest.json) | JSON | -26 | 0 | 0 | -26 |
| [f:\E-Commerce Website (Full)\frontend\src\App.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5CApp.tsx) | TypeScript JSX | -61 | -1 | -4 | -66 |
| [f:\E-Commerce Website (Full)\frontend\src\api\client.ts](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Capi%5Cclient.ts) | TypeScript | -77 | -18 | -15 | -110 |
| [f:\E-Commerce Website (Full)\frontend\src\components\AdPlacement.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CAdPlacement.css) | CSS | -266 | 0 | -48 | -314 |
| [f:\E-Commerce Website (Full)\frontend\src\components\AdPlacementZone.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CAdPlacementZone.tsx) | TypeScript JSX | -123 | -5 | -10 | -138 |
| [f:\E-Commerce Website (Full)\frontend\src\components\ErrorBoundary.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CErrorBoundary.tsx) | TypeScript JSX | -71 | 0 | -9 | -80 |
| [f:\E-Commerce Website (Full)\frontend\src\components\Layout.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CLayout.css) | CSS | -115 | 0 | -20 | -135 |
| [f:\E-Commerce Website (Full)\frontend\src\components\Layout.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CLayout.tsx) | TypeScript JSX | -101 | 0 | -8 | -109 |
| [f:\E-Commerce Website (Full)\frontend\src\components\Payment.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CPayment.css) | CSS | -119 | 0 | -21 | -140 |
| [f:\E-Commerce Website (Full)\frontend\src\components\ProtectedRoute.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CProtectedRoute.tsx) | TypeScript JSX | -31 | 0 | -7 | -38 |
| [f:\E-Commerce Website (Full)\frontend\src\components\StripePayment.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5CStripePayment.tsx) | TypeScript JSX | -82 | -2 | -13 | -97 |
| [f:\E-Commerce Website (Full)\frontend\src\components\home\HowItWorks.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5Chome%5CHowItWorks.tsx) | TypeScript JSX | -31 | 0 | -2 | -33 |
| [f:\E-Commerce Website (Full)\frontend\src\components\home\Newsletter.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5Chome%5CNewsletter.tsx) | TypeScript JSX | -49 | 0 | -6 | -55 |
| [f:\E-Commerce Website (Full)\frontend\src\components\home\Testimonials.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5Chome%5CTestimonials.tsx) | TypeScript JSX | -43 | -3 | -4 | -50 |
| [f:\E-Commerce Website (Full)\frontend\src\components\home\TrustSection.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5Chome%5CTrustSection.tsx) | TypeScript JSX | -32 | 0 | -2 | -34 |
| [f:\E-Commerce Website (Full)\frontend\src\components\home\WhyUs.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccomponents%5Chome%5CWhyUs.tsx) | TypeScript JSX | -28 | 0 | -3 | -31 |
| [f:\E-Commerce Website (Full)\frontend\src\config\adConfig.json](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cconfig%5CadConfig.json) | JSON | -121 | 0 | 0 | -121 |
| [f:\E-Commerce Website (Full)\frontend\src\config\firebase.ts](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cconfig%5Cfirebase.ts) | TypeScript | -60 | -4 | -5 | -69 |
| [f:\E-Commerce Website (Full)\frontend\src\context\AuthContext.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccontext%5CAuthContext.tsx) | TypeScript JSX | -145 | -16 | -17 | -178 |
| [f:\E-Commerce Website (Full)\frontend\src\context\ToastContext.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Ccontext%5CToastContext.tsx) | TypeScript JSX | -88 | 0 | -11 | -99 |
| [f:\E-Commerce Website (Full)\frontend\src\hooks\useScrollReveal.ts](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Chooks%5CuseScrollReveal.ts) | TypeScript | -26 | -1 | -8 | -35 |
| [f:\E-Commerce Website (Full)\frontend\src\index.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cindex.css) | CSS | -238 | 0 | -37 | -275 |
| [f:\E-Commerce Website (Full)\frontend\src\main.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cmain.tsx) | TypeScript JSX | -24 | -1 | -3 | -28 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\About.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CAbout.tsx) | TypeScript JSX | -205 | -7 | -17 | -229 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\AdminAnalytics.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CAdminAnalytics.tsx) | TypeScript JSX | -44 | 0 | -5 | -49 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\AdminApprove.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CAdminApprove.tsx) | TypeScript JSX | -56 | -2 | -10 | -68 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\AdminDashboard.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CAdminDashboard.css) | CSS | -147 | 0 | -27 | -174 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\AdminDashboard.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CAdminDashboard.tsx) | TypeScript JSX | -140 | 0 | -13 | -153 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Cart.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CCart.css) | CSS | -433 | 0 | -65 | -498 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Cart.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CCart.tsx) | TypeScript JSX | -103 | 0 | -13 | -116 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Checkout.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CCheckout.css) | CSS | -411 | 0 | -69 | -480 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Checkout.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CCheckout.tsx) | TypeScript JSX | -341 | -7 | -28 | -376 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Collection.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CCollection.css) | CSS | -428 | 0 | -72 | -500 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Collection.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CCollection.tsx) | TypeScript JSX | -304 | -14 | -25 | -343 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Contact.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CContact.css) | CSS | -136 | 0 | -22 | -158 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Contact.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CContact.tsx) | TypeScript JSX | -175 | -12 | -13 | -200 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\FAQ.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CFAQ.css) | CSS | -148 | 0 | -25 | -173 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\FAQ.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CFAQ.tsx) | TypeScript JSX | -104 | -7 | -14 | -125 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Home.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CHome.css) | CSS | -241 | 0 | -37 | -278 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Home.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CHome.tsx) | TypeScript JSX | -1,156 | -44 | -90 | -1,290 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\HomeWithAds.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CHomeWithAds.tsx) | TypeScript JSX | -29 | -6 | -5 | -40 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Login.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CLogin.css) | CSS | -245 | 0 | -39 | -284 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Login.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CLogin.tsx) | TypeScript JSX | -193 | -7 | -223 | -423 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\NotFound.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CNotFound.tsx) | TypeScript JSX | -37 | 0 | -3 | -40 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\OrderConfirmation.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5COrderConfirmation.tsx) | TypeScript JSX | -113 | -2 | -13 | -128 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\OrderDetail.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5COrderDetail.css) | CSS | -205 | 0 | -36 | -241 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\OrderDetail.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5COrderDetail.tsx) | TypeScript JSX | -170 | -6 | -17 | -193 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\PaymentSuccess.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CPaymentSuccess.css) | CSS | -96 | 0 | -18 | -114 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\PaymentSuccess.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CPaymentSuccess.tsx) | TypeScript JSX | -48 | -1 | -8 | -57 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Privacy.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CPrivacy.tsx) | TypeScript JSX | -51 | 0 | -5 | -56 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Product.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CProduct.css) | CSS | -208 | 0 | -31 | -239 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Product.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CProduct.tsx) | TypeScript JSX | -135 | -5 | -19 | -159 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Profile.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CProfile.css) | CSS | -159 | 0 | -31 | -190 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Profile.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CProfile.tsx) | TypeScript JSX | -235 | 0 | -14 | -249 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Register.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CRegister.tsx) | TypeScript JSX | -9 | -1 | -4 | -14 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Terms.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CTerms.tsx) | TypeScript JSX | -54 | 0 | -6 | -60 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Wishlist.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CWishlist.css) | CSS | -125 | 0 | -21 | -146 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\Wishlist.tsx](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5CWishlist.tsx) | TypeScript JSX | -120 | -2 | -12 | -134 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\index.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5Cindex.css) | CSS | -5 | 0 | -2 | -7 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\server.js](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5Cserver.js) | JavaScript | -90 | -13 | -19 | -122 |
| [f:\E-Commerce Website (Full)\frontend\src\pages\service.js](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cpages%5Cservice.js) | JavaScript | -154 | -5 | -14 | -173 |
| [f:\E-Commerce Website (Full)\frontend\src\styles\Animations.css](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cstyles%5CAnimations.css) | CSS | -95 | 0 | -22 | -117 |
| [f:\E-Commerce Website (Full)\frontend\src\vite-env.d.ts](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Csrc%5Cvite-env.d.ts) | TypeScript | -24 | -1 | -7 | -32 |
| [f:\E-Commerce Website (Full)\frontend\tsconfig.json](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Ctsconfig.json) | JSON with Comments | -17 | 0 | -1 | -18 |
| [f:\E-Commerce Website (Full)\frontend\vercel.json](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Cvercel.json) | JSON | -12 | 0 | 0 | -12 |
| [f:\E-Commerce Website (Full)\frontend\vite.config.ts](/f:%5CE-Commerce%20Website%20(Full)%5Cfrontend%5Cvite.config.ts) | TypeScript | -44 | -2 | -2 | -48 |
| [f:\E-Commerce Website (Full)\package-lock.json](/f:%5CE-Commerce%20Website%20(Full)%5Cpackage-lock.json) | JSON | -3,014 | 0 | -1 | -3,015 |
| [f:\E-Commerce Website (Full)\package.json](/f:%5CE-Commerce%20Website%20(Full)%5Cpackage.json) | JSON | -18 | 0 | 0 | -18 |
| [f:\E-Commerce Website (Full)\scripts\check-environment.ps1](/f:%5CE-Commerce%20Website%20(Full)%5Cscripts%5Ccheck-environment.ps1) | PowerShell | 0 | 0 | -1 | -1 |
| [f:\E-Commerce Website (Full)\scripts\start-backend.ps1](/f:%5CE-Commerce%20Website%20(Full)%5Cscripts%5Cstart-backend.ps1) | PowerShell | 0 | 0 | -1 | -1 |
| [f:\E-Commerce Website (Full)\sitemap.xml](/f:%5CE-Commerce%20Website%20(Full)%5Csitemap.xml) | XML | -18 | 0 | -2 | -20 |
| [f:\E-Commerce Website (Full)\start-dev.ps1](/f:%5CE-Commerce%20Website%20(Full)%5Cstart-dev.ps1) | PowerShell | -42 | -8 | -12 | -62 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details