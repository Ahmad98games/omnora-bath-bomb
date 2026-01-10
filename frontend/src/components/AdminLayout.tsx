import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard, Package, ShoppingBag, Users,
    LogOut, ExternalLink, Settings, Menu, X
} from 'lucide-react';
import { useState } from 'react';
import './AdminLayout.css';

export default function AdminLayout() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const isActive = (path: string) => location.pathname.includes(path) ? 'active' : '';
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                    <button className="close-btn mobile-only" onClick={closeSidebar}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <Link to="/admin/dashboard" className={`nav-item ${isActive('dashboard')}`} onClick={closeSidebar}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/admin/products" className={`nav-item ${isActive('products')}`} onClick={closeSidebar}>
                        <Package size={20} />
                        <span>Products</span>
                    </Link>
                    <Link to="/admin/orders" className={`nav-item ${isActive('orders')}`} onClick={closeSidebar}>
                        <ShoppingBag size={20} />
                        <span>Orders</span>
                    </Link>
                    <Link to="/admin/users" className={`nav-item ${isActive('users')}`} onClick={closeSidebar}>
                        <Users size={20} />
                        <span>Users</span>
                    </Link>
                    {/* Add Settings if needed */}
                    {/* <Link to="/admin/settings" className="nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </Link> */}
                </nav>

                <div className="sidebar-footer">
                    <Link to="/" className="nav-item view-site" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                        <span>View Website</span>
                    </Link>
                    <button onClick={handleLogout} className="nav-item logout-btn">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <button className="menu-btn mobile-only" onClick={() => setSidebarOpen(true)}>
                        <Menu size={24} />
                    </button>
                    <h1>Admin Control Center</h1>
                </header>
                <div className="admin-content">
                    <Outlet />
                </div>
            </main>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
        </div>
    );
}
