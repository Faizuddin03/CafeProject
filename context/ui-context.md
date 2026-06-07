# UI Context: Cafe Landing Page

## Theme

Light, airy, and inviting. The visual language uses a modern, cool-toned blue palette balanced with clean white space and warm, coffee-inspired accent colors to create a welcoming coastal or contemporary cafe atmosphere.

All colors are defined as CSS custom properties in `globals.css` and mapped to Tailwind tokens via `@theme inline`. Components must use these tokens; do not hardcode hex values or use raw Tailwind color classes like `zinc-*`.

| Role            | CSS Variable         | Hex / Value | Notes                                    |
| --------------- | -------------------- | ----------- | ---------------------------------------- |
| Page background | `--bg-base`          | `#FAFCFD`   | Soft off-white for the main body         |
| Surface         | `--bg-surface`       | `#FFFFFF`   | White for cards and containers           |
| Subtle surface  | `--bg-subtle`        | `#DBECF4`   | Soft light blue                          |
| Dark surface    | `--bg-dark`          | `#1D3D52`   | For footers and dark sections            |
| Default border  | `--border-default`   | `#DBECF4`   | Matches the subtle surface               |
| Primary text    | `--text-primary`     | `#1D3D52`   | Dark navy                                |
| Secondary text  | `--text-secondary`   | `#5F84A1`   | Muted blue-gray                          |
| Brand primary   | `--accent-primary`   | `#125488`   | Deep blue                                |
| Brand secondary | `--accent-secondary` | `#2A93D5`   | Vibrant blue for hover and active states |
| Warm accent     | `--accent-warm`      | `#D4A373`   | Caramel latte accent for key CTAs        |
| Error           | `--state-error`      | `#E11D48`   | Rose red                                 |
| Success         | `--state-success`    | `#10B981`   | Emerald green                            |

Tailwind utility names map to these variables. Use utilities such as `bg-base`, `bg-surface`, `bg-subtle`, `bg-dark`, `text-primary`, `text-secondary`, `bg-accent-primary`, `hover:bg-accent-secondary`, and `text-accent-warm`.

## Typography

A mix of expressive Tempting headings and clean sans-serif body text creates an artisanal cafe feel while keeping the experience readable and modern.

| Role     | Font     | CSS Variable      |
| -------- | -------- | ----------------- |
| Headings | Tempting | `--font-tempting` |
| Body/UI  | Inter    | `--font-inter`    |

Heading and body fonts are applied as CSS variables on the `<html>` element. The base `body` uses Inter with `antialiased`.

## Border Radius

Soft rounded forms should make the interface feel welcoming and organic.

| Context          | Class          |
| ---------------- | -------------- |
| Buttons / badges | `rounded-full` |
| Images / cards   | `rounded-2xl`  |
| Large sections   | `rounded-3xl`  |

## Imagery and Visuals

### Photography

Images should be bright and warm to balance the cool blue UI. Prioritize high-quality photos of coffee cups, latte art, pastries, cafe interiors, baristas, and inviting seating areas.

### Decorative Elements

- Use subtle dividers with `--border-default` or gentle wavy section separators.
- When placing text over hero imagery, add a gradient overlay fading toward `--bg-dark` so white text remains readable.
- Avoid decorative gradient orbs, abstract blobs, and overly technical visuals that conflict with the cafe atmosphere.

## Component Library

shadcn/ui on top of Tailwind. Components live in `components/ui/`. Use the `shadcn` CLI to add new foundation components rather than writing them from scratch.

### Key Cafe Components

- Buttons: primary buttons use `--accent-primary` with `--accent-secondary` on hover. Use `--accent-warm` for high-priority actions such as "Order Now", reservations, or featured menu CTAs.
- Cards: menu items, testimonials, and compact information blocks use `--bg-surface`, subtle shadow, `rounded-2xl`, and `--border-default`.
- Badges: dietary labels, seasonal notes, and menu categories use `rounded-full` with tokenized background and text colors.

## Layout Patterns

- Navbar: sticky top bar with a transparent initial state that transitions to `bg-surface` with subtle blur and border on scroll. Include logo, section links such as Menu, About, and Location, plus an "Order Now" or reservation CTA.
- Hero section: full-width viewport header using high-quality cafe photography, a readable overlay, a bold `font-tempting` heading, short supporting copy, and two clear CTA buttons.
- Menu preview: responsive grid of coffee, pastry, and seasonal items with photos, descriptions, pricing, and optional dietary or seasonal badges. Use `--bg-base` as the section background.
- About / atmosphere: split layout with text and photography. Use `--bg-subtle` to break up the page flow.
- Reservation / contact: clear form area with accessible labels, validation states, and success/error feedback using the state tokens.
- Location: scannable address, hours, phone/email, and map or directions link.
- Footer: `--bg-dark` with light text using `--bg-subtle` or white. Include opening hours, address, contact info, and social links.

## Responsive Device Support

The website must be usable and polished across mobile phones, tablets, laptops, and desktop monitors. Layouts should be designed mobile-first, then progressively enhance spacing, grid density, media placement, and navigation behavior for larger viewports.

- Mobile: prioritize stacked content, readable text, tap-friendly buttons, simplified navigation, and media that crops intentionally without hiding important cafe details.
- Tablet: use balanced two-column layouts where space allows, while preserving comfortable touch targets and readable form controls.
- Desktop: use wider grids, richer photography placement, and expanded navigation without making sections feel sparse or oversized.
- Forms, buttons, cards, navigation, maps, and hero content must remain readable, reachable, and free from overlap at common viewport widths.

## Icons

Lucide React. Use stroke-based icons only.

| Context         | Size      |
| --------------- | --------- |
| Inline UI       | `h-4 w-4` |
| Buttons         | `h-5 w-5` |
| Feature accents | `h-6 w-6` |

Icon color should usually use `--accent-primary` or `--accent-warm` for visual interest. Common cafe icons include coffee, croissant or bakery, map pin, clock, phone, mail, Instagram, and Wi-Fi.
