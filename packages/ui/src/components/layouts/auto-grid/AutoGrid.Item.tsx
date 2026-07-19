"use client";

import React from "react";
import { motion, MotionStyle } from "framer-motion";
import { cn } from "../../../lib/utils";
import { AutoGridItemProps, GridBreakpoint } from "./types";
import { colSpanMap, paddingMap, alignMap } from "./maps";
import { GridAnimationContext } from "./AutoGrid";

function resolveSpan(span?: AutoGridItemProps["span"]): string {
    if (!span) return "";
    if (typeof span === "number" || span === "full") {
        return colSpanMap.base[span];
    }
    return (Object.keys(span) as GridBreakpoint[])
        .map((bp) => {
            const val = span[bp];
            if (val === undefined) return "";
            return colSpanMap[bp]?.[val] || "";
        })
        .filter(Boolean)
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
        const parentAnimation = React.useContext(GridAnimationContext);

        const dynamicStyle: MotionStyle = {
            minWidth,
            maxWidth,
            ...(rowSpan !== undefined && {
                gridRow: typeof rowSpan === "number"
                    ? `span ${rowSpan} / span ${rowSpan}`
                    : rowSpan === "full"
                        ? "1 / -1"
                        : rowSpan
            }),
            ...style,
        };

        return (
            <motion.div
                ref={ref}
                layout={parentAnimation === "layout" ? true : undefined}
                transition={
                    parentAnimation === "layout"
                        ? { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
                        : undefined
                }
                className={cn(
                    "relative min-w-0 h-full",
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