import type { Pair } from "./i18n";

/* All site copy, bilingual. BG is primary, EN second.
   Tone: warm, refined, a touch romantic — imperial elegance. */
export const C = {
  // ---------------------------------------------------------------- HERO
  hero: {
    kicker: { bg: "Приморско · Черно море", en: "Primorsko · Black Sea" } as Pair,
    line1: { bg: "Мечтаната", en: "The summer" } as Pair, // rendered in script
    line2: { bg: "лятна почивка", en: "you dream of" } as Pair,
    sub: {
      bg: "Семеен хотел на брега на Черно море, в най-тихата източна част на Приморско — където домашният уют среща елегантността на едно безкрайно лято.",
      en: "A family hotel on the Black Sea shore, in the quiet eastern corner of Primorsko — where home comfort meets the elegance of an endless summer.",
    } as Pair,
  },

  marquee: {
    items: [
      { bg: "Открит басейн", en: "Outdoor pool" },
      { bg: "Закуска и вечеря", en: "Half board" },
      { bg: "На 200 м от плажа", en: "200 m to the beach" },
      { bg: "Лятна градина", en: "Summer garden" },
      { bg: "Рецепция 24/7", en: "24/7 reception" },
      { bg: "Панорама към морето", en: "Sea panorama" },
    ] as Pair[],
  },

  // ---------------------------------------------------------------- ABOUT
  about: {
    eyebrow: { bg: "За хотела", en: "The hotel" } as Pair,
    title: { bg: "Домашен уют с", en: "Home comfort with" } as Pair,
    script: { bg: "имперска елегантност", en: "imperial elegance" } as Pair,
    body1: {
      bg: "Хотел Оман е семеен хотел в черноморския курорт Приморско, разположен в най-издадената източна част на града, в непосредствена близост до морския бряг и с чудесна панорама към морето и плаж Перла.",
      en: "Hotel Oman is a family hotel in the Black Sea resort of Primorsko, set on the town's furthest eastern point, right by the shore, with a beautiful panorama over the sea and Perla beach.",
    } as Pair,
    body2: {
      bg: "Разположен в тиха зона сред малки семейни хотели, той съчетава по най-добрия начин домашния уют и забавленията на една незабравима морска почивка — с открит басейн, лятна градина и ресторант на блок маса.",
      en: "Set in a quiet zone among small family hotels, it brings together home comfort and the joys of an unforgettable seaside holiday — with an outdoor pool, a summer garden and a buffet restaurant.",
    } as Pair,
    quote: {
      bg: "Перфектната морска почивка, съчетаваща уют и летни емоции.",
      en: "The perfect seaside escape — comfort and the feeling of summer.",
    } as Pair,
  },

  // ---------------------------------------------------------------- ROOMS
  rooms: {
    eyebrow: { bg: "Настаняване", en: "Stay" } as Pair,
    title: { bg: "Стаи, създадени за", en: "Rooms made for" } as Pair,
    script: { bg: "спокойни лета", en: "easy summers" } as Pair,
    sub: {
      bg: "23 стаи — от уютни студиа до панорамен апартамент. Всяка с домашен уют и включени закуска и вечеря.",
      en: "23 rooms — from cosy studios to a panoramic apartment. Each one warm and homely, with breakfast and dinner included.",
    } as Pair,
    reserveLabel: { bg: "Запитай за стая", en: "Enquire" } as Pair,
  },

  // ---------------------------------------------------------------- PRICES
  prices: {
    eyebrow: { bg: "Цени", en: "Prices" } as Pair,
    title: { bg: "Една цена,", en: "One price," } as Pair,
    script: { bg: "всичко включено", en: "all included" } as Pair,
    sub: {
      bg: "Цени на стая на вечер, със закуска и вечеря на блок маса. Напитките са включени — сок, кафе, мляко, вино и бира.",
      en: "Per-room, per-night rates with breakfast and dinner served buffet-style. Drinks included — juice, coffee, milk, wine and beer.",
    } as Pair,
    roomCol: { bg: "Стая", en: "Room" } as Pair,
    perNight: { bg: "на вечер", en: "per night" } as Pair,
    note: {
      bg: "Обявената цена е за стая и включва закуска и вечеря на блок маса. За резервации и свободни дати — обадете се.",
      en: "The price is per room and includes breakfast and dinner served buffet-style. For reservations and availability, please call.",
    } as Pair,
    halfBoard: { bg: "Полупансион", en: "Half board" } as Pair,
  },

  // ---------------------------------------------------------------- AMENITIES
  amenities: {
    eyebrow: { bg: "Удобства", en: "Amenities" } as Pair,
    title: { bg: "Всичко за едно", en: "Everything for an" } as Pair,
    script: { bg: "безгрижно лято", en: "easy summer" } as Pair,
  },

  // ---------------------------------------------------------------- GALLERY
  gallery: {
    eyebrow: { bg: "Галерия", en: "Gallery" } as Pair,
    title: { bg: "Едно лято в", en: "A summer at" } as Pair,
    script: { bg: "Хотел Оман", en: "Hotel Oman" } as Pair,
    sub: { bg: "Хотелът, басейнът, стаите и морето — както са в действителност.", en: "The hotel, the pool, the rooms and the sea — exactly as they are." } as Pair,
  },

  // ---------------------------------------------------------------- LOCATION
  location: {
    eyebrow: { bg: "Локация", en: "Location" } as Pair,
    title: { bg: "На крачка от", en: "A step from" } as Pair,
    script: { bg: "морето", en: "the sea" } as Pair,
    body: {
      bg: "Приморско привлича с благоприятен климат, живописна природа и исторически забележителности. От Хотел Оман лесно достигате до Китен, Дюни, Созопол, Несебър и Бургас по живописния крайбрежен път.",
      en: "Primorsko draws you in with a gentle climate, scenic nature and historic landmarks. From Hotel Oman it's an easy drive to Kiten, Dyuni, Sozopol, Nessebar and Burgas along the panoramic coastal road.",
    } as Pair,
    nearby: { bg: "Наблизо", en: "Nearby" } as Pair,
    directions: { bg: "Виж в Google Maps", en: "Open in Google Maps" } as Pair,
  },

  // ---------------------------------------------------------------- CONTACT
  contact: {
    eyebrow: { bg: "Контакт", en: "Contact" } as Pair,
    title: { bg: "Запазете своето", en: "Reserve your" } as Pair,
    script: { bg: "лято", en: "summer" } as Pair,
    sub: {
      bg: "Обадете се или ни пишете — ще Ви помогнем с избора на стая и свободните дати за Вашата почивка.",
      en: "Call or write to us — we'll help you choose a room and the right dates for your holiday.",
    } as Pair,
    call: { bg: "Обади се", en: "Call us" } as Pair,
    email: { bg: "Имейл", en: "Email" } as Pair,
    addressLabel: { bg: "Адрес", en: "Address" } as Pair,
    formTitle: { bg: "Изпрати запитване", en: "Send an enquiry" } as Pair,
    fName: { bg: "Име", en: "Name" } as Pair,
    fPhone: { bg: "Телефон", en: "Phone" } as Pair,
    fEmail: { bg: "Имейл", en: "Email" } as Pair,
    fDates: { bg: "Дати", en: "Dates" } as Pair,
    fMessage: { bg: "Съобщение", en: "Message" } as Pair,
    send: { bg: "Изпрати запитване", en: "Send enquiry" } as Pair,
    sentVia: { bg: "Запитването се отваря във Вашия имейл клиент.", en: "Your enquiry opens in your email app." } as Pair,
  },

  footer: {
    tagline: { bg: "Мечтаната лятна почивка на брега на Черно море.", en: "The summer holiday you dream of, on the Black Sea shore." } as Pair,
    rights: { bg: "Всички права запазени.", en: "All rights reserved." } as Pair,
  },
};
