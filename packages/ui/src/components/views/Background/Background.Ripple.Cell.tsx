"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

export interface BackgroundRippleCellProps
    extends React.HTMLAttributes<HTMLDivElement> {
    opacity: number;

    style?: React.CSSProperties;

    interactive?: boolean;

    onActivate?: () => void;
}

export const BackgroundRippleCell = React.memo(
    ({
        opacity,
        style,
        interactive = false,
        onActivate,
        className,
        ...props
    }: BackgroundRippleCellProps) => {
        return (
            <div
                style={{
                    opacity,
                    background:
                        "var(--background-ripple-fill)",

                    borderColor:
                        "var(--background-ripple-border)",

                    ...style,
                }}
                className={cn(
                    "relative border-[0.5px]",

                    "transition-opacity duration-150",

                    "dark:shadow-[0_0_40px_1px_var(--background-ripple-shadow)_inset]",

                    interactive &&
                        "cursor-pointer hover:opacity-80",

                    style &&
                        "animate-cell-ripple",

                    className
                )}
                onClick={
                    interactive
                        ? onActivate
                        : undefined
                }
                {...props}
            />
        );
    }
);

BackgroundRippleCell.displayName =
    "Background.Ripple.Cell";