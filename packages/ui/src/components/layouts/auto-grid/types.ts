import * as React from "react";
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

    /** Tailwind gap scale mapping */
    gap?: SpacingScale;

    /** Motion layout animation preset */
    animation?: GridAnimation;

    /** Component to render when grid contains no children */
    emptyState?: React.ReactNode;

    /** Explicitly force empty state rendering regardless of layout tree state */
    isEmpty?: boolean;

    /** Enable inner layout viewport overflow scrolling */
    scroll?: boolean;

    /** Remove layout tracking scroll bars when scroll tracking is active */
    hideScrollbar?: boolean;

    /** Fully typed implicit row track size constraints */
    autoRows?: React.CSSProperties["gridAutoRows"];
}

export interface AutoGridItemProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;

    /** Sets column spanning constraints across distinct device sizes */
    span?: GridSpan;

    /** Sets row spanning boundaries natively inside implicit tracks */
    rowSpan?: number | "full" | React.CSSProperties["gridRow"];

    /** Locks elements dynamically against viewport layout positions */
    sticky?: boolean;

    /** Aligns specific items inside their assigned cell tracks */
    align?: ItemAlign;

    /** Tailwind layout inner cell padding scale mapping */
    padding?: SpacingScale;

    /** Precise element minimum dimension boundaries */
    minWidth?: React.CSSProperties["minWidth"];

    /** Precise element maximum dimension boundaries */
    maxWidth?: React.CSSProperties["maxWidth"];
}