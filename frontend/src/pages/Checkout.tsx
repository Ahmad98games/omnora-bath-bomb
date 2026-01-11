
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import client, { trackEvent } from '../api/client'
import './Checkout.css'
import { useToast } from '../context/ToastContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

type CartItem = { id: string; name: string; price: number; image?: string; quantity: number }

export default function Checkout() {
  const [items, setItems] = useState<CartItem[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [paymentTab, setPaymentTab] = useState<'local' | 'international'>('local')
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const { showToast } = useToast()
  const formRef = useScrollReveal()
  const summaryRef = useScrollReveal()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Pakistan',
    notes: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
    setItems(data)
    if (data.length === 0) {
      navigate('/cart')
    }
  }, [navigate])

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.quantity, 0), [items])
  const tax = useMemo(() => subtotal * 0.05, [subtotal])
  const shipping = useMemo(() => form.country === 'Pakistan' ? 250 : 5000, [form.country])
  const total = subtotal + tax + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    if (!form.firstName.trim()) return 'First name is required'
    if (!form.lastName.trim()) return 'Last name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Invalid email format'
    if (!form.phone.trim()) return 'Phone number is required'
    if (!form.address.trim()) return 'Address is required'
    if (!form.city.trim()) return 'City is required'

    return null
  }

  const placeOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (items.length === 0) {
      setError('Your cart is empty')
      return
    }

    // Validation
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      showToast(validationError, 'error')
      return
    }

    setSubmitting(true)
    try {
      const payload = {
        customerInfo: {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone
        },
        shippingAddress: {
          address: form.address,
          city: form.city,
          state: form.state,
          postalCode: form.postalCode,
          country: form.country
        },
        paymentMethod: paymentMethod,
        items: items.map(i => ({
          productId: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity
        })),
        totalAmount: total,
        notes: form.notes
      }

      // Create order in backend with INITIATED status
      const res = await client.post('/orders', payload)

      if (res.data?.success && res.data?.order) {
        const { _id, orderNumber } = res.data.order

        // Direct navigation with state to ensure immediate loading
        navigate(`/order-confirmation/${_id}`, {
          state: {
            order: res.data.order,
            source: 'checkout'
          }
        })

        // Clear cart immediately since order is created
        localStorage.removeItem('cart')
        window.dispatchEvent(new Event('cart-updated'))

        showToast(`Order #${orderNumber} placed successfully!`, 'success')
      } else {
        const msg = res.data?.error || 'Failed to create order'
        setError(msg)
        showToast(msg, 'error')
      }
    } catch (e: any) {
      console.error('Order error:', e)
      const msg = e?.response?.data?.error || e?.message || 'Failed to create order. Please try again.'
      setError(msg)
      showToast(msg, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const getPaymentMethodName = () => {
    const methods: Record<string, string> = {
      cod: 'Cash on Delivery',
      meezan: 'Meezan Bank Transfer',
      jazzcash: 'JazzCash',
      easypaisa: 'EasyPaisa',
      payoneer: 'Payoneer'
    }
    return methods[paymentMethod] || paymentMethod
  }

  return (
    <div className="checkout-page">
      <header className="page-header">
        <h1 className="page-title">CHECKOUT</h1>
        <p className="page-subtitle">Complete your purchase securely</p>
      </header>

      <div className="checkout-container">
        <div className="breadcrumbs">
          <ul className="breadcrumbs-list">
            <li className="breadcrumbs-item">
              <Link to="/" className="breadcrumbs-link">Home</Link>
            </li>
            <li className="breadcrumbs-item">
              <Link to="/cart" className="breadcrumbs-link">Shopping Bag</Link>
            </li>
            <li className="breadcrumbs-item">Checkout</li>
          </ul>
        </div>

        <div className="checkout-content">
          <div className="checkout-form-container" ref={formRef}>
            <form id="checkoutForm" onSubmit={placeOrder} noValidate>

              {/* Customer Info */}
              <div className="form-section animate-fade-in-up">
                <h2 className="form-section-title">Customer Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+92 300 1234567"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Shipping Info */}
              <div className="form-section">
                <h2 className="form-section-title">Shipping Information</h2>
                <div className="form-group">
                  <label htmlFor="address">Street Address *</label>
                  <input
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State/Province</label>
                    <input
                      id="state"
                      name="state"
                      value={form.state}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={form.country}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="Pakistan">Pakistan</option>
                      <option value="International">International</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Delivery Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleInputChange}
                    className="form-input"
                    rows={3}
                    placeholder="Any special delivery instructions..."
                  />
                </div>
              </div>

              {/* Payment Info */}
              <div className="form-section">
                <h2 className="form-section-title">Payment Information</h2>

                <div className="payment-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={paymentTab === 'local'}
                    className={`payment-tab ${paymentTab === 'local' ? 'active' : ''}`}
                    onClick={() => setPaymentTab('local')}
                  >
                    Pakistani Methods
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={paymentTab === 'international'}
                    className={`payment-tab ${paymentTab === 'international' ? 'active' : ''}`}
                    onClick={() => setPaymentTab('international')}
                  >
                    International Methods
                  </button>
                </div>

                {paymentTab === 'local' ? (
                  <div className="payment-options" role="tabpanel">
                    {[
                      { value: 'cod', name: 'Cash on Delivery', desc: 'Pay when you receive your order' },
                      { value: 'meezan', name: 'Meezan Bank Transfer', desc: 'Pay via bank transfer to our Meezan Bank account' },
                      { value: 'jazzcash', name: 'JazzCash', desc: 'Pay with your JazzCash mobile account' },
                      { value: 'easypaisa', name: 'EasyPaisa', desc: 'Pay with your EasyPaisa mobile account' }
                    ].map(method => (
                      <div key={method.value} className="payment-option">
                        <label>
                          <div className="payment-option-header">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method.value}
                              checked={paymentMethod === method.value}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              aria-label={method.name}
                            />
                            <span className="payment-option-name">{method.name}</span>
                          </div>
                          <span className="payment-option-description">{method.desc}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="payment-options" role="tabpanel">
                    <div className="payment-option">
                      <label>
                        <div className="payment-option-header">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="payoneer"
                            checked={paymentMethod === 'payoneer'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            aria-label="Payoneer"
                          />
                          <span className="payment-option-name">Payoneer</span>
                        </div>
                        <span className="payment-option-description">Pay securely via Payoneer</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Dynamic Payment Details - SIMPLIFIED */}
                {paymentMethod !== 'cod' && (
                  <div className="payment-details animate-fade-in">
                    <h3>Payment Instructions</h3>
                    <div className="bank-details" style={{ textAlign: 'center', padding: '2rem' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
                      <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        You have selected <strong style={{ color: 'var(--neon-cyan)' }}>{getPaymentMethodName()}</strong>.
                      </p>
                      <p style={{ color: 'var(--text-muted)' }}>
                        Complete your order securely now. You will receive precise payment details and a receipt submission link on the next page.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div style={{ color: 'crimson', marginBottom: '1rem' }} role="alert">
                  {error}
                </div>
              )}
              {success && (
                <div style={{ color: 'seagreen', marginBottom: '1rem' }} role="alert">
                  {success}
                </div>
              )}



              <button
                type="submit"
                disabled={submitting}
                className="place-order-btn"
                aria-label={`Place order for PKR ${total.toLocaleString()}`}
              >
                {submitting ? 'Processing Order...' : `Place Order · PKR ${total.toLocaleString()}`}
              </button>
            </form>
          </div>

          <div className="order-summary-container" ref={summaryRef}>
            <h2 className="form-section-title">Order Summary</h2>
            <div className="summary-items">
              {items.map(i => (
                <div key={i.id} className="summary-item">
                  <span>{i.name} ×{i.quantity}</span>
                  <span>PKR {(i.price * i.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Tax (5%)</span>
                <span>PKR {tax.toFixed(0).toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>PKR {shipping.toLocaleString()}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>PKR {total.toFixed(0).toLocaleString()}</span>
              </div>
            </div>

            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'rgba(0, 240, 255, 0.05)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: 'var(--neon-cyan)' }}>Payment Method:</strong> {getPaymentMethodName()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}