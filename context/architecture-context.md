# Architecture Context

## Stack

| Layer            | Technology                   | Role                                                                                        |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------- |
| Framework        | Next.js 16 + TypeScript      | Full-stack app with server/client boundaries optimized for SEO and rapid initial rendering  |
| UI               | Tailwind + shadcn/ui         | Component composition, spatial styling, and interactive micro-states                        |
| Auth             | Supabase Auth                | Admin identity management and dashboard route protection                                    |
| Database         | Supabase PostgreSQL          | Relational persistence: menu items, dynamic content metadata, reservations, and analytics   |
| Animation Engine | GSAP + Lenis                 | Complex timeline orchestration, ScrollTrigger sequences, and unified smooth scrolling       |
| WebGL Optional   | React Three Fiber / Three.js | High-fidelity 3D assets and spatial interactive elements for a premium immersive experience |
| Asset Storage    | Supabase Storage             | High-resolution hero media, lookbook asset bundles, and culinary photography storage        |

## System Boundaries

- `app/(public)` - unauthenticated user routes: premium landing page, interactive menus, and reservation intake pipelines.
- `app/(admin)` - authenticated management workspace: real-time menu mutation handlers, reservation books, and system logs.
- `components/animations` - reusable animation primitives: magnetic interactions, text-split reveals, parallax stages, and WebGL contexts.
- `components/ui` - structural design system: atomic elements built using Tailwind CSS utility patterns.
- `lib/supabase` - consolidated database clients for server-side cookie middleware and client hooks.
- `lib/gsap` - central registration layer for custom easing modules, scroll configurations, and browser lifecycle states.

## Storage Model

- **Database**: product metadata, customer reservation ledgers, content structure states, and admin credentials reside in PostgreSQL.
- **Supabase Storage**: high-fidelity video loops, gallery configurations, and creative assets are hosted inside globally cached storage buckets.
- Content properties and structural layouts are stored in and retrieved from PostgreSQL.
- Raw video streams and large imagery files are saved in and retrieved from Supabase Storage.
- Media bucket reference URLs are linked from database records, such as `imageUrl` and `videoUrl`, to preserve entity relationships.

## Auth and Access Model

- Every admin dashboard route requires an active, verified session token issued via Supabase Auth.
- Public surfaces permit unauthenticated access across informational pathways.
- Only verified admin sessions can mutate menu systems, content tables, or reservation databases.
- Row Level Security policies block unauthorized database queries at the database layer.
- API endpoints parse and validate client session cookies before resolving database transactions.

## Visual Layout Templates

- Prebuilt visual menus and seasonal lookbooks are static schema blueprints maintained inside the codebase.
- Layout configurations are compiled into the client state during the initial landing page presentation.
- Theme transitions can be executed by the visitor or injected from administrative commands.
- Blueprint schemas remain functionally identical whether parsed from static files or custom rows fetched from the database.
- Aesthetic templates resolve through structural configurations without requiring heavy multi-table lookups.

## Animation and Content Engine

### Motion Choreography

- Input: browser scroll velocity, raw mouse coordinates, dynamic page layouts, and media element boundaries.
- Execution: hardware-accelerated timelines handled via GSAP ScrollTrigger and custom `requestAnimationFrame` scroll layers.
- Output: non-blocking UI translations, fluid canvas renders, staggered text elements, and spatial transformations.

### Content Refresh Delivery

- Input: admin-generated structural changes, updated pricing models, or newly finalized reservation requests.
- Execution: server-side data mutations combined with Next.js automated static regeneration sequences.
- Output: recached layout elements injected dynamically to eliminate client hydration flashes and sudden layout shifts.

## Invariants

1. Main-thread request loops do not compute heavy visual physics; immersive animation lifecycles live inside Client Components.
2. Structured transactional text layers and large multimedia binaries remain separated in distinct infrastructure blocks.
3. Database-level Row Level Security rules validate permissions on every write, update, or delete transaction attempt.
4. Every GSAP context, observer, and ScrollTrigger registration must execute an explicit cleanup hook on component unmount.
5. Immersive visual animation timelines must scale systematically or deactivate on lower-spec mobile clients to preserve frame pacing.
