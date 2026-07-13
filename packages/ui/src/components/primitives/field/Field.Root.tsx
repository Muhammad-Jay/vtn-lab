"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

import { FieldHelper } from "./Field.Helper";
import { FieldLabel } from "./Field.Label";

import type { FieldRootProps } from "./types";

export function FieldRoot({
                              children,
                              label,
                              description,
                              helper,
                              required,
                              hideLabel = "never",
                              labelPlacement = "top",
                              fullWidth = true,
                              className,
                          }: FieldRootProps) {

    const isHidden =
        labelPlacement === "hidden";

    return (
        <div
            className={cn(
                "flex",
                fullWidth && "w-full",
                labelPlacement === "left"
                    ? "items-start space-x-6!"
                    : "flex-col space-y-2!",
                className,
            )}
        >
            {!isHidden && (
                <div
                    className={cn(
                        labelPlacement === "left"
                            ? "w-48 shrink-0 pt-2!"
                            : "w-full",
                    )}
                >
                    <FieldLabel
                        label={label}
                        description={description}
                        required={required}
                        hideLabel={hideLabel}
                    />
                </div>
            )}

            <div
                className="flex min-w-0 flex-1 flex-col space-x-2! space-y-2!"
            >
                {children}
                <FieldHelper>
                    {helper}
                </FieldHelper>
            </div>
        </div>
    );
}