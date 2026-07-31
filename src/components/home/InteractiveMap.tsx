'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Award, ExternalLink, Sparkles, Building2, PhoneCall } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { MOCK_STUDENT_BRANCHES } from '@/data/mockData';
import { StudentBranch } from '@/types';
import Link from 'next/link';

export const InteractiveMap = () => {
  const [selectedBranch, setSelectedBranch] = useState<StudentBranch>(MOCK_STUDENT_BRANCHES[0]);

  return (
    <section className="py-20 relative bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="GEOGRAPHICAL FOOTPRINT"
          title="Interactive North Karnataka"
          gradientTitle="Student Branch Matrix"
          subtitle="Explore IEEE Student Branches across North Karnataka districts. Select nodes on the interactive grid to view active membership, counselor contacts, and awards."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          {/* SVG Map Grid Visualizer */}
          <div className="lg:col-span-7 relative bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 min-h-[420px] flex flex-col justify-between overflow-hidden glass-panel">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 border-b border-slate-800 pb-3">
              <span className="flex items-center gap-1 font-mono text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" /> Subsection Geographical Nodes
              </span>
              <span>Click node pin to view details</span>
            </div>

            {/* Stylized Node Area */}
            <div className="relative w-full h-80 my-2 rounded-2xl bg-slate-950/80 border border-slate-800/80 overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              
              {/* Region Label Overlay */}
              <div className="absolute top-4 left-4 text-[11px] font-mono text-slate-500 uppercase tracking-widest pointer-events-none">
                NORTH KARNATAKA SUBSECTION (R10)
              </div>

              {/* Student Branch Pins */}
              {MOCK_STUDENT_BRANCHES.map((sb) => {
                const isSelected = selectedBranch.id === sb.id;
                return (
                  <button
                    key={sb.id}
                    onClick={() => setSelectedBranch(sb)}
                    style={{ left: `${sb.coordinates.x}%`, top: `${sb.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-cyan-400/30 animate-ping" />
                      )}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-lg ${
                          isSelected
                            ? 'bg-cyan-400 text-slate-950 scale-125 ring-4 ring-cyan-500/40 shadow-cyan-500/50'
                            : 'bg-slate-800 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 hover:scale-110'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>

                      {/* Tooltip Label */}
                      <span className="absolute top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-semibold text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                        {sb.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
              <span>Districts: Hubballi, Belagavi, Kalaburagi, Vijayapura, Bagalkot</span>
              <span className="text-cyan-400 font-mono">28 Active Student Branches</span>
            </div>
          </div>

          {/* Selected Branch Detail Spotlight Card */}
          <div className="lg:col-span-5">
            <GlassCard className="p-6 border-cyan-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 overflow-hidden shrink-0 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <Badge variant="cyan">{selectedBranch.district}</Badge>
                    <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                      {selectedBranch.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <p className="text-slate-400 font-medium">Institution Name</p>
                  <p className="text-sm font-semibold text-slate-100">{selectedBranch.institution}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div>
                    <span className="text-slate-400 block">IEEE Code</span>
                    <span className="font-mono text-cyan-300 font-bold text-sm">{selectedBranch.code}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Active Members</span>
                    <span className="font-mono text-sky-400 font-bold text-sm">{selectedBranch.activeMembers}+</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">SB Counselor</span>
                    <span className="text-slate-200 font-semibold">{selectedBranch.counselor}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Student Chair</span>
                    <span className="text-slate-200 font-semibold">{selectedBranch.chair}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <div>
                  <p className="text-slate-400 font-medium mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Key Branch Recognitions
                  </p>
                  <ul className="space-y-1.5">
                    {selectedBranch.achievements.map((ach, idx) => (
                      <li key={idx} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Rank #{selectedBranch.rank} in Subsection</span>
                <Link href="/directory">
                  <span className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Full Directory <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
