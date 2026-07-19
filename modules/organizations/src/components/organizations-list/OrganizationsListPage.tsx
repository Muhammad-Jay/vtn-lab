"use client";

import {Container} from "@repo/ui/views";
import {OrganizationsList} from "./OrganizationsList";
import {RightSectionContent} from "./RightSectionContent";

export function OrganizationsListPage() {

    return (
        <Container
            surface={"surface-0"}
            width={"screen"}
            height={"screen"}
            radius={"2xl"}
            border={"strong"}
            padding={"sm"}
            hideScrollbar
            overflow={"hidden"}
            direction={"row"}
            align={"center"}
            justify={"start"}
            gap={"none"}
        >

            {/* Left Section: Organization list or empty state. */}
            <OrganizationsList/>

            <RightSectionContent/>
        </Container>
    )
}