import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { ContainerProps } from "../../views";

export type DialogSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export type DialogBlur = false | true | "sm" | "md" | "lg";

export type DialogAnimation = "none" | "fade" | "scale" | "slide-up" | "slide-down";

export interface DialogProps extends Omit<RadixDialog.DialogProps, "children"> {
    children?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    size?: DialogSize;
    animation?: DialogAnimation;
    blur?: DialogBlur;
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    containerProps?: Partial<ContainerProps>;
    overlayProps?: React.HTMLAttributes<HTMLDivElement>;
    overlayStyle?: React.CSSProperties;
    overlayClassName?: string;
}

export interface DialogTriggerProps extends RadixDialog.DialogTriggerProps {}

// Compound components act only as semantic markers
export interface DialogContentProps {
    children?: React.ReactNode;
}

export interface DialogHeaderProps {
    children?: React.ReactNode;
}

export interface DialogFooterProps {
    children?: React.ReactNode;
}

export interface DialogContextValue {
    open: boolean;
    onOpenChange(open: boolean): void;
    close(): void;
    size: DialogSize;
    animation: DialogAnimation;
    blur: DialogBlur;
    showCloseButton: boolean;
    closeOnEscape: boolean;
    closeOnOverlayClick: boolean;
    containerProps?: Partial<ContainerProps>;
}