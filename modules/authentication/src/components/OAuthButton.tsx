"use client";

import * as React from "react";
import { Button, Text } from "@repo/ui/primitives";
import {Container} from "@repo/ui/views";
import {SupportedOAuthProvider, useOAuth} from "@foundation/core/hooks";

interface OAuthButtonProps {
    name: string;
    color: string;
    icon: React.ComponentType<{
        color?: string;
        size?: number | string;
        className?: string;
    }>;
}

export function OAuthButton({ name, color, icon: Icon }: OAuthButtonProps) {
    const { authenticate, error, isLoading } = useOAuth();

    return (
        <Button.Glass
            width="full"
            loading={isLoading}
            className="p-6!"
            onClick={() => authenticate(name as SupportedOAuthProvider)}
        >
            <Container
                variant={"transparent"}
                padding={"none"}
                gap={"xl"}
                center
                alignCenter
                widthValue={"260px"}
                border={"none"}
                className="flex-row justify-start"
            >

                <Icon color={color} size={22}/>
                <Text.Body
                    align={"left"}
                    className="flex-1 text-left">
                    {isLoading ? "Signing in..." : `Continue with ${name}`}
                </Text.Body>
            </Container>
        </Button.Glass>
    );
}
