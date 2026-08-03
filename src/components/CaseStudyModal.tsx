import React from 'react';
import { X, TrendingUp, CheckCircle2, Building2, Tag, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenConsultation
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-6">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-500/30">
              {caseStudy.industry}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-2 leading-snug">
              {caseStudy.title}
            </h3>
          </div>
        </div>

        {/* Client & Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          {caseStudy.results.map((res, idx) => (
            <div key={idx} className="text-center p-2">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{res.value}</span>
              <span className="text-xs font-bold text-slate-500 block uppercase mt-0.5">{res.label}</span>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 inline-block bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                {res.growth}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              The Business Challenge
            </h4>
            <p className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              The Nexus Growth Strategy
            </h4>
            <p className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              {caseStudy.solution}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Core Services Used:
            </span>
            {caseStudy.tags.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-900"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-sm">Want similar results for your brand?</span>
            <span className="text-xs text-slate-500">Book a strategy call to review your current growth bottlenecks.</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all duration-200"
          >
            <span>Achieve Similar Results</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
