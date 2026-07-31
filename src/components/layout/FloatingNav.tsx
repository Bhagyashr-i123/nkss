'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck, MapPin, Trophy, Command, Sparkles, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export const FloatingNav = () => {
  const [expanded, setExpanded] = useState(false);

  const quickActions = [
    { label: 'Upcoming Events', href: '/events', icon: Calendar, color: 'text-cyan-400' },
    { label: 'Student Branches', href: '/directory', icon: MapPin, color: 'text-sky-400' },
    { label: 'Verify Certificate', href: '/verify', icon: ShieldCheck, color: 'text-emerald-400' },
    { label: 'Leaderboard', href: '/achievements', icon: Trophy, color: 'text-amber-400' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 p-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-xl space-y-2 w-56 glass-panel"
          >
            <div className="px-2 py-1 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>Quick Navigation Hub</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  onClick={() => setExpanded(false)}
                  className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-slate-800/80 hover:text-white transition-colors group"
                >
                  <Icon className={`w-4 h-4 ${action.color} group-hover:scale-110 transition-transform`} />
                  <span>{action.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-cyan-500/40 shadow-xl shadow-cyan-500/10 backdrop-blur-md transition-all group"
      >
        <Command className="w-4 h-4 text-cyan-400 group-hover:rotate-180 transition-transform duration-300" />
        <span className="text-xs font-semibold">IEEE Quick Actions</span>
        <ChevronUp className={`w-3.5 h-3.5 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
