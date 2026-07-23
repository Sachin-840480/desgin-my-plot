
============================================================
HIGHEST PRIORITY — HUMAN DESIGN DECISION SYSTEM
================================================

This section has HIGHER PRIORITY than all other visual styling instructions.

These rules apply globally to EVERY DesignMyPlot page:

- landing pages
- authentication
- onboarding
- dashboards
- plot/project pages
- forms
- editor/workspace
- profile
- settings
- modals
- dialogs
- empty states
- loading states
- error states
- future pages and components

The goal is NOT simply to create a "modern UI."

The goal is to create an interface that feels deliberately designed by
an experienced human product designer.

Design decisions must come from:

PRODUCT PURPOSE
→ USER TASK
→ INFORMATION HIERARCHY
→ COMPOSITION
→ SPACING
→ TYPOGRAPHY
→ INTERACTION
→ VISUAL STYLING
→ DECORATION

NEVER reverse this process.

Do not begin with gradients, cards, shadows, icons, hero patterns,
dashboard templates, or decorative components and then fit content into them.

============================================================

1. NEVER DESIGN FROM A TEMPLATE FIRST
   ============================================================

Do NOT choose a familiar SaaS layout and insert DesignMyPlot content into it.

Do not think:

"This is a landing page, therefore it needs a centered hero."

"This is a dashboard, therefore it needs four statistic cards."

"This is a settings page, therefore everything belongs inside cards."

"This is onboarding, therefore it needs a giant illustration."

"This is an editor, therefore it needs a generic sidebar."

Instead determine what the USER needs to accomplish first.

The page structure must emerge from the task.

============================================================
2. PAGE PURPOSE MUST CONTROL THE LAYOUT
=======================================

Before writing JSX, HTML, CSS, Tailwind, or components for ANY page,
internally answer:

1. What is this page for?
2. What is the user's main goal?
3. What should the user notice first?
4. What should they notice second?
5. What is the primary action?
6. What information supports that action?
7. What information is secondary?
8. What can be removed?
9. What DesignMyPlot-specific content can visually support the page?
10. What should the page become on smaller screens?

Only after answering these questions should the layout be selected.

============================================================
3. DO NOT CREATE "AI WEBSITE COMPOSITION"
=========================================

NEVER automatically create this:

Navbar

[huge empty area]

Centered giant heading

Centered subtitle

[CTA]

[huge empty area]

Footer

This composition is explicitly undesirable.

Also do NOT automatically create:

Badge

Gradient headline

Subtitle

[Primary CTA] [Secondary CTA]

Four statistics

Three feature cards

Testimonials

CTA banner

Footer

These are reusable template patterns, not evidence of thoughtful design.

Any of these elements may be used individually when justified.

They must NEVER appear merely because they are common on modern websites.

============================================================
4. DO NOT CONFUSE MINIMALISM WITH EMPTINESS
===========================================

Minimalism means removing unnecessary elements.

It does NOT mean placing three elements in the middle of a giant viewport.

Whitespace must organize content.

Whitespace must NOT become the main content.

BAD:

---

    Heading

    Paragraph

    Button

---

GOOD:

Content has intentional relationships, hierarchy, supporting context,
and visual balance.

A page may be simple without feeling unfinished.

============================================================
5. NEVER USE VIEWPORT HEIGHT TO FAKE COMPOSITION
================================================

Do NOT automatically use:

height: 100vh
min-height: 100vh
h-screen
min-h-screen

or large flex-grow areas merely to vertically center a small amount of content.

Do not stretch hero sections simply because the browser viewport is tall.

Section height should come primarily from:

CONTENT
+
INTENTIONAL PADDING

rather than:

AVAILABLE SCREEN HEIGHT.

Marketing hero sections should generally use deliberate padding rather
than forcing themselves to fill the entire screen.

Example direction:

padding-top: 80-120px
padding-bottom: 72-120px

These are guidelines, not mandatory values.

============================================================
6. THE FIRST VIEWPORT MUST FEEL COMPOSED
========================================

The first screen should feel intentionally designed.

It should NOT look like content floating in unused browser space.

Ask:

What balances the main message?

What demonstrates the product?

What gives the composition visual weight?

What useful context belongs near the primary action?

Where should the user's eye move after the primary content?

The answer should preferably come from the PRODUCT itself.

============================================================
7. PRODUCT MEANING BEFORE DECORATION
====================================

DesignMyPlot is about:

LAND
SPACE
DIMENSIONS
LAYOUT
PLANNING
PROPERTY
DESIGN
VISUALIZATION

Use these concepts to create visual identity.

When useful, show things such as:

- plot boundaries
- dimension labels
- simple site plans
- property layouts
- building footprints
- roads
- paths
- gardens
- trees
- zones
- measurement indicators
- editor previews
- actual product screenshots
- planning canvas previews

These are stronger visual elements than random decoration.

Do NOT invent product capabilities that do not exist.

============================================================
8. WHEN A PAGE FEELS EMPTY, DO NOT DECORATE IT
==============================================

If a page feels empty, DO NOT immediately add:

- gradient blobs
- illustrations
- random cards
- icons
- fake statistics
- badges
- abstract shapes
- shadows
- glowing elements
- background patterns

First ask whether the page needs:

- better composition
- stronger hierarchy
- useful supporting information
- actual product context
- a product preview
- a secondary action
- improved proportions
- a better content structure
- part of the next section

Solve STRUCTURAL problems structurally.

============================================================
9. NOT EVERYTHING SHOULD BE CENTERED
====================================

Center alignment must be intentional.

Do NOT automatically center:

headings
paragraphs
buttons
forms
cards
sections
navigation
empty states

For many pages, left alignment produces stronger hierarchy and
better scanning.

Use centered layouts where they genuinely improve the composition.

Use asymmetric layouts when appropriate.

============================================================
10. USE ASYMMETRY INTENTIONALLY
===============================

Human-designed interfaces often balance unequal elements.

For example:

---

Headline / copy                Product visualization

Supporting information        Plot preview

Primary action

---

or:

---

Page title                                Primary action

Supporting description

---

or:

---

Navigation / tools     Main workspace       Properties

---

Do not force equal columns.

Do not make everything perfectly symmetrical simply because CSS Grid
makes it easy.

============================================================
11. DO NOT FORCE THREE-COLUMN AND FOUR-CARD GRIDS
=================================================

Avoid automatically generating:

3 feature cards
4 statistic cards
3 pricing cards
4 dashboard cards

because these are extremely common generated UI patterns.

The number and size of elements should come from actual information.

If there are two meaningful concepts, show two.

If there are five, design for five.

Do not invent content to make a grid visually complete.

============================================================
12. CARDS ARE NOT A LAYOUT SYSTEM
=================================

Do not put everything inside a card.

Before creating a card ask:

"Does this information actually represent a grouped object?"

If not, it may only need:

spacing
alignment
divider
typography
background separation

rather than another rounded rectangle.

Avoid:

card
  └ card
      └ card

unless the hierarchy genuinely requires it.

Professional interfaces often use fewer containers than generated ones.

============================================================
13. CREATE VISUAL RHYTHM
========================

Spacing should communicate relationships.

Elements belonging together should sit closer together.

Different concepts should have stronger separation.

Example direction:

Heading → supporting copy:
16-24px

Supporting copy → actions:
24-32px

Related controls:
8-16px

Section heading → section content:
24-40px

Major section → major section:
64-112px

These are guidelines.

Do not mechanically use identical gaps between everything.

The page should have rhythm:

strong element
↓
supporting element
↓
interaction
↓
breathing room
↓
new concept

============================================================
14. DO NOT CREATE HUGE UNUSED AREAS
===================================

If more than roughly half of a normal desktop viewport contains no
meaningful visual or functional content, inspect the composition again.

This does NOT mean every area must be filled.

It means large empty areas must have a reason.

Do NOT solve empty layouts by increasing:

font size
section height
button size
padding

Instead improve the composition.

============================================================
15. TYPOGRAPHY MUST CREATE HIERARCHY
====================================

Do not rely primarily on cards, colors, or backgrounds to establish hierarchy.

Typography should do much of the work.

Use clear differences between:

page title
section heading
component title
body copy
supporting copy
labels
metadata

Avoid making everything:

large
bold
dark

Secondary information should visually behave like secondary information.

Do not create giant headings merely because the page has little content.

============================================================
16. CONTENT WIDTH MATTERS
=========================

Do not stretch readable text across very wide screens.

Use sensible max-width values.

Body copy should usually remain comfortably readable.

At the same time, do not constrain entire application pages to tiny
centered columns if the task benefits from horizontal space.

Marketing content:
controlled width.

Forms:
comfortable narrow-to-medium width.

Dashboards:
moderate-to-wide.

Editor:
use available workspace intelligently.

Page purpose determines width.

============================================================
17. LANDING PAGE ≠ CENTERED HERO TEMPLATE
==========================================

A DesignMyPlot landing page should communicate what the PRODUCT does.

Do not make:

Navbar
Hero
Footer

the entire landing page.

A stronger direction may be:

Navigation

↓

Headline / value proposition        Plot/product visualization

Supporting copy                     Actual visual context

Primary CTA
Secondary action

↓

Next meaningful product section

↓

Additional product explanation

↓

Footer

The exact layout can differ.

Do NOT mechanically reproduce this structure either.

Use it as evidence of how product content can create composition.

============================================================
18. THE NEXT SECTION MAY APPEAR ABOVE THE FOLD
==============================================

Do NOT try to perfectly fit the hero into one viewport.

It is completely acceptable for the beginning of the next section to
be visible at the bottom of the screen.

This often improves continuity and encourages scrolling.

Do not stretch a hero simply to push everything else below the viewport.

============================================================
19. FOOTER IS NOT A SPACER
==========================

The footer belongs after meaningful page content.

Never use the footer to fill unused viewport height.

On normal marketing pages, the footer generally should NOT appear
immediately after a tiny hero.

If the footer is visible in the first desktop viewport because the page
contains almost no content, reconsider whether the page is actually complete.

============================================================
20. APPLICATION PAGES ARE NOT MARKETING PAGES
=============================================

Internal product pages should prioritize tasks over presentation.

Do NOT place marketing-style:

hero headings
taglines
large illustrations
gradient text
feature cards

inside normal working screens unless genuinely necessary.

Application pages should feel efficient and purposeful.

============================================================
21. DASHBOARDS MUST REPRESENT REAL INFORMATION
==============================================

Do not automatically create:

"Welcome back!"

four KPI cards

recent activity

quick actions

chart

because this is the default generated dashboard pattern.

Only show information the user genuinely benefits from.

For DesignMyPlot, useful dashboard information might include actual:

plots
projects
recent designs
saved work
templates
status
last modified information

Do not invent analytics merely to make the dashboard look populated.

============================================================
22. FORMS SHOULD LOOK LIKE FORMS
================================

Do not turn simple forms into elaborate landing pages.

A good form needs:

clear title
short context if necessary
logical field grouping
visible labels
useful validation
clear primary action
clear secondary/cancel action

It does NOT automatically need:

illustration
gradient background
giant card
progress indicator
feature explanation

unless the task requires them.

============================================================
23. AUTHENTICATION SHOULD REMAIN SIMPLE
=======================================

Login and signup pages should feel trustworthy and focused.

Do not automatically create:

50/50 split screen
giant marketing illustration
testimonial
gradient panel
random product quote

A simple, carefully composed authentication screen is often stronger.

Use branding subtly.

============================================================
24. THE PLOT EDITOR IS A PROFESSIONAL TOOL
==========================================

The DesignMyPlot editor must NOT look like a SaaS marketing dashboard.

The actual plot/design is the primary visual object.

Prioritize:

canvas space
tool discoverability
clear controls
properties
layers
measurements
selection state
undo/redo
save state

Keep controls compact.

Avoid giant cards.

Avoid excessive rounded containers.

Avoid decorative backgrounds.

The editor should feel closer to professional planning/design software
than a generic admin dashboard.

============================================================
25. NAVIGATION SHOULD NOT DOMINATE
==================================

Navigation should be clear but visually restrained.

Do not make the header unnecessarily tall.

Do not put every navigation item inside pills.

Do not add excessive icons.

Use subtle active states.

Navigation should help the user move through the product without
competing with page content.

============================================================
26. BUTTONS MUST REPRESENT ACTION HIERARCHY
===========================================

Every screen should normally have a clear primary action.

Do not make five buttons equally prominent.

Use:

PRIMARY
for the most important action.

SECONDARY
for supporting actions.

TERTIARY / GHOST
for low-priority actions.

DESTRUCTIVE
only for destructive behavior.

Do not turn every link into a button.

Do not turn every button into a large colored pill.

============================================================
27. ICONS MUST HAVE A REASON
============================

Do not add icons merely to make UI elements look designed.

Icons should:

improve recognition
reduce scanning time
communicate functionality

Do not put every icon inside:

rounded square
colored circle
gradient container

Plain icons are often better.

============================================================
28. SHADOWS MUST REPRESENT ELEVATION
====================================

Use shadows only when an element actually needs visual elevation.

Examples:

dropdown
modal
floating toolbar
popover

Normal content sections do not need dramatic shadows.

Prefer subtle borders for structural separation.

============================================================
29. COLOR MUST COMMUNICATE
==========================

DesignMyPlot's warm earthy orange/terracotta is an accent.

Use it for:

primary actions
selected states
important highlights
small brand details

Do not make every heading orange.

Do not make every icon orange.

Do not make every border orange.

Do not create an orange-heavy interface merely to establish branding.

Brand identity comes from the entire design system, not one repeated color.

============================================================
30. BACKGROUND EFFECTS ARE OPTIONAL
===================================

Gradients, glows, textures, and atmospheric effects are NOT required.

Use them only if they genuinely improve a marketing composition.

Application screens should usually use little or none.

Never use decoration to compensate for weak layout.

============================================================
31. MOTION MUST COMMUNICATE STATE
=================================

Animations should explain interaction.

Good:

menu opening
modal appearing
button state changing
selection transition
panel expanding
drag interaction

Avoid:

floating cards
constant pulsing
random entrance animations
bouncing icons
continuous background movement

Motion should not demand attention without reason.

============================================================
32. RESPONSIVE DESIGN REQUIRES RECOMPOSITION
============================================

Do not simply shrink desktop layouts.

For mobile, reconsider:

priority
ordering
navigation
controls
spacing
content density

A desktop two-column hero may become:

headline
copy
actions
product preview

on mobile.

An editor may move secondary properties into drawers.

A dashboard grid may become a list.

Responsive design is structural, not just smaller font sizes.

============================================================
33. DESIGN EMPTY STATES AS PRODUCT MOMENTS
==========================================

An empty state should explain:

what is empty
why that matters
what the user can do next

Example:

No plots yet.

Create your first plot to start planning your space.

[Create plot]

Do not automatically add giant illustrations or decorative graphics.

============================================================
34. LOADING STATES SHOULD PRESERVE STRUCTURE
============================================

Loading should not cause major layout jumping.

Use:

small progress indicators
skeletons when useful
disabled states
clear loading labels

Do not cover the entire application with a giant spinner unless the
entire application genuinely cannot function yet.

============================================================
35. COPY SHOULD SOUND HUMAN
===========================

Avoid generic AI-generated marketing copy:

"Unlock the power of..."
"Revolutionize your workflow..."
"Transform your experience..."
"Elevate your journey..."
"Supercharge your..."
"Seamlessly empower..."

Prefer direct product language.

Examples:

Create a plot
Add a building
Set dimensions
Save design
Open project
Upload plan
Start designing

Write like a real product, not an advertisement generator.

============================================================
36. DO NOT INVENT CONTENT FOR VISUAL BALANCE
============================================

Never invent:

user counts
ratings
customer logos
testimonials
statistics
performance metrics
activity
notifications
projects
reviews

simply because the page looks empty.

Visual balance must come from design, not fake information.

============================================================
37. REUSE THE DESIGN SYSTEM
===========================

Before creating a component, inspect existing components.

Reuse:

buttons
inputs
dropdowns
dialogs
tabs
navigation
tooltips
toasts
cards
tables
form controls

when appropriate.

Do not create:

Button2
ModernButton
FancyButton
DashboardButton

because a page needs slightly different styling.

Extend the shared system instead.

============================================================
38. DO NOT BREAK FUNCTIONALITY FOR DESIGN
=========================================

Preserve:

routing
authentication
API calls
forms
permissions
state
navigation
business logic
saved data
existing behavior

Presentation changes should remain separated from business logic whenever
possible.

============================================================
39. REFERENCE SCREENSHOT — CORRECT INTERPRETATION
==================================================

The provided StrataScratch screenshot is a GLOBAL QUALITY REFERENCE.

Do NOT copy it.

Do NOT interpret it merely as:

"centered large heading + CTA buttons."

Study the deeper qualities:

strong information hierarchy
carefully controlled width
intentional spacing
balanced density
clear navigation
excellent alignment
restrained color
clean typography
purposeful actions
subtle visual treatment
professional proportions
content hierarchy
visual continuity

Apply those qualities throughout DesignMyPlot.

Different pages should NOT share identical layouts.

They should share the same DESIGN DISCIPLINE.

============================================================
40. DO NOT MAKE EVERY PAGE LOOK THE SAME
========================================

Consistency means:

same typography system
same spacing logic
same colors
same controls
same interaction behavior
same visual quality

Consistency does NOT mean:

same hero
same cards
same grid
same alignment
same page structure

Landing page should feel like marketing.

Dashboard should feel like project management.

Create Plot should feel like a focused form.

Editor should feel like professional software.

Settings should feel compact and structured.

Authentication should feel focused.

They should still clearly belong to the same product.

============================================================
41. PRODUCT-SPECIFICITY TEST
============================

Before considering a page complete, ask:

Could I replace "DesignMyPlot" with:

AI Assistant
Finance App
Fitness Platform
CRM
Project Manager

without substantially changing this layout?

If YES, the page may be too generic.

Introduce product-specific structure where appropriate.

The interface should visually communicate what DesignMyPlot actually does.

============================================================
42. REMOVE STYLING TEST
=======================

Imagine removing:

colors
gradients
shadows
icons
illustrations
animations

Would the page STILL have:

clear hierarchy
good composition
logical grouping
balanced proportions
good alignment
intentional spacing?

If NO:

the page is structurally weak.

Fix the layout before styling it.

============================================================
43. SCREENSHOT REVIEW TEST
==========================

After implementing or significantly changing a page, visually inspect
the rendered result.

Do NOT assume correct JSX/CSS means good design.

Review the actual page at desktop and mobile sizes.

Check:

- Is there excessive empty space?
- Is anything awkwardly centered?
- Is the content too narrow?
- Is the content unnecessarily wide?
- Is the heading disproportionately large?
- Is the footer appearing too early?
- Are cards being overused?
- Are controls aligned properly?
- Is the primary action obvious?
- Does the page feel balanced?
- Does the product itself have visual presence?

If something looks generated, unfinished, or templated, revise it.

============================================================
44. SECOND-PASS DESIGN REQUIREMENT
==================================

NEVER consider the first visually valid implementation finished.

Perform a second design pass.

FIRST PASS:
make the page functional and establish hierarchy.

SECOND PASS:
refine composition, proportions, spacing, typography, alignment,
density, responsive behavior, and visual consistency.

Remove unnecessary UI during the second pass.

Do not automatically add more elements.

============================================================
45. DESIGN BY SUBTRACTION
=========================

When something feels visually wrong, first ask:

"What can be removed?"

before asking:

"What can be added?"

Common candidates:

unnecessary card
unnecessary icon
unnecessary badge
unnecessary heading
duplicate description
extra button
decorative background
excessive border
excessive shadow

Simple interfaces should result from deliberate editing.

============================================================
46. FINAL HUMAN-DESIGN CHECK
============================

Before finishing ANY page, ask:

Does every major element have a reason to exist?

Is the page organized around what the user wants to accomplish?

Does hierarchy work without relying on decoration?

Does whitespace organize rather than dominate?

Are proportions natural?

Does the page have enough meaningful visual content?

Is anything oversized merely to fill space?

Are there unnecessary cards?

Are there unnecessary pills?

Are there unnecessary gradients?

Is everything unnecessarily centered?

Is the primary action clear?

Does the UI communicate DesignMyPlot specifically?

Does it feel like part of the same product as other pages?

Would an experienced product designer likely simplify anything?

If yes, simplify it.

============================================================
47. FINAL ANTI-AI UI TEST
=========================

The final interface must NOT look like the result of a prompt such as:

"Create a beautiful modern SaaS UI."

It should look like someone:

understood the product,
understood the user,
organized the information,
designed the interaction,
refined the composition,
then applied styling.

FUNCTION FIRST.
HIERARCHY SECOND.
COMPOSITION THIRD.
CONSISTENCY FOURTH.
STYLING FIFTH.
DECORATION LAST.

When uncertain, choose the solution that is:

simpler
clearer
more useful
more product-specific
less decorative
more intentional.
