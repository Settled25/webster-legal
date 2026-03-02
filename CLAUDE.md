# CLAUDE.md — webster-legal

Landing page for Webster, an AI-native debt collection law firm in Puerto Rico.

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for animations
- **Deployed on Vercel** — push to `main` = auto-deploy

## Project Structure
```
src/
  app/
    layout.tsx          ← Root layout: JSON-LD schema, global metadata, fonts
    page.tsx            ← Homepage (main landing page)
    blog/               ← Blog index page
    contacto/           ← Contact page
    contadores/         ← Partner page for accountants (CPAs)
    sobre-nosotros/     ← About page
  components/
    layout/
      Navbar.tsx        ← Fixed top nav
      Footer.tsx        ← Site footer
      Providers.tsx     ← Client-side context wrappers
      Section.tsx       ← Reusable section wrapper
    ui/
      Accordion.tsx     ← FAQ accordion
      Button.tsx        ← CTA button
      Card.tsx          ← Content card
      PricingCard.tsx   ← Pricing tier card
      StepCard.tsx      ← How-it-works step
      TrustBar.tsx      ← Social proof bar
      BlogPostCard.tsx  ← Blog listing card
      ModalButton.tsx   ← Button with modal trigger
      NewsletterForm.tsx
      Banner.tsx
  lib/
    animations.ts       ← Framer Motion animation variants
```

## Design System (Tailwind)
| Token | Value | Use |
|---|---|---|
| `snow` | `#FAFAFA` | Alternate section background |
| `pine` | `#2D5E4A` | Primary brand green |
| `pine-light` | `#E8F0EC` | Light green tint |
| `pine-dark` | `#1F4434` | Hover state for pine |
| `font-heading` | Instrument Serif | Headlines |
| `font-body` | Geist Sans | Body text |
| `font-mono` | Geist Mono | Labels, tags, numbers |
| `rounded-btn` | `2px` | Button border radius |
| `rounded-card` | `4px` | Card border radius |
| `max-w-site` | `1200px` | Max content width |

## Canonical & SEO Rules
- **Canonical domain:** `https://www.webster.legal` (www is canonical)
- `https://webster.legal` → 308 redirect to www (configured on Vercel)
- All `canonical` tags and `og:url` must use `https://www.webster.legal/...`
- JSON-LD schema `url` must also use `https://www.webster.legal`
- Language: `es` / locale: `es_PR`

## Per-Page Metadata
Each page has its own `layout.tsx` with `export const metadata`. When adding pages, always include:
- `title`
- `description`
- `canonical` (alternates → canonical)
- `og:url` matching canonical

## Key Business Context
- Jotform intake link: `https://form.jotform.com/260526971985067`
- Contact: `info@webster.legal` / `(939) 353-0566`
- Address: 1519 Ave. Ponce de León Suite 717, Cond. 1st Federal Saving Building, San Juan PR 00909-1718
- LinkedIn: `https://www.linkedin.com/company/websterlegal/`
- Fee model: 15% pre-litigation / 25% litigation / 33% execution (success-only)
- Scope: Commercial debts $1K–$15K in Puerto Rico

## Commands
```bash
npm run dev     # Local dev server (localhost:3000)
npm run build   # Production build
npm run start   # Start production build locally
```

## Workflow Notes
- No test suite — verify changes visually via `npm run dev`
- Push to `main` triggers Vercel deploy automatically
- Never push directly to prod without reviewing the change locally first (or at minimum reading the diff carefully)
- Em dashes (—) are banned in all copy. Use periods or commas instead.
