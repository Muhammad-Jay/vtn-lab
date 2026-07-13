"use client";

import * as React from "react";

import {
    DropdownMenuSeparator,
} from "../../ui/dropdown-menu";

import { cn } from "../../../lib/utils";

export const MenuSeparator = React.forwardRef<
    React.ElementRef<typeof DropdownMenuSeparator>,
    { className?: string }
>(
    ({ className, ...props }, ref) => {
        return (
            <DropdownMenuSeparator
                ref={ref}
                className={cn(
                    "my-1!",
                    className
                )}
                {...props}
            />
        );
    }
);

MenuSeparator.displayName = "Menu.Separator";