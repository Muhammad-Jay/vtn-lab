// retry.ts

import { RetryOptions } from "./types";
import { sleep } from "./lib/utils";

const DEFAULT_OPTIONS: Required<RetryOptions> = {
    enabled: true,
    retries: 3,
    delay: 300,
    backoff: true,
    jitter: true,
};

export async function retry<T>(
    operation: () => Promise<T>,
    options?: Partial<RetryOptions>
): Promise<T> {
    const config = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    if (!config.enabled) {
        return operation();
    }

    let attempt = 0;

    while (true) {
        try {
            return await operation();
        } catch (error) {
            attempt++;

            if (attempt > config.retries) {
                throw error;
            }

            let delay = config.delay;

            if (config.backoff) {
                delay *= Math.pow(2, attempt - 1);
            }

            if (config.jitter) {
                delay += Math.random() * 100;
            }

            await sleep(delay);
        }
    }
}