"use client";

import * as React from "react";

import {
    Drawer as DrawerPrimitive,
} from "@base-ui/react/drawer";

import type {
    DrawerTriggerProps,
} from "../types";

export const DrawerTrigger =
    React.forwardRef<
        HTMLButtonElement,
        DrawerTriggerProps
    >((props, ref) => {

        return (
            <DrawerPrimitive.Trigger
                data-slot="drawer-trigger"
                ref={ref}
                {...props}
            />
        );
    });

DrawerTrigger.displayName = "Drawer.Trigger";