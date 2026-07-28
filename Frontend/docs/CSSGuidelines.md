# CSS Guidelines

CSS should support structure, hierarchy, and interaction state. It should not compensate for weak product thinking.

## Prefer Boring CSS First

Use these before advanced effects:

- `display`
- `grid`
- `flex`
- `gap`
- `padding`
- `margin`
- `border`
- `line-height`
- `font-size`
- `max-width`

Use these only when there is a specific reason:

- `transform`
- `filter`
- `backdrop-filter`
- `animation`
- `absolute`
- `fixed`
- large decorative gradients

## Spacing

Use predictable spacing values:

```text
4, 8, 12, 16, 24, 32, 48, 64
```

Spacing should communicate grouping and hierarchy. It should not be random or ornamental.

## Radius

Recommended defaults:

```text
Buttons: 4-6px
Inputs: 4-6px
Cards: 6-8px
Panels: 6-8px
```

Avoid pill shapes unless the component is actually a badge, chip, tag, or segmented control.

## Containers

Use constrained widths for readability:

```text
Main content: 1080-1200px
Long-form text: 60-75 characters
Forms: 420-640px depending on complexity
```

## Shadows

Shadows are allowed only when they communicate elevation, focus, or layering.

Do not use shadows to make plain content feel more designed.

## Animation

Animation should communicate state:

- Loading
- Opening
- Closing
- Reordering
- Success
- Failure

Avoid animation that exists only to make the UI feel dynamic.

## Color

Color should support meaning:

- Primary action
- Status
- Warning
- Error
- Selection
- Focus

Avoid one-note palettes and decorative gradients. The product should feel like a work tool, not a visual demo.
