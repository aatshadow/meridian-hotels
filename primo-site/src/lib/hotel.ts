import type { Pair } from "./i18n";

/* base-aware asset prefix ('/' in dev, '/<app>/' in the combined build) */
const B = import.meta.env.BASE_URL;

/* ============================================================
   HOTEL — single source of truth.
   ⚠️ VERIFY the email with the owner. Room photos 8/9 are
   placeholders — swap for the real shoot.
   ============================================================ */
const phoneE164 = "+359876224011";

export const HOTEL = {
  name: "ПРИМО",
  nameLatin: "Primo",
  place: { bg: "Приморско · Българско Черноморие", en: "Primorsko · Bulgarian Black Sea" } as Pair,
  town: { bg: "Приморско", en: "Primorsko" } as Pair,

  // contact
  phoneDisplay: "+359 876 224 011",
  phoneE164,
  tel: `tel:${phoneE164}`,
  phoneDisplay2: "+359 885 655 881",
  email: "info@hotel-primo.bg",
  viber: `viber://chat?number=${phoneE164}`,
  facebook: "https://www.facebook.com/p/%D0%A1%D0%B5%D0%BC%D0%B5%D0%B5%D0%BD-%D1%85%D0%BE%D1%82%D0%B5%D0%BB-%D0%9F%D1%80%D0%B8%D0%BC%D0%BE-61561673810864/",
  instagram: "",
  tiktok: "",

  address: {
    bg: "ул. Зора 11, 8290 Приморско, България",
    en: "Zora St. 11, 8290 Primorsko, Bulgaria",
  } as Pair,
  coordinates: "42.2710° N · 27.7463° E",
  reception: { bg: "Рецепция · 24 часа", en: "Reception · 24 hours" } as Pair,
  mapEmbed: "https://www.google.com/maps?q=Hotel+Primo+Zora+11+Primorsko&z=15&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Primo+Zora+11+Primorsko",
} as const;

/* Real photography — from the hotel's own listings (pochivka.bg, rooms.bg).
   8.jpg & 9.jpg are placeholders for the rooms — replace with the real shoot. */
const P = `${B}assets/photos`;
export const PHOTOS = {
  base: P,
  heroSunset: `${P}/7.jpg`, // pool + kids' pool — signature
  heroDay: `${P}/1.jpg`, // pool with the building behind
  bayPanorama: `${P}/1.jpg`,
  exterior: `${P}/1.jpg`,
  blueHourPool: `${P}/5.jpg`, // pool bar in the evening — dark section bg
  pool: `${P}/4.jpg`,
  terrace: `${P}/5.jpg`,
  beach: `${P}/7.jpg`,
  bay: `${P}/4.jpg`,
  lifestyle: `${P}/5.jpg`,
  curtainView: `${P}/3.jpg`, // real room
  reception: `${P}/2.jpg`,
  gallery: [
    "7.jpg",
    "4.jpg",
    "1.jpg",
    "5.jpg",
    "3.jpg",
    "2.jpg",
    "9.jpg",
    "8.jpg",
  ].map((f) => `${P}/${f}`),
} as const;

export type Feature = Pair;

export type Room = {
  id: string;
  name: Pair;
  img: string;
  desc: Pair;
  features: Feature[];
};

export const ROOMS: Room[] = [
  {
    id: "double",
    name: { bg: "Двойна стая с балкон", en: "Double Room with Balcony" },
    img: `${P}/3.jpg`,
    desc: {
      bg: "Светла двойна стая с балкон, климатик и всичко необходимо — спокоен сън на крачки от басейна.",
      en: "A bright double room with a balcony, air conditioning and all the essentials — restful sleep steps from the pool.",
    },
    features: [
      { bg: "Двойно легло", en: "Double bed" },
      { bg: "Балкон", en: "Balcony" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор и хладилник", en: "TV & fridge" },
    ],
  },
  {
    id: "family",
    name: { bg: "Семейна стая", en: "Family Room" },
    img: `${P}/8.jpg`,
    desc: {
      bg: "Просторна стая с три легла и балкон — място за цялото семейство, далеч от шума.",
      en: "A spacious three-bed room with a balcony — room for the whole family, away from the noise.",
    },
    features: [
      { bg: "До 3 гости", en: "Up to 3 guests" },
      { bg: "Балкон", en: "Balcony" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор и хладилник", en: "TV & fridge" },
    ],
  },
  {
    id: "apartment",
    name: { bg: "Апартамент с кухненски бокс", en: "Apartment with Kitchenette" },
    img: `${P}/9.jpg`,
    desc: {
      bg: "Апартамент за до четирима с кухненски бокс — комфорт и самостоятелност за по-дълъг престой.",
      en: "An apartment for up to four with a kitchenette — comfort and independence for a longer stay.",
    },
    features: [
      { bg: "До 4 гости", en: "Up to 4 guests" },
      { bg: "Кухненски бокс", en: "Kitchenette" },
      { bg: "Балкон", en: "Balcony" },
      { bg: "Климатик", en: "Air conditioning" },
    ],
  },
];

export type Amenity = { id: string; name: Pair; text: Pair; img: string };

export const AMENITIES: Amenity[] = [
  {
    id: "pool",
    name: { bg: "Два басейна", en: "Two Pools" },
    text: {
      bg: "Външен басейн и отделен детски басейн — сърцето на хотел Примо, със слънце от сутрин до залез.",
      en: "An outdoor pool and a separate children's pool — the heart of Hotel Primo, with sun from morning to sunset.",
    },
    img: `${P}/7.jpg`,
  },
  {
    id: "poolbar",
    name: { bg: "Бар на басейна", en: "Pool Bar" },
    text: {
      bg: "Студени напитки и спокойни вечери на крачка от водата — мястото, където денят се отпуска.",
      en: "Cold drinks and easy evenings a step from the water — where the day unwinds.",
    },
    img: `${P}/5.jpg`,
  },
  {
    id: "beach",
    name: { bg: "Два плажа наблизо", en: "Two Beaches Nearby" },
    text: {
      bg: "Северният и Южният плаж са на 8–10 минути пеш — близо до морето, далеч от шума.",
      en: "The North and South beaches are an 8–10 minute walk away — close to the sea, far from the noise.",
    },
    img: `${P}/1.jpg`,
  },
  {
    id: "calm",
    name: { bg: "Тишина и паркинг", en: "Calm & Parking" },
    text: {
      bg: "Спокоен квартал на 100 метра от резиденция Перла, с безплатен паркинг за гостите.",
      en: "A quiet neighbourhood 100 metres from the Perla residence, with free parking for guests.",
    },
    img: `${P}/2.jpg`,
  },
];

export const SERVICES: Pair[] = [
  { bg: "Безплатен Wi-Fi", en: "Free Wi-Fi" },
  { bg: "Безплатен паркинг", en: "Free parking" },
  { bg: "Климатик", en: "Air conditioning" },
  { bg: "Бар на басейна", en: "Pool bar" },
  { bg: "Кухненски бокс", en: "Kitchenette" },
  { bg: "Домашни любимци", en: "Pets welcome" },
];

export const NAV: { to: string; label: Pair }[] = [
  { to: "/", label: { bg: "Начало", en: "Home" } },
  { to: "/rooms", label: { bg: "Стаи", en: "Rooms" } },
  { to: "/amenities", label: { bg: "Удобства", en: "Amenities" } },
  { to: "/gallery", label: { bg: "Галерия", en: "Gallery" } },
  { to: "/book", label: { bg: "Резервация", en: "Book" } },
];

export const CTA_BOOK: Pair = { bg: "Резервирай стая", en: "Book your room" };
