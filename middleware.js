import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhook",
    "/api/ads(.*)",
    "/api/business(.*)",
    "/api/competitors(.*)",
  ],
  ignoredRoutes: [
    "/sw.js",
    "/sw-register.js",
    "/manifest.json",
    "/favicon.ico",
    "/_next(.*)",
    "/static(.*)",
    "/images(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
