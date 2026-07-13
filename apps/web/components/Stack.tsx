import * as React from "react";
import { Stack } from "@repo/ui/layouts";
import {Button} from "@repo/ui/primitives";
import {Check} from "lucide-react";

export function UserProfileCard() {
    return (
        <Stack
            padding="5"
            gap="5"
            divider
            className="max-w-sm rounded-xl border border-border bg-card text-card-foreground shadow-sm"
        >
            {/* Top Section: Profile Header Block (Row Alignment) */}
            <Stack direction="row" align="center" gap="3" fullWidth>
                <div className="size-10 shrink-0 rounded-full bg-muted flex items-center justify-center font-semibold text-sm">
                    JD
                </div>

                {/* Nested implicit column stack for text lines */}
                <Stack gap="1" grow>
                    <h3 className="text-sm font-semibold leading-none">Jane Doe</h3>
                    <p className="text-xs text-muted-foreground">Senior Platform Architect</p>
                </Stack>

                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Online
                </span>
            </Stack>

            {/* Bottom Section: Card Context Actions (Space-Between Row) */}
            <Stack direction="row" align="center" justify="between" fullWidth>

                <Button.Success
                    icon={<Check/>}
                    hideContent={"2xl"}
                    showDefaultIcon={true}
                    animate={true}
                    center={true}/>

                <Button.Primary
                    icon={<Check/>}
                    hideContent={"md"}
                    showDefaultIcon={true}
                    animate={true}
                    center={true}>
                    Manage Access
                </Button.Primary>
            </Stack>
        </Stack>
    );
}