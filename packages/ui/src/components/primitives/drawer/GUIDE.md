# Drawer

A fully composable, responsive, accessible Drawer component built on top of **Base UI Drawer** with support for responsive placement, responsive sizing, nested drawers, slot-based styling, and future animation customization.

---

# Features

- ✅ Compound component API
- ✅ Responsive placement
- ✅ Responsive sizing
- ✅ Accessible (powered by Base UI)
- ✅ Nested drawers
- ✅ Interactive or modal mode
- ✅ Configurable backdrop
- ✅ Slot-based styling
- ✅ Slot-based prop overrides
- ✅ Built on Container components
- ✅ Future animation support
- ✅ Swipe handle support
- ✅ Framer Motion compatible

---

# Installation

```tsx
import { Drawer } from "@/components/Drawer";
```

---

# Basic Usage

```tsx
<Drawer.Root>

    <Drawer.Trigger>
        Open Drawer
    </Drawer.Trigger>

    <Drawer.Portal>

        <Drawer.Overlay />

        <Drawer.Content>

            <Drawer.Header>

                <Drawer.Title>
                    Settings
                </Drawer.Title>

                <Drawer.Description>
                    Configure your preferences.
                </Drawer.Description>

            </Drawer.Header>

            <Drawer.Body>

                Content goes here.

            </Drawer.Body>

            <Drawer.Footer>

                Footer Actions

            </Drawer.Footer>

        </Drawer.Content>

    </Drawer.Portal>

</Drawer.Root>
```

---

# Components

## Drawer.Root

Root provider that manages drawer state and configuration.

### Props

| Prop | Type | Default |
|------|------|---------|
| placement | Responsive<DrawerPlacement> | `{ base: "bottom", md: "right" }` |
| size | Responsive<DrawerSize> | `{ base: "full", md: "lg" }` |
| animation | DrawerAnimation | `"default"` |
| backdrop | DrawerBackdrop | `"default"` |
| overlay | DrawerOverlayOptions | `{}` |
| styles | DrawerSlots | — |
| slotProps | DrawerSlotProps | — |
| ...BaseUI Root Props | | |

Example

```tsx
<Drawer.Root
    placement={{
        base: "bottom",
        lg: "right",
    }}
    size={{
        base: "full",
        lg: "xl",
    }}
>
```

---

## Drawer.Trigger

Button that opens the drawer.

```tsx
<Drawer.Trigger>

    Open

</Drawer.Trigger>
```

Supports every Base UI Trigger prop.

---

## Drawer.Portal

Portal that renders the drawer outside the normal DOM hierarchy.

```tsx
<Drawer.Portal>

    ...

</Drawer.Portal>
```

---

## Drawer.Overlay

Backdrop behind the drawer.

```tsx
<Drawer.Overlay />
```

Uses:

- Drawer backdrop
- Blur
- Motion animation

---

## Drawer.Content

Main drawer container.

```tsx
<Drawer.Content>

    ...

</Drawer.Content>
```

Supports every Base UI Popup prop plus

| Prop | Type |
|------|------|
| containerProps | ContainerProps |

---

## Drawer.Header

Header container.

```tsx
<Drawer.Header>

    ...

</Drawer.Header>
```

### Props

| Prop | Type | Default |
|------|------|---------|
| sticky | boolean | true |
| ...ContainerProps | | |

---

## Drawer.Body

Scrollable body.

```tsx
<Drawer.Body>

    ...

</Drawer.Body>
```

### Props

| Prop | Type | Default |
|------|------|---------|
| scroll | boolean | true |
| fill | boolean | true |
| ...ContainerProps | | |

---

## Drawer.Footer

Footer container.

```tsx
<Drawer.Footer>

    ...

</Drawer.Footer>
```

### Props

| Prop | Type | Default |
|------|------|---------|
| sticky | boolean | true |
| ...ContainerProps | | |

---

## Drawer.Title

Accessible drawer title.

```tsx
<Drawer.Title>

    My Drawer

</Drawer.Title>
```

---

## Drawer.Description

Accessible drawer description.

```tsx
<Drawer.Description>

    Description here.

</Drawer.Description>
```

---

## Drawer.Close

Closes the drawer.

```tsx
<Drawer.Close>

    Close

</Drawer.Close>
```

---

## Drawer.SwipeHandle

Mobile swipe handle.

```tsx
<Drawer.SwipeHandle />
```

---

# Responsive Placement

```tsx
<Drawer.Root

    placement={{
        base: "bottom",
        md: "right",
    }}

>
```

Supported values

```ts
"left"
"right"
"top"
"bottom"
```

---

# Responsive Size

```tsx
<Drawer.Root

    size={{
        base: "full",
        md: "lg",
    }}

>
```

Available sizes

```ts
"xs"
"sm"
"md"
"lg"
"xl"
"2xl"
"full"
```

---

# Backdrop

```tsx
<Drawer.Root

    backdrop="default"

>
```

Available values

```ts
"default"
"transparent"
"none"
```

---

# Interactive Background

Disable modal behaviour while keeping the drawer open.

```tsx
<Drawer.Root

    overlay={{
        interactive: true,
    }}

>
```

Now the background remains clickable.

---

# Backdrop Blur

```tsx
<Drawer.Root

    overlay={{
        blur: 20,
    }}

>
```

---

# Styling

Every slot can be styled.

```tsx
<Drawer.Root

    styles={{

        overlay: "bg-black/70",

        popup: "shadow-2xl",

        header: "border-b",

        body: "px-8",

        footer: "justify-end",

    }}

>
```

---

# Slot Props

Every internal component can receive props.

```tsx
<Drawer.Root

    slotProps={{

        popup: {

            radius: "xl",

            shadow: "xl",

        },

        header: {

            padding: "lg",

        },

        body: {

            padding: "xl",

        },

    }}

>
```

---

# Nested Drawers

Supported out of the box.

```tsx
<Drawer.Root>

    ...

    <Drawer.Root>

        ...

    </Drawer.Root>

</Drawer.Root>
```

---

# Animation

```tsx
<Drawer.Root

    animation="default"

>
```

Available values

```ts
"default"
"fade"
"slide"
"scale"
```

Future animation implementations can be added without changing the API.

---

# Slot Names

```ts
portal
overlay
popup
container
content
header
body
footer
title
description
swipeHandle
close
```

---

# Type Reference

## DrawerPlacement

```ts
type DrawerPlacement =
    | "left"
    | "right"
    | "top"
    | "bottom";
```

---

## DrawerSize

```ts
type DrawerSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "full";
```

---

## DrawerBackdrop

```ts
type DrawerBackdrop =
    | "default"
    | "transparent"
    | "none";
```

---

## DrawerAnimation

```ts
type DrawerAnimation =
    | "default"
    | "fade"
    | "slide"
    | "scale";
```

---

## DrawerOverlayOptions

```ts
interface DrawerOverlayOptions {

    blur?: number;

    interactive?: boolean;

}
```

---

# Complete Example

```tsx
<Drawer.Root

    placement={{
        base: "bottom",
        lg: "right",
    }}

    size={{
        base: "full",
        lg: "lg",
    }}

    overlay={{
        blur: 16,
    }}

>

    <Drawer.Trigger>

        Open Drawer

    </Drawer.Trigger>

    <Drawer.Portal>

        <Drawer.Overlay />

        <Drawer.Content>

            <Drawer.Header>

                <Drawer.Title>

                    Account Settings

                </Drawer.Title>

                <Drawer.Description>

                    Update your account information.

                </Drawer.Description>

            </Drawer.Header>

            <Drawer.Body>

                <AccountForm />

            </Drawer.Body>

            <Drawer.Footer>

                <Drawer.Close>

                    Cancel

                </Drawer.Close>

                <Button>

                    Save

                </Button>

            </Drawer.Footer>

        </Drawer.Content>

    </Drawer.Portal>

</Drawer.Root>
```

---

# Export

```tsx
import {
    Drawer,
} from "@/components/Drawer";
```

or

```tsx
import type {
    DrawerRootProps,
    DrawerPlacement,
    DrawerSize,
    DrawerAnimation,
    DrawerBackdrop,
} from "@/components/Drawer";
```