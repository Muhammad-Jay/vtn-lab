"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { ContainerProps } from "./types";
import {
    buildContainerClassName,
    buildContainerStyle,
} from "./Container.Utils";

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    (
        {
            children,

            // Design system props
            surface = "none",
            border = "none",
            hoverBorder = "none",
            borderPosition = "all",
            radius = "none",
            elevation = "none",
            padding = "sm",
            gap = "none",
            margin = "none",
            direction = "row",
            align = "stretch",
            justify = "start",
            anchor = "none",
            width,
            height,
            maxWidth,
            maxHeight,
            minWidth,
            minHeight,
            overflow = "visible",
            hideScrollbar = true,
            interaction = "none",
            hidden,

            // Animation configuration properties
            animate = false,
            motionEffect = "none",
            once = true,
            viewportAmount = 0.15,
            motionVariants,

            // Standard styles / HTML properties
            className,
            style,

            // Everything else maps directly to HTMLMotionProps / HTMLAttributes
            ...props
        },
        ref
    ) => {
        // Build styling parameters
        const designParams = {
            surface,
            border,
            hoverBorder,
            borderPosition,
            radius,
            elevation,
            padding,
            gap,
            margin,
            direction,
            align,
            justify,
            anchor,
            width,
            height,
            overflow,
            hideScrollbar,
            interaction,
            hidden,
            motionEffect,
            className,
        };

        const classes = buildContainerClassName(designParams);
        const styles = buildContainerStyle({
            width,
            height,
            minWidth,
            minHeight,
            maxWidth,
            maxHeight,
            style,
        });

        // Non-animated Fallback
        if (!animate || motionEffect === "none") {
            return (
                <div
                    ref={ref}
                    className={classes}
                    style={styles as React.CSSProperties}
                    {...(props as React.HTMLAttributes<HTMLDivElement>)}
                >
                    {children}
                </div>
            );
        }

        // Standard Animated Container
        return (
            <motion.div
                ref={ref}
                className={classes}
                style={styles}
                variants={motionVariants ?? defaultVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, amount: viewportAmount }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Container.displayName = "Container";

export default Container;