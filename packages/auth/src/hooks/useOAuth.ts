"use client";

import { useCallback, useState } from "react";
import { signIn, signOut } from "../lib/auth-client";

export type SupportedOAuthProvider = 'google' | 'github' | 'apple' | 'slack' | 'atlassian';

export interface AuthCallbacks {
    onRequest?: (ctx?: any) => void;
    onSuccess?: (ctx?: any) => void;
    onError?: (ctx: { error: { message: string } }) => void;
}

export interface AuthenticateOptions extends AuthCallbacks {
    callbackURL?: string;
    errorCallbackURL?: string;
}

export function useOAuth() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const authenticate = useCallback(async (
        provider: SupportedOAuthProvider,
        options?: AuthenticateOptions
    ) => {
        setIsLoading(true);
        setError(null);

        try {
            // signIn.social takes the provider payload, and a second argument for callbacks
            await signIn.social({
                provider: provider?.toLowerCase()?.toString(),
                callbackURL: options?.callbackURL || process.env.SUCCESS_ROUTE!,
                errorCallbackURL: options?.errorCallbackURL || process.env.ERROR_ROUTE!,
            }, {
                onRequest: (ctx: any) => {
                    options?.onRequest?.(ctx);
                },
                onSuccess: (ctx: any) => {
                    setIsLoading(false);
                    options?.onSuccess?.(ctx);
                },
                onError: (ctx: any) => {
                    setIsLoading(false);
                    setError(ctx.error.message);
                    options?.onError?.(ctx);
                }
            });
        } catch (err: any) {
            setIsLoading(false);
            const errorMessage = err?.message || "An unexpected error occurred during authentication.";
            setError(errorMessage);
            options?.onError?.({ error: { message: errorMessage } });
        }
    }, []);

    const logout = useCallback(async (callbacks?: AuthCallbacks) => {
        setIsSigningOut(true);
        setError(null);

        try {
            // signOut takes fetchOptions to handle callbacks
            await signOut({
                fetchOptions: {
                    onRequest: (ctx: any) => {
                        callbacks?.onRequest?.(ctx);
                    },
                    onSuccess: (ctx: any) => {
                        setIsSigningOut(false);
                        callbacks?.onSuccess?.(ctx);
                    },
                    onError: (ctx: any) => {
                        setIsSigningOut(false);
                        setError(ctx.error.message);
                        callbacks?.onError?.(ctx);
                    }
                }
            });
        } catch (err: any) {
            setIsSigningOut(false);
            const errorMessage = err?.message || "An unexpected error occurred during sign out.";
            setError(errorMessage);
            callbacks?.onError?.({ error: { message: errorMessage } });
        }
    }, []);

    return {
        authenticate,
        logout,
        isLoading,
        isSigningOut,
        error,
    };
}