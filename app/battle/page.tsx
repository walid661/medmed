'use client';

import { useState } from 'react';
import { Swords, Users, Trophy, Flame, Zap, Crown } from 'lucide-react';
import { JuicyCard, JuicyButton } from '@/components/ui/JuicyUI';

export default function BattlePage() {
    const [mode, setMode] = useState<'select' | 'create' | 'join'>('select');

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="relative">
                        <Swords className="w-8 h-8 text-med-orange" />
                        <Flame className="w-4 h-4 text-red-500 absolute -top-1 -right-1 animate-pulse" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-med-text">Arène Médicale</h1>
                </div>
                <p className="text-gray-600 font-bold">
                    Défiez vos camarades en duel de QCM et montez dans le classement !
                </p>
            </div>

            {mode === 'select' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Create Duel Card */}
                    <JuicyCard className="hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Swords className="w-10 h-10 text-med-orange" strokeWidth={3} />
                            </div>
                            <h2 className="text-2xl font-extrabold text-med-text mb-2">
                                Créer un Duel
                            </h2>
                            <p className="text-gray-600 font-bold mb-6 text-sm">
                                Lancez un défi et attendez qu&apos;un adversaire vous rejoigne
                            </p>
                            <JuicyButton
                                variant="primary"
                                fullWidth
                                onClick={() => setMode('create')}
                            >
                                CRÉER UN DUEL
                            </JuicyButton>
                        </div>
                    </JuicyCard>

                    {/* Join Duel Card */}
                    <JuicyCard className="hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-med-blue" strokeWidth={3} />
                            </div>
                            <h2 className="text-2xl font-extrabold text-med-text mb-2">
                                Rejoindre un Duel
                            </h2>
                            <p className="text-gray-600 font-bold mb-6 text-sm">
                                Trouvez un duel en cours et affrontez un adversaire
                            </p>
                            <JuicyButton
                                variant="secondary"
                                fullWidth
                                onClick={() => setMode('join')}
                            >
                                REJOINDRE UN DUEL
                            </JuicyButton>
                        </div>
                    </JuicyCard>
                </div>
            )}

            {/* Features Preview Section */}
            <div className="mt-12">
                <h3 className="text-xl font-extrabold text-gray-700 mb-6 text-center">
                    Bientôt Disponible
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Feature 1 */}
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border-2 border-orange-200 border-b-4">
                        <Zap className="w-10 h-10 text-med-orange mx-auto mb-3" strokeWidth={2.5} />
                        <h4 className="font-extrabold text-med-text text-center mb-2">Matchmaking Intelligent</h4>
                        <p className="text-sm text-gray-600 font-bold text-center">
                            Affrontez des adversaires de votre niveau pour des duels équilibrés
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 border-b-4">
                        <Trophy className="w-10 h-10 text-med-purple mx-auto mb-3" strokeWidth={2.5} />
                        <h4 className="font-extrabold text-med-text text-center mb-2">Récompenses Exclusives</h4>
                        <p className="text-sm text-gray-600 font-bold text-center">
                            Gagnez des gemmes, de l&apos;XP et des badges uniques
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl border-2 border-yellow-200 border-b-4">
                        <Crown className="w-10 h-10 text-med-gold mx-auto mb-3" strokeWidth={2.5} />
                        <h4 className="font-extrabold text-med-text text-center mb-2">Classement Mondial</h4>
                        <p className="text-sm text-gray-600 font-bold text-center">
                            Grimpez dans le classement et devenez une légende
                        </p>
                    </div>
                </div>
            </div>

            {/* Coming Soon Banner */}
            <div className="mt-12">
                <JuicyCard className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                    <div className="text-center py-8">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Flame className="w-8 h-8 text-med-orange animate-pulse" />
                            <h3 className="text-2xl font-extrabold text-med-text">
                                Mode Battle en Développement
                            </h3>
                            <Flame className="w-8 h-8 text-med-orange animate-pulse" />
                        </div>
                        <p className="text-gray-700 font-bold max-w-2xl mx-auto">
                            Notre équipe travaille d&apos;arrache-pied pour vous offrir la meilleure expérience de duel médical multijoueur.
                            Restez connecté pour être le premier à tester cette fonctionnalité révolutionnaire ! 🚀
                        </p>
                    </div>
                </JuicyCard>
            </div>
        </div>
    );
}
