import { cva } from "class-variance-authority";
import { MenuVariant, MenuContentProps } from "./types";

export const menuContentWidths: Record<
    NonNullable<MenuContentProps["width"]>,
    string
> = {
    xs: "min-w-44",
    sm: "min-w-52",
    md: "min-w-64",
    lg: "min-w-72",
    xl: "min-w-80",
    auto: "min-w-fit",
};

export const menuItemVariants = cva(
    [
        "group",
        "relative",
        "flex",
        "w-full",
        "cursor-pointer",
        "select-none",
        "items-center",
        "gap-3",
        "rounded-md",
        "px-2!",
        "py-0.5!",
        "text-sm",
        "outline-none",
        "transition-all",
        "duration-150",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-40",
    ].join(" "),
    {
        variants: {
            variant: {
                default:
                    "text-foreground focus:bg-accent focus:text-accent-foreground",

                destructive:
                    "text-red-500 focus:bg-red-500/30 focus:text-red-500",

                success:
                    "text-emerald-500 focus:bg-emerald-500/10 focus:text-emerald-500",

                warning:
                    "text-amber-500 focus:bg-amber-500/10 focus:text-amber-500",
            },
        },

        defaultVariants: {
            variant: "default",
        },
    }
);

export function resolveVariant(
    variant?: MenuVariant
) {
    return menuItemVariants({
        variant,
    });
}