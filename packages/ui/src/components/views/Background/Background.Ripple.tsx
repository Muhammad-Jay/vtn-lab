"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

import {
    createBackgroundStyle,
    resolveMode,
} from "./Background.Utils";

import { BackgroundRippleProps } from "./types";
import { BackgroundRippleEffect } from "../../ui/background-ripple-effect";

export const BackgroundRipple =
    React.forwardRef<
        HTMLDivElement,
        BackgroundRippleProps
    >(
        (
            {
                mode = "container",
                opacity = 1,
                zIndex = 0,
                interactive = false,
                interactiveHighlight = false,
                rows = 8,
                cols = 28,
                cellSize = 56,
                cellOpacity = 0.45,
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
                >
                    <BackgroundRippleEffect
                        rows={rows}
                        cols={cols}
                        cellSize={cellSize}
                        cellOpacity={cellOpacity}
                        interactive={
                            interactive && interactiveHighlight
                        }
                    />
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse 88% 78% at 50% 42%, transparent 28%, var(--background) 100%)",
                        }}
                    />
                </div>
            );
        }
    );

BackgroundRipple.displayName =
    "Background.Ripple";
