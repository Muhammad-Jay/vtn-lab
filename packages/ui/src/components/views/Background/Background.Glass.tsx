"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";

import { BackgroundGlassProps } from "./types";
import {
    createBackgroundStyle,
    resolveBlur,
    resolveMode,
} from "./Background.Utils";

export const BackgroundGlass = React.forwardRef<
    HTMLDivElement,
    BackgroundGlassProps
>(
    (
        {
            mode = "container",
            interactive = false,
            opacity = 1,
            zIndex = 0,
            blur = "xl",
            className,
            style,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                aria-hidden
                style={createBackgroundStyle(opacity, zIndex, {
                    backgroundColor:
                        "color-mix(in oklch, var(--card) 72%, transparent)",
                    border: "1px solid color-mix(in oklch, var(--border) 72%, transparent)",
                    boxShadow:
                        "inset 0 1px 0 color-mix(in oklch, var(--foreground) 7%, transparent)",
                    ...style,
                })}
                className={cn(
                    resolveMode(mode),

                    "overflow-hidden",

                    interactive
                        ? "pointer-events-auto"
                        : "pointer-events-none",

                    "backdrop-saturate-150",

                    resolveBlur(blur),

                    className
                )}
                {...props}
            />
        );
    }
);

BackgroundGlass.displayName = "Background.Glass";
