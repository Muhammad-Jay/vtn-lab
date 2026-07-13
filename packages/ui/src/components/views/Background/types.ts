import * as React from "react";

export type BackgroundMode =
    | "page"
    | "container";

export type BackgroundVariant =
    | "main"
    | "glass"
    | "grid"
    | "ripple";

export type BackgroundBlur =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl";

export type BackgroundGradient =
    | "none"
    | "radial"
    | "linear";

export interface BackgroundProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;

    mode?: BackgroundMode;

    interactive?: boolean;

    opacity?: number;

    zIndex?: number;

    blur?: BackgroundBlur;

    gradient?: BackgroundGradient;
}

export interface BackgroundMainProps
    extends Omit<BackgroundProps, "blur"> {}

export interface BackgroundGlassProps
    extends Omit<BackgroundProps, "gradient"> {}

export interface BackgroundGridProps
    extends Omit<
        BackgroundProps,
        "blur" | "gradient"
    > {
    interactiveHighlight?: boolean;

    gridSize?: 24 | 32 | 36 | 40 | 48 | 56 | 64;

    fade?: boolean;
}

export interface BackgroundRippleProps
    extends Omit<
        BackgroundProps,
        "blur" | "gradient"
    > {
    /**
     * Decorative grid rows.
     *
     * @default 8
     */
    rows?: number;

    /**
     * Decorative grid columns.
     *
     * @default 28
     */
    cols?: number;

    /**
     * Cell size.
     *
     * @default 56
     */
    cellSize?: 24 | 32 | 40 | 48 | 56 | 64;

    /**
     * Enables click ripple.
     *
     * @default false
     */
    interactiveHighlight?: boolean;

    /**
     * Base cell opacity.
     *
     * @default .45
     */
    cellOpacity?: number;
}