"use client";

import { Container } from "@repo/ui/views";
import { AutoGrid } from "@repo/ui/layouts";
import { Text } from "@repo/ui/primitives";
import { ListHeader } from "./ListHeader";
import { MOCK_ORGANIZATIONS } from "../../constants/test";
import { OrganizationsListSkeleton }  from "./LoadingSkeleton";
// import { useOrganizations } from "../../queries/orgQueries";

export function OrganizationsList() {
    // TODO: Replace with your actual data fetching hook
    // const { data: organizations, isLoading } = useOrganizations();
    const isLoading = true; // Toggle this to true to see the skeleton in action
    const organizations = MOCK_ORGANIZATIONS;

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
            {/* Header Area */}
            <ListHeader />

            {/* Scrollable List Container */}
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
                    isEmpty={!isLoading && !organizations?.length}
                    emptyState={<Text.Muted>No organizations found. Create one to get started.</Text.Muted>}
                    columns={{ base: 1, xl: 2 }}
                    gap={6}
                >
                    {isLoading ? (
                        <OrganizationsListSkeleton />
                    ) : (
                        organizations.map(({ id, name, description, slug, logoUrl }) => (
                            <AutoGrid.Item key={id} span={{ base: 1 }}>
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
                                >
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <div className="flex items-center justify-between w-full">
                                            <Text.H6 className="group-hover:text-text-primary transition-colors">
                                                {name}
                                            </Text.H6>
                                            <span className="px-2 py-0.5 rounded-full border border-border-divider bg-surface-3 text-[10px] uppercase tracking-widest text-text-muted">
                                                Active
                                            </span>
                                        </div>
                                        <Text.Muted className="text-sm line-clamp-2 leading-relaxed">
                                            {description}
                                        </Text.Muted>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-divider w-full">
                                        <Text.Label color="muted" className="text-xs font-mono">
                                            /{slug}
                                        </Text.Label>
                                    </div>
                                </Container>
                            </AutoGrid.Item>
                        ))
                    )}
                </AutoGrid>
            </Container>
        </Container>
    );
}