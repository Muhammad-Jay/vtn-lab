"use client";

import * as React from "react";

import { Button as BaseButton } from "./Button";

import {
    ButtonComponent,
    ButtonNamespace,
    ButtonVariant,
} from "./types";

import {
    defaultIcons,
} from "./Button.Utils";

function createButtonVariant(
    variant: ButtonVariant
): ButtonComponent {
    return React.forwardRef<
        HTMLButtonElement,
        any
    >((props, ref) => (
        <BaseButton
            ref={ref}
            defaultVariant={variant}
            defaultIcon={defaultIcons[variant]}
            {...props}
        />
    ));
}

const Button = BaseButton as ButtonNamespace;

Button.Default = createButtonVariant("default");

Button.Primary = createButtonVariant("primary");

Button.Secondary = createButtonVariant("secondary");

Button.Outline = createButtonVariant("outline");

Button.Ghost = createButtonVariant("ghost");

Button.Link = createButtonVariant("link");

Button.Success = createButtonVariant("success");

Button.Warning = createButtonVariant("warning");

Button.Destructive =
    createButtonVariant("destructive");

Button.Glass = createButtonVariant("glass");

export { Button };