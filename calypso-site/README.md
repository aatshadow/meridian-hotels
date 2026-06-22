# Хотел Калипсо Блу · Primorsko — website

A premium, bilingual (**Bulgarian-first, English second**) single-page website for
**Хотел Калипсо Блу / Hotel Calypso Blue**, a seafront hotel in Primorsko on the
Bulgarian Black Sea coast. A "1M€ upgrade" of the original calypsobg.com — same real
content, a completely new design and experience.

Brand: **deep ocean + bright Calypso turquoise + warm sand + a coral sunset accent**,
with a sun-over-the-waves mark.

## Run it

```bash
npm install
npm run dev      # → http://localhost:5194
npm run build    # production build into /dist
npm run preview
```

## What makes it different (vs the Chaika site)

A deliberately different **format**: one immersive long-scroll page instead of many
pages, built around live, functional features the old site lacked:

- **Living booking dock** — a frosted availability widget (check-in · check-out · room ·
  guests) in the hero that **re-docks as a sticky bar** when you scroll. Submitting it
  scrolls to the enquiry form, pre-filled.
- **Live weather** for Primorsko (Open-Meteo, no API key) in the Location section.
- **Live Google map** of the hotel (ул. Перла 30).
- **Interactive season price matrix** — the real 6-season tariff table; pick a period and
  the column highlights (collapses to a per-room list on mobile).
- **Interactive rooms explorer** — pick a room, switch photos, see specs, book.
- **Lightbox gallery** — click any photo to open a full-screen viewer (keyboard + arrows).

## Sections (single page, anchor nav)

`Хотелът` · `Стаи` · `Цени` · `Галерия` · `Локация` · `Контакти`
(Hero → About → Rooms → Prices → Amenities → Gallery → Location → Contact)

## Real data — already filled in (from calypsobg.com)

Everything below is the hotel's **real** information, in `src/lib/hotel.ts`:

- **Phones:** 0886 91 00 37 · 0889 72 60 17 — **Email:** info@calypsobg.com
- **Facebook:** facebook.com/Calypsoprimorsko
- **Address:** гр. Приморско 8290, ул. Перла 30 (Номад Тур ЕООД)
- **Rooms:** Двойна (24 m², 18 бр.), Тройна 2+1 (26 m², 12 бр.), Апартамент 2+2 (54 m², 3 бр.)
- **Prices:** the full 6-window season table, Standard + Sea View per room, in EUR/night.

> The booking dock and enquiry form are **front-end only** — submitting opens the guest's
> email client with a pre-filled enquiry to info@calypsobg.com. Wire to a real booking
> engine / form backend when ready.

## Language

Bulgarian is the default; the **БГ / EN** switch is in the nav (choice persists in
`localStorage`). All copy lives as `{ bg, en }` pairs:
- Page prose → `src/lib/content.ts`
- Rooms, prices, amenities, attractions, nav labels → `src/lib/hotel.ts`
- Render with `const t = useT(); … {t(somePair)}`

## Design system

- **Colours** (`src/index.css`, token names kept compatible with the shared kit):
  cream/sand `#F7F1E4` · deep ocean `#083C4E` · turquoise `#16A9BE` · coral `#FF6F5B`.
- **Type** (all Cyrillic-capable): `Cormorant` (display) · `Onest` (body) ·
  `JetBrains Mono` (labels).
- **Mark:** the sun-over-waves logo is a scalable SVG in `src/components/Logo.tsx`.

## Photos

87 real photos pulled from calypsobg.com live in `public/assets/`
(`img/` heroes & features, `rooms/`, `gallery/`, `logo/`). Swap files or edit the maps
in `src/lib/hotel.ts` (`IMG`, `ROOMS.photos`, `GALLERY`) to change imagery.
