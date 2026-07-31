'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { MOCK_TEAM_MEMBERS } from '@/data/mockData';
import { TrackType } from '@/types';
import { Mail, Sparkles, Building2, Shield, Globe } from 'lucide-react';

export default function TeamPage() {
  const [activeTrack, setActiveTrack] = useState<string>('ALL');

  const filteredMembers = MOCK_TEAM_MEMBERS.filter((m) => {
    if (activeTrack === 'ALL') return true;
    return m.track === activeTrack;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-32 pb-20 relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="SUBSECTION LEADERSHIP"
            title="Committee Leadership &"
            gradientTitle="Track Explorer"
            subtitle="Meet the IEEE faculty advisors, subsection chairs, WIE leads, Young Professionals, and student leaders steering North Karnataka Subsection."
            action={
              <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                {['ALL', 'EXECOM', 'SAC', 'WIE', 'YP', 'SIGHT'].map((track) => (
                  <button
                    key={track}
                    onClick={() => setActiveTrack(track)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTrack === track
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {track}
                  </button>
                ))}
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredMembers.map((member) => (
              <GlassCard key={member.id} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={member.track === 'WIE' ? 'gold' : 'cyan'}>
                      {member.track} Track
                    </Badge>
                    {member.ieeeId && (
                      <span className="text-[11px] font-mono text-slate-400">{member.ieeeId}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500/30 shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">{member.name}</h3>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2 mb-4">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{member.institution}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <a href={`mailto:${member.email}`} className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" /> {member.email}
                  </a>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-xs">
                      <Globe className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </main>
  );
}
