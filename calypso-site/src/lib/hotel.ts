import type { Pair } from "./i18n";

/* base-aware asset prefix ('/' in dev, '/<app>/' in the combined build) */
const B = import.meta.env.BASE_URL;

/* ============================================================
   ХОТЕЛ КАЛИПСО БЛУ · ПРИМОРСКО — real data
   All figures are taken from calypsobg.com. Phones / email / address
   are the hotel's real contact details.
   ============================================================ */

/* --- contact (REAL) --- */
const phone1E164 = "+359886910037";
const phone2E164 = "+359889726017";

export const HOTEL = {
  name: { bg: "Хотел Калипсо Блу", en: "Hotel Calypso Blue" } as Pair,
  nameShort: "Calypso",
  place: { bg: "Приморско", en: "Primorsko" } as Pair,
  country: { bg: "България", en: "Bulgaria" } as Pair,
  coords: "42.2685° N · 27.7589° E",
  lat: 42.2685,
  lon: 27.7589,

  /* phones */
  phone1: phone1E164,
  phone1Display: "0886 91 00 37",
  phone1Tel: `tel:${phone1E164}`,
  phone2: phone2E164,
  phone2Display: "0889 72 60 17",
  phone2Tel: `tel:${phone2E164}`,
  /* generic single-phone helpers used by the shared kit */
  tel: `tel:${phone1E164}`,
  phoneDisplay: "0886 91 00 37",

  email: "info@calypsobg.com",
  mailto: "mailto:info@calypsobg.com",
  viber: `viber://chat?number=${phone1E164}`,

  facebook: "https://www.facebook.com/Calypsoprimorsko",

  address: {
    bg: "гр. Приморско 8290, ул. Перла 30",
    en: "30 Perla St, Primorsko 8290, Bulgaria",
  } as Pair,
  company: "Номад Тур ЕООД",

  mapEmbed:
    "https://www.google.com/maps?q=%D1%83%D0%BB.%20%D0%9F%D0%B5%D1%80%D0%BB%D0%B0%2030%2C%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE&z=15&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=42.2685,27.7589",
};

/* --- single-page navigation (anchors) --- */
export const NAV: { id: string; label: Pair }[] = [
  { id: "about", label: { bg: "Хотелът", en: "The hotel" } },
  { id: "rooms", label: { bg: "Стаи", en: "Rooms" } },
  { id: "prices", label: { bg: "Цени", en: "Prices" } },
  { id: "gallery", label: { bg: "Галерия", en: "Gallery" } },
  { id: "location", label: { bg: "Локация", en: "Location" } },
  { id: "contact", label: { bg: "Контакти", en: "Contact" } },
];

export const CTA_BOOK: Pair = { bg: "Резервирай", en: "Book now" };
export const CTA_AVAIL: Pair = { bg: "Провери наличност", en: "Check availability" };

/* --- hero / section imagery (curated real photos) --- */
export const IMG = {
  heroBay: `${B}assets/img/hero-bay.jpg`,
  beach: `${B}assets/img/beach-umbrellas.jpg`,
  townAerial: `${B}assets/img/town-aerial.jpg`,
  pool: [`${B}assets/img/pool-1.jpg`, `${B}assets/img/pool-2.jpg`, `${B}assets/img/pool-3.jpg`, `${B}assets/img/pool-4.jpg`],
  restaurant: [`${B}assets/img/restaurant-buffet.jpg`, `${B}assets/img/restaurant-seaview.jpg`],
  lobby: [`${B}assets/img/lobby-1.jpg`, `${B}assets/img/lobby-2.jpg`],
  facade: [`${B}assets/img/facade-1.jpg`, `${B}assets/img/facade-2.jpg`, `${B}assets/img/facade-3.jpg`],
  interior: [`${B}assets/img/interior-1.jpg`, `${B}assets/img/interior-2.jpg`, `${B}assets/img/interior-3.jpg`],
};

/* --- rooms (REAL specs) --- */
export type Room = {
  id: string;
  name: Pair;
  size: string; // m²
  count: number; // available units
  sleeps: Pair;
  beds: Pair;
  desc: Pair;
  features: Pair[];
  priceFrom: number; // EUR / night, low season
  photos: string[];
};

export const ROOMS: Room[] = [
  {
    id: "double",
    name: { bg: "Двойна стая", en: "Double Room" },
    size: "24",
    count: 18,
    sleeps: { bg: "2 гости", en: "2 guests" },
    beds: { bg: "Спалня с два матрака или две единични легла", en: "Queen bed (two mattresses) or two singles" },
    desc: {
      bg: "Климатизирана стая със самостоятелен санитарен възел. Изборът между „Стандарт“ и „Изглед море“.",
      en: "Air-conditioned room with a private bathroom. Choose between Standard and Sea View.",
    },
    features: [
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Телевизор", en: "TV" },
      { bg: "Минибар", en: "Mini-bar" },
      { bg: "Балкон", en: "Balcony" },
      { bg: "WiFi", en: "WiFi" },
      { bg: "Бебешка кошара", en: "Baby cot" },
    ],
    priceFrom: 30,
    photos: [`${B}assets/rooms/double-1.jpg`, `${B}assets/rooms/double-2.jpg`, `${B}assets/rooms/double-3.jpg`, `${B}assets/rooms/double-4.jpg`, `${B}assets/rooms/double-5.jpg`],
  },
  {
    id: "triple",
    name: { bg: "Тройна стая", en: "Triple Room" },
    size: "26",
    count: 12,
    sleeps: { bg: "2 + 1 гости", en: "2 + 1 guests" },
    beds: { bg: "Спалня с два матрака и разтегаем фотьойл, или две единични легла и фотьойл", en: "Queen bed plus a pull-out armchair, or two singles plus an armchair" },
    desc: {
      bg: "Климатизирана стая със самостоятелен санитарен възел и разтегаем фотьойл, подходящ за възрастен. С тераса.",
      en: "Air-conditioned room with a private bathroom and a pull-out armchair suitable for an adult. With a terrace.",
    },
    features: [
      { bg: "Климатик", en: "Air conditioning" },
      { bg: "Тераса", en: "Terrace" },
      { bg: "Телевизор", en: "TV" },
      { bg: "Минибар", en: "Mini-bar" },
      { bg: "WiFi", en: "WiFi" },
      { bg: "Бебешка кошара", en: "Baby cot" },
    ],
    priceFrom: 39,
    photos: [`${B}assets/rooms/triple-1.jpg`, `${B}assets/rooms/triple-2.jpg`, `${B}assets/rooms/triple-3.jpg`, `${B}assets/rooms/triple-4.jpg`, `${B}assets/rooms/triple-5.jpg`, `${B}assets/rooms/triple-6.jpg`],
  },
  {
    id: "apartment",
    name: { bg: "Апартамент", en: "Apartment" },
    size: "54",
    count: 3,
    sleeps: { bg: "2 + 2 гости", en: "2 + 2 guests" },
    beds: { bg: "Спалня с два матрака и разтегаем диван за двама, или две единични легла и диван", en: "Queen bed and a sofa-bed for two, or two singles and a sofa-bed" },
    desc: {
      bg: "Просторен апартамент с две климатични тела, две тераси и самостоятелен санитарен възел — за семейство или компания.",
      en: "A spacious apartment with two AC units, two terraces and a private bathroom — for a family or a group.",
    },
    features: [
      { bg: "2× Климатик", en: "2× Air conditioning" },
      { bg: "2× Тераса", en: "2× Terrace" },
      { bg: "Телевизор", en: "TV" },
      { bg: "Минибар", en: "Mini-bar" },
      { bg: "WiFi", en: "WiFi" },
      { bg: "Бебешка кошара", en: "Baby cot" },
    ],
    priceFrom: 47,
    photos: [`${B}assets/rooms/apartment-1.jpg`, `${B}assets/rooms/apartment-2.jpg`, `${B}assets/rooms/apartment-3.jpg`, `${B}assets/rooms/apartment-4.jpg`, `${B}assets/rooms/apartment-5.jpg`, `${B}assets/rooms/apartment-6.jpg`],
  },
];

/* --- prices (REAL, EUR per night) ---
   Six tariff windows across the season; two rate lines per room
   (Standard / Sea View). */
export const PRICE_SEASONS: Pair[] = [
  { bg: "до 18.06", en: "until 18.06" },
  { bg: "19.06 – 02.07", en: "19.06 – 02.07" },
  { bg: "03.07 – 12.07", en: "03.07 – 12.07" },
  { bg: "13.07 – 22.08", en: "13.07 – 22.08" },
  { bg: "23.08 – 12.09", en: "23.08 – 12.09" },
  { bg: "от 13.09", en: "from 13.09" },
];

/* index 3 (13.07–22.08) is peak */
export const PEAK_SEASON_INDEX = 3;

export type PriceRow = { room: Pair; tier: Pair; rates: number[] };

export const PRICE_ROWS: PriceRow[] = [
  { room: { bg: "Двойна стая", en: "Double" }, tier: { bg: "Стандарт", en: "Standard" }, rates: [34, 44, 52, 60, 50, 30] },
  { room: { bg: "Двойна стая", en: "Double" }, tier: { bg: "Изглед море", en: "Sea View" }, rates: [37, 50, 57, 65, 54, 35] },
  { room: { bg: "Тройна стая (2+1)", en: "Triple (2+1)" }, tier: { bg: "Стандарт", en: "Standard" }, rates: [39, 52, 62, 70, 60, 39] },
  { room: { bg: "Тройна стая (2+1)", en: "Triple (2+1)" }, tier: { bg: "Изглед море", en: "Sea View" }, rates: [42, 57, 67, 70, 67, 42] },
  { room: { bg: "Апартамент (2+2)", en: "Apartment (2+2)" }, tier: { bg: "Стандарт", en: "Standard" }, rates: [52, 72, 82, 90, 82, 47] },
  { room: { bg: "Апартамент (2+2)", en: "Apartment (2+2)" }, tier: { bg: "Море", en: "Sea View" }, rates: [55, 76, 92, 100, 92, 50] },
];

/* --- amenities (REAL) --- */
export type Amenity = { icon: string; title: Pair; text: Pair };
export const AMENITIES: Amenity[] = [
  {
    icon: "waves",
    title: { bg: "Външен басейн", en: "Outdoor pool" },
    text: { bg: "Ползването на басейна е безплатно за всички гости на хотела, с шезлонги на слънце.", en: "Free for every hotel guest, with sun loungers around the water." },
  },
  {
    icon: "utensils",
    title: { bg: "Ресторант", en: "Restaurant" },
    text: { bg: "20 места в закрита зала и 40 на открито. Семпъл дизайн в морско синьо и подбрани рибни ястия.", en: "20 seats indoors, 40 on the terrace. A calm sea-blue interior and a menu built around fresh fish." },
  },
  {
    icon: "umbrella",
    title: { bg: "На крачки от плажа", en: "Steps from the beach" },
    text: { bg: "Едни от най-дългите и широки плажове по Черноморието са на минути от хотела.", en: "Some of the longest, widest beaches on the Black Sea are minutes from the door." },
  },
  {
    icon: "wifi",
    title: { bg: "Безплатен WiFi", en: "Free WiFi" },
    text: { bg: "Безжичен интернет в стаите и общите части на хотела.", en: "Wireless internet throughout the rooms and common areas." },
  },
  {
    icon: "wind",
    title: { bg: "Климатик", en: "Air conditioning" },
    text: { bg: "Всички стаи са климатизирани, с минибар и балкон или тераса.", en: "Every room is air-conditioned, with a mini-bar and a balcony or terrace." },
  },
  {
    icon: "baby",
    title: { bg: "Подходящ за семейства", en: "Family friendly" },
    text: { bg: "Бебешка кошара при поискване и стаи за 2+1 и 2+2 гости.", en: "Baby cot on request, plus 2+1 and 2+2 rooms for families." },
  },
];

/* --- nearby (REAL, from the Primorsko page) --- */
export const ATTRACTIONS: Pair[] = [
  { bg: "Резерват Ропотамо", en: "Ropotamo Reserve" },
  { bg: "Беглик Таш", en: "Beglik Tash" },
  { bg: "Подводен параклис", en: "Underwater chapel" },
  { bg: "Лъвската глава", en: "The Lion's Head" },
  { bg: "Водни лилии", en: "Water lilies" },
  { bg: "Крепостта Малкото кале", en: "Malkoto Kale fortress" },
  { bg: "Маслен нос", en: "Maslen Nos cape" },
  { bg: "Ранули", en: "Ranuli ruins" },
];

/* --- gallery (all 43 real photos) --- */
export const GALLERY: string[] = Array.from(
  { length: 43 },
  (_, i) => `${B}assets/gallery/g-${String(i + 1).padStart(2, "0")}.jpg`,
);

/* guest options for the booking dock */
export const GUEST_OPTIONS = [1, 2, 3, 4, 5];
