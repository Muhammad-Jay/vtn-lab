"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";

import { BackgroundMainProps } from "./types";
import {
    createBackgroundStyle,
    resolveGradient,
    resolveMode,
} from "./Background.Utils";

export const BackgroundMain = React.forwardRef<
    HTMLDivElement,
    BackgroundMainProps
>(
    (
        {
            mode = "page",
            interactive = false,
            opacity = 1,
            zIndex = -10,
            gradient = "radial",
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

                    "bg-background",

                    resolveGradient(gradient),

                    className
                )}
                {...props}
            />
        );
    }
);

BackgroundMain.displayName = "Background.Main";