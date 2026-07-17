import { ApiClient, ClientOptions } from "./types";
import { request } from "./request";
import {
    get,
    post,
    put,
    patch,
    del,
} from "./methods";

export function createApiClient(
    options: ClientOptions
): ApiClient {

    return {
        request(config) {
            return request(config, options);
        },

        get: get(options),

        post: post(options),

        put: put(options),

        patch: patch(options),

        delete: del(options),
    };
}