"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {cn} from "../../../lib/utils";
import { DefaultLoadingSkeleton } from "./SplitScreenLoadingSkeleton";
import { InternalProps } from "./types";

const breakpointReset = {
    sm: "sm:order-none",
    md: "md:order-none",
    lg: "lg:order-none",
    xl: "xl:order-none",
    "2xl": "2xl:order-none",
};

const Side = React.forwardRef<HTMLDivElement, InternalProps>(
    (
        {
            children,
            className,
            loading = false,
            loadingComponent,
            scroll = "auto",
            sticky = false,
            minWidth,
            maxWidth,
            order = 1,
            splitAt = "lg",
        },
        ref
    ) => {
        return (
            <motion.section
                ref={ref}
                layout
                style={{
                    minWidth,
                    maxWidth,
                }}
                className={cn(
                    "relative min-w-0 h-full",
                    order === 1 ? "order-1" : "order-2",
                    breakpointReset[splitAt],
                    sticky && "sticky top-0 self-start",
                    scroll === "auto" && "overflow-auto no-scrollbar",
                    scroll === "hidden" && "overflow-hidden no-scrollbar",
                    scroll === "visible" && "overflow-visible no-scrollbar",
                    className
                )}
            >
                <AnimatePresence mode="wait">
                    {loading && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.2,
                            }}
                            className="
                                absolute
                                inset-0
                                z-20
                                flex
                                items-center
                                justify-center
                                rounded-inherit
                                bg-background/70
                                backdrop-blur-sm
                            "
                        >
                            {loadingComponent ?? (
                                <DefaultLoadingSkeleton />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    layout
                    initial={{
                        opacity: 0,
                        y: 6,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    className="h-full"
                >
                    {children}
                </motion.div>
            </motion.section>
        );
    }
);

Side.displayName = "SplitScreenSide";

export const SplitScreenLeft = Side;

export const SplitScreenRight = Side;