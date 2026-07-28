# UI Execution Rules

These rules override default LLM UI behavior.

## Before Writing Code

Reason internally about:

- Page purpose
- User goal
- Information hierarchy
- Layout composition
- Primary action
- Loading, empty, and error states

Only after this should JSX and CSS be generated.

## Never Start From Templates

Do not automatically generate this pattern:

```text
Header
Centered hero
Centered CTA
Three cards
Footer
```

Use it only when the product requirements naturally lead to that structure.

## Every Section Must Earn Its Place

Never add sections because landing pages usually have them.

Each section must answer:

```text
What problem does this section solve?
```

If none, remove it.

## Every Wrapper Must Earn Its Place

Every `div` should exist for a reason:

- Layout
- Grouping
- State
- Accessibility
- Semantics

If a wrapper exists only because styling became difficult, reconsider the layout.

## Every Card Must Earn Its Place

Cards are optional.

Use cards for:

- Repeated entities
- Isolated controls
- Modals
- Focused summaries
- Interactive records

Do not wrap every section in a card. If spacing and typography communicate hierarchy, avoid adding another container.

## Layout Before Styling

Do not begin with:

- Colors
- Gradients
- Cards
- Buttons
- Shadows
- Animation

Begin with:

- Information hierarchy
- Grouping
- Reading order
- Navigation
- Primary action

Then style.

## Avoid Visual Repetition

Avoid making every section:

- Centered
- Equal height
- Equal width
- Equally spaced
- Card-based

Different content deserves different composition.

## Prefer Deleting

If uncertain, remove UI.

Human engineers simplify. AI-generated UI often decorates. Prefer deleting weak components over adding more visual treatment.

## Before Completion

Ask:

```text
Can another engineer explain every layout decision?
```

If not, simplify.
