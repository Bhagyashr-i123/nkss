import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  gradientTitle?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  gradientTitle,
  subtitle,
  centered = false,
  className = '',
  action,
}) => {
  return (
    <div
      className={`flex flex-col ${
        centered ? 'items-center text-center' : 'items-start text-left'
      } ${action ? 'md:flex-row md:items-end md:justify-between' : ''} mb-12 ${className}`}
    >
      <div className={centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        {badge && (
          <div className="mb-3">
            <Badge variant="cyan">{badge}</Badge>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}{' '}
          {gradientTitle && (
            <span className="gradient-text-cyan">{gradientTitle}</span>
          )}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="mt-6 md:mt-0 shrink-0">{action}</div>}
    </div>
  );
};
