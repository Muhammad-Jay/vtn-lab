"use client";

import * as React from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../../ui/tooltip";

import { Button } from "../button";

import { InfoIcon } from "./Field.Utils";

interface FieldDescriptionProps {
    children?: React.ReactNode;
}

export function FieldDescription({
                                     children,
                                 }: FieldDescriptionProps) {

    if (!children) {
        return null;
    }

    return (
        <Tooltip>
            <TooltipTrigger
                render={
                    <Button.Ghost
                        size="icon-xs"
                        className={'bg-transparent! border-none! hover:bg-transparent!'}
                        aria-label="Field description"
                    >
                        <InfoIcon className="size-3.5 text-foreground" />
                    </Button.Ghost>
                }
            />
            <TooltipContent>
                {children}
            </TooltipContent>
        </Tooltip>
    );
}