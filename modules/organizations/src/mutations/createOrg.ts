"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { organizationsApi } from "../api/organizationsApi";
import { ApiError } from "@foundation/core/api-client";
import { orgQueryKeys } from "../queries/keys";
import { AppMutationOptions, withMutationToasts } from "@foundation/core";

type CreateOrganizationDto = Parameters<typeof organizationsApi.create>[0];
type CreateOrganizationResponse = Awaited<ReturnType<typeof organizationsApi.create>>;

export const useCreateOrganization = (
    options?: AppMutationOptions<CreateOrganizationResponse, ApiError, CreateOrganizationDto>
) => {
    const queryClient = useQueryClient();
    const { onSuccess, onError } = withMutationToasts(options || {});

    return useMutation({
        ...options,
        mutationFn: organizationsApi.create,
        onSuccess: (...args) => {
            queryClient.invalidateQueries({ queryKey: orgQueryKeys.list });
            onSuccess?.(...args);
        },
        onError: (...args) => {
            onError?.(...args);
        }
    });
};