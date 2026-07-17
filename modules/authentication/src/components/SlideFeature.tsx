"use client";

import type { LucideIcon } from "lucide-react";
import { Container } from "@repo/ui/views";
import { Stack } from "@repo/ui/layouts";
import { Text } from "@repo/ui/primitives";

interface SlideFeatureProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function SlideFeature({ icon: Icon, title, description }: SlideFeatureProps) {
    return (
        <Stack direction="row" gap="4" align="start">
            <Container
                variant="muted"
                radius="xl"
                padding="md"
                className="shrink-0!"
            >
                <Icon size={22} className="text-foreground" />
            </Container>

            <Stack gap="1">
                <Text.Body className="font-semibold text-foreground">
                    {title}
                </Text.Body>

                <Text.Small color="muted">
                    {description}
                </Text.Small>
            </Stack>
        </Stack>
    );
}
