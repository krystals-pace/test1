# CLAUDE.md

## Stack
Next.js (App Router), TypeScript, plain CSS (no CSS framework), Supabase (auth + database), deployed on Vercel.

## Commands
Assuming default Next.js scripts in package.json — if yours differ, tell Claude and this section should be corrected:
- `npm run dev` — local dev server
- `npm run build` — production build (what Vercel runs)
- `npm run lint` — lint

## Never
- Add a dependency without asking first.
- Edit `.env` or any environment variable.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.

## Conventions
- TypeScript throughout, no `any` without a comment explaining why.
- Plain CSS only — no Tailwind, no CSS-in-JS libraries, unless asked first.
- Supabase client calls live in a small shared helper, not duplicated per page.
- One route/page per feature slice; don't build ahead of the ACTIVE slice.

## Current focus
See roadmap.md. Work only on the slice marked ACTIVE.
