import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import client from '../api/client';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            await client.post('/newsletter', { email });
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                setEmail('');
                setMessage('');
            }, 3000);
        } catch (error: any) {
            setStatus('error');
            setMessage('Failed to subscribe');
        }
    };

    return (
        <footer className="footer-enhanced">
            <div className="header-container footer-grid-enhanced">

                {/* 1. BRAND COLUMN */}
                <div className="footer-brand-col">
                    <Link to="/" className="footer-logo">
                        <img src="/images/omnora store.png" alt="Omnora" className="footer-logo-img" />
                        <span className="footer-logo-text">OMNORA STORE</span>
                    </Link>
                    <p className="footer-desc">
                        Curating artifacts for the modern sanctuary. Where precision meets cyberpunk aesthetics.
                        Handcrafted in Lahore.
                    </p>
                    <div className="subsidiary-badge">
                        <span>OPERATED BY</span>
                        <img src="/images/omnora labs.png" alt="Omnora Labs" />
                    </div>
                </div>

                {/* 2. EXPLORE COLUMN */}
                <div className="footer-links-col">
                    <h4>Explore</h4>
                    <nav>
                        <Link to="/collection">Shop Collection</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact Support</Link>
                        <Link to="/faq">FAQs</Link>
                        <Link to="/profile">My Account</Link>
                        <Link to="tech">Tech Stack</Link>
                    </nav>
                </div>

                {/* 3. LEGAL COLUMN */}
                <div className="footer-links-col">
                    <h4>Legal</h4>
                    <nav>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/shipping">Shipping Policy</Link>
                        <Link to="/refunds">Refund Policy</Link>
                    </nav>
                </div>

                {/* 4. NEWSLETTER & CONNECT */}
                <div className="footer-newsletter-col">
                    <h4>Stay Connected</h4>
                    <p>Subscribe for exclusive drops and updates.</p>

                    <form onSubmit={handleSubscribe} className="footer-subscribe-form">
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading' || status === 'success'}
                            />
                            <button type="submit" disabled={status === 'loading' || status === 'success'}>
                                {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> :
                                    status === 'success' ? <span style={{ color: 'var(--neon-green)' }}>✓</span> :
                                        <ArrowRight size={18} />}
                            </button>
                        </div>
                        {status === 'error' && <span className="status-msg error">{message}</span>}
                        {status === 'success' && <span className="status-msg success">Subscribed successfully</span>}
                    </form>

                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom-bar">
                <div className="header-container">
                    <div className="copyright">
                        © {new Date().getFullYear()} Omnora Labs. All Rights Reserved.
                    </div>
                    <div className="credits">
                        Engineered by Ahmad Mahboob
                    </div>
                </div>
            </div>
        </footer>
    );
}
