"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../lib/utils";
import { SplitScreenOverlayProps } from "./types";

const positionClasses = {
    center: "items-center justify-center",
    top: "items-start justify-center pt-6",
    bottom: "items-end justify-center pb-6",
    left: "items-center justify-start pl-6",
    right: "items-center justify-end pr-6",
    "top-left": "items-start justify-start p-6",
    "top-right": "items-start justify-end p-6",
    "bottom-left": "items-end justify-start p-6",
    "bottom-right": "items-end justify-end p-6",
} as const;

export function SplitScreenOverlay({
                                       children,
                                       className,
                                       interactive = false,
                                       visible = true,
                                       position = "center",
                                       blur = false,
                                       backdrop = false,
                                       onClick = () => null,
                                   }: SplitScreenOverlayProps) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "absolute inset-0 z-40 flex",
                        positionClasses[position],
                        !interactive && "pointer-events-none",
                        interactive && "pointer-events-auto",
                        blur && "backdrop-blur-sm",
                        backdrop && "bg-background/40",
                        className
                    )}
                    onClick={onClick} // This handles clicking on the blur background
                >
                    <motion.div
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

SplitScreenOverlay.displayName = "SplitScreen.Overlay";