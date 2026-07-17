"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "../../../index";
import { Stack } from "../../../layouts";

import type {
    AppBrandProps,
    AppBrandLogoProps,
    AppBrandNameProps,
} from "./types";

const logoContainerVariants = cva(
    "inline-flex items-center justify-center shrink-0",
    {
        variants: {
            variant: {
                default:
                    "rounded-lg bg-card text-foreground border border-border",
                glass: "rounded-xl bg-card/50 backdrop-blur-xl border border-border/50 text-foreground",
                minimal: "rounded-lg bg-transparent text-foreground",
            },
            size: {
                sm: "size-8",
                md: "size-10",
                lg: "size-12",
                xl: "size-14",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    },
);

const nameVariants = cva(
    "font-bold tracking-tight text-foreground",
    {
        variants: {
            variant: {
                default: "text-foreground",
                glass: "text-foreground",
                minimal: "text-foreground",
            },
            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
                xl: "text-xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    },
);

const iconSizes: Record<string, number> = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
};

function AppBrandRoot({ children, className, ...props }: AppBrandProps) {
    return (
        <Stack
            direction="row"
            align="center"
            gap="3"
            className={className}
            {...props}
        >
            {children}
        </Stack>
    );
}

function AppBrandLogo({
    icon: Icon,
    size = "md",
    variant = "default",
    className,
    ...props
}: AppBrandLogoProps) {
    const LogoIcon = Icon ?? Sparkles;

    return (
        <div
            className={cn(logoContainerVariants({ variant, size }), className)}
            {...props}
        >
            <LogoIcon size={iconSizes[size]} />
        </div>
    );
}

function AppBrandName({
    children,
    size = "md",
    variant = "default",
    className,
    ...props
}: AppBrandNameProps) {
    return (
        <span
            className={cn(nameVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </span>
    );
}

export const AppBrand = Object.assign(AppBrandRoot, {
    Logo: AppBrandLogo,
    Name: AppBrandName,
});
