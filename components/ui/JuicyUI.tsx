'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface JuicyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const JuicyButton: React.FC<JuicyButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = "font-extrabold uppercase tracking-wide py-3 px-6 rounded-2xl transition-all active:translate-y-1 active:border-b-0 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-med-primary text-white border-b-4 border-med-primaryDark hover:bg-green-500",
    secondary: "bg-med-blue text-white border-b-4 border-med-blueDark hover:brightness-110",
    outline: "bg-white text-med-text border-2 border-med-border border-b-4 hover:bg-gray-50",
    ghost: "bg-transparent text-med-text hover:bg-black/5 active:translate-y-0 active:border-b-0 border-b-0",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  height?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = 'bg-med-gold',
  height = 'h-4'
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden relative`}>
      {/* Light reflection effect top half */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 z-10 pointer-events-none"></div>

      <div
        className={`${color} h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2`}
        style={{ width: `${percentage}%` }}
      >
        {percentage > 15 && <div className="h-1.5 w-1.5 bg-white/40 rounded-full" />}
      </div>
    </div>
  );
};

interface JuicyCardProps {
  children: React.ReactNode;
  className?: string;
}

export const JuicyCard: React.FC<JuicyCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-med-surface rounded-3xl p-6 border-2 border-med-border border-b-4 ${className}`}>
      {children}
    </div>
  );
};

interface StatBadgeProps {
  icon: LucideIcon;
  value: string | number;
  color: string; // Tailwind text color class, e.g. text-orange-500
  label?: string;
}

export const StatBadge: React.FC<StatBadgeProps> = ({ icon: Icon, value, color, label }) => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <Icon className={`${color} w-6 h-6 group-hover:scale-110 transition-transform`} fill="currentColor" fillOpacity={0.2} strokeWidth={2.5} />
      <span className={`font-extrabold text-lg ${color}`}>{value}</span>
      {label && <span className="text-gray-400 text-sm font-bold uppercase tracking-wider hidden xl:block">{label}</span>}
    </div>
  );
};