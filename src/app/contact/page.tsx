'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ieeeNumber: '',
    studentBranch: '',
    message: '',
    type: 'contact',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', ieeeNumber: '', studentBranch: '', message: '', type: 'contact' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const faqs = [
    { q: 'How can a Student Branch apply for IEEE NKSS SAC activity grants?', a: 'Student Branch Chairs can download the official Activity Grant Application Form from our Download Center, fill out event budget details, and submit to sac.chair@ieeenkss.org 30 days before event date.' },
    { q: 'What is the procedure for instant certificate verification?', a: 'Enter the unique Certificate ID printed on your IEEE event certificate into our /verify portal or scan the QR code to fetch verified digital record credentials.' },
    { q: 'Who is eligible to participate in NKS-CON annual student congress?', a: 'All undergraduate and postgraduate engineering students registered with an active IEEE membership across North Karnataka Subsection Student Branches are eligible to attend.' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-32 pb-20 relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="CONNECT & VOLUNTEER"
            title="Get in Touch with"
            gradientTitle="IEEE NKSS SAC ExeCom"
            subtitle="Have questions about student branch formation, travel grants, or volunteering for subsection committees? Send us a message."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
            {/* Contact Information & Volunteer Perks */}
            <div className="lg:col-span-5 space-y-6">
              <GlassCard className="p-6 border-cyan-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Subsection Contact Points</h3>
                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block">SAC Chair Email</span>
                      <a href="mailto:sac.chair@ieeenkss.org" className="font-semibold text-white hover:text-cyan-300">
                        sac.chair@ieeenkss.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block">Subsection Jurisdiction</span>
                      <span className="font-semibold text-white">North Karnataka (Hubballi, Belagavi, Kalaburagi, Vijayapura, Uttara Kannada)</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Volunteer Perks Card */}
              <GlassCard className="p-6 border-amber-500/30 bg-amber-950/10">
                <Badge variant="gold">VOLUNTEER PORTAL</Badge>
                <h4 className="text-lg font-bold text-white mt-2 mb-2">Join as SAC Student Volunteer</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Gain leadership experience organizing subsection hackathons, managing publicity, and coordinating IEEE R10 flagship events.
                </p>
              </GlassCard>
            </div>

            {/* Contact / Volunteer Form */}
            <div className="lg:col-span-7">
              <GlassCard className="p-8 border-slate-800">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white">Message Delivered</h3>
                    <p className="text-xs text-slate-400 mt-1">Thank you for connecting with IEEE NKSS SAC. Our team will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Patil"
                          aria-label="Your Name"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@ieee.org"
                          aria-label="Email Address"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">IEEE Member ID (Optional)</label>
                        <input
                          type="text"
                          value={formData.ieeeNumber}
                          onChange={(e) => setFormData({ ...formData, ieeeNumber: e.target.value })}
                          placeholder="e.g. 98402918"
                          aria-label="IEEE Member ID"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">College / Student Branch</label>
                        <input
                          type="text"
                          value={formData.studentBranch}
                          onChange={(e) => setFormData({ ...formData, studentBranch: e.target.value })}
                          placeholder="e.g. KLE Tech Hubballi"
                          aria-label="College or Student Branch"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your query or volunteer interest details..."
                        aria-label="Inquiry Message"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <Button type="submit" variant="glow" size="lg" className="w-full justify-center" icon={<Send className="w-4 h-4" />}>
                      Submit Inquiry / Application
                    </Button>
                  </form>
                )}
              </GlassCard>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white text-center mb-6">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-semibold text-white text-sm"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === idx && (
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed pt-2 border-t border-slate-800">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </main>
  );
}
