"use client";

import { Toaster, ToasterProps } from "@repo/ui/primitives"

export function ToasterProvider(props: ToasterProps) {
    return <Toaster {...props} />
}