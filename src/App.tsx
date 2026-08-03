import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LiveChatWidget } from './components/LiveChatWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

import { PricingCalculatorModal } from './components/PricingCalculatorModal';
import { ConsultationModal } from './components/ConsultationModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AuthModal } from './components/AuthModal';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';

import { CaseStudy } from './types';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [calculatorQuote, setCalculatorQuote] = useState<number | undefined>(undefined);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackageFromCalculator = (estimatedMonthly: number) => {
    setCalculatorQuote(estimatedMonthly);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#111111] text-[#111111] dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          />
        )}

        {currentPage === 'services' && (
          <Services
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <Portfolio
            onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <About onOpenConsultation={() => setIsConsultationOpen(true)} />
        )}

        {currentPage === 'pricing' && (
          <Pricing
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'blog' && <Blog />}

        {currentPage === 'contact' && <Contact />}

        {currentPage === 'dashboard' && <Dashboard />}
      </main>

      {/* Global Agency Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Interactive Global Floating Widgets */}
      <LiveChatWidget />
      <ScrollToTop />
      <WhatsAppButton />

      {/* Interactive Modals */}
      <PricingCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onSelectPackage={handleSelectPackageFromCalculator}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialInvestment={calculatorQuote}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={() => setCurrentPage('dashboard')}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
