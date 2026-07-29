"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { DrawerProvider } from "../Drawer.Context";
import { normalizePlacement, normalizeSize, placementToDirection } from "../Drawer.Utils";
import type { DrawerRootProps, DrawerPlacement } from "../types";

export const DrawerRoot = ({
                               children,
                               placement,
                               size,
                               animation = "fade",
                               backdrop = "default",
                               overlay = {},
                               styles,
                               slotProps,
                               ...props
                           }: DrawerRootProps) => {

    const normalizedPlacement = normalizePlacement(placement);
    const resolvedPlacement = (normalizedPlacement as any)?.base ?? normalizedPlacement;

    // This now returns "up" | "down" | "left" | "right" safely
    const direction = placementToDirection(resolvedPlacement as DrawerPlacement);

    const value = React.useMemo(
        () => ({
            placement: normalizedPlacement,
            size: normalizeSize(size),
            animation,
            backdrop,
            overlay,
            styles,
            slotProps,
        }),
        [normalizedPlacement, size, animation, backdrop, overlay, styles, slotProps]
    );

    return (
        <DrawerProvider value={value}>
            <DrawerPrimitive.Root
                data-slot="drawer"
                {...props}
                swipeDirection={direction}
                modal={!overlay.interactive}
            >
                {children}
            </DrawerPrimitive.Root>
        </DrawerProvider>
    );
};

DrawerRoot.displayName = "Drawer.Root";