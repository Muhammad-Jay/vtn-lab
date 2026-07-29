"use client";

import * as React from "react";

import {
    Drawer as DrawerPrimitive,
} from "@base-ui/react/drawer";

import {
    useDrawerContext,
} from "../Drawer.Context";

import {
    cn,
} from "../../../../lib/utils";

import type {
    DrawerCloseProps,
} from "../types";
import {X} from "lucide-react";

import { Button } from "../../button";

export const DrawerClose =
    React.forwardRef<
        HTMLButtonElement,
        DrawerCloseProps
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
            <DrawerPrimitive.Close
                data-slot="drawer-close"
                ref={ref}
                {...slotProps?.close}
                {...rest}
                // render={
                // <Button.Ghost
                //     size={"md"}
                //     icon={<X/>}
                // />
                // }
                className={cn(
                    styles?.close,
                    slotProps?.close?.className,
                    className,
                )}
            />
        );

    });

DrawerClose.displayName =
    "Drawer.Close";