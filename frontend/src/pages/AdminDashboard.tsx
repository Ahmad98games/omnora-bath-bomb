import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import client from '../api/client';
import { 
    Activity, 
    DollarSign, 
    Users, 
    Package, 
    Clock, 
    TrendingUp,
    ShoppingBag
} from 'lucide-react';
import './AdminDashboard.css';

// 1. Strict Typing
interface DashboardStats {
    revenue: number;
    customers: number;
    activeOrders: number;
    avgOrderValue: number;
}

interface OrderFunnel {
    initiated: number;
    pending: number;
    processing: number;
    completed: number;
}

interface RecentOrder {
    _id: string;
    orderNumber?: string;
    user?: { name: string; email: string };
    guestCustomer?: { name: string; email: string };
    totalAmount: number;
    status: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const { isAdmin } = useAuth();
    
    // State
    const [stats, setStats] = useState<DashboardStats>({ 
        revenue: 0, customers: 0, activeOrders: 0, avgOrderValue: 0 
    });
    const [funnel, setFunnel] = useState<OrderFunnel>({ 
        initiated: 0, pending: 0, processing: 0, completed: 0 
    });
    const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

    // 2. Efficient Data Processing
    const processData = (orders: any[]) => {
        const validOrders = orders.filter((o: any) => !['cancelled', 'rejected'].includes(o.status));
        
        // Revenue Calc
        const totalRevenue = validOrders.reduce((sum: number, o: any) => sum + (o.totalAmount || 0), 0);
        
        // Unique Customers (Set handles uniqueness automatically)
        const uniqueCustomers = new Set(orders.map((o: any) => 
            o.user?._id || o.guestCustomer?.email
        )).size;

        // Funnel Logic
        const newFunnel = {
            initiated: orders.filter((o: any) => o.status === 'INITIATED').length,
            pending: orders.filter((o: any) => ['pending', 'receipt_submitted'].includes(o.status)).length,
            processing: orders.filter((o: any) => ['approved', 'processing'].includes(o.status)).length,
            completed: orders.filter((o: any) => ['shipped', 'delivered'].includes(o.status)).length
        };

        setStats({
            revenue: totalRevenue,
            customers: uniqueCustomers,
            activeOrders: newFunnel.pending + newFunnel.processing,
            avgOrderValue: validOrders.length ? totalRevenue / validOrders.length : 0
        });

        setFunnel(newFunnel);
        setRecentOrders(orders.slice(0, 8)); // Top 8 recent
    };

    const fetchData = useCallback(async () => {
        try {
            // Note: In production, create a dedicated /stats endpoint to avoid fetching all data
            const { data } = await client.get('/orders/admin/all');
            if (data.orders) {
                processData(data.orders);
                setLastUpdated(new Date());
            }
        } catch (error) {
            console.error('Live Sync Error:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!isAdmin) return;
        fetchData();
        const interval = setInterval(fetchData, 30000); // Poll every 30s
        return () => clearInterval(interval);
    }, [isAdmin, fetchData]);

    if (!isAdmin) return <div className="access-denied">ACCESS DENIED</div>;
    if (loading) return <div className="loading-screen">Initializing Command Center...</div>;

    return (
        <div className="dashboard-container animate-fade-in">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-left">
                    <h1>Command Center</h1>
                    <div className="live-badge">
                        <span className="pulse-dot"></span>
                        LIVE FEED • {lastUpdated.toLocaleTimeString()}
                    </div>
                </div>
                <div className="header-right">
                    <button className="refresh-btn" onClick={fetchData}>
                        <Clock size={16} /> Sync Now
                    </button>
                </div>
            </header>

            {/* KPI Cards (Key Performance Indicators) */}
            <div className="kpi-grid">
                <div className="stat-card revenue-card">
                    <div className="stat-icon"><DollarSign size={24} /></div>
                    <div className="stat-info">
                        <span className="stat-label">Total Revenue</span>
                        <span className="stat-value">PKR {stats.revenue.toLocaleString()}</span>
                    </div>
                    <div className="stat-trend positive">
                        <TrendingUp size={14} /> +12% this week
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon blue"><Users size={24} /></div>
                    <div className="stat-info">
                        <span className="stat-label">Unique Customers</span>
                        <span className="stat-value">{stats.customers}</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon purple"><ShoppingBag size={24} /></div>
                    <div className="stat-info">
                        <span className="stat-label">Avg. Order Value</span>
                        <span className="stat-value">PKR {Math.round(stats.avgOrderValue).toLocaleString()}</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon orange"><Activity size={24} /></div>
                    <div className="stat-info">
                        <span className="stat-label">Active Orders</span>
                        <span className="stat-value">{stats.activeOrders}</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="main-grid">
                
                {/* Visual Funnel Section */}
                <div className="panel funnel-panel">
                    <h3><Activity size={18} /> Conversion Pipeline</h3>
                    <div className="funnel-container">
                        <div className="funnel-step">
                            <div className="step-bar" style={{ height: '100%' }}></div>
                            <div className="step-info">
                                <span className="step-count">{funnel.initiated}</span>
                                <span className="step-label">Initiated</span>
                            </div>
                        </div>
                        <div className="funnel-step">
                            <div className="step-bar" style={{ height: '75%', opacity: 0.8 }}></div>
                            <div className="step-info">
                                <span className="step-count">{funnel.pending}</span>
                                <span className="step-label">Action Req.</span>
                            </div>
                        </div>
                        <div className="funnel-step">
                            <div className="step-bar" style={{ height: '50%', opacity: 0.6 }}></div>
                            <div className="step-info">
                                <span className="step-count">{funnel.processing}</span>
                                <span className="step-label">Processing</span>
                            </div>
                        </div>
                        <div className="funnel-step">
                            <div className="step-bar success" style={{ height: '40%', opacity: 1 }}></div>
                            <div className="step-info">
                                <span className="step-count">{funnel.completed}</span>
                                <span className="step-label">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Table */}
                <div className="panel activity-panel">
                    <h3><Package size={18} /> Recent Activity</h3>
                    <div className="table-wrapper">
                        <table className="dashboard-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Status</th>
                                    <th className="text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map(order => (
                                    <tr key={order._id}>
                                        <td className="mono-text">
                                            #{order.orderNumber || order._id.slice(-4)}
                                        </td>
                                        <td>
                                            <div className="cust-name">
                                                {order.user?.name || order.guestCustomer?.name || 'Guest'}
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`status-dot ${order.status}`}></span>
                                            <span className="status-text">{order.status.replace(/_/g, ' ')}</span>
                                        </td>
                                        <td className="text-right font-bold">
                                            {order.totalAmount.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="dashboard-footer">
                <div className="credits">
                    System Engineered by <span className="highlight">Ahmad Mahboob</span>
                </div>
                <div className="version">v2.4.0 • Omnora Labs</div>
            </footer>
        </div>
    );
}