import React, { useState, useEffect } from 'react';
import { Calculator, X, Sparkles, TrendingUp, DollarSign, Check, Calendar } from 'lucide-react';
import { useToast } from '../context/ToastContext';

interface PricingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (estimatedMonthly: number) => void;
}

export const PricingCalculatorModal: React.FC<PricingCalculatorModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage
}) => {
  const { addToast } = useToast();
  const [seoKeywords, setSeoKeywords] = useState(25);
  const [adSpend, setAdSpend] = useState(15000);
  const [contentArticles, setContentArticles] = useState(6);
  const [hasCustomWebDev, setHasCustomWebDev] = useState(false);
  const [emailCampaigns, setEmailCampaigns] = useState(4);

  const [estimate, setEstimate] = useState({
    estimatedMonthlyInvestment: 2850,
    estimatedROAS: '4.2x',
    projectedMonthlyLeads: 85,
    recommendedTier: 'Pro Scale'
  });

  useEffect(() => {
    // Client-side quick calculation + backend sync
    let basePrice = 800;
    basePrice += seoKeywords * 40;
    basePrice += adSpend * 0.07;
    basePrice += contentArticles * 200;
    basePrice += emailCampaigns * 250;
    if (hasCustomWebDev) basePrice += 2000;

    const roundedMonthly = Math.round(basePrice);
    const roas = adSpend > 0 ? (3.8 + (adSpend > 25000 ? 1.4 : 0.6)).toFixed(1) : '3.5';
    const leads = Math.round((roundedMonthly * 0.45) / 32);

    setEstimate({
      estimatedMonthlyInvestment: roundedMonthly,
      estimatedROAS: `${roas}x`,
      projectedMonthlyLeads: leads,
      recommendedTier: roundedMonthly < 2200 ? 'Starter Growth' : roundedMonthly < 4800 ? 'Pro Scale' : 'Enterprise Engine'
    });
  }, [seoKeywords, adSpend, contentArticles, hasCustomWebDev, emailCampaigns]);

  if (!isOpen) return null;

  const handleLockInQuote = () => {
    addToast(`Quote of $${estimate.estimatedMonthlyInvestment.toLocaleString()}/mo saved! Redirecting to consultation scheduler.`, 'success');
    onSelectPackage(estimate.estimatedMonthlyInvestment);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Interactive Tool</span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Project Cost & ROI Calculator</h3>
          </div>
        </div>

        {/* Form Controls / Sliders */}
        <div className="space-y-6">
          {/* SEO Keywords Slider */}
          <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-slate-800 dark:text-slate-200">Target SEO Keywords</span>
              <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-lg">
                {seoKeywords} Keywords
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={seoKeywords}
              onChange={(e) => setSeoKeywords(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <p className="text-xs text-slate-500">Includes technical schema optimization, link building, and rank tracking.</p>
          </div>

          {/* Ad Spend Slider */}
          <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-slate-800 dark:text-slate-200">Monthly Paid Ad Budget (Google & Meta)</span>
              <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-lg">
                ${adSpend.toLocaleString()}/mo
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="2500"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <p className="text-xs text-slate-500">We manage copy, creative testing, landing pages, and bid optimization.</p>
          </div>

          {/* Content & Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-800 dark:text-slate-200">SEO Blog Articles</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{contentArticles}/mo</span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                step="2"
                value={contentArticles}
                onChange={(e) => setContentArticles(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-800 dark:text-slate-200">Email Flows & Broadcasts</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{emailCampaigns}/mo</span>
              </div>
              <input
                type="range"
                min="0"
                max="12"
                step="2"
                value={emailCampaigns}
                onChange={(e) => setEmailCampaigns(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Custom Web Dev Toggle */}
          <label className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 cursor-pointer">
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white block">Include Custom Web Redesign or Landing Pages</span>
              <span className="text-xs text-slate-500">Sub-second React/Tailwind conversion site build.</span>
            </div>
            <input
              type="checkbox"
              checked={hasCustomWebDev}
              onChange={(e) => setHasCustomWebDev(e.target.checked)}
              className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
            />
          </label>
        </div>

        {/* Estimate Results Banner */}
        <div className="mt-6 bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 border border-blue-500/30 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-blue-800/80 pb-4">
            <div>
              <span className="text-xs uppercase font-bold text-blue-300 tracking-wider">Estimated Investment</span>
              <div className="text-3xl font-extrabold text-white flex items-center">
                <span>${estimate.estimatedMonthlyInvestment.toLocaleString()}</span>
                <span className="text-sm font-normal text-blue-300 ml-1">/ month</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Recommended Tier</span>
              <div className="text-lg font-extrabold text-white">{estimate.recommendedTier}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2 bg-blue-950/60 p-2.5 rounded-xl border border-blue-800/50">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Projected ROAS: <strong className="text-white">{estimate.estimatedROAS}</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-blue-950/60 p-2.5 rounded-xl border border-blue-800/50">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Est. Inbound Leads: <strong className="text-white">~{estimate.projectedMonthlyLeads}/mo</strong></span>
            </div>
          </div>

          <button
            onClick={handleLockInQuote}
            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/40 transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Lock In Quote & Schedule Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
