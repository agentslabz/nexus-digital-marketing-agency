import React from 'react';
import { CheckCircle2, XCircle, Calculator, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface PricingProps {
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCalculator, onOpenConsultation }) => {
  const plans = [
    {
      name: 'Starter Growth',
      price: 1200,
      description: 'Perfect for local businesses & early stage startups establishing organic search visibility.',
      popular: false,
      features: [
        'Up to 15 Target Keywords',
        'Technical SEO & On-Page Fixes',
        'Google Business Profile Setup',
        '2 High-Authority Backlinks/mo',
        'Monthly Executive Report',
        'Dedicated Slack Channel'
      ]
    },
    {
      name: 'Pro Scale',
      price: 2800,
      description: 'Aggressive multi-channel organic & PPC growth engine for scaling e-commerce & SMBs.',
      popular: true,
      features: [
        'Up to 45 Target Keywords',
        'Full Technical & Schema Optimization',
        'Google Ads & Meta Ads Management',
        '6 High-DR Backlinks/mo',
        '4 In-Depth SEO Blog Articles/mo',
        'Conversion Landing Page Build',
        'Bi-Weekly Strategy Calls',
        'Real-Time Live Portal Access'
      ]
    },
    {
      name: 'Enterprise Omnichannel',
      price: 5500,
      description: 'Category domination suite for venture-backed tech scale-ups and high-volume enterprise brands.',
      popular: false,
      features: [
        'Unlimited Target Keywords',
        'Multi-Channel PPC ($40k+ Ad Spend)',
        '15+ Premium DR70+ Backlinks/mo',
        'Short-Form Video Production (Reels/TikTok)',
        'Klaviyo Email Automation Flows',
        'Bespoke Sub-Second React Web Build',
        '24/7 Priority Support & VP Growth Partner'
      ]
    }
  ];

  const comparisonFeatures = [
    { name: 'Target Keywords', starter: '15 Keywords', pro: '45 Keywords', enterprise: 'Unlimited' },
    { name: 'Managed Ad Spend Limit', starter: '$5,000/mo', pro: '$25,000/mo', enterprise: 'Unlimited' },
    { name: 'Backlinks Acquired', starter: '2 DR50+/mo', pro: '6 DR60+/mo', enterprise: '15+ DR70+/mo' },
    { name: 'SEO Content Articles', starter: '2 Posts/mo', pro: '4 Posts/mo', enterprise: '12 Posts/mo' },
    { name: 'Dedicated Strategy Lead', starter: 'Account Manager', pro: 'Senior Director', enterprise: 'VP of Growth' },
    { name: 'Live Analytics Dashboard', starter: 'Monthly PDF', pro: '24/7 Live Portal', enterprise: '24/7 Custom API' },
    { name: 'CRO Landing Page Design', starter: '—', pro: 'Included', enterprise: 'Included (Unlimited)' },
    { name: 'Short-Form Reels Video', starter: '—', pro: '—', enterprise: '16 Videos/mo' }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="text-center space-y-4 pt-4 max-w-3xl mx-auto">
        <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
          01. PREDICTABLE INVESTMENT
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
          GROWTH PRICING & PACKAGES
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-xs font-medium uppercase tracking-wider">
          No hidden fees, no long-term locked contracts, and 100% data transparency.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={onOpenCalculator}
            className="px-6 py-3 bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#0055FF] hover:text-white hover:border-[#0055FF] transition-colors"
          >
            <Calculator className="w-4 h-4 text-[#0055FF]" />
            <span>CALCULATE CUSTOM ESTIMATE (ROI CALCULATOR)</span>
          </button>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 border-2 transition-colors flex flex-col justify-between relative ${
                plan.popular
                  ? 'bg-[#111111] text-white border-[#111111]'
                  : 'bg-white dark:bg-[#1a1a1a] border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0055FF] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-white">
                  MOST POPULAR
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{plan.name}</h3>
                  <p className={`text-xs mt-2 min-h-[36px] font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'}`}>{plan.description}</p>
                </div>

                <div className={`py-4 border-y ${plan.popular ? 'border-white/20' : 'border-[#111111]/10 dark:border-slate-800'}`}>
                  <span className="text-4xl font-black italic tracking-tighter">${plan.price.toLocaleString()}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest ml-1 opacity-70">/ MONTH</span>
                </div>

                <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
                  {plan.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <span className="text-[#0055FF] font-black">■</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenConsultation}
                className={`mt-8 w-full py-3.5 font-black text-[10px] uppercase tracking-widest transition-colors ${
                  plan.popular
                    ? 'bg-[#0055FF] hover:bg-blue-500 text-white'
                    : 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white'
                }`}
              >
                SELECT {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 text-center border-b-2 border-[#111111] dark:border-slate-800 pb-4">
          <span className="text-[10px] font-black text-[#0055FF] uppercase tracking-widest">IN-DEPTH COMPARISON</span>
          <h2 className="text-3xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">FEATURE COMPARISON MATRIX</h2>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 overflow-x-auto">
          <table className="w-full text-left text-xs font-bold">
            <thead>
              <tr className="border-b-2 border-[#111111] dark:border-slate-800 bg-[#111111] text-white uppercase tracking-widest text-[10px]">
                <th className="p-4">FEATURE</th>
                <th className="p-4">STARTER ($1.2K/MO)</th>
                <th className="p-4 text-[#0055FF]">PRO SCALE ($2.8K/MO)</th>
                <th className="p-4">ENTERPRISE ($5.5K/MO)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#111111]/10 dark:divide-slate-800 text-[#111111] dark:text-slate-300 uppercase tracking-wider text-[11px]">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                  <td className="p-4 font-black text-[#111111] dark:text-white">{row.name}</td>
                  <td className="p-4">{row.starter}</td>
                  <td className="p-4 font-black text-[#0055FF]">{row.pro}</td>
                  <td className="p-4 font-black">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
