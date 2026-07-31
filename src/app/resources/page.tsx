import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { ResourceFinder } from '@/components/home/ResourceFinder';

export const metadata = {
  title: 'Resources & Grant Download Center | IEEE NKSS SAC',
  description: 'Download official IEEE NKSS SAC activity grant forms, branding kits, vTools reporting guidelines, and student travel funding documents.',
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="pt-20">
        <ResourceFinder />
      </div>
      <Footer />
      <FloatingNav />
    </main>
  );
}
