# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (TypeScript checked, must pass zero errors)
npm run start    # Serve production build
```

No linter or test runner is configured.

## Stack

- **Next.js 16** with App Router, TypeScript, `src/` directory
- **Tailwind CSS v3** (pinned — do NOT upgrade to v4; the project was deliberately downgraded)
- **Framer Motion** for all animations
- **Lucide React** for icons
- **Fonts:** `Instrument_Serif` via `next/font/google` (headings), `GeistSans` + `GeistMono` via the `geist` npm package (body/mono). All three are loaded in `src/app/layout.tsx` and injected as CSS variables on `<html>`.

## Architecture

### Pages (App Router)
| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/sobre-nosotros` | `src/app/sobre-nosotros/page.tsx` |
| `/blog` | `src/app/blog/page.tsx` |
| `/contacto` | `src/app/contacto/page.tsx` |

Each route except `/` has a sibling `layout.tsx` that exports `metadata` (title, description). The pages themselves are `"use client"` components, so metadata must live in the layout — not the page.

### Component layers
- `src/components/layout/` — `Navbar`, `Footer`, `Section`. The `Section` component wraps every major content section: it applies `py-24 md:py-16`, `max-w-[1200px] mx-auto px-6`, and a `whileInView` fadeUp animation automatically.
- `src/components/ui/` — atomic UI pieces. All animated components are `"use client"`.

### Animation system
All Framer Motion variants live in `src/lib/animations.ts` and are typed as `Variants`. The canonical patterns:
- Entrance: `fadeUp` (with Y movement), `fadeIn` (opacity only), `slideFromLeft`
- Groups: wrap parent in `staggerContainer`, children in individual `fadeUp` variants
- All `whileInView` calls use `viewport={{ once: true, margin: "-80px" }}`

### Design tokens (Tailwind)
| Token | Value | Usage |
|---|---|---|
| `pine` | `#2D5E4A` | Primary brand color — buttons, icons, accents |
| `pine-dark` | `#1F4434` | Button hover state |
| `pine-light` | `#E8F0EC` | Subtle backgrounds (icon containers) |
| `snow` | `#FAFAFA` | Alternating section backgrounds |
| `rounded-btn` | `2px` | All buttons |
| `rounded-card` | `4px` | All cards and image containers |
| Dark sections | `bg-[#09090B]` | Used as arbitrary class directly in JSX |

Font classes: `font-heading`, `font-body`, `font-mono` (map to the CSS variables above).

### Copy and content
All Spanish copy is hardcoded directly in the page files — there is no CMS. Data arrays (FAQ items, blog posts, pricing cards, etc.) are defined as `const` arrays at the top of each page file, above the component. To edit copy, edit those arrays or the JSX inline strings.

### Images
Static assets go in `public/`. The attorney photo is at `public/foto-profesional.jpg` and rendered with `next/image` using explicit `width`/`height` props (not `fill`) to avoid aspect-ratio distortion.

### Key constraints
- The Figma MCP capture script is injected via `<script>` in `src/app/layout.tsx` — do not remove it.
- `history.scrollRestoration = "manual"` is set in `src/app/page.tsx` to prevent the browser from restoring scroll position on refresh.
- All UI text must remain in Spanish (Puerto Rico). No English copy in the UI.
