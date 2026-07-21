export type Organization = {
    id: string;
    name: string;
    description?: string;
    slug: string;
    logoUrl?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type Organizations = Organization[];