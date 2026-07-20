"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Button } from "../../../ui/button";
import { InputGroupInput } from "../../../ui/input-group";
import { Field } from "../layout/Field.Root";
import { FieldControl } from "../layout/Field.Control";
import type { FieldInputProps } from "../types";

export const FieldPassword = React.forwardRef<HTMLInputElement, FieldInputProps>((props, ref) => {
    const {
        label, description, helper, required, disabled, invalid, hidelabel, labelplacement, fullwidth,
        loading, controlSize, radius, variant, width, topAdornment, bottomAdornment, startAdornment, endAdornment, styles, slotProps,
        className,
        ...inputProps
    } = props;

    const [visible, setVisible] = React.useState(false);

    return (
        <Field
            label={label} description={description} helper={helper} required={required} disabled={disabled} invalid={invalid} hidelabel={hidelabel} labelplacement={labelplacement} fullwidth={fullwidth}
            loading={loading} controlSize={controlSize} radius={radius} variant={variant}
            // @ts-ignore
            width={width} topAdornment={topAdornment} bottomAdornment={bottomAdornment} startAdornment={startAdornment}
            endAdornment={
                endAdornment ?? (
                    <Button type="button" variant="ghost" size="icon" className="h-7 w-7" onClick={() => setVisible((v) => !v)}>
                        {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </Button>
                )
            }
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
                    type={visible ? "text" : "password"}
                    className={cn(styles?.input, slotProps?.input?.className)}
                    {...slotProps?.input}
                />
            </FieldControl>
        </Field>
    );
});

FieldPassword.displayName = "Field.Password";