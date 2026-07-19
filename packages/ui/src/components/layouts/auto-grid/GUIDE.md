# AutoGrid Component

The `AutoGrid` component is a responsive grid layout system designed for building dashboards, application layouts, cards, galleries, settings pages, analytics pages, and any responsive grid-based interface.

It provides two layout strategies:

- Fixed responsive columns
- Auto-fitting columns based on available width

The component also includes layout animations, empty states, responsive column spans, sticky items, scrolling support, and responsive sizing.

---

# Components

```tsx
<AutoGrid>
    <AutoGrid.Item />
</AutoGrid>
```

---

# AutoGrid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `"fixed" \| "fit"` | `"fixed"` | Grid layout strategy. |
| `columns` | `GridColumns` | `{ base:1, md:2, xl:3 }` | Responsive column count. Used only in fixed mode. |
| `minItemWidth` | `number` | `320` | Minimum item width in pixels. Used only in fit mode. |
| `gap` | `SpacingScale` | `6` | Space between grid items. |
| `animation` | `"layout" \| "fade" \| "none"` | `"layout"` | Animation behavior. |
| `emptyState` | `ReactNode` | — | Component rendered when grid is empty. |
| `isEmpty` | `boolean` | `false` | Forces the empty state. |
| `scroll` | `boolean` | `false` | Enables scrolling. |
| `hideScrollbar` | `boolean` | `true` | Hides the scrollbar when scrolling is enabled. |
| `autoRows` | `string` | `"minmax(0, auto)"` | CSS `grid-auto-rows` value. |
| `className` | `string` | — | Additional Tailwind classes. |
| `style` | `CSSProperties` | — | Inline styles. |

---

# mode

Determines how columns are generated.

## fixed

Uses explicit responsive column counts.

```tsx
<AutoGrid
    mode="fixed"
    columns={{
        base: 1,
        md: 2,
        xl: 4,
    }}
>
    ...
</AutoGrid>
```

---

## fit

Automatically creates as many columns as possible based on available space.

```tsx
<AutoGrid
    mode="fit"
    minItemWidth={320}
>
    ...
</AutoGrid>
```

Equivalent CSS:

```css
grid-template-columns:
repeat(auto-fit,minmax(320px,1fr));
```

Perfect for:

- Dashboards
- Card layouts
- Responsive galleries
- Analytics

---

# columns

Responsive number of columns.

Available values

```
1
2
3
4
5
6
7
8
9
10
11
12
```

Example

```tsx
columns={{
    base: 1,
        sm: 2,
        md: 3,
        xl: 5,
}}
```

---

# minItemWidth

Minimum width of each item when using `mode="fit"`.

```tsx
<AutoGrid
    mode="fit"
    minItemWidth={280}
/>
```

---

# gap

Spacing between items.

Available values

```
0
1
2
3
4
5
6
8
10
12
16
20
24
```

Example

```tsx
<AutoGrid gap={8} />
```

---

# animation

Animation preset.

---

## layout

Uses Framer Motion layout animations.

Best for:

- Dashboards
- Sorting
- Filtering
- Resizing

```tsx
<AutoGrid animation="layout" />
```

---

## fade

Uses opacity animation only.

```tsx
<AutoGrid animation="fade" />
```

---

## none

Disables animation.

```tsx
<AutoGrid animation="none" />
```

---

# emptyState

Component rendered when no content exists.

```tsx
<AutoGrid
    emptyState={
        <EmptyProjects />
    }
/>
```

---

# isEmpty

Force the empty state regardless of children.

```tsx
<AutoGrid
    isEmpty
    emptyState={<EmptyState />}
/>
```

Useful while loading filtered data.

---

# scroll

Enables scrolling.

```tsx
<AutoGrid scroll />
```

---

# hideScrollbar

Hides the scrollbar.

```tsx
<AutoGrid
    scroll
    hideScrollbar
/>
```

---

# autoRows

Controls CSS `grid-auto-rows`.

Example

```tsx
<AutoGrid
    autoRows="240px"
/>
```

or

```tsx
<AutoGrid
    autoRows="minmax(300px,auto)"
/>
```

---

# AutoGrid.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `span` | `GridSpan` | `1` | Number of columns occupied. |
| `rowSpan` | `number \| "full"` | — | Number of rows occupied. |
| `sticky` | `boolean` | `false` | Makes the item sticky. |
| `align` | `"start" \| "center" \| "end" \| "stretch"` | `"stretch"` | Vertical alignment inside the grid. |
| `padding` | `SpacingScale` | — | Internal padding. |
| `minWidth` | `number \| string` | — | Minimum width. |
| `maxWidth` | `number \| string` | — | Maximum width. |
| `className` | `string` | — | Additional Tailwind classes. |
| `style` | `CSSProperties` | — | Inline styles. |

---

# span

Controls column span.

## Fixed span

```tsx
<AutoGrid.Item span={2}>
    ...
</AutoGrid.Item>
```

---

## Full width

```tsx
<AutoGrid.Item span="full">
    ...
</AutoGrid.Item>
```

---

## Responsive span

```tsx
<AutoGrid.Item
    span={{
        base: 1,
        md: 2,
        xl: 4,
    }}
>
    ...
</AutoGrid.Item>
```

---

# rowSpan

Makes an item occupy multiple rows.

```tsx
<AutoGrid.Item
    rowSpan={2}
/>
```

---

# sticky

Pins the item while scrolling.

```tsx
<AutoGrid.Item
    sticky
>
    ...
</AutoGrid.Item>
```

Perfect for:

- Sidebars
- Filters
- Navigation panels

---

# align

Controls item alignment.

Available values

```
start
center
end
stretch
```

Example

```tsx
<AutoGrid.Item
    align="center"
/>
```

---

# padding

Internal padding.

```tsx
<AutoGrid.Item
    padding={6}
/>
```

---

# minWidth

Minimum width.

```tsx
<AutoGrid.Item
    minWidth={280}
/>
```

---

# maxWidth

Maximum width.

```tsx
<AutoGrid.Item
    maxWidth={480}
/>
```

---

# Examples

## Responsive dashboard

```tsx
<AutoGrid
    columns={{
        base: 1,
        md: 2,
        xl: 4,
    }}
    gap={6}
>
    <AutoGrid.Item>
        ...
    </AutoGrid.Item>

    <AutoGrid.Item span={2}>
        ...
    </AutoGrid.Item>

    <AutoGrid.Item>
        ...
    </AutoGrid.Item>
</AutoGrid>
```

---

## Auto fitting cards

```tsx
<AutoGrid
    mode="fit"
    minItemWidth={320}
    gap={8}
>
    {projects.map(project => (
        <AutoGrid.Item
            key={project.id}
        >
            <ProjectCard />
        </AutoGrid.Item>
    ))}
</AutoGrid>
```

---

## Analytics layout

```tsx
<AutoGrid
    columns={{
        base: 1,
        lg: 12,
    }}
>
    <AutoGrid.Item span={3}>
        Sidebar
    </AutoGrid.Item>

    <AutoGrid.Item span={9}>
        Charts
    </AutoGrid.Item>
</AutoGrid>
```

---

## Empty state

```tsx
<AutoGrid
    isEmpty={projects.length === 0}
    emptyState={
        <EmptyProjects />
    }
>
    {projects.map(...)}
</AutoGrid>
```

---

# Best Practices

Use **fixed mode** for:

- Dashboards
- Admin panels
- Forms
- Settings pages

Use **fit mode** for:

- Galleries
- Card grids
- Project lists
- Responsive content collections

Use `span="full"` for:

- Headers
- Search bars
- Hero cards
- Section titles

Use `sticky` for:

- Sidebars
- Filters
- Navigation
- Tool panels

Prefer `animation="layout"` unless rendering thousands of items.