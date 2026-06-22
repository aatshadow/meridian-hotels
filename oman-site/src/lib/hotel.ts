import type { Pair } from "./i18n";

/* base-aware asset prefix ('/' in dev, '/oman/' in the combined build) */
const B = import.meta.env.BASE_URL;

/* ============================================================
   ХОТЕЛ ОМАН · ПРИМОРСКО — real data (from hotel-oman.com)
   Family hotel on the Black Sea. Half-board. Real phones / email /
   address / prices.
   ============================================================ */

const phoneE164 = "+359888989885";

export const HOTEL = {
  name: { bg: "Хотел Оман", en: "Hotel Oman" } as Pair,
  nameLatin: "OMAN",
  place: { bg: "Приморско", en: "Primorsko" } as Pair,
  country: { bg: "България", en: "Bulgaria" } as Pair,
  coords: "42.2706° N · 27.7625° E",
  lat: 42.2706,
  lon: 27.7625,

  phone: phoneE164,
  phoneDisplay: "0888 989 885",
  tel: `tel:${phoneE164}`,
  email: "omanimperial@abv.bg",
  mailto: "mailto:omanimperial@abv.bg",
  facebook: "https://www.facebook.com/Hotelomanprimorsko",

  address: {
    bg: "гр. Приморско, ул. „Трети март“ №8",
    en: "8 Treti Mart St, Primorsko, Bulgaria",
  } as Pair,

  /* distances (real) */
  distances: [
    { value: "200 м", label: { bg: "до Северния плаж", en: "to North Beach" } as Pair },
    { value: "500 м", label: { bg: "до центъра", en: "to the centre" } as Pair },
    { value: "600 м", label: { bg: "до Южния плаж", en: "to South Beach" } as Pair },
  ],

  mapEmbed:
    "https://www.google.com/maps?q=%D1%83%D0%BB.%20%D0%A2%D1%80%D0%B5%D1%82%D0%B8%20%D0%BC%D0%B0%D1%80%D1%82%208%2C%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE&z=15&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=42.2706,27.7625",
};

/* --- single-page navigation (anchors) --- */
export const NAV: { id: string; label: Pair }[] = [
  { id: "about", label: { bg: "За хотела", en: "The hotel" } },
  { id: "rooms", label: { bg: "Стаи", en: "Rooms" } },
  { id: "prices", label: { bg: "Цени", en: "Prices" } },
  { id: "amenities", label: { bg: "Удобства", en: "Amenities" } },
  { id: "gallery", label: { bg: "Галерия", en: "Gallery" } },
  { id: "contact", label: { bg: "Контакт", en: "Contact" } },
];

export const CTA_BOOK: Pair = { bg: "Резервирай", en: "Reserve" };
export const CTA_CALL: Pair = { bg: "Обади се", en: "Call us" };

/* --- imagery (curated real photos) --- */
export const IMG = {
  hero: `${B}assets/img/hero.jpg`,
  facadeDusk: `${B}assets/img/facade-dusk.jpg`,
  facade: `${B}assets/img/facade.jpg`,
  pool: [`${B}assets/img/pool-1.jpg`, `${B}assets/img/pool-2.jpg`],
  garden: [`${B}assets/img/garden.jpg`, `${B}assets/img/garden-2.jpg`],
  sea: `${B}assets/img/sea.jpg`,
  aerial: `${B}assets/img/aerial.jpg`,
  restaurant: `${B}assets/img/restaurant.jpg`,
};

/* --- rooms (REAL) --- */
export type Room = {
  id: string;
  name: Pair;
  kicker: Pair;
  count?: number;
  desc: Pair;
  features: Pair[];
  photos: string[];
};

export const ROOMS: Room[] = [
  {
    id: "studio",
    name: { bg: "Студио", en: "Studio" },
    kicker: { bg: "6 студиа", en: "6 studios" },
    count: 6,
    desc: {
      bg: "Уютно студио със спалня и разтегаем диван, гардероб, собствен санитарен възел, телевизор и кана за топла вода.",
      en: "A cosy studio with a bed and a sofa-bed, wardrobe, private bathroom, TV and a kettle.",
    },
    features: [
      { bg: "Спалня + диван", en: "Bed + sofa-bed" },
      { bg: "Собствена баня", en: "Private bathroom" },
      { bg: "Телевизор", en: "TV" },
      { bg: "Гардероб", en: "Wardrobe" },
      { bg: "Ютия и сешоар", en: "Iron & hairdryer" },
    ],
    photos: [`${B}assets/rooms/studio-1.jpg`, `${B}assets/rooms/studio-2.jpg`, `${B}assets/rooms/studio-3.jpg`],
  },
  {
    id: "double",
    name: { bg: "Двойна стая", en: "Double Room" },
    kicker: { bg: "Полупансион", en: "Half board" },
    desc: {
      bg: "Светла двойна стая със собствен санитарен възел и всичко необходимо за спокойна морска почивка — със закуска и вечеря на блок маса.",
      en: "A bright double room with a private bathroom and everything you need — with breakfast and dinner served buffet-style.",
    },
    features: [
      { bg: "Закуска и вечеря", en: "Breakfast & dinner" },
      { bg: "Собствена баня", en: "Private bathroom" },
      { bg: "Телевизор", en: "TV" },
      { bg: "Кана за топла вода", en: "Kettle" },
    ],
    photos: [`${B}assets/rooms/double-1.jpg`, `${B}assets/rooms/double-2.jpg`, `${B}assets/rooms/double-3.jpg`],
  },
  {
    id: "triple",
    name: { bg: "Тройна стая", en: "Triple Room" },
    kicker: { bg: "За семейство", en: "For a family" },
    desc: {
      bg: "Просторна тройна стая, идеална за семейство — с удобства за трима и закуска и вечеря, включени в цената.",
      en: "A spacious triple room, ideal for a family — comfortable for three, with breakfast and dinner included.",
    },
    features: [
      { bg: "За 3 гости", en: "Sleeps 3" },
      { bg: "Закуска и вечеря", en: "Breakfast & dinner" },
      { bg: "Собствена баня", en: "Private bathroom" },
      { bg: "Телевизор", en: "TV" },
    ],
    photos: [`${B}assets/rooms/triple-1.jpg`, `${B}assets/rooms/triple-2.jpg`, `${B}assets/rooms/triple-3.jpg`],
  },
  {
    id: "quad",
    name: { bg: "Четворна стая", en: "Quadruple Room" },
    kicker: { bg: "За компания", en: "For a group" },
    desc: {
      bg: "Голяма четворна стая за по-голямо семейство или компания, с пълно удобство и включени закуска и вечеря.",
      en: "A large quadruple room for a bigger family or a group, fully equipped, with breakfast and dinner included.",
    },
    features: [
      { bg: "За 4 гости", en: "Sleeps 4" },
      { bg: "Закуска и вечеря", en: "Breakfast & dinner" },
      { bg: "Собствена баня", en: "Private bathroom" },
      { bg: "Телевизор", en: "TV" },
    ],
    photos: [`${B}assets/rooms/quad-1.jpg`, `${B}assets/rooms/quad-2.jpg`],
  },
  {
    id: "apartment",
    name: { bg: "Панорамен апартамент", en: "Panoramic Apartment" },
    kicker: { bg: "Само 1", en: "Only 1" },
    count: 1,
    desc: {
      bg: "Единственият панорамен апартамент в хотела — спалня и диван, гардероб, собствен санитарен възел и впечатляваща гледка.",
      en: "The hotel's only panoramic apartment — a bedroom and a sofa, wardrobe, private bathroom and a sweeping view.",
    },
    features: [
      { bg: "Панорамна гледка", en: "Panoramic view" },
      { bg: "Спалня + диван", en: "Bedroom + sofa" },
      { bg: "Собствена баня", en: "Private bathroom" },
      { bg: "Телевизор", en: "TV" },
    ],
    photos: [`${B}assets/rooms/apt-1.jpg`, `${B}assets/rooms/apt-2.jpg`, `${B}assets/rooms/apt-3.jpg`],
  },
];

/* --- prices (REAL, half board, per room) --- */
export const PRICE_SEASONS: Pair[] = [
  { bg: "01.06 – 30.06", en: "01.06 – 30.06" },
  { bg: "01.07 – 31.08", en: "01.07 – 31.08" },
];

export type PriceRow = { room: Pair; bgn: number[]; eur: number[] };

export const PRICE_ROWS: PriceRow[] = [
  { room: { bg: "Двойна стая", en: "Double Room" }, bgn: [140, 175], eur: [71.58, 89.48] },
  { room: { bg: "Тройна стая", en: "Triple Room" }, bgn: [210, 265], eur: [107.37, 135.49] },
  { room: { bg: "Четворна стая", en: "Quadruple Room" }, bgn: [280, 350], eur: [143.16, 178.95] },
];

/* --- amenities (REAL) --- */
export type Amenity = { icon: string; title: Pair; text: Pair };
export const AMENITIES: Amenity[] = [
  {
    icon: "waves",
    title: { bg: "Открит басейн", en: "Outdoor pool" },
    text: { bg: "Външен басейн в зелената лятна градина — сърцето на спокойните летни дни.", en: "An outdoor pool set in the green summer garden — the heart of slow summer days." },
  },
  {
    icon: "utensils",
    title: { bg: "Ресторант · блок маса", en: "Restaurant · buffet" },
    text: { bg: "Закуска и вечеря на блок маса, с напитки — безалкохолни, сок, кафе, мляко, вино и бира.", en: "Breakfast and dinner served buffet-style, with drinks — soft drinks, juice, coffee, milk, wine and beer." },
  },
  {
    icon: "wine",
    title: { bg: "Лоби бар", en: "Lobby bar" },
    text: { bg: "Спокойно място за чаша вино или кафе по всяко време на деня.", en: "A calm spot for a glass of wine or a coffee at any hour." },
  },
  {
    icon: "trees",
    title: { bg: "Лятна градина", en: "Summer garden" },
    text: { bg: "Зелена градина край басейна за следобедна почивка на сянка.", en: "A green garden by the pool for an afternoon in the shade." },
  },
  {
    icon: "bell",
    title: { bg: "Рецепция 24/7", en: "24/7 reception" },
    text: { bg: "Денонощна рецепция, винаги на разположение за гостите.", en: "A round-the-clock reception, always there for guests." },
  },
  {
    icon: "umbrella",
    title: { bg: "На крачки от плажа", en: "Steps from the beach" },
    text: { bg: "Само на 200 метра от Северния плаж, в най-тихата източна част на Приморско.", en: "Just 200 metres from North Beach, in the quietest eastern corner of Primorsko." },
  },
];

/* --- nearby (REAL) --- */
export const NEARBY: Pair[] = [
  { bg: "Китен", en: "Kiten" },
  { bg: "Дюни", en: "Dyuni" },
  { bg: "Созопол", en: "Sozopol" },
  { bg: "Несебър", en: "Nessebar" },
  { bg: "Бургас", en: "Burgas" },
  { bg: "Летище Бургас (60 км)", en: "Burgas Airport (60 km)" },
];

/* --- gallery (all real photos) --- */
export const GALLERY: string[] = Array.from(
  { length: 33 },
  (_, i) => `${B}assets/gallery/g-${String(i + 1).padStart(2, "0")}.jpg`,
);
