import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
    try {
        const supabase = createRouteHandlerClient({ cookies });

        // 1. Vérification Auth
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { moduleTitle } = await req.json();

        // 2. Recherche Vectorielle (RAG)
        const embedding = await openai.embeddings.create({
            model: 'text-embedding-3-small',
            input: `QCM examen médecine sur ${moduleTitle}`,
        });

        // Appel de votre fonction RPC 'match_documents'
        const { data: chunks, error } = await supabase.rpc('match_documents', {
            query_embedding: embedding.data[0].embedding,
            match_threshold: 0.3,
            match_count: 5,
            filter_types: ['ANNALE', 'EXERCICE', 'EXERCICE_TP']
        });

        if (error) {
            console.error('Supabase RPC Error:', error);
            throw error;
        }

        const context = chunks?.map((c: any) => c.content).join('\n---\n') || "";

        // 3. Génération du Quiz
        const systemPrompt = `
      Tu es un expert pédagogique médical.
      CONTEXTE (Annales) : ${context}
      
      MISSION : Génère un QCM difficile sur : ${moduleTitle}.
      FORMAT JSON STRICT :
      {
        "question": "Énoncé",
        "options": [{"id": "A", "text": "..."}, {"id": "B", "text": "..."}],
        "correct_id": "A",
        "explanation": "Explication pédagogique basée sur le cours.",
        "source": "Basé sur les annales"
      }
    `;

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "system", content: systemPrompt }],
            response_format: { type: "json_object" }
        });

        const quizData = JSON.parse(response.choices[0].message.content || "{}");
        return NextResponse.json(quizData);

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
