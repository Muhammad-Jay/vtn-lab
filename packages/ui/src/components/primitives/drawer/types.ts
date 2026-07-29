import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { Responsive, ContainerProps } from "../../views/Container/types";

/* ============================================================================
Shared
========================================================================== */
export type DrawerPlacement = "left" | "right" | "top" | "bottom";
export type DrawerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type DrawerBackdrop = "default" | "transparent" | "none";
export type DrawerAnimation = "default" | "fade" | "slide" | "scale";

// FIX: Omit conflicting React events so they can be safely spread onto Framer Motion components
export type MotionSafeDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart">;

/* ============================================================================
Overlay
========================================================================== */
export interface DrawerOverlayOptions {
    blur?: number;
    interactive?: boolean;
}

/* ============================================================================
Slots
========================================================================== */
export interface DrawerSlots {
    portal?: string;
    overlay?: string;
    popup?: string;
    container?: string;
    content?: string;
    header?: string;
    body?: string;
    footer?: string;
    title?: string;
    description?: string;
    swipeHandle?: string;
    close?: string;
}

/* ============================================================================
Slot Props
========================================================================== */
export interface DrawerSlotProps {
    portal?: React.HTMLAttributes<HTMLDivElement>;
    overlay?: React.HTMLAttributes<HTMLDivElement>;
    popup?: ContainerProps;
    container?: ContainerProps;
    content?: ContainerProps;
    header?: ContainerProps;
    body?: ContainerProps;
    footer?: ContainerProps;
    title?: React.HTMLAttributes<HTMLHeadingElement>;
    description?: React.HTMLAttributes<HTMLParagraphElement>;
    swipeHandle?: MotionSafeDivProps; // <-- Applied safe type here
    close?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

/* ============================================================================
Root
========================================================================== */
// FIX: Omit 'swipeDirection' instead of 'direction'
export interface DrawerRootProps extends Omit<DrawerPrimitive.Root.Props, "swipeDirection"> {
    placement?: Responsive<DrawerPlacement>;
    size?: Responsive<DrawerSize>;
    animation?: DrawerAnimation;
    backdrop?: DrawerBackdrop;
    overlay?: DrawerOverlayOptions;
    styles?: DrawerSlots;
    slotProps?: DrawerSlotProps;
}

/* ============================================================================
Primitive Wrappers
========================================================================== */
export interface DrawerPortalProps extends DrawerPrimitive.Portal.Props {}
export interface DrawerOverlayProps extends DrawerPrimitive.Backdrop.Props {}
export interface DrawerTriggerProps extends DrawerPrimitive.Trigger.Props {}
export interface DrawerCloseProps extends DrawerPrimitive.Close.Props {}
export interface DrawerTitleProps extends DrawerPrimitive.Title.Props {}
export interface DrawerDescriptionProps extends DrawerPrimitive.Description.Props {}
export interface DrawerViewportProps extends DrawerPrimitive.Viewport.Props {}


// FIX: Extended from MotionSafeDivProps to prevent Framer Motion prop clashing
export interface DrawerSwipeHandleProps extends MotionSafeDivProps {}

/* ============================================================================
Content
========================================================================== */
export interface DrawerContentProps extends DrawerPrimitive.Popup.Props {
    containerProps?: ContainerProps;
}

/* ============================================================================
Layout
========================================================================== */
export interface DrawerHeaderProps extends ContainerProps {
    sticky?: boolean;
}

export interface DrawerBodyProps extends ContainerProps {
    scroll?: boolean;
    fill?: boolean;
}

export interface DrawerFooterProps extends ContainerProps {
    sticky?: boolean;
}

/* ============================================================================
Context
========================================================================== */
export interface DrawerContextValue {
    placement: Responsive<DrawerPlacement>;
    size: Responsive<DrawerSize>;
    animation: DrawerAnimation;
    backdrop: DrawerBackdrop;
    overlay: DrawerOverlayOptions;
    styles?: DrawerSlots;
    slotProps?: DrawerSlotProps;
}