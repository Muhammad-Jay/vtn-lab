"use client";

import * as React from "react";
import { ShieldCheck, Users, Zap } from "lucide-react";
import { Container } from "@repo/ui/views";
import { Stack } from "@repo/ui/layouts";
import { SlideFeature } from "./SlideFeature";

const slideVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: -10, opacity: 1 },
};

const slideTransition = {
    delay: 1,
    duration: 0.8,
};

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Secure by design",
        description:
            "Enterprise-grade security to keep your data and projects safe.",
    },
    {
        icon: Users,
        title: "Built for teams",
        description:
            "Collaborate, manage, and ship faster\u2014together.",
    },
    {
        icon: Zap,
        title: "Everything in one place",
        description:
            "All your tools, workflows, and insights in a single platform.",
    },
] as const;

export function SlideContent() {
    return (
        <Container
            variant="glass"
            radius="3xl"
            padding="none"
            maxWidth={"330px"}
            className="p-8 md:p-10! mx-auto"
            animate
            variants={slideVariants}
            transition={slideTransition}
        >
            <Stack gap="8">
                {FEATURES.map((feature) => (
                    <SlideFeature
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </Stack>
        </Container>
    );
}
