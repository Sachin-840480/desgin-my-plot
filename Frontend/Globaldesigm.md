
# GLOBAL FRONTEND UI RULE — NATURAL, HUMAN-WRITTEN CSS

This instruction applies to ALL frontend work in this project.

The goal is NOT to generate a "beautiful modern UI".

The goal is to build a clean, normal, well-structured interface that feels
like a frontend developer manually designed and coded it.

Do not use the visual habits commonly produced by AI website generators.

============================================================
CORE RULE
=========

STOP trying to make the interface look impressive.

Do not "enhance" the UI.

Do not "modernize" it using decorative CSS.

Do not generate a Dribbble-style, startup-style, SaaS-style, AI-generated,
or portfolio-showcase interface.

Write CSS like a careful frontend developer solving ordinary layout,
readability, spacing, responsiveness, and usability problems.

Use ordinary CSS fundamentals:

display
flex
grid
gap
padding
margin
width
max-width
min-width
font-size
font-weight
line-height
border
border-radius
background
color
position

Use advanced/decorative CSS only when there is an actual functional reason.

============================================================
DO NOT DESIGN FROM VISUAL TRENDS
================================

Never begin by asking:

"How can I make this look modern?"

Instead ask:

"What is the simplest layout that makes this content easy to use?"

Do not automatically use patterns associated with generated websites.

Specifically avoid automatically creating:

- giant hero sections
- split-screen hero layouts
- oversized headlines
- highlighted words inside headlines
- gradient text
- gradients
- glows
- blurred background shapes
- glassmorphism
- floating cards
- decorative mockups
- fake browser windows
- excessive rounded rectangles
- pill labels above headings
- eyebrow labels
- excessive badges
- large CTA blocks
- feature-card grids
- statistic blocks
- decorative illustrations
- abstract graphics
- fancy dividers
- oversized empty space
- unnecessary animations
- decorative grid backgrounds
- dark "premium" themes
- random accent colors
- excessive shadows

Do not use these unless the existing product genuinely requires one.

============================================================
NO AUTOMATIC HERO DESIGN
========================

A landing page does NOT automatically require a "hero".

Do not automatically create:

small uppercase label

BIG HEADLINE WITH
COLORED WORDS

marketing paragraph

[Large CTA →]

    decorative product mockup

This pattern is specifically unwanted.

If the page only needs:

heading
description
button
product information

then arrange those things normally.

Do not transform ordinary content into a marketing composition.

============================================================
DO NOT STYLE TEXT FOR DRAMA
===========================

Headings should communicate hierarchy, not create visual spectacle.

Do not automatically:

- make headings 60px+
- split headings across multiple lines
- color individual words
- use gradient text
- use extremely heavy font weights
- use huge differences between heading and body text
- use uppercase letter-spaced labels above headings

Use ordinary typography.

Typical starting direction:

body:
16px

small text:
13-14px

normal page heading:
32-40px

section heading:
22-28px

component heading:
16-20px

These are guidelines, not requirements.

If 36px works, do not use 64px.

============================================================
USE NORMAL COLORS
=================

Use a simple product palette.

For DesignMyPlot:

background:
light neutral / warm white

text:
near-black

secondary text:
gray

brand:
earthy orange

border:
light neutral gray

That is enough for most pages.

Do NOT create multiple shades simply to make the interface look sophisticated.

Do not automatically create a dark theme.

Do not use orange everywhere just because it is the brand color.

Brand color should primarily identify:

primary actions
selected states
links where appropriate
small important details

Most of the interface should remain neutral.

============================================================
USE NORMAL BACKGROUNDS
======================

Prefer:

background: #fff;

or a subtle warm neutral.

Do not automatically use:

linear-gradient(...)
radial-gradient(...)
background-image
blurred pseudo-elements
pattern overlays
grid backgrounds
noise textures

A plain background is completely acceptable.

Do not decorate empty space.

============================================================
USE BORDERS BEFORE SHADOWS
==========================

For separation, first consider:

spacing

then:

1px border

then, only if elevation is actually required:

a subtle shadow.

Do not automatically add box-shadow to:

buttons
cards
inputs
navigation
sections
images

A normal border is often enough.

============================================================
KEEP BORDER RADIUS RESTRAINED
=============================

Do not round everything.

Suggested general direction:

inputs:
4-8px

buttons:
4-8px

cards/panels:
6-10px

Some elements can have no radius.

Avoid automatically using:

12px
16px
20px
24px
9999px

everywhere.

Pills should only be used when the component is actually pill-like.

============================================================
BUTTONS SHOULD LOOK LIKE BUTTONS
================================

A normal primary button can simply be:

brand background
white text
normal padding
small border radius

Do not automatically add:

shadow
glow
gradient
large arrow icon
scale animation
oversized padding

Hover can simply change the background slightly.

Do not make buttons visually dramatic.

============================================================
DO NOT TURN CONTENT INTO CARDS
==============================

Content does not need a rectangle around it merely because it is grouped.

Prefer:

heading
text
spacing
divider

before:

card

Use a card only when the boundary helps the user understand the interface.

If cards are necessary, keep them simple:

plain background
1px border
small radius
normal padding

No floating effect unless functionally appropriate.

============================================================
SPACING SHOULD FEEL MANUAL
==========================

Do not create enormous whitespace to make the page look premium.

Use practical spacing.

For example:

8px   small relationship
12px
16px  common spacing
24px  component separation
32px  larger separation
48px  section separation
64px  major separation

Use larger values only when the composition genuinely needs them.

Do not vertically center small content inside the entire browser window.

Do not use min-height: 100vh merely for appearance.

============================================================
CONTAINERS SHOULD BE PRACTICAL
==============================

Use a straightforward content container.

For example:

max-width around 1100-1200px
margin: 0 auto
normal horizontal padding

Do not artificially make content extremely narrow.

Do not create excessive nested containers.

Avoid:

container
  wrapper
    inner
      content-wrapper
        card

when one or two elements would work.

============================================================
LAYOUT SHOULD COME FROM CONTENT
===============================

Use flexbox when arranging things in one direction.

Use grid when the content genuinely forms a grid.

Do not use Grid simply to create a visually impressive composition.

Do not create asymmetry just because it looks editorial.

Do not create symmetry just because it looks clean.

Follow the content.

============================================================
LANDING PAGE RULE
=================

For the DesignMyPlot landing page:

Keep it straightforward.

A reasonable structure is:

Header

Main introduction

Useful explanation of what DesignMyPlot does

Primary action

Actual product information / preview if one exists

Features or workflow

Footer

Do NOT force all of this into one screen.

Do NOT create a giant marketing hero.

Do NOT create a fake drawing/editor preview purely for decoration.

If an actual application screenshot or real product component exists,
it may be shown.

Do not invent one merely to make the landing page look richer.

============================================================
APPLICATION PAGE RULE
=====================

Application pages should look like application pages.

Use straightforward structures such as:

Page title                         Primary action

Description

---

Actual content

For example:

My Plots                         [Create plot]

View and manage your saved plots.

---

Search...                       Sort by ▾

Plot name       Size       Modified       Status
Home Plot       40×60      Today          Draft
Farm            2 acres    Yesterday      Saved

This is preferable to turning every plot into a large decorative card.

============================================================
FORM RULE
=========

Forms should be ordinary, readable forms.

Example:

Create plot

Enter the dimensions of your land.

Plot name
[____________________________]

Width
[____________]

Length
[____________]

Unit
[Feet ▾]

[Cancel]   [Create plot]

Do NOT put this inside a giant floating card unless necessary.

Do NOT add an illustration merely to balance the screen.

Do NOT add motivational copy.

Do NOT add icons to every field.

============================================================
EDITOR RULE
===========

The plot editor is a tool.

Optimize it for work.

Example:

---

Back     Plot name                     Save        Export
---------------------------------------------------------

Tools       |
            |
Select      |
Boundary    |            CANVAS
Building    |
Road        |
Tree        |
            |
-------------

Keep toolbars compact.

Use plain controls.

Do not make tool buttons large decorative cards.

Do not make the editor look like a marketing page.

============================================================
NAVIGATION RULE
===============

Use a normal navigation bar.

Logo
navigation links
account/action

Normal height.
Normal spacing.
Simple active state.
Subtle bottom border if useful.

Do not make navigation float.

Do not put the navbar inside a rounded container.

Do not use glass effects.

Do not add decorative shadows without reason.

============================================================
ICONS
=====

Icons are optional.

Text is often enough.

Use icons when they make controls easier to recognize.

Do not add icons to:

every heading
every button
every input
every feature
every navigation item

Do not place every icon inside a colored circle or square.

============================================================
ANIMATION
=========

Do not add animation unless interaction benefits from it.

Normal hover/focus transitions are enough.

Approximately 100-200ms is generally sufficient.

Do not add:

floating
bouncing
pulsing
scroll reveal
fade-up-on-everything
parallax
animated gradients

unless explicitly requested.

============================================================
DO NOT INVENT UI
================

Never invent content or interface elements just to improve appearance.

Do not invent:

statistics
testimonials
customer logos
fake projects
fake notifications
fake maps
fake editor screenshots
fake activity
fake charts
fake analytics
fake features

Use actual product information.

If there is little content, a simple page is acceptable.

============================================================
HUMAN CSS PRINCIPLE
===================

CSS should appear to have been written because a developer encountered
a specific layout problem and solved it.

GOOD reasoning:

"The content needs a maximum width."

"The button needs enough padding to be clickable."

"These two controls belong together, so use an 8px gap."

"This section is separate, so give it more top margin."

"The border distinguishes the toolbar from the canvas."

"The text is secondary, so reduce its contrast."

BAD reasoning:

"This needs more visual interest."

"This would look premium with a gradient."

"This section needs a card."

"This needs a glow."

"This empty area needs decoration."

"This headline would look better with highlighted words."

Never style something solely for "visual interest."

============================================================
DO NOT OVER-ENGINEER CSS
========================

Prefer simple CSS.

Do not create unnecessary:

pseudo-elements
complex gradients
CSS masks
filters
backdrop-filter
multiple shadows
complex transforms
absolute-positioned decorations
large animation definitions

when ordinary CSS solves the problem.

Prefer:

padding
margin
gap
border
background
font
width
flex
grid

The CSS should be easy for another developer to understand and modify.

============================================================
FOLLOW EXISTING PROJECT ARCHITECTURE
====================================

Before changing UI:

Inspect the existing project.

Determine:

framework
CSS approach
existing components
design tokens
layouts
routes
business logic

Do not introduce a new UI framework.

If Tailwind exists, use Tailwind normally.

If CSS modules exist, continue using them.

If plain CSS exists, continue using it.

Reuse existing components where sensible.

Do not rewrite working business logic merely to change appearance.

============================================================
DO NOT CHANGE FUNCTIONALITY
===========================

Preserve:

routing
authentication
API integration
state management
forms
permissions
navigation
business logic

This task concerns presentation.

Do not redesign application behavior unless explicitly requested.

============================================================
REFERENCE IMAGE RULE
====================

The StrataScratch reference is NOT a layout template.

Do NOT copy:

its hero
its statistics
its CTA arrangement
its colors
its sections

The useful lesson from the reference is simply:

clean alignment
normal readable typography
controlled spacing
clear hierarchy
restrained CSS
light surfaces
simple borders
clear actions
consistent sizing

Apply those fundamentals.

Do not recreate its marketing composition.

============================================================
IMPORTANT: DO NOT "IMPROVE" BEYOND THE REQUIREMENT
==================================================

When asked to implement a page, implement what the page needs.

Do not add extra sections because they might look good.

Do not add visual elements that were not requested or supported by
existing product functionality.

Do not make the UI more elaborate than necessary.

A plain interface with excellent:

spacing
alignment
typography
hierarchy
responsiveness

is BETTER than an impressive interface full of generated design patterns.

============================================================
FINAL CSS REVIEW
================

Before finishing, review the CSS.

Search for unnecessary:

gradient
box-shadow
filter
backdrop-filter
blur
transform
animation
absolute positioning
huge border-radius
huge font-size
huge padding
100vh sections

Remove them unless each one has a clear functional/design reason.

Then review the rendered page.

Ask:

Is alignment clean?

Is text easy to read?

Is spacing consistent?

Are controls easy to understand?

Is the primary action obvious?

Is anything unnecessarily decorative?

Is anything unnecessarily large?

Is there CSS whose only purpose is to make the page look "fancy"?

If yes, remove or simplify it.

============================================================
FINAL RULE
==========

DO NOT TRY TO MAKE THE UI LOOK AI-DESIGNED, DRIBBBLE-DESIGNED,
STARTUP-DESIGNED, OR "PREMIUM."

Make it look like a competent frontend developer carefully wrote the page
for this specific product.

Prefer:

ordinary CSS used well

over:

clever CSS.

Prefer:

clarity

over:

visual impact.

Prefer:

content

over:

decoration.

Prefer:

simple structure

over:

composition tricks.

Prefer:

usable

over:

impressive.

When uncertain, choose the boring solution and execute it extremely well.
