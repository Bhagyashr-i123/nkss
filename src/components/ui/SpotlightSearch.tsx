'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Calendar, MapPin, Award, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { MOCK_EVENTS, MOCK_STUDENT_BRANCHES, MOCK_ANNOUNCEMENTS, MOCK_RESOURCES, MOCK_CERTIFICATES } from '@/data/mockData';
import Link from 'next/link';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Handle Ctrl+K shortcut key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredEvents = MOCK_EVENTS.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase()) || e.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBranches = MOCK_STUDENT_BRANCHES.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase()) || b.institution.toLowerCase().includes(query.toLowerCase())
  );

  const filteredResources = MOCK_RESOURCES.filter((r) =>
    r.title.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCerts = MOCK_CERTIFICATES.filter((c) =>
    c.id.toLowerCase().includes(query.toLowerCase()) || c.recipientName.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults =
    (query ? filteredEvents.length + filteredBranches.length + filteredResources.length + filteredCerts.length : 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search IEEE events, student branches, resources, certificates... (e.g. Congress, KLE, Grant)"
              aria-label="Search IEEE events, student branches, resources, certificates"
              className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-base font-normal"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            {!query ? (
              <div className="text-center py-8 text-slate-400 text-sm">
                <p className="font-semibold text-slate-300 mb-1">Quick Search Spotlight</p>
                <p>Type to search across Student Branches, Events, Grants, and Certificate Verification.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['Congress 2026', 'KLE Tech SB', 'Activity Grant', 'Verify Certificate'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-800/80 text-cyan-300 hover:bg-slate-700 border border-cyan-500/20"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : totalResults === 0 ? (
              <div className="text-center py-10 text-slate-400">
                <p>No matching results for &quot;{query}&quot;</p>
              </div>
            ) : (
              <>
                {/* Events Section */}
                {filteredEvents.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Events
                    </h3>
                    <div className="space-y-1.5">
                      {filteredEvents.map((item) => (
                        <Link
                          key={item.id}
                          href="/events"
                          onClick={onClose}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group"
                        >
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-cyan-300">{item.title}</p>
                            <p className="text-xs text-slate-400">{item.studentBranch} • {item.location}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Student Branches Section */}
                {filteredBranches.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" /> Student Branches
                    </h3>
                    <div className="space-y-1.5">
                      {filteredBranches.map((item) => (
                        <Link
                          key={item.id}
                          href="/directory"
                          onClick={onClose}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group"
                        >
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-sky-300">{item.name}</p>
                            <p className="text-xs text-slate-400">{item.institution} ({item.district})</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificate Verification Section */}
                {filteredCerts.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Certificates
                    </h3>
                    <div className="space-y-1.5">
                      {filteredCerts.map((item) => (
                        <Link
                          key={item.id}
                          href="/verify"
                          onClick={onClose}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group border border-emerald-500/20 bg-emerald-950/10"
                        >
                          <div>
                            <p className="text-sm font-semibold text-emerald-300">Certificate ID: {item.id}</p>
                            <p className="text-xs text-slate-300">{item.recipientName} - {item.eventName}</p>
                          </div>
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Verified</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Esc</kbd> to close</span>
            <span>IEEE NKSS SAC Global Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
