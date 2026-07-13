"use client";

import * as React from "react";

import {
    InputGroup,
    InputGroupTextarea,
} from "../../../ui/input-group";

import { FieldRoot } from "../Field.Root";

import type {
    FieldTextAreaProps,
} from "../types";

export const FieldTextArea =
    React.forwardRef<
        HTMLTextAreaElement,
        FieldTextAreaProps
    >(
        (
            {
                topAdornment,
                bottomAdornment,
                className,
                ...props
            },
            ref
        ) => (

            <FieldRoot {...props}>

                {topAdornment}

                <InputGroup>
                    {/*// @ts-ignore*/}
                    <InputGroupTextarea
                        ref={ref}
                        className={className}
                        {...props}
                    />

                </InputGroup>

                {bottomAdornment}

            </FieldRoot>

        )
    );

FieldTextArea.displayName =
    "Field.TextArea";