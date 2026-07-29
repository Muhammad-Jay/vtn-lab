"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";
import { useDrawerContext } from "../Drawer.Context";
import type { DrawerSwipeHandleProps } from "../types";

export const DrawerSwipeHandle = React.forwardRef<HTMLDivElement, DrawerSwipeHandleProps>((props, ref) => {
    const { styles, slotProps } = useDrawerContext();
    const { className, children, ...rest } = props;

    return (
        <motion.div
            data-slot="drawer-swipe-handle"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...slotProps?.swipeHandle}
            {...rest}
            className={cn(
                "rounded-full bg-muted",
                // Horizontal handle for up/down drawers
                "group-data-[swipe-axis=y]/drawer-popup:mx-auto group-data-[swipe-axis=y]/drawer-popup:mt-2 group-data-[swipe-axis=y]/drawer-popup:h-1.5 group-data-[swipe-axis=y]/drawer-popup:w-12",
                // Vertical handle for left/right drawers
                "group-data-[swipe-axis=x]/drawer-popup:my-auto group-data-[swipe-axis=x]/drawer-popup:ml-2 group-data-[swipe-axis=x]/drawer-popup:h-12 group-data-[swipe-axis=x]/drawer-popup:w-1.5",
                styles?.swipeHandle,
                slotProps?.swipeHandle?.className,
                className,
            )}
        >
            {children}
        </motion.div>
    );
});

DrawerSwipeHandle.displayName = "Drawer.SwipeHandle";