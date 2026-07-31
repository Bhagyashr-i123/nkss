import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, Sparkles, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 bg-grid-pattern">
      <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl text-center glass-panel shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 text-cyan-400">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-white font-mono mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-200 mb-2">Page Not Found</h2>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          The requested IEEE NKSS SAC page matrix node does not exist or has been relocated.
        </p>
        <Link href="/">
          <Button variant="glow" size="md" icon={<Home className="w-4 h-4" />}>
            Return to SAC Homepage
          </Button>
        </Link>
      </div>
    </main>
  );
}
