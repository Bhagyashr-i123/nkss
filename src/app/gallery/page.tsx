'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: '1', title: 'NKS-CON 2024 Flagship Inauguration', category: 'Flagship', date: 'Oct 2024', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', caption: '500+ Student Delegates gathered in Hubballi Auditorium' },
  { id: '2', title: 'WIE Deep Tech Summit Panel', category: 'Workshop', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', caption: 'Women Leaders discussing VLSI innovation at SDMCET Dharwad' },
  { id: '3', title: '24-Hour Codefest HackNKSS 1.0', category: 'Flagship', date: 'Jan 2025', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80', caption: 'Overnight hackathon teams building IoT smart microgrid prototypes' },
  { id: '4', title: 'IEEE SIGHT Village Deployment', category: 'Humanitarian', date: 'Feb 2025', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80', caption: 'Deploying low-cost water quality telemetry in Bagalkot' },
  { id: '5', title: 'Subsection Annual Awards Night', category: 'Celebration', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', caption: 'Honoring Exemplary Student Branches & Counselors' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('ALL');

  const filtered = GALLERY_ITEMS.filter((g) => {
    if (filter === 'ALL') return true;
    return g.category === filter;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-32 pb-20 relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="VISUAL ARCHIVE"
            title="IEEE NKSS SAC Event"
            gradientTitle="Gallery & Moments"
            subtitle="Highlights from subsection congresses, technical symposia, WIE summits, and humanitarian field deployments."
            action={
              <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                {['ALL', 'Flagship', 'Workshop', 'Humanitarian', 'Celebration'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      filter === cat
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((item) => (
              <GlassCard key={item.id} className="p-4 overflow-hidden group">
                <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="cyan">{item.category}</Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono font-semibold text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700">
                    {item.date}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.caption}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </main>
  );
}
