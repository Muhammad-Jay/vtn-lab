import * as React from "react";

export type TextVariant =
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "title"
    | "subtitle"
    | "lead"
    | "body"
    | "small"
    | "caption"
    | "overline"
    | "label"
    | "link"
    | "code"
    | "quote"
    | "muted"
    | "error";

export type TextColor =
    | "foreground"
    | "muted"
    | "primary"
    | "secondary"
    | "accent"
    | "destructive"
    | "success"
    | "warning"
    | "info"
    | "inherit"
    | "current";

export type TextAlign =
    | "left"
    | "center"
    | "right"
    | "justify";

export type TextWrap =
    | "normal"
    | "nowrap"
    | "balance"
    | "pretty";

export interface TextProps {

    as?: React.ElementType;

    children?: React.ReactNode;

    className?: string;

    variant?: TextVariant;

    color?: TextColor;

    align?: TextAlign;

    wrap?: TextWrap;

    truncate?: boolean;

    italic?: boolean;

    underline?: boolean;

    uppercase?: boolean;

}