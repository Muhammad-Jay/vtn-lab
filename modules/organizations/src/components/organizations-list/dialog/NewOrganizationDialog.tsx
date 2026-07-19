"use client";

import {Button, Dialog, Field, Text} from "@repo/ui/primitives";
import {Plus} from "lucide-react";

export function NewOrganizationDialog() {

    return (
        <Dialog
            animation={"fade"}
            blur={"sm"}
            containerProps={{
                width: 800,
                surface: "surface-2",
                elevation: "3",
                border: "default",
                radius: "2xl",
                height: 650,
                overflow: "scroll",
                direction: "column",
                align: "center",
                justify: "start",
                gap: "md",
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

                <Field.Input
                    width={"full"}
                    variant={"filled"}
                    labelPlacement={"left"}
                    description={"Just enter a new organization first"}
                    label={<Text.Label>Name</Text.Label>}
                />

            </Dialog.Content>

        </Dialog>
    )
}