
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

export const CASES: Case[] = [
  {
    slug: "chaica",
    name: "Chaica",
    native: "Чайка",
    location: "Primorsko · Bulgaria",
    kind: "Boutique seafront hotel",
    year: "2025—26",
    headline: "From quiet shoulder-seasons to five million views.",
    summary:
      "A seafront hotel with beautiful rooms and an empty content feed. We rebuilt the visual identity, shot the property and turned the social channels into a discovery engine.",
    problem:
      "Rooms sat unsold outside peak weeks, and almost every booking arrived through an OTA — paying commission on guests the hotel could have reached directly.",
    outcome:
      "Across one year the channels reached over five million people — 95% of them not yet followers — turning strangers scrolling at home into direct enquiries.",
    quote:
      "For the first time we were watching the rooms fill before the season even started.",
    quoteBy: "Hotel Chaica · Primorsko",
    cover: `${C}/orig_16626_53.jpg`,
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
      { value: "5.1M", label: "TikTok views", sub: "Jun 2025 — May 2026" },
      { value: "4.9M", label: "Facebook views", sub: "trailing year" },
      { value: "95%", label: "Reach from non-followers", sub: "pure discovery" },
      { value: "+1,171", label: "Net new follows", sub: "in 28 days · +523%" },
    ],
  },
  {
    slug: "teos",
    name: "Teos",
    native: "Теос",
    location: "Kiten & Primorsko · Bulgaria",
    kind: "Family beach hotel",
    year: "2025—26",
    headline: "A feed of short films that the algorithm kept pushing.",
    summary:
      "A second Primorsko hotel that trusted us with its social presence. The grid filled with short-form videos that travelled far beyond its own audience.",
    problem:
      "A small following and no reliable way to reach the holidaymakers already searching for a place on the coast.",
    outcome:
      "Video after video crossed into the hundreds of thousands of views — the kind of organic reach that fills rooms without a single euro of ad spend.",
    quote:
      "The videos kept reaching people we could never have paid to reach.",
    quoteBy: "Hotel Teos · Kiten & Primorsko",
    cover: `${C}/orig_16626_56.jpg`,
    images: [`${C}/orig_16626_56.jpg`, `${C}/orig_16626_24.jpg`, `${C}/orig_16626_54.jpg`, `${C}/orig_16626_37.jpg`],
    results: [`${B}assets/results/teos-1.png`],
    stats: [
      { value: "545K", label: "Top video views", sub: "single organic reel" },
      { value: "192K", label: "Second-best reel" },
      { value: "12+", label: "Reels over 20K views" },
      { value: "€0", label: "Spent on ads", sub: "100% organic" },
    ],
  },
];

/* Headline proof for the homepage — the aggregate story */
export const HEADLINE_STATS: Stat[] = [
  { value: "10M+", label: "Organic views generated", sub: "across two hotels" },
  { value: "95%", label: "Reach beyond existing followers", sub: "new guests, not old fans" },
  { value: "€0", label: "Ad spend required", sub: "100% organic funnels" },
  { value: "2", label: "Hotels, one coastline", sub: "Primorsko · Bulgaria" },
];
