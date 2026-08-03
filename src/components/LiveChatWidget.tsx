import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: '👋 Hello! Welcome to Nexus Digital. I am your AI Marketing Advisor. How can I help boost your growth today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate smart AI Advisor reply
    setTimeout(() => {
      let botResponse = "Thanks for your inquiry! One of our senior growth directors can audit your current marketing funnel during a free 30-minute strategy call. Would you like to schedule that?";

      const lower = userText.toLowerCase();
      if (lower.includes('seo') || lower.includes('google') || lower.includes('rank')) {
        botResponse = "Our SEO framework focuses on technical schema graphs and AI Overview generative search optimization. Most clients see a 250%+ organic growth in 6 months!";
      } else if (lower.includes('ppc') || lower.includes('ads') || lower.includes('roas')) {
        botResponse = "We manage Google & Meta ad accounts with custom conversion landing pages, averaging 4.8x ROAS across our portfolio. What is your current monthly ad spend target?";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('tier')) {
        botResponse = "Our packages range from $1,200/mo for targeted local SEO up to custom enterprise omnichannel scale. Try our interactive ROI Calculator in the top menu!";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
        botResponse = "You can reach us directly at hello@nexusdigital.com or call +1 (800) 555-0199. Our SF strategy office is open 8am - 6pm PST!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `msg-bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Floating Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[90vw] sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px] animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none flex items-center gap-1.5">
                  <span>Nexus Growth AI</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </h4>
                <p className="text-[11px] text-blue-100 mt-0.5">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-950/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 text-xs ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/60 rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                  <span className={`block text-[10px] mt-1 text-right ${m.sender === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </span>
                </div>
                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <Bot className="w-4 h-4 text-blue-600 animate-pulse" />
                <span>AI Advisor is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input
              type="text"
              placeholder="Ask about SEO, PPC, Pricing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-semibold text-xs hidden sm:inline">Live Growth Chat</span>
      </button>
    </div>
  );
};
