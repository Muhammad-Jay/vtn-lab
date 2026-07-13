"use client";

import * as React from "react";

import {

    Eye,

    EyeOff,

} from "lucide-react";

import { Button } from "../../button";

import { FieldInput } from "./Input";

import type {

    FieldInputProps,

} from "../types";

export const PasswordField =
    React.forwardRef<
        HTMLInputElement,
        FieldInputProps
    >((
        props,
        ref,
    ) => {

        const [
            visible,
            setVisible,
        ] =
            React.useState(false);

        return (

            <FieldInput
                {...props}
                ref={ref}
                type={
                    visible
                        ? "text"
                        : "password"
                }

                topAdornment={props.topAdornment}
                bottomAdornment={props.bottomAdornment}
                startAdornment={props.startAdornment}
                endAdornment={(

                    <Button.Ghost
                        className={'bg-transparent! border-none! hover:bg-transparent!'}
                        size="icon-xs"
                        onClick={() =>
                            setVisible(
                                !visible
                            )
                        }
                    >
                        {visible
                            ? (
                                <EyeOff className="size-4 text-foreground" />
                            )
                            : (
                                <Eye className="size-4 text-foreground" />
                            )}
                    </Button.Ghost>

                )}
            />

        );

    });

PasswordField.displayName =
    "Field.Password";