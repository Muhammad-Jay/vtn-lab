"use client";

import * as React from "react";

import { Container } from "../../../views/Container";

import {
    cn,
} from "../../../../lib/utils";

import {
    useDrawerContext,
} from "../Drawer.Context";

import type {
    DrawerHeaderProps,
} from "../types";

export const DrawerHeader = React.forwardRef<
    HTMLDivElement,
    DrawerHeaderProps
>((props, ref) => {
    const {
        sticky = true,
        className,
        children,
        ...rest
    } = props;

    const {
        styles,
        slotProps,
    } = useDrawerContext();

    return (
        <Container
            ref={ref}
            surface="surface-5"
            elevation={"0"}
            padding="lg"
            border="none"
            radius={"lg"}
            position={
                sticky
                    ? "sticky"
                    : "relative"
            }
            style={{
                top: 10,
                x: 10,
                width: "97%",
                zIndex: 10,
            }}
            {...slotProps?.header}
            {...rest}
            className={cn(
                styles?.header,
                slotProps?.header?.className,
                className
            )}
        >
            {children}
        </Container>
    );
});

DrawerHeader.displayName =
    "Drawer.Header";