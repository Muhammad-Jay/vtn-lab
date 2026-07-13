import React from "react";
import { HTMLMotionProps } from "framer-motion";

export type GridBreakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

export type GridColumnScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

export type GridColumns = Partial<Record<GridBreakpoint, GridColumnScale>>;
export type GridSpan = GridColumnScale | "full" | Partial<Record<GridBreakpoint, GridColumnScale | "full">>;

export type GridAnimation = "layout" | "fade" | "none";
export type GridMode = "fixed" | "fit";
export type ItemAlign = "start" | "center" | "end" | "stretch";

export interface AutoGridProps extends Omit<HTMLMotionProps<"div">, "animation"> {
    children?: React.ReactNode;

    /** Layout strategy */
    mode?: GridMode;

    /** Responsive column count (used when mode="fixed") */
    columns?: GridColumns;

    /** Minimum item width in pixels (used when mode="fit") */
    minItemWidth?: number;

    /** Tailwind gap scale */
    gap?: SpacingScale;

    /** Animation preset */
    animation?: GridAnimation;

    /** Component to render when grid is empty */
    emptyState?: React.ReactNode;

    /** Explicitly trigger empty state regardless of children */
    isEmpty?: boolean;

    scroll?: boolean;
    hideScrollbar?: boolean;
    autoRows?: string;
}

export interface AutoGridItemProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    span?: GridSpan;
    rowSpan?: number | "full";
    sticky?: boolean;
    align?: ItemAlign;
    padding?: SpacingScale;
    minWidth?: number | string;
    maxWidth?: number | string;
}