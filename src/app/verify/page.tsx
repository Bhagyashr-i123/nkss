'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MOCK_CERTIFICATES } from '@/data/mockData';
import { CertificateData } from '@/types';
import { Search, ShieldCheck, CheckCircle2, XCircle, Award, Sparkles, Download, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VerifyPage() {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState<CertificateData | null>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const found = MOCK_CERTIFICATES.find(
      (c) => c.id.toLowerCase() === certId.trim().toLowerCase()
    );
    if (found) {
      setResult(found);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } else {
      setResult(null);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-32 pb-20 relative bg-grid-pattern min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <SectionHeader
            badge="AUTHENTICITY ENGINE"
            title="Instant Certificate"
            gradientTitle="Verification Portal"
            subtitle="Verify official IEEE NKSS SAC participation, award, and volunteer certificates using your unique Certificate ID."
            centered
          />

          {/* Search Form */}
          <GlassCard className="p-8 max-w-xl mx-auto border-cyan-500/40 shadow-2xl">
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Enter IEEE Certificate ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="e.g. NKSS-2026-9081 or WIE-2026-4410"
                    required
                    aria-label="Enter IEEE Certificate ID"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                  <ShieldCheck className="w-5 h-5 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span>Sample IDs to try:</span>
                {['NKSS-2026-9081', 'WIE-2026-4410', 'HACK-2026-1092'].map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => setCertId(sample)}
                    className="font-mono text-cyan-400 hover:underline"
                  >
                    {sample}
                  </button>
                ))}
              </div>

              <Button type="submit" variant="glow" size="lg" className="w-full justify-center" icon={<Search className="w-4 h-4" />}>
                Verify Authenticity
              </Button>
            </form>
          </GlassCard>

          {/* Result Verification Card */}
          {searched && (
            <div className="mt-8 max-w-2xl mx-auto">
              {result ? (
                <GlassCard className="p-8 border-emerald-500/50 bg-emerald-950/20 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      <div>
                        <Badge variant="cyan">Official Verified Record</Badge>
                        <h3 className="text-xl font-bold text-white mt-1">Certificate Authenticated</h3>
                      </div>
                    </div>
                    <span className="font-mono text-emerald-400 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      ID: {result.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block">Recipient Name</span>
                      <span className="text-sm font-bold text-white">{result.recipientName}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block">IEEE Member ID</span>
                      <span className="text-sm font-mono font-bold text-cyan-300">{result.ieeeMemberId}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block">Event Title</span>
                      <span className="text-sm font-semibold text-slate-100">{result.eventName}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block">Award Category / Role</span>
                      <span className="text-sm font-bold text-amber-400">{result.role}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Issued by IEEE NKSS SAC on {result.issueDate}</span>
                    <Button variant="outline" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
                      Download PDF
                    </Button>
                  </div>
                </GlassCard>
              ) : (
                <GlassCard className="p-6 border-red-500/40 bg-red-950/10 text-center">
                  <XCircle className="w-10 h-10 text-red-400 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-white">Certificate Not Found</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    No certificate matching ID &quot;{certId}&quot; was found in the official IEEE NKSS registry. Please re-check the ID printed on your certificate document.
                  </p>
                </GlassCard>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </main>
  );
}
