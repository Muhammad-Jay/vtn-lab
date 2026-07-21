export const orgQueryKeys = {
    list: ["organizations"] as const,
    get: (id: string) => [...orgQueryKeys.list, id] as const,
}