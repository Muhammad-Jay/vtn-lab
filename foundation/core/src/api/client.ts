import { createApiClient } from "@repo/api-client";

import { getSession } from "@repo/auth/services";

export const api = createApiClient({
    baseUrl: process.env.NEXT_PUBLIC_API_URL!,

    timeout: 30000,

    retry: {
        enabled: true,
        retries: 3,
        delay: 300,
        backoff: true,
        jitter: true,
    },

    async getToken() {
        const session = await getSession();

        console.log(">>>>> Received session token from api client: ", session?.accessToken);

        return session?.accessToken ?? null;
    },
});