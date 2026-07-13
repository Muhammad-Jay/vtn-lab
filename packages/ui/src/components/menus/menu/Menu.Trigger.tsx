"use client";

import * as React from "react";

import { ChevronDown } from "lucide-react";

import { DropdownMenuTrigger } from "../../ui/dropdown-menu";

import { cn } from "../../../lib/utils";
import { MenuTriggerProps } from "./types";

export const MenuTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuTrigger>,
    MenuTriggerProps
>(
    (
        {
            children,
            label,
            icon,
            trailingIcon = true,
            hideLabel = "never",
            className,
            ...props
        },
        ref
    ) => {
        const hideLabelClass =
            hideLabel === "sm"
                ? "hidden sm:inline"
                : hideLabel === "md"
                    ? "hidden md:inline"
                    : hideLabel === "lg"
                        ? "hidden lg:inline"
                        : hideLabel === "xl"
                            ? "hidden xl:inline"
                            : hideLabel === "2xl"
                                ? "hidden 2xl:inline"
                                : "";

        return (
            <DropdownMenuTrigger
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-2 outline-none",
                    className
                )}
                {...props}
            >
                {children ? (
                    children
                ) : (
                    <>
                        {icon && (
                            <span className="flex size-4 items-center justify-center">
                                {icon}
                            </span>
                        )}

                        {label && (
                            <span className={cn(hideLabelClass)}>
                                {label}
                            </span>
                        )}

                        {trailingIcon && (
                            <ChevronDown className="size-4 opacity-70" />
                        )}
                    </>
                )}
            </DropdownMenuTrigger>
        );
    }
);

MenuTrigger.displayName = "Menu.Trigger";