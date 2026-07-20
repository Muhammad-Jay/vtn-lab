import * as React from "react";
import { HTMLMotionProps } from "framer-motion";
import { SelectRootChangeEventDetails } from "@base-ui/react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import {Button} from "../button/Button";

/* ============================================================================
 * Shared Enums
 * ========================================================================== */

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

export interface ResponsiveLabelPlacement {

    base?: LabelPlacement;

    sm?: LabelPlacement;

    md?: LabelPlacement;

    lg?: LabelPlacement;

    xl?: LabelPlacement;

    "2xl"?: LabelPlacement;

}

/* ============================================================================
 * Slot Class Names
 * ========================================================================== */

export interface FieldSlots {

    root?: string;

    label?: string;

    description?: string;

    helper?: string;

    control?: string;

    input?: string;

    textarea?: string;

    select?: string;

    startAdornment?: string;

    endAdornment?: string;

    topAdornment?: string;

    bottomAdornment?: string;

}

/* ============================================================================
 * Slot Props
 * ========================================================================== */

export interface FieldSlotProps {

    root?: React.HTMLAttributes<HTMLDivElement>;

    label?: React.HTMLAttributes<HTMLDivElement>;

    description?: React.ComponentPropsWithoutRef<typeof Button>;

    helper?: React.HTMLAttributes<HTMLParagraphElement>;

    control?: React.HTMLAttributes<HTMLDivElement>;

    input?: React.InputHTMLAttributes<HTMLInputElement>;

    textarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;

    select?: SelectPrimitive.Trigger.Props;

    startAdornment?: React.HTMLAttributes<HTMLDivElement>;

    endAdornment?: React.HTMLAttributes<HTMLDivElement>;

    topAdornment?: React.HTMLAttributes<HTMLDivElement>;

    bottomAdornment?: React.HTMLAttributes<HTMLDivElement>;

}

/* ============================================================================
 * Layout Props
 * ========================================================================== */

export interface FieldLayoutProps {

    label?: React.ReactNode;

    description?: React.ReactNode;

    helper?: React.ReactNode;

    required?: boolean;

    disabled?: boolean;

    invalid?: boolean;

    hidelabel?: HiddenBreakpoint;

    labelplacement?: | LabelPlacement | ResponsiveLabelPlacement;

    fullwidth?: boolean;

}

/* ============================================================================
 * Shared Control Props
 * ========================================================================== */

export interface FieldControlProps {

    loading?: boolean;

    controlSize?: FieldSize;

    radius?: FieldRadius;

    variant?: FieldVariant;

    width?: FieldWidth;

    topAdornment?: React.ReactNode;

    bottomAdornment?: React.ReactNode;

    startAdornment?: React.ReactNode;

    endAdornment?: React.ReactNode;

    className?: string;

    styles?: FieldSlots;

    slotProps?: FieldSlotProps;

}

/* ============================================================================
 * Root
 * ========================================================================== */

export interface FieldProps
    extends FieldLayoutProps,
        FieldControlProps {

    children: React.ReactNode;

}

/* ============================================================================
 * Base Props
 * ========================================================================== */

export interface BaseFieldProps
    extends FieldLayoutProps,
        FieldControlProps {}

/* ============================================================================
 * Input
 * ========================================================================== */

// @ts-ignore
export interface FieldInputProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "size"
    >,
        BaseFieldProps {}

/* ============================================================================
 * TextArea
 * ========================================================================== */

export interface FieldTextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        BaseFieldProps {}

/* ============================================================================
 * Select
 * ========================================================================== */

export interface SelectOption<T = string> {

    value: T;

    label: React.ReactNode;

    disabled?: boolean;

    leading?: React.ReactNode;

}

export interface FieldSelectProps<T = string>
    extends BaseFieldProps {

    value?: T | null;

    defaultValue?: T;

    placeholder?: string;

    disabled?: boolean;

    options?: SelectOption<T>[];

    children?: React.ReactNode;

    onValueChange?(
        value: T | null,
        details: SelectRootChangeEventDetails,
    ): void;

}

/* ============================================================================
 * Context
 * ========================================================================== */

export interface FieldContextValue
    extends FieldLayoutProps,
        FieldControlProps {

    closeDescription?: boolean;

}

/* ============================================================================
 * Namespace
 * ========================================================================== */

export interface FieldNamespace {

    Input: React.ComponentType<FieldInputProps>;

    Password: React.ComponentType<FieldInputProps>;

    TextArea: React.ComponentType<FieldTextAreaProps>;

    Select: <T = string>(
        props: FieldSelectProps<T>
    ) => React.ReactElement;

    Checkbox: React.ComponentType<any>;

    Switch: React.ComponentType<any>;

    RadioGroup: React.ComponentType<any>;

    OTP: React.ComponentType<any>;

    Combobox: React.ComponentType<any>;

    DatePicker: React.ComponentType<any>;

    File: React.ComponentType<any>;

}