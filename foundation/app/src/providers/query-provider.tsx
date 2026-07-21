"use client";

import React from "react";
import { getQueryClient, QueryClientProvider } from "@foundation/core/query";

export function QueryProvider({ children }: { children: React.ReactNode }) {

    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
