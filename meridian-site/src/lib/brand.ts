
/* base-aware asset prefix ('/' in dev, '/<app>/' in the combined build) */
const B = import.meta.env.BASE_URL;
/* ============================================================
   BRAND — single source of truth.
   Swap the studio name in ONE place (NAME) when finalised.
   ============================================================ */

export const BRAND = {
  name: "MERIDIAN",
  // placeholder wordmark — change `name` above and it updates everywhere
  descriptor: "Студио за растеж на хотели",
  tagline: "Пълни стаи, всяко лято.",
  // Primorsko, Bulgaria — the studio's home coordinate (recurring motif)
  coordinates: "42.2667° N · 27.7586° E",
  home: "Приморско · Българско Черноморие",
  est: "ОСН. 2025",
  email: "hello@meridian.studio",
  phoneDisplay: "+359 88 000 0000",
  instagram: "@meridian.studio",
} as const;

export const NAV = [
  { label: "Начало", to: "/" },
  { label: "Лято 2026", to: "/summer-2026" },
  { label: "За нас", to: "/about" },
  { label: "Резултати", to: "/success-cases" },
  { label: "Контакт", to: "/contact" },
] as const;

/* What we deliver — the "complete pack" (no prices, by design) */
export const SERVICES = [
  {
    no: "01",
    title: "Сайт, който продава",
    line: "Превръща посетителя в резервация — директно при вас",
    body: "Бърз, красив сайт, на който гостите резервират директно при вас — без посредник между вас и госта.",
  },
  {
    no: "02",
    title: "Видеа с хиляди гледания",
    line: "Показваме хотела ви пред цяла България",
    body: "Органични видеа, които алгоритъмът разнася до хората, които вече мечтаят за морето — без платена реклама.",
  },
  {
    no: "03",
    title: "Снимки, които продават",
    line: "Кадри, които карат хората да искат да са там",
    body: "Професионална фотография, която прави хотела ви неустоим — на сайта, в Google и в социалните мрежи.",
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
