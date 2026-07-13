import { GridBreakpoint, GridColumnScale, SpacingScale } from "./types";

export const gapMap: Record<SpacingScale, string> = {
    0: "gap-0!", 1: "gap-1!", 2: "gap-2!", 3: "gap-3!", 4: "gap-4!",
    5: "gap-5!", 6: "gap-6!", 8: "gap-8!", 10: "gap-10!", 12: "gap-12!",
    16: "gap-16!", 20: "gap-20!", 24: "gap-24!",
};

export const paddingMap: Record<SpacingScale, string> = {
    0: "p-0!", 1: "p-1!", 2: "p-2!", 3: "p-3!", 4: "p-4!",
    5: "p-5!", 6: "p-6!", 8: "p-8!", 10: "p-10!", 12: "p-12!",
    16: "p-16!", 20: "p-20!", 24: "p-24!",
};

export const alignMap = {
    start: "self-start",
    center: "self-center",
    end: "self-end",
    stretch: "self-stretch",
} as const;

export const gridColsMap: Record<GridBreakpoint, Record<GridColumnScale, string>> = {
    base: { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8", 9: "grid-cols-9", 10: "grid-cols-10", 11: "grid-cols-11", 12: "grid-cols-12" },
    sm: { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4", 5: "sm:grid-cols-5", 6: "sm:grid-cols-6", 7: "sm:grid-cols-7", 8: "sm:grid-cols-8", 9: "sm:grid-cols-9", 10: "sm:grid-cols-10", 11: "sm:grid-cols-11", 12: "sm:grid-cols-12" },
    md: { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5", 6: "md:grid-cols-6", 7: "md:grid-cols-7", 8: "md:grid-cols-8", 9: "md:grid-cols-9", 10: "md:grid-cols-10", 11: "md:grid-cols-11", 12: "md:grid-cols-12" },
    lg: { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6", 7: "lg:grid-cols-7", 8: "lg:grid-cols-8", 9: "lg:grid-cols-9", 10: "lg:grid-cols-10", 11: "lg:grid-cols-11", 12: "lg:grid-cols-12" },
    xl: { 1: "xl:grid-cols-1", 2: "xl:grid-cols-2", 3: "xl:grid-cols-3", 4: "xl:grid-cols-4", 5: "xl:grid-cols-5", 6: "xl:grid-cols-6", 7: "xl:grid-cols-7", 8: "xl:grid-cols-8", 9: "xl:grid-cols-9", 10: "xl:grid-cols-10", 11: "xl:grid-cols-11", 12: "xl:grid-cols-12" },
    "2xl": { 1: "2xl:grid-cols-1", 2: "2xl:grid-cols-2", 3: "2xl:grid-cols-3", 4: "2xl:grid-cols-4", 5: "2xl:grid-cols-5", 6: "2xl:grid-cols-6", 7: "2xl:grid-cols-7", 8: "2xl:grid-cols-8", 9: "2xl:grid-cols-9", 10: "2xl:grid-cols-10", 11: "2xl:grid-cols-11", 12: "2xl:grid-cols-12" },
};

export const colSpanMap: Record<GridBreakpoint, Record<GridColumnScale | "full", string>> = {
    base: { 1: "col-span-1", 2: "col-span-2", 3: "col-span-3", 4: "col-span-4", 5: "col-span-5", 6: "col-span-6", 7: "col-span-7", 8: "col-span-8", 9: "col-span-9", 10: "col-span-10", 11: "col-span-11", 12: "col-span-12", "full": "col-span-full" },
    sm: { 1: "sm:col-span-1", 2: "sm:col-span-2", 3: "sm:col-span-3", 4: "sm:col-span-4", 5: "sm:col-span-5", 6: "sm:col-span-6", 7: "sm:col-span-7", 8: "sm:col-span-8", 9: "sm:col-span-9", 10: "sm:col-span-10", 11: "sm:col-span-11", 12: "sm:col-span-12", "full": "sm:col-span-full" },
    md: { 1: "md:col-span-1", 2: "md:col-span-2", 3: "md:col-span-3", 4: "md:col-span-4", 5: "md:col-span-5", 6: "md:col-span-6", 7: "md:col-span-7", 8: "md:col-span-8", 9: "md:col-span-9", 10: "md:col-span-10", 11: "md:col-span-11", 12: "md:col-span-12", "full": "md:col-span-full" },
    lg: { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3", 4: "lg:col-span-4", 5: "lg:col-span-5", 6: "lg:col-span-6", 7: "lg:col-span-7", 8: "lg:col-span-8", 9: "lg:col-span-9", 10: "lg:col-span-10", 11: "lg:col-span-11", 12: "lg:col-span-12", "full": "lg:col-span-full" },
    xl: { 1: "xl:col-span-1", 2: "xl:col-span-2", 3: "xl:col-span-3", 4: "xl:col-span-4", 5: "xl:col-span-5", 6: "xl:col-span-6", 7: "xl:col-span-7", 8: "xl:col-span-8", 9: "xl:col-span-9", 10: "xl:col-span-10", 11: "xl:col-span-11", 12: "xl:col-span-12", "full": "xl:col-span-full" },
    "2xl": { 1: "2xl:col-span-1", 2: "2xl:col-span-2", 3: "2xl:col-span-3", 4: "2xl:col-span-4", 5: "2xl:col-span-5", 6: "2xl:col-span-6", 7: "2xl:col-span-7", 8: "2xl:col-span-8", 9: "2xl:col-span-9", 10: "2xl:col-span-10", 11: "2xl:col-span-11", 12: "2xl:col-span-12", "full": "2xl:col-span-full" },
};