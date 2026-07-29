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
    DrawerBodyProps,
} from "../types";

export const DrawerBody = React.forwardRef<
    HTMLDivElement,
    DrawerBodyProps
>((props, ref) => {
    const {
        scroll = true,
        fill = true,
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
            padding="lg"
            surface="surface-5"
            elevation={"0"}
            border="none"
            radius={"lg"}
            direction={"column"}
            width={"full"}
            anchor={"center"}
            overflow={
                scroll
                    ? {
                        y: "auto",
                    }
                    : undefined
            }
            hideScrollbar
            style={{
                flex: fill ? 1 : undefined,
            }}
            {...slotProps?.body}
            {...rest}
            className={cn(
                styles?.body,
                slotProps?.body?.className,
                className
            )}
        >
            {children}
        </Container>
    );
});

DrawerBody.displayName =
    "Drawer.Body";