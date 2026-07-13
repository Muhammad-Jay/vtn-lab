import {
    Transition,
    Variants,
} from "framer-motion";

import {
    ContainerAnimation,
    ContainerBorder,
    ContainerGap,
    ContainerOverflow,
    ContainerPadding,
    ContainerRadius,
    ContainerShadow,
    ContainerSize,
    ContainerVariant,
    HiddenBreakpoint,
} from "./types";

export const radiusMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
};

export const paddingMap = {
    none: "",
    xs: "p-2!",
    sm: "p-3!",
    md: "p-4!",
    lg: "p-6!",
    xl: "p-8!",
    "2xl": "p-10!",
    "3xl": "p-12!",
};

export const gapMap = {
    none: "",
    xs: "gap-2",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
};

export const shadowMap = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
};

export const borderMap: Record<
    ContainerBorder,
    string
> = {
    none: "",
    default: "border border-border",
    top: "border-t border-border",
    bottom: "border-b border-border",
    left: "border-l border-border",
    right: "border-r border-border",
    x: "border-x border-border",
    y: "border-y border-border",
};

export const overflowMap: Record<
    ContainerOverflow,
    string
> = {
    visible: "overflow-visible",
    hidden: "overflow-hidden",
    clip: "overflow-clip",
    auto: "overflow-auto",
    scroll: "overflow-scroll",
};

export const widthMap: Record<
    ContainerSize,
    string
> = {
    auto: "",
    full: "w-full!",
    fit: "w-fit!",
};

export const heightMap: Record<
    ContainerSize,
    string
> = {
    auto: "",
    full: "h-full!",
    fit: "h-fit!",
};

export const variantMap: Record<
    ContainerVariant,
    string
> = {
    default: "bg-background",
    primary: "bg-primary",
    secondary: "bg-secondary",
    ghost: "bg-transparent",
    transparent: "bg-transparent",
    glass: [
        "bg-background/55",
        "backdrop-blur-xl",
        "backdrop-saturate-150",
    ].join(" "),
    card: "bg-card",
    muted: "bg-muted",
};

export const hiddenMap: Record<
    HiddenBreakpoint,
    string
> = {
    sm: "max-sm:hidden",
    md: "max-md:hidden",
    lg: "max-lg:hidden",
    xl: "max-xl:hidden",
    "2xl": "max-2xl:hidden",
};

export const defaultTransition: Transition = {
    duration: 0.35,
    ease: [0.25, 0.1, 0.25, 1],
};

export function resolveInteractive(
    interactive?: boolean
) {
    if (!interactive) return "";

    return [
        "cursor-pointer",
        "transition-colors",
        "duration-200",
        "hover:border-ring/50",
    ].join(" ");
}

export function resolveCenter(
    center?: boolean
) {
    return center ? "m-auto" : "";
}

export function resolveAlignCenter(center?: boolean) {
    return center ? "items-center" : "";
}

export function resolveJustifyCenter(center?: boolean) {
    return center ? "justify-center" : "";
}

export function resolveScrollbar(
    hide?: boolean
) {
    return hide ? "no-scrollbar!" : "";
}

export function resolveAnimation(
    animation: ContainerAnimation
): Variants {
    switch (animation) {
        case "slide-up":
            return {
                hidden: {
                    opacity: 0,
                    y: 24,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            };

        case "slide-down":
            return {
                hidden: {
                    opacity: 0,
                    y: -24,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            };

        case "slide-left":
            return {
                hidden: {
                    opacity: 0,
                    x: 24,
                },
                visible: {
                    opacity: 1,
                    x: 0,
                },
            };

        case "slide-right":
            return {
                hidden: {
                    opacity: 0,
                    x: -24,
                },
                visible: {
                    opacity: 1,
                    x: 0,
                },
            };

        case "scale":
            return {
                hidden: {
                    opacity: 0,
                    scale: 0.96,
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                },
            };

        case "pop":
            return {
                hidden: {
                    opacity: 0,
                    scale: 0.9,
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                },
            };

        case "none":
            return {
                hidden: {},
                visible: {},
            };

        case "fade":
        default:
            return {
                hidden: {
                    opacity: 0,
                },
                visible: {
                    opacity: 1,
                },
            };
    }
}