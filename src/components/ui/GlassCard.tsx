'use client';

import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  onClick,
  interactive = false,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={interactive || glowOnHover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={clsx(
        'glass-card rounded-2xl p-6 relative overflow-hidden group',
        interactive && 'cursor-pointer',
        className
      )}
    >
      {/* Dynamic Cursor Accent Glow */}
      {glowOnHover && (
        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-transparent blur-md" />
      )}
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
