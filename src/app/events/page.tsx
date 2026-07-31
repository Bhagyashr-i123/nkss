import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { LiveDashboard } from '@/components/home/LiveDashboard';

export const metadata = {
  title: 'Subsection Events & Symposia | IEEE NKSS SAC',
  description: 'Discover upcoming IEEE North Karnataka Subsection events, flagship congresses, WIE summits, hackathons, and webinars.',
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="pt-20">
        <LiveDashboard />
      </div>
      <Footer />
      <FloatingNav />
    </main>
  );
}
