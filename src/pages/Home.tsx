import React from 'react';
import {
  TrendingUp,
  Search,
  Share2,
  FileText,
  Mail,
  Code,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Play,
  Calculator,
  Calendar,
  Building2,
  Users,
  Award
} from 'lucide-react';
import { MOCK_SERVICES, MOCK_CASE_STUDIES, MOCK_TESTIMONIALS, MOCK_BLOG_POSTS } from '../data/mockData';
import { CaseStudy } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenCalculator,
  onOpenConsultation,
  onSelectCaseStudy
}) => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[10px] font-black tracking-widest uppercase border border-[#111111]">
            <Sparkles className="w-3.5 h-3.5 text-[#0055FF]" />
            <span>01. GENERATIVE GROWTH ARCHITECTS</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-[#111111] dark:text-white tracking-tighter uppercase italic leading-none max-w-6xl mx-auto">
            ENGINEERED <span className="text-[#0055FF]">REVENUE SCALE</span> FOR BOLD BRANDS
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-wider">
            We fuse AI search optimization, algorithmic PPC advertising, and conversion web architectures to turn marketing budgets into predictable market dominance.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-black text-xs uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Growth Audit</span>
            </button>

            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#111111] dark:text-white font-black text-xs uppercase tracking-widest border-2 border-[#111111] dark:border-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] transition-colors flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#0055FF]" />
              <span>Calculate Project ROI</span>
            </button>
          </div>

          {/* Trusted Brand Logos Banner */}
          <div className="pt-10 border-t-2 border-[#111111] dark:border-slate-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
              TRUSTED BY 120+ HIGH-GROWTH SCALE-UPS & VENTURE-BACKED BRANDS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-black text-[#111111] dark:text-slate-300 text-xl tracking-tighter uppercase italic opacity-80">
              <span className="hover:text-[#0055FF] transition-colors cursor-default">PAYFLOW</span>
              <span className="hover:text-[#0055FF] transition-colors cursor-default">LUXELIVING</span>
              <span className="hover:text-[#0055FF] transition-colors cursor-default">OMNIHEALTH</span>
              <span className="hover:text-[#0055FF] transition-colors cursor-default">NEXTGEN AI</span>
              <span className="hover:text-[#0055FF] transition-colors cursor-default">NOVAPAY</span>
              <span className="hover:text-[#0055FF] transition-colors cursor-default">AURACARE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & METRICS ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#111111] text-white border-2 border-[#111111]">
          <div className="p-6 border-b sm:border-b-0 border-r border-white/20 text-center">
            <div className="text-3xl sm:text-5xl font-black tracking-tighter italic text-[#0055FF]">$45M+</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">AD SPEND MANAGED</div>
          </div>
          <div className="p-6 border-b sm:border-b-0 md:border-r border-white/20 text-center">
            <div className="text-3xl sm:text-5xl font-black tracking-tighter italic text-emerald-400">4.8X</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">AVERAGE CLIENT ROAS</div>
          </div>
          <div className="p-6 border-r border-white/20 text-center">
            <div className="text-3xl sm:text-5xl font-black tracking-tighter italic text-amber-400">1,200+</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">#1 GOOGLE RANKS</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl sm:text-5xl font-black tracking-tighter italic text-violet-400">98.4%</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">CLIENT RETENTION</div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 border-b-2 border-[#111111] dark:border-slate-800 pb-4">
          <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
            02. CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
            GROWTH SOLUTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 flex flex-col justify-between hover:border-[#0055FF] transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#111111] dark:bg-white text-white dark:text-[#111111] flex items-center justify-center font-black group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                    {srv.iconName === 'Search' && <Search className="w-5 h-5" />}
                    {srv.iconName === 'TrendingUp' && <TrendingUp className="w-5 h-5" />}
                    {srv.iconName === 'Share2' && <Share2 className="w-5 h-5" />}
                    {srv.iconName === 'FileText' && <FileText className="w-5 h-5" />}
                    {srv.iconName === 'Mail' && <Mail className="w-5 h-5" />}
                    {srv.iconName === 'Code' && <Code className="w-5 h-5" />}
                  </div>
                  {srv.badge && (
                    <span className="text-[9px] font-black uppercase tracking-widest bg-[#0055FF] text-white px-2 py-0.5">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-[#111111] dark:text-white uppercase tracking-tight group-hover:text-[#0055FF] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                  {srv.shortDescription}
                </p>

                <ul className="space-y-1.5 pt-3 border-t border-[#111111]/10 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300">
                  {srv.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#0055FF]">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t-2 border-[#111111] dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  FROM ${srv.tiers[0].price.toLocaleString()}/MO
                </span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[10px] font-black uppercase tracking-widest text-[#0055FF] hover:line-through flex items-center gap-1"
                >
                  <span>EXPLORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#111111] dark:border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
              03. PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
              CASE STUDIES
            </h2>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-4 py-2 border-2 border-[#111111] dark:border-white text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] transition-colors flex items-center gap-2 self-start"
          >
            <span>VIEW ALL CASES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MOCK_CASE_STUDIES.filter((cs) => cs.featured).map((cs) => (
            <div
              key={cs.id}
              onClick={() => onSelectCaseStudy(cs)}
              className="cursor-pointer bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 hover:border-[#0055FF] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden border-b-2 border-[#111111] dark:border-slate-800">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 text-[9px] font-black uppercase tracking-widest text-white bg-[#111111] px-2 py-1 border border-white">
                    {cs.industry}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-black text-lg uppercase tracking-tight text-[#111111] dark:text-white group-hover:text-[#0055FF] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs font-medium line-clamp-2">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#111111]/10 dark:border-slate-800">
                    {cs.results.slice(0, 2).map((r, idx) => (
                      <div key={idx} className="bg-slate-100 dark:bg-slate-900 p-2.5 border border-[#111111] dark:border-slate-800 text-center">
                        <div className="text-lg font-black tracking-tighter text-[#0055FF]">{r.value}</div>
                        <div className="text-[9px] font-extrabold text-slate-600 dark:text-slate-400 uppercase tracking-widest">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#0055FF]">
                <span>READ BREAKDOWN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS & REVIEWS */}
      <section className="bg-[#111111] text-white py-14 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y-2 border-[#111111]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-1 border-b border-white/20 pb-4">
            <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
              04. TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter italic">
              WHAT FOUNDERS SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#1a1a1a] border border-white/20 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs font-medium italic leading-relaxed">
                    "{t.message}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/20 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-9 h-9 object-cover border border-white"
                  />
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-wider text-white">{t.clientName}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{t.role}, {t.company}</p>
                    <span className="inline-block text-[9px] font-black text-emerald-400 bg-emerald-950 px-2 py-0.5 mt-1 border border-emerald-500/30">
                      {t.resultsAchieved}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0055FF] p-8 lg:p-12 text-white border-2 border-[#111111] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-black tracking-widest text-white uppercase bg-[#111111] px-3 py-1">
              05. FREE AUDIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter italic">
              SCHEDULE YOUR 30-MIN GROWTH AUDIT
            </h2>
            <p className="text-blue-100 text-xs font-medium leading-relaxed uppercase tracking-wider">
              Get a data-driven breakdown of your search visibility, paid ad ROI, and landing page bottlenecks—100% free with zero pitch obligation.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#111111] text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-colors shrink-0 flex items-center gap-2 border border-white"
          >
            <Calendar className="w-4 h-4 text-[#0055FF]" />
            <span>CLAIM AUDIT</span>
          </button>
        </div>
      </section>
    </div>
  );
};
