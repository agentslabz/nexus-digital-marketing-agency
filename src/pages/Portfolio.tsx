import React, { useState } from 'react';
import { MOCK_CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { Search, ArrowRight, Tag, TrendingUp, Filter } from 'lucide-react';

interface PortfolioProps {
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onOpenConsultation: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectCaseStudy, onOpenConsultation }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tags = ['All', 'SaaS', 'E-Commerce', 'Healthcare', 'B2B', 'Google Ads', 'Klaviyo'];

  const filteredCaseStudies = MOCK_CASE_STUDIES.filter((cs) => {
    const matchesTag =
      selectedTag === 'All' ||
      cs.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase()) ||
      cs.category.toLowerCase().includes(selectedTag.toLowerCase());

    const matchesSearch =
      searchQuery === '' ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.industry.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="text-center space-y-4 pt-4 max-w-3xl mx-auto">
        <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
          01. VERIFIED PROOF
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
          CLIENT GROWTH PORTFOLIO
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-xs font-medium uppercase tracking-wider">
          Explore real-world case studies detailing how we scaled ARR, reduced CAC, and built organic visibility.
        </p>

        {/* Search & Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-[#111111] dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH CLIENT, INDUSTRY..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border transition-colors ${
                  selectedTag === tag
                    ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] border-[#111111]'
                    : 'bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-slate-200 border-[#111111] dark:border-slate-800 hover:bg-[#0055FF] hover:text-white hover:border-[#0055FF]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-8 space-y-2">
            <Filter className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-sm font-black uppercase text-[#111111] dark:text-white">NO CASE STUDIES FOUND</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Try adjusting your search query or filter tags.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCaseStudies.map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="cursor-pointer bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 hover:border-[#0055FF] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden border-b-2 border-[#111111] dark:border-slate-800">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white bg-[#111111] px-2 py-1 border border-white">
                        {cs.industry}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#0055FF] block mb-0.5">CLIENT: {cs.clientName}</span>
                      <h3 className="text-lg font-black uppercase tracking-tight text-white leading-snug">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-xs font-medium leading-relaxed">
                      {cs.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#111111]/10 dark:border-slate-800">
                      {cs.results.map((r, idx) => (
                        <div key={idx} className="bg-slate-100 dark:bg-slate-900 p-2 text-center border border-[#111111] dark:border-slate-800">
                          <div className="text-base font-black italic tracking-tighter text-[#0055FF]">{r.value}</div>
                          <div className="text-[8px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#0055FF]">
                  <span>VIEW STRATEGIC BREAKDOWN</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-3 pt-6 border-t-2 border-[#111111] dark:border-slate-800">
        <h3 className="text-2xl font-black uppercase tracking-tighter italic text-[#111111] dark:text-white">BECOME OUR NEXT SUCCESS STORY</h3>
        <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">ONBOARDING LIMITED TO 3 BRANDS PER MONTH.</p>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-3.5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-black text-[10px] uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <span>CLAIM ONBOARDING SPOT</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
