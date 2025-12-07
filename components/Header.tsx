import React from 'react';
import { Flame, Gem } from 'lucide-react';
import { ProgressBar, StatBadge } from './ui/JuicyUI';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      {/* Welcome & Level */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-extrabold text-med-text mb-2">
          Bon retour, Docteur Walid ! 👋
        </h1>
        <div className="flex items-center gap-4 max-w-md">
            <span className="font-extrabold text-med-gold text-sm whitespace-nowrap">
                Niveau {user.level}
            </span>
            <div className="flex-1">
                 <ProgressBar value={65} color="bg-med-gold" height="h-5" />
            </div>
             <span className="text-gray-400 text-xs font-bold">
                {user.xp}/{user.xpToNextLevel} XP
            </span>
        </div>
      </div>

      {/* Gamification Counters */}
      <div className="flex items-center gap-4 md:gap-8 bg-white p-3 rounded-2xl border-2 border-med-border border-b-4 shadow-sm">
        <StatBadge 
            icon={Flame} 
            value={user.streak} 
            color="text-med-orange" 
            label="Jours"
        />
        <div className="w-0.5 h-8 bg-gray-200 rounded-full"></div>
        <StatBadge 
            icon={Gem} 
            value={user.gems} 
            color="text-med-blue" 
            label="Gemmes"
        />
      </div>
    </header>
  );
};