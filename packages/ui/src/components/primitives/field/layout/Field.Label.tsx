"use client";

import * as React from "react";

import { cn } from "../../../../lib/utils";
import { Label } from "../../../ui/label"
import { HIDDEN_LABEL_MAP } from "../Field.Utils";
import { useFieldContext } from "../Field.Context";
import { FieldDescription } from "./Field.Description";

export function FieldLabel() {

    const {
        label,
        required,
        hidelabel = "never",
    } = useFieldContext();

    if (!label) {
        return null;
    }

    return (
        <div
            className={cn(
                "flex items-center gap-2",
                HIDDEN_LABEL_MAP[hidelabel],
            )}
        >
            <Label>
                {label}
                {required && (
                    <span className="ml-1.5 text-destructive">
                        *
                    </span>
                )}
            </Label>

            <FieldDescription />
        </div>
    );
}