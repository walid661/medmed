import React from 'react';
import { JuicyCard, JuicyButton } from './ui/JuicyUI';
import { StudentRank } from '../types';
import { Trophy, Zap, ArrowRight, Shield } from 'lucide-react';

const MOCK_RANKINGS: StudentRank[] = [
    { rank: 1, name: "Sarah B.", xp: 12500, avatar: "SB" },
    { rank: 2, name: "Dr. Walid", xp: 11200, avatar: "DW", isCurrentUser: true },
    { rank: 3, name: "Karim M.", xp: 10800, avatar: "KM" },
];

export const RightPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Daily Challenge Card */}
      <JuicyCard className="border-med-orange/30 bg-orange-50/50">
        <div className="flex items-center gap-3 mb-3">
            <div className="bg-med-orange p-2 rounded-xl text-white">
                <Zap className="w-5 h-5" fill="currentColor" />
            </div>
            <h3 className="font-extrabold text-gray-700 text-lg uppercase tracking-wide">Challenge du Jour</h3>
        </div>
        <p className="text-gray-600 font-bold mb-4">
            Obtiens un score parfait sur le module <span className="text-med-orange">ECG Avancé</span>.
        </p>
        <div className="flex items-center justify-between mb-4 bg-white p-3 rounded-xl border-2 border-orange-100">
            <span className="font-extrabold text-med-orange text-xl">+50 XP</span>
            <div className="h-2 w-20 bg-gray-200 rounded-full">
                <div className="h-full w-1/3 bg-med-orange rounded-full"></div>
            </div>
        </div>
        <JuicyButton fullWidth className="bg-med-orange border-med-orangeDark hover:bg-orange-500">
            C'EST PARTI !
        </JuicyButton>
      </JuicyCard>

      {/* League Ranking */}
      <JuicyCard>
        <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-med-purple" fill="currentColor" fillOpacity={0.2} />
                <h3 className="font-extrabold text-gray-700 text-lg uppercase tracking-wide">Ligue Diamant</h3>
             </div>
             <button className="text-med-purple font-bold text-sm hover:underline">Voir tout</button>
        </div>

        <div className="space-y-3">
            {MOCK_RANKINGS.map((rank) => (
                <div 
                    key={rank.rank}
                    className={`flex items-center gap-3 p-3 rounded-2xl ${rank.isCurrentUser ? 'bg-med-primary/10 border-2 border-med-primary/20' : 'hover:bg-gray-50'}`}
                >
                    <span className={`font-black w-6 text-center ${rank.rank === 1 ? 'text-med-gold text-xl' : 'text-gray-400'}`}>
                        {rank.rank}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white ${rank.rank === 1 ? 'bg-med-gold' : (rank.isCurrentUser ? 'bg-med-primary' : 'bg-gray-300')}`}>
                        {rank.avatar}
                    </div>
                    <div className="flex-1">
                        <p className={`font-bold ${rank.isCurrentUser ? 'text-med-primary' : 'text-gray-600'}`}>{rank.name}</p>
                        <p className="text-xs text-gray-400 font-bold">{rank.xp} XP</p>
                    </div>
                </div>
            ))}
        </div>
      </JuicyCard>

      {/* Ad / Pro Upsell */}
      <div className="mt-auto p-6 rounded-3xl bg-med-purple text-white relative overflow-hidden border-b-4 border-med-purpleDark cursor-pointer hover:brightness-110 transition-all group">
            <div className="relative z-10">
                <h3 className="font-extrabold text-xl mb-2">MedQuest PRO</h3>
                <p className="text-purple-100 font-bold text-sm mb-4">Vies illimitées et quiz personnalisés !</p>
                <div className="flex items-center gap-2 font-black uppercase tracking-wide">
                    Découvrir <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
            <Trophy className="absolute -bottom-6 -right-6 w-32 h-32 text-white opacity-10 rotate-12" />
      </div>
    </div>
  );
};