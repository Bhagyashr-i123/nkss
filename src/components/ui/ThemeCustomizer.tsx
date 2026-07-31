'use client';

import React, { useState, useEffect } from 'react';
import { Palette, Check, Volume2, VolumeX } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const ThemeCustomizer: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'cyan' | 'gold' | 'violet' | 'emerald'>('cyan');
  const [soundActive, setSoundActive] = useState(true);

  const themes = [
    { id: 'cyan', label: 'Electric Cyan', color: '#00F0FF', primary: '#006699' },
    { id: 'gold', label: 'IEEE Heritage Gold', color: '#FFB800', primary: '#D97706' },
    { id: 'violet', label: 'WIE Deep Tech Violet', color: '#A855F7', primary: '#7E22CE' },
    { id: 'emerald', label: 'SIGHT Emerald', color: '#10B981', primary: '#047857' },
  ];

  const applyTheme = (themeId: 'cyan' | 'gold' | 'violet' | 'emerald') => {
    setCurrentTheme(themeId);
    soundFx.playClick();
    const root = document.documentElement;

    if (themeId === 'cyan') {
      root.style.setProperty('--electric-cyan', '#00F0FF');
      root.style.setProperty('--ieee-blue', '#006699');
    } else if (themeId === 'gold') {
      root.style.setProperty('--electric-cyan', '#FFB800');
      root.style.setProperty('--ieee-blue', '#D97706');
    } else if (themeId === 'violet') {
      root.style.setProperty('--electric-cyan', '#A855F7');
      root.style.setProperty('--ieee-blue', '#7E22CE');
    } else if (themeId === 'emerald') {
      root.style.setProperty('--electric-cyan', '#10B981');
      root.style.setProperty('--ieee-blue', '#047857');
    }
  };

  const handleSoundToggle = () => {
    const newState = soundFx.toggleSound();
    setSoundActive(newState);
  };

  return (
    <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 p-1 rounded-full backdrop-blur-md">
      {/* Sound Toggle */}
      <button
        onClick={handleSoundToggle}
        onMouseEnter={() => soundFx.playHover()}
        className="p-1.5 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
        title={soundActive ? 'UI Sound Effects On' : 'UI Sound Effects Muted'}
      >
        {soundActive ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
      </button>

      <div className="w-px h-3 bg-slate-800" />

      {/* Accent Color Palette Switcher */}
      <div className="flex items-center gap-1.5 px-1">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => applyTheme(t.id as any)}
            onMouseEnter={() => soundFx.playHover()}
            className="relative w-4 h-4 rounded-full transition-transform hover:scale-125 focus:outline-none"
            style={{ backgroundColor: t.color }}
            title={`Switch Theme: ${t.label}`}
          >
            {currentTheme === t.id && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
