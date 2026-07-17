# Background

`Background` provides decorative, theme-aware layers for pages, sections, panels, and cards. Every variant derives its appearance from the semantic `--background`, `--card`, `--muted`, `--border`, `--foreground`, and `--primary` variables. It therefore follows the active light or dark theme without raw palette colors or per-theme component overrides.

```tsx
import { Background } from "@repo/ui/views";
```

## Correct composition

Backgrounds are layers, not layout elements. Put them in a positioned, isolated host with a defined height, and place content above them. `Container` already supplies `relative`; for native elements, add it yourself.

```tsx
<section className="relative isolate min-h-80 overflow-hidden">
    <Background.Grid />

    <div className="relative z-10">
        Content
    </div>
</section>
```

`isolate` makes the host a local stacking context. Keep the background at `zIndex={0}` (the default) and content at `z-10`; do not use negative z-indices for these layers.

## Shared props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `"container" \| "page"` | `"container"` | `container` fills the positioned host; `page` uses a fixed viewport layer. |
| `interactive` | `boolean` | `false` | Lets a decorative layer receive pointer events. Enable only for a cursor highlight or ripple. |
| `opacity` | `number` | `1` | Opacity for the complete background layer. |
| `zIndex` | `number` | `0` | Layer order within an isolated host. Content should normally use `z-10`. |
| `className` / `style` | native div props | — | Optional layout or visual adjustments. |

## Page backgrounds

Use `mode="page"` only for a viewport background. It is `fixed`, so it is independent of route content height.

```tsx
<div className="relative isolate min-h-screen">
    <Background.Main mode="page" gradient="radial" />

    <main className="relative z-10">…</main>
</div>
```

## `Background.Main`

The main canvas combines the current semantic surface with subtle tonal depth. It is the right default for app shells and large sections.

| Prop | Type | Default |
| --- | --- | --- |
| `gradient` | `"none" \| "radial" \| "linear"` | `"radial"` |

```tsx
<Background.Main gradient="linear" />
```

## `Background.Glass`

Glass uses a translucent semantic card surface, a fine semantic border, and backdrop blur. It needs visible content behind it to produce a noticeable blur; on a completely flat surface it intentionally reads as a refined translucent panel instead of a heavy fog.

| Prop | Type | Default |
| --- | --- | --- |
| `blur` | `"none" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl"` | `"xl"` |

```tsx
<div className="relative isolate overflow-hidden rounded-2xl">
    <Background.Main />
    <Background.Glass blur="xl" />
    <div className="relative z-10 p-8">Panel content</div>
</div>
```

## `Background.Grid`

Grid uses a semantic border color mixed with transparency and a theme surface fade, so its lines remain visible without overpowering content in either mode.

| Prop | Type | Default |
| --- | --- | --- |
| `gridSize` | `24 \| 32 \| 36 \| 40 \| 48 \| 56 \| 64` | `40` |
| `fade` | `boolean` | `true` |
| `interactiveHighlight` | `boolean` | `false` |

The pointer spotlight requires both interaction props:

```tsx
<Background.Grid interactive interactiveHighlight gridSize={36} />
```

## `Background.Ripple`

Ripple measures its host with `ResizeObserver`, then creates a grid that fills the available width and height. Cell density adapts to the host and is capped at 720 cells to avoid costly full-screen animation work. It uses your `rows` and `cols` values only as the server-side and pre-measurement estimate.

| Prop | Type | Default |
| --- | --- | --- |
| `rows` / `cols` | `number` | `8` / `28` |
| `cellSize` | `24 \| 32 \| 40 \| 48 \| 56 \| 64` | `56` |
| `cellOpacity` | `number` | `0.45` |
| `interactiveHighlight` | `boolean` | `false` |

```tsx
<div className="relative isolate min-h-96 overflow-hidden rounded-2xl">
    <Background.Ripple
        cellSize={48}
        interactive
        interactiveHighlight
    />

    <div className="relative z-10 p-8">Click open canvas space to ripple.</div>
</div>
```

All backgrounds respect `prefers-reduced-motion`; ripple animation is disabled when the user requests reduced motion.
