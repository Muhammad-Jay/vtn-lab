"use client";

import {Container} from "@repo/ui/views";

export function RightSectionContent() {

    return (
        <Container
            surface={"none"}
            border={"none"}
            width={"40dvw"}
            height={"full"}
            overflow={"hidden"}
            padding={"sm"}
            direction={"column"}
            gap={"sm"}
            align={"center"}
            justify={"start"}
        >

            <Container
                surface={"section"}
                radius={"xl"}
                border={"none"}
                elevation={"0"}
                width={"full"}
                minHeight={"100%"}
                direction={"row"}
                align={"center"}
                justify={"between"}

            >

            </Container>

        </Container>
    )
}