"use client";

import { cn } from "../../../../lib/utils";

import { useFieldContext } from "../Field.Context";

export function FieldHelper() {

    const {
        helper,
        styles,
        slotProps,
    } = useFieldContext();

    if (!helper) {
        return null;
    }

    return (
        <p
            className={cn(
                "text-xs text-muted-foreground leading-relaxed",
                styles?.helper,
                slotProps?.helper?.className,
            )}
            {...slotProps?.helper}
        >
            {helper}
        </p>
    );
}