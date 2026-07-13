# Container

A reusable layout primitive built on top of Framer Motion.

The Container component provides a consistent surface for building application layouts, cards, panels, sections, dialogs, sidebars, widgets, dashboards, and other UI blocks.

It supports semantic variants, borders, spacing, sizing, viewport animations, responsive visibility, and all native HTML `<div>` attributes.

---

# Import

```tsx
import { Container } from "@repo/ui/layouts";
```

---

# Basic Usage

```tsx
<Container>
    Content
</Container>
```

---

# Props

---

## children

Content rendered inside the container.

Type

```ts
React.ReactNode
```

Example

```tsx
<Container>
    <Text>Hello</Text>
</Container>
```

---

## variant

Changes the visual appearance.

Type

```ts
"default"
| "secondary"
| "ghost"
| "glass"
| "transparent"
```

Default

```ts
"default"
```

Variants

| Variant | Description |
|----------|-------------|
| default | Standard card surface |
| secondary | Secondary surface |
| ghost | Transparent surface without styling |
| glass | Glassmorphism background |
| transparent | Fully transparent |

Example

```tsx
<Container variant="glass" />
```

---

## border

Border configuration.

Type

```ts
"none"
| "default"
| "top"
| "bottom"
| "left"
| "right"
| "x"
| "y"
```

Default

```ts
"default"
```

Example

```tsx
<Container border="top" />
```

---

## radius

Corner radius.

Type

```ts
"none"
| "sm"
| "md"
| "lg"
| "xl"
| "2xl"
| "3xl"
| "full"
```

Default

```ts
"lg"
```

Example

```tsx
<Container radius="2xl" />
```

---

## padding

Internal spacing.

Type

```ts
"none"
| "xs"
| "sm"
| "md"
| "lg"
| "xl"
```

Default

```ts
"md"
```

Example

```tsx
<Container padding="lg" />
```

---

## gap

Gap between children.

Works because the Container uses Flex Column by default.

Type

```ts
"none"
| "xs"
| "sm"
| "md"
| "lg"
| "xl"
```

Default

```ts
"none"
```

Example

```tsx
<Container gap="md">
    ...
</Container>
```

---

## shadow

Shadow preset.

Type

```ts
"none"
| "sm"
| "md"
| "lg"
```

Default

```ts
"none"
```

Example

```tsx
<Container shadow="lg" />
```

---

## overflow

Overflow behavior.

Type

```ts
"visible"
| "hidden"
| "clip"
| "auto"
| "scroll"
```

Default

```ts
"visible"
```

Example

```tsx
<Container overflow="auto" />
```

---

## hideScrollbar

Hides the scrollbar when overflow is enabled.

Type

```ts
boolean
```

Default

```ts
false
```

Example

```tsx
<Container
    overflow="auto"
    hideScrollbar
/>
```

---

## width

Width preset.

Type

```ts
"auto"
| "full"
| "fit"
```

Default

```ts
"auto"
```

Options

| Value | Result |
|--------|--------|
| auto | Browser default |
| full | width: 100% |
| fit | width: fit-content |

Example

```tsx
<Container width="full" />
```

---

## widthValue

Explicit width.

Overrides the width preset.

Type

```ts
number | string
```

Example

```tsx
<Container widthValue={420} />

<Container widthValue="32rem" />

<Container widthValue="50%" />
```

---

## height

Height preset.

Type

```ts
"auto"
| "full"
| "fit"
```

Default

```ts
"auto"
```

Example

```tsx
<Container height="full" />
```

---

## heightValue

Explicit height.

Overrides the height preset.

Type

```ts
number | string
```

Example

```tsx
<Container heightValue={400} />

<Container heightValue="100vh" />
```

---

## minWidth

Minimum width.

Type

```ts
number | string
```

Example

```tsx
<Container minWidth={320} />
```

---

## maxWidth

Maximum width.

Type

```ts
number | string
```

Example

```tsx
<Container maxWidth={640} />
```

---

## minHeight

Minimum height.

Type

```ts
number | string
```

Example

```tsx
<Container minHeight={320} />
```

---

## maxHeight

Maximum height.

Type

```ts
number | string
```

Example

```tsx
<Container maxHeight="80vh" />
```

---

## center

Centers the container horizontally.

Equivalent to

```css
margin-inline: auto;
```

Type

```ts
boolean
```

Default

```ts
false
```

Example

```tsx
<Container
    widthValue={600}
    center
/>
```

---

## interactive

Adds interaction styling.

Typically used for clickable cards.

Type

```ts
boolean
```

Default

```ts
false
```

Example

```tsx
<Container interactive />
```

---

## hidden

Hide the component below a breakpoint.

Type

```ts
"sm"
| "md"
| "lg"
| "xl"
| "2xl"
```

Example

```tsx
<Container hidden="md" />
```

---

## animate

Enables viewport animation.

Type

```ts
boolean
```

Default

```ts
false
```

Example

```tsx
<Container animate />
```

---

## animation

Preset animation.

Type

```ts
"none"
| "fade"
| "scale"
| "pop"
| "slide-up"
| "slide-down"
| "slide-left"
| "slide-right"
```

Default

```ts
"fade"
```

Example

```tsx
<Container
    animate
    animation="slide-up"
/>
```

---

## once

Only animate the first time the component enters the viewport.

Type

```ts
boolean
```

Default

```ts
true
```

Example

```tsx
<Container
    animate
    once={false}
/>
```

---

## viewportAmount

Viewport visibility threshold before animation starts.

Type

```ts
number
```

Default

```ts
0.15
```

Example

```tsx
<Container
    animate
    viewportAmount={0.4}
/>
```

---

## variants

Provide custom Framer Motion variants.

Overrides the built-in animation preset.

Type

```ts
{
    hidden: Variant;
    visible: Variant;
}
```

Example

```tsx
<Container
    animate
    variants={{
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
    }}
/>
```

---

# Native HTML Props

Since Container extends

```ts
HTMLMotionProps<"div">
```

you can use any valid HTML div property.

Examples

```tsx
<Container id="hero" />

<Container role="button" />

<Container aria-label="Profile Card" />

<Container onClick={handleClick} />

<Container style={{ background: "red" }} />

<Container className="custom-class" />
```

---

# Common Examples

## Card

```tsx
<Container
    padding="lg"
    shadow="md"
>
    ...
</Container>
```

---

## Dashboard Widget

```tsx
<Container
    variant="secondary"
    padding="md"
    radius="xl"
>
    ...
</Container>
```

---

## Glass Card

```tsx
<Container
    variant="glass"
    shadow="lg"
>
    ...
</Container>
```

---

## Animated Section

```tsx
<Container
    animate
    animation="slide-up"
>
    ...
</Container>
```

---

## Centered Content

```tsx
<Container
    widthValue={720}
    center
>
    ...
</Container>
```

---

## Scrollable Panel

```tsx
<Container
    overflow="auto"
    hideScrollbar
    maxHeight="500px"
>
    ...
</Container>
```

---

# Notes

- Built on top of Framer Motion.
- All HTML div props are supported.
- Custom Motion props are supported except `animate`, which is controlled by the component.
- Width and height presets can be overridden using `widthValue` and `heightValue`.
- Custom `variants` override the built-in animation presets.
- Semantic variants automatically adapt to your shadcn theme tokens.
- Designed as the primary layout primitive across the application.