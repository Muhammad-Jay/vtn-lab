import { Menu } from "@repo/ui/menus";
import {
    User,
    Settings,
    LogOut,
    CreditCard,
    Layers,
    Globe,
    Palette,
    HelpCircle,
    Sparkles
} from "lucide-react";

export default function ProfileWidget() {
    return (
        <Menu>
            <Menu.Trigger
                hideLabel="lg"
                label="Personal Workspace"
            />

            <Menu.Content scroll={true}>
                {/* Section 1: Identity & Settings */}
                <Menu.Group>
                    <Menu.Item leading={<User size={16} />}>
                        My Profile
                    </Menu.Item>
                    <Menu.Item leading={<Settings size={16} />}>
                        Account Settings
                    </Menu.Item>
                    <Menu.Item leading={<CreditCard size={16} />}>
                        Billing & Subscription
                    </Menu.Item>
                </Menu.Group>

                <Menu.Separator />

                {/* Section 2: Management & Submenus */}
                <Menu.Group >
                    <Menu.Item leading={<Layers size={16} />}>
                        Workspaces
                    </Menu.Item>

                    {/* Preferences Submenu */}
                    <Menu.Sub>
                        <Menu.Sub.Trigger leading={<Palette size={16} />}>
                            Interface Theme
                        </Menu.Sub.Trigger>
                        <Menu.Sub.Content>
                            <Menu.Item>Light Mode</Menu.Item>
                            <Menu.Item>Dark Mode</Menu.Item>
                            <Menu.Item>Sync with System</Menu.Item>
                        </Menu.Sub.Content>
                    </Menu.Sub>

                    {/* Language Submenu */}
                    <Menu.Sub>
                        <Menu.Sub.Trigger leading={<Globe size={16} />}>
                            Language
                        </Menu.Sub.Trigger>
                        <Menu.Sub.Content>
                            <Menu.Item>English (US)</Menu.Item>
                            <Menu.Item>Deutsch</Menu.Item>
                            <Menu.Item>Français</Menu.Item>
                            <Menu.Item>日本語</Menu.Item>
                        </Menu.Sub.Content>
                    </Menu.Sub>
                </Menu.Group>

                <Menu.Separator />

                {/* Section 3: Integrations & Help */}
                <Menu.Group>
                    <Menu.Item leading={<Sparkles size={16} />}>
                        What's New
                    </Menu.Item>
                    <Menu.Item leading={<HelpCircle size={16} />}>
                        Help & Support Docs
                    </Menu.Item>
                </Menu.Group>

                <Menu.Separator />

                {/* Section 4: Exit Actions (Standard non-destructive styling) */}
                <Menu.Group>
                    <Menu.Item leading={<LogOut size={16} />} shortcut="⌥⇧Q">
                        Log Out
                    </Menu.Item>
                </Menu.Group>
            </Menu.Content>
        </Menu>
    );
}