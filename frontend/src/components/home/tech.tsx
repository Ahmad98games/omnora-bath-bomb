import React, { useState } from 'react';
import { Terminal, Sparkles, ArrowRight, Circle, Zap, Code2, Database, Cloud, Cpu, Layers } from 'lucide-react';
import './TechStack.css';

const TechStackShowcase = () => {
    const [hoveredTech, setHoveredTech] = useState<number | null>(null);

    const technologies = [
        {
            id: 1,
            name: "React & TypeScript",
            category: "Frontend",
            description: "Building type-safe, component-driven interfaces. React's declarative nature paired with TypeScript's static typing creates a robust foundation.",
            why: "Compile-time error catching and superior IDE support.",
            icon: Code2
        },
        {
            id: 2,
            name: "Node.js & Express",
            category: "Backend",
            description: "Handling server-side logic with JavaScript's async capabilities. Express keeps things minimal while offering complete control.",
            why: "Unified language stack for faster shipping.",
            icon: Terminal
        },
        {
            id: 3,
            name: "MongoDB",
            category: "Database",
            description: "Document-based storage mirroring JSON. Flexible schemas allow data structures to evolve without painful migrations.",
            why: "Aggregation pipelines are powerful for analytics.",
            icon: Database
        },
        {
            id: 4,
            name: "Redis",
            category: "Caching",
            description: "In-memory data store for sub-millisecond reads. Used for session management, rate limiting, and caching hot data.",
            why: "Essential for reducing database load.",
            icon: Zap
        },
        {
            id: 5,
            name: "Tailwind CSS",
            category: "Styling",
            description: "Utility-first engine for rapid UI development. Keeps styling collocated with markup for better maintainability.",
            why: "Constraint-based design system out of the box.",
            icon: Sparkles
        },
        {
            id: 6,
            name: "AWS S3",
            category: "Storage",
            description: "Object storage for assets and backups. Scales infinitely and integrates with CloudFront for global distribution.",
            why: "Battle-tested reliability.",
            icon: Cloud
        }
    ];

    return (
        <div className="tech-container">
            <div className="tech-wrapper">

                {/* --- HEADER --- */}
                <header className="tech-header">
                    <div className="tech-badge">
                        <Cpu size={14} />
                        <span>SYSTEM ARCHITECTURE</span>
                    </div>

                    <h1 className="tech-title">
                        <span>Engineering and development</span>
                        <span className="highlight" data-text="Excellence">Excellence</span>
                    </h1>

                    <p className="tech-subtitle">
                       See How we Built this. As this is Built and managed in custom way Every Single Component is built with care and attention to detail. This stack is chosen not for hype, but for
                        reliability, scalability, and developer experience.
                    </p>
                    <p className="tech-subtitle">
                        We have Clarify Twice Of times By Seeing Other Stores .And By keeping In mind to make it fully diffrent In the way so The customer can have a unique experience.
                    </p>
                    <br />
                    <span className="tech-subtitle">

                        For Education Purposes Only
                    </span>
                    
                </header>


                {/* --- STATS --- */}
                <div className="stats-bar">
                    <div className="stat-item">
                        <div className="pulse-dot"></div>
                        <span>System Operational</span>
                    </div>
                    <div className="stat-item">
                        <Layers size={14} />
                        <span>Full-Stack MERN</span>
                    </div>
                </div>

                {/* --- GRID --- */}
                <div className="tech-grid">
                    {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.id}
                                className="tech-card"
                                onMouseEnter={() => setHoveredTech(tech.id)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <div className="card-header">
                                    <div className="tech-icon-box">
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <span className="tech-category">{tech.category}</span>
                                </div>

                                <h3 className="tech-name">{tech.name}</h3>
                                <p className="tech-description">{tech.description}</p>

                                <div className="tech-why">
                                    <strong>Why?</strong> {tech.why}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- ARCHITECTURE --- */}
                <section className="architecture-section">
                    <div className="arch-info">
                        <h2>Data Flow</h2>
                        <p className="tech-description">
                            A unidirectional data flow ensures predictability. The frontend consumes APIs,
                            the backend processes logic, and the database stores truth.
                        </p>
                    </div>

                    <div className="arch-diagram">
                        {[
                            { from: "Client", to: "React + Vite Bundle", icon: Code2 },
                            { from: "Gateway", to: "Node.js Express API", icon: Terminal },
                            { from: "Persistence", to: "MongoDB Atlas", icon: Database },
                        ].map((step, i) => (
                            <div key={i} className="flow-step">
                                <span className="step-label">{step.from}</span>
                                <ArrowRight className="step-arrow" size={16} />
                                <span className="step-content">{step.to}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PHILOSOPHY --- */}
                <section className="philosophy-grid">
                    {[
                        { title: "Simplicity", desc: "Complexity is the enemy of reliability." },
                        { title: "Type Safety", desc: "Catch errors at compile time, not runtime." },
                        { title: "Performance", desc: "Speed is a feature." }
                    ].map((p, i) => (
                        <div key={i} className="philosophy-item">
                            <div className="philosophy-number">0{i + 1}</div>
                            <h3>{p.title}</h3>
                            <p className="tech-description">{p.desc}</p>
                        </div>
                    ))}
                </section>

            </div>
        </div>
    );
};

export default TechStackShowcase;