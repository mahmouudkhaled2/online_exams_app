import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('next-auth.session-token');
    const currentUrl = request.nextUrl.pathname;

    if (currentUrl.startsWith("/login") && token) 
      return NextResponse.rewrite(new URL('/', request.url));
    
    if (!token) 
        return NextResponse.rewrite(new URL('/login', request.url));
    
    return NextResponse.next();  
}
 
export const config = {
  matcher: ['/server', '/client', '/dashboard'],
}