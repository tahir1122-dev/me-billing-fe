import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/admin/login';
    const isAdminPath = path.startsWith('/admin');

    // Skip if not admin path
    if (!isAdminPath) {
        return NextResponse.next();
    }

    const token = request.cookies.get('admin_token')?.value || '';

    if (isAdminPath && !isPublicPath && !token) {
        return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
    }

    if (path === '/admin') {
        return NextResponse.redirect(new URL(token ? '/admin/dashboard' : '/admin/login', request.nextUrl));
    }

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*'
    ]
}
