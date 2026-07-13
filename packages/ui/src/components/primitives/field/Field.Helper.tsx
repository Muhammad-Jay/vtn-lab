"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

interface FieldHelperProps {
    children?: React.ReactNode;
    className?: string;
}

export function FieldHelper({
                                children,
                                className,
                            }: FieldHelperProps) {

    if (!children) {
        return null;
    }

    return (
        <p
            className={cn(
                "text-muted-foreground text-xs leading-relaxed",
                className,
            )}
        >
            {children}
        </p>
    );
}