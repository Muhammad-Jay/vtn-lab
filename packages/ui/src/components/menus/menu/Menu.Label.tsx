"use client";

import * as React from "react";

import {
    DropdownMenuLabel,
} from "../../ui/dropdown-menu";

import { cn } from "../../../lib/utils";
import { MenuLabelProps } from "./types";

export const MenuLabel = React.forwardRef<
    React.ElementRef<typeof DropdownMenuLabel>,
    MenuLabelProps
>(
    (
        {
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <DropdownMenuLabel
                ref={ref}
                className={cn(
                    "px-2.5! py-2! text-sm font-semibold uppercase tracking-wide text-muted-foreground",
                    className
                )}
                {...props}
            >
                {children}
            </DropdownMenuLabel>
        );
    }
);

MenuLabel.displayName = "Menu.Label";