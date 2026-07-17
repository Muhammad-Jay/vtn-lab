"use client";

import * as React from "react";
import {Sparkles, ChevronDown, User, Settings, CreditCard} from "lucide-react";
import { Container } from "@repo/ui/views";
import { Stack } from "@repo/ui/layouts";
import { Button, Text } from "@repo/ui/primitives";
import { OAuthProviderList } from "./OAuthProviderList";
import { AuthFormDivider } from "./AuthFormDivider";
import {MoreOptionsMenu} from "./MoreOptionsMenu";

const formSlideVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const formTransition = {
    delay: 0.5,
    duration: 0.3,
};

export function AuthForm() {
    return (
        <Container
            padding={"none"}
            border={"none"}
            gap={"none"}
            surface={"surface-4"}
            elevation={"0"}
            radius={"2xl"}
        >

            <Stack
                direction={"row"}
                gap={"0"}
                padding={"0"}
                fullWidth
                fullHeight
                reverse
                align={"center"}
                justify={"center"}
            >

                {/* Slide content panel — right on desktop, top on mobile */}
                {/* TODO: implement this layout */}
                {/*<Container*/}
                {/*    padding={"none"}*/}
                {/*    variant={"transparent"}*/}
                {/*    hidden={"md"}*/}
                {/*    border={"none"}*/}
                {/*    className="flex-1 flex items-center">*/}
                {/*    <SlideContent />*/}
                {/*</Container>*/}

                {/* Form panel — left on desktop, bottom on mobile */}
                <Container
                    variant="card"
                    radius="3xl"
                    padding="none"
                    maxWidth={500}
                    className="p-10! shadow-2xl! w-full mx-auto"
                    animate
                    variants={formSlideVariants}
                    transition={formTransition}
                >
                    <Stack
                        direction={"column"}
                        gap="3" fullWidth>
                        {/* Centered logo icon */}
                        <Stack
                            fullWidth
                            align={"center"}
                            justify={"center"}
                        >
                            <Container
                                variant="muted"
                                radius="xl"
                                padding="md"
                                width={"fit"}
                                center
                                alignCenter
                                justifyCenter
                                className={"bg-surface-5"}
                            >
                                <Sparkles size={24} className="text-foreground" />
                            </Container>
                        </Stack>

                        {/* Title */}
                        <Stack gap="2" fullWidth align="center">
                            <Text.H2 align="center" className={"font-bold"} wrap="balance">
                                Welcome to VTN-Lab
                            </Text.H2>

                            <Text.Body
                                align="center"
                                color="muted"
                                className="max-w-sm!"
                            >
                                Sign in to access your workspace
                                or create a new account.
                            </Text.Body>
                        </Stack>

                        {/* OAuth provider buttons */}
                        <OAuthProviderList />

                        {/* "or" divider */}
                        <AuthFormDivider />

                        {/* More sign-in options */}
                        <MoreOptionsMenu/>


                        {/*<Button.Outline*/}
                        {/*    width="full"*/}
                        {/*    className="p-6!"*/}
                        {/*>*/}
                        {/*    <Stack*/}
                        {/*        direction="row"*/}
                        {/*        align="center"*/}
                        {/*        fullWidth*/}
                        {/*    >*/}
                        {/*        <Text.Body className="flex-1 text-center">*/}
                        {/*            More sign-in options*/}
                        {/*        </Text.Body>*/}

                        {/*        <ChevronDown*/}
                        {/*            size={16}*/}
                        {/*            className="text-muted-foreground shrink-0!"*/}
                        {/*        />*/}
                        {/*    </Stack>*/}
                        {/*</Button.Outline>*/}

                        {/* Footer terms */}
                        <Text.Caption
                            align="center"
                            color="muted"
                            className="max-w-sm! mx-auto!"
                        >
                            By continuing, you agree to our{" "}
                            <Text.Caption
                                color="foreground"
                                as="span"
                                className="font-medium"
                            >
                                Terms of Service
                            </Text.Caption>{" "}
                            and{" "}
                            <Text.Caption
                                color="foreground"
                                as="span"
                                className="font-medium"
                            >
                                Privacy Policy
                            </Text.Caption>.
                        </Text.Caption>
                    </Stack>
                </Container>
            </Stack>
        </Container>
    );
}
