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
    DrawerTitleProps,
} from "../types";

export const DrawerTitle =
    React.forwardRef<
        HTMLHeadingElement,
        DrawerTitleProps
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
            <DrawerPrimitive.Title
                ref={ref}
                {...slotProps?.title}
                {...rest}
                className={cn(
                    styles?.title,
                    slotProps?.title?.className,
                    className,
                )}
            />
        );

    });

DrawerTitle.displayName =
    "Drawer.Title";