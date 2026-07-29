"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { cn } from "../../../../lib/utils";
import { useDrawerContext } from "../Drawer.Context";
import { DEFAULT_ANIMATION_DURATION, DEFAULT_BACKDROP_BLUR } from "../Drawer.Utils";
import type { DrawerOverlayProps } from "../types";

export const DrawerOverlay = React.forwardRef<HTMLDivElement, DrawerOverlayProps>((props, ref) => {
    const { styles, slotProps, backdrop, overlay } = useDrawerContext();
    const { className, style, ...rest } = props;

    const blur = overlay.blur ?? DEFAULT_BACKDROP_BLUR;

    return (
        <DrawerPrimitive.Backdrop
            ref={ref}
            render={
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: DEFAULT_ANIMATION_DURATION }}
                />
            }
            {...slotProps?.overlay}
            {...rest}
            style={{
                backdropFilter: backdrop === "none" ? undefined : `blur(${blur}px)`,
                WebkitBackdropFilter: backdrop === "none" ? undefined : `blur(${blur}px)`,
                pointerEvents: overlay.interactive ? "none" : undefined,
                ...slotProps?.overlay?.style,
                ...style,
            }}
            className={cn(
                "fixed inset-0 z-50",
                styles?.overlay,
                backdrop === "transparent" && "bg-transparent",
                backdrop === "default" && "bg-black/80",
                backdrop === "none" && "bg-transparent",
                slotProps?.overlay?.className,
                className,
            )}
        />
    );
});

DrawerOverlay.displayName = "Drawer.Overlay";