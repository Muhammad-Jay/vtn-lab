"use client";

import {Container} from "@repo/ui/views";
import {MOCK_ORGANIZATIONS} from "../../constants/test";
import {AutoGrid} from "@repo/ui/layouts";
import {Field, Text} from "@repo/ui/primitives";
import {ListHeader} from "./ListHeader";

export function OrganizationsList() {

    return (
        <Container
            surface={"none"}
            border={"none"}
            width={"full"}
            maxWidth={"60dvw"}
            height={"full"}
            padding={"sm"}
            overflow={"scroll"}
            direction={"column"}
            gap={"sm"}
            align={"center"}
            justify={"start"}
        >
            {/* Header */}
            <ListHeader/>

            <Container
                surface={"none"}
                radius={"xl"}
                border={"none"}
                padding={{ base: "md", md: "sm", sm: "xs" }}
                gap={"md"}
                overflow={"scroll"}
                elevation={"none"}
                width={"full"}
                height={"100%"}
                direction={"column"}
                align={"center"}
                justify={"start"}

            >

                <AutoGrid
                    scroll
                    mode="fit"
                    className={"w-full"}
                    isEmpty={false}
                    emptyState={<p>is empty</p>}
                    columns={{ base: 1, xl: 12 }}
                >

                    {MOCK_ORGANIZATIONS.map(({ id, name, description, slug, logoUrl }) => (

                       <AutoGrid.Item
                           key={id}
                           span={{base: 1 }}
                       >
                           <Container
                               surface={"surface-1"}
                               interaction={"hover"}
                               border={"subtle"}
                               hoverBorder={"focus"}
                               radius={"xl"}
                               gap={"sm"}
                               direction={"column"}
                               padding={"md"}
                               width={"full"}
                               height={200}

                           >

                               <Text.H4>{name}</Text.H4>

                               <Text.Muted>
                                   {description}
                               </Text.Muted>

                               <Field.Select
                                   labelplacement={"left"}
                                   label="Country"
                                   options={[
                                       { value: "ng", label: "Nigeria" },
                                       { value: "us", label: "United States" },
                                   ]}
                               />
                           </Container>
                       </AutoGrid.Item>
                    ))}
                </AutoGrid>
            </Container>

        </Container>
    )
}