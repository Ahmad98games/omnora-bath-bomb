import React, { memo } from 'react';
import './Skeleton.css';

/**
 * 🧱 SkeletonCard Component
 * Represents a placeholder for a generic item card (e.g., in a product list).
 * Uses React.memo for performance optimization since the content is static.
 */
export const SkeletonCard: React.FC = memo(() => (
    <div className="skeleton-card skeleton-pulse-group">
        {/* Image Placeholder (e.g., 100% width, fixed height) */}
        <div className="skeleton-image" />
        
        {/* Title Placeholder (e.g., 80% width) */}
        <div className="skeleton-text" />
        
        {/* Price/Short Detail Placeholder (e.g., 40% width) */}
        <div className="skeleton-text short" />
    </div>
));

// ---

/**
 * 📄 SkeletonProductDetail Component
 * Represents a complex placeholder for a product detail page.
 * Mimics the two-column layout (Image & Info) common in detail views.
 * Uses React.memo for performance optimization since the content is static.
 */
export const SkeletonProductDetail: React.FC = memo(() => (
    <div className="product-detail-container skeleton-detail skeleton-pulse-group">
        
        {/* Left Column: Image Section */}
        <div className="product-image-section">
            <div className="skeleton-image large" />
        </div>
        
        {/* Right Column: Info Section */}
        <div className="product-info-section">
            {/* Title Placeholder */}
            <div className="skeleton-text title" />
            
            {/* Price/Badge Placeholder */}
            <div className="skeleton-text price" />
            
            {/* Description Paragraphs Placeholder */}
            <div className="skeleton-text paragraph" />
            <div className="skeleton-text paragraph" />
            <div className="skeleton-text paragraph short" /> {/* Shortened line for visual variety */}
            
            {/* Action Button Placeholder */}
            <div className="skeleton-text button" />
        </div>
    </div>
));

// Add display names for better debugging
SkeletonCard.displayName = 'SkeletonCard';
SkeletonProductDetail.displayName = 'SkeletonProductDetail';