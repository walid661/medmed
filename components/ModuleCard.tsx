'use client';

import React from 'react';
import Link from 'next/link';
import { Module } from '@/types';
import { JuicyCard, JuicyButton, ProgressBar } from './ui/JuicyUI';

interface ModuleCardProps {
  module: Module;
}

const THEMES = {
  red: {
    bgIcon: 'bg-red-100',
    text: 'text-red-500',
    barColor: 'bg-red-500',
    buttonVariant: 'primary' as const
  },
  blue: {
    bgIcon: 'bg-blue-100',
    text: 'text-med-blue',
    barColor: 'bg-med-blue',
    buttonVariant: 'secondary' as const
  },
  purple: {
    bgIcon: 'bg-purple-100',
    text: 'text-med-purple',
    barColor: 'bg-med-purple',
    buttonVariant: 'secondary' as const
  },
  orange: {
    bgIcon: 'bg-orange-100',
    text: 'text-med-orange',
    barColor: 'bg-med-orange',
    buttonVariant: 'secondary' as const
  }
};

export const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const theme = THEMES[module.color];

  return (
    <JuicyCard className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-start justify-between mb-4">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl ${theme.bgIcon} flex items-center justify-center mb-2`}>
          <module.icon className={`w-8 h-8 ${theme.text}`} strokeWidth={3} />
        </div>

        {/* Progress Text */}
        <span className={`font-extrabold ${theme.text}`}>
          {module.progress}%
        </span>
      </div>

      <div className="mb-6 flex-1">
        <h3 className="text-xl font-extrabold text-med-text mb-1">{module.title}</h3>
        <p className="text-gray-400 font-bold text-sm">{module.description}</p>
      </div>

      <div className="space-y-4">
        <ProgressBar value={module.progress} color={theme.barColor} height="h-4" />
        <Link href={`/training?module=${module.id}`}>
          <JuicyButton fullWidth variant={module.color === 'red' ? 'primary' : 'outline'}>
            {module.progress > 0 ? 'REPRENDRE' : 'COMMENCER'}
          </JuicyButton>
        </Link>
      </div>
    </JuicyCard>
  );
};