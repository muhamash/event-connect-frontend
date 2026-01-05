import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./lib/services/auth/auth.option";


export async function proxy ( request: NextRequest )
{
    const pathname = request.nextUrl.pathname;

    // const routerOwner = getRouteOwner( pathname );
    // const isAuth = isAuthRoute( pathname )
    const session = await getServerSession( authOptions );
    
    if ( pathname === "/profile/edit" && !session )
    {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if ( session && pathname === "/login" || session && pathname === "register" )
    {
        return NextResponse.redirect(new URL("/profile", request.url));
    }
    
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
}