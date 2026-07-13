"use client";

import * as React from "react";

import {
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "../../ui/dropdown-menu";

import { cn } from "../../../lib/utils";
import {
    MenuSubContentProps,
    MenuSubTriggerProps,
} from "./types";

const Sub = DropdownMenuSub;

const Trigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuSubTrigger>,
    MenuSubTriggerProps
>(
    (
        {
            children,
            leading,
            trailing,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <DropdownMenuSubTrigger
                ref={ref}
                className={cn(
                    "group flex cursor-pointer items-center space-x-2! px-2! rounded-md text-sm transition-colors outline-none",
                    className
                )}
                {...props}
            >
                {leading && (
                    <span className="flex size-4 text-sm shrink-0 items-center justify-center">
                        {leading}
                    </span>
                )}

                <span className="flex-1 text-sm truncate">
                    {children}
                </span>

            </DropdownMenuSubTrigger>
        );
    }
);

Trigger.displayName = "Menu.Sub.Trigger";

const Content = React.forwardRef<
    React.ElementRef<typeof DropdownMenuSubContent>,
    MenuSubContentProps
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
            <DropdownMenuSubContent
                ref={ref}
                className={cn(
                    "min-w-56 p-1.5! space-y-2!",
                    className
                )}
                {...props}
            >
                {children}
            </DropdownMenuSubContent>
        );
    }
);

Content.displayName = "Menu.Sub.Content";

export const MenuSub = Object.assign(Sub, {
    Trigger,
    Content,
});