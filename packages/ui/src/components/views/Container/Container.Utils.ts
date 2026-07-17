import { clsx } from "clsx";
import { MotionStyle } from "framer-motion";
import {ContainerMargin, ContainerProps, MarginValue, Responsive} from "./types";

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

const paddingMap = {
    none: "p-0!",
    xs: "p-2!",
    sm: "p-3!",
    md: "p-4!",
    lg: "p-6!",
    xl: "p-8!",
    "2xl": "p-10!",
    "3xl": "p-12!",
} as const;

const gapMap = {
    none: "gap-0!",
    xs: "gap-2!",
    sm: "gap-3!",
    md: "gap-4!",
    lg: "gap-6!",
    xl: "gap-8!",
} as const;

const directionMap = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
} as const;

const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
} as const;

const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
} as const;

const borderMap = {
    none: "",
    subtle: "border border-border-subtle",
    default: "border border-border-default",
    strong: "border border-border-strong",
    focus: "border border-border-focus",
} as const;

// Ensure hover border adds base width if not already present, changing only on hover
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
    full: "w-full",
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

const anchorMap = {
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
} as const;

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

export function resolveMargin(margin?: ContainerMargin): string {
    if (margin === undefined) return "";

    const classes: string[] = [];

    // Helper to generate the exact Tailwind class
    const processValue = (prefix: string, val: MarginValue) => {
        if (typeof val === "string" && val in marginSizeMap) {
            // Converts 'md' to 'm-4', 't: xs' to 'mt-2', etc.
            classes.push(`${prefix}-${marginSizeMap[val as keyof typeof marginSizeMap]}`);
        } else if (typeof val === "number") {
            // Converts 10 to 'm-[10px]'
            classes.push(`${prefix}-[${val}px]`);
        } else if (typeof val === "string") {
            // Converts custom strings like '2rem' to 'm-[2rem]'
            classes.push(`${prefix}-[${val}]`);
        }
    };

    // If it's an object { l: 10, r: "md" }
    if (typeof margin === "object" && margin !== null) {
        if (margin.t !== undefined) processValue("mt", margin.t);
        if (margin.b !== undefined) processValue("mb", margin.b);
        if (margin.l !== undefined) processValue("ml", margin.l);
        if (margin.r !== undefined) processValue("mr", margin.r);
        if (margin.x !== undefined) processValue("mx", margin.x);
        if (margin.y !== undefined) processValue("my", margin.y);
    } else {
        // If it's a primitive like "xs" or 10
        processValue("m", margin);
    }

    return classes.join(" ");
}

/* ==========================================================================
 * Helpers
 * ========================================================================== */

export function resolveDimension(
    value: Responsive<string | number> | undefined,
    prefix: "w" | "h"
): { className?: string; style?: React.CSSProperties } {
    if (value === undefined) return {};

    const tokenMap = prefix === "w" ? widthTokenMap : heightTokenMap;

    // Handle single primitive values (Standard execution)
    if (typeof value === "string" || typeof value === "number") {
        if (typeof value === "string" && value in tokenMap) {
            return { className: tokenMap[value as keyof typeof tokenMap] };
        }
        return {
            style: { [prefix === "w" ? "width" : "height"]: typeof value === "number" ? `${value}px` : value }
        };
    }

    // Handle responsive breakpoint object execution
    const classes: string[] = [];

    Object.entries(value).forEach(([bp, val]) => {
        if (val === undefined) return;

        const isBase = bp === "base";
        const bpPrefix = isBase ? "" : `${bp}:`;

        if (typeof val === "string" && val in tokenMap) {
            // Map token (e.g. { md: "full" } -> "md:w-full")
            const tokenClass = tokenMap[val as keyof typeof tokenMap];
            classes.push(isBase ? tokenClass : `${bpPrefix}${tokenClass}`);
        } else {
            // Map arbitrary custom value (e.g. { lg: 500 } -> "lg:w-[500px]")
            const normalizedVal = typeof val === "number" ? `${val}px` : val;
            classes.push(`${bpPrefix}${prefix}-[${normalizedVal}]`);
        }
    });

    return { className: classes.join(" ") };
}

/* ==========================================================================
 * Build Classes
 * ========================================================================== */

export function buildContainerClassName({
                                            surface = "none",
                                            border = "none",
                                            hoverBorder = "none",
                                            borderPosition = "all",
                                            radius = "none",
                                            elevation = "none",
                                            padding = "none",
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
                                            className,
                                        }: Partial<ContainerProps>) {
    const widthResult = resolveDimension(width, "w");
    const heightResult = resolveDimension(height, "h");

    return clsx(
        "flex",
        surfaceMap[surface],
        borderMap[border],
        hoverBorder !== "none" && hoverBorderMap[hoverBorder],
        borderPositionMap[borderPosition],
        radiusMap[radius],
        elevationMap[elevation],
        paddingMap[padding],
        gapMap[gap],
        directionMap[direction],
        alignMap[align],
        justifyMap[justify],
        overflowMap[overflow],
        interactionMap[interaction],
        motionMap[motionEffect],
        hidden && hiddenMap[hidden],
        anchorMap[anchor],
        widthResult.className,
        heightResult.className,
        hideScrollbar && "scrollbar-none",
        className
    );
}

/* ==========================================================================
 * Build Style
 * ========================================================================== */

export function buildContainerStyle({
                                        margin,
                                        width,
                                        height,
                                        minWidth,
                                        minHeight,
                                        maxWidth,
                                        maxHeight,
                                        style,
                                    }: Partial<ContainerProps>): MotionStyle {
    const widthResult = resolveDimension(width, "w");
    const heightResult = resolveDimension(height, "h");
    const marginClasses = resolveMargin(margin);

    return {
        ...widthResult.style,
        ...heightResult.style,
        // @ts-ignore
        marginClasses,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        ...style,
    };
}