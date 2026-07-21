"use client";

import {useQuery} from "@tanstack/react-query";
import { orgQueryKeys } from "./keys";
import { organizationsApi } from "../api/organizationsApi";

export function useOrganizations() {

    return useQuery({

        queryKey: orgQueryKeys.list,

        queryFn: () => organizationsApi.list(),

    });
}