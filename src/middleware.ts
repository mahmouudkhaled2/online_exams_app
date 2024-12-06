import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export default function middleware(request: NextRequest) {

    const token = request.cookies.get('next-auth.session-token');
    const currentUrl = request.nextUrl.pathname;
    
    if (!token && currentUrl !== '/login') 
        return NextResponse.redirect(new URL('/login', request.url));
    
    if (currentUrl === "/login" && token) 
        return NextResponse.redirect(new URL('/', request.url));

    return NextResponse.next();  
}
 
export const config = {
  matcher: [ '/login', '/server', '/client', '/dashboard'],
}