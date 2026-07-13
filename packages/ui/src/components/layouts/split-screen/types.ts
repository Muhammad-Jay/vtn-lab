import { ReactNode } from "react";

export type SplitBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export type SplitVariant =
    | "default"
    | "comfortable"
    | "compact"
    | "flush";

export type ScrollMode =
    | "auto"
    | "hidden"
    | "visible";

export interface SplitRatio {
    default?: [number, number];
    sm?: [number, number];
    md?: [number, number];
    lg?: [number, number];
    xl?: [number, number];
    "2xl"?: [number, number];
}

export interface SplitScreenProps {
    children: ReactNode;

    /**
     * Default desktop ratio.
     *
     * Example:
     *
     * ratio={[3,7]}
     *
     * or
     *
     * ratio={{
     *   default:[1,1],
     *   xl:[3,7]
     * }}
     */
    ratio?: [number, number] | SplitRatio;

    /**
     * Breakpoint where layouts becomes horizontal.
     */
    splitAt?: SplitBreakpoint;

    /**
     * Reverse children order on mobile.
     */
    reverseOnMobile?: boolean;

    /**
     * Layout spacing preset.
     */
    variant?: SplitVariant;

    /**
     * Enable layouts animation.
     */
    animated?: boolean;

    className?: string;
}

export interface SplitSideProps {

    children: ReactNode;

    className?: string;

    loading?: boolean;

    loadingComponent?: ReactNode;

    scroll?: ScrollMode;

    sticky?: boolean;

    minWidth?: string | number;

    maxWidth?: string | number;
}

export interface SplitOverlayProps {

    children: ReactNode;

    className?: string;

    /**
     * Blocks pointer events.
     */
    interactive?: boolean;
}


// Overlay
export interface SplitScreenOverlayProps extends SplitOverlayProps {
    visible?: boolean;

    /**
     * Position inside the SplitScreen.
     */
    position?:
        | "center"
        | "top"
        | "bottom"
        | "left"
        | "right"
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right";

    /**
     * Background blur.
     */
    blur?: boolean;

    /**
     * Background overlay.
     */
    backdrop?: boolean;

    onClick?: () => void | null;
}

// Sides
export interface InternalProps extends SplitSideProps {
    order?: number;
    splitAt?: SplitBreakpoint;
}