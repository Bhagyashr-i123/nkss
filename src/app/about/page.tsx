import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { TimelineSection } from '@/components/home/TimelineSection';
import { Target, Compass, ShieldCheck, Award, Users, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'About SAC | IEEE NKSS SAC',
  description: 'Learn about the mission, leadership vision, and governance structure of IEEE North Karnataka Subsection Student Activities Committee.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      
      <section className="pt-32 pb-16 relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="ORGANIZATION PROFILE"
            title="Empowering the Next Generation of"
            gradientTitle="North Karnataka Engineers"
            subtitle="IEEE North Karnataka Subsection Student Activities Committee (SAC) bridges academic excellence with industry innovation across 28+ engineering colleges."
            centered
          />

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <GlassCard className="p-8 border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Core Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To foster technical excellence, leadership acumen, and ethical engineering practices among undergraduate and postgraduate IEEE student members in North Karnataka by providing financial grants, mentorship, and regional symposia.
              </p>
            </GlassCard>

            <GlassCard className="p-8 border-sky-500/30">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision 2030</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To establish North Karnataka Subsection as the benchmark model in IEEE Region 10 for student branch activity vibrancy, humanitarian SIGHT deployments, and seamless student-to-professional member transitions.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <TimelineSection />

      <Footer />
      <FloatingNav />
    </main>
  );
}
