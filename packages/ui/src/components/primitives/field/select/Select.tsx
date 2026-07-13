"use client";

import * as React from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../ui/select";

import {
    InputGroup,
    InputGroupAddon,
} from "../../../ui/input-group";

import { FieldRoot } from "../Field.Root";

import type {
    FieldSelectProps,
} from "../types";

export function FieldSelect({
                                options = [],
                                placeholder,
                                topAdornment,
                                bottomAdornment,
                                startAdornment,
                                endAdornment,
                                children,
                                ...props
                            }: FieldSelectProps) {

    return (

        <FieldRoot {...props}>

            {topAdornment}

            <InputGroup>

                <Select
                    value={props.value}
                    defaultValue={
                        props.defaultValue
                    }
                    onValueChange={
                        props.onValueChange
                    }
                    disabled={
                        props.disabled
                    }
                >

                    <SelectTrigger className={'w-full! ml-0.5! bg-transparent rounded-md hover:bg-transparent border-none'}>

                        <SelectValue
                            placeholder={
                                props?.value ?? placeholder
                            }
                        />

                    </SelectTrigger>

                    {startAdornment && (
                        <InputGroupAddon align="inline-start">
                            {startAdornment}
                        </InputGroupAddon>
                    )}

                    {endAdornment && (
                        <InputGroupAddon align="inline-end">
                            {endAdornment}
                        </InputGroupAddon>
                    )}
                    <SelectContent alignItemWithTrigger={false} className={"h-fit!"}>
                        {children ??
                            options.map(
                                (
                                    option
                                ) => (
                                    <SelectItem
                                        key={
                                            option.value
                                        }
                                        value={
                                            option.value
                                        }
                                        disabled={
                                            option.disabled
                                        }
                                    >
                                        {option.leading}
                                        {
                                            option.label
                                        }
                                    </SelectItem>
                                )
                            )}

                    </SelectContent>
                </Select>

            </InputGroup>

            {bottomAdornment}

        </FieldRoot>

    );

}