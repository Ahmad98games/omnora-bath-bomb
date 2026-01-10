import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import client from '../api/client';
import { ShieldCheck, ShieldAlert, Loader, ArrowLeft } from 'lucide-react';
import './AdminApprove.css';

// Type alias for readability
type ApprovalStatus = 'idle' | 'loading' | 'success' | 'error';

const AdminApprove: React.FC = () => {
    // 1. The "React Way" to get URL data
    const { id } = useParams<{ id: string }>(); 
    const [searchParams] = useSearchParams();
    
    const [status, setStatus] = useState<ApprovalStatus>('loading');
    const [message, setMessage] = useState('');
    
    // useRef prevents double-firing in React Strict Mode (common dev issue)
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const performApproval = async () => {
            const token = searchParams.get('token');

            if (!id || !token) {
                setStatus('error');
                setMessage('Invalid approval link. Missing ID or Token.');
                return;
            }

            try {
                // Determine logic based on URL path (approve vs reject actions)
                // Assuming this component might handle both in the future, 
                // but strictly following your current logic:
                await client.get(`/orders/${id}/approve?token=${token}`);
                setStatus('success');
            } catch (error: any) {
                setStatus('error');
                const errorMsg = error.response?.data?.message || error.response?.data || error.message || 'Verification failed';
                setMessage(typeof errorMsg === 'object' ? JSON.stringify(errorMsg) : errorMsg);
            }
        };

        performApproval();
    }, [id, searchParams]);

    return (
        <div className="approval-container">
            <div className="approval-card animate-fade-in-up">
                
                {status === 'loading' && (
                    <div className="status-content loading">
                        <Loader className="spinner icon-lg" />
                        <h2>Verifying Credentials</h2>
                        <p>Accessing secure gateway...</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="status-content success">
                        <div className="icon-glow green">
                            <ShieldCheck size={64} />
                        </div>
                        <h2>Order Approved</h2>
                        <p>The security token has been validated and the order status updated successfully.</p>
                        <div className="meta-info">
                            <span>Order ID:</span> <span className="highlight">{id}</span>
                        </div>
                        <Link to="/" className="btn-primary">
                            <ArrowLeft size={18} /> Return to Console
                        </Link>
                    </div>
                )}

                {status === 'error' && (
                    <div className="status-content error">
                        <div className="icon-glow red">
                            <ShieldAlert size={64} />
                        </div>
                        <h2>Access Denied</h2>
                        <p className="error-msg">{message}</p>
                        <Link to="/" className="btn-secondary">
                            <ArrowLeft size={18} /> Return to Home
                        </Link>
                    </div>
                )}
            </div>
            
            <div className="approval-footer">
                Secure System • Admin Verification Portal
            </div>
        </div>
    );
};

export default AdminApprove;