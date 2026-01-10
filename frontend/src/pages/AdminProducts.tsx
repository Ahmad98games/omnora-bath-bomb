import React, { useState, useEffect, useCallback } from 'react';
import client from '../api/client';
import { useToast } from '../context/ToastContext';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import './AdminProducts.css';

// 1. Strict Typing: Defined explicit interfaces for API responses if needed
interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image: string;
    isFeatured?: boolean;
    isNew?: boolean;
}

// 2. Constants: Keep default state immutable and separate
const INITIAL_FORM_STATE: Omit<Product, '_id'> = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    image: '',
    isFeatured: false,
    isNew: false
};

const AdminProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null); // Store ID instead of full object for simpler logic
    
    // Using a specific type for form state allows TS to auto-suggest properties
    const [formData, setFormData] = useState<Omit<Product, '_id'>>(INITIAL_FORM_STATE);
    
    const { showToast } = useToast();

    // 3. Efficiency: useCallback prevents this function from being recreated on every render
    const fetchProducts = useCallback(async () => {
        try {
            const { data } = await client.get('/products?limit=100');
            if (data.success) {
                setProducts(data.data);
            }
        } catch (error) {
            showToast('Failed to load products', 'error');
        } finally {
            setLoading(false);
        }
    }, [showToast]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleEdit = (product: Product) => {
        setEditingId(product._id);
        // Destructure to remove _id from formData to match type
        const { _id, ...rest } = product;
        setFormData(rest);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        // TODO: Replace strictly with a custom Modal in the future.
        if (!window.confirm('Are you sure you want to delete this product?')) return;

        try {
            await client.delete(`/products/${id}`);
            showToast('Product deleted successfully', 'success');
            // Optimistic update: Remove from UI immediately instead of refetching
            setProducts(prev => prev.filter(p => p._id !== id));
        } catch (error) {
            showToast('Failed to delete product', 'error');
        }
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData(INITIAL_FORM_STATE);
        setIsModalOpen(false);
    };

    const openCreateModal = () => {
        setEditingId(null);
        setFormData(INITIAL_FORM_STATE);
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingId) {
                await client.put(`/products/${editingId}`, formData);
                showToast('Product updated successfully', 'success');
            } else {
                await client.post('/products', formData);
                showToast('Product created successfully', 'success');
            }
            resetForm();
            fetchProducts();
        } catch (error: any) {
            // Better error extraction
            const msg = error.response?.data?.message || error.response?.data?.error || 'Operation failed';
            showToast(msg, 'error');
        }
    };

    // 4. Type Guarding: Properly typing the event eliminates 'any'
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        setFormData(prev => {
            let newValue: string | number | boolean = value;

            if (type === 'checkbox') {
                // Type casting is safe here because we checked type === 'checkbox'
                newValue = (e.target as HTMLInputElement).checked;
            } else if (type === 'number') {
                newValue = value === '' ? 0 : parseFloat(value);
            }

            return {
                ...prev,
                [name]: newValue
            };
        });
    };

    if (loading) return <div className="p-8 text-center">Loading products...</div>;

    return (
        <div className="admin-products">
            <div className="page-header">
                <h2>Product Management</h2>
                <button className="add-btn" onClick={openCreateModal}>
                    <Plus size={20} />
                    <span>Add Product</span>
                </button>
            </div>

            <div className="products-table-container">
                <table className="products-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>
                                    <div className="product-cell">
                                        <img 
                                            src={product.image || 'https://placehold.co/40'} 
                                            alt={product.name} 
                                            className="product-thumb" 
                                        />
                                        <div className="product-info">
                                            <div className="product-name">{product.name}</div>
                                            <div className="badges">
                                                {product.isFeatured && <span className="status-badge featured">Featured</span>}
                                                {product.isNew && <span className="status-badge new">New</span>}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.category}</td>
                                <td>PKR {product.price.toLocaleString()}</td>
                                <td>
                                    <span className={product.stock < 10 ? 'text-danger' : ''}>
                                        {product.stock}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button 
                                            className="icon-btn edit-btn" 
                                            onClick={() => handleEdit(product)}
                                            aria-label="Edit"
                                        >
                                            <Edit2 size={18} />
                                        </button>
                                        <button 
                                            className="icon-btn delete-btn" 
                                            onClick={() => handleDelete(product._id)}
                                            aria-label="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content animate-fade-in">
                        <div className="modal-header">
                            <h3>{editingId ? 'Edit Product' : 'Add New Product'}</h3>
                            <button className="close-modal" onClick={resetForm}>
                                <X size={24} />
                            </button>
                        </div>
                        <form className="product-form" onSubmit={handleSubmit}>
                            {/* Form content remains mostly same, but removed inline styles */}
                            <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input id="name" name="name" value={formData.name} onChange={handleChange} required minLength={2} />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={3} />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="price">Price (PKR)</label>
                                    <input id="price" type="number" name="price" value={formData.price} onChange={handleChange} required min={0} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stock">Initial Stock</label>
                                    <input id="stock" type="number" name="stock" value={formData.stock} onChange={handleChange} required min={0} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <input id="category" name="category" value={formData.category} onChange={handleChange} placeholder="e.g., bath-bombs" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image URL</label>
                                <input id="image" name="image" value={formData.image} onChange={handleChange} placeholder="/images/..." required />
                            </div>

                            <div className="checkbox-row">
                                <label className="checkbox-label">
                                    <input type="checkbox" name="isFeatured" checked={!!formData.isFeatured} onChange={handleChange} />
                                    Featured
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" name="isNew" checked={!!formData.isNew} onChange={handleChange} />
                                    New Arrival
                                </label>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn-secondary" onClick={resetForm}>Cancel</button>
                                <button type="submit" className="btn-primary">
                                    {editingId ? 'Update Product' : 'Create Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;