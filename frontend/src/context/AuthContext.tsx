import React, { createContext, useContext, useState, useEffect } from 'react';
import client from '../api/client';

export interface User {
    id: string;
    email: string;
    name: string;
    role: 'customer' | 'admin';
    photoURL?: string; // Kept for interface compatibility
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>; // Kept but will throw error or be disabled
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    isAuthenticated: boolean;
    isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Initial session check
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const { data } = await client.get('/auth/me');
                if (data.success && data.user) {
                    setUser(data.user);
                } else {
                    localStorage.removeItem('token');
                    setUser(null);
                }
            } catch (error) {
                console.error('Session restoration failed:', error);
                localStorage.removeItem('token');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { data } = await client.post('/auth/login', { email, password });
            if (data.success && data.token) {
                localStorage.setItem('token', data.token);
                // The user object is usually returned with login, but let's be consistent with type
                // Backend returns { success: true, token, user: { ... } }
                setUser(data.user);
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error: any) {
            // Extract error message from backend response
            const msg = error.response?.data?.error || error.message || 'Login failed';
            throw new Error(msg);
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const { data } = await client.post('/auth/register', { name, email, password });
            if (data.success && data.token) {
                localStorage.setItem('token', data.token);
                setUser(data.user);
            } else {
                throw new Error(data.message || 'Registration failed');
            }
        } catch (error: any) {
            const msg = error.response?.data?.error || error.message || 'Registration failed';
            throw new Error(msg);
        }
    };

    const logout = async () => {
        try {
            // Optional: call backend to invalidate token if blacklist is implemented
            await client.post('/auth/logout');
        } catch (e) {
            // Ignore logout errors
        } finally {
            localStorage.removeItem('token');
            setUser(null);
            // Redirect to login is handled by protected routes or calling component
            window.location.href = '/login';
        }
    };

    const loginWithGoogle = async () => {
        throw new Error('Google Login is momentarily unavailable in Local Mode. Please use email/password.');
    };

    const resetPassword = async (email: string) => {
        try {
            await client.post('/auth/forgot-password', { email });
        } catch (error: any) {
            const msg = error.response?.data?.error || error.message || 'Failed to send reset email';
            throw new Error(msg);
        }
    };

    const value = {
        user,
        loading,
        login,
        loginWithGoogle,
        register,
        logout,
        resetPassword,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin'
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
