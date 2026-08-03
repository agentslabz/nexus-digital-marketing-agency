import React, { useState } from 'react';
import { MOCK_SERVICES } from '../data/mockData';
import { Service, ServiceTier } from '../types';
import {
  CheckCircle2,
  Search,
  TrendingUp,
  Share2,
  FileText,
  Mail,
  Code,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Calendar
} from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation, onOpenCalculator }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = ['All', 'SEO', 'PPC', 'Social', 'Content', 'Email', 'WebDev'];

  const filteredServices = activeCategory === 'All'
    ? MOCK_SERVICES
    : MOCK_SERVICES.filter((s) => s.category === activeCategory);

  const faqs = [
    {
      q: 'How quickly can we expect measurable results?',
      a: 'PPC advertising and Email marketing campaigns deliver immediate traffic and conversions within 48-72 hours. Technical SEO and organic content clusters compound exponentially, typically generating strong rank dominance between months 3 and 6.'
    },
    {
      q: 'Are there long-term locked-in contracts?',
      a: 'We believe in earning your partnership through performance. Most of our retainer packages operate on flexible month-to-month terms with a simple 30-day notice period.'
    },
    {
      q: 'Will I have a dedicated account manager?',
      a: 'Yes. Every client is paired with a Senior Growth Director and specialized channel leads (SEO lead, PPC buyer, or Web Architect) with direct Slack channel communication.'
    },
    {
      q: 'Do you offer custom enterprise packages?',
      a: 'Absolutely. We regularly build custom omnichannel retainers combining technical SEO, multi-channel ad spend management, and video media production tailored to your ARR targets.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="text-center space-y-4 pt-4">
        <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
          01. FULL-STACK CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
          GROWTH SERVICES & PACKAGES
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-xs font-medium max-w-2xl mx-auto uppercase tracking-wider">
          Transparent pricing, clear deliverable checklists, and senior execution designed for maximum ROI.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-colors ${
                activeCategory === cat
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] border-[#111111]'
                  : 'bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-slate-200 border-[#111111] dark:border-slate-800 hover:bg-[#0055FF] hover:text-white hover:border-[#0055FF]'
              }`}
            >
              {cat === 'All' ? 'ALL SERVICES' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services List with Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((srv) => (
          <div
            key={srv.id}
            className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 sm:p-8 space-y-8"
          >
            {/* Service Title Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-[#111111] dark:border-slate-800 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#111111] dark:bg-white text-white dark:text-[#111111] flex items-center justify-center shrink-0 font-black">
                  {srv.iconName === 'Search' && <Search className="w-6 h-6" />}
                  {srv.iconName === 'TrendingUp' && <TrendingUp className="w-6 h-6" />}
                  {srv.iconName === 'Share2' && <Share2 className="w-6 h-6" />}
                  {srv.iconName === 'FileText' && <FileText className="w-6 h-6" />}
                  {srv.iconName === 'Mail' && <Mail className="w-6 h-6" />}
                  {srv.iconName === 'Code' && <Code className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-[#111111] dark:text-white">{srv.title}</h2>
                    {srv.badge && (
                      <span className="text-[9px] font-black text-white bg-[#0055FF] px-2 py-0.5 uppercase tracking-widest">
                        {srv.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 max-w-2xl">{srv.fullDescription}</p>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[10px] font-black uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors flex items-center gap-2 shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>HIRE US</span>
              </button>
            </div>

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {srv.tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-6 border-2 transition-colors flex flex-col justify-between relative ${
                    tier.popular
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-slate-50 dark:bg-slate-900 border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0055FF] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-white">
                      MOST POPULAR
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-black text-lg uppercase tracking-tight">{tier.name}</h3>
                      <p className={`text-xs mt-1 min-h-[32px] ${tier.popular ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'}`}>{tier.description}</p>
                    </div>

                    <div className={`py-2 border-y ${tier.popular ? 'border-white/20' : 'border-[#111111]/10 dark:border-slate-800'}`}>
                      <span className="text-3xl font-black italic tracking-tighter">${tier.price.toLocaleString()}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest ml-1 opacity-70">{tier.period}</span>
                    </div>

                    <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
                      {tier.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-[#0055FF] font-black">■</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className={`mt-6 w-full py-3 font-black text-[10px] uppercase tracking-widest transition-colors ${
                      tier.popular
                        ? 'bg-[#0055FF] hover:bg-blue-500 text-white'
                        : 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white'
                    }`}
                  >
                    SELECT {tier.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 text-center border-b-2 border-[#111111] dark:border-slate-800 pb-4">
          <span className="text-[10px] font-black text-[#0055FF] uppercase tracking-widest">CLEAR EXPECTATIONS</span>
          <h2 className="text-3xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-black text-xs uppercase tracking-wider text-[#111111] dark:text-white flex items-center justify-between gap-4"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#0055FF]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed border-t border-[#111111]/10 dark:border-slate-800 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
