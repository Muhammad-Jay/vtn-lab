import {api} from "@foundation/core/api-client";
import {NewOrganization, Organization, Organizations} from "@foundation/domain/org";

export const organizationsApi = {

    list: async() => {
        return await api.get<Organizations>("/organizations?detailed=true");
    },

    create: async(data: NewOrganization) => {
        return await api.post<Organization>("/organizations", data, {
            retry: {
                enabled: true,
                retries: 2,
                delay: 1000
            }
        });
    }
}