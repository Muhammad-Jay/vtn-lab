"use client";

import {AutoGrid} from "@repo/ui/layouts";
import {Container} from "@repo/ui/views";

export function OrganizationsListSkeleton() {
    // Render 4 skeleton cards to fill the initial viewport space cleanly
    return (
        <>
            {Array.from({ length: 4 }).map((_, index) => (
                <AutoGrid.Item key={index} span={{ base: 1 }}>
                    <Container
                        surface="surface-2"
                        border="default"
                        radius="xl"
                        gap="sm"
                        direction="column"
                        padding="lg"
                        width="full"
                        minHeight={170}
                        align="start"
                        justify="between"
                    >
                        <div className="flex flex-col gap-4 w-full animate-pulse">
                            {/* Title & Status Badge Row */}
                            <div className="flex items-center justify-between w-full">
                                <div className="h-5 w-1/3 bg-surface-4 rounded-md" />
                                <div className="h-5 w-12 bg-surface-4 rounded-full" />
                            </div>

                            {/* Description Lines */}
                            <div className="flex flex-col gap-2 mt-1">
                                <div className="h-3.5 w-full bg-surface-3 rounded-md" />
                                <div className="h-3.5 w-4/5 bg-surface-3 rounded-md" />
                            </div>
                        </div>

                        {/* Footer / Slug Row */}
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-divider w-full animate-pulse">
                            <div className="h-3 w-1/4 bg-surface-3 rounded-md" />
                        </div>
                    </Container>
                </AutoGrid.Item>
            ))}
        </>
    );
}