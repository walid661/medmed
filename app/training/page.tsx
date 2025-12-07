'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Dumbbell, Sparkles, Trophy } from 'lucide-react';
import { JuicyCard, JuicyButton } from '@/components/ui/JuicyUI';

function TrainingContent() {
    const searchParams = useSearchParams();
    const moduleId = searchParams.get('module');
    const [loading, setLoading] = useState(false);
    const [quiz, setQuiz] = useState<any>(null);

    const handleGenerateQuiz = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/generate-quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ moduleTitle: 'Cardiologie' }), // Dynamic based on module
            });

            const data = await response.json();
            setQuiz(data);
        } catch (error) {
            console.error('Error generating quiz:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Dumbbell className="w-8 h-8 text-med-blue" />
                    <h1 className="text-3xl font-extrabold text-med-text">Entraînement</h1>
                </div>
                <p className="text-gray-600 font-bold">
                    Générez des QCM intelligents basés sur vos cours et annales
                </p>
            </div>

            {/* Module Selection */}
            {!moduleId && (
                <JuicyCard>
                    <div className="text-center py-12">
                        <Sparkles className="w-16 h-16 text-med-purple mx-auto mb-4" />
                        <h2 className="text-2xl font-extrabold text-med-text mb-2">
                            Sélectionnez un module
                        </h2>
                        <p className="text-gray-600 font-bold mb-6">
                            Retournez au dashboard pour choisir un module d&apos;entraînement
                        </p>
                        <a href="/">
                            <JuicyButton variant="primary">
                                Retour au Dashboard
                            </JuicyButton>
                        </a>
                    </div>
                </JuicyCard>
            )}

            {/* Quiz Generation */}
            {moduleId && !quiz && (
                <JuicyCard>
                    <div className="text-center py-12">
                        <Trophy className="w-16 h-16 text-med-gold mx-auto mb-4" />
                        <h2 className="text-2xl font-extrabold text-med-text mb-2">
                            Module sélectionné
                        </h2>
                        <p className="text-gray-600 font-bold mb-6">
                            Prêt à générer un QCM personnalisé ?
                        </p>
                        <JuicyButton
                            variant="primary"
                            onClick={handleGenerateQuiz}
                            disabled={loading}
                        >
                            {loading ? 'Génération en cours...' : 'GÉNÉRER UN QCM'}
                        </JuicyButton>
                    </div>
                </JuicyCard>
            )}

            {/* Quiz Display */}
            {quiz && (
                <JuicyCard>
                    <div className="space-y-6">
                        <h3 className="text-xl font-extrabold text-med-text">
                            {quiz.question}
                        </h3>
                        <div className="space-y-3">
                            {quiz.options?.map((option: any) => (
                                <button
                                    key={option.id}
                                    className="w-full p-4 text-left border-2 border-med-border rounded-2xl hover:border-med-blue hover:bg-blue-50 transition-all font-bold"
                                >
                                    <span className="text-med-blue mr-2">{option.id}.</span>
                                    {option.text}
                                </button>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-2xl border-2 border-blue-200">
                            <p className="text-sm font-bold text-gray-700">
                                <span className="text-med-blue">💡 Explication : </span>
                                {quiz.explanation}
                            </p>
                        </div>
                    </div>
                </JuicyCard>
            )}
        </div>
    );
}

export default function TrainingPage() {
    return (
        <Suspense fallback={
            <div className="p-4 md:p-8 max-w-5xl mx-auto">
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-med-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600 font-bold">Chargement...</p>
                    </div>
                </div>
            </div>
        }>
            <TrainingContent />
        </Suspense>
    );
}
