"use client";

import * as React from "react";

import {
    Drawer as DrawerPrimitive,
} from "@base-ui/react/drawer";

import { cn } from "../../../../lib/utils";

import {
    useDrawerContext,
} from "../Drawer.Context";

import type {
    DrawerPortalProps,
} from "../types";

export const DrawerPortal = React.forwardRef<
    HTMLDivElement,
    DrawerPortalProps
>((props, ref) => {

    const {
        styles,
        slotProps,
    } = useDrawerContext();
    const {
        className,
        ...rest
    } = props;

    return (
        <DrawerPrimitive.Portal
            data-slot="drawer-portal"
            ref={ref}
            {...slotProps?.portal}
            {...rest}
            className={cn(
                styles?.portal,
                slotProps?.portal?.className,
                className,
            )}
        />
    );
});

DrawerPortal.displayName =
    "Drawer.Portal";