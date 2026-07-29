"use client";

import * as React from "react";
import { useState, useTransition } from "react";
import { Container } from "@repo/ui/views";
import { Text, Drawer, Field, Button } from "@repo/ui/primitives";
import { Organization } from "@foundation/domain/org";
import { Building2, Save, X } from "lucide-react";

interface EditOrganizationDrawerProps {
    organization: Organization;
    children?: React.ReactNode; // Made optional
    open?: boolean; // Added
    onOpenChange?: (open: boolean) => void; // Added
    onUpdate?: (updatedData: { name: string; description: string; slug: string, logoUrl?: string }) => Promise<void> | void;
}

export function EditOrganizationDrawer({
                                           organization,
                                           children,
                                           open: externalOpen,
                                           onOpenChange,
                                           onUpdate,
                                       }: EditOrganizationDrawerProps) {
    const [internalOpen, setInternalOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Determine if we are using controlled state (from parent) or internal state
    const isControlled = externalOpen !== undefined;
    const actualOpen = isControlled ? externalOpen : internalOpen;

    const handleOpenChange = (newOpen: boolean) => {
        if (onOpenChange) {
            onOpenChange(newOpen);
        }
        if (!isControlled) {
            setInternalOpen(newOpen);
        }
    };

    const [formData, setFormData] = useState({
        name: organization.name || "",
        description: organization.description || "",
        slug: organization.slug || "",
        logoUrl: organization.logoUrl || "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) {
            newErrors.name = "Organization name is required.";
        }
        if (!formData.slug.trim()) {
            newErrors.slug = "Workspace URL slug is required.";
        } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
            newErrors.slug = "Slug can only contain lowercase letters, numbers, and hyphens.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        startTransition(async () => {
            try {
                if (onUpdate) {
                    await onUpdate(formData);
                }
                handleOpenChange(false);
            } catch (error) {
                console.error("Failed to update organization:", error);
            }
        });
    };

    return (
        <Drawer.Root
            placement={"right"}
            size={"lg"}
            animation={"slide"}
            backdrop={"transparent"}
            slotProps={{
                header: {
                    direction: "row",
                    align: "center",
                    justify: "between",
                },
                footer: {
                    direction: "row",
                    align: "center",
                    justify: "between",
                }
            }}
            open={actualOpen}
            onOpenChange={handleOpenChange}
        >
            {/* Only render Trigger if children are provided */}
            {children && (
                <Drawer.Trigger render={asChild(children)} {...({ nativeButton: false } as any)} />
            )}

            <Drawer.Portal>
                <Drawer.Overlay/>

                <Drawer.Viewport>
                    <Drawer.Content
                        containerProps={{
                            direction: "column",
                        }}
                    >
                        <Drawer.SwipeHandle />

                        <Drawer.Header className="flex items-center justify-between px-6! py-5!">
                            <div className="flex items-center gap-3">
                                <Container surface="surface-3" radius="lg" padding="sm" className="border border-border-divider">
                                    <Building2 className="size-5 text-text-primary" />
                                </Container>
                                <div>
                                    <Drawer.Title render={<Text.H6 />}>
                                        Workspace Settings
                                    </Drawer.Title>

                                    <Drawer.Description render={<Text.Muted className="text-xs" />}>
                                        Manage your organization profile and routing identifier.
                                    </Drawer.Description>
                                </div>
                            </div>

                            <Drawer.Close render={
                                <Button.Ghost size="icon" className="rounded-full">
                                    <X className="size-4" />
                                </Button.Ghost>
                            } />
                        </Drawer.Header>

                        <Drawer.Body
                            className=" space-y-6!">
                            <Field.Input
                                label="Organization Name"
                                labelplacement={{
                                    base: "left",
                                    md: "top",
                                }}
                                description="The display name of your workspace visible to all members."
                                invalid={!!errors.name}
                                helper={errors.name}
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="Acme Corporation"
                                fullwidth
                            />

                            <Field.Input
                                label="Workspace URL Slug"
                                labelplacement={{
                                    base: "left",
                                    md: "top",
                                }}
                                description="Unique routing identifier used for resource endpoints and direct links."
                                invalid={!!errors.slug}
                                helper={errors.slug}
                                startAdornment={<span className="text-xs font-mono text-text-muted select-none">app.io/</span>}
                                value={formData.slug}
                                onChange={(e) => handleChange("slug", e.target.value)}
                                placeholder="acme-corp"
                                fullwidth
                            />

                            <Field.TextArea
                                labelplacement={{
                                    base: "left",
                                    md: "top",
                                }}
                                label="Workspace Description"
                                description="A concise summary of your organization's mission or department scope."
                                invalid={!!errors.description}
                                helper={errors.description}
                                value={formData.description}
                                onChange={(e) => handleChange("description", e.target.value)}
                                placeholder="Brief overview of your workspace activities..."
                                rows={3}
                                fullwidth
                            />

                            <Field.Input
                                labelplacement={{
                                    base: "left",
                                    md: "top",
                                }}
                                label="Logo URL"
                                description="The logo of the organization."
                                invalid={!!errors.name}
                                helper={errors.name}
                                value={formData.logoUrl}
                                onChange={(e) => handleChange("logoUrl", e.target.value)}
                                placeholder="https://cloud.aws.com/62572582773763/logo.png"
                                fullwidth
                            />
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Drawer.Close render={
                                <Button.Ghost
                                    type="button"
                                    size={"md"}
                                    disabled={isPending}>
                                    Cancel
                                </Button.Ghost>
                            } />

                            <Button.Primary
                                leading={<Save className="size-4" />}
                                size={"md"}
                                type="submit"
                                loading={isPending}
                                loadingText="Saving Changes..."
                                onClick={handleSubmit}
                                disabled={isPending}
                                className="gap-2">
                                Save Changes
                            </Button.Primary>
                        </Drawer.Footer>
                    </Drawer.Content>
                </Drawer.Viewport>
            </Drawer.Portal>
        </Drawer.Root>
    );
}

function asChild(node: React.ReactNode) {
    if (React.isValidElement(node)) {
        return node;
    }
    return <span role="button">{node}</span>;
}