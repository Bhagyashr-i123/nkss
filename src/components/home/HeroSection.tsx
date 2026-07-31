'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ChevronRight, ShieldCheck, MapPin, Award, Users, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MOCK_STATS } from '@/data/mockData';
import { ThreeDCanvas } from '@/components/ui/ThreeDCanvas';
import { Hero3DCanvas } from '@/components/home/Hero3DCanvas';
import { ThreeDCard } from '@/components/ui/ThreeDCard';
import Link from 'next/link';

export const HeroSection = () => {
  // Live Countdown to IEEE NKSS Student Congress 2026
  const [timeLeft, setTimeLeft] = useState({ days: 48, hours: 14, minutes: 22, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: (prev.minutes - 1 + 60) % 60 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* 3D WebGL Globe & Neural Canvas */}
      <Hero3DCanvas />
      <ThreeDCanvas />

      {/* Glow Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-gradient opacity-70 pointer-events-none blur-3xl z-0" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Flagship Congress Live Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-300 shadow-xl mb-8 glass-panel"
        >
          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-bold tracking-wider uppercase text-[10px] animate-pulse">
            LIVE FLAGSHIP
          </span>
          <span className="font-medium text-slate-200">IEEE NKSS Student Congress 2026 (NKS-CON &apos;26)</span>
          <span className="text-cyan-400 font-mono hidden sm:inline">
            • T-{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
        </motion.div>

        {/* Hero Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto"
        >
          Pioneering Technology & Leadership across{' '}
          <span className="gradient-text-cyan">North Karnataka</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed"
        >
          Welcome to the official digital matrix of the{' '}
          <span className="text-cyan-300 font-semibold">IEEE NKSS Student Activities Committee</span>. 
          Connecting 28+ Student Branches, 3,800+ engineers, WIE leaders, and SIGHT humanitarian teams.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/events">
            <Button variant="glow" size="lg" icon={<Sparkles className="w-4 h-4" />}>
              Explore Upcoming Events
            </Button>
          </Link>
          <Link href="/directory">
            <Button variant="outline" size="lg" icon={<MapPin className="w-4 h-4" />}>
              Find Student Branches
            </Button>
          </Link>
          <Link href="/verify">
            <Button variant="secondary" size="lg" icon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}>
              Verify Certificate
            </Button>
          </Link>
        </motion.div>

        {/* Live Counters 3D Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {MOCK_STATS.map((stat, idx) => (
            <ThreeDCard key={idx} className="h-full">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/50 transition-all group glass-card text-left h-full flex flex-col justify-between">
                <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </p>
                <div>
                  <p className="text-xs font-semibold text-slate-300 mt-1">{stat.label}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{stat.suffix}</p>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
