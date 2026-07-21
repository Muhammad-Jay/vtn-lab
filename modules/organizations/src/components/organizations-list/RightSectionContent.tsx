"use client";

import { Container } from "@repo/ui/views";
import { Text } from "@repo/ui/primitives";
import { ShieldCheck } from "lucide-react"; // Assuming you have lucide-react

export function RightSectionContent() {
    return (
        <Container
            surface="surface-2"
            border="default"
            radius="2xl"
            width="40dvw"
            height="full"
            overflow="hidden"
            padding="xl"
            direction="column"
            align="center"
            justify="center"
            hidden="md"
        >
            <Container
                surface="none"
                border="none"
                direction="column"
                align="center"
                justify="center"
                gap="md"
                className="max-w-sm text-center"
            >
                <div className="flex items-center justify-center size-12 rounded-full bg-surface-3 border border-border-strong mb-4">
                    <ShieldCheck className="size-5 text-text-muted" />
                </div>
                <Text.H4>Workspace Overview</Text.H4>
                <Text.Muted className="text-sm leading-relaxed">
                    Select an organization from the directory to view real-time metrics, billing configurations, and team access controls.
                </Text.Muted>
            </Container>
        </Container>
    );
}