"use client";

import * as React from "react";
import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

import { cn } from "../../../lib/utils";

import { BackgroundGridProps } from "./types";

import {
    createBackgroundStyle,
    createGridStyle,
    resolveMode,
} from "./Background.Utils";

export const BackgroundGrid = React.forwardRef<
    HTMLDivElement,
    BackgroundGridProps
>(
    (
        {
            mode = "container",
            interactive = false,
            interactiveHighlight = false,
            opacity = 1,
            zIndex = 0,
            gridSize = 40,
            fade = true,
            className,
            style,
            ...props
        },
        ref
    ) => {
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        const x = useSpring(mouseX, {
            stiffness: 250,
            damping: 30,
        });

        const y = useSpring(mouseY, {
            stiffness: 250,
            damping: 30,
        });

        function onPointerMove(
            e: React.PointerEvent<HTMLDivElement>
        ) {
            if (!interactiveHighlight) return;

            const rect =
                e.currentTarget.getBoundingClientRect();

            mouseX.set(
                e.clientX - rect.left
            );

            mouseY.set(
                e.clientY - rect.top
            );
        }

        return (
            <div
                ref={ref}
                aria-hidden
                onPointerMove={onPointerMove}
                style={createBackgroundStyle(opacity, zIndex, style)}
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
                {/* Grid */}

                <div
                    className="absolute inset-0"
                    style={createGridStyle(
                        gridSize
                    )}
                />

                {/* Fade */}

                {fade && (
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse 82% 78% at 50% 46%, transparent 24%, var(--background) 80%)",
                        }}
                    />
                )}

                {/* Cursor Highlight */}

                {interactive && interactiveHighlight && (
                    <motion.div
                        style={{
                            x,
                            y,
                            translateX:
                                "-50%",
                            translateY:
                                "-50%",
                            background:
                                "radial-gradient(circle, color-mix(in oklch, var(--primary) 20%, transparent), transparent 68%)",
                        }}
                        className="absolute size-[32rem] rounded-full blur-3xl"
                        aria-hidden
                    />
                )}
            </div>
        );
    }
);

BackgroundGrid.displayName =
    "Background.Grid";
