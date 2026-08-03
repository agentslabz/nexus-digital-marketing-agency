import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { ClientProject, SupportTicket } from '../types';
import {
  TrendingUp,
  Download,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Clock,
  Send,
  Plus,
  DollarSign,
  FileText,
  User,
  Shield,
  Briefcase
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, token } = useAuth();
  const { addToast } = useToast();

  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'downloads' | 'support'>('overview');
  const [projects, setProjects] = useState<ClientProject[]>([]);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);

  const [newTicketSubject, setNewTicketSubject] = useState('');
  const [newTicketCategory, setNewTicketCategory] = useState('SEO Strategy');
  const [newTicketMessage, setNewTicketMessage] = useState('');
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);

  const [ticketReplyText, setTicketReplyText] = useState<{ [id: string]: string }>({});

  useEffect(() => {
    if (!token) return;

    // Fetch Projects
    fetch('/api/projects', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.projects) setProjects(data.projects);
      })
      .catch((err) => console.error('Projects fetch error', err));

    // Fetch Support Tickets
    fetch('/api/tickets', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.tickets) setTickets(data.tickets);
      })
      .catch((err) => console.error('Tickets fetch error', err));
  }, [token]);

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketSubject || !newTicketMessage) return;

    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          subject: newTicketSubject,
          category: newTicketCategory,
          message: newTicketMessage
        })
      });

      const data = await res.json();
      if (res.ok) {
        setTickets([data.ticket, ...tickets]);
        addToast('Support ticket created successfully', 'success');
        setNewTicketSubject('');
        setNewTicketMessage('');
        setIsCreatingTicket(false);
      } else {
        throw new Error(data.error || 'Ticket error');
      }
    } catch (err: any) {
      addToast(err.message || 'Error creating ticket', 'error');
    }
  };

  const handleReplyTicket = async (ticketId: string) => {
    const text = ticketReplyText[ticketId];
    if (!text) return;

    try {
      const res = await fetch(`/api/tickets/${ticketId}/reply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ text })
      });

      const data = await res.json();
      if (res.ok) {
        setTickets(tickets.map((t) => (t.id === ticketId ? data.ticket : t)));
        addToast('Reply sent', 'success');
        setTicketReplyText({ ...ticketReplyText, [ticketId]: '' });
      } else {
        throw new Error(data.error || 'Reply error');
      }
    } catch (err: any) {
      addToast(err.message || 'Error sending reply', 'error');
    }
  };

  const currentProject = projects[0] || {
    projectName: 'Q3 Growth Campaign',
    progress: 68,
    budgetAllocated: 25000,
    spent: 17000,
    deliverablesCompleted: 14,
    totalDeliverables: 20
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Profile Header */}
      <section className="bg-[#111111] text-white p-6 sm:p-8 border-2 border-[#111111] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <img
            src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username}`}
            alt={user?.username}
            className="w-16 h-16 border-2 border-[#0055FF] object-cover"
          />
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-black uppercase tracking-tight text-white">{user?.companyName || user?.username}</h1>
              <span className="text-[9px] uppercase font-black text-[#0055FF] bg-white border border-[#0055FF] px-2 py-0.5">
                {user?.role === 'admin' ? 'ADMIN PORTAL' : 'ACTIVE CLIENT'}
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{user?.email} • ID: {user?.id}</p>
          </div>
        </div>

        {/* Quick Nav Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              activeTab === 'overview' ? 'bg-[#0055FF] text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            CAMPAIGN OVERVIEW
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3.5 py-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              activeTab === 'analytics' ? 'bg-[#0055FF] text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            LIVE ANALYTICS
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-3.5 py-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              activeTab === 'downloads' ? 'bg-[#0055FF] text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            REPORTS & ASSETS
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-3.5 py-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              activeTab === 'support' ? 'bg-[#0055FF] text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            SUPPORT TICKETS
          </button>
        </div>
      </section>

      {/* Tab Content: CAMPAIGN OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Metrics summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CAMPAIGN PROGRESS</span>
              <div className="text-3xl font-black text-[#0055FF] italic tracking-tighter">{currentProject.progress}%</div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 border border-[#111111] overflow-hidden mt-2">
                <div className="bg-[#0055FF] h-full" style={{ width: `${currentProject.progress}%` }} />
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ALLOCATED BUDGET</span>
              <div className="text-3xl font-black text-[#111111] dark:text-white italic tracking-tighter">
                ${currentProject.budgetAllocated?.toLocaleString()}
              </div>
              <span className="text-[10px] font-black text-[#0055FF] uppercase tracking-wider block">
                ${currentProject.spent?.toLocaleString()} SPENT TO DATE
              </span>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">DELIVERABLES DONE</span>
              <div className="text-3xl font-black text-[#111111] dark:text-white italic tracking-tighter">
                {currentProject.deliverablesCompleted} / {currentProject.totalDeliverables}
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">MILESTONES VERIFIED</span>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CURRENT ACCOUNT LEAD</span>
              <div className="text-base font-black text-[#111111] dark:text-white uppercase tracking-tight mt-1">ELENA ROSTOVA</div>
              <span className="text-[10px] text-[#0055FF] font-black uppercase tracking-wider block">DIRECTOR OF SEO & GROWTH</span>
            </div>
          </div>

          {/* Active Projects List */}
          <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-black text-[#111111] dark:text-white uppercase tracking-tight flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#0055FF]" />
              <span>ACTIVE CLIENT PROJECTS</span>
            </h3>

            {projects.map((p) => (
              <div key={p.id} className="bg-slate-50 dark:bg-slate-900 p-6 border-2 border-[#111111] dark:border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#111111] dark:border-slate-800 pb-3">
                  <div>
                    <h4 className="text-base font-black text-[#111111] dark:text-white uppercase tracking-tight">{p.projectName}</h4>
                    <span className="text-xs font-black text-[#0055FF] uppercase tracking-wider">{p.serviceType}</span>
                  </div>
                  <span className="text-[10px] font-black text-white bg-[#111111] px-2.5 py-1 uppercase tracking-widest self-start border border-[#111111]">
                    STATUS: {p.status.toUpperCase()}
                  </span>
                </div>

                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wide leading-relaxed">{p.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold uppercase tracking-wider">
                  <div>
                    <span className="text-slate-400 block text-[9px] font-black">START DATE</span>
                    <span className="font-black text-[#111111] dark:text-white">{p.startDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] font-black">END DATE</span>
                    <span className="font-black text-[#111111] dark:text-white">{p.endDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] font-black">PROGRESS</span>
                    <span className="font-black text-[#0055FF]">{p.progress}%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] font-black">BUDGET SPENT</span>
                    <span className="font-black text-[#111111] dark:text-white">${p.spent?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: LIVE ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-black text-[#111111] dark:text-white uppercase tracking-tight flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#0055FF]" />
                <span>CAMPAIGN PERFORMANCE ATTRIBUTION</span>
              </h3>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Real-time Google search rankings & PPC impressions.</p>
            </div>
            <span className="text-[10px] font-black text-[#0055FF] bg-white border border-[#0055FF] px-3 py-1 uppercase tracking-widest">
              LIVE DATA SYNC
            </span>
          </div>

          {/* Performance Visualizer Chart */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">IMPRESSIONS & ORGANIC LEAD TRAJECTORY</h4>
            <div className="h-64 w-full bg-[#111111] p-6 border-2 border-[#111111] relative flex items-end justify-between gap-4">
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-[#0055FF]/40 border border-[#0055FF] h-[40%] transition-all hover:bg-[#0055FF]" />
                <span className="text-[10px] text-white font-black uppercase tracking-widest">MAY</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-[#0055FF]/60 border border-[#0055FF] h-[65%] transition-all hover:bg-[#0055FF]" />
                <span className="text-[10px] text-white font-black uppercase tracking-widest">JUN</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-[#0055FF]/80 border border-[#0055FF] h-[80%] transition-all hover:bg-[#0055FF]" />
                <span className="text-[10px] text-white font-black uppercase tracking-widest">JUL</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-[#0055FF] border border-white h-[95%] transition-all hover:bg-blue-400" />
                <span className="text-[10px] text-[#0055FF] bg-white font-black uppercase tracking-widest px-1">AUG (CURRENT)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: REPORTS & DOWNLOADS */}
      {activeTab === 'downloads' && (
        <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-black text-[#111111] dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Download className="w-5 h-5 text-[#0055FF]" />
            <span>DOWNLOADABLE REPORTS & STRATEGIC ASSETS</span>
          </h3>

          <div className="space-y-3">
            {[
              { title: 'Q3 Technical SEO Audit & Backlink Graph.pdf', size: '4.2 MB', date: '2026-08-01' },
              { title: 'Google Ads ROAS & Conversion Attribution Report.csv', size: '1.8 MB', date: '2026-07-28' },
              { title: 'Klaviyo Email Automation Flow Performance.pdf', size: '2.5 MB', date: '2026-07-20' }
            ].map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border-2 border-[#111111] dark:border-slate-800 text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#0055FF]" />
                  <div>
                    <span className="text-[#111111] dark:text-white font-black block">{file.title}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{file.size} • UPLOADED {file.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => addToast(`Downloaded ${file.title}`, 'info')}
                  className="px-3.5 py-2 bg-[#111111] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#0055FF] transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: SUPPORT TICKETS */}
      {activeTab === 'support' && (
        <div className="bg-white dark:bg-[#1a1a1a] border-2 border-[#111111] dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-slate-800 pb-4">
            <h3 className="text-lg font-black text-[#111111] dark:text-white uppercase tracking-tight flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#0055FF]" />
              <span>STRATEGY SUPPORT TICKETS</span>
            </h3>
            <button
              onClick={() => setIsCreatingTicket(!isCreatingTicket)}
              className="px-4 py-2 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-black text-[10px] uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>NEW TICKET</span>
            </button>
          </div>

          {/* Ticket Creation Box */}
          {isCreatingTicket && (
            <form onSubmit={handleCreateTicket} className="bg-slate-50 dark:bg-slate-900 p-5 border-2 border-[#111111] dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-black text-[#111111] dark:text-white uppercase tracking-widest">OPEN SUPPORT REQUEST</h4>
              <input
                type="text"
                required
                placeholder="TICKET SUBJECT"
                value={newTicketSubject}
                onChange={(e) => setNewTicketSubject(e.target.value)}
                className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-950 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
              />
              <textarea
                rows={3}
                required
                placeholder="DESCRIBE YOUR INQUIRY OR STRATEGY CHANGE..."
                value={newTicketMessage}
                onChange={(e) => setNewTicketMessage(e.target.value)}
                className="w-full p-2.5 text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-950 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#0055FF] text-white font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors"
              >
                SUBMIT TICKET
              </button>
            </form>
          )}

          {/* Tickets List */}
          <div className="space-y-4">
            {tickets.map((t) => (
              <div key={t.id} className="bg-slate-50 dark:bg-slate-900 p-5 border-2 border-[#111111] dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between font-black text-xs uppercase tracking-wider">
                  <span className="text-[#111111] dark:text-white text-sm">{t.subject}</span>
                  <span className="text-[9px] uppercase bg-[#0055FF] text-white px-2 py-0.5 border border-[#111111]">
                    {t.status}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t-2 border-[#111111]/10 dark:border-slate-800">
                  {t.messages.map((m, idx) => (
                    <div key={idx} className={`p-3 text-xs font-medium uppercase tracking-wider border ${m.sender === 'client' ? 'bg-[#0055FF]/10 text-[#111111] dark:text-slate-100 border-[#0055FF]' : 'bg-white dark:bg-slate-950 text-[#111111] dark:text-slate-200 border-[#111111] dark:border-slate-800'}`}>
                      <span className="font-black block text-[9px] text-[#0055FF] mb-0.5">{m.sender === 'client' ? 'CLIENT' : 'SENIOR STRATEGIST'}</span>
                      <p>{m.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <input
                    type="text"
                    placeholder="TYPE A REPLY..."
                    value={ticketReplyText[t.id] || ''}
                    onChange={(e) => setTicketReplyText({ ...ticketReplyText, [t.id]: e.target.value })}
                    className="flex-1 p-2 text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-950 border border-[#111111] dark:border-slate-800 text-[#111111] dark:text-white focus:outline-none"
                  />
                  <button
                    onClick={() => handleReplyTicket(t.id)}
                    className="px-4 py-2 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-black text-[10px] uppercase tracking-widest hover:bg-[#0055FF] dark:hover:bg-[#0055FF] dark:hover:text-white transition-colors"
                  >
                    REPLY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
