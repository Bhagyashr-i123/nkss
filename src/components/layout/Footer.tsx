'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Mail, ArrowUp, Send, CheckCircle2, ShieldCheck, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Glow ambient background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-gradient opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 via-cyan-500 to-sky-700 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-cyan-400">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">IEEE NKSS SAC</span>
                <p className="text-xs text-slate-400">Student Activities Committee • North Karnataka</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Empowering engineering students across North Karnataka Subsection (R10 India Council) through innovative technical symposia, WIE leadership, humanitarian SIGHT initiatives, and industry career pathways.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Hubballi, Belagavi, Kalaburagi</span>
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-sky-400" /> Region 10 (Asia-Pacific)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About SAC', 'Team & EXECOM', 'Events & Congress', 'Student Branches', 'Resources & Grants'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().split(' ')[0]}`;
                return (
                  <li key={item}>
                    <Link href={path} className="hover:text-cyan-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Student Hub */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Student Hub</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/verify" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verify Certificate
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-cyan-400 transition-colors">
                  SB Leaderboard
                </Link>
              </li>
              
              <li>
                <Link href="/resources" className="hover:text-cyan-400 transition-colors">
                  Activity Grant Forms
                </Link>
              </li>
              <li>
                <a href="https://ieee.org" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  IEEE Official Website ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">SAC Bulletin</h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe for monthly subsection event announcements, call for papers, and grant deadlines.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your student email..."
                  required
                  aria-label="Enter your student email"
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <Button type="submit" variant="primary" size="sm" className="w-full justify-center" icon={<Send className="w-3 h-3" />}>
                Subscribe
              </Button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed to SAC Newsletter!
              </p>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 IEEE North Karnataka Subsection Student Activities Committee. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400">IEEE Ethics & Code</Link>
            <Link href="/resources" className="hover:text-slate-400">Brand Guidelines</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
