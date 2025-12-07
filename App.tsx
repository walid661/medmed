import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ModuleCard } from './components/ModuleCard';
import { RightPanel } from './components/RightPanel';
import { User, Module } from './types';
import { HeartPulse, Activity, Brain, Microscope, Stethoscope, Dna } from 'lucide-react';

// MOCK DATA
const CURRENT_USER: User = {
  name: "Dr. Walid",
  level: 12,
  xp: 1450,
  xpToNextLevel: 2200,
  streak: 12,
  gems: 450,
  avatar: "DW"
};

const MODULES: Module[] = [
  {
    id: '1',
    title: 'Cardiologie',
    description: 'ECG, Insuffisance cardiaque, HTA',
    progress: 45,
    color: 'red',
    icon: HeartPulse
  },
  {
    id: '2',
    title: 'Pneumologie',
    description: 'Asthme, BPCO, Pneumonies',
    progress: 12,
    color: 'blue',
    icon: Activity
  },
  {
    id: '3',
    title: 'Neurologie',
    description: 'AVC, Épilepsie, Migraines',
    progress: 0,
    color: 'purple',
    icon: Brain
  },
  {
    id: '4',
    title: 'Infectiologie',
    description: 'Antibiotiques, Virus, Parasites',
    progress: 78,
    color: 'orange',
    icon: Microscope
  }
];

function App() {
  return (
    <div className="min-h-screen bg-med-bg text-med-text selection:bg-med-primary/30">
      <Sidebar />
      
      {/* Main Content Wrapper */}
      <main className="lg:pl-64 min-h-screen transition-all duration-300">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          
          <Header user={CURRENT_USER} />

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
            
            {/* Left Column: Learning Path (Takes 2 cols on large screens) */}
            <section className="xl:col-span-2 space-y-8">
              
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-gray-700">Parcours d'Apprentissage</h2>
                <button className="text-med-blue font-bold uppercase tracking-wider text-sm hover:underline">
                    Voir le plan
                </button>
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MODULES.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
                
                {/* Locked Module Teaser */}
                <div className="bg-gray-100 rounded-3xl p-6 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center gap-4 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center">
                        <Dna className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold text-gray-500">Génétique</h3>
                        <p className="text-sm font-bold text-gray-400">Débloque au niveau 15</p>
                    </div>
                </div>
              </div>

            </section>

            {/* Right Column: Side Quests & Ranking (Takes 1 col) */}
            <aside className="xl:col-span-1">
              <RightPanel />
            </aside>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;