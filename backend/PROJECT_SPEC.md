# AI Landscape Architect: Generative Residential Plot Optimization Platform

## 1. Vision
Not a floor-plan generator. Not an image-gen wrapper. A system that treats land as a **spatial optimization problem** first, visualization second.

## 2. Domain Scope
Full residential plot: house/villa, garage, pool, garden, pond, pathways, BBQ area, play zone, orchard/farming zone, privacy buffers, future expansion space.

## 3. Core Architecture (2-Layer Hybrid)

### Layer 1 — Spatial Layout Intelligence Engine (the moat)
- Input: plot dims, shape, road position, entry direction, north direction, neighbor positions, climate/location, user requirement list (free text → structured constraints).
- Method: constraint-based placement (rule engine + scoring), upgradeable later to Genetic Algorithm / OR-Tools CP-SAT / Simulated Annealing.
- Hard rules encoded:
  - Garage: min distance to road, direct driveway access.
  - Pool: max distance from road (privacy), buffer from neighbor lines.
  - House: setback compliance, sunlight-facing orientation.
  - Garden/orchard: fills remaining usable area.
  - Pond: safe distance from house foundation.
- Output: **structured JSON** — zone type, x, y, width, height, rotation. This is the product's real IP.

### Layer 2 — Visualization Layer
- Gemini "Nano Banana" (or SD/ControlNet-style conditioning) renders the JSON layout into a photorealistic image.
- Gemini does NOT choose placement — it only skins geometry decided by Layer 1.
- Style params: regional style (Indian bungalow, Kerala, farmhouse, Japanese garden, European villa), materials, season/lighting.

## 4. Differentiation vs Competitors
Checked: mnml.ai, Remodel AI, ArchiVinci, Planner 5D, DreamYard, starryai, Neighborbrite, Curb Appeal AI.
All of them: photo/style → diffusion image. Zero constraint reasoning, no structured layout, no plot-dimension accuracy. Gap = ours.

## 5. Unique Features (MVP → later)
- AI landscape scoring: Privacy / Land-usage / Vehicle-access / Green-coverage (0-100 each)
- Before/after optimization comparison
- Indian land units: decimal, katha, bigha, acre, sqft, sqm
- Regional design styles
- Export: JSON (structured), PNG/JPG/SVG (visual)

## 6. System Design (Production Target)

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js | SSR for SEO on public design gallery, React ecosystem |
| Backend | FastAPI | Async-native (matches queue-heavy Gemini calls), Python (same lang as layout engine/ML) |
| DB | PostgreSQL + PostGIS | Plot geometry is inherently spatial — PostGIS gives real spatial indexing or (GIST), ST_Distance, ST_Contains for constraint checks. MongoDB weaker here; relational integrity also matters for payments/users (ACID). |
| Cache/Queue | Redis | Session cache, generated-design cache, rate limiting, job queue for async Gemini calls |
| API style | REST | Simpler for a resource-oriented domain (projects, layouts, renders); GraphQL overkill at MVP scale |
| Architecture | Monolith (MVP) → extract render-worker as separate service later | Avoid premature microservice complexity; Gemini calls are the one component that benefits from independent scaling |
| CAP priority | Consistency + Partition tolerance (CP) over strict Availability | Payments & plot data shouldn't go inconsistent; short unavailability acceptable, wrong billing/geometry is not |

### Key API routes
```
POST /auth/login
POST /generate-layout       -> Layer 1 engine, returns structured JSON
POST /generate-render       -> Layer 2, queued job, returns job_id
GET  /jobs/{job_id}         -> poll render status
GET  /projects
GET  /user/history
```

### Scaling notes
- 10 users: single server, no queue needed.
- 1,000 users: add Redis queue + 1-2 workers for Gemini calls, read replica for DB.
- 1,000,000 users: horizontal scale API pods behind LB, CDN for rendered images, DB sharding by user_id region, dedicated worker pool with backpressure/retry, rate limits tiered by plan.

### Free vs Paid
- Free: N generations/month, watermark, low queue priority.
- Paid: more generations, HD export, high queue priority, no watermark.

## 7. Roadmap
- **MVP (weeks 1-4):** Layer 1 engine (rule-based, no ML yet) + simple 2D top-down diagram output (matplotlib) + basic web form. Prove the differentiator works before spending budget on Gemini calls.
- **v1 (weeks 5-7):** Wire Gemini Nano Banana as Layer 2 skin. Add scoring system. Basic auth + save/load projects.
- **v2 (weeks 8-10):** Indian units, regional styles, before/after view, polish for resume demo.
- **Post-resume / SaaS path:** GA/OR-Tools upgrade to Layer 1, paid tiers, queue infra, PostGIS migration.

## 8. Research Paper Angle
"Constraint-guided diffusion conditioning for spatial layout generation" — Layer 1 output used as conditioning signal for Layer 2, rather than end-to-end learned generation. Publishable as applied-AI systems paper, not core ML novelty.
