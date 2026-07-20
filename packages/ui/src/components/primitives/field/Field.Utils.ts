import {
    FieldRadius,
    FieldSize,
    FieldVariant,
    FieldWidth,
    HiddenBreakpoint,
    LabelPlacement,
    ResponsiveLabelPlacement,
} from "./types";

import {
    Loader2,
} from "lucide-react";

/* ============================================================================
 * Icons
 * ========================================================================== */

export const LoadingIcon = Loader2;


/* ============================================================================
 * Size
 * ========================================================================== */
export const FIELD_SIZE_MAP: Record<
    FieldSize,
    string
> = {
    xs: "h-8 text-xs",
    sm: "h-9 text-sm",
    md: "h-10 text-sm",
    lg: "h-11 text-base",
};

/* ============================================================================
 * Radius
 * ========================================================================== */
export const FIELD_RADIUS_MAP: Record<
    FieldRadius,
    string
> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
};

/* ============================================================================
 * Width
 * ========================================================================== */
export const FIELD_WIDTH_MAP: Record<
    FieldWidth,
    string
> = {
    auto: "w-auto",
    full: "w-full",
};

/* ============================================================================
 * Variant
 * ========================================================================== */
export const FIELD_VARIANT_MAP: Record<
    FieldVariant,
    string
> = {
    default: "",
    filled:
        "bg-muted",
    ghost:
        "border-transparent shadow-none",
    underline:
        "border-0 border-b rounded-none shadow-none",
};

/* ============================================================================
 * Hidden Labels
 * ========================================================================== */
export const HIDDEN_LABEL_MAP: Record<
    HiddenBreakpoint,
    string
> = {
    never: "",
    sm: "max-sm:hidden",
    md: "max-md:hidden",
    lg: "max-lg:hidden",
    xl: "max-xl:hidden",
    "2xl":
        "max-2xl:hidden",
};

export function resolveResponsiveLabelPlacement(
    placement?:
        | LabelPlacement
        | ResponsiveLabelPlacement,
): string {

    if (!placement)
        return "";

    if (typeof placement === "string") {
        return "";
    }

    const map = (
        bp: string,
        value?: LabelPlacement,
    ) => {
        if (!value) return "";

        switch (value) {
            case "top":
                return `${bp}:flex-col ${bp}:gap-2!`;
            case "left":
                return `${bp}:flex-row ${bp}:items-start ${bp}:gap-6!`;
            case "hidden":
                return "";
        }
    };

    return [
        map("", placement.base),
        map("sm", placement.sm),
        map("md", placement.md),
        map("lg", placement.lg),
        map("xl", placement.xl),
        map("2xl", placement["2xl"]),
    ]
        .filter(Boolean)
        .join(" ");
}