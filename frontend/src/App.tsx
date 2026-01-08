import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/HomeWithAds'
import Collection from './pages/OmnoraCollection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import FAQ from './pages/OmnoraFAQ'
import Contact from './pages/OmnoraContact'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PaymentSuccess from './pages/PaymentSuccess'
import OrderDetail from './pages/OrderDetail'
import Wishlist from './pages/Wishlist'
import AdminDashboard from './pages/AdminDashboard'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorBoundary from './components/ErrorBoundary'
import { ToastProvider } from './context/ToastContext'
import { AuthProvider } from './context/AuthContext'
import './styles/Animations.css'
import About from './pages/About'

import OrderConfirmation from './pages/OrderConfirmation'
import AdminApprove from './pages/AdminApprove'
import TechStackSection from './components/home/tech'

import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="collection" element={<Collection />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="order-confirmation/:id" element={<OrderConfirmation />} />
              <Route path="admin/approve-order/:id" element={<AdminApprove />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="contact" element={<Contact />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="orders/:id" element={<ProtectedRoute><OrderDetail /></ProtectedRoute>} />
              <Route path="wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
              <Route path="admin" element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
              <Route path="about" element={<About onBack={() => window.history.back()} />} />
              <Route path="tech" element={<TechStackSection />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Auth routes outside Layout (full screen) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}
