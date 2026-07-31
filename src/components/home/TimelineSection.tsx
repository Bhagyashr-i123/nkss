'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

const SAC_TIMELINE_EVENTS = [
  {
    year: '2026',
    title: 'IEEE NKSS SAC Digital Transformation & Next-Gen Matrix',
    description: 'Launched centralized student portal with live event countdown, instant certificate verification, and regional student branch leaderboard.',
    badge: 'Current Era',
    stats: '28+ Student Branches',
  },
  {
    year: '2024',
    title: 'Flagship IEEE NKS-CON Expansion & SIGHT Grants',
    description: 'Gathered 500+ student delegates in Hubballi for inaugural NKS-CON and secured $5,000+ IEEE SIGHT humanitarian grants for rural drinking water IoT projects.',
    badge: 'Major Milestone',
    stats: '500+ Delegates',
  },
  {
    year: '2021',
    title: 'WIE Empower & Student Emergency Leadership Network',
    description: 'Established subsection WIE leadership bootcamps and virtual hackathons across Belagavi, Dharwad, and Kalaburagi during global pandemic shifts.',
    badge: 'Resilience Era',
    stats: '15 Hackathons',
  },
  {
    year: '2015',
    title: 'Official Subsection SAC Charter Recognition',
    description: 'IEEE North Karnataka Subsection Student Activities Committee received official charter from IEEE Region 10 India Council.',
    badge: 'Subsection Charter',
    stats: 'Official Formation',
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-20 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HISTORICAL JOURNEY"
          title="Interactive NKSS SAC"
          gradientTitle="Milestone Timeline"
          subtitle="Tracing the decade-long journey of engineering empowerment, regional congresses, WIE initiatives, and global IEEE recognitions."
          centered
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-sky-500 to-transparent hidden md:block" />

          <div className="space-y-12">
            {SAC_TIMELINE_EVENTS.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between group">
                  {/* Center Node Pin */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-300 font-mono text-xs font-bold shadow-lg shadow-cyan-500/20 z-10">
                    {item.year.slice(2)}
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                    <GlassCard className="p-6 border-slate-800 hover:border-cyan-500/30">
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <Badge variant="cyan">{item.year}</Badge>
                        <Badge variant="outline">{item.badge}</Badge>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className={`pt-3 border-t border-slate-800/80 text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> {item.stats}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
