import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { LeaderboardSection } from '@/components/home/LeaderboardSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Achievements & Hall of Fame | IEEE NKSS SAC',
  description: 'Celebrating IEEE Region 10 and India Council awards won by North Karnataka Subsection Student Branches, counselors, and volunteers.',
};

export default function AchievementsPage() {
  const globalAwards = [
    { title: 'IEEE R10 Exemplary Student Branch Award 2025', recipient: 'KLE Technological University SB', year: 2025, category: 'Region 10' },
    { title: 'IEEE India Council Outstanding WIE Affinity Group', recipient: 'SDM College of Engg & Tech SB', year: 2025, category: 'India Council' },
    { title: 'IEEE SIGHT Project Humanitarian Grant ($5,000)', recipient: 'BASAVESHWAR ENGG COLLEGE SB', year: 2024, category: 'Global' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      
      <section className="pt-32 pb-16 relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="HALL OF FAME"
            title="Subsection Global &"
            gradientTitle="Regional Honors"
            subtitle="Showcasing international IEEE Region 10 awards, India Council accolades, and outstanding student branch recognitions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-16">
            {globalAwards.map((award, idx) => (
              <GlassCard key={idx} className="p-6 border-amber-500/30">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="gold">{award.category}</Badge>
                  <span className="font-mono text-amber-400 font-bold text-sm">{award.year}</span>
                </div>
                <Trophy className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">{award.title}</h3>
                <p className="text-xs text-slate-400">Awarded to: <strong className="text-slate-200">{award.recipient}</strong></p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <LeaderboardSection />

      <Footer />
      <FloatingNav />
    </main>
  );
}
