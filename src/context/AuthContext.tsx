import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string, companyName?: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  quickDemoLogin: (role: 'client' | 'admin') => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('nexus_auth_token'));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await fetch('/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          // Token expired or invalid
          logout();
        }
      } catch (err) {
        console.error('Auth profile check error', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('nexus_auth_token', data.token);
        return true;
      } else {
        throw new Error(data.error || 'Login failed');
      }
    } catch (err: any) {
      throw new Error(err.message || 'Server connection error');
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string,
    companyName?: string,
    phone?: string
  ): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, companyName, phone })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('nexus_auth_token', data.token);
        return true;
      } else {
        throw new Error(data.error || 'Registration failed');
      }
    } catch (err: any) {
      throw new Error(err.message || 'Server connection error');
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('nexus_auth_token');
  };

  const quickDemoLogin = async (role: 'client' | 'admin'): Promise<boolean> => {
    const email = role === 'admin' ? 'admin@nexusdigital.com' : 'client@nexusdigital.com';
    const password = role === 'admin' ? 'admin123' : 'password123';
    return await login(email, password);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, register, logout, quickDemoLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
