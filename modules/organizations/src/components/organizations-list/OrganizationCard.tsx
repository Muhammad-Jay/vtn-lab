"use client";

import * as React from "react";
import { Container } from "@repo/ui/views";
import { Text } from "@repo/ui/primitives";
import { Menu } from "@repo/ui/menus";
import { Organization } from "@foundation/domain/org";
import {
    MoreHorizontal,
    LayoutDashboard,
    Users,
    CreditCard,
    Settings,
    Trash2,
    ExternalLink
} from "lucide-react";
import { useDeleteOrganization } from "../../mutations/deleteOrg";
import { UseMutateFunction } from "@tanstack/react-query";
import { ApiError } from "@foundation/core/api-client";
import { EditOrganizationDrawer } from "./EditOrganizationDrawer";
import {useState, useTransition} from "react";
import {useUpdateOrganization} from "../../mutations/updateOrg";


interface OrganizationCardProps {
    organization: Organization;
    onClick?: (id: string) => void;
}

export function OrganizationCard({ organization, onClick }: OrganizationCardProps) {
    const { mutate, isPending } = useDeleteOrganization({
        errorMessage: true,
        successMessage: "Organization deleted successfully",
    });

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
            className="group cursor-pointer hover:border-2! transition-all duration-200"
            onClick={() => onClick?.(id)}
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between w-full">
                    <Text.H6 className="group-hover:text-text-primary transition-colors">
                        {name}
                    </Text.H6>

                    <div className="flex items-center gap-2">
                        <span className="px-2! py-0.5! rounded-full border border-border-divider bg-surface-3 text-xs uppercase tracking-widest text-text-muted">
                            Active
                        </span>

                        <div onClick={(e) => e.stopPropagation()}>
                            <CardMenu
                                organization={organization}
                                mutateDelete={mutate}
                                isDeletePending={isPending}
                            />
                        </div>
                    </div>
                </div>

                <Text.Muted truncate className="text-sm line-clamp-2 leading-relaxed">
                    {description || "No description provided for this organization."}
                </Text.Muted>
            </div>

            <div className="flex items-center gap-2 mt-4! pt-4! border-t border-border-divider w-full">
                <Text.Label color="muted" className="text-xs font-mono">
                    /{slug}
                </Text.Label>
            </div>
        </Container>
    );
}

const CardMenu = ({
                      organization,
                      mutateDelete,
                      isDeletePending,
                  }: {
    organization: Organization;
    mutateDelete: UseMutateFunction<null, ApiError, string, unknown>;
    isDeletePending: boolean;
}) => {
    const { mutateAsync } = useUpdateOrganization({
        errorMessage: true,
        successMessage: "Changes saved!"
    });
    // 1. Add state here
    const [isEditDrawerOpen, setIsEditDrawerOpen] = React.useState(false);

    return (
        <>
            {/* The Menu Component */}
            <Menu modal={false}>
                <Menu.Trigger trailingIcon={false} icon={<MoreHorizontal className="size-4" />} />

                <Menu.Content width="sm" align="end">
                    <Menu.Group>
                        <Menu.Label>Workspace</Menu.Label>
                        <Menu.Item leading={<LayoutDashboard className="size-4" />}>
                            Open Dashboard
                        </Menu.Item>
                        <Menu.Item
                            leading={<ExternalLink className="size-4" />}
                            onClick={() => window.open(`/${organization.slug}`, "_blank")}
                        >
                            Visit Application
                        </Menu.Item>
                    </Menu.Group>

                    <Menu.Separator />

                    <Menu.Group>
                        <Menu.Label>Configuration</Menu.Label>
                        <Menu.Item leading={<Users className="size-4" />}>
                            Manage Access
                        </Menu.Item>
                        <Menu.Item leading={<CreditCard className="size-4" />}>
                            Billing & Usage
                        </Menu.Item>

                        {/* 2. The item just triggers the state change */}
                        <Menu.Item
                            leading={<Settings className="size-4" />}
                            onClick={() => setIsEditDrawerOpen(true)}
                        >
                            Organization Settings
                        </Menu.Item>
                    </Menu.Group>

                    <Menu.Separator />

                    <Menu.Item
                        variant="destructive"
                        leading={<Trash2 className="size-4" />}
                        onClick={() => mutateDelete(organization.id)}
                        disabled={isDeletePending}
                    >
                        {isDeletePending ? "Deleting..." : "Delete Workspace"}
                    </Menu.Item>
                </Menu.Content>
            </Menu>

            {/* 3. The Drawer lives OUTSIDE the Menu entirely */}
            <EditOrganizationDrawer
                organization={organization}
                open={isEditDrawerOpen}
                onOpenChange={setIsEditDrawerOpen}
                onUpdate={async (data) => {
                    console.log("Updated organization data:", data);
                    await mutateAsync({
                        id: organization.id,
                        data
                    });
                }}
            />
        </>
    );
};