import React, { useState, useEffect, CSSProperties, useMemo, useCallback } from 'react';
import { FALLBACK_IMAGE } from '../constants';

interface SmartImageProps {
    src: string;
    alt: string;
    className?: string;
    aspectRatio?: string; // e.g., "4/5", "16/9" for CLS prevention
    onLoad?: () => void;
    onError?: () => void;
    priority?: boolean; // Eager loading for above-fold images
    style?: CSSProperties;
    // Added: Optional skeleton styling override
    skeletonClassName?: string;
}

/**
 * SmartImage Component
 * * Handles:
 * - Skeleton display until image loads
 * - Smooth fade-in transition
 * - Automatic fallback on error
 * - Aspect ratio locking to prevent CLS
 * - Lazy/eager loading support
 * - Resets loading state when the 'src' prop changes
 */
export default function SmartImage({
    src,
    alt,
    className = '',
    aspectRatio,
    onLoad,
    onError,
    priority = false,
    style = {},
    skeletonClassName = '',
}: SmartImageProps) {
    // State to track if the current image has finished loading
    const [imageLoaded, setImageLoaded] = useState(false);
    // State to track if the current image failed to load
    const [imageError, setImageError] = useState(false);

    // --- EFFECT: Reset state when SRC changes ---
    useEffect(() => {
        // When the source URL changes, we reset the loading state
        // to show the skeleton for the new image.
        setImageLoaded(false);
        setImageError(false);
    }, [src]);

    // --- Handlers ---
    const handleLoad = useCallback(() => {
        setImageLoaded(true);
        onLoad?.();
    }, [onLoad]);

    const handleError = useCallback(() => {
        // On error, we set error=true and immediately set loaded=true
        // so the fallback image (FALLBACK_IMAGE) can be displayed with opacity 1.
        setImageError(true);
        setImageLoaded(true); 
        onError?.();
    }, [onError]);
    
    // --- Styles Memoization ---

    const currentSrc = imageError ? FALLBACK_IMAGE : src;
    
    const containerStyle: CSSProperties = useMemo(() => ({
        position: 'relative',
        width: '100%',
        // Use padding-top trick if aspectRatio is not broadly supported or for older browsers
        // For modern usage, setting aspectRatio directly is preferred.
        aspectRatio: aspectRatio || 'auto',
        overflow: 'hidden',
        backgroundColor: 'var(--glass-bg, rgba(255, 255, 255, 0.05))',
        borderRadius: 'var(--radius-md, 8px)',
        ...style,
    }), [aspectRatio, style]);

    const imageStyle: CSSProperties = useMemo(() => ({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        // Fade-in effect controlled by opacity
        opacity: imageLoaded ? 1 : 0, 
        transition: 'opacity 0.3s ease-in-out',
    }), [imageLoaded]);

    // Note: The shimmer animation CSS must be defined globally (e.g., in a CSS file)
    // For example:
    /*
    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    */
    const skeletonStyle: CSSProperties = useMemo(() => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // This linear gradient/animation creates the shimmer effect
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite linear',
        opacity: imageLoaded ? 0 : 1, // Fade out the skeleton when image is loaded
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: 'none',
    }), [imageLoaded]);

    // --- Render ---

    return (
        <div style={containerStyle} className={className}>
            
            {/* Skeleton overlay (Conditional display is managed by opacity) */}
            {/* Using a key here ensures the skeleton reappears correctly when src changes, 
                though the useEffect reset handles it primarily. */}
            <div 
                key={`${currentSrc}-skeleton`}
                style={skeletonStyle} 
                className={skeletonClassName}
            />

            {/* Actual image element */}
            <img
                key={currentSrc} // Key forces remount when src changes, ensuring onLoad/onError fire reliably
                src={currentSrc}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? 'eager' : 'lazy'}
                style={imageStyle}
            />
        </div>
    );
}