import { Swords, Users, Trophy, Flame } from 'lucide-react';
import { JuicyCard, JuicyButton } from '@/components/ui/JuicyUI';

export default function BattlePage() {
    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Swords className="w-8 h-8 text-med-orange" />
                    <h1 className="text-3xl font-extrabold text-med-text">Battle Arena</h1>
                </div>
                <p className="text-gray-600 font-bold">
                    Défiez d&apos;autres étudiants et montez dans le classement !
                </p>
            </div>

            {/* Coming Soon */}
            <JuicyCard>
                <div className="text-center py-16">
                    <div className="relative inline-block mb-6">
                        <Swords className="w-24 h-24 text-med-orange opacity-20" />
                        <Flame className="w-12 h-12 text-med-orange absolute top-0 right-0 animate-pulse" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-med-text mb-3">
                        Bientôt Disponible !
                    </h2>
                    <p className="text-gray-600 font-bold mb-8 max-w-md mx-auto">
                        Le mode Battle arrive bientôt. Préparez-vous à affronter vos camarades en duel médical !
                    </p>

                    {/* Features Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                        <div className="p-4 bg-orange-50 rounded-2xl border-2 border-orange-200">
                            <Users className="w-8 h-8 text-med-orange mx-auto mb-2" />
                            <p className="font-bold text-sm text-gray-700">Matchmaking intelligent</p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-2xl border-2 border-orange-200">
                            <Trophy className="w-8 h-8 text-med-orange mx-auto mb-2" />
                            <p className="font-bold text-sm text-gray-700">Récompenses exclusives</p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-2xl border-2 border-orange-200">
                            <Flame className="w-8 h-8 text-med-orange mx-auto mb-2" />
                            <p className="font-bold text-sm text-gray-700">Streaks de victoires</p>
                        </div>
                    </div>

                    <JuicyButton variant="outline" disabled>
                        BIENTÔT DISPONIBLE
                    </JuicyButton>
                </div>
            </JuicyCard>
        </div>
    );
}
