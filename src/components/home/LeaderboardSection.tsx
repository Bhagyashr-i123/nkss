'use client';

import React from 'react';
import { Trophy, Award, TrendingUp, Sparkles, Star, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { MOCK_LEADERBOARD } from '@/data/mockData';
import Link from 'next/link';

export const LeaderboardSection = () => {
  return (
    <section className="py-20 relative bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SUBSECTION RECOGNITION"
          title="Student Branch Leaderboard &"
          gradientTitle="Activity Matrix"
          subtitle="Ranking Student Branches based on event activity logging, member retention growth, and exemplary IEEE awards in North Karnataka."
          action={
            <Link href="/achievements">
              <span className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                View Full Hall of Fame <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          }
        />

        {/* Top 3 Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {MOCK_LEADERBOARD.slice(0, 3).map((entry) => {
            const isFirst = entry.rank === 1;
            return (
              <GlassCard
                key={entry.rank}
                className={`relative p-6 ${
                  isFirst
                    ? 'border-amber-500/50 shadow-2xl shadow-amber-500/10 bg-slate-900/90'
                    : 'border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                        isFirst
                          ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/40'
                          : entry.rank === 2
                          ? 'bg-slate-300 text-slate-950'
                          : 'bg-amber-700 text-white'
                      }`}
                    >
                      #{entry.rank}
                    </span>
                    <Badge variant={isFirst ? 'gold' : 'cyan'}>{entry.badge}</Badge>
                  </div>
                  <Trophy className={`w-5 h-5 ${isFirst ? 'text-amber-400' : 'text-slate-400'}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{entry.branchName}</h3>
                <p className="text-xs text-slate-400 mb-4">{entry.district} District</p>

                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <div>
                    <span className="text-slate-500 block">Events Conducted</span>
                    <span className="font-mono text-cyan-300 font-bold">{entry.eventsOrganized} Events</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Member Growth</span>
                    <span className="font-mono text-emerald-400 font-bold">+{entry.memberGrowthPercentage}%</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Activity Points</span>
                  <span className="font-mono font-extrabold text-amber-400 text-sm">{entry.totalPoints} pts</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Remaining Leaderboard Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden glass-panel">
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>Rank & Branch Name</span>
            <div className="hidden sm:flex items-center gap-12">
              <span>Events</span>
              <span>Growth</span>
              <span>Points</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/60">
            {MOCK_LEADERBOARD.slice(3).map((entry) => (
              <div key={entry.rank} className="px-6 py-4 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-300 flex items-center justify-center">
                    #{entry.rank}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{entry.branchName}</p>
                    <p className="text-xs text-slate-400">{entry.district}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 text-xs font-mono">
                  <span className="hidden sm:inline text-slate-300">{entry.eventsOrganized} Events</span>
                  <span className="hidden sm:inline text-emerald-400">+{entry.memberGrowthPercentage}%</span>
                  <span className="font-bold text-cyan-400 text-sm">{entry.totalPoints} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
