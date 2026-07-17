"use client";

// @ts-ignore
import { useBetterAuthSession } from "../lib/auth-client";

/**
 * Custom hook to get the current user and session.
 * Wraps Better Auth's native useSession for a cleaner API.
 */
export function useSessions() {

    const {
        data,
        isPending,
        error,
        refetch
    } = useBetterAuthSession();

    return {
        user: data?.user || null,
        session: data?.session || null,

        isAuthenticated: !!data?.session,

        isLoading: isPending,
        error,

        refetch,
    };
}