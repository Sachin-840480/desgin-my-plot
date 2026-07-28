# Frontend Review Checklist

Use this checklist before considering any UI work complete. The goal is not to make the screen look impressive in isolation. The goal is to make the product easier to understand, use, maintain, and extend.

## Product Fit

- Does the screen support a real user workflow?
- Is every section tied to a user decision or action?
- Is placeholder or fake content avoided?
- Would the UI still make sense with real data, empty data, and error states?

## Information Architecture

- Is the primary user goal obvious within a few seconds?
- Is the reading order clear from top to bottom and left to right?
- Are related controls grouped together?
- Can the page be understood without relying only on color?

## Layout

- Can any wrapper or section be removed?
- Does spacing create hierarchy instead of decoration?
- Is alignment consistent across repeated elements?
- Does the layout adapt cleanly on mobile and desktop?
- Are cards used only when they frame a real unit of interaction or comparison?

## Components

- Does each component have one responsibility?
- Are forms, buttons, lists, and tables using the project conventions?
- Are repeated patterns consistent across screens?
- Is component composition simple enough for another engineer to maintain?

## CSS

- Does every CSS rule solve a layout, readability, or state problem?
- Are effects such as shadows, animations, filters, and absolute positioning justified?
- Are spacing, radius, font size, and max width using predictable values?
- Is the DOM simpler than the styling suggests?

## Accessibility

- Are labels, focus states, and keyboard paths handled?
- Is contrast sufficient?
- Are buttons and links semantically correct?
- Are loading, empty, and error states understandable?

## Final Review Question

Would a senior frontend engineer believe this was designed for a real product workflow?

If the answer is no, simplify the page before adding more visual treatment.
