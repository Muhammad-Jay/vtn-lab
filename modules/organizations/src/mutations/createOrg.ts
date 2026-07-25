"use client";

import { useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";
import { organizationsApi } from "../api/organizationsApi";
import { ApiError } from "@foundation/core/api-client";
import { orgQueryKeys } from "../queries/keys";

/**
 * Data transfer object for creating a new organization.
 */
type CreateOrganizationDto = Parameters<typeof organizationsApi.create>[0];

/**
 * Successful response payload for the organization creation operation.
 */
type CreateOrganizationResponse = Extract<
    Awaited<ReturnType<typeof organizationsApi.create>>,
    { success: true }
>["data"];

/**
 * Hook to handle the creation of a new organization.
 * Integrates with React Query for state management and handles cache invalidation upon success.
 *
 * @param options - Optional React Query mutation options to extend or override default behaviors.
 * @returns The React Query mutation result object.
 */
export const useCreateOrganization = (
    options?: Omit<
        UseMutationOptions<CreateOrganizationResponse, ApiError, CreateOrganizationDto>,
        "mutationFn"
    >
) => {
    const queryClient = useQueryClient();

    return useMutation({
        ...options,
        mutationFn: async (data: CreateOrganizationDto) => {
            const result = await organizationsApi.create(data);

            if (!result.success) {
                throw result.error;
            }

            return result.data;
        },
        onSuccess: (...args) => {
            queryClient.invalidateQueries({ queryKey: orgQueryKeys.list });

            if (options?.onSuccess) {
                options.onSuccess(...args);
            }
        },
    });
};