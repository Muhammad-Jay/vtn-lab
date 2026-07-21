import {api} from "@foundation/core/api-client";
import {Organizations} from "@foundation/domain";

export const organizationsApi = {

    list: async() => {
        return await api.get<Organizations>("/organizations");
    }
}