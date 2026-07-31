import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'gold' | 'outline' | 'slate';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
  icon,
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all';
  
  const variants = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_12px_rgba(0,240,255,0.15)]',
    blue: 'bg-sky-600/15 text-sky-400 border border-sky-500/30',
    gold: 'bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-[0_0_12px_rgba(255,184,0,0.15)]',
    outline: 'bg-slate-900/60 text-slate-300 border border-slate-700/60',
    slate: 'bg-slate-800/80 text-slate-400 border border-slate-700/40',
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
};
