"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import { splitVariants } from "./variants";
import { SplitScreenProps, SplitRatio } from "./types";

function resolveRatio(

    ratio: SplitScreenProps["ratio"]

): [number, number] {
    if (!ratio) return [1, 1];

    if (Array.isArray(ratio))
        return ratio;

    const responsive = ratio as SplitRatio;

    return (
        responsive.default ??
        responsive["2xl"] ??
        responsive.xl ??
        responsive.lg ??
        responsive.md ??
        responsive.sm ??
        [1, 1]
    );
}

export const SplitScreen = React.forwardRef<HTMLDivElement, SplitScreenProps>(
    (
        {
            children,
            ratio,
            splitAt = "lg",
            reverseOnMobile = false,
            variant = "default",
            animated = true,
            className,
        },
        ref
    ) => {
        const [left, right] = resolveRatio(ratio);
        const responsiveGrid = {
            sm: "sm:[grid-template-columns:var(--left)_var(--right)]",
            md: "md:[grid-template-columns:var(--left)_var(--right)]",
            lg: "lg:[grid-template-columns:var(--left)_var(--right)]",
            xl: "xl:[grid-template-columns:var(--left)_var(--right)]",
            "2xl":
                "2xl:[grid-template-columns:var(--left)_var(--right)]",
        };

        return (
            <motion.div
                ref={ref}
                layout={animated}
                style={
                    {
                        "--left": `${left}fr`,
                        "--right": `${right}fr`,
                    } as React.CSSProperties
                }
                className={cn(
                    splitVariants({
                        variant,
                    }),
                    "grid-cols-1",
                    responsiveGrid[splitAt],
                    animated &&
                    "transition-[grid-template-columns,gap,padding] duration-500 ease-out",
                    className
                )}
            >
                {React.Children.map(children, (child, index) => {

                    if (!React.isValidElement(child))
                        return child;
                    return React.cloneElement(child as React.ReactElement<any>, {
                        order:
                            reverseOnMobile
                                ? index === 0
                                    ? 2
                                    : 1
                                : index + 1,
                        splitAt,
                    });
                })}
            </motion.div>
        );
    }
);

SplitScreen.displayName = "SplitScreen";