"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

import { ContainerProps } from "./types";
import {
    borderMap,
    defaultTransition,
    gapMap,
    heightMap,
    hiddenMap,
    overflowMap,
    paddingMap,
    radiusMap, resolveAlignCenter,
    resolveAnimation,
    resolveCenter,
    resolveInteractive, resolveJustifyCenter,
    resolveScrollbar,
    shadowMap,
    variantMap,
    widthMap,
} from "./Container.Utils";

export const Container = React.forwardRef<
    HTMLDivElement,
    ContainerProps
>(
    (
        {
            children,

            variant = "default",
            border = "default",

            radius = "lg",
            padding = "md",
            gap = "none",
            shadow = "none",

            overflow = "hidden",
            hideScrollbar = true,

            width = "auto",
            widthValue,

            height = "auto",
            heightValue,

            maxWidth,
            maxHeight,
            minWidth,
            minHeight,

            center = false,
            alignCenter = false,
            justifyCenter = false,
            interactive = false,

            hidden,

            animate = false,
            animation = "fade",
            once = true,
            viewportAmount = 0.15,
            variants,

            className,
            style,

            ...props
        },
        ref
    ) => {
        const resolvedVariants =
            variants ?? resolveAnimation(animation);

        return (
            <motion.div
                ref={ref}
                initial={animate ? "hidden" : false}
                whileInView={animate ? "visible" : undefined}
                viewport={{
                    once,
                    amount: viewportAmount,
                }}
                variants={resolvedVariants}
                transition={defaultTransition}
                className={cn(
                    "relative",
                    "flex flex-col",

                    variantMap[variant],
                    borderMap[border],

                    radiusMap[radius],
                    paddingMap[padding],
                    gapMap[gap],
                    shadowMap[shadow],

                    overflowMap[overflow],
                    resolveScrollbar(hideScrollbar),

                    widthMap[width],
                    heightMap[height],

                    resolveCenter(center),
                    resolveAlignCenter(alignCenter),
                    resolveJustifyCenter(justifyCenter),
                    resolveInteractive(interactive),

                    hidden && hiddenMap[hidden],

                    className
                )}
                style={{
                    width: widthValue,
                    height: heightValue,

                    maxWidth,
                    maxHeight,

                    minWidth,
                    minHeight,

                    ...style,
                }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Container.displayName = "Container";