import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { InteractiveMap } from '@/components/home/InteractiveMap';
import { LeaderboardSection } from '@/components/home/LeaderboardSection';

export const metadata = {
  title: 'Student Branch Directory | IEEE NKSS SAC',
  description: 'Searchable directory of IEEE Student Branches across North Karnataka engineering institutions, counselor contacts, and member statistics.',
};

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="pt-20">
        <InteractiveMap />
        <LeaderboardSection />
      </div>
      <Footer />
      <FloatingNav />
    </main>
  );
}
