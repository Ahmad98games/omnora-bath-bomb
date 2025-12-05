import React, { useMemo } from 'react';
// Assuming the hook file is named 'useMinimumLoadingTime.ts'
import { useMinimumLoadingTime } from '../hooks/useMinimumLoadingTime';

interface LoadingWrapperProps {
    /** The content to be displayed once loading is complete. */
    children: React.ReactNode;
    /** The raw loading state (e.g., data is fetching || images are loading). */
    isLoading: boolean;
    /** The skeleton component to display during the loading phase. */
    skeleton: React.ReactNode;
    /** The minimum duration (in milliseconds) the skeleton should be displayed. Default is 300ms. */
    minDisplayTime?: number; 
    /** Optional class name for the wrapper div. */
    className?: string;
}

/**
 * LoadingWrapper Component
 * * Enforces a minimum display time for the skeleton component, ensuring a smoother
 * transition and preventing flickering if data loads too quickly.
 * * It returns the `skeleton` if either `isLoading` is true OR the minimum time 
 * has not yet elapsed since `isLoading` last became true.
 */
export default function LoadingWrapper({
    children,
    isLoading,
    skeleton,
    minDisplayTime = 300,
    className = '',
}: LoadingWrapperProps) {
    // This hook manages the timer logic. It returns true if the skeleton should still be shown.
    const shouldDisplaySkeleton = useMinimumLoadingTime(isLoading, minDisplayTime);

    // Apply basic styling/structure
    const wrapperClass = `loading-wrapper ${className}`;

    if (shouldDisplaySkeleton) {
        // Return the skeleton inside the wrapper div
        return (
            <div className={wrapperClass} aria-busy="true">
                {skeleton}
            </div>
        );
    }

    // Return the final content
    return (
        <div className={wrapperClass} aria-busy="false">
            {children}
        </div>
    );
}