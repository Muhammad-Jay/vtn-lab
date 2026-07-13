"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

import {
    Label,
} from "../../ui/label";

import {
    hiddenLabelMap,
} from "./Field.Utils";

import type {
    FieldLayoutProps,
} from "./types";
import {FieldDescription} from "./Field.Description";

interface FieldLabelProps
    extends Pick<
        FieldLayoutProps,
        | "label"
        | "description"
        | "required"
        | "hideLabel"
    > {}

export function FieldLabel({
                               label,
                               description,
                               required,
                               hideLabel = "never",
                           }: FieldLabelProps) {

    if (!label) {
        return null;
    }

    return (
        <div
            className={cn(
                "flex items-center space-x-2!",
                hiddenLabelMap[
                    hideLabel
                    ]
            )}
        >
            <Label>
                {label}
                {required && (
                    <span className="ml-1! text-destructive">
                        *
                    </span>
                )}
            </Label>

            {description && (
                <FieldDescription>
                    {description}
                </FieldDescription>
            )}
        </div>
    );
}