import { SplitScreen as SplitScreenRoot } from "./SplitScreen";
import { SplitScreenLeft, SplitScreenRight } from "./SplitScreen.Side";
import { SplitScreenOverlay } from "./SplitScreen.Overlay";

export { DefaultLoadingSkeleton } from "./SplitScreenLoadingSkeleton";

export const SplitScreen = Object.assign(SplitScreenRoot, {
    Left: SplitScreenLeft,
    Right: SplitScreenRight,
    Overlay: SplitScreenOverlay,
});

export type {
    SplitScreenProps,
    SplitVariant,
    SplitScreenOverlayProps,
    SplitSideProps,
    SplitRatio,
    SplitBreakpoint,
    ScrollMode,
} from "./types";