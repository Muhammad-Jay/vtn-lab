import { Result } from "../api/client";
import { toast } from "@repo/ui/primitives";
import {UseMutationOptions} from "@tanstack/react-query";

export interface MutationToastOptions<TData, TError, TVariables, TContext> {
    successMessage?: boolean | string;
    errorMessage?: boolean | string;
    onSuccess?: (data: TData, variables: TVariables, context: TContext) => void;
    onError?: (error: TError, variables: TVariables, context: TContext | undefined) => void;
}

export type AppMutationOptions<TData, TError, TVariables, TContext = unknown> =
    Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn"> & {
    successMessage?: boolean | string;
    errorMessage?: boolean | string;
};

/**
 * Unwraps an ApiClient Result object for compatibility with Promise-based libraries like TanStack Query.
 * Returns the underlying data on success, or throws the ApiError on failure.
 *
 * @param promise - The pending ApiClient request returning a Result.
 * @returns A promise that resolves strictly to the success data payload.
 */
export async function unwrap<T>(promise: Promise<Result<T>>): Promise<T> {
    const result = await promise;

    if (!result.success) {
        throw result.error;
    }

    return result.data;
}

/**
 * Utility to standardise toast notifications for TanStack Query mutations.
 */
export function withMutationToasts<TData, TError extends Error, TVariables, TContext = unknown>(
    options: AppMutationOptions<TData, TError, TVariables, TContext>
) {
    return {
        onSuccess: (...args: Parameters<NonNullable<UseMutationOptions<TData, TError, TVariables, TContext>["onSuccess"]>>) => {
            if (options.successMessage) {
                const message = typeof options.successMessage === "string" ? options.successMessage : "Operation successful";
                toast.success(message, { position: "top-right" });
            }
            options.onSuccess?.(...args);
        },
        onError: (...args: Parameters<NonNullable<UseMutationOptions<TData, TError, TVariables, TContext>["onError"]>>) => {
            if (options.errorMessage) {
                const error = args[0]; // The first argument of onError is always the error object
                const message = typeof options.errorMessage === "string" ? options.errorMessage : error?.message || "An unexpected error occurred";
                toast.error(message, { position: "top-right" });
            }
            options.onError?.(...args);
        },
    };
}