import { clsx } from "clsx";
import { MotionStyle } from "framer-motion";
import {
    ContainerProps,
    Responsive,
    MarginValue,
    PaddingValue,
    GapValue,
    DirectionValue,
    AlignValue,
    JustifyValue,
    OverflowValue,
    OverflowObject,
    AnchorValue,
    PositionValue,
    ScrollSnapType,
    ScrollSnapAlign
} from "./types";

/* ==========================================================================
 * Class Maps
 * ========================================================================== */

const surfaceMap = {
    none: "",
    "surface-0": "ds-surface-0",
    "surface-1": "ds-surface-1",
    "surface-2": "ds-surface-2",
    "surface-3": "ds-surface-3",
    "surface-4": "ds-surface-4",
    "surface-5": "ds-surface-5",
    "panel-default": "ds-panel-default",
    "panel-inset": "ds-panel-inset",
    "panel-raised": "ds-panel-raised",
    "panel-floating": "ds-panel-floating",
    card: "ds-card",
    "card-interactive": "ds-card-interactive",
    popover: "ds-popover",
    dropdown: "ds-dropdown",
    tooltip: "ds-tooltip",
    modal: "ds-modal",
    "glass-0": "ds-glass-morphism-0",
    "glass-1": "ds-glass-morphism-1",
    "glass-2": "ds-glass-morphism-2",
    "glass-3": "ds-glass-morphism-3",
    "glass-4": "ds-glass-morphism-4",
    "liquid-0": "ds-glass-liquid-0",
    "liquid-1": "ds-glass-liquid-1",
    "liquid-2": "ds-glass-liquid-2",
    "liquid-3": "ds-glass-liquid-3",
    "liquid-4": "ds-glass-liquid-4",
    page: "ds-bg-page",
    section: "ds-bg-section",
    hero: "ds-bg-hero",
    dashboard: "ds-bg-dashboard",
    auth: "ds-bg-auth",
    brand: "ds-bg-brand",
    grid: "ds-bg-grid",
    "grid-sm": "ds-bg-grid-sm",
    "grid-md": "ds-bg-grid-md",
    "grid-lg": "ds-bg-grid-lg",
    dot: "ds-bg-dot",
    "dot-lg": "ds-bg-dot-lg",
    mesh: "ds-bg-mesh",
    noise: "ds-bg-noise",
    spotlight: "ds-bg-spotlight",
    radial: "ds-bg-radial",
    "radial-top": "ds-bg-radial-top",
    "radial-bottom": "ds-bg-radial-bottom",
    "radial-left": "ds-bg-radial-left",
    "radial-right": "ds-bg-radial-right",
} as const;

const radiusMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
} as const;

const elevationMap = {
    none: "",
    "0": "shadow-0",
    "1": "shadow-1",
    "2": "shadow-2",
    "3": "shadow-3",
    "4": "shadow-4",
} as const;

const paddingMap: Record<PaddingValue, string> = {
    none: "p-0!",
    xs: "p-2!",
    sm: "p-3!",
    md: "p-4!",
    lg: "p-6!",
    xl: "p-8!",
    "2xl": "p-10!",
    "3xl": "p-12!",
};

const gapMap: Record<GapValue, string> = {
    none: "gap-0!",
    xs: "gap-2!",
    sm: "gap-3!",
    md: "gap-4!",
    lg: "gap-6!",
    xl: "gap-8!",
};

const directionMap: Record<DirectionValue, string> = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
};

const alignMap: Record<AlignValue, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
};

const justifyMap: Record<JustifyValue, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
};

const positionMap: Record<PositionValue, string> = {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
};

const borderMap = {
    none: "",
    subtle: "border border-border-subtle",
    default: "border border-border-default",
    strong: "border border-border-strong",
    focus: "border border-border-focus",
} as const;

const hoverBorderMap = {
    none: "hover:border-transparent",
    subtle: "hover:border hover:border-border-subtle transition-colors",
    default: "hover:border hover:border-border-default transition-colors",
    strong: "hover:border hover:border-border-strong transition-colors",
    focus: "hover:border hover:border-border-focus transition-colors",
} as const;

const borderPositionMap = {
    all: "",
    top: "border-x-0 border-b-0",
    bottom: "border-x-0 border-t-0",
    left: "border-y-0 border-r-0",
    right: "border-y-0 border-l-0",
    x: "border-y-0",
    y: "border-x-0",
} as const;

const overflowMap = {
    visible: "overflow-visible",
    hidden: "overflow-hidden",
    clip: "overflow-clip",
    auto: "overflow-auto no-scrollbar!",
    scroll: "overflow-scroll no-scrollbar!",
} as const;

const interactionMap = {
    none: "",
    hover: "transition-colors hover:bg-accent",
    press: "transition active:scale-[0.98]",
    card: "transition hover:-translate-y-0.5 hover:shadow-2",
    lift: "transition hover:-translate-y-1 hover:shadow-3",
} as const;

const hiddenMap = {
    sm: "max-sm:hidden",
    md: "max-md:hidden",
    lg: "max-lg:hidden",
    xl: "max-xl:hidden",
    "2xl": "2xl:hidden",
} as const;

const widthTokenMap = {
    auto: "w-auto",
    fit: "w-fit",
    full: "w-full", // Keeps component locked tight inside parent structures
    screen: "w-screen",
} as const;

const heightTokenMap = {
    auto: "h-auto",
    fit: "h-fit",
    full: "h-full",
    screen: "h-screen",
} as const;

const motionMap = {
    none: "",
    fade: "",
    scale: "",
    pop: "",
    "slide-up": "",
    "slide-down": "",
    "slide-left": "",
    "slide-right": "",
} as const;

const flexAnchorMap: Record<AnchorValue, string> = {
    none: "",
    "top-left": "self-start justify-self-start",
    top: "self-start justify-self-center",
    "top-right": "self-start justify-self-end",
    left: "self-center justify-self-start",
    center: "self-center justify-self-center",
    right: "self-center justify-self-end",
    "bottom-left": "self-end justify-self-start",
    bottom: "self-end justify-self-center",
    "bottom-right": "self-end justify-self-end",
    stretch: "self-stretch justify-self-stretch",
};

const absoluteAnchorMap: Record<AnchorValue, string> = {
    none: "",
    "top-left": "top-0 left-0",
    top: "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    left: "top-1/2 left-0 -translate-y-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    right: "top-1/2 right-0 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0",
    stretch: "inset-0",
};

const marginSizeMap = {
    none: "0",
    xs: "2",
    sm: "3",
    md: "4",
    lg: "6",
    xl: "8",
    "2xl": "10",
    "3xl": "12",
} as const;

// Native Core Scroll Snap Map Configurations
const scrollSnapMap: Record<ScrollSnapType, string> = {
    none: "snap-none",
    x: "snap-x",
    y: "snap-y",
    "x-mandatory": "snap-x snap-mandatory",
    "y-mandatory": "snap-y snap-mandatory",
    "x-proximity": "snap-x snap-proximity",
    "y-proximity": "snap-y snap-proximity",
};

const snapAlignMap: Record<ScrollSnapAlign, string> = {
    none: "",
    start: "snap-start",
    center: "snap-center",
    end: "snap-end",
};

/* ==========================================================================
 * Responsive Engine Utilities
 * ========================================================================== */

const breakpoints = ["base", "sm", "md", "lg", "xl", "2xl"] as const;

export function isResponsiveObject<T>(val: any): val is Record<string, T> {
    return typeof val === "object" && val !== null && !Array.isArray(val) && breakpoints.some(bp => bp in val);
}

export function processResponsive<T>(
    value: Responsive<T> | undefined,
    mapper: (val: T) => string
): string {
    if (value === undefined) return "";

    const processMappedValue = (mapped: string, bp: string) => {
        if (bp === "base" || !mapped) return mapped;
        return mapped.split(" ").filter(Boolean).map(c => `${bp}:${c}`).join(" ");
    };

    if (isResponsiveObject<T>(value)) {
        return Object.entries(value)
            .filter(([bp]) => breakpoints.includes(bp as any))
            .map(([bp, val]) => processMappedValue(mapper(val as T), bp))
            .join(" ");
    }

    return mapper(value as T);
}

/* ==========================================================================
 * Specific Resolvers
 * ========================================================================== */

const resolveMarginValue = (val: MarginValue): string => {
    if (typeof val === "string" && val in marginSizeMap) {
        return `m-${marginSizeMap[val as keyof typeof marginSizeMap]}`;
    }
    const normalized = typeof val === "number" ? `${val}px` : val;
    return `m-[${normalized}]`;
};

const resolveDimensionValue = (val: string | number, prefix: "w" | "h"): string => {
    const tokenMap = prefix === "w" ? widthTokenMap : heightTokenMap;
    if (typeof val === "string" && val in tokenMap) {
        return tokenMap[val as keyof typeof tokenMap];
    }
    return "";
};

const resolveOverflowValue = (val: OverflowValue | OverflowObject): string => {
    if (typeof val === "object" && val !== null) {
        const classes = [];
        if (val.x) {
            classes.push((overflowMap[val.x] || "").replace(/overflow-/g, "overflow-x-"));
        }
        if (val.y) {
            classes.push((overflowMap[val.y] || "").replace(/overflow-/g, "overflow-y-"));
        }
        return classes.join(" ");
    }
    return overflowMap[val as OverflowValue] || "";
};

/* ==========================================================================
 * Build Classes
 * ========================================================================== */

export function buildContainerClassName({
                                            surface = "none",
                                            position,
                                            border = "none",
                                            hoverBorder = "none",
                                            borderPosition = "all",
                                            radius = "none",
                                            elevation = "none",
                                            padding = "none",
                                            margin = "none",
                                            gap = "none",
                                            direction = "column",
                                            align = "stretch",
                                            justify = "start",
                                            overflow = "visible",
                                            interaction = "none",
                                            hidden,
                                            anchor = "none",
                                            motionEffect = "none",
                                            width,
                                            height,
                                            hideScrollbar,
                                            scrollSnap,
                                            snapAlign,
                                            className,
                                        }: Partial<ContainerProps>) {

    const isAbsolutePosition = typeof position === "string"
        ? ["absolute", "fixed", "sticky"].includes(position)
        : typeof position === "object" && position !== null && ["absolute", "fixed", "sticky"].includes(position.base || "");

    return clsx(
        "flex",
        surfaceMap[surface],
        borderMap[border],
        hoverBorder !== "none" && hoverBorderMap[hoverBorder],
        borderPositionMap[borderPosition],
        radiusMap[radius],
        elevationMap[elevation],
        processResponsive(position, val => positionMap[val] || ""),
        processResponsive(margin, resolveMarginValue),
        processResponsive(padding, val => paddingMap[val] || ""),
        processResponsive(gap, val => gapMap[val] || ""),
        processResponsive(direction, val => directionMap[val] || ""),
        processResponsive(align, val => alignMap[val] || ""),
        processResponsive(justify, val => justifyMap[val] || ""),
        processResponsive(overflow, resolveOverflowValue),
        processResponsive(anchor, val => isAbsolutePosition ? absoluteAnchorMap[val] : flexAnchorMap[val]),
        processResponsive(width, val => resolveDimensionValue(val, "w")),
        processResponsive(height, val => resolveDimensionValue(val, "h")),
        processResponsive(scrollSnap, val => scrollSnapMap[val] || ""),
        processResponsive(snapAlign, val => snapAlignMap[val] || ""),
        interactionMap[interaction],
        motionMap[motionEffect],
        hidden && hiddenMap[hidden],
        hideScrollbar && "scrollbar-none",
        className
    );
}

/* ==========================================================================
 * Build Style
 * ========================================================================== */

export function buildContainerStyle({
                                        minWidth,
                                        minHeight,
                                        maxWidth,
                                        maxHeight,
                                        width,
                                        height,
                                        style,
                                    }: Partial<ContainerProps>): MotionStyle {
    const customStyle: Record<string, any> = {
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        ...style,
    };

    if (typeof width === "number" || (typeof width === "string" && !(width in widthTokenMap))) {
        customStyle.width = width;
    } else if (isResponsiveObject(width) && width.base) {
        if (typeof width.base === "number" || (typeof width.base === "string" && !(width.base in widthTokenMap))) {
            customStyle.width = width.base;
        }
    }

    if (typeof height === "number" || (typeof height === "string" && !(height in heightTokenMap))) {
        customStyle.height = height;
    } else if (isResponsiveObject(height) && height.base) {
        if (typeof height.base === "number" || (typeof height.base === "string" && !(height.base in heightTokenMap))) {
            customStyle.height = height.base;
        }
    }

    return customStyle as MotionStyle;
}