import { NextRequest, NextResponse } from "next/server"
import { auth } from "./lib/auth"
import { headers } from "next/headers"

export async function middleware(request: NextRequest, response: NextResponse) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) return NextResponse.redirect(new URL('/sign-in', request.url));

    return NextResponse.next()
}

// Determines where to apply the middleware
export const config = {
    matcher: ['/((?!api|_next/static|favicon.ico|_next/image|sign-in|assets).*)'],
}