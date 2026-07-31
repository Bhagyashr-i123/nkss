'use client';

import React, { useState } from 'react';
import { Search, Download, FileText, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MOCK_RESOURCES } from '@/data/mockData';
import Link from 'next/link';

export const ResourceFinder = () => {
  const [audienceFilter, setAudienceFilter] = useState<string>('ALL');

  const filteredResources = MOCK_RESOURCES.filter((res) => {
    if (audienceFilter === 'ALL') return true;
    return res.targetAudience.toLowerCase().includes(audienceFilter.toLowerCase());
  });

  return (
    <section className="py-20 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="DOWNLOAD CENTER & GRANTS"
          title="IEEE Opportunity Hub &"
          gradientTitle="Resource Finder"
          subtitle="Access official IEEE NKSS SAC activity funding application forms, vTools event reporting handbooks, branding vector kits, and student travel grant guidelines."
          action={
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
              {['ALL', 'SB Chairs', 'Volunteers', 'Student Members'].map((aud) => (
                <button
                  key={aud}
                  onClick={() => setAudienceFilter(aud)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    audienceFilter === aud
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {aud}
                </button>
              ))}
            </div>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredResources.map((res) => (
            <GlassCard key={res.id} interactive className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan">{res.category}</Badge>
                    <Badge variant="outline">{res.targetAudience}</Badge>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {res.fileType} • {res.fileSize}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {res.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">Official IEEE NKSS Document</span>
                <a href={res.downloadUrl} download>
                  <Button variant="outline" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
                    Download Document
                  </Button>
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
