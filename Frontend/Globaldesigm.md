
# UI RULE — BUILD LIKE A HUMAN FRONTEND DEV, NOT AN AI GENERATOR

Applies to all frontend/CSS work in this project, except Clerk-hosted
sign-in and sign-up under `/auth/*` (Clerk default UI only: no `.app-ui`
wrapper, no Tailwind preflight on auth, no shared button/input rules).

Scope all application styles under `.app-ui` only.

---

# Goal

Build interfaces that feel like they were implemented by an experienced
frontend engineer maintaining a real SaaS product.

The objective is **not** to make pages look "modern", "premium", or
"award-winning".

The objective is to make pages:

- easy to understand
- easy to scan
- balanced
- readable
- maintainable
- production-ready

A user should notice the content first—not the styling.

If every color were removed and the page became grayscale, the layout should
still feel organized and usable.

---

# Design Philosophy

Think like an engineer solving layout problems.

Not like a designer decorating a canvas.

Before writing CSS, always ask:

> What problem does this styling solve?

Examples:

✓ Content needs a readable width.

✓ This section needs separation.

✓ These controls belong together.

✓ The primary action should be obvious.

Never ask:

> "How can I make this look cooler?"

---

# Design References

Use the design philosophy of products such as:

- GitHub
- Stripe Dashboard
- Stripe Docs
- Linear
- Vercel Dashboard
- React.dev
- Notion
- Clerk Dashboard
- MDN

**Not because they are minimal.**

Because they solve usability with:

- spacing
- alignment
- typography
- hierarchy
- composition

rather than decoration.

Do **NOT** copy their UI.

Do **NOT** recreate their layouts.

Only borrow their engineering philosophy.

Never build pages that resemble:

- AI-generated landing pages
- Dribbble concepts
- award-site portfolios
- startup template websites

The page should feel professionally engineered—not artistically designed.

---

# Core Question

Never ask

> "How do I make this impressive?"

Always ask

> "What's the simplest layout that makes this content usable?"

---

# Layout Philosophy

Content determines layout.

Never create layout for visual effect.

Every page should naturally flow from the information it contains.

Landing pages:

Header

↓

Introduction

↓

Primary action

↓

Real product preview (if one exists)

↓

Features / workflow

↓

Footer

Dashboards:

Title + description

↓

Primary action

↓

Toolbar

↓

Real content

Forms:

Title

↓

Description

↓

Fields

↓

Actions

Avoid decorative wrappers.

Avoid unnecessary nesting.

Avoid empty filler sections.

---

# Visual Hierarchy

Hierarchy should come from:

- spacing
- typography
- alignment
- grouping

Not from:

- gradients
- shadows
- oversized fonts
- decorative colors
- animations

The page should remain readable when printed in black and white.

---

# The AI-Tell Blocklist

Do not use these unless the product genuinely needs them:

- giant hero sections
- split-screen heroes
- oversized marketing headlines
- gradient text
- gradient backgrounds
- glassmorphism
- glowing buttons
- blurred decorative shapes
- floating cards
- fake browser mockups
- excessive badges
- eyebrow labels
- feature-card grids
- fake statistics
- decorative illustrations
- giant empty whitespace
- centered pages using `min-height:100vh`
- scroll animations
- reveal animations
- parallax
- floating effects
- pulsing effects
- bouncing elements
- shadows on everything
- random accent colors
- icons everywhere
- oversized rounded corners
- pill buttons everywhere
- wrapper soup

---

# Typography

Typography should carry the design.

Body:

16px

Small text:

13–14px

Heading scale:

H1 → 34–40px

H2 → 24–28px

H3 → 18–20px

Avoid:

- 64px marketing headlines
- gradient text
- color-per-word headlines
- uppercase eyebrow labels
- heavy font weights everywhere
- excessive letter spacing

Use bold only where hierarchy requires it.

---

# Color

Most of the interface should remain neutral.

Use:

- neutral background
- near-black text
- muted gray text
- subtle borders
- one brand color

Brand color should only indicate:

- primary buttons
- links
- selected states
- focus states

Never color entire sections simply for visual interest.

---

# Backgrounds

Prefer plain backgrounds.

No:

- gradients
- blur
- decorative textures
- patterns
- glowing backgrounds

Whitespace is usually a better separator than decoration.

---

# Borders, Radius & Shadows

Prefer separation in this order:

1. spacing
2. border
3. shadow (only if actual elevation is needed)

Radius:

Inputs:

4–6px

Buttons:

4–6px

Cards:

6–8px

Avoid oversized rounded corners.

Avoid floating effects.

---

# Buttons

Buttons should simply look clickable.

Use:

- normal padding
- small radius
- one brand color
- subtle hover

Avoid:

- glow
- gradients
- scaling
- bouncing
- oversized icons
- unnecessary arrows

---

# Cards

Do not wrap everything inside cards.

Cards exist only when they improve comprehension.

Default card:

- white background
- 1px border
- 6–8px radius
- no shadow

Often:

Heading

↓

Paragraph

↓

Divider

works better than another card.

---

# Spacing

Spacing is the primary design tool.

Use a consistent spacing scale:

8

12

16

24

32

48

64

Large whitespace should improve readability.

Never use whitespace to fake elegance.

---

# Containers

Content container:

1080–1200px

Readable text width:

60–75 characters

Never stretch paragraphs across the entire viewport.

---

# Alignment

Everything should align to an invisible grid.

Buttons align with text.

Sections align with each other.

Titles align with content.

Never offset things simply because it looks artistic.

---

# Layout

Prefer:

Flexbox

for one-dimensional layouts.

Use Grid only when content naturally forms a grid.

Never use layout purely for visual composition.

---

# Navigation

Simple navigation:

Logo

Links

Account action

Height:

56–64px

Optional bottom border.

No floating navbar.

No glass.

No blur.

No unnecessary shadow.

---

# Landing Pages

A landing page should explain the product.

Not market the product.

Use:

Header

↓

Introduction

↓

Primary action

↓

Real product preview

↓

Workflow

↓

Features

↓

Footer

Never invent:

- testimonials
- company logos
- fake metrics
- fake screenshots
- fake charts

Sparse but honest is better than decorative.

---

# Dashboards

Prefer interfaces like:

My Items                        [Create]

Manage your saved items.

---

Search...                Sort by

---

Table

over decorative cards.

Optimize for work—not marketing.

---

# Forms

Use:

Label

↓

Input

↓

Help text (if needed)

↓

Actions

No illustrations.

No giant floating form cards.

No motivational copy.

---

# Tool / Editor Interfaces

Optimize for productivity.

Compact toolbar.

Large workspace.

Simple controls.

No marketing layout.

---

# Never Invent Content

Never fabricate:

- stats
- charts
- customer logos
- testimonials
- screenshots
- notifications

Real content only.

---

# CSS Philosophy

Write CSS like someone maintaining a production codebase.

Prefer using:

- margin
- padding
- display
- gap
- border
- max-width
- line-height
- font-size

before using:

- transform
- filter
- backdrop-filter
- blur
- absolute positioning
- animations
- box-shadow

Use the simplest CSS that solves the layout problem.

---

# Respect Existing Code

Before changing UI:

Check the existing:

- framework
- CSS methodology
- component structure
- design tokens

Stay consistent.

Do not introduce another UI framework.

Do not rewrite:

- routing
- authentication
- API calls
- business logic
- forms
- permissions
- state management

This is a presentation-only pass.

---

# Don't Over-Deliver

Implement exactly what was requested.

Don't add:

- extra sections
- decorative content
- "nice-to-have" polish
- invented product features

A clean, well-aligned page is better than an elaborate one.

---

# Final Self Review

Before finishing:

Search your CSS for:

- gradient
- box-shadow
- filter
- backdrop-filter
- blur
- transform
- animation
- absolute positioning
- huge border-radius
- huge font-size
- min-height:100vh

For every occurrence ask:

**Does this solve a real problem?**

If not,

remove it.

Then review the page:

- Is alignment consistent?
- Is spacing consistent?
- Is typography carrying the design?
- Is the reading order obvious?
- Is the primary action obvious?
- Could this page work without colors?
- Is anything decorative without purpose?

If yes,

simplify it.

---

# One-Line Summary

Prefer ordinary CSS used exceptionally well over clever CSS.

Prefer spacing over decoration.

Prefer typography over effects.

Prefer hierarchy over marketing.

Prefer usability over visual impact.

Prefer content over ornament.

When unsure, choose the simpler solution.

---

# Guiding Principle

Design pages like they were built by an experienced SaaS frontend engineer working on products such as GitHub, Stripe Docs, Linear, Vercel, Notion, or Clerk—not like a Dribbble concept or an AI website generator.

Prioritize composition, spacing, typography, alignment, and information hierarchy over visual decoration.

The page should look professionally engineered rather than artistically designed.
