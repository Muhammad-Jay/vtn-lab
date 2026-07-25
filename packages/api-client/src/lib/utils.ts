import { Headers, QueryParams } from "../types";

/* ==========================================================================
 * URL
 * ========================================================================== */

export function buildUrl(
    baseUrl: string,
    path: string,
    query?: QueryParams
): string {
    // Remove trailing slashes from baseUrl and leading slashes from path
    const cleanBase = baseUrl.replace(/\/+$/, "");
    const cleanPath = path.replace(/^\/+/, "");

    const fullUrl = `${cleanBase}/${cleanPath}`;

    const url = new URL(fullUrl);

    if (!query) {
        return url.toString();
    }

    Object.entries(query).forEach(([key, value]) => {
        if (value === undefined || value === null) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach((item) => {
                if (item !== undefined && item !== null) {
                    url.searchParams.append(key, String(item));
                }
            });

            return;
        }

        url.searchParams.set(key, String(value));
    });

    return url.toString();
}

/* ==========================================================================
 * Headers
 * ========================================================================== */

export function mergeHeaders(
    ...headers: Array<Headers | undefined>
): Headers {
    return Object.assign({}, ...headers);
}

/* ==========================================================================
 * JSON
 * ========================================================================== */

export function isJson(
    contentType: string | null
): boolean {
    if (!contentType) {
        return false;
    }

    return contentType.includes("application/json");
}

/* ==========================================================================
 * Sleep
 * ========================================================================== */

export function sleep(
    milliseconds: number
): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

/* ==========================================================================
 * Retry
 * ========================================================================== */

export function isRetryableStatus(
    status: number
): boolean {
    return [
        408,
        429,
        500,
        502,
        503,
        504,
    ].includes(status);
}

/* ==========================================================================
 * Timeout
 * ========================================================================== */

export function createTimeoutSignal(
    timeout: number
): AbortSignal {
    return AbortSignal.timeout(timeout);
}