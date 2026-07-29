import { createApiClient } from "@repo/api-client";

import { getSession } from "@repo/auth/services";

export type {
    ApiError,
    Result,
    ClientOptions,
} from "@repo/api-client";

export const api = createApiClient({
    baseUrl: process.env.NEXT_PUBLIC_API_URL!,

    timeout: 30000,

    retry: {
        enabled: true,
        retries: 2,
        delay: 300,
        backoff: true,
        jitter: true,
    },

    async getToken() {
        const session = await getSession();

        return session?.accessToken ?? null;
    },
});