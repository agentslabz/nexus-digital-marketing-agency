import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    addToast('Successfully subscribed to our Growth Marketing Newsletter!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#111111] text-white border-t-2 border-[#111111] transition-colors duration-300">
      {/* Animated Marquee Banner */}
      <div className="h-12 bg-[#0055FF] flex items-center px-4 overflow-hidden border-b border-[#111111]">
        <div className="animate-marquee whitespace-nowrap flex space-x-12 text-[11px] font-black uppercase italic tracking-widest text-white">
          <span>★ Performance Marketing</span>
          <span>★ Search Dominance</span>
          <span>★ Social Growth Engine</span>
          <span>★ Content Strategy</span>
          <span>★ Conversion Design</span>
          <span>★ Performance Marketing</span>
          <span>★ Search Dominance</span>
          <span>★ Social Growth Engine</span>
          <span>★ Content Strategy</span>
          <span>★ Conversion Design</span>
          <span>★ Performance Marketing</span>
          <span>★ Search Dominance</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 space-y-12">
        {/* Top Newsletter & Callout Box */}
        <div className="bg-[#1a1a1a] border border-white/20 p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0055FF] block underline">
              01. Weekly Intelligence
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white">
              Join 15,000+ Growth Leaders
            </h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Get our weekly breakdown of algorithm updates, AI search strategies, PPC creative tests, and high-converting funnel breakdowns.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1 sm:w-80 border-b border-white pb-1">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-[11px] font-bold text-white placeholder:text-white/40 focus:outline-none tracking-wider uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#0055FF] hover:bg-blue-500 text-white font-black text-[11px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              <span>JOIN</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-[#111111] flex items-center justify-center font-black text-lg">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="font-black text-2xl text-white tracking-tighter uppercase italic">
                NEXUS<span className="text-[#0055FF]">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-sm">
              We build data-driven digital ecosystems that scale companies through technical SEO, aggressive PPC, and psychological content strategy.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Youtube, href: 'https://youtube.com' }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 border border-white/20 flex items-center justify-center text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-colors"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#0055FF]">Growth Solutions</h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              {['SEO Optimization', 'Paid Acquisition', 'Social Media', 'Content Strategy', 'Email Architecture', 'Web Architecture'].map((name, i) => (
                <li key={i}>
                  <button onClick={() => onNavigate('services')} className="hover:line-through transition-all text-left">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#0055FF]">Company</h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <li><button onClick={() => onNavigate('about')} className="hover:line-through">About Nexus</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:line-through">Case Studies</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:line-through">Pricing</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:line-through">Insights</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:line-through">Contact Us</button></li>
              <li>
                <button onClick={onOpenConsultation} className="text-[#0055FF] hover:underline flex items-center gap-1 font-black">
                  <span>Hire Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#0055FF]">San Francisco HQ</h4>
            <div className="space-y-2 text-xs text-slate-400 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                <span>750 Market St, Suite 1400, San Francisco, CA 94103</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0055FF] shrink-0" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">+1 (800) 555-0199</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0055FF] shrink-0" />
                <a href="mailto:hello@nexusdigital.com" className="hover:text-white transition-colors">hello@nexusdigital.com</a>
              </div>
              <div className="pt-2 text-[10px] text-slate-500 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>ISO 27001 & GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} NEXUS DIGITAL. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
