import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isReviewAdminPage = request.nextUrl.pathname.startsWith("/review-admin");
  const isLoginPage = request.nextUrl.pathname === "/review-admin/login";

  if (!isReviewAdminPage || isLoginPage) {
    return NextResponse.next();
  }

  const isLoggedIn =
    request.cookies.get("aalcs_review_admin")?.value === "true";

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/review-admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/review-admin/:path*"],
};