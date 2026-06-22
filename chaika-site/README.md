# Хотел Чайка · Primorsko — website

A bilingual (Bulgarian-first, English second) website for **Хотел Чайка / Hotel Chaika**,
a boutique seafront hotel in Primorsko on the Bulgarian Black Sea coast. Brand: deep
sea-navy + warm cream + champagne gold, with the seagull mark.

## Run it

```bash
npm install
npm run dev      # → http://localhost:5191 (Vite may pick the next free port, e.g. 5192)
npm run build    # production build into /dist
npm run preview
```

## ⚠️ Replace these real details before going live

All contact details are **placeholders** — edit them in **one file**: `src/lib/hotel.ts`

```ts
const phoneE164 = "+359885000000";          // ← the hotel's real phone (E.164, no spaces)
email:    "reservations@hotel-chaika.bg",   // ← real email
instagram:"hotel_chaika", tiktok:"hotel_chaika",
address:  { bg: "ул. …, Приморско 8290", en: "…, Primorsko 8290" },
mapEmbed: "https://www.google.com/maps?q=Primorsko…&output=embed",  // ← exact location
```

- **Phone** drives the `tel:` link **and** the **Viber** link (`viber://chat?number=+359…`).
- **The "Book your room" button** (`Резервирай стая`) leads to **/book**, which shows three
  big tappable cards — **Call · Email · Viber** — plus the address and a Google Map.

## Pages

| Route | BG | EN |
|---|---|---|
| `/` | Начало | Home |
| `/rooms` | Стаи | Rooms |
| `/amenities` | Удобства | Amenities |
| `/gallery` | Галерия | Gallery |
| `/book` | Резервация | Book (phone · email · Viber · map) |

## Language

Bulgarian is the default. The **БГ / EN** switch is in the nav (choice persists in
`localStorage`). All copy lives as `{ bg, en }` pairs:
- Page prose → `src/lib/content.ts`
- Rooms, amenities, services, nav labels → `src/lib/hotel.ts`
- Render with `const t = useT(); … {t(somePair)}`

## Design system

- **Colours** (`src/index.css`): cream `#FBF7EF` · navy `#143A4D` · champagne gold `#C5A463`.
- **Type** (all Cyrillic-capable): `Playfair Display` (display) · `Manrope` (body) ·
  `IBM Plex Mono` (labels).
- **Logo**: the seagull mark is a scalable SVG in `src/components/Logo.tsx`.

## Photos

Real shoot in `public/assets/photos/`. Curated picks (hero, rooms, amenities, gallery) are
mapped in `src/lib/hotel.ts` → `PHOTOS`. Swap files / update that map to change imagery.
