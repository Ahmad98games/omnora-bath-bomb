import React, { useEffect, useRef } from 'react';
import { Gamepad, Bot, Laptop, Brush, Sprout, Lightbulb, BookOpen, Handshake, Globe, UserCircle } from 'lucide-react';
import './About.css';

interface AboutComponentProps {
  onBack: () => void;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ onBack }) => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 } // Trigger slightly earlier for smoother mobile feel
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="about-page">
      <div className="noise-layer"></div>

      <div className="about-container">
        
        {/* --- HERO SECTION --- */}
        <section className="about-hero">
          <div className="hero-super-title">OMNORA</div>
          <h1 className="section-header-magnum">
            We Are The <br />
            <span className="highlight-cyan">Movement.</span>
          </h1>
          <p className="text-editorial">
            Fueled by ethical AI, bold creativity, and a passion for building a better tomorrow.
            We don't just follow trends; we engineer them.
          </p>
        </section>

        {/* --- WHO WE ARE (Animated) --- */ }
        <div ref={addToRefs} className="reveal-block">
          <h2 className="section-header-magnum">The Vision</h2>
          <p className="text-editorial">
            Omnora Store is a digital powerhouse born from the vision of <span className="highlight-gold">Ahmad Mahboob</span>.
            We drive innovation through game development, AI solutions, and digital excellence.
          </p>
        </div>

        {/* --- MISSION STATEMENT --- */}
        <div ref={addToRefs} className="reveal-block" style={{ marginTop: '6rem' }}>
          <div style={{ borderLeft: '4px solid var(--neon-gold)', paddingLeft: '2rem' }}>
            <h2 className="section-header-magnum" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
            <p className="text-editorial" style={{ fontStyle: 'italic', fontSize: '1.5rem', color: '#fff' }}>
              "To generate revenue through <span className="highlight-cyan">ethical, halal ventures</span>—AI innovation, game development, and digital mastery—while inspiring our generation to turn skills into impact."
            </p>
          </div>
        </div>

        {/* --- WHAT WE DO (Tech Grid) --- */}
        <div ref={addToRefs} className="reveal-block" style={{ marginTop: '6rem' }}>
          <h2 className="section-header-magnum">Capabilities</h2>
          <div className="tech-grid">
            {[
              { icon: Gamepad, title: 'Game Development', desc: 'From 3D endless runners to bubble shooters—mobile games that captivate.' },
              { icon: Bot, title: 'AI Solutions', desc: 'Automation tools and digital products that solve real problems.' },
              { icon: Laptop, title: 'Web & Design', desc: 'Stunning sites, dashboards, and 3D visuals that stand out.' },
              { icon: Brush, title: 'Graphics Design', desc: 'Stunning design, thumbnails, logos, and banners that stand out.' }
            ].map((item, idx) => (
              <div key={idx} className="tech-card">
                <item.icon className="tech-icon" size={32} />
                <h3 className="tech-title">{item.title}</h3>
                <p className="tech-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      {/* --- FOUNDER SPOTLIGHT --- */}
<div ref={addToRefs} className="reveal-block">
  <div className="founder-section">
    <div className="founder-header">
      {/* Fixed: Added url() and corrected the string syntax */}
      <div 
        className="founder-avatar" 
        style={{ 
          backgroundImage: `url('/src/assets/ingredients/me.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>
      <div>
        <h3 className="founder-name">Ahmad Mahboob</h3>
        <span className="founder-role">Founder • 18 Years Old</span>
      </div>
    </div>
    <p className="text-editorial">
      i am Ahmad Mahboob and i am the founder of Omnora Store. I am a 19 years old student and i am not only founder but also a Game/Web Developer and Designer We'll Prove 
      <span className="highlight-gold"> age is no barrier to impact.</span>
    </p>
          </div>
        </div>

        {/* --- CORE VALUES --- */}
        <div ref={addToRefs} className="reveal-block">
          <h2 className="section-header-magnum">Core Code</h2>
          <div className="values-list">
            {[
              { icon: Sprout, text: 'Growth through skills, not just degrees.' },
              { icon: Lightbulb, text: 'Simplicity and clarity in every creation.' },
              { icon: BookOpen, text: 'Always learning, always innovating.' },
              { icon: Handshake, text: 'Ethics and respect in all we do.' },
              { icon: Globe, text: 'Impact that inspires the next gen.' }
            ].map((item, idx) => (
              <div key={idx} className="value-row">
                <item.icon className="highlight-cyan" size={24} />
                <span className="value-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA --- */}
        <div ref={addToRefs} className="reveal-block" style={{ marginTop: '8rem', textAlign: 'center' }}>
          <h2 className="section-header-magnum">Shape The Future</h2>
          <p className="text-editorial" style={{ margin: '0 auto' }}>
            Whether you're a creator, a visionary, or just curious—join us to build something extraordinary.
          </p>
          
          <a href="mailto:pakahmad9815@gmail.com" className="btn-neon">
            Initiate Contact
          </a>
          
          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            For inquiries: <a href="mailto:omnorainfo28@gmail.com" className="contact-link-neon">omnorainfo28@gmail.com</a>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="footer-magnum">
          <img src="/images/omnora labs.png" alt="Omnora Labs" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>&copy; 2025 Omnora Labs. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default AboutComponent;