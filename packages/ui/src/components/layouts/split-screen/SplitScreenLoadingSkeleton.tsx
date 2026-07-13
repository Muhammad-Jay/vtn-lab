"use client";

import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export type SplitScreenSkeletonVariant =
    | "page"
    | "cards"
    | "table"
    | "form"
    | "sidebar";

interface Props {
    variant?: SplitScreenSkeletonVariant;
    className?: string;
}

const Pulse = ({ className }: { className?: string }) => (
    <div
        className={cn(
            "animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800",
            className
        )}
    />
);

function PageSkeleton() {
    return (
        <div className="space-y-6">
            <Pulse className="h-8 w-52" />

            <Pulse className="h-44 w-full rounded-2xl" />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <Pulse className="h-40" />
                <Pulse className="h-40" />
                <Pulse className="h-40" />
            </div>

            <Pulse className="h-64 w-full rounded-2xl" />
        </div>
    );
}

function CardSkeleton() {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="space-y-4 rounded-2xl border border-border p-5"
                >
                    <Pulse className="h-5 w-36" />
                    <Pulse className="h-3 w-24" />
                    <Pulse className="h-24 w-full" />
                    <Pulse className="h-9 w-28" />
                </div>
            ))}
        </div>
    );
}

function TableSkeleton() {
    return (
        <div className="space-y-3">
            <Pulse className="h-10 w-full rounded-xl" />

            {Array.from({ length: 8 }).map((_, i) => (
                <Pulse
                    key={i}
                    className="h-12 w-full rounded-xl"
                />
            ))}
        </div>
    );
}

function FormSkeleton() {
    return (
        <div className="space-y-6">
            <Pulse className="h-7 w-48" />

            {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="space-y-2"
                >
                    <Pulse className="h-4 w-28" />
                    <Pulse className="h-11 w-full rounded-xl" />
                </div>
            ))}

            <Pulse className="h-11 w-36 rounded-xl" />
        </div>
    );
}

function SidebarSkeleton() {
    return (
        <div className="space-y-6">
            <Pulse className="h-10 w-full rounded-xl" />

            <div className="space-y-2">
                {Array.from({ length: 8 }).map((_, i) => (
                    <Pulse
                        key={i}
                        className="h-10 w-full rounded-xl"
                    />
                ))}
            </div>
        </div>
    );
}

export function SplitScreenLoadingSkeleton({
                                               variant = "page",
                                               className,
                                           }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.2,
            }}
            className={cn(
                "h-full w-full p-6",
                className
            )}
        >
            {variant === "page" && <PageSkeleton />}

            {variant === "cards" && <CardSkeleton />}

            {variant === "table" && <TableSkeleton />}

            {variant === "form" && <FormSkeleton />}

            {variant === "sidebar" && <SidebarSkeleton />}
        </motion.div>
    );
}

export const DefaultLoadingSkeleton = SplitScreenLoadingSkeleton;