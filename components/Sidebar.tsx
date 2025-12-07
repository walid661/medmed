'use client'; // Indispensable pour utiliser usePathname

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Dumbbell, Swords, Trophy, Stethoscope } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Accueil', icon: Home, href: '/' },
  { id: 'training', label: 'Entraînement', icon: Dumbbell, href: '/training' },
  { id: 'battle', label: 'Battle', icon: Swords, href: '/battle' },
  { id: 'leaderboard', label: 'Classement', icon: Trophy, href: '/leaderboard' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-med-surface border-r-2 border-med-border flex flex-col p-4 z-50">
      <div className="mb-8 flex items-center justify-center lg:justify-start lg:px-4 gap-3">
        <div className="relative">
          <Stethoscope className="w-8 h-8 text-med-primary" strokeWidth={2.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        <span className="hidden lg:block text-2xl font-extrabold text-med-primary tracking-tight">
          MedQuest
        </span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`
                flex items-center gap-4 p-3 lg:px-4 rounded-2xl transition-all duration-200 group
                ${isActive
                  ? 'bg-blue-50 text-med-blue border-2 border-blue-200'
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600 border-2 border-transparent'}
              `}
            >
              <item.icon
                className={`w-7 h-7 ${isActive ? 'fill-blue-200' : 'group-hover:scale-110 transition-transform'}`}
                strokeWidth={2.5}
              />
              <span className={`hidden lg:block font-bold uppercase text-sm ${isActive ? 'text-med-blue' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Mini Profile */}
      <div className="mt-auto hidden lg:flex items-center gap-3 p-3 rounded-2xl border-2 border-med-border bg-med-bg/50">
        <div className="w-10 h-10 rounded-xl bg-med-primary/20 flex items-center justify-center text-med-primary font-bold">
          DW
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-extrabold text-med-text truncate">Dr. Walid</p>
          <p className="text-xs text-gray-400 font-bold">Étudiant</p>
        </div>
      </div>
    </aside>
  );
};