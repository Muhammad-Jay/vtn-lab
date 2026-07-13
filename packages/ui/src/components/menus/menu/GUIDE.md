# Menu Component

The `Menu` component is a wrapper around the shadcn/ui Dropdown Menu, providing a simpler and more consistent API while preserving the full functionality of Radix UI.

It supports:

- Action menus
- Context menus
- Checkbox menus
- Radio groups
- Nested submenus
- Keyboard shortcuts
- Icons
- Responsive triggers

---

# Components

```tsx
<Menu>
    <Menu.Trigger />
    <Menu.Content>
        <Menu.Item />
        <Menu.Separator />
        <Menu.Item />
    </Menu.Content>
</Menu>
```

Available subcomponents

```tsx
Menu
Menu.Trigger
Menu.Content
Menu.Item
Menu.CheckboxItem
Menu.RadioGroup
Menu.RadioItem
Menu.Sub
Menu.SubTrigger
Menu.SubContent
Menu.Label
Menu.Separator
```

---

# Menu Props

## Menu

Root component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| All `DropdownMenu` props | — | — | All Radix DropdownMenu root props are supported. |

Example

```tsx
<Menu modal={false}>
    ...
</Menu>
```

---

# Menu.Trigger Props

The trigger used to open the menu.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | Optional trigger label. |
| `icon` | `ReactNode` | — | Leading icon. |
| `trailingIcon` | `boolean` | `true` | Displays the dropdown chevron. |
| `hideLabel` | `"never" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"never"` | Hides the label below a breakpoint. |
| All `DropdownMenuTrigger` props | — | — | Native trigger props. |

---

## label

```tsx
<Menu.Trigger
    label="Actions"
/>
```

---

## icon

```tsx
<Menu.Trigger
    icon={<MoreHorizontal />}
    label="Options"
/>
```

---

## trailingIcon

Hide the dropdown chevron.

```tsx
<Menu.Trigger
    trailingIcon={false}
/>
```

---

## hideLabel

Hide the label below a breakpoint.

```tsx
<Menu.Trigger
    label="Account"
    hideLabel="md"
/>
```

---

# Menu.Content Props

Container for menu items.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "auto"` | `"sm"` | Width preset. |
| `scroll` | `boolean` | `false` | Enables internal scrolling. |
| `maxHeight` | `number \| string` | — | Maximum height before scrolling. |
| All `DropdownMenuContent` props | — | — | Native content props. |

---

## width

Available presets

```
xs
sm
md
lg
xl
auto
```

Example

```tsx
<Menu.Content
    width="lg"
/>
```

---

## scroll

```tsx
<Menu.Content
    scroll
/>
```

---

## maxHeight

```tsx
<Menu.Content
    scroll
    maxHeight={400}
/>
```

---

# Menu.Item Props

Standard clickable menu item.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `leading` | `ReactNode` | — | Leading icon. |
| `trailing` | `ReactNode` | — | Trailing content. |
| `shortcut` | `ReactNode` | — | Keyboard shortcut. |
| `variant` | `"default" \| "destructive" \| "success" \| "warning"` | `"default"` | Visual style. |
| All `DropdownMenuItem` props | — | — | Native menu item props. |

---

## leading

```tsx
<Menu.Item
    leading={<Copy />}
>
    Copy
</Menu.Item>
```

---

## trailing

```tsx
<Menu.Item
    trailing={<Badge>New</Badge>}
>
    Updates
</Menu.Item>
```

---

## shortcut

```tsx
<Menu.Item
    shortcut="⌘S"
>
    Save
</Menu.Item>
```

---

## variant

### default

```tsx
<Menu.Item>
    Rename
</Menu.Item>
```

---

### destructive

```tsx
<Menu.Item
    variant="destructive"
>
    Delete
</Menu.Item>
```

---

### success

```tsx
<Menu.Item
    variant="success"
>
    Publish
</Menu.Item>
```

---

### warning

```tsx
<Menu.Item
    variant="warning"
>
    Reset
</Menu.Item>
```

---

# Menu.CheckboxItem Props

Checkbox menu item.

| Prop | Type | Description |
|------|------|-------------|
| `leading` | `ReactNode` | Leading icon. |
| `trailing` | `ReactNode` | Trailing content. |
| All `DropdownMenuCheckboxItem` props | — | Native checkbox props. |

Example

```tsx
<Menu.CheckboxItem
    checked={enabled}
    onCheckedChange={setEnabled}
>
    Notifications
</Menu.CheckboxItem>
```

---

# Menu.RadioGroup Props

Container for radio items.

Supports all Radix RadioGroup props.

Example

```tsx
<Menu.RadioGroup
    value={theme}
    onValueChange={setTheme}
>
    ...
</Menu.RadioGroup>
```

---

# Menu.RadioItem Props

Single radio option.

| Prop | Type | Description |
|------|------|-------------|
| `leading` | `ReactNode` | Leading icon. |
| `trailing` | `ReactNode` | Trailing content. |
| All `DropdownMenuRadioItem` props | — | Native radio item props. |

Example

```tsx
<Menu.RadioItem value="dark">
    Dark
</Menu.RadioItem>
```

---

# Menu.SubTrigger Props

Trigger for nested menus.

| Prop | Type | Description |
|------|------|-------------|
| `leading` | `ReactNode` | Leading icon. |
| `trailing` | `ReactNode` | Trailing content. |
| All `DropdownMenuSubTrigger` props | — | Native submenu trigger props. |

Example

```tsx
<Menu.SubTrigger
    leading={<Folder />}
>
    Move To
</Menu.SubTrigger>
```

---

# Menu.SubContent Props

Container for submenu items.

Supports all `DropdownMenuSubContent` props.

Example

```tsx
<Menu.SubContent>
    <Menu.Item>
        Folder A
    </Menu.Item>

    <Menu.Item>
        Folder B
    </Menu.Item>
</Menu.SubContent>
```

---

# Menu.Label Props

Displays a non-interactive label.

Supports all `DropdownMenuLabel` props.

Example

```tsx
<Menu.Label>
    Workspace
</Menu.Label>
```

---

# Menu.Separator Props

Visual separator between groups.

Supports all `DropdownMenuSeparator` props.

Example

```tsx
<Menu.Separator />
```

---

# Examples

## Basic Menu

```tsx
<Menu>
    <Menu.Trigger
        icon={<MoreHorizontal />}
    />

    <Menu.Content>
        <Menu.Item>
            Edit
        </Menu.Item>

        <Menu.Item>
            Duplicate
        </Menu.Item>

        <Menu.Separator />

        <Menu.Item
            variant="destructive"
        >
            Delete
        </Menu.Item>
    </Menu.Content>
</Menu>
```

---

## Checkbox Menu

```tsx
<Menu>
    <Menu.Trigger label="View" />

    <Menu.Content>
        <Menu.CheckboxItem
            checked={showSidebar}
        >
            Sidebar
        </Menu.CheckboxItem>

        <Menu.CheckboxItem
            checked={showToolbar}
        >
            Toolbar
        </Menu.CheckboxItem>
    </Menu.Content>
</Menu>
```

---

## Radio Group

```tsx
<Menu>
    <Menu.Trigger label="Theme" />

    <Menu.Content>
        <Menu.RadioGroup
            value={theme}
        >
            <Menu.RadioItem value="light">
                Light
            </Menu.RadioItem>

            <Menu.RadioItem value="dark">
                Dark
            </Menu.RadioItem>

            <Menu.RadioItem value="system">
                System
            </Menu.RadioItem>
        </Menu.RadioGroup>
    </Menu.Content>
</Menu>
```

---

## Nested Menu

```tsx
<Menu>
    <Menu.Trigger />

    <Menu.Content>
        <Menu.Sub>
            <Menu.SubTrigger>
                Move To
            </Menu.SubTrigger>

            <Menu.SubContent>
                <Menu.Item>
                    Archive
                </Menu.Item>

                <Menu.Item>
                    Drafts
                </Menu.Item>
            </Menu.SubContent>
        </Menu.Sub>
    </Menu.Content>
</Menu>
```

---

## Responsive Trigger

```tsx
<Menu.Trigger
    icon={<MoreHorizontal />}
    label="Actions"
    hideLabel="lg"
/>
```

---

# Best Practices

Use `Menu.Item` for standard actions.

Use `Menu.CheckboxItem` for independent toggle options.

Use `Menu.RadioGroup` for mutually exclusive selections.

Use `Menu.Sub` for hierarchical menus.

Use `Menu.Label` to organize menu sections.

Use `Menu.Separator` to visually divide groups of actions.

Use `leading` for icons and `shortcut` for keyboard hints to improve discoverability.