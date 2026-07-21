import { QueryClient, environmentManager } from "@tanstack/react-query";
export { QueryClientProvider } from "@tanstack/react-query";

export function createQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000, // 5 minutes
            },
        },
    });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
    if (environmentManager.isServer()) {
        return createQueryClient();
    } else {
        if (!browserQueryClient) browserQueryClient = createQueryClient();
        return browserQueryClient;
    }
}
