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
            mode = "page",
            interactive = false,
            opacity = 1,
            zIndex = -9,
            blur = "xl",
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                aria-hidden
                style={createBackgroundStyle(opacity, zIndex)}
                className={cn(
                    resolveMode(mode),

                    "overflow-hidden",

                    interactive
                        ? "pointer-events-auto"
                        : "pointer-events-none",

                    "bg-card/40",

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