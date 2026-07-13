"use client";

import {Container} from "@repo/ui/views";
import {Stack} from "@repo/ui/layouts";
import {SlideContent} from "./SlideContent";
import {OAUTH_PROVIDERS} from "../constants/oauth-providers";
import {Button, Text} from "@repo/ui/primitives";
import React from "react";
import {ChevronDown} from "lucide-react";

export function AuthForm() {
    const transition = {
        delay: 0.5,
        duration: 0.300,
    }
    const animateVariants = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <Container
            variant={"transparent"}
            widthValue={"850px"}
            height={"fit"}
            border={"none"}
            radius={"none"}
            overflow={"visible"}
            padding={"none"}
            alignCenter
            justifyCenter
        >

            <Stack
                grow={true}
                direction={"row"}
                reverse
                padding={"0"}
                gap={"0"}
                fullWidth
                fullHeight
                margin={"0"}
                justify={"center"}
                align={"center"}
            >

                {/*Slide COntents*/}
                <SlideContent/>

                {/*Form Container*/}
                <Container
                    variant={"card"}
                    minWidth={400}
                    maxWidth={600}
                    height={"fit"}
                    padding={"2xl"}
                    border={"default"}
                    animate
                    variants={animateVariants}
                    transition={transition}
                >

                    <Stack
                        fullWidth
                        fullHeight
                        direction={"column"}
                        gap={"8"}
                        divider
                    >

                        <Stack
                            direction={"column"}
                            gap={"2"}
                            margin={"0"}
                            padding={"0"}
                            align={"center"}
                            justify={"between"}
                            fullWidth
                        >
                            {OAUTH_PROVIDERS.map((provider) => (
                                <OAuthButton
                                    key={provider.id}
                                    name={provider.name}
                                    color={provider.color}
                                    icon={provider.icon}/>
                            ))}
                        </Stack>

                        <Button.Primary
                            width={"full"}
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
                                    className={"w-full flex! items-center justify-start!"} color={"secondary"}>
                                    Select more
                                </Text.Subtitle>
                            </Stack>
                        </Button.Primary>
                    </Stack>
                </Container>
            </Stack>
        </Container>
    )
}


const OAuthButton = ({
    name,
    color,
    icon,
                     }: {
    name: string;
    color: string;
    icon: React.ComponentType<{ color?: string; size?: number | string, className?: string }>
}) => {

    const IconComponent = icon;

    return (
        <Button.Primary
            width={"full"}
            center
            animate
            animation={"scale"}
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
                justify={"start"}>

                <IconComponent color={color} size={22} className={"p-0! m-0!"} />

                <Text.Subtitle className={"w-full flex! items-center justify-start!"} color={"secondary"}>
                    Continue with {name}
                </Text.Subtitle>
            </Stack>
        </Button.Primary>
    )
}