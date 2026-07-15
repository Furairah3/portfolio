# Portfolio

Personal portfolio site for Foureiratou Zakari Yaou Idi — Next.js 16 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

A single-page, tab-based app (Home, Projects, About, Experience, Contact) with an animated "liquid glass"
aesthetic inspired by iOS's latest design language: frosted, refractive panels floating over a slowly
moving aurora-gradient background, a floating pill tab bar with a fluid sliding highlight, and glass cards
that subtly tilt and catch light as you move the cursor over them.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Project Structure

- `app/layout.tsx`, `app/page.tsx` — root shell; the actual app lives in `components/PortfolioApp.tsx`
- `components/PortfolioApp.tsx` — manages which tab is active and animates between tab panels
- `components/tabs/` — one component per tab (`HomeTab`, `ProjectsTab`, `AboutTab`, `ExperienceTab`, `ContactTab`)
- `components/TabNav.tsx` — the floating glass tab bar with the sliding active-tab highlight
- `components/TiltCard.tsx` — the reusable "liquid glass" card (frosted, cursor-reactive tilt + light sheen)
- `components/KineticText.tsx` — per-letter animated headline text
- `components/AuroraBackground.tsx` — the slow-moving colour-blob background behind everything
- `lib/projects.ts` — real project data, curated from `github.com/Furairah3`
- `lib/tabs.ts` — the tab list (id, label, icon)

## Content status

- **Projects** — real, pulled from your actual GitHub repos.
- **About / Experience** — currently placeholder empty-states. Drop your CV(s) into `cv-drop/` (gitignored,
  stays local — never committed) and ask to have them turned into real content for these tabs.
- **Contact** — real email + GitHub link.

## Design notes

- All animation respects `prefers-reduced-motion` (see `useReducedMotion` checks in `KineticText`,
  `TiltCard`, `SkillsMarquee`, and the tab-transition in `PortfolioApp`).
- The "glass" look is two Tailwind component classes in `app/globals.css`: `.glass` (cards/panels) and
  `.glass-pill` (nav, badges) — both use `backdrop-blur` + `backdrop-saturate` + a soft diagonal highlight.
- Color palette lives in `tailwind.config.ts` under `colors.aurora`.

## Deployment

Deployed to [Vercel](https://vercel.com). No database or environment variables needed — this is a fully
static/client-rendered site.
