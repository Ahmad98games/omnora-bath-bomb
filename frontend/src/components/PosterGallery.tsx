import React from 'react';
import './OmnoraPosterGallery.css';

interface Poster {
    id: number;
    image: string;
    alt: string;
    title?: string; // Optional title for the new design
}

// Added conceptual titles to match the "Magnum Opus" theme
const posters: Poster[] = [
    { id: 1, image: '/images/posters/1.png', alt: 'Bath Bomb Poster 1', title: 'The Royal Edition' },
    { id: 2, image: '/images/posters/2.png', alt: 'Bath Bomb Poster 2', title: 'Midnight Void' },
    { id: 3, image: '/images/posters/3.png', alt: 'Bath Bomb Poster 3', title: 'Solar Essence' },
    { id: 4, image: '/images/posters/4.png', alt: 'Bath Bomb Poster 4', title: 'Liquid Dreams' },
    { id: 5, image: '/images/posters/5.png', alt: 'Bath Bomb Poster 5', title: 'Crystal Form' },
];

const PosterGallery: React.FC = () => {
    // Separate the Hero (first item) from the Grid (rest)
    const [heroPoster, ...gridPosters] = posters;

    return (
        <section className="gallery-magnum">
            <div className="gallery-noise" />
            
            <div className="container">
                {/* HEADER */}
                <div className="gallery-header-magnum">
                    <h2 className="gallery-title">
                        <span>Visual Archive</span>
                        Exhibition
                    </h2>
                    <div className="gallery-meta">
                        A curated selection of Omnora Sanctuary visual assets. 
                        Exploring the intersection of luxury and ritual.
                    </div>
                </div>

                {/* MAIN LAYOUT */}
                <div className="gallery-grid-magnum">
                    
                    {/* LEFT: HERO POSTER */}
                    <div className="poster-artifact poster-hero">
                        <div className="artifact-img-wrapper">
                            <img 
                                src={heroPoster.image} 
                                alt={heroPoster.alt} 
                                className="artifact-img" 
                                loading="lazy" 
                            />
                            <div className="artifact-overlay">
                                <span className="artifact-id">NO. 0{heroPoster.id}</span>
                                <h3 className="artifact-title">{heroPoster.title || 'Featured Work'}</h3>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: SUB GRID */}
                    <div className="gallery-sub-grid">
                        {gridPosters.map((poster) => (
                            <div key={poster.id} className="poster-artifact">
                                <div className="artifact-img-wrapper">
                                    <img 
                                        src={poster.image} 
                                        alt={poster.alt} 
                                        className="artifact-img" 
                                        loading="lazy" 
                                    />
                                    <div className="artifact-overlay">
                                        <span className="artifact-id">NO. 0{poster.id}</span>
                                        <h3 className="artifact-title" style={{ fontSize: '1.2rem' }}>
                                            {poster.title || 'Collection Piece'}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PosterGallery;