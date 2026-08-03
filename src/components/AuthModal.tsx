import React, { useState } from 'react';
import { X, Lock, Mail, User, Building, Phone, Sparkles, KeyRound, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { login, register, quickDemoLogin } = useAuth();
  const { addToast } = useToast();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
        addToast('Welcome back to your client portal!', 'success');
      } else {
        await register(username, email, password, companyName, phone);
        addToast('Client account created successfully!', 'success');
      }
      onSuccess();
      onClose();
    } catch (err: any) {
      addToast(err.message || 'Authentication failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoClick = async (role: 'client' | 'admin') => {
    setLoading(true);
    try {
      await quickDemoLogin(role);
      addToast(`Logged in as Demo ${role === 'admin' ? 'Administrator' : 'Client (PayFlow)'}`, 'success');
      onSuccess();
      onClose();
    } catch (err: any) {
      addToast('Demo login error', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1-Click Demo Login Box */}
        <div className="mb-6 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 p-4 rounded-2xl border border-blue-500/20 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-blue-400 mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>1-Click Instant Demo Login</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleDemoClick('client')}
              disabled={loading}
              className="px-3 py-2 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-blue-200 hover:text-white font-semibold border border-blue-500/40 transition-colors text-center"
            >
              Demo Client
            </button>
            <button
              type="button"
              onClick={() => handleDemoClick('admin')}
              disabled={loading}
              className="px-3 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white font-semibold border border-indigo-500/40 transition-colors text-center"
            >
              Demo Admin
            </button>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {mode === 'login' ? 'Client Portal Sign In' : 'Create Client Account'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Access real-time campaign performance analytics, deliverables, and support.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Username</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="johndoe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Company Name</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Acme Global"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>{mode === 'login' ? 'Sign In' : 'Register Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">
          {mode === 'login' ? (
            <span>
              Don't have a portal account?{' '}
              <button
                type="button"
                onClick={() => setMode('register')}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Register Here
              </button>
            </span>
          ) : (
            <span>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Sign In
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
