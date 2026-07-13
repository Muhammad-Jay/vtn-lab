"use client";

import {Container} from "@repo/ui/views";
import {Button, Text} from "@repo/ui/primitives";
import {ChevronDown} from "lucide-react";
import {Stack} from "@repo/ui/layouts";
import React from "react";

export function SlideContent() {

    return (
        <Container
            variant={"muted"}
            minWidth={"full"}
            maxWidth={"full"}
            hidden={"md"}
            height={"fit"}
            padding={"xl"}
            radius={"lg"}
            border={"default"}
            animate
            variants={{
                hidden: {
                    x: -300,
                    opacity: 0,
                },
                visible: {
                    x: -10,
                    opacity: 1,
                }
            }}
            transition={{
                delay: 1,
                duration: 0.800,
            }}
        >

            <Button.Primary
                widthValue={"130px"}
                center
                animate
                animation={"scale"}
                trailing={<ChevronDown/>}
                className={"p-6! border border-border cursor-pointer"}
            >
                <Stack
                    direction={"row"}
                    gap={"8"}
                    padding={"0"}
                    margin={"0"}
                    fullWidth
                    grow
                    align={"center"}
                    justify={"center"}>

                    <Text.Subtitle
                        truncate
                        wrap={"nowrap"}
                        className={"w-full flex! items-center p-5! justify-start!"} color={"secondary"}>
                        Select more
                    </Text.Subtitle>
                </Stack>
            </Button.Primary>
        </Container>
    )
}