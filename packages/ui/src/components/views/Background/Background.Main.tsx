"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";

import { BackgroundMainProps } from "./types";
import {
    createBackgroundStyle,
    resolveMode,
} from "./Background.Utils";

export const BackgroundMain = React.forwardRef<
    HTMLDivElement,
    BackgroundMainProps
>(
    (
        {
            mode = "container",
            interactive = false,
            opacity = 1,
            zIndex = 0,
            gradient = "radial",
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
                    backgroundColor: "var(--background)",
                    backgroundImage:
                        gradient === "radial"
                            ? "radial-gradient(105% 75% at 50% -18%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 68%), radial-gradient(80% 60% at 100% 100%, color-mix(in oklch, var(--muted) 72%, transparent), transparent 74%)"
                            : gradient === "linear"
                              ? "linear-gradient(160deg, color-mix(in oklch, var(--primary) 10%, var(--background)), var(--background) 48%, color-mix(in oklch, var(--muted) 60%, var(--background)))"
                              : undefined,
                    ...style,
                })}
                className={cn(
                    resolveMode(mode),

                    "overflow-hidden",

                    interactive
                        ? "pointer-events-auto"
                        : "pointer-events-none",

                    className
                )}
                {...props}
            />
        );
    }
);

BackgroundMain.displayName = "Background.Main";
