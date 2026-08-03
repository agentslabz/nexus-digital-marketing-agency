import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Contact: React.FC = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'SEO Optimization',
    budget: '$3,000 - $5,000 / mo',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        addToast(data.message, 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: 'SEO Optimization',
          budget: '$3,000 - $5,000 / mo',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit contact form');
      }
    } catch (err: any) {
      addToast(err.message || 'Error submitting message', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="text-center space-y-4 pt-4 max-w-3xl mx-auto">
        <span className="text-[10px] font-black tracking-widest text-[#0055FF] uppercase block">
          01. GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-[#111111] dark:text-white uppercase tracking-tighter italic">
          DISCUSS YOUR GROWTH GOALS
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-xs font-medium uppercase tracking-wider">
          Have questions about your digital strategy? Contact our SF headquarters directly or send a message below.
        </p>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="space-y-1 border-b-2 border-[#111111] dark:border-slate-800 pb-4">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#111111] dark:text-white">DIRECT INQUIRY</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">A Senior Manager responds within 2 business hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-300 mb-1">NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="SARAH JENKINS"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-900 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-300 mb-1">WORK EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="SARAH@COMPANY.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-900 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-300 mb-1">PHONE NUMBER</label>
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-900 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-300 mb-1">SERVICE INTEREST</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-900 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
                >
                  <option value="SEO Optimization">SEO & GENERATIVE AI SEARCH</option>
                  <option value="PPC Advertising">PPC ADVERTISING (GOOGLE & META)</option>
                  <option value="Social Media Marketing">SOCIAL MEDIA & VIDEO REELS</option>
                  <option value="Content Marketing">CONTENT & THOUGHT LEADERSHIP</option>
                  <option value="Email Marketing">EMAIL LIFECYCLE & KLAVIYO</option>
                  <option value="Web Design & Dev">CONVERSION WEB DEVELOPMENT</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-300 mb-1">MONTHLY AD/MARKETING BUDGET</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-900 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
              >
                <option value="Under $2,000 / mo">UNDER $2,000 / MONTH</option>
                <option value="$3,000 - $5,000 / mo">$3,000 - $5,000 / MONTH</option>
                <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / MONTH</option>
                <option value="$15,000+ / mo">$15,000+ / MONTH</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-slate-300 mb-1">PROJECT DETAILS *</label>
              <textarea
                rows={4}
                required
                placeholder="TELL US ABOUT YOUR TARGET AUDIENCE, CURRENT CAC, OR TIMELINE..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-900 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-black text-[10px] uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'SENDING...' : 'SUBMIT INQUIRY'}</span>
            </button>
          </form>
        </div>

        {/* Contact Info & Map Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#111111] text-white border-2 border-[#111111] p-8 space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight">SAN FRANCISCO HQ</h3>

            <div className="space-y-4 text-xs font-medium uppercase tracking-wider text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0055FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-white block">OFFICE ADDRESS:</span>
                  <span>750 Market Street, Suite 1400, San Francisco, CA 94103</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0055FF] shrink-0" />
                <div>
                  <span className="font-black text-white block">DIRECT PHONE:</span>
                  <a href="tel:+18005550199" className="hover:text-[#0055FF] transition-colors">+1 (800) 555-0199</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0055FF] shrink-0" />
                <div>
                  <span className="font-black text-white block">EMAIL:</span>
                  <a href="mailto:hello@nexusdigital.com" className="hover:text-[#0055FF] transition-colors">hello@nexusdigital.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0055FF] shrink-0" />
                <div>
                  <span className="font-black text-white block">OFFICE HOURS:</span>
                  <span>Monday - Friday, 8:00 AM - 6:00 PM PST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Image Representation */}
          <div className="relative h-64 overflow-hidden border-2 border-[#111111] dark:border-slate-800 group">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
              alt="Map location"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent flex items-end p-6">
              <div className="bg-white dark:bg-[#111111] p-3 border-2 border-[#111111] dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-[#111111] dark:text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0055FF]" />
                <span>SF Market St. Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
