"use client";

import { Button, Dialog, Field, Text, toast } from "@repo/ui/primitives";
import { Plus, Building2, Globe2 } from "lucide-react";
import { Container } from "@repo/ui/views";
import {useCreateOrganization} from "../../../mutations/createOrg";
import {useState} from "react";
import {NewOrganization} from "@foundation/domain";

/*
* TODO(UI):
*  improve the dialog and add the necessary fields needed to create a new organization.
*  */

export function NewOrganizationDialog() {
    const [formData, setFormData] = useState<NewOrganization>({
        name: "",
        description: undefined,
        logoUrl: undefined,
    });

    const { mutate, isPending } = useCreateOrganization({
        errorMessage: true,
        successMessage: true,
        onSuccess: (data) => {
            setFormData({ name: "", description: undefined, logoUrl: undefined });
            console.log("New organization created successfully: ", data);
            toast.success("Organization created successfully", {
                description: data.name,
                position: "top-right",
            })
        },
        onError: (error) => {
            console.error("Failed to create organization:", error.message);
            toast.error("Failed to create organization", {
                description: error.message,
                position: "top-right",
            })
        },
    });

    const handleSubmit = () => {
        if (!formData.name) {
            return;
        }

        mutate(formData);
    };

    return (
        <Dialog
            animation="fade"
            blur="lg"
            overlayProps={{
                className: "blur-xl!"
            }}
            containerProps={{
                width: 650,
                surface: "liquid-3",
                elevation: "3",
                border: "strong",
                radius: "2xl",
                height: "auto",
                maxHeight: "85vh",
                overflow: "scroll",
                direction: "column",
                justify: "between",
                gap: "none",
                padding: "sm",
                margin: "none"
            }}
        >
            {/* _________Trigger _______ */}
            <Dialog.Trigger asChild>
                <Button.Primary
                    className="p-2.5!"
                    hideContent="md"
                    leading={<Plus className="size-4" />}
                    size="lg"
                >
                    New Organization
                </Button.Primary>
            </Dialog.Trigger>

            {/* _________ Content _______ */}
            <Dialog.Content>
                <Container
                    surface="none"
                    padding="xl"
                    margin="none"
                    width="100%"
                    height="100%"
                    align="stretch"
                    justify="start"
                    gap="xl"
                    direction="column"
                    overflow="scroll"
                    hideScrollbar
                >
                    <div className="flex flex-col gap-1.5 mb-2">
                        <Text.H4>Create Organization</Text.H4>
                        <Text.Muted className="text-sm">
                            Configure the base identity and infrastructure region for your new workspace.
                        </Text.Muted>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Field.Input
                            label="Organization Name"
                            placeholder="e.g., Quantum Dynamics"
                            fullwidth={true}
                            value={formData.name}
                            onChange={(e) => {
                                setFormData(prevState => ({...prevState, name: e.target.value}));
                            }}
                            startAdornment={<Building2 className="size-4 text-text-muted" />}
                            helper="This will be the public-facing name of your organization."
                            labelplacement="top"
                        />

                        <Field.Input
                            label="Workspace Slug"
                            placeholder="quantum-dynamics"
                            fullwidth={true}
                            startAdornment={<span className="text-text-muted text-sm pr-1">app.com/</span>}
                            helper="A unique, URL-friendly identifier. Cannot be changed later."
                            labelplacement="top"
                        />

                        <Field.TextArea
                            fullwidth={true}
                            labelplacement="top"
                            label="Description"
                            value={formData.description}
                            onChange={(e) => {
                                setFormData(prevState => ({...prevState, description: e.target.value}));
                            }}
                            placeholder="Briefly describe your organization's primary objective..."
                            helper="Optional. This helps team members understand the workspace context."
                            slotProps={{
                                textarea: { rows: 4 }
                            }}
                        />

                        <Field.Input
                            label="Logo URL"
                            placeholder="quantum-dynamics.app.com"
                            fullwidth={true}
                            value={formData.logoUrl}
                            onChange={(e) => {
                                setFormData(prevState => ({...prevState, logoUrl: e.target.value}));
                            }}
                            startAdornment={<span className="text-text-muted text-sm pr-1">app.com/</span>}
                            helper="A unique, URL-friendly identifier. Cannot be changed later."
                            labelplacement="top"
                        />

                        <Field.Select
                            fullwidth={true}
                            labelplacement="top"
                            label="Data Residency Region"
                            placeholder="Select a region..."
                            startAdornment={<Globe2 className="size-4 text-text-muted" />}
                            helper="Determines where your primary databases and compliance records are stored."
                            options={[
                                { value: "us-east", label: "US East (N. Virginia)" },
                                { value: "eu-central", label: "EU Central (Frankfurt)" },
                                { value: "af-west", label: "Africa West (Lagos)" },
                            ]}
                        />
                    </div>
                </Container>
            </Dialog.Content>

            {/* _________ Footer _______ */}
            <Dialog.Footer>
                <Container
                    surface="surface-2"
                    border="default"
                    radius="none"
                    padding="lg"
                    direction="row"
                    align="center"
                    justify="end"
                    gap="md"
                    width="full"
                    className="border-t border-x-0 border-b-0"
                >
                    <Button.Ghost className={"bg-transparent! text-primary!"} size="lg">
                        Cancel
                    </Button.Ghost>

                    <Button.Primary
                        size="lg"
                        onClick={handleSubmit}
                        loading={isPending}
                        loadingPosition={"leading"}
                        loadingText={"Creating..."}
                    >
                        Create Workspace
                    </Button.Primary>
                </Container>
            </Dialog.Footer>
        </Dialog>
    );
}