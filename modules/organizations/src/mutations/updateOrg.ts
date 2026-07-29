"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { organizationsApi } from "../api/organizationsApi";
import { ApiError } from "@foundation/core/api-client";
import { orgQueryKeys } from "../queries/keys";
import { AppMutationOptions, withMutationToasts } from "@foundation/core";
import { UpdateOrganizationData } from "@foundation/domain/org";

type UpdateOrgVariables = {
    id: string;
    data: UpdateOrganizationData;
};

export const useUpdateOrganization = (
    options?: AppMutationOptions<null, ApiError, UpdateOrgVariables>
) => {
    const queryClient = useQueryClient();
    const { onSuccess, onError } = withMutationToasts(options || {});

    return useMutation({
        ...options,
        mutationFn: ({ id, data }) => organizationsApi.update(id, data),

        onSuccess: (...args) => {
            queryClient.invalidateQueries({ queryKey: orgQueryKeys.list });
            onSuccess?.(...args);
        },
        onError: (...args) => {
            onError?.(...args);
        }
    });
};