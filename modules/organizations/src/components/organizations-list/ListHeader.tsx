"use client";

import {Container} from "@repo/ui/views";
import {Field} from "@repo/ui/primitives";
import {NewOrganizationDialog} from "./dialog/NewOrganizationDialog";

export function ListHeader() {
    return (
        <Container
            surface={"surface-1"}
            border={"none"}
            radius={"xl"}
            elevation={"none"}
            width={"full"}
            height={100}
            direction={"row"}
            align={"center"}
            justify={"between"}

        >
            <Container
                surface={"none"}
                width={"full"}
                border={"none"}
                align={"center"}
                justify={"center"}
                padding={"lg"}
            >

                <Field.Input
                    type={"text"}
                    variant={"ghost"}
                    border={"none"}
                />
            </Container>

            <Container
                surface={"none"}
                width={"fit"}
                padding={"md"}
                border={"none"}
                align={"center"}
                justify={"center"}
            >

              <NewOrganizationDialog/>
            </Container>

        </Container>
    )
}