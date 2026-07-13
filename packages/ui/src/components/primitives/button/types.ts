import * as React from "react";
import { HTMLMotionProps, Variant } from "framer-motion";
import { LucideIcon } from "lucide-react";
import {HiddenBreakpoint} from "../../../types";

export type ButtonVariant =
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "success"
    | "warning"
    | "glass";

export type ButtonSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";

export type ButtonRadius =
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full";

export type ButtonShadow =
    | "none"
    | "sm"
    | "md"
    | "lg";

export type ButtonWidth =
    | "auto"
    | "fit"
    | "full";

export type ButtonLoadingPosition =
    | "leading"
    | "trailing"
    | "replace";

export type ButtonAnimation =
    | "none"
    | "fade"
    | "scale"
    | "pop";

export type ButtonHiddenBreakpoint = HiddenBreakpoint;

export interface ButtonProps
    extends Omit<
        HTMLMotionProps<"button">,
        "animate"
    > {

    children?: React.ReactNode;

    /**
     * Optional.
     *
     * Automatically supplied by
     * Button.Primary,
     * Button.Success,
     * Button.Ghost...
     */
    variant?: ButtonVariant;

    size?: ButtonSize;

    radius?: ButtonRadius;

    shadow?: ButtonShadow;

    width?: ButtonWidth;

    widthValue?: number | string;

    heightValue?: number | string;

    leading?: React.ReactNode;

    trailing?: React.ReactNode;

    icon?: React.ReactNode;

    showDefaultIcon?: boolean;

    hideContent?: ButtonHiddenBreakpoint;

    loading?: boolean;

    loadingText?: React.ReactNode;

    loadingPosition?: ButtonLoadingPosition;

    shortcut?: React.ReactNode;

    badge?: React.ReactNode;

    tooltip?: React.ReactNode;

    tooltipSide?:
        | "top"
        | "bottom"
        | "left"
        | "right";

    animate?: boolean;

    animation?: ButtonAnimation;

    variants?: {
        hidden: Variant;
        visible: Variant;
    };

    center?: boolean;
}

export interface InternalButtonProps
    extends ButtonProps {

    /**
     * Internal variant.
     *
     * Every exported button supplies this.
     */
    defaultVariant?: ButtonVariant;

    defaultIcon?: LucideIcon;
}

export type ButtonComponent =
    React.ForwardRefExoticComponent<
        ButtonProps &
        React.RefAttributes<HTMLButtonElement>
    >;

export interface ButtonNamespace
    extends ButtonComponent {

    Default: ButtonComponent;

    Primary: ButtonComponent;

    Secondary: ButtonComponent;

    Outline: ButtonComponent;

    Ghost: ButtonComponent;

    Link: ButtonComponent;

    Success: ButtonComponent;

    Warning: ButtonComponent;

    Destructive: ButtonComponent;

    Glass: ButtonComponent;
}