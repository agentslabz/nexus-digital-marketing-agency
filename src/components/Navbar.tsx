import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import {
  Sun,
  Moon,
  TrendingUp,
  Menu,
  X,
  User as UserIcon,
  Calculator,
  Calendar,
  LogOut,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenCalculator,
  onOpenConsultation,
  onOpenAuth
}) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Insights', id: 'blog' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-[#111111] border-b border-[#111111] dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 bg-[#111111] dark:bg-white text-white dark:text-[#111111] flex items-center justify-center font-black text-lg group-hover:bg-[#0055FF] dark:group-hover:bg-[#0055FF] dark:group-hover:text-white transition-colors">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="font-black text-2xl tracking-tighter uppercase italic text-[#111111] dark:text-white">
              NEXUS<span className="text-[#0055FF]">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#111111]/70 dark:text-slate-400 block font-extrabold -mt-1">
              Growth Architects
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[11px] font-extrabold uppercase tracking-widest transition-all ${
                currentPage === item.id
                  ? 'text-[#0055FF] dark:text-[#0055FF] underline underline-offset-4 decoration-2'
                  : 'text-[#111111] dark:text-slate-200 hover:line-through'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Cost Calculator Button */}
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-2 border border-[#111111] dark:border-slate-700 text-[#111111] dark:text-slate-200 hover:bg-[#111111] hover:text-white dark:hover:bg-slate-800 transition-colors"
            title="Project Cost Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-[#0055FF]" />
            <span>ROI Calculator</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-[#111111] dark:border-slate-700 bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-slate-200 hover:bg-[#0055FF] dark:hover:bg-[#0055FF] hover:text-white dark:hover:text-white hover:border-[#0055FF] dark:hover:border-[#0055FF] transition-colors"
            aria-label="Toggle light/dark mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#111111]" />}
          </button>

          {/* Client Dashboard / Auth State */}
          {user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick('dashboard')}
                className={`flex items-center gap-2 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-widest border ${
                  currentPage === 'dashboard'
                    ? 'border-[#0055FF] bg-[#0055FF] text-white'
                    : 'border-[#111111] dark:border-slate-700 text-[#111111] dark:text-slate-200 hover:bg-[#111111] hover:text-white'
                }`}
              >
                <img
                  src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                  alt={user.username}
                  className="w-4 h-4 object-cover"
                />
                <span className="truncate max-w-[90px]">{user.companyName || user.username}</span>
              </button>
              <button
                onClick={logout}
                className="p-2 border border-[#111111] dark:border-slate-700 text-[#111111] dark:text-slate-300 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-colors"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-widest text-[#111111] dark:text-slate-200 border border-[#111111] dark:border-slate-700 hover:bg-[#111111] hover:text-white transition-colors"
            >
              <UserIcon className="w-3.5 h-3.5 text-[#0055FF]" />
              <span>Client Login</span>
            </button>
          )}

          {/* Book Strategy Call CTA */}
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[11px] font-black uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Hire Us</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 border border-[#111111] dark:border-slate-700 text-[#111111] dark:text-slate-200"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#111111]" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#111111] text-white dark:bg-white dark:text-[#111111]"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#111111] dark:border-slate-800 bg-white dark:bg-[#111111] px-4 pt-4 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#111111] dark:border-slate-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-[11px] font-black uppercase tracking-widest ${
                  currentPage === item.id
                    ? 'text-[#0055FF] bg-slate-100 dark:bg-slate-900'
                    : 'text-[#111111] dark:text-slate-300 hover:line-through'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="flex items-center justify-between px-4 py-3 border border-[#111111] dark:border-slate-700 text-[11px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-200"
            >
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#0055FF]" />
                <span>ROI Cost Calculator</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            {user ? (
              <button
                onClick={() => handleNavClick('dashboard')}
                className="flex items-center justify-between px-4 py-3 bg-[#0055FF] text-white font-black text-[11px] uppercase tracking-widest"
              >
                <span>Dashboard ({user.companyName || user.username})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="flex items-center justify-between px-4 py-3 border border-[#111111] dark:border-slate-700 text-[11px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-200"
              >
                <div className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-[#0055FF]" />
                  <span>Client Login</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[11px] font-black uppercase tracking-widest text-center hover:bg-[#0055FF]"
            >
              Hire Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
