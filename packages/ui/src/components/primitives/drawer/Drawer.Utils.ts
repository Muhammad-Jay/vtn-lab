import type { DrawerPlacement, DrawerSize } from "./types";
import type { Responsive } from "../../views/Container/types";

export const DEFAULT_DRAWER_SIZE: DrawerSize = "md";
export const DEFAULT_DRAWER_PLACEMENT: DrawerPlacement = "right";
export const DEFAULT_BACKDROP_BLUR = 12;
export const DEFAULT_ANIMATION_DURATION = 0.30;

export function normalizePlacement(
    placement?: Responsive<DrawerPlacement>,
): Responsive<DrawerPlacement> {
    return placement ?? {
        base: "bottom",
        md: "right",
    };
}

export function normalizeSize(
    size?: Responsive<DrawerSize>,
): Responsive<DrawerSize> {
    return size ?? {
        base: "full",
        md: "lg",
    };
}

// FIX: Map standard placement to Base UI's swipeDirection ("up" | "right" | "down" | "left")
export function placementToDirection(
    placement: DrawerPlacement,
): "left" | "right" | "up" | "down" {
    switch (placement) {
        case "top":
            return "up";
        case "bottom":
            return "down";
        default:
            return placement;
    }
}

export function getDrawerWidth(size: DrawerSize): string {
    switch (size) {
        case "xs": return "20rem";
        case "sm": return "24rem";
        case "md": return "30rem";
        case "lg": return "36rem";
        case "xl": return "42rem";
        case "2xl": return "48rem";
        case "full": return "100%";
    }
}

export function getDrawerHeight(size: DrawerSize): string {
    switch (size) {
        case "xs": return "20rem";
        case "sm": return "24rem";
        case "md": return "30rem";
        case "lg": return "36rem";
        case "xl": return "42rem";
        case "2xl": return "48rem";
        case "full": return "100%";
    }
}