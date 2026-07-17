import * as React from "react";
import type { LucideIcon } from "lucide-react";

export type AppBrandSize = "sm" | "md" | "lg" | "xl";

export type AppBrandVariant = "default" | "glass" | "minimal";

export interface AppBrandProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export interface AppBrandLogoProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    icon?: LucideIcon;

    size?: AppBrandSize;

    variant?: AppBrandVariant;
}

export interface AppBrandNameProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;

    size?: AppBrandSize;

    variant?: AppBrandVariant;
}
