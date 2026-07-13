"use client";

import React from "react";
import { motion, MotionStyle } from "framer-motion";
import { cn } from "../../../lib/utils";
import { AutoGridItemProps } from "./types";
import { colSpanMap, paddingMap, alignMap } from "./maps";

function resolveSpan(span?: AutoGridItemProps["span"]): string {
    if (!span) return "";
    if (typeof span === "number" || span === "full") {
        return colSpanMap.base[span];
    }
    return Object.entries(span)
        .map(([bp, value]) => colSpanMap[bp as keyof typeof colSpanMap][value as keyof typeof colSpanMap.base])
        .join(" ");
}

export const AutoGridItem = React.forwardRef<HTMLDivElement, AutoGridItemProps>(
    (
        {
            children,
            span,
            rowSpan,
            sticky = false,
            align,
            padding,
            minWidth,
            maxWidth,
            className,
            style,
            ...props
        },
        ref
    ) => {
        // Change from React.CSSProperties to MotionStyle
        const dynamicStyle: MotionStyle = {
            minWidth,
            maxWidth,
            ...(rowSpan && { gridRow: rowSpan === "full" ? "1 / -1" : `span ${rowSpan} / span ${rowSpan}` }),
            ...style,
        };

        return (
            <motion.div
                ref={ref}
                layout
                transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className={cn(
                    "relative min-w-0",
                    resolveSpan(span),
                    sticky && "sticky top-0 z-10 self-start",
                    align && alignMap[align],
                    padding !== undefined && paddingMap[padding],
                    className
                )}
                style={dynamicStyle}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

AutoGridItem.displayName = "AutoGrid.Item";