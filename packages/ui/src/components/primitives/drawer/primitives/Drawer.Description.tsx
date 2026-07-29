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
    DrawerDescriptionProps,
} from "../types";

export const DrawerDescription =
    React.forwardRef<
        HTMLParagraphElement,
        DrawerDescriptionProps
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
            <DrawerPrimitive.Description
                ref={ref}
                {...slotProps?.description}
                {...rest}
                className={cn(
                    styles?.description,
                    slotProps?.description?.className,
                    className,
                )}
            />
        );

    });

DrawerDescription.displayName =
    "Drawer.Description";