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

// Minification-safe Slot Key Mapping
const SLOT_KEY = "__dialog_slot_type";

function Trigger(props: DialogTriggerProps) { return <RadixDialog.Trigger asChild {...props} />; }
Trigger[SLOT_KEY] = "trigger";

function Header({ children, ...props }: DialogHeaderProps) { return <header className="mb-6" {...props}>{children}</header>; }
Header[SLOT_KEY] = "header";

function Content({ children, ...props }: DialogContentProps) { return <div {...props}>{children}</div>; }
Content[SLOT_KEY] = "content";

function Footer({ children, ...props }: DialogFooterProps) { return <footer className="mt-8 flex w-full justify-end gap-3" {...props}>{children}</footer>; }
Footer[SLOT_KEY] = "footer";

function extractChildren(children: React.ReactNode) {
    let trigger = null, header = null, content = null, footer = null;
    const body: React.ReactNode[] = [];

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) {
            body.push(child);
            return;
        }

        // Read slot key safely regardless of HOC wrappers or bundler minification
        const slotType = (child.type as any)[SLOT_KEY];

        switch (slotType) {
            case "trigger": trigger = child; break;
            case "header": header = child; break;
            case "content": content = child; break;
            case "footer": footer = child; break;
            default: body.push(child);
        }
    });

    return { trigger, header, content, footer, body };
}

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
                  slotProps = {}, // New slotProps configuration block
                  modal = true,   // Fixed accessibility standard default
                  ...props
              }: DialogProps & { slotProps?: any }) {

    const extracted = extractChildren(children);
    const preset = DIALOG_SIZE_PRESETS[size];

    const close = React.useCallback(() => {
        props.onOpenChange?.(false);
    }, [props]);

    const context = React.useMemo(() => ({
        open: props.open ?? false,
        onOpenChange: props.onOpenChange ?? (() => {}),
        close, size, animation, blur, showCloseButton, closeOnEscape, closeOnOverlayClick, containerProps,
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

                    {/* Both Sizing presets and accessibility mapping belong directly on the wrapper frame */}
                    <RadixDialog.Content
                        onEscapeKeyDown={(e) => { if (!closeOnEscape) e.preventDefault(); }}
                        onPointerDownOutside={(e) => { if (!closeOnOverlayClick) e.preventDefault(); }}
                        className={[
                            "fixed left-1/2 top-1/2 z-50 pt-3! -translate-x-1/2 -translate-y-1/2 focus:outline-none w-full",
                            getAnimationClass(animation),
                        ].join(" ")}
                        style={{ maxWidth: preset?.maxWidth || "440px" }} // Binds core layout boundaries safely
                        {...slotProps.contentProps}
                    >
                        <Container
                            surface="panel-raised"
                            radius="2xl"
                            elevation="4"
                            padding="xl"
                            border={"default"}
                            className={"border-2"}
                            anchor={"center"}
                            width="100%"
                            {...preset}
                            {...containerProps}
                        >
                            {/* Radix Title wrapper injection guarantees Screen Readers read the header */}
                            {(title || subtitle || extracted.header || header) && (
                                <Header {...slotProps.headerProps}>
                                    {header ?? extracted.header ?? (
                                        <>
                                            {title && (
                                                <RadixDialog.Title className="text-xl font-semibold">
                                                    {title}
                                                </RadixDialog.Title>
                                            )}
                                            {subtitle && (
                                                <RadixDialog.Description className="text-muted-foreground mt-1">
                                                    {subtitle}
                                                </RadixDialog.Description>
                                            )}
                                        </>
                                    )}
                                </Header>
                            )}

                            <main>{extracted.content ?? extracted.body}</main>

                            {(footer || extracted.footer) && (
                                <Footer {...slotProps.footerProps}>
                                    {footer ?? extracted.footer}
                                </Footer>
                            )}

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
