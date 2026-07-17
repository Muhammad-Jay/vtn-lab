"use client";

import * as React from "react";
import { HelpCircle } from "lucide-react";
import { Background, Container } from "@repo/ui/views";
import { Stack } from "@repo/ui/layouts";
import { Button, Text } from "@repo/ui/primitives";
import { AppBrand } from "@repo/ui/brand";
import { AuthForm } from "./AuthForm";

export function AuthenticationPage() {
    return (
        <Container
            padding={"md"}
            overflow={"hidden"}
            hideScrollbar
            surface={"auth"}
            height={"100vh"}
            width={"100dvw"}
            align={"center"}
            justify={"center"}
            border={"strong"}
            radius={"2xl"}
            className="relative m-0! no-scrollbar! isolate overflow-hidden">
            {/* Ripple grid background */}
            {/*<Background.Main*/}
            {/*    gradient={"linear"}*/}
            {/*    className={"ds-bg-radial-top!"}*/}
            {/*    zIndex={0}*/}
            {/*/>*/}

            {/* Decorative glowing blob — top-left */}
            {/*<div*/}
            {/*    className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"*/}
            {/*    style={{ zIndex: 1 }}*/}
            {/*/>*/}

            {/*/!* Decorative glowing blob — bottom-right *!/*/}
            {/*<div*/}
            {/*    className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"*/}
            {/*    style={{ zIndex: 1 }}*/}
            {/*/>*/}

            {/* Top navigation bar */}
            <Container
                surface="none"
                border="none"
                radius="none"
                padding="md"
                width={"full"}
                margin={10}
                justify={"between"}
                align={"center"}
                className="absolute top-0 inset-x-0! flex-row! z-20 flex items-center justify-between p-4 md:p-6!"
            >
                <AppBrand>
                    <AppBrand.Logo size="md" variant="glass" />
                    <AppBrand.Name size="lg">VTN-Lab</AppBrand.Name>
                </AppBrand>

                <Stack
                    direction="row" align="center" gap="2">
                    <HelpCircle size={16} className="text-muted-foreground" />
                    <Button.Ghost className="p-0! h-auto! text-muted-foreground hover:text-foreground">
                        <Text.Caption color="inherit">Need help?</Text.Caption>
                    </Button.Ghost>
                </Stack>
            </Container>

            {/* Centered main content */}
            <AuthForm />
        </Container>
    );
}
