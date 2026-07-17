import { request } from "./request";
import { ClientOptions, RequestConfig } from "./types";
import { Result } from "./response";

export function get(
    client: ClientOptions
) {
    return function <TResponse>(
        url: string,
        config?: Omit<RequestConfig, "method" | "url" | "body">
    ): Promise<Result<TResponse>> {
        return request<TResponse>({
            ...config,
            method: "GET",
            url,
        }, client);
    };
}

export function post(
    client: ClientOptions
) {
    return function <TResponse, TBody>(
        url: string,
        body?: TBody,
        config?: Omit<RequestConfig<TBody>, "method" | "url" | "body">
    ): Promise<Result<TResponse>> {
        return request<TResponse, TBody>({
            ...config,
            method: "POST",
            url,
            body,
        }, client);
    };
}

export function put(
    client: ClientOptions
) {
    return function <TResponse, TBody>(
        url: string,
        body?: TBody,
        config?: Omit<RequestConfig<TBody>, "method" | "url" | "body">
    ): Promise<Result<TResponse>> {
        return request<TResponse, TBody>({
            ...config,
            method: "PUT",
            url,
            body,
        }, client);
    };
}

export function patch(
    client: ClientOptions
) {
    return function <TResponse, TBody>(
        url: string,
        body?: TBody,
        config?: Omit<RequestConfig<TBody>, "method" | "url" | "body">
    ): Promise<Result<TResponse>> {
        return request<TResponse, TBody>({
            ...config,
            method: "PATCH",
            url,
            body,
        }, client);
    };
}

export function del(
    client: ClientOptions
) {
    return function <TResponse>(
        url: string,
        config?: Omit<RequestConfig, "method" | "url" | "body">
    ): Promise<Result<TResponse>> {
        return request<TResponse>({
            ...config,
            method: "DELETE",
            url,
        }, client);
    };
}