"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { organizationsApi } from "../api/organizationsApi";
import { ApiError } from "@foundation/core/api-client";
import { orgQueryKeys } from "../queries/keys";
import { AppMutationOptions, withMutationToasts } from "@foundation/core";

export const useDeleteOrganization = (
    options?: AppMutationOptions<null, ApiError, string>
) => {
    const queryClient = useQueryClient();
    const { onSuccess, onError } = withMutationToasts(options || {});

    return useMutation({
        ...options,
        mutationFn: organizationsApi.delete,
        onSuccess: (...args) => {
            queryClient.invalidateQueries({ queryKey: orgQueryKeys.list });
            onSuccess?.(...args);
        },
        onError: (...args) => {
            onError?.(...args);
        }
    });
};