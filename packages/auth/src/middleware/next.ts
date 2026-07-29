// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getSessionCookie } from "better-auth";
//
// /* =============================================================================
//  * Types
//  * =========================================================================== */
//
// /**
//  * Configuration for the reusable authentication middleware.
//  *
//  * This middleware is intentionally responsible only for authentication.
//  * It does NOT perform authorization checks such as:
//  *
//  * - Organization membership
//  * - Project membership
//  * - Roles
//  * - Permissions
//  *
//  * Those concerns should be resolved after authentication using the active
//  * organization or project context.
//  */
// export interface AuthMiddlewareOptions {
//     /**
//      * Routes that require an authenticated user.
//      *
//      * Example:
//      * [
//      *   "/dashboard",
//      *   "/organizations",
//      *   "/projects"
//      * ]
//      */
//     protectedRoutes: readonly string[];
//
//     /**
//      * Routes intended only for guests.
//      *
//      * Authenticated users attempting to access these routes will be redirected.
//      *
//      * Example:
//      * [
//      *   "/login",
//      *   "/register",
//      *   "/forgot-password"
//      * ]
//      */
//     authRoutes: readonly string[];
//
//     /**
//      * Destination for unauthenticated users attempting to access
//      * protected routes.
//      */
//     loginRedirectUrl: string;
//
//     /**
//      * Destination for authenticated users attempting to access
//      * guest-only routes.
//      */
//     authenticatedRedirectUrl: string;
//
//     /**
//      * Whether the original query string should be preserved when
//      * generating the callbackUrl.
//      *
//      * Default: true
//      */
//     preserveSearchParams?: boolean;
// }
//
// /* =============================================================================
//  * Helpers
//  * =========================================================================== */
//
// /**
//  * Determines whether the current pathname belongs to one of the supplied routes.
//  *
//  * Supports:
//  *
//  * "/dashboard"
//  * "/dashboard/settings"
//  *
//  * while preventing accidental partial matches such as:
//  *
//  * "/dash"
//  * matching
//  * "/dashboard"
//  */
// function matchesRoute(
//     pathname: string,
//     routes: readonly string[],
// ): boolean {
//     return routes.some((route) => {
//         if (pathname === route) {
//             return true;
//         }
//
//         return pathname.startsWith(`${route}/`);
//     });
// }
//
// /* =============================================================================
//  * Factory
//  * =========================================================================== */
//
// /**
//  * Creates a reusable authentication middleware.
//  *
//  * The middleware performs only authentication checks by verifying that
//  * a Better Auth session cookie exists.
//  *
//  * NOTE:
//  * Presence of a cookie does not guarantee the session is still valid.
//  * Better Auth performs full session validation when the session is loaded.
//  * This middleware is intended only as a lightweight routing guard.
//  */
// export function createAuthMiddleware(
//     options: AuthMiddlewareOptions,
// ) {
//     const {
//         protectedRoutes,
//         authRoutes,
//         loginRedirectUrl,
//         authenticatedRedirectUrl,
//         preserveSearchParams = true,
//     } = options;
//
//     return async function authMiddleware(
//         request: NextRequest,
//     ) {
//         const { pathname, search } = request.nextUrl;
//
//         /**
//          * Lightweight authentication check.
//          *
//          * This only verifies that a Better Auth session cookie exists.
//          */
//         const sessionCookie = getSessionCookie(request);
//
//         const isAuthenticated =
//             sessionCookie != null;
//
//         /**
//          * ---------------------------------------------------------------------
//          * Protected Routes
//          * ---------------------------------------------------------------------
//          */
//
//         if (
//             matchesRoute(
//                 pathname,
//                 protectedRoutes,
//             ) &&
//             !isAuthenticated
//         ) {
//             const redirectUrl = new URL(
//                 loginRedirectUrl,
//                 request.url,
//             );
//
//             const callbackUrl = preserveSearchParams
//                 ? pathname + search
//                 : pathname;
//
//             redirectUrl.searchParams.set(
//                 "callbackUrl",
//                 callbackUrl,
//             );
//
//             return NextResponse.redirect(
//                 redirectUrl,
//             );
//         }
//
//         /**
//          * ---------------------------------------------------------------------
//          * Guest Routes
//          * ---------------------------------------------------------------------
//          */
//
//         if (
//             matchesRoute(
//                 pathname,
//                 authRoutes,
//             ) &&
//             isAuthenticated
//         ) {
//             return NextResponse.redirect(
//                 new URL(
//                     authenticatedRedirectUrl,
//                     request.url,
//                 ),
//             );
//         }
//
//         /**
//          * Continue request pipeline.
//          */
//         return NextResponse.next();
//     };
// }