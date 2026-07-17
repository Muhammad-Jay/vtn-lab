import type { LucideIcon } from "lucide-react";

export type AuthView = "sign-in" | "sign-up";

export interface OAuthProviderConfig {
    id: string;
    name: string;
    color: string;
    icon: React.ComponentType<{
        color?: string;
        size?: number | string;
        className?: string;
    }>;
}

export interface FeatureItem {
    icon: LucideIcon;
    title: string;
    description: string;
}
