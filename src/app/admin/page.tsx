'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MOCK_EVENTS, MOCK_STUDENT_BRANCHES, MOCK_CERTIFICATES, MOCK_ANNOUNCEMENTS } from '@/data/mockData';
import { EventItem, StudentBranch, CertificateData } from '@/types';
import { Plus, Edit, Trash2, ShieldCheck, Calendar, Building2, Bell, CheckCircle2, Sparkles, LayoutDashboard } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'events' | 'branches' | 'certs' | 'announcements'>('events');
  const [eventsList, setEventsList] = useState<EventItem[]>(MOCK_EVENTS);
  const [branchesList, setBranchesList] = useState<StudentBranch[]>(MOCK_STUDENT_BRANCHES);
  const [certsList, setCertsList] = useState<CertificateData[]>(MOCK_CERTIFICATES);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  // New Event Form State
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventBranch, setNewEventBranch] = useState('KLE Tech IEEE Student Branch');
  const [newEventTrack, setNewEventTrack] = useState<'SAC' | 'WIE' | 'YP' | 'SIGHT'>('SAC');

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle) return;
    const created: EventItem = {
      id: `ev-${Date.now()}`,
      title: newEventTitle,
      slug: newEventTitle.toLowerCase().replace(/\s+/g, '-'),
      category: 'Workshop',
      track: newEventTrack,
      date: new Date().toISOString(),
      time: '10:00 AM IST',
      location: 'Hubballi / Belagavi',
      venueType: 'In-Person',
      studentBranch: newEventBranch,
      description: 'Newly dispatched IEEE NKSS SAC event entry.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      registrationOpen: true,
      attendeesCount: 0,
    };
    setEventsList([created, ...eventsList]);
    setNewEventTitle('');
    setShowAddEventModal(false);
  };

  const handleDeleteEvent = (id: string) => {
    setEventsList(eventsList.filter((e) => e.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-32 pb-20 relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="SUBSECTION ADMIN CMS"
            title="IEEE NKSS SAC Executive"
            gradientTitle="Management Dashboard"
            subtitle="Centralized CMS portal for subsection executive officers to manage events, student branch metrics, certificate generation, and bulletins."
            action={
              <Button variant="glow" size="md" icon={<Plus className="w-4 h-4" />} onClick={() => setShowAddEventModal(true)}>
                Add New Event
              </Button>
            }
          />

          {/* Admin KPI Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <GlassCard className="p-5">
              <div className="flex items-center justify-between text-cyan-400 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">Active</span>
              </div>
              <p className="text-3xl font-bold font-mono text-white">{eventsList.length}</p>
              <p className="text-xs text-slate-400 mt-1">Total Subsection Events</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between text-sky-400 mb-2">
                <Building2 className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30">Recognized</span>
              </div>
              <p className="text-3xl font-bold font-mono text-white">{branchesList.length}</p>
              <p className="text-xs text-slate-400 mt-1">Student Branches</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between text-emerald-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Verified</span>
              </div>
              <p className="text-3xl font-bold font-mono text-white">{certsList.length}</p>
              <p className="text-xs text-slate-400 mt-1">Certificates Issued</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between text-amber-400 mb-2">
                <Bell className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">Live</span>
              </div>
              <p className="text-3xl font-bold font-mono text-white">{MOCK_ANNOUNCEMENTS.length}</p>
              <p className="text-xs text-slate-400 mt-1">Active Notices & Grants</p>
            </GlassCard>
          </div>

          {/* CMS Tab Controls */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'events' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              Events Manager ({eventsList.length})
            </button>
            <button
              onClick={() => setActiveTab('branches')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'branches' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              Student Branches ({branchesList.length})
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'certs' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              Certificate Registry ({certsList.length})
            </button>
          </div>

          {/* Events Manager Tab */}
          {activeTab === 'events' && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden glass-panel">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Event Title & Host SB</span>
                <span>Track</span>
                <span>Actions</span>
              </div>

              <div className="divide-y divide-slate-800">
                {eventsList.map((event) => (
                  <div key={event.id} className="p-4 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                    <div>
                      <h4 className="text-sm font-bold text-white">{event.title}</h4>
                      <p className="text-xs text-slate-400">{event.studentBranch} • {event.location}</p>
                    </div>
                    <Badge variant="cyan">{event.track}</Badge>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        title="Delete Event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Student Branches Tab */}
          {activeTab === 'branches' && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden glass-panel">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Branch Name & Institution</span>
                <span>District</span>
                <span>Score & Rank</span>
              </div>

              <div className="divide-y divide-slate-800">
                {branchesList.map((sb) => (
                  <div key={sb.id} className="p-4 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                    <div>
                      <h4 className="text-sm font-bold text-white">{sb.name}</h4>
                      <p className="text-xs text-slate-400">{sb.institution} (Code: {sb.code})</p>
                    </div>
                    <Badge variant="outline">{sb.district}</Badge>
                    <span className="font-mono text-xs font-bold text-amber-400">Rank #{sb.rank} ({sb.score} pts)</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificate Registry Tab */}
          {activeTab === 'certs' && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden glass-panel">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Certificate ID & Recipient</span>
                <span>Event Title</span>
                <span>Status</span>
              </div>

              <div className="divide-y divide-slate-800">
                {certsList.map((cert) => (
                  <div key={cert.id} className="p-4 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-400 block">{cert.id}</span>
                      <p className="text-sm font-bold text-white">{cert.recipientName} (IEEE ID: {cert.ieeeMemberId})</p>
                    </div>
                    <span className="text-xs text-slate-300">{cert.eventName}</span>
                    <Badge variant="cyan">Verified</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Add Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 glass-panel">
            <h3 className="text-xl font-bold text-white mb-4">Create New Subsection Event</h3>
            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Event Title</label>
                <input
                  type="text"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  placeholder="e.g. IEEE WIE AI/ML Workshop 2026"
                  required
                  aria-label="Event Title"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Track Category</label>
                <select
                  value={newEventTrack}
                  onChange={(e) => setNewEventTrack(e.target.value as any)}
                  aria-label="Track Category"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option value="SAC">SAC Track</option>
                  <option value="WIE">WIE Track</option>
                  <option value="YP">Young Professionals</option>
                  <option value="SIGHT">SIGHT Humanitarian</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddEventModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <Button type="submit" variant="primary" size="md">
                  Publish Event
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <FloatingNav />
    </main>
  );
}
