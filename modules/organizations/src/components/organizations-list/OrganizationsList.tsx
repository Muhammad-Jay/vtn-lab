"use client";

import { Container } from "@repo/ui/views";
import { AutoGrid } from "@repo/ui/layouts";
import { Text } from "@repo/ui/primitives";
import { ListHeader } from "./ListHeader";
import { OrganizationsListSkeleton } from "./LoadingSkeleton";
import { OrganizationCard } from "./OrganizationCard";
import { useOrganizations } from "../../queries/orgQueries";
import {Organization} from "@foundation/domain";

export function OrganizationsList() {
    const { data: organizations, isLoading, error, isError } = useOrganizations();

    // Handle specific server/fetch errors gracefully
    if (isError) {
        return (
            <Container padding="xl" align="center" justify="center" direction="column" gap="sm">
                <Text.H5 className="text-danger">Failed to load organizations</Text.H5>
                <Text.Muted>{error?.message || "An unexpected error occurred while fetching your workspaces."}</Text.Muted>
            </Container>
        );
    }

    const orgList = organizations?.data?.organizations ?? [];
    const hasOrgs = orgList.length > 0;

    return (
        <Container
            surface="none"
            border="default"
            radius="2xl"
            width={{
                base: "100%",
                md: "60dvw"
            }}
            height="full"
            padding="md"
            overflow="hidden"
            direction="column"
            gap="md"
            align="stretch"
            justify="start"
        >
            <ListHeader />

            <Container
                surface="none"
                border="none"
                padding={{ base: "xs" }}
                gap="md"
                overflow="scroll"
                hideScrollbar
                elevation="none"
                width="full"
                height="100%"
                direction="column"
                align="center"
                justify="start"
            >
                <AutoGrid
                    scroll={false}
                    mode="fit"
                    className="w-full"
                    emptyState={
                        !isLoading && !hasOrgs ? (
                            <Text.Muted>No organizations found. Create one to get started.</Text.Muted>
                        ) : undefined
                    }
                    columns={{ base: 1, xl: 2 }}
                    gap={6}
                >
                    {isLoading ? (
                        <OrganizationsListSkeleton />
                    ) : (
                        orgList.map((org: Organization) => (
                            <AutoGrid.Item key={org.id} span={{ base: 1 }}>
                                <OrganizationCard
                                    organization={org}
                                    onClick={(id) => {
                                        // TODO: Handle main card click navigation (e.g., router.push(`/org/${id}`))
                                        console.log("Navigating to org:", id);
                                    }}
                                />
                            </AutoGrid.Item>
                        ))
                    )}
                </AutoGrid>
            </Container>
        </Container>
    );
}