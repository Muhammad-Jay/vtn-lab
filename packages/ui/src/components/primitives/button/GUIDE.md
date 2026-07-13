# Button Component

The `Button` component is a high-level wrapper around the shadcn/ui Button with additional features such as:

- Semantic variants (`Button.Primary`, `Button.Success`, etc.)
- Built-in loading states
- Automatic tooltip support
- Icons
- Badges
- Keyboard shortcuts
- Motion animations
- Responsive label visibility
- Width/height customization
- Framer Motion integration

---

# Import

```tsx
import { Button } from "@/components/button";
```

---

# Basic Usage

```tsx
<Button>
    Save
</Button>
```

---

# Semantic Variants

Instead of remembering variants every time, use the semantic components.

```tsx
<Button.Primary>
    Save
</Button.Primary>

<Button.Secondary>
    Cancel
</Button.Secondary>

<Button.Destructive>
    Delete
</Button.Destructive>

<Button.Success>
    Success
</Button.Success>

<Button.Warning>
    Warning
</Button.Warning>

<Button.Glass>
    Glass
</Button.Glass>
```

You may also use

```tsx
<Button variant="primary">
    Save
</Button>
```

---

# Props

---

## variant

Controls the visual appearance.

Default

```tsx
"default"
```

Available

```tsx
"default"

"primary"

"secondary"

"outline"

"ghost"

"link"

"destructive"

"success"

"warning"

"glass"
```

Example

```tsx
<Button variant="outline">
    Edit
</Button>
```

---

## size

Controls overall button size.

Default

```tsx
"md"
```

Available

```tsx
"xs"

"sm"

"md"

"lg"

"xl"

"icon"

"icon-xs"

"icon-sm"

"icon-lg"
```

Example

```tsx
<Button size="lg">
    Continue
</Button>
```

---

## radius

Controls corner rounding.

Default

```tsx
"lg"
```

Available

```tsx
none

sm

md

lg

xl

2xl

3xl

full
```

Example

```tsx
<Button radius="full">
    Rounded
</Button>
```

---

## shadow

Applies shadow preset.

Default

```tsx
"none"
```

Available

```tsx
none

sm

md

lg
```

Example

```tsx
<Button shadow="lg">
    Elevated
</Button>
```

---

## width

Preset width.

Default

```tsx
"auto"
```

Available

```tsx
auto

fit

full
```

Example

```tsx
<Button width="full">
    Submit
</Button>
```

---

## widthValue

Sets an explicit width.

Overrides `width`.

Accepts

```tsx
number

string
```

Examples

```tsx
<Button widthValue={300}>
    Fixed Width
</Button>

<Button widthValue="20rem">
    Fixed Width
</Button>
```

---

## heightValue

Sets an explicit height.

Examples

```tsx
<Button heightValue={48}>
    Custom Height
</Button>

<Button heightValue="4rem">
    Custom Height
</Button>
```

---

## leading

Leading icon/content.

Example

```tsx
<Button
    leading={<Save />}
>
    Save
</Button>
```

---

## trailing

Trailing icon/content.

Example

```tsx
<Button
    trailing={<ChevronRight />}
>
    Continue
</Button>
```

---

## icon

Creates an icon-only button.

Example

```tsx
<Button
    size="icon"
    icon={<Plus />}
/>
```

---

## showDefaultIcon

Displays the default icon for the selected variant.

Default

```tsx
false
```

Example

```tsx
<Button.Success
    showDefaultIcon
>
    Completed
</Button.Success>
```

Default icons include:

| Variant | Icon |
|----------|------|
| Default | Check |
| Primary | Check |
| Secondary | Check |
| Outline | Check |
| Ghost | Check |
| Link | Check |
| Destructive | CircleAlert |
| Success | CircleCheck |
| Warning | CircleAlert |
| Glass | Check |

---

## hideContent

Hides button text below a breakpoint.

Default

```tsx
"never"
```

Available

```tsx
never

sm

md

lg

xl

2xl
```

Example

```tsx
<Button
    leading={<Menu />}
    hideContent="md"
>
    Navigation
</Button>
```

---

## loading

Displays loading state.

Default

```tsx
false
```

Example

```tsx
<Button
    loading
>
    Saving...
</Button>
```

---

## loadingText

Overrides the displayed text while loading.

Example

```tsx
<Button
    loading
    loadingText="Saving..."
>
    Save
</Button>
```

---

## loadingPosition

Controls spinner placement.

Default

```tsx
leading
```

Available

```tsx
leading

trailing

replace
```

Example

```tsx
<Button
    loading
    loadingPosition="replace"
>
    Upload
</Button>
```

---

## shortcut

Displays keyboard shortcut.

Example

```tsx
<Button
    shortcut="⌘S"
>
    Save
</Button>
```

---

## badge

Displays badge beside button label.

Example

```tsx
<Button
    badge="New"
>
    Dashboard
</Button>
```

---

## tooltip

Automatically wraps the button with a shadcn Tooltip.

Example

```tsx
<Button
    tooltip="Save changes"
>
    Save
</Button>
```

---

## tooltipSide

Tooltip position.

Default

```tsx
top
```

Available

```tsx
top

bottom

left

right
```

Example

```tsx
<Button
    tooltip="Delete"
    tooltipSide="bottom"
>
    Delete
</Button>
```

---

## animate

Enables Framer Motion animation.

Default

```tsx
false
```

Example

```tsx
<Button
    animate
>
    Animated
</Button>
```

---

## animation

Preset animation.

Default

```tsx
fade
```

Available

```tsx
none

fade

scale

pop
```

Example

```tsx
<Button
    animate
    animation="pop"
>
    Click Me
</Button>
```

---

## variants

Custom Framer Motion variants.

Example

```tsx
<Button
    animate
    variants={{
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    }}
>
    Custom Animation
</Button>
```

---

## center

Centers the button using `mx-auto`.

Default

```tsx
false
```

Example

```tsx
<Button
    center
>
    Centered
</Button>
```

---

# Inherited HTML Button Props

Since the component extends

```tsx
HTMLMotionProps<"button">
```

you can also use every normal button prop.

Examples

```tsx
<Button
    disabled
/>

<Button
    type="submit"
/>

<Button
    onClick={handleClick}
/>

<Button
    aria-label="Save"
/>

<Button
    tabIndex={0}
/>

<Button
    style={{
        background: "red",
    }}
/>

<Button
    className="rounded-full"
/>
```

---

# Examples

## Primary Button

```tsx
<Button.Primary>
    Save
</Button.Primary>
```

---

## Button With Icons

```tsx
<Button.Primary
    leading={<Save />}
    trailing={<ArrowRight />}
>
    Save Changes
</Button.Primary>
```

---

## Icon Button

```tsx
<Button
    size="icon"
    icon={<Settings />}
    tooltip="Settings"
/>
```

---

## Loading Button

```tsx
<Button.Primary
    loading
    loadingText="Saving..."
>
    Save
</Button.Primary>
```

---

## Button With Badge

```tsx
<Button
    badge="99+"
>
    Notifications
</Button>
```

---

## Responsive Button

```tsx
<Button
    leading={<Menu />}
    hideContent="md"
>
    Menu
</Button>
```

---

## Animated Button

```tsx
<Button
    animate
    animation="scale"
>
    Continue
</Button>
```

---

## Glass Button

```tsx
<Button.Glass
    tooltip="Preview"
>
    Preview
</Button.Glass>
```

---

# Notes

- Built on top of **shadcn/ui Button**
- Uses semantic color tokens (`bg-primary`, `bg-secondary`, etc.)
- Automatically integrates with **Tooltip**
- Supports **Framer Motion**
- Fully responsive
- Icon-only buttons are supported
- Loading states require no additional components
- Semantic shortcuts (`Button.Primary`, `Button.Success`, etc.) provide sensible defaults while remaining fully customizable.