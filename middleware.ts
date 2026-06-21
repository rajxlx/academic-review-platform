import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Check if trying to access admin pages (except login)
  if (path.startsWith('/admin') && path !== '/admin/login') {
    const authCookie = request.cookies.get('adminAuth');
    
    // If not logged in, redirect to login
    if (!authCookie || authCookie.value !== 'true') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
