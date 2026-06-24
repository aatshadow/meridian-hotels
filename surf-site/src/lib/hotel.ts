import type { Pair } from "./i18n";

/* base-aware asset prefix ('/' in dev, '/<app>/' in the combined build) */
const B = import.meta.env.BASE_URL;

/* ============================================================
   HOTEL — single source of truth.
   ⚠️ VERIFY the email + peak-season details with the hotel.
   ============================================================ */
const phoneE164 = "+359898745896";

export const HOTEL = {
  name: "СЪРФ",
  nameLatin: "Surf",
  place: { bg: "Приморско · Българско Черноморие", en: "Primorsko · Bulgarian Black Sea" } as Pair,
  town: { bg: "Приморско", en: "Primorsko" } as Pair,

  // contact
  phoneDisplay: "+359 898 74 58 96",
  phoneE164,
  tel: `tel:${phoneE164}`,
  phoneDisplay2: "+359 888 62 66 36",
  email: "office@surf-hotel.com",
  viber: `viber://chat?number=${phoneE164}`,
  facebook: "https://www.facebook.com/surfhotell/",
  instagram: "surfhotell",
  tiktok: "",

  address: {
    bg: "Местност Пясъците, ММЦ, 8290 Приморско, България",
    en: "Pyasatsite area, MMC, 8290 Primorsko, Bulgaria",
  } as Pair,
  coordinates: "42.2627° N · 27.7550° E",
  reception: { bg: "Рецепция · 24 часа", en: "Reception · 24 hours" } as Pair,
  mapEmbed: "https://www.google.com/maps?q=Surf+Hotel+Primorsko+MMC&z=14&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Surf+Hotel+Primorsko+MMC",
} as const;

/* Real photography — from the hotel's own gallery (surf-hotel.com). */
const P = `${B}assets/photos`;
export const PHOTOS = {
  base: P,
  heroSunset: `${P}/14.jpg`, // aerial of the beach — signature
  heroDay: `${P}/1.jpg`, // hotel facade with terrace
  bayPanorama: `${P}/14.jpg`,
  exterior: `${P}/9.jpg`, // long garden facade
  blueHourPool: `${P}/23.jpg`, // sea + palms at dusk — dark section bg
  pool: `${P}/21.jpg`,
  terrace: `${P}/16.jpg`, // restaurant terrace
  beach: `${P}/14.jpg`,
  bay: `${P}/23.jpg`,
  lifestyle: `${P}/25.jpg`, // oleander by the building
  curtainView: `${P}/6.jpg`, // room window onto greenery
  reception: `${P}/10.jpg`,
  gallery: [
    "14.jpg",
    "1.jpg",
    "21.jpg",
    "8.jpg",
    "16.jpg",
    "7.jpg",
    "12.jpg",
    "23.jpg",
    "9.jpg",
    "22.jpg",
    "10.jpg",
    "17.jpg",
    "11.jpg",
    "6.jpg",
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
    img: `${P}/8.jpg`,
    desc: {
      bg: "Светла двойна стая с балкон и изглед към зеленината и морето — на 120 метра от плажа.",
      en: "A bright double room with a balcony and a view over the greenery and sea — 120 metres from the beach.",
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
    name: { bg: "Стая 2+1", en: "Family Room 2+1" },
    img: `${P}/12.jpg`,
    desc: {
      bg: "Просторна стая с три легла — място за семейството, на крачки от басейна и плажа.",
      en: "A spacious three-bed room — room for the family, steps from the pool and the beach.",
    },
    features: [
      { bg: "2+1 легла", en: "2+1 beds" },
      { bg: "Балкон", en: "Balcony" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Самостоятелен санитарен възел", en: "Private bathroom" },
    ],
  },
  {
    id: "apartment",
    name: { bg: "Апартамент 2+2", en: "Apartment 2+2" },
    img: `${P}/26.jpg`,
    desc: {
      bg: "Апартамент за до четирима — комфорт за семейства и групи, с балкон и всичко необходимо.",
      en: "An apartment for up to four — comfort for families and groups, with a balcony and all the essentials.",
    },
    features: [
      { bg: "2+2 легла", en: "2+2 beds" },
      { bg: "Балкон", en: "Balcony" },
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор и хладилник", en: "TV & fridge" },
    ],
  },
  {
    id: "double",
    name: { bg: "Двойна стая", en: "Double Room" },
    img: `${P}/7.jpg`,
    desc: {
      bg: "Уютна двойна стая с балкон — спокойствие и сън след дълъг ден на слънце и море.",
      en: "A cosy double room with a balcony — calm and rest after a long day of sun and sea.",
    },
    features: [
      { bg: "Двойно легло", en: "Double bed" },
      { bg: "Балкон", en: "Balcony" },
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
      bg: "Сезонен басейн с шезлонги под открито небе, плюс кът за най-малките.",
      en: "A seasonal open-air pool with loungers, plus a corner for the little ones.",
    },
    img: `${P}/21.jpg`,
  },
  {
    id: "restaurant",
    name: { bg: "Ресторант и тераса", en: "Restaurant & Terrace" },
    text: {
      bg: "Семеен ресторант с просторна тераса — вкусни ястия и уютни вечери след ден на плажа.",
      en: "A family restaurant with a spacious terrace — good food and cosy evenings after a day on the beach.",
    },
    img: `${P}/16.jpg`,
  },
  {
    id: "beach",
    name: { bg: "Плаж на 120 метра", en: "Beach 120 m Away" },
    text: {
      bg: "Просторен плаж с уникални пясъчни дюни в защитена природна зона — само на 120 метра.",
      en: "A spacious beach with unique sand dunes in a protected nature zone — just 120 metres away.",
    },
    img: `${P}/14.jpg`,
  },
  {
    id: "sport",
    name: { bg: "Спортна база", en: "Sports Facilities" },
    text: {
      bg: "В Международния младежки център — фитнес, игрища и отлични условия за спортни лагери.",
      en: "Within the International Youth Centre — a gym, courts and great conditions for training camps.",
    },
    img: `${P}/11.jpg`,
  },
];

export const SERVICES: Pair[] = [
  { bg: "Безплатен Wi-Fi", en: "Free Wi-Fi" },
  { bg: "Безплатен паркинг", en: "Free parking" },
  { bg: "Закуска", en: "Breakfast" },
  { bg: "Балкон във всяка стая", en: "Balcony in every room" },
  { bg: "Рецепция 24 часа", en: "24-hour reception" },
  { bg: "Спортна база", en: "Sports facilities" },
];

export const NAV: { to: string; label: Pair }[] = [
  { to: "/", label: { bg: "Начало", en: "Home" } },
  { to: "/rooms", label: { bg: "Стаи", en: "Rooms" } },
  { to: "/amenities", label: { bg: "Удобства", en: "Amenities" } },
  { to: "/gallery", label: { bg: "Галерия", en: "Gallery" } },
  { to: "/book", label: { bg: "Резервация", en: "Book" } },
];

export const CTA_BOOK: Pair = { bg: "Резервирай стая", en: "Book your room" };
