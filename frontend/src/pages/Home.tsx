import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, HandPlatter, Package, Flower } from 'lucide-react';
import client from '../api/client';
import { useToast } from '../context/ToastContext';
import Carousel from '../components/Carousel';
import PosterGallery from '../components/PosterGallery';
import heroVideo from '../components/home/hero_video.mp4';
import bakingSodaImg from '../assets/ingredients/baking_soda.png';
import citricAcidImg from '../assets/ingredients/citric_acid.png';
import epsomSaltImg from '../assets/ingredients/epsom_salt.png';
import polysorbateImg from '../assets/ingredients/polysorbate_80.png';
import foodColorImg from '../assets/ingredients/food_color.png';
import coconutOilImg from '../assets/ingredients/coconut_oil.png';
import roseImg from '../assets/ingredients/rose.jpg';
import './OmnoraFinal.css';


// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CategoryCardProps {
  to: string;
  title: string;
  subtitle: string;
  backgroundClass: string;
}

interface IngredientCardProps {
  image: string;
  name: string;
  description?: string;
}

// ============================================================================
// CHILD COMPONENTS
// ============================================================================

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="value-card-magnum">
    <div className="vc-icon">{icon}</div>
    <h3 className="vc-title">{title}</h3>
    <p className="vc-desc">{description}</p>
  </div>
);

const CategoryCard: React.FC<CategoryCardProps> = ({ to, title, subtitle, backgroundClass }) => (
  <Link to={to} className="cat-card-magnum">
    <div className="cat-bg">
      <div className={backgroundClass} style={{ width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </div>
    <div className="cat-content">
      <h3 className="cat-title">{title}</h3>
      <span className="cat-sub">{subtitle}</span>
    </div>
  </Link>
);

const IngredientCard: React.FC<IngredientCardProps> = ({ image, name, description }) => (
  <div className="ing-card-visual">
    <div className="ing-img-container">
      <img src={image} alt={name} loading="lazy" />
    </div>
    <h3 className="ing-name">{name}</h3>
    {description && <p className="ing-desc">{description}</p>}
  </div>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubscribing(true);

    try {
      await client.post('/newsletter/subscribe', { email });
      showToast('Successfully subscribed to the newsletter!', 'success');
      setEmail('');
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      const errorMessage = error.response?.data?.message || 'Failed to subscribe. Please try again.';
      showToast(errorMessage, 'error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="home-magnum">
      <div className="noise-layer" />

      {/* Hero Section with Video */}
      <section className="hero-magnum">
        <div className="hero-backdrop">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-video"
          >
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop"
              alt="Omnora Atmosphere"
            />
          </video>
        </div>

        <div className="container hero-content">
          <span className="hero-badge">Handmade with Love</span>
          <h1 className="hero-title">
            Relax & <br />
            <i>Unwind</i>
          </h1>
          <p className="hero-subtitle">
            Treat yourself to our handmade bath bombs. Made with natural ingredients to help you relax after a long day.
          </p>
          <div className="btn-group">
            <Link to="/collection" className="btn-cinema">
              Shop Now <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn-ghost">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="section-pad">
        <div className="container">
          <Carousel />
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-pad">
        <div className="container" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Our Collections</h2>
          <Link
            to="/collection"
            style={{
              color: 'var(--neon-cyan)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.8rem',
              fontWeight: 600
            }}
          >
            View All →
          </Link>
        </div>

        <div className="cat-scroll-container">
          <div style={{ width: 'max(1.5rem, calc((100vw - 1400px) / 2))', flexShrink: 0 }} />

          <CategoryCard
            to="/collection?category=Relaxation"
            title="Unwind"
            subtitle="Lavender & Chamomile"
            backgroundClass="bg--"
          />
          <CategoryCard
            to="/collection?category=Energy"
            title="Revitalize"
            subtitle="Citrus & Peppermint"
            backgroundClass="bg--"
          />
          <CategoryCard
            to="/collection?category=Skincare"
            title="Nourish"
            subtitle="Oatmeal & Shea Butter"
            backgroundClass="bg--"
          />
          <div style={{ width: '1.5rem', flexShrink: 0 }} />
        </div>
      </section>

      {/* Poster Gallery Section */}
      <PosterGallery />

      {/* Value Propositions */}
      <section className="section-pad container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="values-grid">
          <ValueCard
            icon={<Flower size={32} />}
            title="Natural & Safe"
            description="We use simple, skin-safe ingredients you can trust."
          />
          <ValueCard
            icon={<HandPlatter size={32} />}
            title="Handmade"
            description="Each bath bomb is pressed by hand in small batches."
          />
          <ValueCard
            icon={<Package size={32} />}
            title="Fast Delivery"
            description="Free shipping on orders over $50. Secure packaging."
          />
          <ValueCard
            icon={<Sparkles size={32} />}
            title="Amazing Scents"
            description="Fragrances that actually last and smell incredible."
          />
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Ingredients</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              We believe in transparency. Here is exactly what goes into our bath bombs.
            </p>
          </div>

          <div className="ingredients-grid-visual">
            <IngredientCard image={bakingSodaImg} name="Baking Soda" description="Sodium Bicarbonate" />
            <IngredientCard image={citricAcidImg} name="Citric Acid" description="Create the fizz" />
            <IngredientCard image={epsomSaltImg} name="Epsom Salt" description="For muscle relaxation" />
            <IngredientCard image={polysorbateImg} name="Polysorbate 80" description="Emulsifier (Tween 80)" />
            <IngredientCard image={foodColorImg} name="Food Color" description="Vibrant & Safe" />
            <IngredientCard image={coconutOilImg} name="Coconut Oil" description="Moisturizing" />
           <IngredientCard image={roseImg} name="Rose fragrance" description="For Nose friendly" />

          </div>

          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            background: 'rgba(255, 255, 255, 0.02)'
          }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Safety First</strong>
            We prioritize your safety. Isopropyl alcohol is used for sanitization during our process.
          </div>
        </div>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.1rem' }}>
          <span style={{ color: '#fff' }}>Soon Your Feedback and Reviews will be Added here with Complete Screenshots and Details. and Soon we will provide Proper reviews Section So your Feedback can be Added Here for trust. </span>
          <br />
          <span style={{ color: '#fff' }}>We are working hard to make it better.</span>
        </p>
        </div>
        
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-magnum">
        <div className="container">
          <h2 className="section-title" style={{ margin: 0 }}>Stay in the Loop</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.1rem' }}>
            Subscribe for new scent updates and 15% off your first order.
          </p>

          <form className="nl-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              className="nl-input"
              placeholder="email@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubscribing}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="nl-btn"
              disabled={isSubscribing}
              aria-label="Subscribe to newsletter"
            >
              {isSubscribing ? 'Subscribing...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}