"use client";

import { Stack } from "@repo/ui/layouts";
import { Container } from "@repo/ui/views";
import { Text } from "@repo/ui/primitives";

export function AuthFormDivider() {
    return (
        <Stack direction="row" gap={"3"} align="center" fullWidth className="py-4!">
            <Container
                variant="transparent"
                border="top"
                radius="none"
                padding="none"
                className="flex-1 h-0! self-center!"
            />
            <Container
                variant="transparent"
                border="none"
                radius="none"
                padding="none"
                className="px-4! bg-card"
            >
                <Text.Caption color="muted">or</Text.Caption>
            </Container>
            <Container
                variant="transparent"
                border="top"
                radius="none"
                padding="none"
                className="flex-1 h-0! self-center!"
            />
        </Stack>
    );
}
