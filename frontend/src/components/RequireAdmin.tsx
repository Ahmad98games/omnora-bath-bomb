import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RequireAdminProps {
    children: React.ReactNode;
}

export default function RequireAdmin({ children }: RequireAdminProps) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="loading-screen">Loading...</div>;
    }

    if (!user || user.role !== 'admin') {
        // Redirect non-admins to home page to prevent access
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return <>{children}</>;
}
