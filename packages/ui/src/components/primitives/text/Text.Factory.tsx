import * as React from "react";

import { TextRoot } from "./Text.Root";
import { typography } from "./Text.Utils";

import type {
    TextProps,
    TextVariant,
} from "./types";

type PascalCase<S extends string> =
    S extends `${infer F}${infer R}`
        ? `${Uppercase<F>}${R}`
        : S;

type TextNamespace = {
    [K in TextVariant as PascalCase<K>]:
    React.FC<TextProps>;
};

function createVariant(
    variant: TextVariant,
) {

    const Component = (
        props: TextProps,
    ) => (
        <TextRoot
            {...props}
    variant={variant}
    />
);
    Component.displayName =
        `Text.${variant}`;

    return Component;
}

export function createTextNamespace(): TextNamespace {
    return Object.keys(
        typography,
    ).reduce(
        (
            namespace,
            key,
        ) => {

            const variant =
                key as TextVariant;

            const name =
                (
                    variant.charAt(0)
                        .toUpperCase() +
                    variant.slice(1)
                ) as keyof TextNamespace;

            namespace[name] =
                createVariant(
                    variant,
                );

            return namespace;
        },
        {} as TextNamespace,
    );
}