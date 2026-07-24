
This is the document your project is missing.

It contains rules that must never be broken.

Example:

# UI Execution Rules

These rules override default LLM behaviour.

---

## Before Writing Code

Perform the following reasoning internally.

Do not output this reasoning unless explicitly requested.

Determine:

- Page purpose
- User goal
- Information hierarchy
- Layout composition

Only after this should JSX/CSS be generated.

---

## Never Start From Templates

Do not automatically generate:

Header

↓

Centered Hero

↓

Centered CTA

↓

Three Cards

↓

Footer

unless the product requirements naturally lead to this layout.

---

## Every Section Must Earn Its Place

Never add sections because:

"Landing pages usually have them."

Each section must answer:

"What problem does this section solve?"

If none,

remove it.

---

## Every Wrapper Must Earn Its Place

Every div should exist for one reason.

If a wrapper exists only to help styling,

ask whether spacing or layout can solve it instead.

Prefer flatter DOM trees.

---

## Every Card Must Earn Its Place

Cards are optional.

Do not wrap every block inside another container.

If spacing and typography communicate hierarchy,

do not introduce another card.

---

## Layout Before Styling

Never think about colors first.

Never think about buttons first.

Never think about cards first.

First solve:

- information hierarchy
- grouping
- reading order
- navigation
- primary action

Then style.

---

## Avoid Visual Repetition

Avoid making every section:

- centered
- equal height
- equally spaced
- equal width

Allow rhythm.

Different content deserves different composition.

---

## Prefer Deleting

If uncertain,

remove UI.

Human engineers simplify.

AI generators decorate.

Prefer deleting components over adding them.

---

## Before Completion

Ask:

Can another engineer explain every layout decision?

If not,

simplify.
