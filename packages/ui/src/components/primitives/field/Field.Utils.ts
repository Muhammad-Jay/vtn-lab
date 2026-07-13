import {

    Info,

    Loader2,

} from "lucide-react";

import {

    FieldRadius,

    FieldSize,

    FieldVariant,

    FieldWidth,

    HiddenBreakpoint,

} from "./types";

export const LoadingIcon = Loader2;

export const InfoIcon = Info;

export const sizeMap: Record<
    FieldSize,
    string
> = {

    xs: "h-8 text-xs",

    sm: "h-9 text-sm",

    md: "h-10 text-sm",

    lg: "h-11 text-base",

};

export const radiusMap: Record<
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

export const widthMap: Record<
    FieldWidth,
    string
> = {

    auto: "w-auto",

    full: "w-full",

};

export const variantMap: Record<
    FieldVariant,
    string
> = {

    default:
        "",

    filled:
        "bg-muted",

    ghost:
        "border-transparent shadow-none",

    underline:
        "border-0 border-b rounded-none shadow-none",

};

export const hiddenLabelMap: Record<
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