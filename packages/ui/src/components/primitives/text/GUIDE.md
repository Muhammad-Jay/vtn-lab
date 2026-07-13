# Text Component

The `Text` component provides a centralized typography system for the platform. It offers semantic typography primitives with opinionated defaults while remaining fully customizable through a small set of composable props.

Typography styles are exposed through namespaced components such as `Text.H1`, `Text.Body`, and `Text.Caption`, ensuring consistency across the entire application.

---

## Props

### `as`

Overrides the default HTML element rendered by the typography variant.

**Type**

```ts
React.ElementType
```

**Default**

Depends on the typography variant.

**Example**

```tsx
<Text.H1 as="div">
    Dashboard
</Text.H1>
```

---

### `children`

The content rendered by the component.

**Type**

```ts
React.ReactNode
```

---

### `className`

Additional Tailwind or custom CSS classes merged with the default typography styles.

**Type**

```ts
string
```

**Example**

```tsx
<Text.Body className="animate-fade-in">
    Welcome back.
</Text.Body>
```

---

### `variant`

Specifies the typography style to use.

This prop is typically handled automatically by namespaced components (`Text.H1`, `Text.Body`, etc.), but is available when using `TextRoot` directly.

**Type**

```ts
type TextVariant =
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "title"
    | "subtitle"
    | "lead"
    | "body"
    | "small"
    | "caption"
    | "overline"
    | "label"
    | "link"
    | "code"
    | "quote"
    | "muted"
    | "error";
```

**Default**

```ts
"body"
```

---

### `color`

Overrides the default text color using design system color tokens.

**Type**

```ts
type TextColor =
    | "foreground"
    | "muted"
    | "primary"
    | "secondary"
    | "accent"
    | "destructive"
    | "success"
    | "warning"
    | "info"
    | "inherit"
    | "current";
```

**Default**

Defined by the typography variant.

**Example**

```tsx
<Text.Body color="primary">
    Primary content
</Text.Body>
```

---

### `align`

Controls text alignment.

**Type**

```ts
type TextAlign =
    | "left"
    | "center"
    | "right"
    | "justify";
```

**Example**

```tsx
<Text.H2 align="center">
    Settings
</Text.H2>
```

---

### `wrap`

Controls text wrapping behavior.

**Type**

```ts
type TextWrap =
    | "normal"
    | "nowrap"
    | "balance"
    | "pretty";
```

**Default**

```ts
"normal"
```

| Value | Description |
|--------|-------------|
| `normal` | Standard text wrapping. |
| `nowrap` | Prevents wrapping. |
| `balance` | Balances lines for headings. |
| `pretty` | Improves paragraph wrapping. |

**Example**

```tsx
<Text.Display wrap="balance">
    Build modern applications faster
</Text.Display>
```

---

### `truncate`

Truncates overflowing text onto a single line.

Applies Tailwind's `truncate` utility.

**Type**

```ts
boolean
```

**Default**

```ts
false
```

**Example**

```tsx
<Text.Body truncate>
    Very long content...
</Text.Body>
```

---

### `italic`

Applies italic styling.

**Type**

```ts
boolean
```

**Default**

```ts
false
```

**Example**

```tsx
<Text.Body italic>
    Italic text
</Text.Body>
```

---

### `underline`

Applies underline styling.

**Type**

```ts
boolean
```

**Default**

```ts
false
```

**Example**

```tsx
<Text.Body underline>
    Underlined text
</Text.Body>
```

---

### `uppercase`

Transforms text to uppercase.

**Type**

```ts
boolean
```

**Default**

```ts
false
```

**Example**

```tsx
<Text.Overline uppercase>
    Analytics
</Text.Overline>
```

---

# Typography Variants

The typography system provides the following variants:

| Variant | Purpose |
|----------|----------|
| `Display` | Hero headings and landing pages |
| `H1` | Primary page heading |
| `H2` | Section heading |
| `H3` | Subsection heading |
| `H4` | Smaller section heading |
| `H5` | Minor heading |
| `H6` | Lowest heading level |
| `Title` | Card or panel title |
| `Subtitle` | Supporting heading |
| `Lead` | Introductory paragraph |
| `Body` | Standard paragraph text |
| `Small` | Small supporting text |
| `Caption` | Image or component captions |
| `Overline` | Labels and category headings |
| `Label` | Form labels |
| `Link` | Hyperlinks |
| `Code` | Inline code snippets |
| `Quote` | Block quotations |
| `Muted` | Secondary informational text |
| `Error` | Validation and error messages |

---

# Examples

## Basic Usage

```tsx
<Text.H1>
    Dashboard
</Text.H1>

<Text.Body>
    Welcome back.
</Text.Body>

<Text.Caption>
    Updated 2 minutes ago
</Text.Caption>
```

---

## Override Color

```tsx
<Text.H2 color="primary">
    Reports
</Text.H2>
```

---

## Override HTML Element

```tsx
<Text.Title as="div">
    Overview
</Text.Title>
```

---

## Balanced Heading

```tsx
<Text.Display wrap="balance">
    Build beautiful products
</Text.Display>
```

---

## Truncated Text

```tsx
<Text.Body truncate>
    Extremely long piece of text...
</Text.Body>
```

---

## Centered Typography

```tsx
<Text.H3 align="center">
    Welcome
</Text.H3>
```

---

## Italic Quote

```tsx
<Text.Quote>
    Simplicity is the ultimate sophistication.
</Text.Quote>
```

---

# Design Principles

- Semantic HTML by default.
- Opinionated typography presets.
- Centralized typography configuration.
- Consistent design tokens.
- Minimal API surface.
- Easily extensible through the typography configuration.
- Fully compatible with Tailwind CSS v4 and shadcn/ui design conventions.