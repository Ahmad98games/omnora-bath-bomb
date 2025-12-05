import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import client, { trackEvent } from '../api/client'
import './Product.css'
import { useToast } from '../context/ToastContext'
import { FALLBACK_IMAGE } from '../constants'
import { SkeletonProductDetail } from '../components/Skeleton'
import '../components/Skeleton.css'

// Define the guaranteed minimum loading time in milliseconds (3 seconds)
const MINIMUM_LOAD_TIME = 3000; 

type Product = {
    _id: string
    name: string
    price: number
    image: string
    category: string
    description?: string
    isFeatured?: boolean
    isNew?: boolean
    stock?: number
}

// Define the structure of an item stored in the local storage cart
type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}


export default function Product() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)
    const { showToast } = useToast()

    useEffect(() => {
        let isMounted = true;
        // 1. Record the start time for the minimum load check
        const startTime = Date.now();
        
        async function load() {
            let fetchedProduct: Product | null = null;
            let fetchError: string | null = null;

            try {
                setLoading(true);
                setError(null);
                
                // --- API Fetch ---
                const res = await client.get(`/products/${id}`);
                
                let data = res.data;
                if (data.data) {
                    data = data.data;
                }
                
                fetchedProduct = data;

            } catch (e: any) {
                fetchError = e?.message || 'Failed to load product. Check your connection.';
            }

            if (!isMounted) return;

            // 2. Enforce Minimum Load Time
            const timeElapsed = Date.now() - startTime;
            const delayRemaining = MINIMUM_LOAD_TIME - timeElapsed;
            
            // Wait for the remaining time (or 0 if MINIMUM_LOAD_TIME already passed)
            await new Promise(resolve => setTimeout(resolve, Math.max(0, delayRemaining)));
            
            if (!isMounted) return;

            // 3. Update state after the minimum time is guaranteed
            setProduct(fetchedProduct);
            setError(fetchError);
            setLoading(false);
        }

        load();
        return () => { isMounted = false }
    }, [id])

    const addToCart = () => {
        if (!product) {
            showToast('Cannot add product: data unavailable.', 'error');
            return;
        }

        // Use the defined CartItem type
        const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
        const existing = cart.find((i: CartItem) => i.id === product._id);
        
        // Ensure quantity doesn't exceed available stock if stock is known
        const currentStock = product.stock;
        let finalQuantity = quantity;

        if (existing) {
            // Check stock limit for the combined quantity
            if (currentStock !== undefined && (existing.quantity + quantity) > currentStock) {
                showToast(`Cannot add ${quantity}: only ${currentStock - existing.quantity} available.`, 'warning');
                finalQuantity = currentStock - existing.quantity;
            }
            existing.quantity += finalQuantity;
        } else {
            // Check stock limit for the initial quantity
            if (currentStock !== undefined && quantity > currentStock) {
                showToast(`Cannot add ${quantity}: only ${currentStock} available.`, 'warning');
                finalQuantity = currentStock;
            }
            cart.push({
                id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: finalQuantity
            });
        }
        
        // Only update if we are adding at least 1 item
        if (finalQuantity > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
            window.dispatchEvent(new Event('cart-updated'));
            trackEvent({
                type: 'add_to_cart',
                sessionId: localStorage.getItem('sid') || '',
                payload: { productId: product._id, price: product.price, quantity: finalQuantity }
            });
            showToast(`Added ${finalQuantity} x ${product.name} to bag`, 'success');
        } else if (finalQuantity <= 0 && currentStock !== undefined) {
            showToast(`Cannot add to cart. Maximum stock reached or item out of stock.`, 'warning');
        }
    }

    // --- Quantity Selector Logic Refined ---
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        const maxStock = product?.stock !== undefined ? product.stock : Infinity;
        
        let newQuantity = value || 1;
        newQuantity = Math.max(1, newQuantity); // Minimum of 1
        
        if (newQuantity > maxStock) {
            newQuantity = maxStock;
        }

        setQuantity(newQuantity);
    };

    const handleQuantityUpdate = (delta: number) => {
        const maxStock = product?.stock !== undefined ? product.stock : Infinity;
        let newQuantity = quantity + delta;
        
        newQuantity = Math.max(1, newQuantity); // Minimum of 1
        
        if (newQuantity > maxStock) {
            newQuantity = maxStock;
        }
        
        setQuantity(newQuantity);
    }
    
    const maxQuantityReached = product?.stock !== undefined && quantity >= product.stock;
    const isOutOfStock = product?.stock === 0;

    // ------------------------------------
    // --- RENDERING ---
    // ------------------------------------

    if (loading) {
        return (
            <div className="product-page">
                <SkeletonProductDetail />
            </div>
        )
    }

    if (error || !product) {
        return (
            <div className="product-page">
                <div className="empty-state">
                    <h3>Product Not Found 😟</h3>
                    <p>{error || 'The product you are looking for does not exist.'}</p>
                    <button onClick={() => navigate('/collection')} className="add-to-cart-btn">
                        Browse Collection
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="product-page">
            <div className="breadcrumbs">
                <Link to="/">Home</Link> / <Link to="/collection">Collection</Link> / <span>{product.name}</span>
            </div>

            <div className="product-detail-container">
                <div className="product-image-section">
                    <img 
                        src={product.image || FALLBACK_IMAGE} 
                        alt={product.name} 
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                    />
                </div>

                <div className="product-info-section">
                    <h1 className="product-name">{product.name}</h1>

                    {product.isNew && (
                        <span className="badge badge-new">NEW</span>
                    )}
                    {product.isFeatured && (
                        <span className="badge badge-featured">★ FEATURED</span>
                    )}

                    <p className="product-price">PKR **{product.price.toLocaleString()}**</p>

                    {product.description && (
                        <div className="product-description">
                            <h3>Description</h3>
                            <p>{product.description}</p>
                        </div>
                    )}

                    <div className="product-actions">
                        <div className="quantity-selector">
                            <label htmlFor="quantity">Quantity:</label>
                            <div className="quantity-controls">
                                <button
                                    onClick={() => handleQuantityUpdate(-1)}
                                    disabled={quantity <= 1 || isOutOfStock}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                    // Set max attribute based on stock for better mobile keyboard UX
                                    max={product.stock !== undefined ? product.stock : undefined} 
                                    disabled={isOutOfStock}
                                />
                                <button 
                                    onClick={() => handleQuantityUpdate(1)}
                                    disabled={maxQuantityReached || isOutOfStock}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button 
                            onClick={addToCart} 
                            className="add-to-cart-btn"
                            disabled={isOutOfStock || quantity <= 0}
                        >
                            {isOutOfStock ? 'Out of Stock' : 'Add to Bag'}
                        </button>
                    </div>

                    {product.stock !== undefined && (
                        <p className={`stock-info ${isOutOfStock ? 'out-of-stock' : ''}`}>
                            {isOutOfStock ? 'Out of Stock 😥' : `${product.stock} in stock`}
                            {product.stock > 0 && product.stock <= 5 && <span className='low-stock-warning'> (Low Stock!)</span>}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}