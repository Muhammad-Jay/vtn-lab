"use client";

import {Container} from "@repo/ui/views";
import {AuthForm} from "./AuthForm";

export function AuthenticationPage() {
    return (
        <Container
            variant={"glass"}
            border={"default"}
            radius={"xl"}
            overflow={"scroll"}
            center
            justifyCenter
            alignCenter
            widthValue={"100dvw"}
            minHeight={"100dvh"}
        >

            {/* Auth form */}
            <AuthForm/>
        </Container>
    )
}