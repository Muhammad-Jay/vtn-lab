# Dialog

The `Dialog` component provides a consistent modal experience across the platform while leveraging the design system through the `Container` component.

It is built on top of **Radix Dialog** for accessibility and focus management, while the `Container` component is responsible for sizing, layout, spacing, surfaces, and responsiveness.

## Features

- Accessible (Radix UI)
- Controlled & uncontrolled modes
- Compound component API
- Responsive sizing through `Container`
- Configurable overlay blur
- Configurable animations
- Automatic layout composition
- Semantic header/content/footer
- Supports custom headers and footers
- Works with your design system

---

# Installation

```tsx
import { Dialog } from "@/components/dialog";
```

---

# Basic Usage

```tsx
<Dialog
    open={open}
    onOpenChange={setOpen}
    title="Create Organization"
    subtitle="Organizations help you manage projects."
>
    <Dialog.Content>

        Your dialog content...

    </Dialog.Content>
</Dialog>
```

---

# Controlled Dialog

```tsx
const [open, setOpen] = React.useState(false);

return (

    <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Delete User"
    >

        <Dialog.Content>

            Are you sure?

        </Dialog.Content>

    </Dialog>

);
```

---

# Uncontrolled Dialog

```tsx
<Dialog defaultOpen>

    <Dialog.Content>

        Welcome!

    </Dialog.Content>

</Dialog>
```

---

# Using a Trigger

```tsx
<Dialog>

    <Dialog.Trigger>

        <Button>
            Open Dialog
        </Button>

    </Dialog.Trigger>

    <Dialog.Content>

        Dialog Content

    </Dialog.Content>

</Dialog>
```

---

# Complete Example

```tsx
<Dialog
    title="Create Project"
    subtitle="Projects organize related work."
>

    <Dialog.Trigger>

        <Button>
            Create
        </Button>

    </Dialog.Trigger>

    <Dialog.Content>

        <ProjectForm />

    </Dialog.Content>

    <Dialog.Footer>

        <Button
            variant="ghost"
        >
            Cancel
        </Button>

        <Button>

            Create Project

        </Button>

    </Dialog.Footer>

</Dialog>
```

---

# Custom Header

Passing the `header` prop completely replaces the default title/subtitle.

```tsx
<Dialog
    header={<CustomHeader />}
>

    <Dialog.Content>

        ...

    </Dialog.Content>

</Dialog>
```

---

# Using Dialog.Header

Instead of passing a header prop, you may use the compound component.

```tsx
<Dialog>

    <Dialog.Header>

        <Avatar />

        <Heading>
            Invite Member
        </Heading>

    </Dialog.Header>

    <Dialog.Content>

        ...

    </Dialog.Content>

</Dialog>
```

---

# Custom Footer

```tsx
<Dialog>

    <Dialog.Content>

        ...

    </Dialog.Content>

    <Dialog.Footer>

        <Button variant="ghost">

            Cancel

        </Button>

        <Button>

            Save

        </Button>

    </Dialog.Footer>

</Dialog>
```

If no footer is provided, the footer section is omitted entirely.

---

# Content

Dialog content should normally be placed inside `Dialog.Content`.

```tsx
<Dialog.Content>

    ...

</Dialog.Content>
```

If `Dialog.Content` is omitted, any children that are not structural components are automatically treated as the dialog body.

Example:

```tsx
<Dialog
    title="Hello"
>

    Some text

    <Input />

</Dialog>
```

is equivalent to

```tsx
<Dialog>

    <Dialog.Content>

        Some text

        <Input />

    </Dialog.Content>

</Dialog>
```

---

# Container Customization

The dialog layout is powered entirely by the `Container` component.

Every `ContainerProps` property can be overridden using `containerProps`.

```tsx
<Dialog
    containerProps={{
        surface: "glass-2",

        radius: "3xl",

        padding: "2xl",

        width: {
            base: "calc(100vw - 2rem)",
            lg: 900,
        },
    }}
>
```

This is the preferred way to customize the dialog.

---

# Size Presets

The `size` prop simply applies a predefined `Container` configuration.

```tsx
<Dialog size="sm" />

<Dialog size="md" />

<Dialog size="lg" />

<Dialog size="xl" />

<Dialog size="full" />
```

Since the Container owns layout, any preset can be overridden through `containerProps`.

Example:

```tsx
<Dialog
    size="lg"
    containerProps={{
        width: 960,
    }}
>
```

---

# Overlay Blur

```tsx
<Dialog blur />

<Dialog blur="sm" />

<Dialog blur="md" />

<Dialog blur="lg" />

<Dialog blur={false} />
```

---

# Animations

```tsx
<Dialog animation="scale" />

<Dialog animation="fade" />

<Dialog animation="slide-up" />

<Dialog animation="slide-down" />

<Dialog animation="none" />
```

---

# Close Button

Hide the default close button.

```tsx
<Dialog
    showCloseButton={false}
>
```

---

# Prevent Closing

Prevent overlay click.

```tsx
<Dialog
    closeOnOverlayClick={false}
>
```

Prevent Escape.

```tsx
<Dialog
    closeOnEscape={false}
>
```

---

# Overlay Customization

```tsx
<Dialog
    overlayClassName="bg-red-500/30"

    overlayStyle={{
        backdropFilter: "blur(20px)",
    }}
>
```

---

# Compound Components

The dialog exposes four semantic compound components.

```tsx
Dialog.Trigger

Dialog.Header

Dialog.Content

Dialog.Footer
```

These components are markers that define the dialog structure.

---

# Rendering Priority

## Header

The dialog resolves the header using the following priority:

1. `header` prop
2. `<Dialog.Header>`
3. `title` + `subtitle`

---

## Footer

Footer priority:

1. `footer` prop
2. `<Dialog.Footer>`
3. No footer

---

## Content

Content priority:

1. `<Dialog.Content>`
2. Any remaining children

---

# Props

## Dialog

| Prop | Type | Default |
|------|------|---------|
| open | boolean | — |
| defaultOpen | boolean | false |
| onOpenChange | (open) => void | — |
| title | ReactNode | — |
| subtitle | ReactNode | — |
| header | ReactNode | — |
| footer | ReactNode | — |
| size | DialogSize | "md" |
| animation | DialogAnimation | "scale" |
| blur | DialogBlur | "md" |
| showCloseButton | boolean | true |
| closeOnOverlayClick | boolean | true |
| closeOnEscape | boolean | true |
| containerProps | Partial<ContainerProps> | — |
| overlayProps | HTMLAttributes | — |
| overlayStyle | CSSProperties | — |
| overlayClassName | string | — |

---

# Best Practices

- Use `title` and `subtitle` for standard dialogs.
- Use `Dialog.Header` or the `header` prop for advanced layouts.
- Use `containerProps` for all sizing and visual customization.
- Prefer semantic `size` presets before overriding width.
- Keep action buttons inside `Dialog.Footer`.
- Use `Dialog.Trigger` for uncontrolled dialogs.
- Use `open` and `onOpenChange` when dialog state is managed externally.