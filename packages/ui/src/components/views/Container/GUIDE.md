# Container Component

A foundational layout primitive used to build every section, card, panel, page, and surface in the design system.

The `Container` component combines:

- Layout
- Spacing
- Surface styling
- Borders
- Elevation
- Motion
- Responsive visibility
- Sizing

into a single consistent API.

---

# Import

```tsx
import { Container } from "@/components/ui/container";
```

---

# Basic Example

```tsx
<Container surface="card" padding="lg">
    Content
</Container>
```

---

# Props

---

## children

Content rendered inside the container.

```tsx
<Container>
    <Button />
</Container>
```

Type

```ts
React.ReactNode
```

---

# Surface

Controls the visual appearance.

```tsx
<Container surface="surface-2" />
```

Type

```ts
ContainerSurface
```

Available values

### None

```
none
```

---

### Surface Layers

```
surface-0
surface-1
surface-2
surface-3
surface-4
surface-5
```

---

### Panels

```
panel-default
panel-inset
panel-raised
panel-floating
```

---

### Cards

```
card
card-interactive
```

---

### Floating Elements

```
popover
dropdown
tooltip
modal
```

---

### Glass

```
glass-0
glass-1
glass-2
glass-3
glass-4
```

---

### Liquid Glass

```
liquid-0
liquid-1
liquid-2
liquid-3
liquid-4
```

---

### Page Backgrounds

```
page
section
hero
dashboard
auth
```

---

### Brand

```
brand
```

---

### Patterns

```
grid
grid-sm
grid-md
grid-lg

dot
dot-lg

mesh
noise
spotlight
```

---

### Radials

```
radial
radial-top
radial-bottom
radial-left
radial-right
```

---

# Border

Controls border appearance.

```tsx
<Container border="default" />
```

Values

```
none
subtle
default
strong
focus
```

---

# Hover Border
Applies a border specifically when hovered. Will smoothly transition and add a border width if the container defaults to border="none".

```tsx
<Container border="none" hoverBorder="strong"/>
```

Values

```
none
subtle
default
strong
focus
```
---

# Border Position

Limits border rendering.

```tsx
<Container
    border="default"
    borderPosition="bottom"
/>
```

Values

```
all
top
bottom
left
right
x
y
```

---

# Radius

Border radius.

```tsx
<Container radius="xl" />
```

Values

```
none
sm
md
lg
xl
2xl
3xl
full
```

---

# Elevation

Shadow depth.

```tsx
<Container elevation="2" />
```

Values

```
none
0
1
2
3
4
```

---

# Padding

Internal spacing.

```tsx
<Container padding="lg" />
```

Values

```
none
xs
sm
md
lg
xl
2xl
3xl
```

---

# Gap

Spacing between children.

Automatically applies flex gap.

```tsx
<Container gap="md">
    ...
</Container>
```

Values

```
none
xs
sm
md
lg
xl
```

---

# Direction

Flex direction.

```tsx
<Container direction="row" />
```

Values

```
row
column
row-reverse
column-reverse
```

---

# Align

Cross-axis alignment.

```tsx
<Container align="center" />
```

Values

```
start
center
end
stretch
baseline
```

---

# Justify

Main-axis alignment.

```tsx
<Container justify="between" />
```

Values

```
start
center
end
between
around
evenly
```

---

# Anchor

Positions the container inside its parent.

Unlike `align` and `justify`, `anchor` positions the **Container itself**, not its children.

```tsx
<Container anchor="top-right" />
```

Values

```
none

top-left
top
top-right

left
center
right

bottom-left
bottom
bottom-right

stretch
```

---

# Width

Width of the container.

```tsx
<Container width="full" />
```

or

```tsx
<Container width={300} />
```

or

```tsx
<Container width="50%" />
```

Accepted values

```
auto
fit
full
screen

number

CSS string
```

Examples

```
320
"20rem"
"50%"
"calc(100%-2rem)"
```

---

# Height

Same behavior as width.

```tsx
<Container height="screen" />
```

Accepted values

```
auto
fit
full
screen

number

CSS string
```

---

# Min / Max Dimensions

```tsx
<Container
    minWidth={240}
    maxWidth={600}
    minHeight={100}
    maxHeight={500}
/>
```

Accepted

```
number
string
```

---

# Overflow

Overflow behavior.

```tsx
<Container overflow="auto" />
```

Values

```
visible
hidden
clip
auto
scroll
```

---

# hideScrollbar

Hides scrollbars while preserving scrolling.

```tsx
<Container
    overflow="auto"
    hideScrollbar
/>
```

Type

```ts
boolean
```

---

# Interaction

Built-in interaction presets.

```tsx
<Container interaction="card" />
```

Values

```
none
hover
press
card
lift
```

---

# Hidden

Hide at specific breakpoints.

```tsx
<Container hidden="md" />
```

Values

```
sm
md
lg
xl
2xl
```

---

# Animate

Enables Framer Motion animation.

```tsx
<Container animate />
```

Type

```ts
boolean
```

---

# Motion Effect

Preset entrance animation.

```tsx
<Container motionEffect="fade" />
```

Values

```
none
fade
scale
pop
slide-up
slide-down
slide-left
slide-right
```

---

# once

Animate only once.

```tsx
<Container once />
```

Type

```ts
boolean
```

---

# viewportAmount

Viewport threshold used for animation.

```tsx
<Container viewportAmount={0.4} />
```

Type

```ts
number
```

---

# motionVariants

Provide custom Framer Motion variants.

```tsx
<Container
    animate
    motionVariants={{
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }}
/>
```

Type

```ts
Variants
```

---

# Native Props

The component forwards all standard HTML `<div>` props.

Examples

```tsx
<Container
    id="hero"
    className="custom"
    onClick={handleClick}
    style={{}}
>
```

Supported examples include

- className
- style
- id
- role
- tabIndex
- onClick
- onMouseEnter
- onMouseLeave
- onKeyDown
- aria-*
- data-*

and all other valid HTML div attributes.

---

# Design Philosophy

The Container component should replace most raw `<div>` elements in application code.

Instead of composing multiple utility classes manually:

```tsx
<div className="flex flex-col p-6 rounded-xl border shadow-md">
```

prefer:

```tsx
<Container
    surface="card"
    padding="lg"
    radius="xl"
    elevation="2"
>
```

This provides:

- Consistent styling
- Strong typing
- Better discoverability
- Easier theming
- Predictable layouts
- Centralized design tokens