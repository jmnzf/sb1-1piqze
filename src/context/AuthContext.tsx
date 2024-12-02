import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../services/api/auth';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null
  });

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      
      if (storedUser) {
        try {
          // Validate stored token/user data
          const userData = await authApi.validateToken(storedUser);
          setState(prev => ({ ...prev, user: userData }));
        } catch (error) {
          // Clear invalid stored data
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
      
      setState(prev => ({ ...prev, isLoading: false }));
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const userData = await authApi.login(email, password);
      
      // Store user data in localStorage
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
      
      setState(prev => ({
        ...prev,
        user: userData,
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Credenciales inválidas',
        isLoading: false
      }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setState({
      user: null,
      isLoading: false,
      error: null
    });
  };

  const clearError = () => {
    setState(prev => ({ ...prev, error: null }));
  };

  return (
    <AuthContext.Provider 
      value={{ 
        ...state, 
        login, 
        logout,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};