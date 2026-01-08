import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import client from '../api/client'
import { openWhatsApp } from '../utils/whatsappOrderService'
import './Checkout.css'

export default function OrderConfirmation() {
    const { id } = useParams()
    const location = useLocation()

    const [order, setOrder] = useState<any>(location.state?.order || null)
    const [loading, setLoading] = useState(!location.state?.order)

    useEffect(() => {
        if (order) return;

        const fetchOrder = async () => {
            try {
                if (!id) return;

                const res = await client.get(`/orders/${id}`)
                if (res.data.success) {
                    setOrder(res.data.order)
                }
            } catch (error: any) {
                console.warn('Failed to fetch order (likely guest user):', error)
            } finally {
                setLoading(false)
            }
        }
        fetchOrder()
    }, [id, order])

    const handlePaidClick = () => {
        const orderData = order || {
            orderNumber: id,
            total: 0,
            paymentMethod: 'unknown'
        };
        openWhatsApp(orderData, 'payment')
    }

    const handleContinueClick = () => {
        const orderData = order || {
            orderNumber: id,
            total: 0,
            paymentMethod: 'unknown'
        };
        openWhatsApp(orderData, 'automation')
    }

    if (!loading && !order) {
        const fallbackMessage = id
            ? `Hello, I placed an order with ID ${id}. Can you please search for it?`
            : `Hello, I placed an order. Can you please check?`;
        const fallbackUrl = `https://wa.me/923097613611?text=${encodeURIComponent(fallbackMessage)}`;

        return (
            <div className="checkout-container">
                <div className="checkout-card animate-fade-in-up" style={{ 
                    textAlign: 'center', 
                    padding: '3rem 2rem',
                    maxWidth: '500px',
                    margin: '0 auto'
                }}>
                    <div className="success-icon-wrapper" style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 1.5rem',
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(37, 211, 102, 0.1))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid rgba(0, 240, 255, 0.3)',
                        animation: 'pulse-success 2s ease-in-out infinite'
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="var(--neon-cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <h1 style={{ 
                        fontSize: '2rem', 
                        marginBottom: '0.75rem',
                        background: 'linear-gradient(135deg, var(--neon-cyan), #25D366)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '700'
                    }}>
                        Order Placed!
                    </h1>
                    
                    <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '1rem', 
                        marginBottom: '2rem',
                        lineHeight: '1.6'
                    }}>
                        Your order has been successfully recorded. Please contact us on WhatsApp to confirm payment details.
                    </p>

                    <div style={{ 
                        background: 'rgba(37, 211, 102, 0.08)', 
                        padding: '1.5rem', 
                        borderRadius: '12px', 
                        marginBottom: '2rem',
                        border: '1px solid rgba(37, 211, 102, 0.2)'
                    }}>
                        <button
                            onClick={() => window.open(fallbackUrl, '_blank')}
                            className="luxury-button"
                            style={{ 
                                width: '100%', 
                                background: 'linear-gradient(135deg, #25D366, #20BD5F)', 
                                borderColor: '#25D366', 
                                color: 'white', 
                                fontWeight: '600',
                                fontSize: '1.05rem',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Contact Support
                        </button>
                    </div>

                    <Link to="/" style={{ 
                        color: 'var(--text-muted)', 
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'color 0.3s'
                    }}>
                        ← Return Home
                    </Link>

                    <style>{`
                        @keyframes pulse-success {
                            0%, 100% { transform: scale(1); opacity: 1; }
                            50% { transform: scale(1.05); opacity: 0.9; }
                        }
                    `}</style>
                </div>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="checkout-container">
                <div className="checkout-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        border: '4px solid rgba(0, 240, 255, 0.1)',
                        borderTop: '4px solid var(--neon-cyan)',
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                    <style>
                        {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
                    </style>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Verifying order details...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <div className="checkout-card animate-fade-in-up" style={{ maxWidth: '700px', margin: '0 auto' }}>
                {/* SUCCESS HEADER */}
                <div style={{ 
                    textAlign: 'center', 
                    marginBottom: '2.5rem', 
                    paddingBottom: '2rem',
                    position: 'relative'
                }}>
                    <div className="success-icon-wrapper" style={{
                        width: '90px',
                        height: '90px',
                        margin: '0 auto 1.5rem',
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(37, 211, 102, 0.15))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3px solid rgba(0, 240, 255, 0.4)',
                        position: 'relative',
                        animation: 'success-bounce 0.6s ease-out'
                    }}>
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="var(--neon-cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div style={{
                            position: 'absolute',
                            inset: '-5px',
                            borderRadius: '50%',
                            border: '2px solid rgba(0, 240, 255, 0.2)',
                            animation: 'ripple 1.5s ease-out infinite'
                        }}></div>
                    </div>

                    <h1 style={{ 
                        fontSize: '2.25rem', 
                        marginBottom: '0.75rem',
                        background: 'linear-gradient(135deg, var(--neon-cyan), #25D366)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '700',
                        letterSpacing: '-0.02em'
                    }}>
                        Order Successfully Placed!
                    </h1>
                    
                    <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '1.05rem',
                        lineHeight: '1.6',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        Thank you for shopping with <span style={{ color: 'var(--neon-cyan)', fontWeight: '600' }}>Omnora</span>. Your order details are below.
                    </p>

                    {/* ORDER INFO PILLS */}
                    <div style={{
                        marginTop: '2rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            padding: '0.875rem 1.5rem',
                            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))',
                            border: '1px solid rgba(0, 240, 255, 0.3)',
                            borderRadius: '50px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minWidth: '160px'
                        }}>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Order ID</span>
                            <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.1rem', fontFamily: 'monospace' }}>
                                {order.orderNumber || order._id}
                            </div>
                        </div>
                        
                        <div style={{
                            padding: '0.875rem 1.5rem',
                            background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(37, 211, 102, 0.05))',
                            border: '1px solid rgba(37, 211, 102, 0.3)',
                            borderRadius: '50px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minWidth: '160px'
                        }}>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Total Amount</span>
                            <div style={{ fontWeight: '700', color: '#25D366', fontSize: '1.25rem' }}>
                                PKR {(order.totalAmount !== undefined ? order.totalAmount : order.total)?.toLocaleString() || '0'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ACTION OPTIONS */}
                <div style={{ display: 'grid', gap: '1.5rem' }}>

                    {/* PRIMARY: WHATSAPP FLOW */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.08), rgba(37, 211, 102, 0.03))',
                        border: '2px solid rgba(37, 211, 102, 0.3)',
                        borderRadius: '16px',
                        padding: '2rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: '#25D366',
                            color: 'white',
                            padding: '0.375rem 0.875rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            Recommended
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ 
                                color: '#25D366', 
                                marginBottom: '0.75rem', 
                                fontSize: '1.5rem',
                                fontWeight: '700'
                            }}>
                                Complete on WhatsApp
                            </h3>
                            <p style={{ 
                                color: 'var(--text-secondary)',
                                lineHeight: '1.6',
                                fontSize: '1rem'
                            }}>
                                Get instant support and guided payment assistance from our team
                            </p>
                        </div>

                        <button
                            onClick={handleContinueClick}
                            className="luxury-button"
                            style={{
                                width: '100%',
                                background: 'linear-gradient(135deg, #25D366, #20BD5F)',
                                borderColor: '#25D366',
                                color: 'white',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                padding: '1.125rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                boxShadow: '0 8px 20px rgba(37, 211, 102, 0.35)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.45)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.35)';
                            }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Continue on WhatsApp
                        </button>
                    </div>

                    {/* DIVIDER */}
                    <div style={{ textAlign: 'center', position: 'relative', margin: '0.5rem 0' }}>
                        <span style={{ 
                            background: 'var(--bg-dark)', 
                            padding: '0 1.25rem', 
                            color: 'var(--text-muted)', 
                            position: 'relative', 
                            zIndex: 1,
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            OR
                        </span>
                        <div style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: 0, 
                            right: 0, 
                            height: '1px', 
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)' 
                        }}></div>
                    </div>

                    {/* SECONDARY: MANUAL PAYMENT */}
                    <div style={{ 
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '2rem'
                    }}>
                        <h3 style={{ 
                            color: 'var(--text-primary)', 
                            marginBottom: '1.25rem', 
                            textAlign: 'center',
                            fontSize: '1.35rem',
                            fontWeight: '700'
                        }}>
                            Pay Now & Share Receipt
                        </h3>

                        {/* PAYMENT METHODS */}
                        <div style={{
                            display: 'grid',
                            gap: '1rem',
                            marginBottom: '1.75rem'
                        }}>
                            <div style={{ 
                                background: 'linear-gradient(135deg, rgba(230, 0, 35, 0.08), rgba(230, 0, 35, 0.03))', 
                                padding: '1.25rem', 
                                borderRadius: '12px', 
                                borderLeft: '4px solid #E60023'
                            }}>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem'
                                }}>
                                    <div>
                                        <div style={{ color: '#E60023', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                                            JazzCash / EasyPaisa
                                        </div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem', fontFamily: 'monospace' }}>
                                            0321 8338768
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            Razia Sultana
                                        </div>
                                    </div>
                                    <div style={{
                                        background: 'rgba(230, 0, 35, 0.15)',
                                        padding: '0.375rem 0.75rem',
                                        borderRadius: '8px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        color: '#E60023'
                                    }}>
                                        INSTANT
                                    </div>
                                </div>
                            </div>

                            <div style={{ 
                                background: 'linear-gradient(135deg, rgba(98, 54, 255, 0.08), rgba(98, 54, 255, 0.03))', 
                                padding: '1.25rem', 
                                borderRadius: '12px', 
                                borderLeft: '4px solid #6236FF'
                            }}>
                                <div style={{ color: '#6236FF', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                                    Meezan Bank
                                </div>
                                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                    Contact us on WhatsApp for IBAN details
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handlePaidClick}
                            className="luxury-button"
                            style={{
                                width: '100%',
                                background: 'transparent',
                                border: '2px solid var(--neon-cyan)',
                                color: 'var(--neon-cyan)',
                                padding: '1.125rem',
                                fontSize: '1.05rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            📤 I've Paid, Send Receipt
                        </button>
                    </div>

                </div>

                {/* FOOTER */}
                <div style={{ 
                    textAlign: 'center', 
                    marginTop: '3rem', 
                    paddingTop: '2rem', 
                    borderTop: '1px solid rgba(255,255,255,0.08)' 
                }}>
                    <Link to="/" style={{ 
                        color: 'var(--text-muted)', 
                        textDecoration: 'none', 
                        fontSize: '0.95rem', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--neon-cyan)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        ← Return to Home
                    </Link>
                </div>

                <style>{`
                    @keyframes success-bounce {
                        0% { transform: scale(0) rotate(-45deg); }
                        50% { transform: scale(1.1) rotate(5deg); }
                        100% { transform: scale(1) rotate(0deg); }
                    }
                    @keyframes ripple {
                        0% { transform: scale(1); opacity: 0.6; }
                        100% { transform: scale(1.4); opacity: 0; }
                    }
                `}</style>
            </div>
        </div>
    )
}