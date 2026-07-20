import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Container } from "../../views";

import {
    DialogProps,
    DialogContentProps,
    DialogHeaderProps,
    DialogFooterProps,
    DialogTriggerProps,
} from "./types";
import { DialogProvider } from "./DialogContext";
import { DIALOG_SIZE_PRESETS, getAnimationClass, getBlurClass } from "./Dialog.Utils";

// Extract structural parts from children
function extractChildren(children: React.ReactNode) {
    let trigger = null, header = null, content = null, footer = null;
    const body: React.ReactNode[] = [];

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) {
            body.push(child);
            return;
        }
        switch (child.type) {
            case Trigger: trigger = child; break;
            case Header: header = child; break;
            case Content: content = child; break;
            case Footer: footer = child; break;
            default: body.push(child);
        }
    });

    return { trigger, header, content, footer, body };
}

// Fallback when no custom header is provided
function DefaultHeader({ title, subtitle }: { title?: React.ReactNode; subtitle?: React.ReactNode }) {
    if (!title && !subtitle) return null;
    return (
        <>
            {title && <h2 className="text-xl font-semibold">{title}</h2>}
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </>
    );
}

// Dummy structural components
function Trigger(props: DialogTriggerProps) { return <RadixDialog.Trigger asChild {...props} />; }
function Header({ children }: DialogHeaderProps) { return <>{children}</>; }
function Content({ children }: DialogContentProps) { return <>{children}</>; }
function Footer({ children }: DialogFooterProps) { return <>{children}</>; }

function Root({
                  children,
                  title,
                  subtitle,
                  header,
                  footer,
                  size = "md",
                  animation = "scale",
                  blur = "md",
                  showCloseButton = true,
                  containerProps,
                  overlayProps,
                  overlayStyle,
                  overlayClassName,
                  closeOnEscape = true,
                  closeOnOverlayClick = true,
                  ...props
              }: DialogProps) {

    // Parse layout architecture from children
    const extracted = extractChildren(children);

    // Resolve structural hierarchy
    const finalHeader = header ?? extracted.header ?? <DefaultHeader title={title} subtitle={subtitle} />;
    const finalContent = extracted.content ?? extracted.body;
    const finalFooter = footer ?? extracted.footer;
    const preset = DIALOG_SIZE_PRESETS[size];

    const close = React.useCallback(() => {
        props.onOpenChange?.(false);
    }, [props]);

    const context = React.useMemo(() => ({
        open: props.open ?? false,
        onOpenChange: props.onOpenChange ?? (() => {}),
        close,
        size,
        animation,
        blur,
        showCloseButton,
        closeOnEscape,
        closeOnOverlayClick,
        containerProps,
    }), [props.open, props.onOpenChange, close, size, animation, blur, showCloseButton, closeOnEscape, closeOnOverlayClick, containerProps]);

    return (
        <DialogProvider value={context}>
            <RadixDialog.Root modal={false} {...props}>
                {extracted.trigger}

                <RadixDialog.Portal>
                    <RadixDialog.Overlay
                        {...overlayProps}
                        className={[
                            "fixed inset-0 z-50 bg-black/50",
                            getBlurClass(blur),
                            getAnimationClass(animation),
                            overlayClassName,
                            overlayProps?.className,
                        ].filter(Boolean).join(" ")}
                        style={{ ...overlayStyle, ...overlayProps?.style }}
                    />

                    {/* Radix is strictly responsible for positioning and accessibility */}
                    <RadixDialog.Content
                        onOpenAutoFocus={(e) => {
                            console.log("dialog auto focus");
                        }}
                        onCloseAutoFocus={(e) => {
                            console.log("dialog close auto focus");
                        }}
                        onFocusCapture={(e) => {
                            console.log("focus", e.target);
                        }}
                        onEscapeKeyDown={(e) => { if (!closeOnEscape) e.preventDefault(); }}
                        onPointerDownOutside={(e) => { if (!closeOnOverlayClick) e.preventDefault(); }}
                        className={[
                            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 focus:outline-none",
                            getAnimationClass(animation),
                        ].join(" ")}
                    >
                        {/* Container is strictly responsible for width, sizing, and layout */}
                        <Container
                            surface="modal"
                            radius="2xl"
                            elevation="4"
                            padding="xl"
                            {...preset}
                            {...containerProps}
                        >
                            {finalHeader && <header className="mb-6">{finalHeader}</header>}

                            <main>{finalContent}</main>

                            {finalFooter && <footer className="mt-8 flex justify-end gap-3">{finalFooter}</footer>}

                            {showCloseButton && (
                                <RadixDialog.Close className="absolute right-5 top-5 opacity-70 hover:opacity-100 transition-opacity">
                                    <X className="h-5 w-5" />
                                </RadixDialog.Close>
                            )}
                        </Container>
                    </RadixDialog.Content>
                </RadixDialog.Portal>
            </RadixDialog.Root>
        </DialogProvider>
    );
}

export const Dialog = Object.assign(Root, {
    Trigger,
    Content,
    Header,
    Footer,
});