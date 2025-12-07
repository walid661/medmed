'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Stethoscope, Mail, Lock } from 'lucide-react';
import { JuicyButton } from '@/components/ui/JuicyUI';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const supabase = createClientComponentClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push('/');
            router.refresh();
        } catch (error: any) {
            setError(error.message || 'Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-med-bg flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo & Title */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="relative">
                            <Stethoscope className="w-12 h-12 text-med-primary" strokeWidth={2.5} />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                        </div>
                        <h1 className="text-4xl font-extrabold text-med-primary tracking-tight">
                            MedQuest
                        </h1>
                    </div>
                    <p className="text-gray-600 font-bold">Révisez comme un pro 🚀</p>
                </div>

                {/* Login Card */}
                <div className="bg-med-surface rounded-3xl p-8 border-2 border-med-border border-b-4 shadow-lg">
                    <h2 className="text-2xl font-extrabold text-med-text mb-6 text-center">
                        Connexion
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-med-border rounded-2xl focus:outline-none focus:border-med-blue transition-colors font-bold"
                                    placeholder="votre.email@exemple.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-med-border rounded-2xl focus:outline-none focus:border-med-blue transition-colors font-bold"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-red-600 font-bold text-sm">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <JuicyButton
                            type="submit"
                            fullWidth
                            variant="primary"
                            disabled={loading}
                        >
                            {loading ? 'Connexion...' : 'SE CONNECTER'}
                        </JuicyButton>
                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center mt-6 text-sm text-gray-600 font-bold">
                        Pas encore de compte ?{' '}
                        <a href="#" className="text-med-blue hover:underline">
                            S&apos;inscrire
                        </a>
                    </p>
                </div>

                {/* Footer */}
                <p className="text-center mt-6 text-xs text-gray-500 font-bold">
                    Propulsé par IA • Fait avec ❤️ pour les étudiants en médecine
                </p>
            </div>
        </div>
    );
}
