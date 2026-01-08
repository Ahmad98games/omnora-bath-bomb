import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './OmnoraCarousel.css';

// Import assets
import slide3 from '../assets/bathbomb/3.png';
import slide2 from '../assets/bathbomb/2.png';
import slide1 from '../assets/bathbomb/1.png';
import slide4 from '../assets/bathbomb/4.png';
import slide5 from '../assets/bathbomb/5.png';

// 1. Enhanced Data Structure for "Editorial" feel
const slides = [
    { 
        src: slide3, 
        title: "Velvet Void", 
        badge: "Best Seller",
        desc: "Deep relaxation with notes of lavender and charcoal." 
    },
    { 
        src: slide2, 
        title: "Solar Flare", 
        badge: "New Arrival",
        desc: "Citrus bursts that awaken the senses and energize the soul." 
    },
    { 
        src: slide1, 
        title: "Rose Quartz", 
        badge: "Limited Edition",
        desc: "Infused with real petals for a romantic, silky embrace." 
    },
    { 
        src: slide4, 
        title: "Ocean Mist", 
        badge: "Therapeutic",
        desc: "Sea salts and eucalyptus to clear the mind and body." 
    },
    { 
        src: slide5, 
        title: "Golden Hour", 
        badge: "Luxury",
        desc: "Shimmering gold mica with a warm vanilla finish." 
    }
];

const AUTOPLAY_DURATION = 5000; // 5 seconds

const Carousel: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    const progressInterval = useRef<NodeJS.Timeout | null>(null);

    // Reset progress bar animation
    const resetProgress = () => {
        setProgress(0);
        if (progressInterval.current) clearInterval(progressInterval.current);
        
        const step = 100 / (AUTOPLAY_DURATION / 50); // Calculate step for 50ms updates
        
        progressInterval.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + step;
            });
        }, 50);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
        resetProgress();
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        resetProgress();
    };

    // Autoplay Logic
    useEffect(() => {
        resetProgress();
        const autoPlay = setInterval(() => {
            nextSlide();
        }, AUTOPLAY_DURATION);

        return () => {
            clearInterval(autoPlay);
            if (progressInterval.current) clearInterval(progressInterval.current);
        };
    }, [current]);

    return (
        <div className="carousel-magnum">
            {/* Slides Layer */}
            {slides.map((slide, idx) => (
                <div 
                    key={idx} 
                    className={`magnum-slide ${idx === current ? 'active' : ''}`}
                >
                    <div className="magnum-image-wrapper">
                        <img src={slide.src} alt={slide.title} className="magnum-img" />
                    </div>
                    
                    <div className="magnum-content">
                        <span className="magnum-badge">{slide.badge}</span>
                        <h2 className="magnum-title">{slide.title}</h2>
                        <p className="magnum-desc">{slide.desc}</p>
                    </div>
                </div>
            ))}

            {/* Controls Layer */}
            <div className="magnum-controls">
                <div className="magnum-counter">
                    {String(current + 1).padStart(2, '0')} 
                    <span>/ {String(slides.length).padStart(2, '0')}</span>
                </div>
                
                <button className="nav-btn" onClick={prevSlide} aria-label="Previous Slide">
                    <ArrowLeft size={20} />
                </button>
                <button className="nav-btn" onClick={nextSlide} aria-label="Next Slide">
                    <ArrowRight size={20} />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="magnum-progress-container">
                <div 
                    className="magnum-progress-bar" 
                    style={{ width: `${progress}%` }} 
                />
            </div>
        </div>
    );
};

export default Carousel;