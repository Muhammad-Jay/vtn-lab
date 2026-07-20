"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";
import { InputGroup, InputGroupAddon } from "../../../ui/input-group";
import {
    LoadingIcon,
    FIELD_RADIUS_MAP,
    FIELD_SIZE_MAP,
    FIELD_VARIANT_MAP,
    FIELD_WIDTH_MAP,
} from "../Field.Utils";
import { useFieldContext } from "../Field.Context";

interface FieldControlProps {
    children: React.ReactNode;
}

export function FieldControl({ children }: FieldControlProps) {
    const {
        loading,
        controlSize = "md",
        radius = "md",
        variant = "default",
        width = "full",
        startAdornment,
        endAdornment,
        styles,
        slotProps,
    } = useFieldContext();

    return (
        <InputGroup
            {...slotProps?.control}
            className={cn(
                "w-full",
                FIELD_SIZE_MAP[controlSize],
                FIELD_RADIUS_MAP[radius],
                FIELD_VARIANT_MAP[variant],
                FIELD_WIDTH_MAP[width],
                styles?.control,
                slotProps?.control?.className
            )}
        >
            {(loading || startAdornment) && (
                <InputGroupAddon align="inline-start">
                    {loading ? <LoadingIcon className="size-4 animate-spin" /> : startAdornment}
                </InputGroupAddon>
            )}

            {children}

            {endAdornment && <InputGroupAddon align="inline-end">{endAdornment}</InputGroupAddon>}
        </InputGroup>
    );
}