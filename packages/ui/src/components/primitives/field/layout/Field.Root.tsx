"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";
import { FieldProvider } from "../Field.Context";
import { FieldLabel } from "./Field.Label";
import { FieldHelper } from "./Field.Helper";
import type { FieldContextValue, FieldProps } from "../types";
import { resolveResponsiveLabelPlacement } from "../Field.Utils";

export function Field({
                          children,
                          labelplacement = "top",
                          fullwidth = true,
                          className, // Explicitly extract className
                          ...props
                      }: FieldProps) {
    const context = React.useMemo<FieldContextValue>(
        () => ({
            ...props,
            labelplacement,
            fullwidth,
        }),
        [labelplacement, fullwidth, props]
    );

    const isResponsive = typeof labelplacement === "object";
    const hidden = !isResponsive && labelplacement === "hidden";

    return (
        <FieldProvider value={context}>
            <div
                className={cn(
                    "flex flex-col gap-2", // Base gap between Label and Control wrapper
                    fullwidth && "w-full",
                    !isResponsive && labelplacement === "left" && "flex-row items-start gap-6",
                    isResponsive && resolveResponsiveLabelPlacement(labelplacement),
                    className, // Now it correctly applies custom classes (like w-full, gap-4)
                    props.styles?.root,
                    props.slotProps?.root?.className
                )}
                {...props.slotProps?.root}
            >
                {!hidden && (
                    <div
                        className={cn(
                            !isResponsive && labelplacement === "left" ? "w-48 shrink-0 pt-2!" : "w-full",
                            isResponsive && [
                                labelplacement.base === "left" && "w-48 shrink-0 pt-2!",
                                labelplacement.sm === "left" && "sm:w-48 sm:shrink-0 sm:pt-2!",
                                labelplacement.md === "left" && "md:w-48 md:shrink-0 md:pt-2!",
                                labelplacement.lg === "left" && "lg:w-48 lg:shrink-0 lg:pt-2!",
                                labelplacement.xl === "left" && "xl:w-48 xl:shrink-0 xl:pt-2!",
                                labelplacement["2xl"] === "left" && "2xl:w-48 2xl:shrink-0 2xl:pt-2!",
                            ]
                        )}
                    >
                        <FieldLabel />
                    </div>
                )}

                {/* Removed the `gap-2!` strict override so slotProps can customize the internal gap */}
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                    {props.topAdornment && (
                        <div
                            {...props.slotProps?.topAdornment}
                            className={cn(props.styles?.topAdornment, props.slotProps?.topAdornment?.className)}
                        >
                            {props.topAdornment}
                        </div>
                    )}

                    {children}

                    {props.bottomAdornment && (
                        <div
                            {...props.slotProps?.bottomAdornment}
                            className={cn(props.styles?.bottomAdornment, props.slotProps?.bottomAdornment?.className)}
                        >
                            {props.bottomAdornment}
                        </div>
                    )}
                    <FieldHelper />
                </div>
            </div>
        </FieldProvider>
    );
}