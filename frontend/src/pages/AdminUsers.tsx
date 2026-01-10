import React, { useState, useEffect, useCallback } from 'react';
import client from '../api/client';
import { useToast } from '../context/ToastContext';
import { Users, Search, Shield, ShieldAlert, Trash2, Mail, Calendar } from 'lucide-react';
import './AdminUsers.css';

// 1. Strict Typing
interface User {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: string;
    avatar?: string; // Optional if you have profile pics
}

const AdminUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { showToast } = useToast();

    // 2. Fetch Logic
    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await client.get('/users'); // Assuming endpoint returns all users
            // Safety check for data structure
            setUsers(Array.isArray(data) ? data : data.users || []);
        } catch (error) {
            showToast('Failed to load user database', 'error');
        } finally {
            setLoading(false);
        }
    }, [showToast]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // 3. Handlers
    const handleDelete = async (id: string) => {
        if (!window.confirm('CRITICAL: Are you sure you want to ban/delete this user? This cannot be undone.')) return;

        try {
            await client.delete(`/users/${id}`);
            showToast('User removed from database', 'success');
            // Optimistic Update
            setUsers(prev => prev.filter(u => u._id !== id));
        } catch (error) {
            showToast('Failed to delete user', 'error');
        }
    };

    const toggleAdminStatus = async (user: User) => {
        const newStatus = !user.isAdmin;
        const confirmMsg = newStatus 
            ? `Promote ${user.name} to ADMIN? They will have full system access.`
            : `Revoke ADMIN access for ${user.name}?`;

        if (!window.confirm(confirmMsg)) return;

        try {
            // Assuming your backend accepts a generic update or specific role toggle
            await client.put(`/users/${user._id}`, { isAdmin: newStatus });
            
            showToast(`User ${newStatus ? 'promoted' : 'demoted'} successfully`, 'success');
            
            // Optimistic Update
            setUsers(prev => prev.map(u => 
                u._id === user._id ? { ...u, isAdmin: newStatus } : u
            ));
        } catch (error) {
            showToast('Failed to update permissions', 'error');
        }
    };

    // 4. Client-side Filtering (Fast for < 5000 users)
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Helper to generate initials for avatar
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();
    };

    if (loading) return <div className="loading-container">Accessing User Database...</div>;

    return (
        <div className="admin-users animate-fade-in">
            <div className="page-header">
                <h2>
                    <Users className="header-icon" /> 
                    User Management
                </h2>
                <div className="user-count-badge">
                    {users.length} Registered Users
                </div>
            </div>

            {/* Search Bar */}
            <div className="controls-bar">
                <div className="search-wrapper">
                    <Search size={18} className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search by name or email..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="glass-input"
                    />
                </div>
            </div>

            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>User Profile</th>
                            <th>Role / Access</th>
                            <th>Joined Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user._id}>
                                <td>
                                    <div className="user-profile-cell">
                                        <div className={`avatar-circle ${user.isAdmin ? 'admin-glow' : ''}`}>
                                            {getInitials(user.name)}
                                        </div>
                                        <div className="user-info">
                                            <span className="user-name">{user.name}</span>
                                            <span className="user-email">
                                                <Mail size={12} /> {user.email}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button 
                                        className={`role-badge ${user.isAdmin ? 'role-admin' : 'role-user'}`}
                                        onClick={() => toggleAdminStatus(user)}
                                        title="Click to Toggle Role"
                                    >
                                        {user.isAdmin ? <ShieldAlert size={12} /> : <Shield size={12} />}
                                        {user.isAdmin ? 'ADMIN' : 'Customer'}
                                    </button>
                                </td>
                                <td>
                                    <div className="date-cell">
                                        <Calendar size={14} />
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </div>
                                </td>
                                <td>
                                    <button 
                                        className="icon-btn-danger" 
                                        onClick={() => handleDelete(user._id)}
                                        title="Delete User"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredUsers.length === 0 && (
                            <tr>
                                <td colSpan={4} className="empty-state">
                                    No users found matching "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;