export interface OrganizationMock {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    logoUrl: string | null;
}

export const MOCK_ORGANIZATIONS: OrganizationMock[] = [
    {
        id: "4a3b2c1d-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
        name: "Starlight Digital",
        slug: "starlight-digital",
        description: "Next-generation cloud orchestration and digital infrastructure solutions.",
        logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=starlight"
    },
    {
        id: "8f7e6d5c-4b3a-2f1e-0d9c-8b7a6f5e4d3c",
        name: "Vortex Labs",
        slug: "vortex-labs",
        description: "Advanced machine learning pipelines and predictive data modeling frameworks.",
        logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=vortex"
    },
    {
        id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        name: "Chronos AI",
        slug: "chronos-ai",
        description: "Automated real-time scheduling platforms engineered for distributed engineering teams.",
        logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=chronos"
    },
    {
        id: "c9b8a7f6-e5d4-c3b2-a10f-9e8d7c6b5a4f",
        name: "Echo Horizon",
        slug: "echo-horizon",
        description: "Decentralized audio streaming networks built securely on top of edge infrastructure.",
        logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=echo"
    },
    {
        id: "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3f2e1d0c",
        name: "Pulse Analytics",
        slug: "pulse-analytics",
        description: "Aggregated user experience reporting tools featuring low-latency telemetry processing.",
        logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=pulse"
    },
    {
        id: "7d6c5b4a-3f2e-1d0c-9f8e-7d6c5b4a3f2e",
        name: "Aura Design Systems",
        slug: "aura-design",
        description: null, // Testing a null description scenario
        logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=aura"
    }
];