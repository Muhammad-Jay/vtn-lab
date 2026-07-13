'use client';

import { Stack } from "@repo/ui/layouts";
import { Button, Field, Text } from "@repo/ui/primitives";
import { Background, Container } from "@repo/ui/views";
import { ArrowRight, Lock, Parentheses } from "lucide-react";

export function AuthPage() {


    return (
        <Container 
           widthValue={"100dvw"} 
           radius="xl" 
           overflow="scroll"
           heightValue={"100dvh"}
           padding={"none"} 
           className="flex items-center justify-center"
           border={"default"}
           variant="transparent">
             <Background.Main 
                        zIndex={10} 
                        interactive={true}
                        mode="page" />

            <Container 
              widthValue={"600px"}
               heightValue={"fit"} 
               center={true}
               className="z-10"
               padding={"xl"}
               shadow="lg"
               radius="2xl"
               border={"default"}
               variant="default">

                <Stack
                  direction="column"
                  gap="12"
                  grow
                  fullWidth
                  padding="3"
                  as={"div"}
                  justify="evenly"
                  align="center">

                     <Stack
                       direction="column"
                       gap="4"
                       padding="0"
                       grow
                       justify="between"
                       fullWidth
                       align="center">
                        <Text.Title align="center">
                            Welcome To VTN lab
                        </Text.Title>

                        <Text.Subtitle align="center">
                            Sign In to your Account
                        </Text.Subtitle>
                     </Stack>

                     <Stack
                       direction="column"
                       padding="0"
                       align="center"
                       className="items-center!"
                       fullWidth
                       grow
                       justify="between"
                       gap="3">

                        <Field.Input
                        label="Email"
                        type={"email"}
                    
                        placeholder="Enter your email"
                           startAdornment={<Parentheses/>}
                        />

<Field.Password
                        label="Email"
                    
                        placeholder="Enter your password"
                           startAdornment={<Parentheses/>}
                        />

<Field.Input
                        label="Email"
                        type={"email"}
                    
                        placeholder="Enter your email"
                           startAdornment={<Lock/>}
                           endAdornment={<Lock/>}
                        />

                         <Button.Default
                            trailing={<ArrowRight/>}
                            
                            widthValue={"100%"}
                            className="p-5!">
                            <Text.Subtitle color="secondary">
                                Sign In
                            </Text.Subtitle>
                         </Button.Default>
                     </Stack>
                </Stack>

            </Container>
        </Container>
    );
}