// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// src/middleware.ts
const protectedRoutes: Record<string, string[]> = {
  "/admin": ["SUPER_ADMIN"],
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const role = request.cookies.get("roll")?.value || "";

  if (path in protectedRoutes) {
    const allowedRoles = protectedRoutes[path];

    if (!role) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (!allowedRoles.includes(role)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}
