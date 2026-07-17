"use client";

import {ReactNode} from "react";
import { ButtonTooltipProvider } from "@repo/ui/primitives";

export default function Providers({ children }: { children: ReactNode }) {

    return (
            <ButtonTooltipProvider delay={200}>
                {children}
            </ButtonTooltipProvider>
    )
}