import * as React from "react";
import { HTMLMotionProps, Variants } from "framer-motion";

export type Responsive<T> = T | {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
};

export type ContainerSurface =
    | "none"
    | "surface-0" | "surface-1" | "surface-2" | "surface-3" | "surface-4" | "surface-5"
    | "panel-default" | "panel-inset" | "panel-raised" | "panel-floating"
    | "card" | "card-interactive"
    | "popover" | "dropdown" | "tooltip" | "modal"
    | "glass-0" | "glass-1" | "glass-2" | "glass-3" | "glass-4"
    | "liquid-0" | "liquid-1" | "liquid-2" | "liquid-3" | "liquid-4"
    | "page" | "section" | "hero" | "dashboard" | "auth"
    | "brand"
    | "grid" | "grid-sm" | "grid-md" | "grid-lg"
    | "dot" | "dot-lg"
    | "mesh" | "noise" | "spotlight"
    | "radial" | "radial-top" | "radial-bottom" | "radial-left" | "radial-right";

export type MarginValue = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | number | string;

export type ContainerMargin = MarginValue | {
    t?: MarginValue; // top
    b?: MarginValue; // bottom
    l?: MarginValue; // left
    r?: MarginValue; // right
    x?: MarginValue; // horizontal (left & right)
    y?: MarginValue; // vertical (top & bottom)
};

export type ContainerDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type ContainerAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type ContainerJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type ContainerAnchor = "none" | "top-left" | "top" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom" | "bottom-right" | "stretch";
export type ContainerRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
export type ContainerPadding = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type ContainerGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type ContainerElevation = "none" | "0" | "1" | "2" | "3" | "4";
export type ContainerBorder = "none" | "subtle" | "default" | "strong" | "focus";
export type ContainerBorderPosition = "all" | "top" | "bottom" | "left" | "right" | "x" | "y";
export type ContainerOverflow = "visible" | "hidden" | "clip" | "auto" | "scroll";
export type ContainerInteraction = "none" | "hover" | "press" | "card" | "lift";
export type ContainerMotion = "none" | "fade" | "scale" | "pop" | "slide-up" | "slide-down" | "slide-left" | "slide-right";
export type HiddenBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
export type ContainerWidth = "auto" | "fit" | "full" | "screen";
export type ContainerHeight = "auto" | "fit" | "full" | "screen";

export interface ContainerProps extends Omit<HTMLMotionProps<"div">, "animate" | "hidden"> {
    children?: React.ReactNode;
    surface?: ContainerSurface;
    border?: ContainerBorder;
    hoverBorder?: ContainerBorder;
    borderPosition?: ContainerBorderPosition;
    radius?: ContainerRadius;
    elevation?: ContainerElevation;
    padding?: ContainerPadding;
    margin?: ContainerMargin;
    gap?: ContainerGap;
    direction?: ContainerDirection;
    align?: ContainerAlign;
    justify?: ContainerJustify;
    anchor?: ContainerAnchor;
    width?: Responsive<ContainerWidth | number | string>;
    height?: Responsive<ContainerHeight | number | string>;
    maxWidth?: number | string;
    maxHeight?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    overflow?: ContainerOverflow;
    hideScrollbar?: boolean;
    interaction?: ContainerInteraction;
    hidden?: HiddenBreakpoint;
    animate?: boolean;
    motionEffect?: ContainerMotion;
    once?: boolean;
    viewportAmount?: number;
    motionVariants?: Variants;
}