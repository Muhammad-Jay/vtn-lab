// request.ts

import {
    CacheMode,
    ClientOptions,
    RequestConfig,
} from "./types";
import { Result, ok, fail } from "./response";
import {
    buildUrl,
    createTimeoutSignal,
    isJson,
    isRetryableStatus,
    mergeHeaders,
} from "./lib/utils";
import { retry } from "./retry";
import {
    ApiError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ValidationError,
    ConflictError,
    ServerError,
    NetworkError,
} from "./errors";

export async function request<
    TResponse = unknown,
    TBody = unknown
>(
    config: RequestConfig<TBody>,
    client: ClientOptions
): Promise<Result<TResponse>> {

    const execute = async () => {

        const token = await client.getToken?.();

        const headers = mergeHeaders(
            client.headers,
            config.headers,
            {
                "Content-Type": "application/json",
            }
        );

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(
            buildUrl(
                client.baseUrl,
                config.url,
                config.query
            ),
            {
                method: config.method,
                headers,
                body:
                    config.body === undefined
                        ? undefined
                        : JSON.stringify(config.body),
                signal:
                    config.signal ??
                    createTimeoutSignal(
                        config.timeout ??
                        client.timeout ??
                        30000
                    ),
                // @ts-ignore
                cache: config.cache as any,
            }
        );

        const body = isJson(response.headers.get("content-type"))
            ? await response.json()
            : await response.text();

        const message =
            typeof body === "string"
                ? body
                : typeof body === "object" &&
                body !== null &&
                "message" in body &&
                typeof body.message === "string"
                    ? body.message
                    : "Request failed";

        if (response.ok) {
            return ok(body as TResponse);
        }

        switch (response.status) {
            case 401:
                return fail(new UnauthorizedError(message, body));

            case 403:
                return fail(new ForbiddenError(message, body));

            case 404:
                return fail(new NotFoundError(message, body));

            case 409:
                return fail(new ConflictError(message, body));

            case 422:
                return fail(new ValidationError(message, body));

            default:
                if (response.status >= 500) {
                    throw new ServerError(message, response.status, body);
                }

                return fail(
                    new ApiError(
                        message,
                        response.status,
                        body
                    )
                );
        }
    };

    try {
        return await retry(
            async () => {
                const result = await execute();

                if (!result.success) {
                    // @ts-ignore
                    if (isRetryableStatus(result.error.status ?? 0)) {
                        // @ts-ignore
                        throw result.error;
                    }
                }

                return result;
            },
            config.retry ?? client.retry
        );
    } catch (error) {
        return fail(
            error instanceof ApiError
                ? error
                : new NetworkError(error)
        );
    }
}