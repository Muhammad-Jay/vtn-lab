import * as React from "react";

import { cn } from "../../../lib/utils";

import {
    BackgroundBlur,
    BackgroundGradient,
    BackgroundMode,
} from "./types";

export function resolveMode(
    mode: BackgroundMode
) {
    switch (mode) {
        case "container":
            return "absolute inset-0";

        case "page":
        default:
            return "absolute inset-0";
    }
}

export function resolveBlur(
    blur?: BackgroundBlur
) {
    switch (blur) {
        case "none":
            return "";

        case "xs":
            return "backdrop-blur-xs";

        case "sm":
            return "backdrop-blur-sm";

        case "md":
            return "backdrop-blur-md";

        case "lg":
            return "backdrop-blur-lg";

        case "xl":
            return "backdrop-blur-xl";

        case "2xl":
            return "backdrop-blur-2xl";

        case "3xl":
            return "backdrop-blur-3xl";

        default:
            return "backdrop-blur-xl";
    }
}

export function resolveGradient(
    gradient?: BackgroundGradient
) {
    switch (gradient) {
        case "none":
            return "";

        case "linear":
            return cn(
                "bg-linear-to-b",
                "from-background",
                "via-background",
                "to-background/90"
            );

        case "radial":
        default:
            return "[background-image:radial-gradient(circle_at_top,var(--color-background)_0%,transparent_70%)]";
    }
}

export function createBackgroundStyle(
    opacity = 1,
    zIndex = -10
): React.CSSProperties {
    return {
        opacity,
        zIndex,
    };
}

export function createRippleGridStyle(
    rows: number,
    cols: number,
    cellSize: number
): React.CSSProperties {
    return {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
        marginInline: "auto",
    };
}

export function getRippleTiming(
    clicked:
        | { row: number; col: number }
        | null,
    row: number,
    col: number
) {
    if (!clicked) {
        return {};
    }

    const distance = Math.hypot(
        clicked.row - row,
        clicked.col - col
    );

    return {
        "--delay": `${Math.max(
            0,
            distance * 55
        )}ms`,
        "--duration": `${
            200 + distance * 80
        }ms`,
    } as React.CSSProperties;
}

export function createGridStyle(
    gridSize: number
): React.CSSProperties {
    return {
        backgroundSize: `${gridSize}px ${gridSize}px`,

        backgroundImage: `
            linear-gradient(
                to right,
                hsl(var(--border) / 0.35) 1px,
                transparent 1px
            ),
            linear-gradient(
                to bottom,
                hsl(var(--border) / 0.35) 1px,
                transparent 1px
            )
        `,
    };
}