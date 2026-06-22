# Meridian — Hotel Growth Studio (working name)

A cinematic, multi-page agency website for a boutique-hotel marketing studio on the
Bulgarian Black Sea coast. Design concept: **"The Horizon"** — maritime luxury, a pearl /
Black-Sea-blue rhythm, Bulgarian-gold accents, a recurring gold horizon hairline and
mono "tide-mark" labels carrying Primorsko's real coordinates (42.2667° N · 27.7586° E).

> **The name is a placeholder.** Change it in **one place** — `src/lib/brand.ts` → `BRAND.name` —
> and it updates the logo, nav, footer, watermark and metadata everywhere.

## Run it

```bash
npm install
npm run dev      # → http://localhost:5190
npm run build    # production build into /dist
npm run preview  # serve the production build
```

## Stack

Vite · React + TypeScript · Tailwind v4 · Framer Motion · Lenis (smooth scroll) · React Router.

## Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Core promise → proof → the offer (no prices) → cases → gallery |
| `/summer-2026` | Summer 2026 | The seasonal "fill your summer" programme |
| `/about` | About | Who the studio is + method |
| `/success-cases` | Success Cases | Chaica & Teos with **real** analytics screenshots |
| `/contact` | Contact | Book-a-call form (client-side only) |

## Design system

- **Colours** (`src/index.css`): Pearl `#FAF7F1` · Black Sea `#0E2F3D` · Aegean `#1C5066` ·
  Bulgarian Gold `#C8A24E` (metallic gradient for sheen). Used 60/30/10 — pearl rules,
  sea-blue structures, gold only accents.
- **Type**: `Fraunces` (display serif) · `Inter Tight` (body) · `Space Mono` (data / labels).
- **Shared components** (`src/components/`): `MaskText`, `Reveal`, `RevealImage`, `HorizonLine`,
  `Marquee`, `MagneticButton`, `Counter`, `Cursor`, `Preloader`, `Nav`, `Footer`, `Logo`.

## Editing content

- **Brand / nav / contact / services**: `src/lib/brand.ts`
- **Photo picks** (hero, gallery, per-section): `src/lib/brand.ts` → `PHOTOS`
- **Success cases + real metrics + quotes**: `src/lib/cases.ts`
- **Images**: `public/assets/chaica/` (photos) and `public/assets/results/` (analytics screenshots)

## Notes / to swap later

- **Reels**: there were no video files, so the "Three Reels" offer card uses a still as a
  stand-in. Drop real reel covers/video in `public/assets/` and update the offer image in
  `src/pages/Home.tsx` (`OFFER_IMAGES`) when ready.
- **Teos photos**: none were provided — Teos uses Chaica/location imagery as placeholders in
  `src/lib/cases.ts`.
- The contact form is front-end only (no backend); it shows a success state and offers a
  `mailto:` fallback. Wire it to your inbox / CRM when you're ready.
