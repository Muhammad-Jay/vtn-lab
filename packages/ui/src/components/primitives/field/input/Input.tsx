"use client";

import * as React from "react";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "../../../ui/input-group";

import { FieldRoot } from "../Field.Root";

import { LoadingIcon } from "../Field.Utils";

import type { FieldInputProps } from "../types";
import {cn} from "../../../../lib/utils";

export const FieldInput = React.forwardRef<
    HTMLInputElement,
    FieldInputProps
>(
    (
        {
            topAdornment,
            bottomAdornment,
            startAdornment,
            endAdornment,
            loading,
            className,
            ...props
        },
        ref
    ) => {

        return (
            <FieldRoot {...props}>
                {topAdornment}

                <InputGroup>
                    {/*// @ts-ignore*/}
                    <InputGroupInput
                        ref={ref}
                        className={cn(className)}
                        {...props}
                    />

                    {(startAdornment || loading) && (

                        <InputGroupAddon align="inline-start">
                            {loading ? (
                                <LoadingIcon className="size-4 animate-spin" />
                            ) : (
                                startAdornment
                            )}
                        </InputGroupAddon>
                    )}

                    {endAdornment && (
                        <InputGroupAddon align="inline-end">
                            {endAdornment}
                        </InputGroupAddon>
                    )}

                </InputGroup>

                {bottomAdornment}
            </FieldRoot>
        );
    }
);

FieldInput.displayName = "Field.Input";