import React from 'react';
import { PhoneCall } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/18005550199?text=Hello%20Nexus%20Digital!%20I%20would%20like%20to%20discuss%20a%20marketing%20strategy."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/25 transition-all duration-300 hover:scale-105 active:scale-95 text-xs font-semibold"
      aria-label="Chat on WhatsApp"
    >
      <PhoneCall className="w-4 h-4" />
      <span className="hidden sm:inline">WhatsApp Direct</span>
    </a>
  );
};
