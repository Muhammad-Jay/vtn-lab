# Background Component

The `Background` component provides reusable visual backgrounds for pages, layouts, cards, sections, and containers while remaining fully compatible with the shadcn/ui design system.

All backgrounds use semantic color tokens such as `bg-background`, `border-border`, and CSS variables instead of hardcoded colors, ensuring they automatically adapt to light and dark mode.

---

# Components

```tsx
<Background.Main />
<Background.Glass />
<Background.Grid />
```

---

# Shared Props

These props are available on every background variant.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `"page" \| "container"` | `"page"` | Controls how the background is positioned. |
| `interactive` | `boolean` | `false` | Enables pointer events on the background. Disabled by default. |
| `opacity` | `number` | `1` | Background opacity. |
| `zIndex` | `number` | `-10` | Background stacking order. |
| `className` | `string` | — | Additional CSS classes. |
| `style` | `React.CSSProperties` | — | Additional inline styles. |
| `children` | `React.ReactNode` | — | Optional children rendered inside the background. |

---

# mode

Controls how the background fills its parent.

## page

Fills the entire parent container.

```tsx
<Background.Main mode="page" />
```

---

## container

Fills only the nearest positioned parent.

```tsx
<div className="relative">
    <Background.Glass mode="container" />
</div>
```

---

# interactive

Determines whether the background should receive mouse events.

Default:

```tsx
interactive={false}
```

Enable only if the background needs pointer interaction.

```tsx
<Background.Grid interactive />
```

---

# opacity

Adjusts transparency.

```tsx
<Background.Main opacity={0.4} />
```

---

# zIndex

Controls stacking order.

```tsx
<Background.Main zIndex={-20} />
```

---

# Background.Main

Main application background.

Uses semantic colors and optional gradients.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gradient` | `"none" \| "radial" \| "linear"` | `"radial"` | Background gradient style. |

---

## gradient

### none

Solid background.

```tsx
<Background.Main gradient="none" />
```

---

### radial

Subtle radial highlight.

```tsx
<Background.Main gradient="radial" />
```

---

### linear

Top-to-bottom gradient.

```tsx
<Background.Main gradient="linear" />
```

---

# Examples

Simple page background.

```tsx
<Background.Main />
```

Linear hero background.

```tsx
<Background.Main gradient="linear" />
```

Container background.

```tsx
<div className="relative">
    <Background.Main mode="container" />
</div>
```

---

# Background.Glass

Glassmorphism background.

Provides translucent surfaces using semantic colors and backdrop blur.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blur` | `"none" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl"` | `"xl"` | Amount of backdrop blur. |

---

# blur

Available values:

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

Examples

```tsx
<Background.Glass />
```

Small blur

```tsx
<Background.Glass blur="sm" />
```

Heavy blur

```tsx
<Background.Glass blur="3xl" />
```

---

# Background.Grid

Grid background used for dashboards, hero sections, landing pages, editors, and design tools.

Supports optional interactive cursor highlighting.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `interactiveHighlight` | `boolean` | `true` | Enables cursor spotlight. |
| `gridSize` | `24 \| 32 \| 36 \| 40 \| 48 \| 56 \| 64` | `36` | Grid spacing. |
| `fade` | `boolean` | `true` | Fades the grid toward the edges. |

---

# interactiveHighlight

Displays a soft spotlight that follows the cursor.

```tsx
<Background.Grid interactiveHighlight />
```

Disable

```tsx
<Background.Grid interactiveHighlight={false} />
```

---

# gridSize

Controls spacing between grid lines.

```tsx
<Background.Grid gridSize={24} />
```

```tsx
<Background.Grid gridSize={64} />
```

---

# fade

Adds a radial fade toward the edges.

```tsx
<Background.Grid fade />
```

Disable

```tsx
<Background.Grid fade={false} />
```

---

# Examples

Simple grid.

```tsx
<Background.Grid />
```

Large grid.

```tsx
<Background.Grid gridSize={64} />
```

Without cursor highlight.

```tsx
<Background.Grid interactiveHighlight={false} />
```

Without edge fade.

```tsx
<Background.Grid fade={false} />
```

---

# Best Practices

Use `Background.Main` for:

- Pages
- Layouts
- Sections
- Application shells

Use `Background.Glass` for:

- Cards
- Floating panels
- Sidebars
- Dialog backgrounds
- Popovers

Use `Background.Grid` for:

- Hero sections
- Dashboards
- Editors
- Design tools
- Empty states
- Landing pages

---

# Example Composition

```tsx
<div className="relative overflow-hidden">
    <Background.Grid />

    <Container className="relative z-10">
        ...
    </Container>
</div>
```

The background always remains behind the content while the container stays above it.