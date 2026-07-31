import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { LiveDashboard } from '@/components/home/LiveDashboard';
import { InteractiveMap } from '@/components/home/InteractiveMap';
import { TimelineSection } from '@/components/home/TimelineSection';
import { HologramShowcase } from '@/components/home/HologramShowcase';
import { LeaderboardSection } from '@/components/home/LeaderboardSection';
import { ResourceFinder } from '@/components/home/ResourceFinder';
import { AnnouncementsSection } from '@/components/home/AnnouncementsSection';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';

export const metadata = {
  title: 'IEEE NKSS SAC — Official Student Activities Committee | North Karnataka Subsection',
  description: 'Official digital platform for IEEE North Karnataka Subsection Student Activities Committee (IEEE NKSS SAC). Connecting 28+ Student Branches, 3,800+ members, flagship congresses, WIE initiatives, and certificate verification.',
  keywords: ['IEEE', 'IEEE NKSS', 'Student Activities Committee', 'North Karnataka', 'KLE Tech', 'SDMCET', 'GIT Belagavi', 'BEC Bagalkot', 'Engineering Congress'],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      <Navbar />
      <HeroSection />
      <HologramShowcase />
      <LiveDashboard />
      <InteractiveMap />
      <TimelineSection />
      <LeaderboardSection />
      <ResourceFinder />
      <AnnouncementsSection />
      <Footer />
      <FloatingNav />
    </main>
  );
}
