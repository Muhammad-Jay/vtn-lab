"use client";

import {Stack} from "@repo/ui/layouts";
import {Button, Text} from "@repo/ui/primitives";
import {ChevronDown} from "lucide-react";
import * as React from "react";
import {Menu} from "@repo/ui/menus";
import {OAUTH_PROVIDERS} from "../constants/oauth-providers";

export function MoreOptionsMenu() {

    return (
        <Menu>
            <Menu.Trigger
                className={"rounded-lg w-full! p-3! bg-primary hover:bg-primary/70 transition-all duration-300 border-border border"}
            >
                <Stack
                    direction="row"
                    align="center"
                    fullWidth
                >
                    <Text.Body color={"secondary"} className="flex-1 text-center">
                        More sign-in options
                    </Text.Body>

                    <ChevronDown
                        size={16}
                        className="text-primary-foreground shrink-0!"
                    />
                </Stack>
            </Menu.Trigger>

            <Menu.Content>
                <Menu.Group>
                    {OAUTH_PROVIDERS.map((provider, index) => (
                        <Menu.Item
                            key={provider.id}
                            className={"py-3! h-[50px]!"}
                        >
                            {provider.name}
                        </Menu.Item>
                    ))}
                </Menu.Group>
            </Menu.Content>
        </Menu>
    )
}