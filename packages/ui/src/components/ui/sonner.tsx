"use client"

import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps, toast } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
                success: <CircleCheckIcon className="size-4 text-[var(--success)]" />,
                info: <InfoIcon className="size-4 text-[var(--info)]" />,
                warning: <TriangleAlertIcon className="size-4 text-[var(--warning)]" />,
                error: <OctagonXIcon className="size-4 text-[var(--danger)]" />,
                loading: <Loader2Icon className="size-4 animate-spin text-[var(--text-muted)]" />,
            }}
            style={
                {
                    "--normal-bg": "var(--panel-floating)",
                    "--normal-text": "var(--text-primary)",
                    "--normal-border": "var(--border-strong)",
                    "--border-radius": "var(--radius)",
                    "--toast-shadow": "var(--shadow-3-val)",
                } as React.CSSProperties
            }
            toastOptions={{
                classNames: {
                    toast: "group toast group-[.toaster]:bg-[var(--panel-floating)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--border-strong)] group-[.toaster]:shadow-[var(--shadow-3-val)]",
                    description: "group-[.toast]:text-[var(--text-muted)]",
                    actionButton: "group-[.toast]:bg-[var(--action-primary)] group-[.toast]:text-[var(--text-inverse)] group-[.toast]:border-none",
                    cancelButton: "group-[.toast]:bg-[var(--action-secondary)] group-[.toast]:text-[var(--text-primary)] group-[.toast]:border-[var(--border-default)]",
                    closeButton: "group-[.toast]:bg-[var(--surface-2)] group-[.toast]:text-[var(--text-muted)] group-[.toast]:border-[var(--border-default)] hover:group-[.toast]:text-[var(--text-primary)] hover:group-[.toast]:bg-[var(--surface-3)]",
                },
            }}
            {...props}
        />
    )
}

export { ToasterProps }
export { Toaster }
export { toast }