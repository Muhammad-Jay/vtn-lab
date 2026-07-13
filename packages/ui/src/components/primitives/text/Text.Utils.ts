import type {
    TextAlign,
    TextColor,
    TextVariant,
    TextWrap,
} from "./types";

export const typography: Record<
    TextVariant,
    {
        element: React.ElementType;
        className: string;
    }
> = {

    display: {
        element: "h1",
        className:
            "text-5xl font-bold tracking-tight text-foreground",
    },

    h1: {
        element: "h1",
        className:
            "text-4xl font-extrabold tracking-tight text-foreground",
    },

    h2: {
        element: "h2",
        className:
            "text-3xl font-semibold tracking-tight text-foreground",
    },

    h3: {
        element: "h3",
        className:
            "text-2xl font-semibold tracking-tight text-foreground",
    },

    h4: {
        element: "h4",
        className:
            "text-xl font-semibold tracking-tight text-foreground",
    },

    h5: {
        element: "h5",
        className:
            "text-lg font-semibold tracking-tight text-foreground",
    },

    h6: {
        element: "h6",
        className:
            "text-md font-semibold text-foreground",
    },

    title: {
        element: "h2",
        className:
            "text-3xl font-semibold tracking-tight text-foreground",
    },

    subtitle: {
        element: "p",
        className:
            "text-base leading-7 text-muted-foreground",
    },

    lead: {
        element: "p",
        className:
            "text-xl text-muted-foreground",
    },

    body: {
        element: "p",
        className:
            "text-base leading-7 text-foreground",
    },

    small: {
        element: "small",
        className:
            "text-sm text-foreground",
    },

    caption: {
        element: "span",
        className:
            "text-xs text-muted-foreground",
    },

    overline: {
        element: "span",
        className:
            "text-xs uppercase tracking-widest text-muted-foreground",
    },

    label: {
        element: "label",
        className:
            "text-sm font-medium text-foreground",
    },

    link: {
        element: "a",
        className:
            "text-primary underline-offset-4 hover:underline",
    },

    code: {
        element: "code",
        className:
            "relative rounded bg-muted px-1 py-0.5 font-mono font-semibold text-sm",
    },

    quote: {
        element: "blockquote",
        className:
            "border-l-2 pl-4 italic text-muted-foreground",
    },

    muted: {
        element: "p",
        className:
            "text-sm text-muted-foreground",
    },

    error: {
        element: "p",
        className:
            "text-sm text-destructive",
    },

};

export const textColorMap: Record<
    TextColor,
    string
> = {

    foreground: "text-foreground",

    muted: "text-muted-foreground",

    primary: "text-primary",

    secondary: "text-secondary",

    accent: "text-accent",

    destructive: "text-destructive",

    success: "text-success",

    warning: "text-warning",

    info: "text-info",

    inherit: "text-inherit",

    current: "text-current",

};

export const textAlignMap: Record<
    TextAlign,
    string
> = {

    left: "text-left",

    center: "text-center",

    right: "text-right",

    justify: "text-justify",

};

export const textWrapMap: Record<
    TextWrap,
    string
> = {

    normal: "text-wrap",

    nowrap: "whitespace-nowrap",

    balance: "text-balance",

    pretty: "text-pretty",

};