"use client";

import { ClerkProvider as Clerk } from "@clerk/nextjs";
import React from "react";

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}