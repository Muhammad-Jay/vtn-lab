import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "../../lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <InputPrimitive
            type={type}
            data-slot="input"
            className={cn(
                "h-8 w-full shadow-none! ring-0! min-w-0 rounded-lg! border border-border-default bg-surface-5 px-2.5! py-1.5! text-base transition-colors outline-none! file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-text-primary placeholder:text-text-placeholder focus-visible:border-primary/50 focus-visible:border-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface-2/50 disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-3 aria-invalid:ring-danger/20 md:text-sm dark:disabled:bg-surface-2/80 dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40",
                className
            )}
            {...props}
        />
    )
}

export { Input }