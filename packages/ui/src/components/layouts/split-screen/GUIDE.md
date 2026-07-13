# SplitScreen Component

The `SplitScreen` component is a responsive two-panel layout for building application pages with a primary and secondary section.

It automatically stacks on smaller screens and becomes a horizontal split layout at a configurable breakpoint.

Typical use cases include:

- Authentication pages
- Landing pages
- Settings pages
- Documentation
- Dashboards
- Detail pages
- Marketing layouts
- Editors
- Preview layouts

---

# Components

```tsx
<SplitScreen>
    <SplitScreen.Side />
    <SplitScreen.Side />
</SplitScreen>
```

Optionally:

```tsx
<SplitScreen>
    <SplitScreen.Side />
    <SplitScreen.Side />

    <SplitScreen.Overlay />
</SplitScreen>
```

---

# SplitScreen Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `[number, number] \| SplitRatio` | `[1,1]` | Width ratio between both panels. |
| `splitAt` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"lg"` | Breakpoint where the layout becomes horizontal. |
| `reverseOnMobile` | `boolean` | `false` | Reverses the panel order before the split breakpoint. |
| `variant` | `"default" \| "comfortable" \| "compact" \| "flush"` | `"default"` | Controls spacing between panels. |
| `animated` | `boolean` | `true` | Enables layout animation. |
| `className` | `string` | — | Additional classes. |
| `children` | `ReactNode` | — | SplitScreen content. |

---

# ratio

Controls the proportional width of each panel.

---

## Equal layout

```tsx
<SplitScreen
    ratio={[1,1]}
>
```

Produces

```
50% | 50%
```

---

## Uneven layout

```tsx
<SplitScreen
    ratio={[3,7]}
>
```

Produces

```
30% | 70%
```

---

## Sidebar layout

```tsx
ratio={[2,10]}
```

Produces

```
16.6% | 83.4%
```

---

## Responsive ratio

```tsx
<SplitScreen
    ratio={{
        default: [1,1],
        lg: [3,7],
        xl: [2,8],
    }}
>
```

---

# splitAt

Defines the breakpoint where the layout changes from stacked to split.

Available values

```
sm
md
lg
xl
2xl
```

Example

```tsx
<SplitScreen
    splitAt="md"
/>
```

Behavior

Below the breakpoint

```
A
B
```

Above the breakpoint

```
A | B
```

---

# reverseOnMobile

Reverses the visual order while stacked.

```tsx
<SplitScreen
    reverseOnMobile
>
```

Normal

```
A
B
```

Reversed

```
B
A
```

Desktop order remains unchanged.

---

# variant

Controls spacing between panels.

---

## default

Standard spacing.

```tsx
variant="default"
```

---

## comfortable

Larger spacing.

```tsx
variant="comfortable"
```

---

## compact

Reduced spacing.

```tsx
variant="compact"
```

---

## flush

No spacing.

```tsx
variant="flush"
```

Useful when building edge-to-edge layouts.

---

# animated

Enables Framer Motion layout transitions.

```tsx
<SplitScreen animated />
```

Disable

```tsx
<SplitScreen animated={false} />
```

---

# SplitScreen.Side Props

Represents one side of the split layout.

---

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Shows a loading component instead of children. |
| `loadingComponent` | `ReactNode` | — | Custom loading placeholder. |
| `scroll` | `"auto" \| "hidden" \| "visible"` | `"visible"` | Scroll behavior. |
| `sticky` | `boolean` | `false` | Makes the panel sticky. |
| `minWidth` | `number \| string` | — | Minimum width. |
| `maxWidth` | `number \| string` | — | Maximum width. |
| `className` | `string` | — | Additional classes. |
| `children` | `ReactNode` | — | Panel content. |

---

# loading

Displays a loading placeholder.

```tsx
<SplitScreen.Side
    loading
/>
```

---

# loadingComponent

Custom loading UI.

```tsx
<SplitScreen.Side
    loading={loading}
    loadingComponent={<Skeleton />}
>
```

---

# scroll

Controls overflow behavior.

---

## visible

```tsx
scroll="visible"
```

---

## auto

```tsx
scroll="auto"
```

Panel scrolls only when needed.

---

## hidden

```tsx
scroll="hidden"
```

---

# sticky

Pins the panel while scrolling.

```tsx
<SplitScreen.Side
    sticky
/>
```

Useful for

- Sidebars
- Filters
- Preview panels
- Navigation

---

# minWidth

```tsx
<SplitScreen.Side
    minWidth={320}
/>
```

---

# maxWidth

```tsx
<SplitScreen.Side
    maxWidth={480}
/>
```

---

# SplitScreen.Overlay

Displays floating content above both panels.

Useful for

- Loading states
- Empty states
- Blocking interactions
- Dialogs
- Notices
- CTA overlays

---

# Overlay Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | `true` | Controls visibility. |
| `position` | Position | `"center"` | Overlay position. |
| `blur` | `boolean` | `false` | Enables backdrop blur. |
| `backdrop` | `boolean` | `false` | Shows a background overlay. |
| `interactive` | `boolean` | `false` | Enables pointer events. |
| `onClick` | `() => void` | — | Click handler. |
| `className` | `string` | — | Additional classes. |
| `children` | `ReactNode` | — | Overlay content. |

---

# position

Available values

```
center
top
bottom
left
right
top-left
top-right
bottom-left
bottom-right
```

Example

```tsx
<SplitScreen.Overlay
    position="top-right"
/>
```

---

# blur

Adds backdrop blur.

```tsx
<SplitScreen.Overlay
    blur
/>
```

---

# backdrop

Adds a semi-transparent overlay.

```tsx
<SplitScreen.Overlay
    backdrop
/>
```

---

# interactive

Allows pointer interaction.

```tsx
<SplitScreen.Overlay
    interactive
/>
```

---

# onClick

```tsx
<SplitScreen.Overlay
    onClick={closeOverlay}
/>
```

---

# Examples

## Authentication Layout

```tsx
<SplitScreen
    ratio={[4,6]}
>
    <SplitScreen.Side>
        <LoginForm />
    </SplitScreen.Side>

    <SplitScreen.Side>
        <Hero />
    </SplitScreen.Side>
</SplitScreen>
```

---

## Documentation Layout

```tsx
<SplitScreen
    ratio={[3,9]}
>
    <SplitScreen.Side
        sticky
    >
        <Sidebar />
    </SplitScreen.Side>

    <SplitScreen.Side
        scroll="auto"
    >
        <Article />
    </SplitScreen.Side>
</SplitScreen>
```

---

## Settings Page

```tsx
<SplitScreen
    ratio={[2,8]}
>
    <SplitScreen.Side
        sticky
    >
        <SettingsNavigation />
    </SplitScreen.Side>

    <SplitScreen.Side>
        <SettingsContent />
    </SplitScreen.Side>
</SplitScreen>
```

---

## Editor Layout

```tsx
<SplitScreen
    ratio={[6,6]}
    splitAt="xl"
>
    <SplitScreen.Side
        scroll="auto"
    >
        <Editor />
    </SplitScreen.Side>

    <SplitScreen.Side
        scroll="auto"
    >
        <Preview />
    </SplitScreen.Side>
</SplitScreen>
```

---

## Loading Overlay

```tsx
<SplitScreen>
    <SplitScreen.Side>
        ...
    </SplitScreen.Side>

    <SplitScreen.Side>
        ...
    </SplitScreen.Side>

    <SplitScreen.Overlay
        visible={loading}
        backdrop
        blur
    >
        <Spinner />
    </SplitScreen.Overlay>
</SplitScreen>
```

---

# Best Practices

Use `SplitScreen` for:

- Authentication
- Documentation
- Editors
- Preview pages
- Marketing pages
- Detail pages
- Settings
- Dashboards

Use `sticky` for:

- Navigation
- Sidebars
- Filters
- Preview panels

Use `Overlay` for:

- Loading screens
- Empty states
- Notifications
- Blocking interactions
- Global actions

Prefer responsive `ratio` values when the layout should adapt to larger displays.