import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, HandPlatter, Package, Flower } from 'lucide-react';
import client from '../api/client';
import { useToast } from '../context/ToastContext';
import './Home.css';
import Carousel from '../components/Carousel';
// import { SkeletonCard } from '../components/Skeleton'; // Removed
// import '../components/Skeleton.css'; // Removed
// import { FALLBACK_IMAGE } from '../constants'; // Removed

/*
// Product interface is no longer needed since featured products are removed
interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    bestseller?: boolean;
}
*/

export default function Home() {
    // const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]); // Removed
    // const [loading, setLoading] = useState(true); // Removed
    const [email, setEmail] = useState('');
    const [subscribing, setSubscribing] = useState(false);
    const { showToast } = useToast();

    /*
    // useEffect for fetching products is removed
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await client.get('/products/featured');
                const products = Array.isArray(data) ? data : data.products || [];
                setFeaturedProducts(products.slice(0, 4));
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    */

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubscribing(true);
        try {
            await client.post('/newsletter/subscribe', { email });
            showToast('Successfully subscribed to the newsletter!', 'success');
            setEmail('');
        } catch (error: any) {
            console.error('Newsletter subscription error:', error);
            const msg = error.response?.data?.message || 'Failed to subscribe. Please try again.';
            showToast(msg, 'error');
        } finally {
            setSubscribing(false);
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-visuals"></div>
                <div className="hero-content container">
                    <h1 className="hero-title">Experience the Art of Luxurious Self-Care</h1>
                    <p className="hero-subtitle">
                        Discover handcrafted bath artistry infused with organic essential oils to soothe your body and elevate your daily ritual.
                    </p>
                    <Link to="/collection" className="cta-button primary">
                        Shop Our Collection <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Carousel */}
            <Carousel />

            {/* Value Props */}
            <section className="values-section container">
                <div className="value-card">
                    <div className="value-icon"><Flower size={32} /></div>
                    <h3>Natural & Organic</h3>
                    <p>Infused with pure, plant-based botanicals, free from harsh chemicals.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><HandPlatter size={32} /></div>
                    <h3>Artisan Crafted</h3>
                    <p>Lovingly made in small batches, ensuring consistent quality and care.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><Package size={32} /></div>
                    <h3>Secure Delivery</h3>
                    <p>Free shipping on orders over $50. Discreetly and elegantly packaged.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><Sparkles size={32} /></div>
                    <h3>Sensory Escape</h3>
                    <p>Curated aromatherapy scents for a truly luxurious, mindful soak.</p>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="categories-section container">
                <h2 className="section-title">Find Your Perfect Sanctuary</h2>
                <div className="categories-grid">
                    <Link to="/collection?category=Relaxation" className="category-card relax-bg">
                        <div className="category-content">
                            <h3>Unwind</h3>
                            <span>Midnight Lavender & Chamomile</span>
                        </div>
                    </Link>
                    <Link to="/collection?category=Energy" className="category-card energy-bg">
                        <div className="category-content">
                            <h3>Revitalize</h3>
                            <span>Zesty Citrus & Peppermint</span>
                        </div>
                    </Link>
                    <Link to="/collection?category=Skincare" className="category-card skin-bg">
                        <div className="category-content">
                            <h3>Nourish</h3>
                            <span>Oatmeal, Milk & Shea Butter</span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Featured Products section REMOVED */}

            {/* Newsletter */}
            <section className="newsletter-section">
                <div className="container newsletter-container">
                    <div className="newsletter-content">
                        <h2>Join the Omnora Sanctuary</h2>
                        <p>Subscribe for exclusive scent previews, self-care tips, and 15% off your first order.</p>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="cta-button primary" disabled={subscribing}>
                                {subscribing ? 'Subscribing...' : 'Subscribe & Get 15% Off'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

/*
// ProductCard component is no longer needed since featured products are removed
const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="product-card">
            <Link to={`/product/${product._id}`}>
                <div className="product-image-placeholder"><img src={product.image} alt={product.name} loading="lazy" /></div>
                <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">PKR {product.price.toLocaleString()}</p>
                </div>
            </Link>
        </div>
    );
};
*/