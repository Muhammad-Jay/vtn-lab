import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@modules/authentication/server";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"],
};

// import { createAuthMiddleware } from "@repo/auth/middleware";
//
// export default createAuthMiddleware({
//     protectedRoutes: [
//         "/dashboard",
//         "/organizations",
//         "/projects",
//     ],
//
//     authRoutes: [
//         "/login",
//         "/register",
//     ],
//
//     loginRedirectUrl: "/login",
//
//     authenticatedRedirectUrl: "/dashboard",
// });