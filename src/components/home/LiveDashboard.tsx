'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowUpRight, Clock, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MOCK_EVENTS } from '@/data/mockData';
import { EventItem, TrackType } from '@/types';
import Link from 'next/link';

export const LiveDashboard = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('ALL');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filteredEvents = MOCK_EVENTS.filter((e) => {
    if (selectedTrack === 'ALL') return true;
    return e.track === selectedTrack;
  });

  return (
    <section className="py-20 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="LIVE EVENT DASHBOARD"
          title="Subsection Event"
          gradientTitle="Hub & Symposia"
          subtitle="Explore flagship student congresses, technical hackathons, WIE workshops, and humanitarian SIGHT deployments across North Karnataka."
          action={
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
              {['ALL', 'SAC', 'WIE', 'SIGHT'].map((track) => (
                <button
                  key={track}
                  onClick={() => setSelectedTrack(track)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedTrack === track
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {track === 'ALL' ? 'All Events' : `${track} Track`}
                </button>
              ))}
            </div>
          }
        />

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {filteredEvents.map((event) => (
            <GlassCard key={event.id} interactive className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant={event.category === 'Flagship' ? 'gold' : 'cyan'}>
                      {event.category}
                    </Badge>
                    <Badge variant="outline">{event.track}</Badge>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 text-xs text-slate-400 border-t border-b border-slate-800/80 py-3 my-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-sky-400" />
                      <span>Organized by: <strong className="text-slate-200 font-semibold">{event.studentBranch}</strong></span>
                    </span>
                    {event.attendeesCount && (
                      <span className="text-cyan-400 font-semibold">{event.attendeesCount}+ Registered</span>
                    )}
                  </div>
                </div>

                {/* Highlights preview */}
                {event.highlights && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {event.highlights.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                >
                  View Details & Agenda <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                {event.registrationOpen ? (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedEvent(event)}
                  >
                    Register Now
                  </Button>
                ) : (
                  <span className="text-xs text-slate-500 font-medium bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    Registration Closed
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Event Details & Agenda Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl p-6 glass-panel"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <Badge variant="cyan">{selectedEvent.category}</Badge>
                  <h2 className="text-2xl font-bold text-white mt-1">{selectedEvent.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <p>{selectedEvent.description}</p>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs">
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> <strong>Time:</strong> {selectedEvent.time}</p>
                  <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> <strong>Venue:</strong> {selectedEvent.location}</p>
                  <p className="flex items-center gap-2"><Users className="w-4 h-4 text-cyan-400" /> <strong>Host SB:</strong> {selectedEvent.studentBranch}</p>
                </div>

                {/* Speakers section if available */}
                {selectedEvent.speakers && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Keynote Speakers</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedEvent.speakers.map((spk, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                          <img src={spk.image} alt={spk.name} className="w-10 h-10 rounded-full object-cover border border-cyan-500/30" />
                          <div>
                            <p className="font-semibold text-white text-xs">{spk.name}</p>
                            <p className="text-[10px] text-slate-400">{spk.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Agenda */}
                {selectedEvent.agenda && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Schedule Agenda</h4>
                    <div className="space-y-2">
                      {selectedEvent.agenda.map((ag, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                          <span className="font-mono text-cyan-400 font-semibold">{ag.time}</span>
                          <span className="text-slate-200">{ag.session}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">IEEE Member ID mandatory for registration discount</span>
                {selectedEvent.registrationLink && (
                  <a href={selectedEvent.registrationLink} target="_blank" rel="noreferrer">
                    <Button variant="glow" size="md">
                      Proceed to Official Registration Form
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
