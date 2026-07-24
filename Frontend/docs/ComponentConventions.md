
This is what most AI models need.

Instead of

Make a button

they need to know how your project builds buttons.

Example:

# Component Conventions

## Components solve one responsibility.

Avoid components that mix:

- layout
- styling
- business logic

---

## Prefer composition.

Bad

<Page>

<Card>

<CardBody>

<CardContent>

<ContentWrapper>

Good

<Page>

<section>

---

## Buttons

Buttons are ordinary.

No icons unless the action genuinely benefits.

Normal padding.

Small radius.

One accent color.

---

## Forms

Label

↓

Input

↓

Help text

↓

Error

↓

Action

No floating labels.

No icon inside every field.

---

## Tables

Prefer tables whenever users compare data.

Do not replace tables with decorative cards.

---

## Lists

Prefer ordinary lists.

Only convert to cards if interaction requires it.
