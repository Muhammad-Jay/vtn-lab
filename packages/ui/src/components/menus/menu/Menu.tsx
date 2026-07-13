"use client";

import * as React from "react";

import {
    DropdownMenu,
} from "../../ui/dropdown-menu";

import { MenuRootProps } from "./types";

import { MenuContent } from "./Menu.Content";
import { MenuItem } from "./Menu.Item";
import { MenuGroup } from "./Menu.Group";
import { MenuSub } from "./Menu.Sub";
import { MenuLabel } from "./Menu.Label";
import { MenuSeparator } from "./Menu.Separator";
import { MenuTrigger } from "./Menu.Trigger";

const Root = ({
                  children,
                  ...props
              }: MenuRootProps) => {
    return (
        <DropdownMenu {...props}>
            {children}
        </DropdownMenu>
    );
};

export const Menu = Object.assign(Root, {
    Trigger: MenuTrigger,
    Content: MenuContent,
    Item: MenuItem,
    Group: MenuGroup,
    Label: MenuLabel,
    Separator: MenuSeparator,
    Sub: MenuSub,
});