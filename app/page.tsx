import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Header } from '@/components/Header';
import { ModuleCard } from '@/components/ModuleCard';
import { RightPanel } from '@/components/RightPanel';
import { HeartPulse, Activity, Brain, Microscope, Dna } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
    const supabase = createServerComponentClient({ cookies });

    // 1. Récupération de l'utilisateur réel
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        redirect('/login');
    }

    // TODO: Récupérer les vraies stats (XP, Level) depuis votre table 'users'
    // Pour l'instant on garde le mock structurel mais avec le vrai nom si dispo
    const user = {
        name: session.user.user_metadata.full_name || "Docteur",
        level: 12,
        xp: 1450,
        xpToNextLevel: 2200,
        streak: 12,
        gems: 450,
        avatar: "DW"
    };

    const MODULES = [
        { id: '1', title: 'Cardiologie', description: 'ECG, Insuffisance cardiaque', progress: 45, color: 'red' as const, icon: HeartPulse },
        { id: '2', title: 'Pneumologie', description: 'Asthme, BPCO', progress: 12, color: 'blue' as const, icon: Activity },
        { id: '3', title: 'Neurologie', description: 'AVC, Épilepsie', progress: 0, color: 'purple' as const, icon: Brain },
        { id: '4', title: 'Infectiologie', description: 'Antibiotiques, Virus', progress: 78, color: 'orange' as const, icon: Microscope }
    ];

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <Header user={user} />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
                {/* Colonne Gauche : Modules */}
                <section className="xl:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold text-gray-700">Parcours d&apos;Apprentissage</h2>
                        <button className="text-med-blue font-bold uppercase text-sm hover:underline">Voir le plan</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {MODULES.map((module) => (
                            <ModuleCard key={module.id} module={module} />
                        ))}

                        {/* Module bloqué exemple */}
                        <div className="bg-gray-100 rounded-3xl p-6 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center opacity-75">
                            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mb-4">
                                <Dna className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-500">Génétique</h3>
                            <p className="text-sm font-bold text-gray-400">Niveau 15 requis</p>
                        </div>
                    </div>
                </section>

                {/* Colonne Droite : Classement */}
                <aside className="xl:col-span-1">
                    <RightPanel />
                </aside>
            </div>
        </div>
    );
}
