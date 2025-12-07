import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MedQuest - Révisez comme un pro",
    description: "Plateforme de révision médicale gamifiée alimentée par IA.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${nunito.className} bg-med-bg text-med-text`}>
                {/* La Sidebar est présente partout, sauf exclusion conditionnelle si besoin */}
                <Sidebar />

                <main className="lg:pl-64 min-h-screen transition-all duration-300">
                    {children}
                </main>
            </body>
        </html>
    );
}
