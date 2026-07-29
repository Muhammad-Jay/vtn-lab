"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { cn } from "../../../../lib/utils";

export const DrawerSwipeArea = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.SwipeArea>
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <DrawerPrimitive.SwipeArea
            ref={ref}
            className={cn("absolute inset-x-0 bottom-0 h-4 md:hidden", className)}
            {...rest}
        />
    );
});

DrawerSwipeArea.displayName = "Drawer.SwipeArea";