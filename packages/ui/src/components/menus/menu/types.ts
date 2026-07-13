import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export type MenuVariant =
    | "default"
    | "destructive"
    | "success"
    | "warning";

export interface MenuRootProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu> {
    children?: React.ReactNode;
}

export interface MenuContentProps
    extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuContent>, "children"> {
    children?: React.ReactNode;
    /**
     * Width preset.
     */
    width?:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "auto";
    /**
     * Enable internal scrolling.
     */
    scroll?: boolean;
    /**
     * Max height before scrolling.
     */
    maxHeight?: number | string;
}

export interface MenuTriggerProps
    extends React.ComponentProps<typeof DropdownMenuTrigger> {
    /**
     * Optional trigger label.
     */
    label?: React.ReactNode;
    /**
     * Leading icon.
     */
    icon?: React.ReactNode;
    /**
     * Shows the chevron.
     *
     * @default true
     */
    trailingIcon?: boolean;
    /**
     * Hide the label below a breakpoint.
     *
     * @default "never"
     */
    hideLabel?: "never" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export interface MenuItemProps
    extends Omit<
        React.ComponentPropsWithoutRef<typeof DropdownMenuItem>,
        "children" | "variant"
    > {
    children?: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    shortcut?: React.ReactNode;
    variant?: MenuVariant;
}

export interface MenuCheckboxItemProps
    extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItem>, "children"> {
    children?: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
}

export interface MenuRadioGroupProps
    extends React.ComponentPropsWithoutRef<typeof DropdownMenuRadioGroup> {
    children?: React.ReactNode;
}

export interface MenuRadioItemProps
    extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuRadioItem>, "children"> {
    children?: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
}

export interface MenuSubTriggerProps
    extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuSubTrigger>, "children"> {
    children?: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
}

export interface MenuSubContentProps
    extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuSubContent>, "children"> {
    children?: React.ReactNode;
}

export interface MenuLabelProps
    extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuLabel>, "children"> {
    children?: React.ReactNode;
}

export interface MenuSeparatorProps
    extends React.ComponentPropsWithoutRef<typeof DropdownMenuSeparator> {}