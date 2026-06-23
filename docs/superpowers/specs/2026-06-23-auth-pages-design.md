# Auth Pages — Design Spec

**Date:** 2026-06-23
**Status:** Approved (pending user review of spec doc)
**Purpose:** Three sign-in / sign-up page variants for a client, built as a foundation project so the client can choose a direction before we go deeper.

---

## Goal

Produce three visually distinct but stylistically consistent sign-in / sign-up page mockups, viewable in both Storybook (component-level) and the Next.js app (clickable pages). Hand the client a tangible "pick a direction" artifact.

## Non-goals

- Real authentication (no backend, no session, no OAuth callbacks). Form submit is a no-op + toast.
- Email verification, password reset, 2FA flows. Out of scope for the first cut.
- Mobile-specific designs. Variants should be responsive, but desktop is the primary review surface.
- Dark mode. The reference style is light-only; revisit if the client asks.

## Style direction

Borrowed from [althea.tiptreesystems.com/login](https://althea.tiptreesystems.com/login) — academic / research-tool calm, muted, restrained.

### Tokens (locked)

| Token | Value | Used for |
|---|---|---|
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#1b1b1b` | Body text |
| `--primary` | `#47696b` | Brand accent (sage/teal) — used on secondary CTAs, links, brand panel |
| `--primary-foreground` | `#ffffff` | Text on `--primary` |
| `--cta` | `#000000` | Primary form CTA background |
| `--cta-foreground` | `#ffffff` | Text on `--cta` |
| `--muted` | `#fafafa` | Social button background |
| `--muted-foreground` | `#757575` | Subdued labels, helper text |
| `--border` | `#e5e5e5` | Input + card borders |
| `--border-strong` | `#dadce0` | Social button border |
| `--radius` | `6px` | Inputs, form CTAs, cards |
| `--radius-pill` | `999px` | Nav pills only |
| Font | `Inter` (with system fallbacks) | Everywhere |
| H1 | `20px / 400` | Understated, matches the source |
| Body | `14px` | Inputs and most copy |
| Input padding | `16px` | Generous, breathable |

### Mood guardrails

- No gradients, no shadows beyond a single hairline border.
- No marketing-style oversized headings. The page is functional, not promotional.
- Iconography only where it carries info (Google logo, GitHub logo). No decorative icons.

## Form scope

All three variants share the same fields:

- **Sign in:** Email, Password, "Remember me" checkbox, primary CTA, "Continue with Google", "Continue with GitHub", "Forgot password?" link, "Don't have an account? Sign up" link.
- **Sign up:** Email, Password, "I agree to Terms" checkbox, primary CTA, same two social buttons, "Already have an account? Sign in" link.

A single `mode: "sign-in" | "sign-up"` prop drives the differences inside each variant component — no duplicated layouts.

Validation via `react-hook-form` + `zod`. Errors render inline under each field using shadcn's `Form` primitives.

## The three variants

### 1. ClassicCentered

The "safe" choice. Closest in spirit to the Tiptree reference.

- White page background, no marketing imagery
- Centered column, 400px wide, vertically centered in the viewport
- Logo on top, brand name + one-line tagline, then the form
- Stack: email → password → checkbox + forgot-password row → black CTA → "or" separator → two social buttons
- Footer link: "Don't have an account? Sign up" (sign-in mode) / inverse for sign-up

### 2. SplitScreen

Lets the brand color do work without making the form feel "marketed-at."

- 50/50 horizontal split
- **Left panel:** solid `#47696b` (the brand accent). Logo reversed out in white, brand name, a short one-paragraph value prop. No imagery — keeping the calm aesthetic.
- **Right panel:** white. Same form stack as ClassicCentered, but left-aligned within a 440px column so the form has room to breathe.
- Collapses to single column under 768px (sage panel becomes a slim top banner).

### 3. Minimalist

Strips every container.

- White page, no card, no border around the form
- Form lives in a 360px column, slightly above vertical center
- Very generous spacing between elements (24px gap min)
- No separator between primary CTA and social buttons — just spacing
- Smallest visual surface; most "modern SaaS" feeling

## Architecture

```
src/
  components/
    auth/
      AuthFormFields.tsx       # email + password + checkbox bits, mode-aware
      SocialButtons.tsx        # Google + GitHub, shared across variants
      variants/
        ClassicCentered.tsx
        SplitScreen.tsx
        Minimalist.tsx
    ui/                        # shadcn primitives (installed via CLI)
  app/
    sign-in/[variant]/page.tsx # variant: 'classic' | 'split' | 'minimal'
    sign-up/[variant]/page.tsx
    preview/page.tsx           # index page with 6 links
  lib/
    auth-schema.ts             # zod schemas for sign-in + sign-up
.storybook/
  main.ts
  preview.ts
src/stories/auth/
  ClassicCentered.stories.tsx  # exports SignIn, SignUp
  SplitScreen.stories.tsx
  Minimalist.stories.tsx
```

### Why this shape

- **One variant = one component**, owns its own layout. No "configurable mega-component" — easier to read, easier to change one variant without touching another.
- **Shared sub-components (`AuthFormFields`, `SocialButtons`)** so changing field validation or social provider list doesn't require editing three files.
- **Variants live in `components/auth/variants/`** — clearly co-located, single import path.
- **Dynamic route segment `[variant]`** keeps the Next.js pages small; each just resolves the variant and renders it.

## Stack

- **Next.js 15** (App Router, TypeScript, ESLint, Tailwind v4, `src/` directory)
- **shadcn/ui** initialized with custom theme using the tokens above
- **Components installed:** `button`, `input`, `label`, `card`, `form`, `separator`, `checkbox`, `sonner`
- **Forms:** `react-hook-form` + `zod` + `@hookform/resolvers`
- **Storybook 8** with `@storybook/nextjs` framework, light mode only
- **No test framework yet** — out of scope for v1; add if/when components stabilize

## Open questions for the client (not blocking)

- Brand assets: client provided a *style reference* (Tiptree). They have not yet shared their own logo or word-mark. Variants will use a placeholder logo (simple inline SVG mark) and the literal text "Brand" until real assets arrive.
- Tiptree's real flow is passwordless / SSO with no password field. We're keeping the password field per the user's earlier scope decision; can swap to passwordless trivially later.

## Success criteria

- `npm run dev` serves Next.js; `/preview` lists all six routes (3 variants × sign-in/up) and each renders without error
- `npm run storybook` serves Storybook with six stories (3 variants × 2 modes), each renders without error
- All three variants visibly reuse the same tokens (palette, type, radii) but feel distinct in layout
- Form validation works in both Storybook and the live pages (empty submit shows inline errors; submit success shows a toast)
