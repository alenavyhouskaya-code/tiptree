# tiptree — auth page variants

Three sign-in / sign-up page designs for client review. Same design tokens, three distinct layouts.

Style reference: [althea.tiptreesystems.com/login](https://althea.tiptreesystems.com/login) — academic / research-tool calm, sage `#47696b` accent, hairline borders, Inter, no dark mode.

## Stack

- Next.js 16 (App Router, TypeScript, `src/`)
- Tailwind v4
- shadcn/ui (base-nova preset, Base UI primitives)
- react-hook-form + zod for validation
- sonner for toasts
- Storybook 10 (`@storybook/nextjs-vite`)

## Run

```bash
npm install
npm run dev          # Next.js   → http://localhost:3000
npm run storybook    # Storybook → http://localhost:6006
```

## The variants

| Variant | Sign in | Sign up |
|---|---|---|
| Classic Centered | `/sign-in/classic` | `/sign-up/classic` |
| Split Screen     | `/sign-in/split`   | `/sign-up/split`   |
| Minimalist       | `/sign-in/minimal` | `/sign-up/minimal` |

`/` is a preview index linking to all six.

## Where things live

```
src/
  app/
    page.tsx                    # preview index
    sign-in/[variant]/page.tsx  # dynamic variant routing
    sign-up/[variant]/page.tsx
    globals.css                 # brand tokens (sage primary, 6px radius, etc.)
  components/
    auth/
      AuthForm.tsx              # shared form, mode-aware
      SocialButtons.tsx         # Google + GitHub
      variants/
        ClassicCentered.tsx
        SplitScreen.tsx
        Minimalist.tsx
    ui/                         # shadcn primitives
  lib/
    auth-schema.ts              # zod schemas for sign-in + sign-up
  stories/auth/                 # one .stories.tsx per variant
docs/
  superpowers/specs/            # design spec
```

## What's stubbed

- No real auth backend — form submits emit a sonner toast.
- "Brand" word-mark + "B" square are placeholders until the client's logo is in.
- Light mode only. Token block for dark exists in `globals.css` if needed later.
