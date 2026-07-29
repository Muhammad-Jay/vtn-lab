"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import { DropdownMenuContent } from "../../ui/dropdown-menu";
import { MenuContentProps } from "./types";
import { menuContentWidths } from "./Menu.Utils";

export const MenuContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuContent>,
    MenuContentProps
>(
    (
        {
            className,
            width = "md",
            sideOffset = 6,
            align = "end",
            scroll = false,
            maxHeight = 420,
            children,
            style,
            ...props
        },
        ref
    ) => {
        return (
            <DropdownMenuContent
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                style={{
                    maxHeight,
                    ...style,
                }}
                className={cn(
                    // @ts-ignore
                    menuContentWidths[width],
                    scroll && "overflow-y-auto no-scrollbar! shadow-2",
                    className
                )}
                {...props}
            >
                {children}
            </DropdownMenuContent>
        );
    }
);

MenuContent.displayName = "Menu.Content";