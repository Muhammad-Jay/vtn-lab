import { DialogAnimation, DialogBlur, DialogSize } from "./types";
import { ContainerProps } from "../../views";

export const DIALOG_SIZE_PRESETS: Record<DialogSize, Partial<ContainerProps>> = {
    xs: { width: 420 },
    sm: { width: 520 },
    md: { width: 640 },
    lg: { width: 800 },
    xl: { width: 1024 },
    full: { width: "screen", height: "screen", radius: "none" },
};

export const DIALOG_BLUR_MAP: Record<Exclude<DialogBlur, boolean>, string> = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
};

export function getBlurClass(blur?: DialogBlur): string {
    if (!blur) return "";
    if (blur === true) return "backdrop-blur";

    return DIALOG_BLUR_MAP[blur];
}

export const DIALOG_ANIMATION_CLASS_MAP: Record<DialogAnimation, string> = {
    none: "",
    fade: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    scale: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
    "slide-up": "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-bottom-6 data-[state=closed]:slide-out-to-bottom-6",
    "slide-down": "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-top-6 data-[state=closed]:slide-out-to-top-6",
};

export function getAnimationClass(animation: DialogAnimation = "scale"): string {
    return DIALOG_ANIMATION_CLASS_MAP[animation];
}
