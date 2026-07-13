import * as React from "react";

// Unified design system spacing token scale mapping to Tailwind spacing variables
export type SpacingToken =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "10"
    | "12"
    | "16"
    | "20"
    | "24";

export type StackDirection = "column" | "row";

export type StackAlign =
    | "start"
    | "center"
    | "end"
    | "stretch"
    | "baseline";

export type StackJustify =
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";

export interface StackProps {
    /** Change the underlying rendered HTML component node */
    as?: React.ElementType;

    children?: React.ReactNode;

    /** Layout flow axis direction */
    direction?: StackDirection;
    reverse?: boolean;

    /** Cross-axis element alignment alignment */
    align?: StackAlign;

    /** Main-axis space distribution alignment */
    justify?: StackJustify;

    /** Component grid gap step using unified spacing tokens */
    gap?: SpacingToken;

    /** Multi-line element content wrapping */
    wrap?: boolean;

    /** Force child element flex grow to consume space */
    grow?: boolean;

    /** Width layout extension spanning full boundary container */
    fullWidth?: boolean;
    fullHeight?: boolean;

    /** Inject automated structural border dividers between children elements */
    divider?: boolean;

    /** Uniform target element padding wrapper step using spacing tokens */
    padding?: SpacingToken;

    /** Uniform target element margin layout space step using spacing tokens */
    margin?: SpacingToken;

    className?: string;
}