import {
    StackAlign,
    StackDirection,
    StackJustify,
    SpacingToken,
} from "./types";

export const directionMap: Record<StackDirection, string> = {
    column: "flex-col",
    row: "flex-row",
};

export const alignMap: Record<StackAlign, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
};

export const justifyMap: Record<StackJustify, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
};

// Central spacing token lookups across all structural property engines
export const gapMap: Record<SpacingToken, string> = {
    "0": "gap-0! space-x-1! space-y-1!",
    "1": "gap-1! space-x-1! space-y-1!",
    "2": "gap-2! space-x-2! space-y-2!",
    "3": "gap-3! space-x-3! space-y-3!",
    "4": "gap-4! space-x-4! space-y-4!",
    "5": "gap-5! space-x-5! space-y-5!",
    "6": "gap-6! space-x-6! space-y-6!",
    "8": "gap-8! space-x-8! space-y-8!",
    "10": "gap-10! space-x-10! space-y-10!",
    "12": "gap-12! space-x-12! space-y-1!2",
    "16": "gap-16! space-x-16! space-y-16!",
    "20": "gap-20! space-x-20! space-y-20!",
    "24": "gap-24! space-x-24! space-y-24!",
};

export const paddingMap: Record<SpacingToken, string> = {
    "0": "p-0!",
    "1": "p-1!",
    "2": "p-2!",
    "3": "p-3!",
    "4": "p-4!",
    "5": "p-5!",
    "6": "p-6!",
    "8": "p-8",
    "10": "p-10!",
    "12": "p-12!",
    "16": "p-16!",
    "20": "p-20!",
    "24": "p-24!",
};

export const marginMap: Record<SpacingToken, string> = {
    "0": "m-0!",
    "1": "m-1!",
    "2": "m-2!",
    "3": "m-3!",
    "4": "m-4!",
    "5": "m-5!",
    "6": "m-6!",
    "8": "m-8",
    "10": "m-10!",
    "12": "m-12!",
    "16": "m-16!",
    "20": "m-20!",
    "24": "m-24!",
};

// Safe divider runtime styling lookups avoiding nested container double margins
export const dividerMap: Record<StackDirection, string> = {
    column: "divide-y! divide-border",
    row: "divide-x! divide-border",
};