"use client";

import { Stack } from "@repo/ui/layouts";
import { OAUTH_PROVIDERS } from "../constants/oauth-providers";
import { OAuthButton } from "./OAuthButton";

export function OAuthProviderList() {

    return (
        <Stack gap="1" fullWidth>
            {OAUTH_PROVIDERS.map((provider) => (
                <OAuthButton
                    key={provider.id}
                    name={provider.name}
                    color={provider.color}
                    icon={provider.icon}
                />
            ))}
        </Stack>
    );
}
