'use client';

import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      className = '',
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5',
      md: 'px-5 py-2.5 text-sm rounded-xl gap-2 font-medium',
      lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5 font-semibold',
    };

    const variantClasses = {
      primary: 'bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110 border border-cyan-400/30',
      secondary: 'bg-slate-800/90 text-slate-100 hover:bg-slate-700/90 border border-slate-700/60 shadow-sm',
      outline: 'bg-slate-950/40 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-sm',
      ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50',
      glow: 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-[1.02]',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        className={clsx(
          'inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
