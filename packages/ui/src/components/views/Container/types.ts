// types.ts

import * as React from "react";
import {
    HTMLMotionProps,
    Variant,
} from "framer-motion";

export type ContainerVariant =
    | "default"
    | "primary"
    | "secondary"
    | "ghost"
    | "glass"
    | "card"
    | "muted"
    | "transparent";

export type ContainerRadius =
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full";

export type ContainerPadding =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl";

export type ContainerGap =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export type ContainerShadow =
    | "none"
    | "sm"
    | "md"
    | "lg";

export type ContainerBorder =
    | "none"
    | "default"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "x"
    | "y";

export type ContainerOverflow =
    | "visible"
    | "hidden"
    | "clip"
    | "auto"
    | "scroll";

export type ContainerAnimation =
    | "none"
    | "fade"
    | "scale"
    | "pop"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right";

export type HiddenBreakpoint =
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";

export type ContainerSize =
    | "auto"
    | "full"
    | "fit";

// @ts-ignore
export interface ContainerProps
    extends Omit<
        HTMLMotionProps<"div">,
        "animate"
    > {
    children?: React.ReactNode;

    /**
     * Semantic visual style.
     *
     * @default "default"
     */
    variant?: ContainerVariant;

    /**
     * Border style.
     *
     * @default "default"
     */
    border?: ContainerBorder;

    /**
     * Corner radius.
     *
     * @default "lg"
     */
    radius?: ContainerRadius;

    /**
     * Internal padding.
     *
     * @default "md"
     */
    padding?: ContainerPadding;

    /**
     * Flex gap.
     *
     * @default "none"
     */
    gap?: ContainerGap;

    /**
     * Shadow preset.
     *
     * @default "none"
     */
    shadow?: ContainerShadow;

    /**
     * Overflow behavior.
     *
     * @default "visible"
     */
    overflow?: ContainerOverflow;

    /**
     * Hide scrollbar when overflow is enabled.
     *
     * @default false
     */
    hideScrollbar?: boolean;

    /**
     * Width preset.
     *
     * auto -> browser default
     * full -> w-full
     * fit -> w-fit
     *
     * @default "auto"
     */
    width?: ContainerSize;

    /**
     * Fixed width.
     *
     * Overrides width preset.
     */
    widthValue?: number | string;

    /**
     * Height preset.
     *
     * @default "auto"
     */
    height?: ContainerSize;

    /**
     * Fixed height.
     */
    heightValue?: number | string;

    /**
     * Maximum width.
     */
    maxWidth?: number | string;

    /**
     * Maximum height.
     */
    maxHeight?: number | string;

    /**
     * Minimum width.
     */
    minWidth?: number | string;

    /**
     * Minimum height.
     */
    minHeight?: number | string;

    /**
     * Centers using mx-auto.
     *
     * @default false
     */
    center?: boolean;

    alignCenter?: boolean;

    justifyCenter?: boolean;

    /**
     * Makes container clickable.
     *
     * @default false
     */
    interactive?: boolean;

    /**
     * Hide at breakpoint.
     */
    hidden?: HiddenBreakpoint;

    /**
     * Animate when entering viewport.
     *
     * @default false
     */
    animate?: boolean;

    /**
     * Animation preset.
     *
     * @default "fade"
     */
    animation?: ContainerAnimation;

    /**
     * Animate once.
     *
     * @default true
     */
    once?: boolean;

    /**
     * Viewport threshold.
     *
     * @default 0.15
     */
    viewportAmount?: number;

    /**
     * Custom animation variants.
     */
    variants?: {
        hidden: Variant;
        visible: Variant;
    };
}