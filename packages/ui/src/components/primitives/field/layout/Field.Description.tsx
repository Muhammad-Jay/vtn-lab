"use client";

import * as React from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../../../ui/tooltip";

import { Button } from "../../button";

import { InfoIcon } from "lucide-react";

import { cn } from "../../../../lib/utils";

import { useFieldContext } from "../Field.Context";

export function FieldDescription() {

    const {
        description,
        closeDescription,
        styles,
        slotProps,
    } = useFieldContext();

    if (!description || closeDescription) {
        return null;
    }

    return (
        <Tooltip>
            <TooltipTrigger
                render={
                    <Button.Ghost
                        size="icon-xs"
                        className={cn(
                            "bg-transparent border-none hover:bg-transparent",
                            styles?.description,
                            slotProps?.description?.className
                        )}
                    >
                        <InfoIcon className="size-3.5 text-primary" />
                    </Button.Ghost>
                }
            />

            <TooltipContent>
                {description}
            </TooltipContent>
        </Tooltip>
    );
}