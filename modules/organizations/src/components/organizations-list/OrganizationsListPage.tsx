"use client";

import { Container } from "@repo/ui/views";
import { OrganizationsList } from "./OrganizationsList";
import { RightSectionContent } from "./RightSectionContent";

export function OrganizationsListPage() {
    return (
        <Container
            surface="dashboard"
            width="screen"
            height="screen"
            radius="none" // Typically, full-screen wrappers shouldn't have radius unless framed
            padding="sm"
            hideScrollbar
            overflow="hidden"
            direction="row"
            align="stretch"
            justify="start"
            gap="sm"
        >
            {/* Left Section: Organization list or empty state. */}
            <OrganizationsList />

            {/* Right Section: Insights / Detail view */}
            <RightSectionContent />
        </Container>
    );
}