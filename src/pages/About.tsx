import React from 'react';
import { MOCK_TEAM } from '../data/mockData';
import {
  Linkedin,
  Twitter,
  Mail,
  ShieldCheck,
  Target,
  Zap,
  Users,
  Award,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const values = [
    {
      title: 'Data-Backed Truth',
      desc: 'We make marketing decisions based on hard mathematical attribution and unit economics—never opinions or vanity metrics.',
      icon: Target
    },
    {
      title: 'Sub-Second Execution',
      desc: 'Speed wins in modern marketing. From rapid landing page experiments to immediate ad iterations, we move fast.',
      icon: Zap
    },
    {
      title: 'Senior Ownership',
      desc: 'No junior hand-offs. You work directly with proven marketing strategists who have built 7 and 8 figure brands.',
      icon: Users
    },
    {
      title: 'Radical Transparency',
      desc: 'Real-time client portals, live performance metrics, and no hidden markups on ad spend or software tools.',
      icon: ShieldCheck
    }
  ];

  const milestones = [
    { year: '2020', title: 'Agency Founded', desc: 'Started in San Francisco with 3 senior growth strategists focused on technical B2B SEO.' },
    { year: '2022', title: 'PPC & Klaviyo Scale', desc: 'Crossed $15M in managed ad spend and expanded into full lifecycle e-commerce retention.' },
    { year: '2024', title: 'Generative Search Engine', desc: 'Pioneered AI Overview and schema graph architectures for tech scale-ups.' },
    { year: '2026', title: 'Category Leadership', desc: 'Over $45M in ad spend managed with 120+ active venture-backed client partners.' }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="text-center space-y-4 pt-4 max-w-4xl mx-auto px-4">
        <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
          01. WHO WE ARE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
          WE BUILD PREDICTABLE REVENUE MACHINES
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-xs font-medium uppercase tracking-wider leading-relaxed">
          Nexus Digital was founded on a simple realization: traditional agencies sell activity, but great brands demand bottom-line profit. We align our entire structure around your LTV and acquisition goals.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 text-center border-b-2 border-[#111111] dark:border-slate-800 pb-4">
          <span className="text-[10px] font-black text-[#0055FF] uppercase tracking-widest">OUR DNA</span>
          <h2 className="text-3xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">CORE OPERATING PRINCIPLES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 space-y-3"
              >
                <div className="w-10 h-10 bg-[#111111] dark:bg-white text-white dark:text-[#111111] flex items-center justify-center font-black">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-black text-base uppercase tracking-tight text-[#111111] dark:text-white">{v.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 text-center border-b-2 border-[#111111] dark:border-slate-800 pb-4">
          <span className="text-[10px] font-black text-[#0055FF] uppercase tracking-widest">OUR JOURNEY</span>
          <h2 className="text-3xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">GROWTH TIMELINE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-slate-100 dark:bg-slate-900 border-2 border-[#111111] dark:border-slate-800 p-5 space-y-2">
              <span className="text-2xl font-black italic tracking-tighter text-[#0055FF]">{m.year}</span>
              <h4 className="font-black text-xs uppercase tracking-wider text-[#111111] dark:text-white">{m.title}</h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 text-center border-b-2 border-[#111111] dark:border-slate-800 pb-4">
          <span className="text-[10px] font-black text-[#0055FF] uppercase tracking-widest">LEADERSHIP</span>
          <h2 className="text-3xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">SENIOR STRATEGISTS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="h-60 overflow-hidden relative border-b-2 border-[#111111] dark:border-slate-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-black text-base uppercase tracking-tight text-[#111111] dark:text-white">{member.name}</h3>
                  <span className="text-[10px] font-black text-[#0055FF] uppercase tracking-widest block">{member.role}</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed pt-1">{member.bio}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#111111]/10 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest bg-[#111111] text-white px-2 py-0.5">
                  {member.specialization}
                </span>
                <div className="flex gap-2 text-[#111111] dark:text-slate-300">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0055FF]">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-[#0055FF]">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white p-6 sm:p-8 border-2 border-[#111111] flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black uppercase tracking-tight">OFFICIAL AGENCY PARTNERSHIPS</h3>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Audited and certified by leading global digital ad networks.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-extrabold uppercase tracking-widest text-slate-300">
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-3.5 py-2 border border-white/20">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Google Premier Partner 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-3.5 py-2 border border-white/20">
              <Award className="w-4 h-4 text-[#0055FF]" />
              <span>Meta Preferred Partner</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-3.5 py-2 border border-white/20">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Klaviyo Master Gold Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
