"use client";

import * as React from "react";
import { Container } from "@repo/ui/views";
import { Text } from "@repo/ui/primitives";
import { Menu } from "@repo/ui/menus";
import {
    MoreHorizontal,
    LayoutDashboard,
    Users,
    CreditCard,
    Settings,
    Trash2,
    ExternalLink
} from "lucide-react";

// Assuming you have an exported type for this
interface Organization {
    id: string;
    name: string;
    description?: string;
    slug: string;
    logoUrl?: string;
}

interface OrganizationCardProps {
    organization: Organization;
    onClick?: (id: string) => void;
}

export function OrganizationCard({ organization, onClick }: OrganizationCardProps) {
    const { id, name, description, slug } = organization;

    return (
        <Container
            surface="surface-2"
            interaction="hover"
            border="default"
            hoverBorder="focus"
            radius="xl"
            gap="sm"
            direction="column"
            padding="lg"
            width="full"
            minHeight={170}
            align="start"
            justify="between"
            className="group cursor-pointer transition-all duration-200"
            onClick={() => onClick?.(id)}
        >
            <div className="flex flex-col gap-1.5 w-full">
                <div className="flex items-center justify-between w-full">
                    <Text.H6 className="group-hover:text-text-primary transition-colors">
                        {name}
                    </Text.H6>

                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full border border-border-divider bg-surface-3 text-[10px] uppercase tracking-widest text-text-muted">
                            Active
                        </span>

                        {/*
                          Stop propagation prevents the card's onClick
                          from firing when interacting with the menu.
                        */}
                        <div onClick={(e) => e.stopPropagation()}>
                            <Menu>
                                <Menu.Trigger icon={<MoreHorizontal className="size-4" />}/>

                                <Menu.Content width="sm" align="end">
                                    <Menu.Label>Workspace</Menu.Label>
                                    <Menu.Item leading={<LayoutDashboard className="size-4" />}>
                                        Open Dashboard
                                    </Menu.Item>
                                    <Menu.Item
                                        leading={<ExternalLink className="size-4" />}
                                        onClick={() => window.open(`/${slug}`, '_blank')}
                                    >
                                        Visit Application
                                    </Menu.Item>

                                    <Menu.Separator />

                                    <Menu.Label>Configuration</Menu.Label>
                                    <Menu.Item leading={<Users className="size-4" />}>
                                        Manage Access
                                    </Menu.Item>
                                    <Menu.Item leading={<CreditCard className="size-4" />}>
                                        Billing & Usage
                                    </Menu.Item>
                                    <Menu.Item leading={<Settings className="size-4" />}>
                                        Organization Settings
                                    </Menu.Item>

                                    <Menu.Separator />

                                    <Menu.Item
                                        variant="destructive"
                                        leading={<Trash2 className="size-4" />}
                                    >
                                        Delete Workspace
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu>
                        </div>
                    </div>
                </div>

                <Text.Muted className="text-sm line-clamp-2 leading-relaxed">
                    {description || "No description provided for this organization."}
                </Text.Muted>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-divider w-full">
                <Text.Label color="muted" className="text-xs font-mono">
                    /{slug}
                </Text.Label>
            </div>
        </Container>
    );
}