import {
    Check,
    CircleAlert,
    CircleCheck,
    Loader2,
} from "lucide-react";

import {
    Transition,
    Variants,
} from "framer-motion";

import {
    ButtonAnimation,
    ButtonRadius,
    ButtonShadow,
    ButtonSize,
    ButtonVariant,
    ButtonWidth,
    ButtonHiddenBreakpoint,
} from "./types";

export const buttonVariantMap: Record<ButtonVariant, string> = {
    default:
        "bg-primary text-primary-foreground hover:bg-primary/90",

    primary:
        "bg-primary text-primary-foreground hover:bg-primary/90",

    secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/90",

    outline:
        "text-foreground border border-border bg-background hover:bg-muted",

    ghost:
        "hover:bg-muted",

    link:
        "text-foreground underline-offset-4 hover:underline",

    destructive:
        "bg-destructive/10 text-destructive hover:bg-destructive/20",

    success:
        "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400",

    warning:
        "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-400",

    glass: [
        "bg-background/55",
        "text-foreground",
        "border",
        "border-border/40",
        "backdrop-blur-xl",
        "backdrop-saturate-150",
        "hover:bg-background/70",
    ].join(" "),
};

export const buttonSizeMap: Record<ButtonSize, string> = {
    xs: "h-6 px-2 text-xs gap-1 [&_svg]:size-3",
    sm: "h-7 px-2.5 text-sm gap-1.5 [&_svg]:size-3.5",
    md: "h-8 px-3 text-sm gap-2 [&_svg]:size-4",
    lg: "h-10 px-4 text-sm gap-2 [&_svg]:size-4",
    xl: "h-11 px-5 text-base gap-2.5 [&_svg]:size-5",

    icon: "size-8",
    "icon-xs": "size-6",
    "icon-sm": "size-7",
    "icon-lg": "size-10",
};

export const radiusMap: Record<ButtonRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
};

export const shadowMap: Record<ButtonShadow, string> = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
};

export const widthMap: Record<ButtonWidth, string> = {
    auto: "",
    fit: "w-fit",
    full: "w-full",
};

export const hiddenContentMap: Record<ButtonHiddenBreakpoint, string> = {
    never: "",
    sm: "max-sm:hidden",
    md: "max-md:hidden",
    lg: "max-lg:hidden",
    xl: "max-xl:hidden",
    "2xl": "max-2xl:hidden",
};

export const defaultIcons = {
    default: Check,
    primary: Check,
    secondary: Check,
    outline: Check,
    ghost: Check,
    link: Check,
    destructive: CircleAlert,
    success: CircleCheck,
    warning: CircleAlert,
    glass: Check,
};

export const LoadingSpinner = Loader2;

export const defaultTransition: Transition = {
    duration: 0.25,
    ease: [0.25, 0.1, 0.25, 1],
};

export function resolveAnimation(
    animation: ButtonAnimation
): Variants {

    switch (animation) {

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

/**
 * Variants that should exist on the Button namespace.
 *
 * Used by Button.Factory.tsx
 */
export const buttonVariants: ButtonVariant[] = [
    "default",
    "primary",
    "secondary",
    "outline",
    "ghost",
    "link",
    "destructive",
    "success",
    "warning",
    "glass",
];