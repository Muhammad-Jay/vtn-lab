# Field Types

The Field system provides a consistent API for all form controls including:

- Input
- Password
- TextArea
- Select
- Checkbox *(coming soon)*
- Switch *(coming soon)*
- Radio *(coming soon)*
- Combobox *(coming soon)*
- Date Picker *(coming soon)*

All controls share the same layout, sizing, styling, and accessibility props.

---

# Common Layout Props

These props are available on every Field component.

| Prop | Type | Description |
|------|------|-------------|
| `label` | `React.ReactNode` | Label displayed above or beside the field. |
| `description` | `React.ReactNode` | Tooltip content shown beside the label. |
| `helper` | `React.ReactNode` | Helper text displayed below the field. |
| `required` | `boolean` | Shows a required indicator (`*`). |
| `hideLabel` | `HiddenBreakpoint` | Hides the label at specific responsive breakpoints. |
| `labelPlacement` | `"top" \| "left" \| "hidden"` | Controls label positioning. |
| `fullWidth` | `boolean` | Makes the field stretch to fill its parent. |
| `className` | `string` | Additional CSS classes for the Field container. |

---

# Field Control Props

Shared by all interactive controls.

| Prop | Type | Description |
|------|------|-------------|
| `loading` | `boolean` | Displays a loading spinner inside the field. |
| `size` | `FieldSize` | Controls the component height. |
| `radius` | `FieldRadius` | Border radius. |
| `variant` | `FieldVariant` | Visual appearance. |
| `width` | `FieldWidth` | Width behavior. |
| `topAdornment` | `React.ReactNode` | Content rendered above the control. |
| `bottomAdornment` | `React.ReactNode` | Content rendered below the control. |
| `startAdornment` | `React.ReactNode` | Content rendered at the start of the control. |
| `endAdornment` | `React.ReactNode` | Content rendered at the end of the control. |

---

# Enumerations

## FieldSize

Controls the overall size of the control.

```ts
type FieldSize =
    | "xs"
    | "sm"
    | "md"
    | "lg";
```

| Value | Description |
|--------|-------------|
| `xs` | Extra small |
| `sm` | Small |
| `md` | Medium (default) |
| `lg` | Large |

---

## FieldRadius

Controls border rounding.

```ts
type FieldRadius =
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "full";
```

---

## FieldVariant

Visual style of the field.

```ts
type FieldVariant =
    | "default"
    | "filled"
    | "ghost"
    | "underline";
```

| Variant | Description |
|----------|-------------|
| `default` | Standard bordered field |
| `filled` | Filled background |
| `ghost` | Transparent background |
| `underline` | Underline only |

---

## FieldWidth

```ts
type FieldWidth =
    | "auto"
    | "full";
```

| Value | Description |
|--------|-------------|
| `auto` | Fits content |
| `full` | Occupies full width |

---

## HiddenBreakpoint

Controls responsive label visibility.

```ts
type HiddenBreakpoint =
    | "never"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";
```

| Value | Description |
|--------|-------------|
| `never` | Always visible |
| `sm` | Hidden below `sm` |
| `md` | Hidden below `md` |
| `lg` | Hidden below `lg` |
| `xl` | Hidden below `xl` |
| `2xl` | Hidden below `2xl` |

---

## LabelPlacement

```ts
type LabelPlacement =
    | "top"
    | "left"
    | "hidden";
```

| Value | Description |
|--------|-------------|
| `top` | Label above the field |
| `left` | Label beside the field |
| `hidden` | No visible label |

---

# Input Props

Used by:

- `Field.Input`
- `Field.Password`

Inherits:

- `FieldLayoutProps`
- `FieldControlProps`
- All Framer Motion input props

```tsx
<Field.Input
    label="Username"
    placeholder="Enter username"
/>
```

---

# TextArea Props

Used by:

- `Field.TextArea`

Inherits:

- `FieldLayoutProps`
- `FieldControlProps`
- All Framer Motion textarea props

```tsx
<Field.TextArea
    label="Bio"
    rows={5}
/>
```

---

# SelectOption

Represents an option inside `Field.Select`.

```ts
interface SelectOption {

    label: React.ReactNode;

    value: string;

    disabled?: boolean;

    leading?: React.ReactNode;

}
```

| Property | Description |
|-----------|-------------|
| `label` | Display label |
| `value` | Option value |
| `disabled` | Disables the option |
| `leading` | Optional icon displayed before the label |

---

# Select Props

Used by:

- `Field.Select`

## Properties

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string \| null` | Controlled value. |
| `defaultValue` | `string` | Initial value. |
| `placeholder` | `string` | Placeholder text. |
| `options` | `SelectOption[]` | Option list. |
| `children` | `React.ReactNode` | Custom `SelectItem` components. |
| `disabled` | `boolean` | Disables the select. |
| `onValueChange` | `(value, eventDetails) => void` | Change handler. |

Example:

```tsx
<Field.Select
    label="Country"
    placeholder="Choose a country"
    options={[
        {
            label: "United States",
            value: "us",
        },
        {
            label: "Canada",
            value: "ca",
        },
    ]}
/>
```

---

# Adornments

Every field supports four adornment locations.

```tsx
<Field.Input
    startAdornment={<SearchIcon />}
    endAdornment={<Button.Ghost>Search</Button.Ghost>}
    topAdornment={<Alert />}
    bottomAdornment={<Progress />}
/>
```

| Prop | Position |
|------|----------|
| `startAdornment` | Left side of control |
| `endAdornment` | Right side of control |
| `topAdornment` | Above the control |
| `bottomAdornment` | Below the control |

---

# Responsive Labels

```tsx
<Field.Input
    label="Email"
    hideLabel="sm"
/>
```

The label remains accessible but is hidden below the specified breakpoint.

---

# Typical Example

```tsx
<Field.Password
    label="Password"
    helper="Minimum 8 characters"
    required
    placeholder="Enter your password"
    startAdornment={<LockIcon />}
/>
```