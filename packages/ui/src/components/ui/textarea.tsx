import * as React from "react"

import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "flex field-sizing-content min-h-16 w-full rounded-lg border border-border-default bg-surface-5 px-2.5! py-2! text-base transition-colors outline-none placeholder:text-text-placeholder focus-visible:border-primary/50 focus-visible:border-1 disabled:cursor-not-allowed disabled:bg-surface-2/50 disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-3 aria-invalid:ring-danger/20 md:text-sm dark:disabled:bg-surface-2/80 dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }