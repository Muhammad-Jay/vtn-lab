import * as React from "react";

import { HTMLMotionProps } from "framer-motion";
import {SelectRootChangeEventDetails} from "@base-ui/react";

export type FieldSize =
    | "xs"
    | "sm"
    | "md"
    | "lg";

export type FieldRadius =
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "full";

export type FieldVariant =
    | "default"
    | "filled"
    | "ghost"
    | "underline";

export type FieldWidth =
    | "auto"
    | "full";

export type HiddenBreakpoint =
    | "never"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";

export type LabelPlacement =
    | "top"
    | "left"
    | "hidden";

export interface FieldLayoutProps {

    label?: React.ReactNode;

    description?: React.ReactNode;

    helper?: React.ReactNode;

    required?: boolean;

    hideLabel?: HiddenBreakpoint;

    labelPlacement?: LabelPlacement;

    fullWidth?: boolean;

    className?: string;

}

export interface FieldControlProps {

    loading?: boolean;

    size?: FieldSize;

    radius?: FieldRadius;

    variant?: FieldVariant;

    width?: FieldWidth;

    topAdornment?: React.ReactNode;
    bottomAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;

}

export interface FieldRootProps
    extends FieldLayoutProps {

    children: React.ReactNode;

}

// @ts-ignore
export interface FieldInputProps
    extends Omit<
        HTMLMotionProps<"input">,
        "size"
    >,
        FieldLayoutProps,
        FieldControlProps {}

export interface FieldTextAreaProps
    extends HTMLMotionProps<"textarea">,
        FieldLayoutProps,
        FieldControlProps {}

export interface SelectOption {

    label: React.ReactNode;

    value: string;

    disabled?: boolean;

    leading?: React.ReactNode;

}

export interface FieldSelectProps
    extends FieldLayoutProps,
        FieldControlProps {

    value?: string | null;

    defaultValue?: string;

    placeholder?: string;

    options?: SelectOption[];

    children?: React.ReactNode;

    disabled?: boolean;

    onValueChange?(
        value: string | null,
        eventDetails: SelectRootChangeEventDetails
    ): void;

}