"use client";

import { Container } from "@repo/ui/views";
import { Text } from "@repo/ui/primitives";
import { NewOrganizationDialog } from "./dialog/NewOrganizationDialog";

export function ListHeader() {
    return (
        <Container
            surface="surface-2"
            border="default"
            radius="xl"
            elevation="none"
            width="full"
            direction="row"
            padding="lg"
            align="center"
            justify="between"
            className="shrink-0"
        >
            <div className="flex flex-col gap-1">
                <Text.H5>Organizations</Text.H5>
                <Text.Muted className="text-sm">
                    Manage your workspaces and access controls.
                </Text.Muted>
            </div>

            <NewOrganizationDialog />
        </Container>
    );
}