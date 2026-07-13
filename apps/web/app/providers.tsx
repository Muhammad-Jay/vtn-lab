"use client";

import {ReactNode} from "react";
// import { ClerkProvider } from "@repo/auth/provider"
import { ButtonTooltipProvider } from "@repo/ui/primitives";

export default function Providers({ children }: { children: ReactNode }) {

    return (
        // <ClerkProvider>
            <ButtonTooltipProvider delay={200}>
                {children}
            </ButtonTooltipProvider>
        // </ClerkProvider>
    )
}