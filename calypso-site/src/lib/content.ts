import type { Pair } from "./i18n";

/* All site copy, bilingual. BG is primary, EN second. */
export const C = {
  // ---------------------------------------------------------------- HERO
  hero: {
    kicker: { bg: "Приморско · Черноморието", en: "Primorsko · Black Sea coast" } as Pair,
    titleA: { bg: "Морето", en: "The sea" } as Pair,
    titleB: { bg: "започва тук", en: "begins here" } as Pair,
    sub: {
      bg: "Хотел Калипсо Блу — слънце, басейн и спокойствие на крачки от един от най-красивите плажове по българското Черноморие.",
      en: "Hotel Calypso Blue — sun, a pool and calm, steps from one of the most beautiful beaches on Bulgaria's Black Sea coast.",
    } as Pair,
  },

  // marquee strip under the hero
  marquee: {
    items: [
      { bg: "Външен басейн", en: "Outdoor pool" },
      { bg: "Ресторант с морски дизайн", en: "Sea-blue restaurant" },
      { bg: "На крачки от плажа", en: "Steps from the beach" },
      { bg: "Климатик и WiFi", en: "Air-con & WiFi" },
      { bg: "Изглед море", en: "Sea-view rooms" },
      { bg: "Подходящ за семейства", en: "Family friendly" },
    ] as Pair[],
  },

  // ---------------------------------------------------------------- ABOUT
  about: {
    eyebrow: { bg: "Хотелът", en: "The hotel" } as Pair,
    titleA: { bg: "Малък хотел", en: "A small hotel" } as Pair,
    titleB: { bg: "с голямо синьо отпред.", en: "with a big blue out front." } as Pair,
    body1: {
      bg: "Калипсо Блу е семеен хотел в сърцето на Приморско — там, където полуостровът се вдава в Черно море между залива Стамополу и Дяволския залив. Тук дните минават между басейна, плажа и дългите вечери на терасата.",
      en: "Calypso Blue is a family hotel in the heart of Primorsko — where the peninsula reaches into the Black Sea between Stamopolu bay and Devil's bay. Days here move between the pool, the beach and long evenings on the terrace.",
    } as Pair,
    body2: {
      bg: "Стаите са светли и климатизирани, ресторантът е в морско синьо, а басейнът е безплатен за всички гости. Достатъчно близо до центъра за разходка, достатъчно тихо за сън.",
      en: "Rooms are bright and air-conditioned, the restaurant is dressed in sea-blue, and the pool is free for every guest. Close enough to town for a stroll, quiet enough to sleep.",
    } as Pair,
    stats: [
      { value: "33", label: { bg: "стаи и апартаменти", en: "rooms & apartments" } as Pair },
      { value: "0 м", label: { bg: "до басейна", en: "to the pool" } as Pair },
      { value: "60", label: { bg: "места в ресторанта", en: "seats in the restaurant" } as Pair },
    ],
  },

  // ---------------------------------------------------------------- ROOMS
  rooms: {
    eyebrow: { bg: "Настаняване", en: "Stay" } as Pair,
    titleA: { bg: "Стаи", en: "Rooms" } as Pair,
    titleB: { bg: "с лице към лятото.", en: "that face the summer." } as Pair,
    sub: {
      bg: "Три типа настаняване — двойна стая, тройна стая и апартамент. Всяка в „Стандарт“ или „Изглед море“.",
      en: "Three types of stay — a double, a triple and an apartment. Each one Standard or Sea View.",
    } as Pair,
    fromLabel: { bg: "от", en: "from" } as Pair,
    perNight: { bg: "/ нощ", en: "/ night" } as Pair,
    sizeLabel: { bg: "Площ", en: "Size" } as Pair,
    sleepsLabel: { bg: "Капацитет", en: "Sleeps" } as Pair,
    bedsLabel: { bg: "Легла", en: "Beds" } as Pair,
    unitsLabel: { bg: "Брой", en: "Units" } as Pair,
  },

  // ---------------------------------------------------------------- PRICES
  prices: {
    eyebrow: { bg: "Цени и оферти", en: "Prices & offers" } as Pair,
    titleA: { bg: "Една цена", en: "One price" } as Pair,
    titleB: { bg: "за нощувка.", en: "per night." } as Pair,
    sub: {
      bg: "Цени на нощувка в евро според сезона. Изберете период, за да видите тарифата по тип стая.",
      en: "Per-night rates in euro by season. Pick a period to see the tariff for each room type.",
    } as Pair,
    pickSeason: { bg: "Изберете период", en: "Choose a period" } as Pair,
    roomCol: { bg: "Стая", en: "Room" } as Pair,
    note: {
      bg: "Цените са на нощувка, за стаята. Закуска и оферти — при запитване. Басейнът е безплатен за всички гости.",
      en: "Rates are per night, per room. Breakfast and current offers on request. The pool is free for all guests.",
    } as Pair,
    offerTitle: { bg: "Актуални оферти", en: "Current offers" } as Pair,
    offerText: {
      bg: "Ранни записвания, дълъг престой и семейни пакети — питайте ни за активните оферти за вашите дати.",
      en: "Early booking, long-stay and family packages — ask us about the offers live for your dates.",
    } as Pair,
    peak: { bg: "Връх сезон", en: "Peak" } as Pair,
  },

  // ---------------------------------------------------------------- AMENITIES
  amenities: {
    eyebrow: { bg: "Удобства", en: "Amenities" } as Pair,
    titleA: { bg: "Всичко за", en: "Everything for" } as Pair,
    titleB: { bg: "една лесна почивка.", en: "an easy holiday." } as Pair,
    poolTitle: { bg: "Басейн", en: "The pool" } as Pair,
    poolText: {
      bg: "Външен басейн с шезлонги — сърцето на деня. Ползването е безплатно за всички гости на хотела.",
      en: "An outdoor pool with loungers — the heart of the day. Free for every hotel guest.",
    } as Pair,
    restTitle: { bg: "Ресторант", en: "The restaurant" } as Pair,
    restText: {
      bg: "Ресторантът разполага с 20 места в закрита зала и 40 на открито. Семплият дизайн в морско синьо и подбраният асортимент от рибни ястия допринасят за приятния престой.",
      en: "The restaurant seats 20 indoors and 40 outside. A simple sea-blue design and a carefully chosen selection of fish dishes round out the stay.",
    } as Pair,
  },

  // ---------------------------------------------------------------- GALLERY
  gallery: {
    eyebrow: { bg: "Галерия", en: "Gallery" } as Pair,
    titleA: { bg: "Един кадър", en: "One frame" } as Pair,
    titleB: { bg: "от лятото.", en: "of the summer." } as Pair,
    sub: { bg: "Хотелът, басейнът, стаите и морето — както са в действителност.", en: "The hotel, the pool, the rooms and the sea — exactly as they are." } as Pair,
    open: { bg: "Отвори", en: "Open" } as Pair,
    close: { bg: "Затвори", en: "Close" } as Pair,
  },

  // ---------------------------------------------------------------- LOCATION
  location: {
    eyebrow: { bg: "Локация", en: "Location" } as Pair,
    titleA: { bg: "Приморско,", en: "Primorsko," } as Pair,
    titleB: { bg: "между две морета синьо.", en: "between two shades of blue." } as Pair,
    body: {
      bg: "Приморско е разположен на полуостров, вдаден в Черно море между лагуната Стамополу и Дяволския залив, в подножието на Странджа. Това са едни от най-дългите плажове по българското Черноморие, а наоколо има резервати, древни крепости и десетки атракции.",
      en: "Primorsko sits on a peninsula reaching into the Black Sea between the Stamopolu lagoon and Devil's bay, at the foot of Strandzha. These are some of the longest beaches on the Bulgarian coast, ringed by nature reserves, ancient fortresses and dozens of things to do.",
    } as Pair,
    nearby: { bg: "Наблизо", en: "Nearby" } as Pair,
    weatherTitle: { bg: "Времето в Приморско", en: "Weather in Primorsko" } as Pair,
    directions: { bg: "Виж в Google Maps", en: "Open in Google Maps" } as Pair,
  },

  // ---------------------------------------------------------------- CONTACT
  contact: {
    eyebrow: { bg: "Контакти", en: "Contact" } as Pair,
    titleA: { bg: "Запазете", en: "Reserve" } as Pair,
    titleB: { bg: "вашето лято.", en: "your summer." } as Pair,
    sub: {
      bg: "Обадете се или ни пишете — отговаряме бързо и помагаме с избора на стая и дати.",
      en: "Call or write to us — we reply quickly and help you choose the right room and dates.",
    } as Pair,
    call: { bg: "Обади се", en: "Call us" } as Pair,
    email: { bg: "Имейл", en: "Email" } as Pair,
    fb: { bg: "Facebook", en: "Facebook" } as Pair,
    addressLabel: { bg: "Адрес", en: "Address" } as Pair,
    // enquiry form
    formTitle: { bg: "Изпрати запитване", en: "Send an enquiry" } as Pair,
    fName: { bg: "Име", en: "Name" } as Pair,
    fPhone: { bg: "Телефон", en: "Phone" } as Pair,
    fEmail: { bg: "Имейл", en: "Email" } as Pair,
    fDates: { bg: "Дати", en: "Dates" } as Pair,
    fMessage: { bg: "Съобщение", en: "Message" } as Pair,
    send: { bg: "Изпрати запитване", en: "Send enquiry" } as Pair,
    sentVia: { bg: "Запитването се изпраща през вашия имейл клиент.", en: "Your enquiry opens in your email app." } as Pair,
  },

  // ---------------------------------------------------------------- DOCK
  dock: {
    checkin: { bg: "Настаняване", en: "Check-in" } as Pair,
    checkout: { bg: "Напускане", en: "Check-out" } as Pair,
    room: { bg: "Стая", en: "Room" } as Pair,
    guests: { bg: "Гости", en: "Guests" } as Pair,
    anyRoom: { bg: "Всяка стая", en: "Any room" } as Pair,
    guestWord: { bg: "гост", en: "guest" } as Pair,
    guestWordPlural: { bg: "гости", en: "guests" } as Pair,
  },

  // footer
  footer: {
    tagline: { bg: "Морски хотел в Приморско.", en: "A seafront hotel in Primorsko." } as Pair,
    rights: { bg: "Всички права запазени.", en: "All rights reserved." } as Pair,
  },
};
