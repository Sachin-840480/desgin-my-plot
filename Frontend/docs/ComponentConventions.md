# Component Conventions

Components should make the product easier to reason about. Avoid building a component library before the product has stable patterns.

## Responsibility

Each component should own one clear concern:

- Layout composition
- Data display
- User input
- Navigation
- Feedback state

Avoid components that combine layout, data fetching, business rules, and visual styling in one place.

## Composition

Prefer simple composition over nested component chains.

Bad:

```tsx
<Page>
  <Card>
    <CardBody>
      <CardContent>
        <ContentWrapper />
      </CardContent>
    </CardBody>
  </Card>
</Page>
```

Better:

```tsx
<main>
  <section>
    <ProjectSummary />
  </section>
</main>
```

## Buttons

Buttons should be ordinary and predictable.

- Use icons only when the icon improves recognition.
- Keep padding modest.
- Use small radius.
- Use one primary accent style.
- Do not make every action visually loud.

## Forms

Use a stable field structure:

```text
Label -> Input -> Help text -> Error -> Action
```

Rules:

- No floating labels.
- No decorative icons inside every field.
- Validation messages should be specific.
- Required fields should be clear.
- Submit actions should describe the operation.

## Tables

Use tables when users compare structured data.

Do not replace comparable rows with decorative cards. Cards are worse when users need to scan names, status, dates, counts, or actions.

## Lists

Use ordinary lists for simple sequences.

Convert a list item into a card only when the item has multiple actions, nested metadata, or a meaningful independent state.

## Empty And Error States

Every data-driven component should define:

- Loading state
- Empty state
- Error state
- Permission denied state, when relevant

Do not hide missing backend behavior behind polished static UI.
