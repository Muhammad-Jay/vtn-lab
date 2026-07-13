"use client";

import * as React from "react";
import {
    DropdownMenuItem,
    DropdownMenuShortcut,
} from "../../ui/dropdown-menu";

import { cn } from "../../../lib/utils";
import { MenuItemProps } from "./types";
import { resolveVariant } from "./Menu.Utils";

export const MenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuItem>,
    MenuItemProps
>(
    (
        {
            children,
            leading,
            trailing,
            shortcut,
            variant,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <DropdownMenuItem
                ref={ref}
                className={cn(
                    resolveVariant(variant),
                    className
                )}
                {...props}
            >
                {leading && (
                    <span className="flex px-1! text-sm size-4 m-auto! shrink-0 items-center justify-center">
                        {leading}
                    </span>
                )}

                {(children || trailing || shortcut) && (
                    <>
                        <span className="flex-1 text-sm truncate">
                            {children}
                        </span>

                        {trailing}

                        {shortcut && (
                            <DropdownMenuShortcut>
                                {shortcut}
                            </DropdownMenuShortcut>
                        )}
                    </>
                )}
            </DropdownMenuItem>
        );
    }
);

MenuItem.displayName = "Menu.Item";