"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

import {
    typography,
    textAlignMap,
    textColorMap,
    textWrapMap,
} from "./Text.Utils";

import type { TextProps } from "./types";

export function TextRoot({
                             as,
                             children,
                             className,
                             variant = "body",
                             color,
                             align,
                             wrap = "normal",
                             truncate,
                             italic,
                             underline,
                             uppercase,
                         }: TextProps) {

    const config = typography[variant];

    const Component =
        as ?? config.element;

    return (
        <Component
            className={cn(
                config.className,
                color &&
                textColorMap[color],
                align &&
                textAlignMap[align],
                textWrapMap[wrap],
                truncate &&
                "truncate",
                italic &&
                "italic",
                underline &&
                "underline",
                uppercase &&
                "uppercase",
                className,
            )}
        >
            {children}
        </Component>
    );
}