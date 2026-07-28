
# DesignMyPlot Frontend Agent Guidelines

## Important: Next.js Version

This project may use Next.js APIs and conventions newer than the model's
training data.

Before making assumptions about Next.js APIs, routing, configuration, or
conventions, inspect the relevant documentation available in:

`node_modules/next/dist/docs/`

Do not use deprecated APIs when the installed version provides a newer
recommended approach.

---

## Project

DesignMyPlot is a web application for planning and designing residential
plots.

The frontend should be treated as a production application, not a demo
or generic SaaS template.

---

## Architecture

- Framework: Next.js with App Router.
- Root application directory: `app/`.
- No `src/` directory is used.
- Routes belong in `app/`.
- Reusable and feature-specific UI belongs in `components/`.
- Shared utilities and clients belong in `lib/`.
- Static assets belong in `public/`.

Keep the frontend modular and easy to navigate.

Example:

Frontend/
├── app/
├── components/
│   ├── landing/
│   ├── dashboard/
│   └── ui/
├── lib/
└── public/

Do not place reusable application components inside `app/` unless there
is a specific routing/layout reason for doing so.

---

## Frontend Design

For ALL frontend design work, use the installed `frontend-design` skill.

The `frontend-design` skill is the primary authority for:

- visual direction
- typography
- hierarchy
- composition
- spacing
- interaction
- motion
- responsive behavior
- overall product identity

Do not default to generic AI-generated SaaS layouts.

Do not automatically use patterns such as:

`navbar → hero → three cards → CTA → footer`

Design around the actual DesignMyPlot product and user experience.

The frontend-design skill determines HOW the experience should look and
feel. shadcn/ui provides the implementation primitives used to build that
experience.

---

## UI Implementation — shadcn/ui First

shadcn/ui is the DEFAULT component system for this frontend.

For every frontend implementation task:

1. Use the `frontend-design` skill to establish the design direction.
2. Use the configured shadcn MCP to search for suitable shadcn components
   before implementing UI primitives manually.
3. Prefer existing shadcn/ui components whenever an appropriate component
   exists.
4. Use shadcn components as the foundation of the interface.
5. Compose and customize shadcn components using Tailwind utility classes.
6. Do NOT manually recreate components that already exist in shadcn/ui.

Prefer shadcn components for standard UI including:

- Button
- Card
- Dialog
- Alert Dialog
- Drawer
- Sheet
- Input
- Textarea
- Select
- Checkbox
- Radio Group
- Switch
- Slider
- Tabs
- Accordion
- Dropdown Menu
- Navigation Menu
- Menubar
- Tooltip
- Popover
- Hover Card
- Command
- Table
- Badge
- Separator
- Form
- Sidebar
- Breadcrumb
- Pagination
- Skeleton
- Progress
- Sonner
- Carousel

Always check the shadcn MCP for an appropriate existing component before
building a standard UI primitive yourself.

---

## No Custom CSS

Do NOT create custom CSS for normal application UI.

Do NOT create:

- CSS Modules
- `*.module.css`
- page-specific CSS files
- component-specific CSS files
- large handwritten stylesheets
- custom CSS classes for standard UI
- duplicated styles already achievable through Tailwind or shadcn

Files such as these should NOT be created:

`Hero.module.css`
`Landing.module.css`
`Dashboard.module.css`
`Navbar.module.css`
`Features.module.css`

Do not move page-specific CSS into `globals.css` as a workaround.

### Styling priority

Always follow this order:

`frontend-design skill`
↓
`shadcn MCP`
↓
`shadcn/ui components`
↓
`Tailwind utility classes`

Do not introduce handwritten CSS when the same result can reasonably be
implemented using shadcn and Tailwind.

### globals.css

`globals.css` should be limited to what is genuinely required globally,
including:

- Tailwind setup/imports
- shadcn theme variables
- global design tokens
- font configuration when required
- minimal application-wide base styles

Do NOT place landing-page, dashboard, component, or feature-specific
styles in `globals.css`.

---

## Product-Specific UI

Not every DesignMyPlot experience will have an equivalent shadcn component.

Product-specific experiences such as:

- plot visualization
- plot boundaries
- dimension overlays
- site plans
- drawing surfaces
- road orientation
- setback visualization
- interactive planning canvases
- architectural/site-specific visualization

may require custom React components.

Even for these components:

1. Use shadcn for surrounding controls and standard UI.
2. Use Tailwind for normal layout and styling.
3. Avoid standalone CSS files.
4. Introduce custom styling/rendering techniques only when technically
   required by the visualization itself.

Do not force a shadcn Card or other generic primitive onto a product-specific
experience when a custom composition is more appropriate.

---

## Component Organization

Keep components modular but avoid unnecessary fragmentation.

Example:

components/
├── landing/
│   ├── Hero.tsx
│   ├── PlotPreview.tsx
│   └── ...
│
├── dashboard/
│   └── ...
│
└── ui/
    ├── button.tsx
    ├── dialog.tsx
    ├── input.tsx
    └── ... shadcn components

`components/ui/` is primarily for shadcn/ui primitives.

`components/landing/`, `components/dashboard/`, and other feature
directories compose those primitives into actual product experiences.

A component should have a clear responsibility.

Do not create dozens of tiny components simply for the sake of
componentization.

---

## Existing CSS and Legacy UI

When rebuilding an existing page:

- Do not reuse obsolete CSS from the previous implementation.
- Remove unused CSS Modules and page-specific styles.
- Remove dead components after they have been replaced.
- Do not preserve an old visual structure merely because code already exists.
- Do not migrate old CSS into `globals.css`.
- Rebuild the UI using the frontend-design skill + shadcn + Tailwind approach.

If an existing component can be replaced by an appropriate shadcn primitive,
prefer the shadcn implementation.

---

## General Engineering Rules

- Preserve existing functionality unless explicitly asked to change it.
- Prefer readable code over clever abstractions.
- Avoid unnecessary dependencies.
- Avoid duplicated components and styles.
- Remove dead code after replacing an implementation.
- Maintain responsive behavior.
- Maintain accessibility.
- Do not invent product functionality unless explicitly requested.
- Use semantic HTML.
- Use TypeScript correctly.
- Prefer Server Components unless client-side behavior requires `"use client"`.
- Keep client components as small as reasonably possible.

---

## Required Frontend Workflow

For frontend tasks, follow this workflow:

1. Read this `AGENTS.md`.
2. Read the relevant installed `frontend-design` skill.
3. Understand the requested product experience.
4. Establish the visual/design direction.
5. Query the shadcn MCP for relevant components.
6. Use shadcn components wherever suitable.
7. Compose them using Tailwind utilities.
8. Build custom components only for genuinely product-specific UI.
9. Do not create custom CSS files.
10. Remove obsolete UI/CSS left by the implementation being replaced.
11. Verify responsiveness, accessibility, and functionality.

The intended relationship is:

Frontend Design Skill
        ↓
Design / UX decisions
        ↓
shadcn MCP
        ↓
shadcn/ui components
        ↓
Tailwind composition
        ↓
DesignMyPlot frontend

The frontend-design skill decides the experience.

shadcn/ui provides the standard implementation primitives.

Tailwind handles composition and styling.

Custom CSS is not part of the normal frontend implementation workflow.
