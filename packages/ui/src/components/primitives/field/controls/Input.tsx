"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";
import { InputGroupInput } from "../../../ui/input-group";
import { Field } from "../layout/Field.Root";
import { FieldControl } from "../layout/Field.Control";
import type { FieldInputProps } from "../types";

export const FieldInput = React.forwardRef<HTMLInputElement, FieldInputProps>((props, ref) => {
    const {
        label, description, helper, required, disabled, invalid, hidelabel, labelplacement, fullwidth,
        loading, controlSize, radius, variant, width, topAdornment, bottomAdornment, startAdornment, endAdornment, styles, slotProps,
        className,
        ...inputProps
    } = props;

    return (
        <Field
            label={label}
            description={description}
            helper={helper}
            required={required}
            disabled={disabled}
            invalid={invalid}
            hidelabel={hidelabel}
            labelplacement={labelplacement}
            fullwidth={fullwidth}
            loading={loading}
            controlSize={controlSize}
            radius={radius}
            variant={variant}
            // @ts-ignore
            width={width}
            topAdornment={topAdornment}
            bottomAdornment={bottomAdornment}
            startAdornment={startAdornment}
            endAdornment={endAdornment}
            styles={styles}
            slotProps={slotProps}
            className={className}
        >
            <FieldControl>
                <InputGroupInput
                    ref={ref}
                    disabled={disabled}
                    required={required}
                    {...inputProps}
                    className={cn(styles?.input, slotProps?.input?.className)}
                    {...slotProps?.input}
                />
            </FieldControl>
        </Field>
    );
});

FieldInput.displayName = "Field.Input";