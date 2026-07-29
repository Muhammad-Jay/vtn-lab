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
    DrawerFooterProps,
} from "../types";

export const DrawerFooter = React.forwardRef<
    HTMLDivElement,
    DrawerFooterProps
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
                bottom: 10,
                x: 10,
                width: "98%",
                zIndex: 10,
            }}
            {...slotProps?.footer}
            {...rest}
            className={cn(
                styles?.footer,
                slotProps?.footer?.className,
                className
            )}
        >
            {children}
        </Container>
    );
});

DrawerFooter.displayName =
    "Drawer.Footer";