import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === "/login" || pathname === "/register";

  const accessToken = request.cookies.get("accessToken")?.value;

  console.log("AccessToken:", accessToken);
  console.log("Pathname:", pathname);
  console.log("isAuthPage:", isAuthPage);

  const isAuthenticated = Boolean(accessToken);

  if (!isAuthenticated && !isAuthPage) {
    console.log("Redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && isAuthPage) {
    console.log("Redirecting to /");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
