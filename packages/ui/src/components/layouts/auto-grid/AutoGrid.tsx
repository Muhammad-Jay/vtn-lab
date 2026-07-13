"use client";

import React from "react";
import { motion, MotionStyle } from "framer-motion";
import { cn } from "../../../lib/utils";
import { AutoGridProps, GridAnimation } from "./types";
import { gapMap, gridColsMap } from "./maps";

function resolveColumns(columns?: AutoGridProps["columns"]) {
    if (!columns) return "";
    return Object.entries(columns)
        .map(([bp, value]) => {
            if (!value) return "";
            return gridColsMap[bp as keyof typeof gridColsMap]?.[value as keyof typeof gridColsMap.base];
        })
        .join(" ");
}

const getAnimationProps = (preset: GridAnimation) => {
    switch (preset) {
        case "layout":
            return {
                layout: true,
                transition: {
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1] as const
                }
            };
        case "fade":
            return {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.2 }
            };
        case "none":
        default:
            return {};
    }
};

export const AutoGridRoot = React.forwardRef<HTMLDivElement, AutoGridProps>(
    (
        {
            children,
            mode = "fixed",
            columns = { base: 1, md: 2, xl: 3 },
            minItemWidth = 320,
            gap = 6,
            scroll = false,
            hideScrollbar = true,
            autoRows = "minmax(0, auto)",
            animation = "layout",
            emptyState,
            isEmpty,
            className,
            style,
            ...props
        },
        ref
    ) => {
        // Evaluate empty state
        const childCount = React.Children.toArray(children).filter(Boolean).length;
        const showEmptyState = isEmpty || (childCount === 0 && emptyState !== undefined);

        // Change from React.CSSProperties to MotionStyle
        const dynamicStyle: MotionStyle = {
            gridAutoRows: autoRows,
            ...(mode === "fit" && {
                gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}px, 1fr))`,
            }),
            ...style,
        };

        return (
            <motion.div
                ref={ref}
                {...getAnimationProps(animation)}
                className={cn(
                    "grid w-full",
                    mode === "fixed" && resolveColumns(columns),
                    gapMap[gap],
                    scroll && "overflow-auto",
                    scroll && hideScrollbar && "no-scrollbar",
                    className
                )}
                style={dynamicStyle}
                {...props}
            >
                {showEmptyState ? (
                    <div className="col-span-full h-full w-full">{emptyState}</div>
                ) : (
                    children
                )}
            </motion.div>
        );
    }
);

AutoGridRoot.displayName = "AutoGrid";

export const AutoGridHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn("col-span-full", className)} {...props}>
            {children}
        </div>
    )
);
AutoGridHeader.displayName = "AutoGrid.Header";

export const AutoGridFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn("col-span-full mt-auto", className)} {...props}>
            {children}
        </div>
    )
);
AutoGridFooter.displayName = "AutoGrid.Footer";