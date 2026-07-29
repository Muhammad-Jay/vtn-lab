"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { Container } from "../../../views/Container";
import { useDrawerContext } from "../Drawer.Context";
import { cn } from "../../../../lib/utils";
import {
    DEFAULT_ANIMATION_DURATION,
    getDrawerHeight,
    getDrawerWidth,
    placementToDirection,
} from "../Drawer.Utils";
import type { DrawerContentProps, DrawerPlacement, DrawerSize } from "../types";

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>((props, ref) => {
    const { placement, size, animation, styles, slotProps } = useDrawerContext();
    const { className, children, containerProps, style, ...rest } = props;

    const resolvedPlacement = (placement as any)?.base ?? placement;
    const resolvedSize = (size as any)?.base ?? size;
    const direction = placementToDirection(resolvedPlacement as DrawerPlacement);
    const horizontal = direction === "left" || direction === "right";

    const dimensionStyle = horizontal
        ? { width: getDrawerWidth(resolvedSize as DrawerSize) }
        : { height: getDrawerHeight(resolvedSize as DrawerSize) };

    return (
        <DrawerPrimitive.Popup
            data-slot="drawer-popup"
            ref={ref}
            render={
                <motion.div
                    initial={{ opacity: 0, scale: animation === "scale" ? 0.96 : 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: animation === "scale" ? 0.98 : 1 }}
                    transition={{ duration: DEFAULT_ANIMATION_DURATION }}
                />
            }
            {...rest}
            className={cn(
                // Shadcn Pattern: group/drawer-popup is used to style children based on axis
                "group/drawer-popup fixed z-50 flex flex-col bg-transparent outline-none",
                // Dynamic edge snapping using Base UI's automatic data attributes
                "data-[swipe-direction=down]:inset-x-0 data-[swipe-direction=down]:bottom-0",
                "data-[swipe-direction=up]:inset-x-0 data-[swipe-direction=up]:top-0",
                "data-[swipe-direction=right]:inset-y-0 data-[swipe-direction=right]:right-0",
                "data-[swipe-direction=left]:inset-y-0 data-[swipe-direction=left]:left-0",
                styles?.popup,
                className
            )}
            style={{
                ...dimensionStyle,
                ...style,
                // Removed the manual `transform: translateY(...)`.
                // Let Base UI apply swipe transforms automatically to this element!
            }}
        >
            <Container
                surface="panel-raised"
                border={"none"}
                elevation={"1"}
                gap={"md"}
                padding={"none"}
                overflow="hidden"
                direction={"column"}
                align={"center"}
                justify={"between"}
                width={horizontal ? "full" : undefined}
                height={!horizontal ? "full" : undefined}
                {...slotProps?.popup}
                {...containerProps}
                className={cn(
                    "flex h-full w-full flex-col",
                    // Dynamic Border Radii matching Shadcn conventions
                    "group-data-[swipe-direction=down]/drawer-popup:rounded-t-xl",
                    "group-data-[swipe-direction=up]/drawer-popup:rounded-b-xl",
                    "group-data-[swipe-direction=right]/drawer-popup:rounded-l-xl",
                    "group-data-[swipe-direction=left]/drawer-popup:rounded-r-xl",
                    containerProps?.className
                )}
                style={{
                    ...slotProps?.popup?.style,
                    ...containerProps?.style,
                }}
            >
                {/* Note: DrawerPrimitive.Content DOES NOT exist in Base UI! Render children directly */}
                {children}
            </Container>
        </DrawerPrimitive.Popup>
    );
});

DrawerContent.displayName = "Drawer.Content";