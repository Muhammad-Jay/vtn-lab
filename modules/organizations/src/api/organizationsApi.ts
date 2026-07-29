import {api} from "@foundation/core/api-client";
import {NewOrganization, Organization, Organizations, UpdateOrganizationData} from "@foundation/domain/org";
import {unwrap} from "@foundation/core";

export const organizationsApi = {

    list: async() => {
        return unwrap(api.get<Organizations>("/organizations", {
            query: {
                detailed: true
            }
        }));
    },

    create: async(data: NewOrganization) => {
        return unwrap(
            api.post<Organization>("/organizations", data, {
                retry: {
                    enabled: true,
                    retries: 2,
                    delay: 1000
                }
            })
        );
    },

    delete: async(id: string) => {
        return unwrap(
            api.delete<null>(`/organizations/${id}`, {
                retry: {
                    enabled: true,
                    retries: 2,
                    delay: 1000
                }
            })
        );
    },

    update: async(id: string, data: UpdateOrganizationData) => {
        return unwrap(
            api.patch<null>(`/organizations/${id}`, data, {
                retry: {
                    enabled: true,
                    retries: 2,
                    delay: 1000
                }
            })
        );
    }
}