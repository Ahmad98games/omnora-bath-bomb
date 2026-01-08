import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import client, { trackEvent } from '../api/client';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useToast } from '../context/ToastContext';
import AdPlacementZone from '../components/AdPlacementZone';
import SmartImage from '../components/SmartImage';
import adConfig from '../config/adConfig.json';
import './OmnoraCollection.css';

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

const SKELETON_COUNT = 6;

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type PriceRange = 'all' | 'under-500' | '500-1000' | 'over-1000';
type SortOption = 'default' | 'new' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc' | 'featured';

// ============================================================================
// ENHANCED SUB-COMPONENTS
// ============================================================================

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => (
  <article className="card-magnum">
    <Link to={`/product/${product._id}`} className="card-img-box">
      <SmartImage
        src={product.image}
        alt={product.name}
        className="card-img"
        priority={true}
      />

      <div className="card-badges">
        {product.isNew && <span className="badge-neon">New Arrival</span>}
        {product.isFeatured && <span className="badge-neon badge-gold">Featured</span>}
      </div>

      {/* Desktop Hover Overlay */}
      <div className="card-overlay">
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
          className="btn-quick-add"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Bag
        </button>
      </div>
    </Link>

    <div className="card-details">
      <Link to={`/product/${product._id}`} className="card-title">
        {product.name}
      </Link>

      {product.description && (
        <p className="card-desc">{product.description}</p>
      )}

      <div className="card-price">
        PKR {product.price.toLocaleString()}
      </div>
    </div>

    {/* Mobile-only button */}
    <div className="mobile-btn-wrapper">
      <button
        onClick={() => onAddToCart(product)}
        className="btn-quick-add"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Bag
      </button>
    </div>
  </article>
);

const SkeletonCard = () => <div className="skeleton-magnum" aria-label="Loading product" />;

// ============================================================================
// MAIN COLLECTION COMPONENT
// ============================================================================

export default function Collection() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [priceRange, setPriceRange] = useState<PriceRange>('all');

  const { showToast } = useToast();
  useScrollReveal();

  // --- DATA FETCHING ---
  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      let fetchedData: Product[] = [];
      let fetchError: string | null = null;

      try {
        setLoading(true);
        setError(null);
        const query = searchParams.get('q');
        const category = searchParams.get('category');
        let response;

        try {
          if (query) {
            response = await client.get('/products/search', { params: { q: query } });
          } else if (category) {
            response = await client.get(`/products/category/${encodeURIComponent(category)}`);
          } else {
            response = await client.get('/products');
          }
        } catch (apiError) {
          console.warn('API fallback:', apiError);
          const { fallbackProducts } = await import('../data/fallbackProducts');
          response = { data: { success: true, data: fallbackProducts } };
        }

        if (!isMounted) return;

        let data = response.data || [];
        if (data.data && Array.isArray(data.data)) data = data.data;
        else if (Array.isArray(response.data)) data = response.data;
        fetchedData = Array.isArray(data) ? data : [];

      } catch (e) {
        console.error('Product fetch error:', e);
        fetchError = 'Unable to load products. Please try again.';
        try {
          const { fallbackProducts } = await import('../data/fallbackProducts');
          fetchedData = fallbackProducts;
        } catch {
          fetchedData = [];
        }
      }

      if (!isMounted) return;

      // Apply filters
      const filtered = fetchedData.filter((p) => {
        if (priceRange === 'under-500') return p.price < 500;
        if (priceRange === '500-1000') return p.price >= 500 && p.price <= 1000;
        if (priceRange === 'over-1000') return p.price > 1000;
        return true;
      });

      // Apply sorting
      const sorted = [...filtered];
      switch (sortBy) {
        case 'price-low':
          sorted.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          sorted.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'featured':
          sorted.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
          break;
        case 'new':
          sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
        default:
          // Keep original order for 'default'
          break;
      }

      setProducts(sorted);
      setError(fetchError);
      setLoading(false);
    }

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, [searchParams, sortBy, priceRange]);

  const handleAddToCart = (product: Product) => {
    try {
      const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const existing = cart.find((item) => item.id === product._id);

      if (existing) {
        existing.quantity++;
      } else {
        cart.push({
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cart-updated'));

      trackEvent({
        type: 'add_to_cart',
        sessionId: localStorage.getItem('sid') || '',
        payload: {
          productId: product._id,
          price: product.price
        }
      });

      showToast(`${product.name} added to cart`, 'success');
    } catch (error) {
      console.error('Cart error:', error);
      showToast('Failed to add item to cart', 'error');
    }
  };

  // Get current filter info for display
  const getFilterInfo = () => {
    const query = searchParams.get('q');
    const category = searchParams.get('category');

    if (query) return `Search: "${query}"`;
    if (category) return `Category: ${category}`;
    return 'All Products';
  };

  // --- RENDER ---
  return (
    <div className="collection-page">
      <div className="noise-layer" />

      {/* 1. CINEMATIC HERO */}
      <header className="collection-hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop"
            alt="Collection ambience"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>OMNORA</span>
            The Collection
          </h1>
          <p className="hero-subtitle">
            Handmade bath bombs for your daily relaxation.
          </p>
        </div>
      </header>

      {/* 2. MAIN LAYOUT */}
      <div className="container">

        {/* Breadcrumbs */}
        <nav className="breadcrumbs" style={{ marginTop: '2rem' }} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{getFilterInfo()}</span>
        </nav>

        {/* Top Ad */}
        <div style={{ marginBottom: '3rem' }}>
          <AdPlacementZone
            type="banner"
            config={adConfig.collection.topBanner}
            zoneName="Top Banner"
          />
        </div>

        {/* 3. STICKY TOOLBAR */}
        <div className="toolbar-sticky">
          <div className="container toolbar-inner">
            <div className="toolbar-count">
              Viewing <strong>{products.length}</strong> {products.length === 1 ? 'Item' : 'Items'}
            </div>

            <div className="toolbar-controls">
              {/* Price Filter */}
              <div className="select-wrapper">
                <select
                  className="magnum-select"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value as PriceRange)}
                  aria-label="Filter by price range"
                >
                  <option value="all">Price: All</option>
                  <option value="under-500">Under PKR 500</option>
                  <option value="500-1000">PKR 500 - 1000</option>
                  <option value="over-1000">Over PKR 1000</option>
                </select>
                <span className="select-arrow" aria-hidden="true">▼</span>
              </div>

              {/* Sort Filter */}
              <div className="select-wrapper">
                <select
                  className="magnum-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  aria-label="Sort products"
                >
                  <option value="default">Sort: Featured</option>
                  <option value="new">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
                <span className="select-arrow" aria-hidden="true">▼</span>
              </div>
            </div>
          </div>
        </div>

        <div className="layout-magnum">
          {/* 4. PRODUCT GRID */}
          <main className="product-grid-magnum" role="main">
            {loading ? (
              Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            ) : error ? (
              <div className="empty-magnum">
                <h3 className="empty-title">Connection Lost</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Unable to load products. Please check your connection.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn-quick-add"
                  style={{ maxWidth: '200px', margin: '0 auto' }}
                >
                  Retry
                </button>
              </div>
            ) : products.length === 0 ? (
              <div className="empty-magnum">
                <h3 className="empty-title">No Products Found</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Try adjusting your filters or search terms.
                </p>
                <Link
                  to="/collection"
                  className="btn-quick-add"
                  style={{ maxWidth: '200px', margin: '0 auto', display: 'block', textAlign: 'center' }}
                >
                  View All
                </Link>
              </div>
            ) : (
              products.map(product => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))
            )}
          </main>

          {/* 5. SIDEBAR (Desktop Only) */}
          <aside className="collection-sidebar" role="complementary">
            <div className="ad-zone">
              <AdPlacementZone
                type="sidebar"
                config={adConfig.collection.sidebarAd}
                zoneName="Sidebar Ad"
              />
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}