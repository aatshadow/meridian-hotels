import type { Pair } from "./i18n";

/* base-aware asset prefix ('/' in dev, '/<app>/' in the combined build) */
const B = import.meta.env.BASE_URL;

/* ============================================================
   HOTEL — single source of truth.
   ⚠️ REPLACE the contact details below with the hotel's real ones.
   ============================================================ */
const phoneE164 = "+359885000000"; // ← placeholder, replace with the real number

export const HOTEL = {
  name: "ЧАЙКА",
  nameLatin: "Chaika",
  place: { bg: "Приморско · Българско Черноморие", en: "Primorsko · Bulgarian Black Sea" } as Pair,
  town: { bg: "Приморско", en: "Primorsko" } as Pair,

  // contact — PLACEHOLDERS, swap for the real details
  phoneDisplay: "+359 885 000 000",
  phoneE164,
  tel: `tel:${phoneE164}`,
  email: "reservations@hotel-chaika.bg",
  viber: `viber://chat?number=${phoneE164}`,
  instagram: "hotel_chaika",
  tiktok: "hotel_chaika",

  address: {
    bg: "ул. Иглика, Приморско 8290, България",
    en: "Iglika St., Primorsko 8290, Bulgaria",
  } as Pair,
  coordinates: "42.2667° N · 27.7586° E",
  reception: { bg: "Рецепция · 24 часа", en: "Reception · 24 hours" } as Pair,
  // keyless Google Maps embed (search-based, no API key needed)
  mapEmbed: "https://www.google.com/maps?q=Primorsko%2C%20Bulgaria&z=14&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Chaika+Primorsko",
} as const;

/* Real photography — curated from the property shoot (all landscape). */
const P = `${B}assets/photos`;
export const PHOTOS = {
  base: P,
  heroSunset: `${P}/orig_16626_53.jpg`, // golden hour over the sea — signature
  heroDay: `${P}/orig_16626_60.jpg`, // panoramic balcony view
  bayPanorama: `${P}/orig_16626_27.jpg`,
  exterior: `${P}/orig_16626_59.jpg`, // ЧАЙКА facade
  blueHourPool: `${P}/orig_16626_50.jpg`, // twilight pool — dark section bg
  pool: `${P}/orig_16626_37.jpg`,
  terrace: `${P}/orig_16626_54.jpg`,
  beach: `${P}/orig_16626_56.jpg`,
  bay: `${P}/orig_16626_24.jpg`,
  lifestyle: `${P}/orig_16626_57.jpg`, // book + wine at dusk
  curtainView: `${P}/orig_16626_48.jpg`,
  reception: `${P}/orig_16626_44.jpg`,
  gallery: [
    "orig_16626_53.jpg",
    "orig_16626_60.jpg",
    "orig_16626_64.jpg",
    "orig_16626_50.jpg",
    "orig_16626_30.jpg",
    "orig_16626_59.jpg",
    "orig_16626_57.jpg",
    "orig_16626_54.jpg",
    "orig_16626_37.jpg",
    "orig_16626_28.jpg",
    "orig_16626_56.jpg",
    "orig_16626_48.jpg",
    "orig_16626_24.jpg",
    "orig_16626_61.jpg",
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
    id: "sea-view",
    name: { bg: "Стая с морски изглед", en: "Sea-View Room" },
    img: `${P}/orig_16626_30.jpg`,
    desc: {
      bg: "Светла двойна стая с балкон право към залива — събуждате се с морето пред очите си.",
      en: "A bright double room with a balcony straight onto the bay — you wake up to the sea.",
    },
    features: [
      { bg: "Двойно легло", en: "Double bed" },
      { bg: "Балкон към морето", en: "Sea-facing balcony" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор и хладилник", en: "TV & fridge" },
    ],
  },
  {
    id: "family",
    name: { bg: "Семейна стая", en: "Family Room" },
    img: `${P}/orig_16626_62.jpg`,
    desc: {
      bg: "Просторна стая с двойно и единично легло — място за цялото семейство, на крачки от плажа.",
      en: "A spacious room with a double and a single bed — room for the whole family, steps from the beach.",
    },
    features: [
      { bg: "Двойно + единично легло", en: "Double + single bed" },
      { bg: "До 3 гости", en: "Up to 3 guests" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор и хладилник", en: "TV & fridge" },
    ],
  },
  {
    id: "apartment",
    name: { bg: "Апартамент", en: "Apartment" },
    img: `${P}/orig_16626_20.jpg`,
    desc: {
      bg: "Самостоятелен апартамент с дневна и кухненски бокс — комфорт за по-дълъг престой край морето.",
      en: "A self-contained apartment with a living area and kitchenette — comfort for a longer stay by the sea.",
    },
    features: [
      { bg: "Спалня и дневна", en: "Bedroom & living area" },
      { bg: "Кухненски бокс", en: "Kitchenette" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор и хладилник", en: "TV & fridge" },
    ],
  },
  {
    id: "double",
    name: { bg: "Двойна стая", en: "Double Room" },
    img: `${P}/orig_16626_26.jpg`,
    desc: {
      bg: "Уютна двойна стая в сърцето на хотела — спокойствие и сън след дълъг ден на плажа.",
      en: "A cosy double room in the heart of the hotel — calm and rest after a long day on the beach.",
    },
    features: [
      { bg: "Двойно легло", en: "Double bed" },
      { bg: "Тих интериор", en: "Quiet interior" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор и хладилник", en: "TV & fridge" },
    ],
  },
];

export type Amenity = { id: string; name: Pair; text: Pair; img: string };

export const AMENITIES: Amenity[] = [
  {
    id: "pool",
    name: { bg: "Външен басейн", en: "Outdoor Pool" },
    text: {
      bg: "Басейн под открито небе с шезлонги и слънце от сутрин до залез.",
      en: "An open-air pool with loungers and sun from morning to sunset.",
    },
    img: `${P}/orig_16626_37.jpg`,
  },
  {
    id: "restaurant",
    name: { bg: "Ресторант и тераса", en: "Restaurant & Terrace" },
    text: {
      bg: "Тераса над морето, на която денят започва с кафе и свършва с вино и залез.",
      en: "A terrace above the sea where the day starts with coffee and ends with wine and sunset.",
    },
    img: `${P}/orig_16626_54.jpg`,
  },
  {
    id: "beach",
    name: { bg: "Плаж на крачки", en: "Beach Steps Away" },
    text: {
      bg: "Финият пясък на Приморско е само на няколко минути пеша от вратата.",
      en: "Primorsko's soft sand is just a few minutes' walk from the door.",
    },
    img: `${P}/orig_16626_56.jpg`,
  },
];

export const SERVICES: Pair[] = [
  { bg: "Безплатен Wi-Fi", en: "Free Wi-Fi" },
  { bg: "Безплатен паркинг", en: "Free parking" },
  { bg: "Закуска", en: "Breakfast" },
  { bg: "Рецепция 24 часа", en: "24-hour reception" },
  { bg: "Климатик", en: "Air conditioning" },
  { bg: "Бар на басейна", en: "Pool bar" },
];

export const NAV: { to: string; label: Pair }[] = [
  { to: "/", label: { bg: "Начало", en: "Home" } },
  { to: "/rooms", label: { bg: "Стаи", en: "Rooms" } },
  { to: "/amenities", label: { bg: "Удобства", en: "Amenities" } },
  { to: "/gallery", label: { bg: "Галерия", en: "Gallery" } },
  { to: "/book", label: { bg: "Резервация", en: "Book" } },
];

export const CTA_BOOK: Pair = { bg: "Резервирай стая", en: "Book your room" };
