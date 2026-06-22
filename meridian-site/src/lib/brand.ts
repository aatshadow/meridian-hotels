
/* base-aware asset prefix ('/' in dev, '/<app>/' in the combined build) */
const B = import.meta.env.BASE_URL;
/* ============================================================
   BRAND — single source of truth.
   Swap the studio name in ONE place (NAME) when finalised.
   ============================================================ */

export const BRAND = {
  name: "MERIDIAN",
  // placeholder wordmark — change `name` above and it updates everywhere
  descriptor: "Hotel Growth Studio",
  tagline: "We fill coastal hotels.",
  // Primorsko, Bulgaria — the studio's home coordinate (recurring motif)
  coordinates: "42.2667° N · 27.7586° E",
  home: "Primorsko · Bulgarian Black Sea",
  est: "EST. 2025",
  email: "hello@meridian.studio",
  phoneDisplay: "+359 88 000 0000",
  instagram: "@meridian.studio",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Summer 2026", to: "/summer-2026" },
  { label: "About", to: "/about" },
  { label: "Success Cases", to: "/success-cases" },
  { label: "Contact", to: "/contact" },
] as const;

/* What we deliver — the "complete pack" (no prices, by design) */
export const SERVICES = [
  {
    no: "01",
    title: "Cinematic Website",
    line: "A site that sells the stay before they arrive",
    body: "A fast, beautiful booking funnel built to turn a scroll into a reservation — and a reservation into a direct one, off the OTAs.",
  },
  {
    no: "02",
    title: "Three Reels",
    line: "Short films that travel further than ads",
    body: "Organic, scroll-stopping reels that put your rooms in front of the people already dreaming about the coast.",
  },
  {
    no: "03",
    title: "Photography",
    line: "Light, water, and rooms that look lived-in",
    body: "A full professional shoot — the images that make the website, the reels and the booking page feel like a place worth paying for.",
  },
] as const;

/* Real photo manifest — curated from the asset-catalog pass.
   Filenames map to specific, hand-picked shots (orientation: all landscape). */
const C = `${B}assets/chaica`;
export const PHOTOS = {
  base: C,
  hero: `${C}/orig_16626_53.jpg`, // golden-hour sun on the horizon — the signature image
  heroAltDay: `${C}/orig_16626_60.jpg`, // panoramic beach balcony
  bayPanorama: `${C}/orig_16626_27.jpg`, // dramatic-sky bay
  exterior: `${C}/orig_16626_59.jpg`, // ЧАЙКА facade — identity shot
  blueHourPool: `${C}/orig_16626_50.jpg`, // moody twilight pool — dark section bg
  pool: `${C}/orig_16626_37.jpg`,
  terrace: `${C}/orig_16626_54.jpg`,
  room: `${C}/orig_16626_30.jpg`, // sea-view room
  roomFramed: `${C}/orig_16626_64.jpg`, // room with a view through French doors
  lifestyle: `${C}/orig_16626_57.jpg`, // book + wine at dusk
  beach: `${C}/orig_16626_56.jpg`, // Primorsko beach
  bay: `${C}/orig_16626_24.jpg`,
  curtainView: `${C}/orig_16626_48.jpg`, // dreamy sheer-curtain sea view
  // gallery order (most cinematic first)
  gallery: [
    "orig_16626_53.jpg",
    "orig_16626_60.jpg",
    "orig_16626_59.jpg",
    "orig_16626_50.jpg",
    "orig_16626_64.jpg",
    "orig_16626_30.jpg",
    "orig_16626_27.jpg",
    "orig_16626_37.jpg",
    "orig_16626_57.jpg",
    "orig_16626_61.jpg",
    "orig_16626_54.jpg",
    "orig_16626_56.jpg",
  ].map((f) => `${C}/${f}`),
} as const;

export const RESULTS = {
  chaica: [`${B}assets/results/chaica-1.png`, `${B}assets/results/chaica-2.png`, `${B}assets/results/chaica-3.png`, `${B}assets/results/chaica-4.png`, `${B}assets/results/chaica-5.png`],
  teos: [`${B}assets/results/teos-1.png`],
} as const;
