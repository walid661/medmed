# MedQuest - Plateforme de Révision Médicale Gamifiée 🏥

Une application web moderne de révision médicale propulsée par l'IA, utilisant Next.js 14, Supabase et RAG (Retrieval-Augmented Generation) pour générer des QCM personnalisés.

![MedQuest](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Auth-green?style=for-the-badge&logo=supabase)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Fonctionnalités

- 🎮 **Gamification** : Système de niveaux, XP, streaks et gemmes
- 🤖 **RAG Intelligent** : Génération de QCM basée sur vos cours et annales
- 🔐 **Authentification Sécurisée** : Powered by Supabase Auth
- 📊 **Suivi de Progression** : Dashboard personnalisé avec statistiques
- 🎨 **Design Premium** : Interface inspirée de Duolingo, moderne et engageante
- 📱 **Responsive** : Optimisé pour mobile et desktop

## 🚀 Installation

### Prérequis

- Node.js 18+ et npm
- Compte Supabase (gratuit)
- Clé API OpenAI

### 1. Cloner le projet

\`\`\`bash
git clone https://github.com/walid661/medmed.git
cd medmed
\`\`\`

### 2. Installer les dépendances

\`\`\`bash
npm install
\`\`\`

### 3. Configuration des variables d'environnement

Créez un fichier \`.env.local\` à la racine du projet :

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=votre-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anonyme-supabase

# OpenAI Configuration
OPENAI_API_KEY=votre-cle-api-openai
\`\`\`

**Comment obtenir vos clés :**

1. **Supabase** :
   - Créez un projet sur [supabase.com](https://supabase.com)
   - Allez dans `Settings > API`
   - Copiez l'URL du projet et la clé `anon/public`

2. **OpenAI** :
   - Créez un compte sur [platform.openai.com](https://platform.openai.com)
   - Allez dans `API Keys` et créez une nouvelle clé

### 4. Configuration Supabase (Base de données)

Vous devez créer une fonction RPC dans Supabase pour la recherche vectorielle :

\`\`\`sql
-- Fonction pour la recherche de documents similaires (RAG)
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  filter_types text[]
)
RETURNS TABLE (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  FROM documents
  WHERE 
    documents.type = ANY(filter_types)
    AND 1 - (documents.embedding <=> query_embedding) > match_threshold
  ORDER BY documents.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
\`\`\`

### 5. Lancer le serveur de développement

\`\`\`bash
npm run dev
\`\`\`

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

\`\`\`
medquest-dashboard/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── generate-quiz/    # Endpoint RAG pour QCM
│   ├── login/                # Page de connexion
│   ├── training/             # Page d'entraînement
│   ├── battle/               # Page de duel (à venir)
│   ├── layout.tsx            # Layout racine
│   ├── page.tsx              # Dashboard principal
│   └── globals.css           # Styles globaux
├── components/               # Composants React
│   ├── ui/                   # Composants UI réutilisables
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── ModuleCard.tsx
│   └── RightPanel.tsx
├── types/                    # Types TypeScript
├── middleware.ts             # Protection des routes
├── tailwind.config.ts        # Configuration Tailwind
└── next.config.ts            # Configuration Next.js
\`\`\`

## 🎨 Palette de Couleurs

\`\`\`css
--med-bg: #F7F5F0          /* Fond principal */
--med-surface: #FFFFFF      /* Cartes et surfaces */
--med-primary: #58CC02      /* Vert succès (boutons) */
--med-blue: #4ACDF8         /* Bleu (liens, accents) */
--med-purple: #CE82FF       /* Violet (modules) */
--med-orange: #FF9600       /* Orange (streaks) */
--med-gold: #FFD700         /* Or (niveaux) */
\`\`\`

## 🔧 Scripts Disponibles

\`\`\`bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Build de production
npm run start    # Démarrer le serveur de production
npm run lint     # Vérifier le code
\`\`\`

## 🧪 Architecture RAG

L'application utilise un système RAG (Retrieval-Augmented Generation) pour générer des QCM intelligents :

1. **Embedding** : Conversion de la requête en vecteur via OpenAI
2. **Recherche** : Recherche de similarité dans Supabase (pgvector)
3. **Génération** : GPT-4 génère le QCM basé sur le contexte trouvé

## 🚧 Roadmap

- [x] Dashboard avec modules
- [x] Système d'authentification
- [x] Génération de QCM par IA
- [ ] Mode Battle (duels entre étudiants)
- [ ] Système de classement global
- [ ] Statistiques détaillées
- [ ] Mode hors ligne (PWA)
- [ ] Application mobile (React Native)

## 📄 License

Ce projet est sous licence MIT.

## 🙏 Remerciements

- Design inspiré de [Duolingo](https://duolingo.com)
- Icônes par [Lucide](https://lucide.dev)
- Fonts par [Google Fonts (Nunito)](https://fonts.google.com)

---

**Développé avec ❤️ pour les étudiants en médecine**
\`\`\`
