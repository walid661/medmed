import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    // Si l'utilisateur n'est pas connecté et essaie d'accéder à autre chose que le login
    if (!session && !req.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    // Si l'utilisateur est connecté et essaie d'aller sur le login -> Dashboard
    if (session && req.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return res
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
