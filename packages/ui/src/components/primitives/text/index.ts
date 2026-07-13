import { createTextNamespace } from "./Text.Factory";

export const Text =
    createTextNamespace();

export type {
    TextVariant,
    TextColor,
    TextAlign,
    TextWrap,
} from "./types";