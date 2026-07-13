"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import {
    alignMap,
    directionMap,
    gapMap,
    justifyMap,
    paddingMap,
    marginMap,
    dividerMap,
} from "./Stack.Utils";
import type { StackProps } from "./types";

export function Stack({
                          as: Component = "div",
                          children,
                          direction = "column",
                          reverse = false,
                          align,
                          justify,
                          gap,
                          wrap,
                          grow,
                          fullWidth,
                          fullHeight,
                          divider,
                          padding,
                          margin,
                          className,
                      }: StackProps) {
    return (
        <Component
            className={cn(
                // Core Flexbox layout engine
                "flex",
                directionMap[direction],
                reverse ? direction === "column" ? "flex-col-reverse" : "flex-row-reverse" : "",

                // Axis alignments
                align && alignMap[align],
                justify && justifyMap[justify],

                // Spacing configurations mapped to our shared tokens
                gap && gapMap[gap],
                padding && paddingMap[padding],
                margin && marginMap[margin],

                // Layout modifiers
                wrap && "flex-wrap",
                grow && "flex-1",
                fullWidth && "w-full",
                fullHeight && "w-full",

                // Conditional structural separation engine lines
                divider && dividerMap[direction],

                className
            )}
        >
            {children}
        </Component>
    );
}

Stack.displayName = "Stack";