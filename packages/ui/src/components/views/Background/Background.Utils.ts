import * as React from "react";

import {
    BackgroundBlur,
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
            return "fixed inset-0";
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

export function createBackgroundStyle(
    opacity = 1,
    zIndex = 0,
    style?: React.CSSProperties
): React.CSSProperties {
    return {
        opacity,
        zIndex,
        ...style,
    };
}

export function createGridStyle(
    gridSize: number
): React.CSSProperties {
    return {
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundImage: `linear-gradient(to right, color-mix(in oklch, var(--border) 58%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 58%, transparent) 1px, transparent 1px)`,
    };
}
