# Stack

A flexible layout primitive for arranging elements vertically or horizontally with consistent spacing.

The `Stack` component is the foundation for building layouts throughout the design system. It abstracts common Flexbox patterns while using the unified spacing token scale shared across all layout components.

---

# Usage

```tsx
import { Stack } from "@/components/layout/stack";
```

Basic example:

```tsx
<Stack>
    <Button>Save</Button>
    <Button variant="secondary">Cancel</Button>
</Stack>
```

---

# Direction

Controls the layout flow.

```tsx
<Stack direction="column">
    ...
</Stack>

<Stack direction="row">
    ...
</Stack>
```

| Value | Description |
|--------|-------------|
| `column` | Vertical layout (default). |
| `row` | Horizontal layout. |

---

# Alignment

Controls cross-axis alignment.

```tsx
<Stack align="center">
    ...
</Stack>
```

| Value | CSS Equivalent |
|--------|----------------|
| `start` | `align-items: flex-start` |
| `center` | `align-items: center` |
| `end` | `align-items: flex-end` |
| `stretch` | `align-items: stretch` |
| `baseline` | `align-items: baseline` |

---

# Justify

Controls main-axis distribution.

```tsx
<Stack justify="between">
    ...
</Stack>
```

| Value | CSS Equivalent |
|--------|----------------|
| `start` | `justify-content: flex-start` |
| `center` | `justify-content: center` |
| `end` | `justify-content: flex-end` |
| `between` | `justify-content: space-between` |
| `around` | `justify-content: space-around` |
| `evenly` | `justify-content: space-evenly` |

---

# Gap

Controls spacing between children using the unified spacing scale.

```tsx
<Stack gap="6">
    ...
</Stack>
```

Available spacing tokens:

```ts
type SpacingToken =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "10"
    | "12"
    | "16"
    | "20"
    | "24";
```

---

# Padding

Applies uniform internal spacing.

```tsx
<Stack
    padding="6"
>
    ...
</Stack>
```

---

# Margin

Applies uniform outer spacing.

```tsx
<Stack
    margin="4"
>
    ...
</Stack>
```

---

# Wrap

Allows children to wrap onto multiple lines.

```tsx
<Stack
    direction="row"
    wrap
>
    ...
</Stack>
```

Equivalent to:

```css
flex-wrap: wrap;
```

---

# Grow

Makes the Stack expand to fill available space.

```tsx
<Stack
    grow
>
    ...
</Stack>
```

Equivalent to:

```css
flex: 1;
```

---

# Full Width

Expands the Stack to the full width of its parent.

```tsx
<Stack
    fullWidth
>
    ...
</Stack>
```

Equivalent to:

```css
width: 100%;
```

---

# Divider

Automatically inserts separators between children.

```tsx
<Stack
    divider
>
    <Text>Profile</Text>

    <Text>Security</Text>

    <Text>Billing</Text>
</Stack>
```

The divider orientation automatically matches the layout direction:

- Vertical stacks receive horizontal dividers.
- Horizontal stacks receive vertical dividers.

---

# Render Different Elements

Use the `as` prop to change the rendered element.

```tsx
<Stack
    as="section"
>
    ...
</Stack>
```

Examples:

```tsx
<Stack as="main">

<Stack as="section">

<Stack as="article">

<Stack as="header">

<Stack as="footer">

<Stack as="nav">
```

---

# Common Examples

## Vertical Form

```tsx
<Stack gap="6">

    <Field.Input
        label="Username"
    />

    <Field.Password
        label="Password"
    />

    <Button>
        Login
    </Button>

</Stack>
```

---

## Toolbar

```tsx
<Stack
    direction="row"
    align="center"
    justify="between"
>

    <Text.Title>
        Dashboard
    </Text.Title>

    <Button>
        New Project
    </Button>

</Stack>
```

---

## Wrapped Tags

```tsx
<Stack
    direction="row"
    gap="2"
    wrap
>

    <Badge>React</Badge>

    <Badge>TypeScript</Badge>

    <Badge>Tailwind</Badge>

    <Badge>Framer Motion</Badge>

</Stack>
```

---

## Card Content

```tsx
<Card>

    <Stack gap="4">

        <Text.H3>
            Project
        </Text.H3>

        <Text.Muted>
            Internal application
        </Text.Muted>

        <Button>
            Open
        </Button>

    </Stack>

</Card>
```

---

# API

## StackProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `React.ElementType` | `"div"` | Underlying rendered element. |
| `children` | `React.ReactNode` | — | Stack content. |
| `direction` | `"column" \| "row"` | `"column"` | Layout direction. |
| `align` | `StackAlign` | — | Cross-axis alignment. |
| `justify` | `StackJustify` | — | Main-axis alignment. |
| `gap` | `SpacingToken` | `"4"` | Spacing between children. |
| `wrap` | `boolean` | `false` | Enables flex wrapping. |
| `grow` | `boolean` | `false` | Expands to fill available space. |
| `fullWidth` | `boolean` | `false` | Makes the Stack span the full width of its parent. |
| `divider` | `boolean` | `false` | Inserts dividers between children. |
| `padding` | `SpacingToken` | — | Uniform internal padding. |
| `margin` | `SpacingToken` | — | Uniform external margin. |
| `className` | `string` | — | Additional CSS classes. |

---

# Design Notes

- Uses Flexbox internally.
- Uses the shared `SpacingToken` scale for spacing consistency.
- Intended to be the primary layout primitive for forms, cards, dialogs, toolbars, sections, and page composition.
- Composes naturally with other design system components such as `Field`, `Card`, `Text`, `Button`, and `EmptyState`.