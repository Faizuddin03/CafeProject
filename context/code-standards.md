# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes; do not layer workarounds.
- Do not mix unrelated concerns in one component or route.
- Respect the system boundaries defined in `architecture-context.md`.

## TypeScript

- Strict mode is required throughout the project.
- Avoid `any`; use explicit interfaces or narrowly scoped types.
- Validate unknown external input at system boundaries before trusting it.
- Use `interface` for object contracts.

## Next.js

- Default to React Server Components.
- Add `"use client"` only when the component needs browser interactivity, hooks, or real-time state.
- Keep route handlers focused on a single responsibility.
- Long-running work belongs in background tasks, not in request handlers.
- Keep public experiences under `app/(public)` and authenticated management surfaces under `app/(admin)`.
- Read the relevant guide in `node_modules/next/dist/docs/` before using Next.js APIs, conventions, or file structures that may have changed in this version.

## Styling

- Use CSS custom property tokens defined in `globals.css`; no raw Tailwind color classes like `zinc-*` or hardcoded hex values.
- Reference tokens through their Tailwind utility names: `bg-base`, `bg-surface`, `bg-subtle`, `bg-dark`, `text-primary`, `text-secondary`, `text-copy-primary`, `text-copy-secondary`, `bg-accent-primary`, `text-accent-warm`, `border-surface-border`, and `text-brand`.
- Maintain the border radius scale documented in `ui-context.md`: `rounded-full` for buttons and badges, `rounded-2xl` for images/cards, and `rounded-3xl` for large sections or modals.

## Animation and GSAP

- GSAP may be used for timeline-based UI animations and complex interaction motion.
- Lenis may be used for unified smooth scrolling where the page experience requires it.
- Keep GSAP usage inside client components only; add `"use client"` only where animation code requires browser APIs, refs, hooks, or event state.
- Scope GSAP animations with `gsap.context()` and clean them up on unmount.
- Register shared GSAP plugins, easing, and scroll configuration through `lib/gsap` rather than duplicating setup in feature components.
- Prefer CSS transitions for simple hover, focus, and one-state style changes.
- Animations must respect the light cafe landing page style defined in `ui-context.md` and must not introduce hardcoded colors outside the design tokens.
- Animation timelines must scale down or deactivate on lower-spec mobile clients when needed to preserve frame pacing.

## WebGL and 3D

- React Three Fiber / Three.js are optional and should be used only for high-value immersive or spatial experiences.
- Keep WebGL work inside client components.
- Do not run heavy visual physics or render-loop computation in Server Components or request handlers.
- Clean up scenes, observers, animation frames, and browser event listeners on unmount.

## API Routes

- Validate and parse request input before any logic runs.
- Enforce Supabase Auth session checks before any admin mutation.
- Rely on Row Level Security as the database-level permission boundary; route handlers must still validate the caller and requested operation before issuing queries.
- Return consistent, predictable response shapes.
- Keep route handlers thin; push reusable database, auth, storage, and content logic into shared modules.

## Data and Storage

- Structured transactional data belongs in Supabase PostgreSQL.
- Supabase clients belong in `lib/supabase`; keep server cookie clients and browser clients separated by module responsibility.
- Large media binaries belong in Supabase Storage, with database rows storing bucket object paths or public/signed URL references such as `imageUrl` and `videoUrl`.
- Do not store raw video streams, large images, or other bulky generated content directly in PostgreSQL.
- Validate content structure and layout records before rendering or persisting them.
- Preserve the separation between relational content state and asset storage references.

## File Organization

- `app/(public)` - unauthenticated public routes, landing pages, menus, and reservation intake.
- `app/(admin)` - authenticated admin dashboard routes and management workflows.
- `components/animations` - reusable animation primitives and browser-only motion helpers.
- `components/ui` - shadcn/ui foundation components and reusable structural UI.
- `lib/supabase` - Supabase server clients, browser clients, auth helpers, and database access helpers.
- `lib/gsap` - shared GSAP registration, plugin setup, and scroll configuration.
- `app/api/` - route handlers for validated auth-aware mutations and persistence.
- Name files after the responsibility they contain, not the technology.
