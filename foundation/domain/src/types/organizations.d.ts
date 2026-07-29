export type Organization = {
    id: string;
    name: string;
    description?: string;
    slug: string;
    logoUrl?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type Organizations = {
    organizations: Organization[];
};

// Pick only the fields needed for creation
export type NewOrganization = Pick<Organization, "name" | "description" | "logoUrl">;

// Omit the read-only fields, and make the rest optional (Partial) for a PATCH request
export type UpdateOrganizationData = Partial<
    Omit<Organization, "id" | "createdAt" | "updatedAt">
>;