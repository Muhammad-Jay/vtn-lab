"use client";

import * as React from "react";

import { motion } from "framer-motion";

import { cn } from "../../../lib/utils";

import { Button as ShadcnButton } from "../../ui/button";

import { ButtonTooltip } from "./Button.Tooltip";

import {
    InternalButtonProps,
} from "./types";

import {
    buttonVariantMap,
    buttonSizeMap,
    radiusMap,
    shadowMap,
    widthMap,
    hiddenContentMap,
    LoadingSpinner,
    resolveAnimation,
    defaultTransition,
} from "./Button.Utils";

const MotionButton =
    motion.create(ShadcnButton);

const Button = React.forwardRef<
    HTMLButtonElement,
    InternalButtonProps
>(
    (
        {
            children,

            defaultVariant,

            defaultIcon,

            variant,

            size = "md",

            radius = "lg",

            shadow = "none",

            width = "auto",

            widthValue,

            heightValue,

            leading,

            trailing,

            icon,

            showDefaultIcon = false,

            hideContent = "never",

            loading = false,

            loadingText,

            loadingPosition = "leading",

            shortcut,

            badge,

            tooltip,

            tooltipSide = "top",

            animate = false,

            animation = "fade",

            variants,

            center = false,

            className,

            style,

            disabled,

            ...props
        },
        ref
    ) => {

        const resolvedVariant =
            variant ?? defaultVariant ?? "default";

        const Icon = defaultIcon;

        const button = (
            <MotionButton
                ref={ref}
                disabled={
                    disabled || loading
                }
                initial={
                    animate
                        ? "hidden"
                        : false
                }
                animate={
                    animate
                        ? "visible"
                        : undefined
                }
                variants={
                    variants ??
                    resolveAnimation(animation)
                }
                transition={
                    defaultTransition
                }
                className={cn('px-2! transition-colors duration-200',
                    buttonVariantMap[
                        resolvedVariant
                        ],

                    buttonSizeMap[size],

                    radiusMap[radius],

                    shadowMap[shadow],

                    widthMap[width],

                    center && "mx-auto",

                    className
                )}
                style={{
                    width: widthValue,
                    height: heightValue,
                    ...style,
                }}
                {...props}
            >

                {/* icon-only */}

                {icon}

                {/* loading */}

                {loading &&
                    loadingPosition ===
                    "leading" && (
                        <LoadingSpinner className="animate-spin" />
                    )}

                {/* leading */}

                {!loading &&
                    !icon &&
                    leading}

                {/* default icon */}

                {!loading &&
                    !icon &&
                    !leading &&
                    showDefaultIcon &&
                    Icon && (
                        <Icon />
                    )}

                {/* content */}

                {loading &&
                loadingPosition ===
                "replace" ? (
                    <>
                        <LoadingSpinner className="animate-spin" />

                        {loadingText}
                    </>
                ) : (
                    <>
                        <span
                            className={cn(
                                hiddenContentMap[
                                    hideContent
                                    ]
                            )}
                        >
                            {loading
                                ? loadingText ??
                                children
                                : children}
                        </span>

                        {badge}

                        {shortcut}
                    </>
                )}

                {/* trailing */}

                {!loading &&
                    trailing}

                {/* trailing loading */}

                {loading &&
                    loadingPosition ===
                    "trailing" && (
                        <LoadingSpinner className="animate-spin" />
                    )}

            </MotionButton>
        );

        return (
            <ButtonTooltip
                tooltip={tooltip}
                side={tooltipSide}
            >
                {button}
            </ButtonTooltip>
        );
    }
);

Button.displayName = "Button";

export { Button };