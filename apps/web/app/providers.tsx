"use client";

import {ReactNode} from "react";
import { ButtonTooltipProvider } from "@repo/ui/primitives";
import { AppProviders } from "@foundation/app/provider";

export default function Providers({ children }: { children: ReactNode }) {

    return (
        <AppProviders>
            <ButtonTooltipProvider delay={200}>
                {children}
            </ButtonTooltipProvider>
        </AppProviders>
    )
}