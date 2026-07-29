"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { cn } from "../../../../lib/utils";
import { useDrawerContext } from "../Drawer.Context";

export const DrawerViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Viewport>
>((props, ref) => {
    const { styles, slotProps } = useDrawerContext();
    const { className, ...rest } = props;

    return (
        <DrawerPrimitive.Viewport
            data-slot="drawer-viewport"
            ref={ref}
            {...(slotProps as any)?.viewport}
            {...rest}
            className={cn(
                // The viewport acts as the container boundary for swipes
                "fixed inset-0 z-50",
                // styles?.viewport,
                (slotProps as any)?.viewport?.className,
                className
            )}
        />
    );
});

DrawerViewport.displayName = "Drawer.Viewport";