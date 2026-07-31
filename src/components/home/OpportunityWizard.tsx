'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, RefreshCw, Award, BookOpen, Calendar, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { soundFx } from '@/components/ui/SoundEffects';
import Link from 'next/link';

export const OpportunityWizard = () => {
  const [step, setStep] = useState(1);
  const [discipline, setDiscipline] = useState('');
  const [interest, setInterest] = useState('');
  const [status, setStatus] = useState('');
  const [matched, setMatched] = useState(false);

  const handleNext = () => {
    soundFx.playClick();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setMatched(true);
      soundFx.playSuccess();
    }
  };

  const handleReset = () => {
    soundFx.playClick();
    setStep(1);
    setDiscipline('');
    setInterest('');
    setStatus('');
    setMatched(false);
  };

  return (
    <section className="py-20 relative bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SMART MATCHMAKER"
          title="IEEE Opportunity & Grant"
          gradientTitle="Recommendation Wizard"
          subtitle="Answer 3 quick questions to discover personalized IEEE NKSS SAC activity grants, conference travel funding, and track symposia tailored for you."
          centered
        />

        <div className="max-w-3xl mx-auto mt-8">
          <GlassCard className="p-8 border-cyan-500/30 shadow-2xl relative">
            {/* Step Progress Bar */}
            {!matched && (
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span>Step {step} of 3</span>
                  <span className="font-mono text-cyan-400">{step === 1 ? 'Academic Discipline' : step === 2 ? 'Primary Interest' : 'Membership Status'}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-sky-500 to-cyan-400"
                    initial={{ width: '33%' }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {!matched ? (
              <div>
                {/* Step 1: Discipline */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <h3 className="text-xl font-bold text-white mb-4">Select your Engineering Discipline:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {[
                        'Computer Science / Artificial Intelligence',
                        'Electronics & Communication (VLSI / Embedded)',
                        'Electrical & Renewable Microgrids',
                        'Mechanical / Mechatronics / IoT',
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setDiscipline(item);
                            soundFx.playHover();
                          }}
                          className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${
                            discipline === item
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md shadow-cyan-500/20'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Interest */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <h3 className="text-xl font-bold text-white mb-4">What is your primary IEEE goal?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {[
                        'Organizing Flagship Hackathons & Congresses',
                        'Applying for IEEE Activity & Travel Grants',
                        'Women in Engineering (WIE) Leadership',
                        'Humanitarian SIGHT IoT Field Projects',
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setInterest(item);
                            soundFx.playHover();
                          }}
                          className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${
                            interest === item
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md shadow-cyan-500/20'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Status */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <h3 className="text-xl font-bold text-white mb-4">Select your Membership Status:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {[
                        'IEEE Student Member',
                        'Student Branch Executive / Chair',
                        'Non-Member / Prospective Student',
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setStatus(item);
                            soundFx.playHover();
                          }}
                          className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${
                            status === item
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md shadow-cyan-500/20'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Back
                    </button>
                  )}
                  <Button
                    variant="glow"
                    size="md"
                    className="ml-auto"
                    onClick={handleNext}
                    disabled={(step === 1 && !discipline) || (step === 2 && !interest) || (step === 3 && !status)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {step === 3 ? 'Generate My Match' : 'Continue'}
                  </Button>
                </div>
              </div>
            ) : (
              /* Matched Result Card */
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <Badge variant="cyan">Personalized Recommendations</Badge>
                    <h3 className="text-xl font-bold text-white mt-1">Matched IEEE NKSS Opportunities</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-cyan-400 font-bold block mb-1">Recommended Grant:</span>
                    <p className="font-semibold text-white">IEEE NKSS SAC Student Branch Activity Support Grant (Up to ₹25,000)</p>
                    <p className="text-slate-400 text-[11px] mt-1">Eligible for funding your technical symposia or WIE events.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-sky-400 font-bold block mb-1">Recommended Event:</span>
                    <p className="font-semibold text-white">IEEE NKSS Student Congress 2026 (NKS-CON &apos;26)</p>
                    <p className="text-slate-400 text-[11px] mt-1">Direct delegate pass & student paper contest submission.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Start Over
                  </button>
                  <Link href="/resources">
                    <Button variant="primary" size="md">
                      Apply for Matched Grants
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
