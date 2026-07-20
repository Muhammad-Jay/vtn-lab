"use client";

import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { Field } from "../layout/Field.Root";
import { FieldControl } from "../layout/Field.Control";
import type { FieldSelectProps } from "../types";
import { cn } from "../../../../lib/utils";

export function FieldSelect<T = string>(props: FieldSelectProps<T>) {
    const {
        label, description, helper, required, disabled, invalid, hidelabel, labelplacement, fullwidth,
        loading, controlSize, radius, variant, width, topAdornment, bottomAdornment, startAdornment, endAdornment, styles, slotProps,
        className,
        options = [], placeholder = "Select...", value, defaultValue, onValueChange, children,
    } = props;

    return (
        <Field
            label={label} description={description} helper={helper} required={required} disabled={disabled} invalid={invalid} hidelabel={hidelabel} labelplacement={labelplacement} fullwidth={fullwidth}
            loading={loading} controlSize={controlSize} radius={radius} variant={variant} width={width} topAdornment={topAdornment} bottomAdornment={bottomAdornment} startAdornment={startAdornment} endAdornment={endAdornment}
            styles={styles}
            slotProps={slotProps}
            className={className}
        >
            <FieldControl>
                <Select
                    disabled={disabled}
                    value={value == null ? undefined : String(value)}
                    defaultValue={defaultValue == null ? undefined : String(defaultValue)}
                    onValueChange={(val, details) => onValueChange?.(val as T, details)}
                >
                    <SelectTrigger
                        {...slotProps?.select}
                        className={cn('w-full border-none', styles?.select, slotProps?.select?.className)}
                    >
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>

                    <SelectContent>
                        {children ??
                            options.map((option) => (
                                <SelectItem key={String(option.value)} value={String(option.value)} disabled={option.disabled}>
                                    <div className="flex items-center gap-2">
                                        {option.leading}
                                        {option.label}
                                    </div>
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
            </FieldControl>
        </Field>
    );
}