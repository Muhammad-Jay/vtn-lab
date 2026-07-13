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
            mode = "page",
            interactive = false,
            interactiveHighlight = true,
            opacity = 1,
            zIndex = -8,
            gridSize = 40,
            fade = true,
            className,
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
                style={createBackgroundStyle(
                    opacity,
                    zIndex
                )}
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
                        className={cn(
                            "pointer-events-none absolute inset-0",

                            "bg-background",

                            "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                        )}
                    />
                )}

                {/* Cursor Highlight */}

                {interactiveHighlight && (
                    <motion.div
                        style={{
                            x,
                            y,
                            translateX:
                                "-50%",
                            translateY:
                                "-50%",
                        }}
                        className={cn(
                            "absolute",

                            "size-[28rem]",

                            "rounded-full",

                            "bg-primary/10",

                            "blur-3xl"
                        )}
                    />
                )}
            </div>
        );
    }
);

BackgroundGrid.displayName =
    "Background.Grid";