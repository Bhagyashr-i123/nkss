'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, ExternalLink, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ThreeDCard } from '@/components/ui/ThreeDCard';
import { soundFx } from '@/components/ui/SoundEffects';
import { Hologram3DCube } from '@/components/home/Hologram3DCube';
import { MOCK_STUDENT_BRANCHES } from '@/data/mockData';
import Link from 'next/link';

export const HologramShowcase = () => {
  const [selectedId, setSelectedId] = useState(MOCK_STUDENT_BRANCHES[0].id);

  const activeBranch = MOCK_STUDENT_BRANCHES.find((b) => b.id === selectedId) || MOCK_STUDENT_BRANCHES[0];

  return (
    <section className="py-20 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HOLOGRAPHIC SHOWCASE"
          title="Exemplary North Karnataka"
          gradientTitle="Student Branch Hubs"
          subtitle="Explore interactive 3D cards of subsection engineering colleges, membership growth meters, and award recognitions."
          centered
        />

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MOCK_STUDENT_BRANCHES.map((branch) => (
            <button
              key={branch.id}
              onClick={() => {
                setSelectedId(branch.id);
                soundFx.playClick();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedId === branch.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {branch.name.split(' ')[0]} SB
            </button>
          ))}
        </div>

        {/* 3D Holographic Card Stage */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center">
            <Hologram3DCube />
          </div>

          <ThreeDCard>
            <GlassCard className="p-8 border-cyan-500/40 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="cyan">{activeBranch.district} District</Badge>
                    <Badge variant="gold">Rank #{activeBranch.rank}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeBranch.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{activeBranch.institution}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-right">
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">Subsection Activity Score</span>
                  <span className="font-mono text-3xl font-extrabold text-cyan-400">{activeBranch.score} pts</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mb-6">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block mb-1">IEEE Branch Code</span>
                  <span className="font-mono text-sm font-bold text-sky-400">{activeBranch.code}</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Active Student Members</span>
                  <span className="font-mono text-sm font-bold text-emerald-400">{activeBranch.activeMembers}+ Members</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Established Year</span>
                  <span className="font-mono text-sm font-bold text-amber-400">{activeBranch.established}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" /> Branch Honors & Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeBranch.achievements.map((ach, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Counselor: {activeBranch.counselor}</span>
                <Link href="/directory">
                  <span className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Explore Branch Directory <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </GlassCard>
          </ThreeDCard>
        </div>
      </div>
    </section>
  );
};
