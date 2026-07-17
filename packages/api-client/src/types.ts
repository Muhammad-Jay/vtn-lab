// types.ts

import { Result } from "./response";

/* ==========================================================================
 * HTTP
 * ========================================================================== */

export type HttpMethod =
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";

/* ==========================================================================
 * Headers
 * ========================================================================== */

export type Headers =
    Record<string, string>;

/* ==========================================================================
 * Query Params
 * ========================================================================== */

export type QueryValue =
    | string
    | number
    | boolean
    | null
    | undefined;

export type QueryParams =
    Record<string, QueryValue | QueryValue[]>;

/* ==========================================================================
 * Retry
 * ========================================================================== */

export interface RetryOptions {
    enabled?: boolean;
    retries?: number;
    delay?: number;
    backoff?: boolean;
    jitter?: boolean;
}

/* ==========================================================================
 * Request Cache
 * ========================================================================== */

export type CacheMode =
    | "default"
    | "no-store"
    | "reload"
    | "no-cache"
    | "force-cache"
    | "only-if-cached";

/* ==========================================================================
 * Request Config
 * ========================================================================== */

export interface RequestConfig<TBody = unknown> {
    method: HttpMethod;

    url: string;

    body?: TBody;

    headers?: Headers;

    query?: QueryParams;

    signal?: AbortSignal;

    timeout?: number;

    retry?: Partial<RetryOptions>;

    cache?: CacheMode;
}

/* ==========================================================================
 * Client Options
 * ========================================================================== */

export interface ClientOptions {
    baseUrl: string;

    headers?: Headers;

    timeout?: number;

    retry?: RetryOptions;

    /**
     * Optional authentication callback.
     * The SDK does not know where the token comes from.
     */
    getToken?: () => Promise<string | null | undefined>;
}

/* ==========================================================================
 * API Client
 * ========================================================================== */

export interface ApiClient {
    request<TResponse = unknown, TBody = unknown>(
        config: RequestConfig<TBody>
    ): Promise<Result<TResponse>>;

    get<TResponse = unknown>(
        url: string,
        config?: Omit<RequestConfig, "method" | "url" | "body">
    ): Promise<Result<TResponse>>;

    post<TResponse = unknown, TBody = unknown>(
        url: string,
        body?: TBody,
        config?: Omit<RequestConfig<TBody>, "method" | "url" | "body">
    ): Promise<Result<TResponse>>;

    put<TResponse = unknown, TBody = unknown>(
        url: string,
        body?: TBody,
        config?: Omit<RequestConfig<TBody>, "method" | "url" | "body">
    ): Promise<Result<TResponse>>;

    patch<TResponse = unknown, TBody = unknown>(
        url: string,
        body?: TBody,
        config?: Omit<RequestConfig<TBody>, "method" | "url" | "body">
    ): Promise<Result<TResponse>>;

    delete<TResponse = unknown>(
        url: string,
        config?: Omit<RequestConfig, "method" | "url" | "body">
    ): Promise<Result<TResponse>>;
}