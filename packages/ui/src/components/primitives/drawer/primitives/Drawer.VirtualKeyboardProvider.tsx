"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

export const DrawerVirtualKeyboardProvider = ({
                                                  children,
                                              }: {
    children: React.ReactNode;
}) => {
    return (
        <DrawerPrimitive.VirtualKeyboardProvider>
            {children}
        </DrawerPrimitive.VirtualKeyboardProvider>
    );
};

DrawerVirtualKeyboardProvider.displayName = "Drawer.VirtualKeyboardProvider";