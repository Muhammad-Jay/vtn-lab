import {
    SiGithub,
    SiGoogle,
    SiAtlassian,
    SiApple
} from '@icons-pack/react-simple-icons';
import React from "react";

interface OAuthProvider {
    id: string;
    name: string;
    color: string;
    icon: React.ComponentType<{ color?: string; size?: number | string }>;
}

export const OAUTH_PROVIDERS: OAuthProvider[] = [
    {
        id: 'google',
        name: 'Google',
        color: '#4285F4', // Official brand color
        icon: SiGoogle,
    },
    {
        id: 'github',
        name: 'GitHub',
        color: '#181717',
        icon: SiGithub,
    },
    {
        id: 'apple',
        name: 'Apple',
        color: '#000000',
        icon: SiApple,
    },
    {
        id: 'slack',
        name: 'Slack',
        color: '#4A154B',
        icon: ({ color, size = 24 }: { color?: string; size?: number | string }) => (
            <svg
                className={"p-0! m-0!"}
                viewBox="0 0 24 24"
                width={size}
                height={size}
                fill={color || '#4A154B'}
            >
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.522A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.52 2.521v2.522h-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.522-2.522V8.824a2.528 2.528 0 0 1 2.522-2.52h5.043zm10.135 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522V5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.761 10.135a2.528 2.528 0 0 1 2.52 2.522 2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.522h2.522zm0-1.262a2.528 2.528 0 0 1-2.522-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52h-5.043z" />
            </svg>
        ),
    },
    {
        id: 'atlassian',
        name: 'Atlassian',
        color: '#0052CC',
        icon: SiAtlassian,
    },
];
