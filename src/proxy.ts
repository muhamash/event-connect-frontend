import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { UserRole } from "./lib/constants/enum.constant";
import { authOptions } from "./lib/services/auth/auth.option";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = await getServerSession(authOptions);

  /* ------------------ AUTH REQUIRED ------------------ */
  if (!session && pathname === "/profile/edit") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  /* ------------------ AUTH PAGES ------------------ */
  if (
    session &&
    (pathname === "/login" || pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  /* ------------------ CREATE EVENT (HOST ONLY) ------------------ */
  if (pathname === "/events/create") {
    if (!session) {
      return NextResponse.redirect(new URL("/events", request.url));
    }

    if (session.user.role !== UserRole.HOST) {
      return NextResponse.redirect(new URL("/events", request.url));
    }
  }

  /* ------------------ DASHBOARD ------------------ */
  if (pathname === "/dashboard") {
    if (!session) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (session.user.role === UserRole.USER) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

//   allow
  return NextResponse.next();
};

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
    ],
};