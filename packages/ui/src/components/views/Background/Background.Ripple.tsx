"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

import {
    createBackgroundStyle,
    resolveMode,
} from "./Background.Utils";

import { BackgroundRippleGrid } from "./Background.Ripple.Grid";

import { BackgroundRippleProps } from "./types";
import { BackgroundRippleEffect } from "../../ui/background-ripple-effect";

export const BackgroundRipple =
    React.forwardRef<
        HTMLDivElement,
        BackgroundRippleProps
    >(
        (
            {
                mode = "page",
                opacity = 1,
                zIndex = -10,
                interactive = false,
                interactiveHighlight = false,
                rows = 8,
                cols = 28,
                cellSize = 56,
                cellOpacity = 0.45,
                className,
                ...props
            },
            ref
        ) => {
            const [clickedCell, setClickedCell] =
                React.useState<{
                    row: number;
                    col: number;
                } | null>(null);

            return (
                <div
                    ref={ref}
                    aria-hidden
                    style={{
                        ...createBackgroundStyle(
                            opacity,
                            zIndex
                        ),

                        "--background-ripple-fill":
                            "hsl(var(--muted))",

                        "--background-ripple-border":
                            "hsl(var(--border))",

                        "--background-ripple-shadow":
                            "hsl(var(--foreground) / .06)",
                    } as React.CSSProperties}
                    className={cn(
                        resolveMode(mode),

                        "overflow-hidden",

                        "bg-background",

                        interactive
                            ? "pointer-events-auto"
                            : "pointer-events-none",

                        className
                    )}
                    {...props}
                >
                    <BackgroundRippleEffect rows={rows} cols={cols} cellSize={cellSize} />
                    {/* <div className="absolute inset-0 flex items-center justify-center overflow-hidden mask-radial-from-20% mask-radial-at-top">
                        <BackgroundRippleGrid
                            rows={rows}
                            cols={cols}
                            cellSize={cellSize}
                            cellOpacity={
                                cellOpacity
                            }
                            interactiveHighlight={
                                interactiveHighlight
                            }
                            clickedCell={
                                clickedCell
                            }
                            onCellClick={(
                                row,
                                col
                            ) =>
                                setClickedCell({
                                    row,
                                    col,
                                })
                            }
                        />
                    </div> */}
                </div>
            );
        }
    );

BackgroundRipple.displayName =
    "Background.Ripple";