# Field Component Documentation

## Overview

The `Field` system is a fully composable, strongly typed, slot-based form component architecture that provides a consistent API for every form control in the design system.

Every field shares:

- Common layout
- Label management
- Description tooltips
- Helper text
- Loading state
- Validation state
- Adornments
- Responsive label layouts
- Slot styling
- Slot prop overrides

The architecture follows the Compound Component pattern while avoiding unnecessary nesting or duplicated logic.

---

# Directory Structure

```text
field/
│
├── types.ts
├── utils.ts
├── context.tsx
├── namespace.ts
│
├── layout/
│   ├── Field.tsx
│   ├── FieldControl.tsx
│   ├── FieldLabel.tsx
│   ├── FieldDescription.tsx
│   ├── FieldHelper.tsx
│   └── index.ts
│
├── controls/
│   ├── Input.tsx
│   ├── Password.tsx
│   ├── TextArea.tsx
│   ├── Select.tsx
│   ├── Checkbox.tsx
│   ├── Switch.tsx
│   ├── RadioGroup.tsx
│   ├── OTP.tsx
│   ├── Combobox.tsx
│   ├── DatePicker.tsx
│   ├── File.tsx
│   └── index.ts
│
└── index.ts
```

---

# Available Components

```tsx
Field.Input
Field.Password
Field.TextArea
Field.Select
Field.Checkbox
Field.Switch
Field.RadioGroup
Field.OTP
Field.Combobox
Field.DatePicker
Field.File
```

---

# Shared Layout Props

These props are available on **every** field.

| Prop | Type | Description |
|------|------|-------------|
| label | ReactNode | Field label |
| description | ReactNode | Tooltip description |
| helper | ReactNode | Helper/error text |
| required | boolean | Shows required indicator |
| disabled | boolean | Disabled state |
| invalid | boolean | Invalid state |
| hideLabel | HiddenBreakpoint | Hide label at breakpoint |
| labelPlacement | LabelPlacement \| ResponsiveLabelPlacement | Position of label |
| fullWidth | boolean | Makes field stretch full width |

---

# Shared Control Props

Available on every control.

| Prop | Type |
|------|------|
| loading | boolean |
| size | xs \| sm \| md \| lg |
| radius | none \| sm \| md \| lg \| xl \| 2xl \| full |
| variant | default \| filled \| ghost \| underline |
| width | auto \| full |
| startAdornment | ReactNode |
| endAdornment | ReactNode |
| topAdornment | ReactNode |
| bottomAdornment | ReactNode |
| className | string |
| styles | FieldSlots |
| slotProps | FieldSlotProps |

---

# Sizes

```tsx
size="xs"
size="sm"
size="md"
size="lg"
```

Default

```tsx
size="md"
```

---

# Radius

```tsx
radius="none"
radius="sm"
radius="md"
radius="lg"
radius="xl"
radius="2xl"
radius="full"
```

---

# Variants

```tsx
variant="default"
variant="filled"
variant="ghost"
variant="underline"
```

---

# Width

```tsx
width="auto"
width="full"
```

---

# Loading State

```tsx
<Field.Input
    loading
/>
```

Automatically displays the loading spinner inside the control.

---

# Required

```tsx
<Field.Input
    required
/>
```

Adds the required asterisk.

---

# Helper Text

```tsx
<Field.Input
    helper="We'll never share your email."
/>
```

---

# Description

```tsx
<Field.Input
    description="Used for account recovery."
/>
```

Displays an info icon that opens a tooltip.

---

# Hidden Labels

Hide labels below a breakpoint.

```tsx
hideLabel="never"
hideLabel="sm"
hideLabel="md"
hideLabel="lg"
hideLabel="xl"
hideLabel="2xl"
```

Example

```tsx
<Field.Input
    hideLabel="md"
/>
```

---

# Label Placement

## Static

```tsx
labelPlacement="top"
```

```tsx
labelPlacement="left"
```

```tsx
labelPlacement="hidden"
```

---

# Responsive Label Placement

The label layout can change at different breakpoints.

```tsx
<Field.Input
    labelPlacement={{
        base: "top",
        md: "left",
    }}
/>
```

Another example

```tsx
<Field.Password
    labelPlacement={{
        base: "hidden",
        sm: "top",
        lg: "left",
    }}
/>
```

You can specify any combination of breakpoints.

```tsx
labelPlacement={{
    base: "top",
    sm: "top",
    md: "left",
    lg: "left",
    xl: "left",
    "2xl": "left",
}}
```

Supported values

```ts
interface ResponsiveLabelPlacement {

    base?: "top" | "left" | "hidden";

    sm?: "top" | "left" | "hidden";

    md?: "top" | "left" | "hidden";

    lg?: "top" | "left" | "hidden";

    xl?: "top" | "left" | "hidden";

    "2xl"?: "top" | "left" | "hidden";

}
```

Static string values continue to work.

```tsx
<Field.Input
    labelPlacement="left"
/>
```

---

# Adornments

## Start

```tsx
<Field.Input
    startAdornment={<Search />}
 />
```

---

## End

```tsx
<Field.Input
    endAdornment={<Eye />}
 />
```

---

## Top

```tsx
<Field.Input
    topAdornment={<Badge />}
 />
```

---

## Bottom

```tsx
<Field.Input
    bottomAdornment={<Progress />}
 />
```

---

# Styling Slots

Every visual element can be styled individually.

```tsx
<Field.Input
    styles={{
        root: "...",
        label: "...",
        helper: "...",
        description: "...",
        control: "...",
        input: "...",
        textarea: "...",
        select: "...",
        startAdornment: "...",
        endAdornment: "...",
        topAdornment: "...",
        bottomAdornment: "...",
    }}
/>
```

Available slots

```ts
interface FieldSlots {

    root

    label

    description

    helper

    control

    input

    textarea

    select

    startAdornment

    endAdornment

    topAdornment

    bottomAdornment

}
```

---

# Slot Props

Every slot also accepts native props.

```tsx
<Field.Input
    slotProps={{
        root: {
            id: "email-field",
        },

        input: {
            autoComplete: "email",
        },

        helper: {
            role: "status",
        },
    }}
/>
```

---

# Input

```tsx
<Field.Input
    label="Email"
    placeholder="name@example.com"
/>
```

Supports every native input prop.

---

# Password

```tsx
<Field.Password
    label="Password"
/>
```

Features

- Password visibility toggle
- Supports endAdornment override
- All input props

---

# TextArea

```tsx
<Field.TextArea
    label="Biography"
    rows={6}
/>
```

Supports every native textarea prop.

---

# Select

## Using Options

```tsx
<Field.Select
    label="Country"
    options={[
        {
            value: "us",
            label: "United States",
        },
        {
            value: "uk",
            label: "United Kingdom",
        },
    ]}
/>
```

---

## Generic Types

```tsx
<Field.Select<number>
    value={1}
    options={[
        {
            value: 1,
            label: "One",
        },
    ]}
/>
```

---

## Custom Children

```tsx
<Field.Select>
    <SelectItem value="1">
        One
    </SelectItem>

    <SelectItem value="2">
        Two
    </SelectItem>
</Field.Select>
```

---

# Checkbox

```tsx
<Field.Checkbox
    label="Accept terms"
/>
```

---

# Switch

```tsx
<Field.Switch
    label="Enable notifications"
/>
```

---

# RadioGroup

```tsx
<Field.RadioGroup
    label="Gender"
/>
```

---

# OTP

```tsx
<Field.OTP
    label="Verification Code"
/>
```

---

# Combobox

```tsx
<Field.Combobox
    label="Country"
/>
```

---

# DatePicker

```tsx
<Field.DatePicker
    label="Birthday"
/>
```

---

# File

```tsx
<Field.File
    label="Upload"
/>
```

---

# Full Example

```tsx
<Field.Input
    label="Email"

    helper="We'll never share your email."

    description="Used for password recovery."

    required

    loading={false}

    size="md"

    radius="lg"

    variant="default"

    width="full"

    labelPlacement={{
        base: "top",
        md: "left",
    }}

    startAdornment={<Mail />}

    endAdornment={<Check />}

    styles={{
        input: "bg-background",
    }}

    slotProps={{
        input: {
            autoComplete: "email",
        },
    }}
/>
```

---

# Design Goals

- Single API across every field
- Strong TypeScript support
- Generic Select support
- Slot-based customization
- Slot prop overrides
- Compound component architecture
- Responsive label layouts
- Shared loading and validation behavior
- Consistent accessibility
- Easily extensible for future controls