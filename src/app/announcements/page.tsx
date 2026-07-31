import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { AnnouncementsSection } from '@/components/home/AnnouncementsSection';

export const metadata = {
  title: 'Official Bulletins & Notices | IEEE NKSS SAC',
  description: 'Official call for grant proposals, student award nominations, and executive committee notices from IEEE North Karnataka Subsection.',
};

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="pt-20">
        <AnnouncementsSection />
      </div>
      <Footer />
      <FloatingNav />
    </main>
  );
}
