"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";
import { Textarea } from "../../../ui/textarea";
import { Field } from "../layout/Field.Root";
import type { FieldTextAreaProps } from "../types";

export const FieldTextArea = React.forwardRef<HTMLTextAreaElement, FieldTextAreaProps>((props, ref) => {
    const {
        label, description, helper, required, disabled, invalid, hidelabel, labelplacement, fullwidth,
        loading, controlSize, radius, variant, width, topAdornment, bottomAdornment, startAdornment, endAdornment, styles, slotProps,
        className,
        ...textareaProps
    } = props;

    return (
        <Field
            label={label} description={description} helper={helper} required={required} disabled={disabled} invalid={invalid} hidelabel={hidelabel} labelplacement={labelplacement} fullwidth={fullwidth}
            loading={loading} controlSize={controlSize} radius={radius} variant={variant} width={width} topAdornment={topAdornment} bottomAdornment={bottomAdornment} startAdornment={startAdornment} endAdornment={endAdornment}
            styles={styles}
            slotProps={slotProps}
            className={className}
        >
            <Textarea
                ref={ref}
                disabled={disabled}
                required={required}
                {...textareaProps}
                className={cn(styles?.textarea, slotProps?.textarea?.className)}
                {...slotProps?.textarea}
            />
        </Field>
    );
});

FieldTextArea.displayName = "Field.TextArea";