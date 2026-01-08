import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import '../styles/Animations.css'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
    id: number
    message: string
    type: ToastType
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([])

    const showToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = Date.now()
        setToasts(prev => [...prev, { id, message, type }])

        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, 3000)
    }, [])

    const removeToast = (id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="toast-container">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className={`toast toast-${toast.type} animate-slide-in-right`}
                        onClick={() => removeToast(toast.id)}
                    >
                        <div className="toast-icon">
                            {toast.type === 'success' && '✓'}
                            {toast.type === 'error' && '✕'}
                            {toast.type === 'info' && 'ℹ'}
                            {toast.type === 'warning' && '⚠'}
                        </div>
                        <div className="toast-message">{toast.message}</div>
                    </div>
                ))}
            </div>
            <style>{`
        .toast-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .toast {
          min-width: 300px;
          padding: 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          border-left: 4px solid #333;
          font-family: 'Inter', sans-serif;
        }
        .toast-success { border-left-color: #2e7d32; }
        .toast-error { border-left-color: #d32f2f; }
        .toast-info { border-left-color: #0288d1; }
        .toast-warning { border-left-color: #ed6c02; }
        .toast-icon {
          font-weight: bold;
          font-size: 1.2rem;
        }
        .toast-success .toast-icon { color: #2e7d32; }
        .toast-error .toast-icon { color: #d32f2f; }
        .toast-info .toast-icon { color: #0288d1; }
        .toast-warning .toast-icon { color: #ed6c02; }
      `}</style>
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = useContext(ToastContext)
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}
