'use client';

import React from 'react';
import { Bell, ArrowRight, Sparkles, CheckCircle2, Calendar, AlertCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { MOCK_ANNOUNCEMENTS } from '@/data/mockData';
import Link from 'next/link';

export const AnnouncementsSection = () => {
  return (
    <section className="py-20 relative bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SUBSECTION NOTICES"
          title="Official Announcements &"
          gradientTitle="Grants Bulletin"
          subtitle="Stay updated with call for funding proposals, student award nominations, and executive committee notices."
          action={
            <Link href="/announcements">
              <span className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                View All Bulletins <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {MOCK_ANNOUNCEMENTS.map((ann) => (
            <GlassCard key={ann.id} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={ann.important ? 'gold' : 'cyan'}>
                    {ann.category}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    {new Date(ann.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {ann.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ann.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                {ann.important && (
                  <span className="text-amber-400 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> High Priority Deadline
                  </span>
                )}
                {ann.link && (
                  <Link href={ann.link} className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 ml-auto">
                    Read Notice <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
