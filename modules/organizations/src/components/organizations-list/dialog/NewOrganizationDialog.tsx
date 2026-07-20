"use client";

import {Button, Dialog, Field, Text} from "@repo/ui/primitives";
import {Plus} from "lucide-react";
import {Container} from "@repo/ui/views";

export function NewOrganizationDialog() {

    return (
        <Dialog
            animation={"fade"}
            blur={"sm"}
            containerProps={{
                width: "60dvw",
                surface: "surface-2",
                elevation: "3",
                border: "default",
                radius: "2xl",
                height: 650,
                overflow: "scroll",
                direction: "column",
                align: "center",
                justify: "start",
                gap: "lg",
                padding: "sm",
                margin: "none"
            }}
        >

            {/* _________Trigger_______ */}
            <Dialog.Trigger
                asChild>
                <Button.Primary
                    className={"p-2.5!"}
                    hideContent={"md"}
                    leading={<Plus className={"text-lg font-semibold"}/>}
                    size={"xl"}
                >
                    <Text.Label color={"secondary"}>New organization</Text.Label>
                </Button.Primary>
            </Dialog.Trigger>

            {/* _________Content_______ */}
            <Dialog.Content
            >
                <Container
                    surface={"none"}
                    padding={"none"}
                    margin={"none"}
                    width={"100%"}
                    height={"100%"}
                    align={"center"}
                    justify={"center"}
                    direction={"column"}
                    overflow={"hidden"}
                >

                    <Field.Input
                        label="Email"
                        hidelabel={"never"}
                        type="email"
                        slotProps={{
                            control: { className: "bg-red-50 border-red-500 shadow-lg" },
                            label: { className: "text-red-500!" },
                        }}
                        fullwidth={true}
                        description={"just a normal des"}
                        labelplacement={{
                            base: "left",
                            md: "top",
                        }}
                    />

                    <Field.Password
                        fullwidth={true}
                        labelplacement={"left"}
                        label="Password"
                        description={"Password must not be less than 6 characters"}
                    />

                    <Field.TextArea
                        bottomAdornment={
                            <Container
                                surface={"glass-1"}
                                width={"600px"}
                                interaction={"hover"}
                                height={100}
                                radius={"md"}
                            >
                            </Container>
                        }
                        fullwidth={true}
                        label="Bio"
                        helper="Tell us about yourself."
                    />

                    <Field.Select
                        fullwidth={true}
                        width={"full"}
                        slotProps={{
                            select: {
                                className: "w-[300px]!"
                            },
                        }}
                        labelplacement={"left"}
                        label="Country"
                        options={[
                            { value: "ng", label: "Nigeria" },
                            { value: "us", label: "United States" },
                        ]}
                    />
                </Container>
            </Dialog.Content>

        </Dialog>
    )
}