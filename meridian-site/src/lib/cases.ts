
/* base-aware asset prefix ('/' in dev, '/<app>/' in the combined build) */
const B = import.meta.env.BASE_URL;
/* ============================================================
   SUCCESS CASES — real clients, real numbers.
   Metrics transcribed from the studio's own analytics screenshots.
   ============================================================ */

export type Stat = { value: string; label: string; sub?: string };

export type Case = {
  slug: string;
  name: string;
  native: string; // local name
  location: string;
  kind: string;
  year: string;
  // the one-line story
  headline: string;
  summary: string;
  problem: string;
  outcome: string;
  quote: string;
  quoteBy: string;
  cover: string; // /assets/chaica/...
  images: string[];
  results: string[]; // screenshot paths
  stats: Stat[];
};

const C = `${B}assets/chaica`;
const TP = `${B}assets/teos-primorsko`;
const TK = `${B}assets/teos-kiten`;

export const CASES: Case[] = [
  {
    slug: "chaica",
    name: "Чайка",
    native: "Първа линия",
    location: "Приморско · България",
    kind: "Бутиков хотел на морето",
    year: "2025—26",
    headline: "От празен профил до пет милиона гледания.",
    summary:
      "Хотел на първа линия с прекрасни стаи и почти празен профил. Изградихме визуалната им идентичност наново, заснехме хотела и превърнахме социалните мрежи в постоянен поток от нови гости.",
    problem:
      "Стаите оставаха празни извън пиковите седмици, а почти всяка резервация идваше през Booking — комисионна върху гости, които хотелът можеше да достигне директно.",
    outcome:
      "За една година съдържанието достигна над пет милиона души — 95% от тях напълно непознати — и превърна обикновения скрол у дома в директни запитвания.",
    quote:
      "Имахме толкова много обаждания, че помолихме да спрат да публикуват видеа — телефонът просто не спираше да звъни.",
    quoteBy: "Хотел Чайка · Приморско",
    cover: `${C}/facade-fb.jpg`,
    images: [
      `${C}/orig_16626_53.jpg`,
      `${C}/orig_16626_59.jpg`,
      `${C}/orig_16626_50.jpg`,
      `${C}/orig_16626_30.jpg`,
      `${C}/orig_16626_64.jpg`,
      `${C}/orig_16626_57.jpg`,
    ],
    results: [
      `${B}assets/results/chaica-1.png`,
      `${B}assets/results/chaica-2.png`,
      `${B}assets/results/chaica-3.png`,
      `${B}assets/results/chaica-4.png`,
      `${B}assets/results/chaica-5.png`,
    ],
    stats: [
      { value: "5.1M", label: "Гледания в TikTok", sub: "юни 2025 — май 2026" },
      { value: "4.9M", label: "Гледания във Facebook", sub: "за изминалата година" },
      { value: "95%", label: "Обхват от непоследователи", sub: "чисто откриване" },
      { value: "+1,171", label: "Нови последователи", sub: "за 28 дни · +523%" },
    ],
  },
  {
    slug: "teos-primorsko",
    name: "Теос Приморско",
    native: "Апартхотел на плажа",
    location: "Приморско · България",
    kind: "Апартхотел на първа линия",
    year: "2025—26",
    headline: "Апартаменти сред дюните, които изведнъж видя цяла България.",
    summary:
      "Апартхотел на първа линия, скрит сред дюните при устието на Дяволската река. Повериха ни социалните си канали — и ги напълнихме с кадри, които пътуваха далеч отвъд собствената им публика.",
    problem:
      "Красив имот на две минути от плажа, но почти невидим онлайн извън Booking — малцина изобщо знаеха, че съществува.",
    outcome:
      "Видео след видео минаваше стотиците хиляди гледания — органичен обхват, който пълни апартаменти без нито евро за реклама.",
    quote:
      "Видеата стигаха до хора, които никога не бихме могли да платим да достигнем.",
    quoteBy: "Теос · Приморско",
    cover: `${TP}/6.jpg`,
    images: [`${TP}/2.jpg`, `${TP}/3.jpg`, `${TP}/4.jpg`, `${TP}/8.jpg`, `${TP}/1.jpg`],
    results: [`${B}assets/results/teos-1.png`],
    stats: [
      { value: "545K", label: "Гледания на едно видео", sub: "един органичен рийл" },
      { value: "95%", label: "Обхват от непоследователи", sub: "чисто откриване" },
      { value: "8.6", label: "Оценка на гостите", sub: "Booking.com" },
      { value: "€0", label: "Похарчени за реклама", sub: "100% органично" },
    ],
  },
  {
    slug: "teos-kiten",
    name: "Теос Китен",
    native: "Семеен хотел",
    location: "Китен · България",
    kind: "Семеен хотел на плаж Атлиман",
    year: "2025—26",
    headline: "Семеен хотел на Атлиман, който алгоритъмът хареса.",
    summary:
      "Семеен хотел на първа линия на плаж Атлиман — с ресторант, спа и покривна тераса. Превърнахме спокойния залив в съдържание, което се разнесе из мрежата.",
    problem:
      "Малка аудитория и никакъв сигурен начин да стигне до почиващите, които вече търсят място на морето.",
    outcome:
      "Десетки видеа над 20 хиляди гледания и рийлове, минали 100 хиляди — чист органичен обхват, който пълни стаи.",
    quote:
      "Хора ни намираха онлайн и резервираха директно — за първи път.",
    quoteBy: "Теос · Китен",
    cover: `${TK}/1.jpg`,
    images: [],
    results: [],
    stats: [
      { value: "192K", label: "Гледания на едно видео", sub: "органичен рийл" },
      { value: "12+", label: "Видеа над 20K гледания", sub: "поредица от хитове" },
      { value: "8.2", label: "Оценка на гостите", sub: "Booking.com" },
      { value: "€0", label: "Похарчени за реклама", sub: "100% органично" },
    ],
  },
];

/* Headline proof for the homepage — the aggregate story */
export const HEADLINE_STATS: Stat[] = [
  { value: "10M+", label: "Органични гледания", sub: "за три хотела" },
  { value: "95%", label: "Обхват извън последователите", sub: "нови гости, не стари фенове" },
  { value: "€0", label: "Похарчени за реклама", sub: "100% органични фунии" },
  { value: "3", label: "Хотела, едно крайбрежие", sub: "Приморско · Китен" },
];
