import { PRICE_SEASONS, PRICE_ROWS } from "@/lib/hotel";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { Reveal, MaskText, RevealBox } from "@/components/Reveal";
import type { Pair } from "@/lib/i18n";

/* A single season price cell: big gold BGN, small EUR beneath. */
function PriceCell({
  bgn,
  eur,
  label,
}: {
  bgn: number;
  eur: number;
  label: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 md:flex-col md:items-end md:justify-center md:gap-1 md:text-right">
      <span className="data-label text-[0.62rem] uppercase tracking-[0.22em] text-sea md:hidden">
        {label}
      </span>
      <span className="flex flex-col items-end leading-none">
        <span className="data-label font-display text-2xl text-gold-light md:text-3xl">
          {bgn} лв
        </span>
        <span className="data-label mt-1 text-xs text-cream/45">
          ({eur.toFixed(2)} €)
        </span>
      </span>
    </div>
  );
}

export default function Prices() {
  const t = useT();

  return (
    <section
      id="prices"
      className="grain relative scroll-mt-24 overflow-hidden bg-navy py-24 md:py-36"
    >
      <div className="container relative mx-auto max-w-[1440px] px-6 md:px-10">
        {/* ---- Heading ---- */}
        <Reveal className="text-center">
          <span className="eyebrow text-sea">{t(C.prices.eyebrow)}</span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] text-cream">
            <MaskText text={t(C.prices.title)} />{" "}
            <span className="script text-gold-foil text-[1.15em]">
              {t(C.prices.script)}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-cream/60">
            {t(C.prices.sub)}
          </p>
        </Reveal>

        {/* ---- The menu card ---- */}
        <RevealBox className="gold-frame mx-auto mt-12 max-w-3xl rounded-2xl bg-navy-soft/40 p-8 shadow-[var(--shadow-soft)] md:mt-16 md:p-12">
          {/* Half-board badge + filigree */}
          <div className="flex flex-col items-center gap-5">
            <span className="rounded-full border border-gold/40 px-4 py-1 text-xs uppercase tracking-wider text-gold">
              {t(C.prices.halfBoard)}
            </span>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold-foil" />
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <span className="h-px w-12 bg-gold-foil" />
            </div>
          </div>

          {/* Header row — season labels (md+ only) */}
          <div className="mt-10 hidden grid-cols-[1.4fr_1fr_1fr] items-end gap-6 md:grid">
            <span className="eyebrow text-sea">{t(C.prices.roomCol)}</span>
            {PRICE_SEASONS.map((season: Pair, i: number) => (
              <span
                key={i}
                className="data-label text-right text-xs uppercase tracking-[0.2em] text-sea"
              >
                {t(season)}
              </span>
            ))}
          </div>

          {/* Rows */}
          <div className="mt-6 md:mt-4">
            {PRICE_ROWS.map((row, ri: number) => (
              <Reveal
                key={ri}
                i={ri}
                className="grid grid-cols-1 gap-5 border-t py-6 md:grid-cols-[1.4fr_1fr_1fr] md:items-center md:gap-6 md:py-7"
              >
                {/* style applied via inline border colour */}
                <div
                  className="hidden"
                  style={{ borderColor: "var(--gold-line)" }}
                />
                {/* Room name + dotted gold leader */}
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xl text-cream">
                    {t(row.room)}
                  </span>
                  <span
                    className="hidden h-px flex-1 self-end md:block"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, var(--gold-line) 1px, transparent 1.4px)",
                      backgroundSize: "7px 2px",
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "bottom",
                    }}
                  />
                </div>

                {PRICE_SEASONS.map((season: Pair, si: number) => (
                  <PriceCell
                    key={si}
                    bgn={row.bgn[si]}
                    eur={row.eur[si]}
                    label={t(season)}
                  />
                ))}
              </Reveal>
            ))}
          </div>

          {/* per-night note line */}
          <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-cream/40">
            {t(C.prices.perNight)}
          </p>
        </RevealBox>

        {/* ---- Footnote ---- */}
        <Reveal i={1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-cream/50">
            {t(C.prices.note)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
