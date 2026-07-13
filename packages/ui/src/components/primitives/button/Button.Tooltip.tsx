"use client";

import * as React from "react";

import {
    Tooltip,
    TooltipContent, TooltipProvider,
    TooltipTrigger,
} from "../../ui/tooltip";

interface ButtonTooltipProps {

    tooltip?: React.ReactNode;

    side?:
        | "top"
        | "bottom"
        | "left"
        | "right";

    children: React.ReactElement;
}

export function ButtonTooltip({
                                  tooltip,
                                  side = "top",
                                  children,
                              }: ButtonTooltipProps) {

    if (!tooltip) {
        return children;
    }

    return (
        <Tooltip>
            <TooltipTrigger render={children}/>

            <TooltipContent className={'p-2!'} side={side}>
                {tooltip}
            </TooltipContent>
        </Tooltip>
    );
}

export const ButtonTooltipProvider = TooltipProvider;
