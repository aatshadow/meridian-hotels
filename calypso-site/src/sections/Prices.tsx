import { motion } from "framer-motion";
import { useState } from "react";
import { Tag, Sparkles, ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { C } from "@/lib/content";
import { PRICE_SEASONS, PRICE_ROWS, PEAK_SEASON_INDEX, CTA_AVAIL } from "@/lib/hotel";
import { Reveal, MaskText } from "@/components/Reveal";
import { HorizonLine } from "@/components/HorizonLine";
import { scrollToId } from "@/lib/useLenis";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";

export default function Prices() {
  const t = useT();
  const [selectedSeason, setSelectedSeason] = useState<number>(PEAK_SEASON_INDEX);

  return (
    <section
      id="prices"
      className="grain scroll-mt-24 bg-cream-deep/60 py-24 md:py-36"
    >
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Heading block */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow text-sea-deep">{t(C.prices.eyebrow)}</span>
          </Reveal>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.04] text-navy">
            <MaskText text={t(C.prices.titleA)} />{" "}
            <span className="italic text-gold-foil">
              <MaskText text={t(C.prices.titleB)} delay={0.08} />
            </span>
          </h2>
          <Reveal i={1}>
            <p className="pretty balance mx-auto mt-6 max-w-xl text-base text-ink-soft md:text-lg">
              {t(C.prices.sub)}
            </p>
          </Reveal>
        </div>

        <Reveal i={2} className="mt-12">
          <HorizonLine
            tone="sea"
            left={t(C.prices.pickSeason)}
            right={t(C.prices.peak)}
          />
        </Reveal>

        {/* Season selector pills */}
        <Reveal i={2} className="mt-8">
          <div className="no-bar -mx-6 flex gap-2.5 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:justify-center md:px-0">
            {PRICE_SEASONS.map((season, idx) => {
              const isActive = idx === selectedSeason;
              const isPeak = idx === PEAK_SEASON_INDEX;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedSeason(idx)}
                  className={`data-label flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs transition-colors duration-300 md:text-sm ${
                    isActive
                      ? "bg-gold-foil text-white shadow-[var(--shadow-soft)]"
                      : "border border-sea bg-ivory/40 text-navy hover:border-sea-deep hover:bg-sea-pale"
                  }`}
                >
                  <span className="tabular-nums">{t(season)}</span>
                  {isPeak && (
                    <span
                      className={`data-label rounded-full px-1.5 py-0.5 text-[0.55rem] uppercase tracking-wider ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "bg-gold-foil text-white"
                      }`}
                    >
                      {t(C.prices.peak)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* DESKTOP matrix table */}
        <Reveal i={3} className="mt-10 hidden md:block">
          <div className="overflow-hidden rounded-3xl border border-sea-mist/60 bg-cream shadow-[var(--shadow-soft)]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-sea-mist/60">
                    <th className="bg-ivory/50 px-6 py-5 align-bottom">
                      <span className="eyebrow text-sea-deep">
                        {t(C.prices.roomCol)}
                      </span>
                    </th>
                    {PRICE_SEASONS.map((season, idx) => {
                      const isActive = idx === selectedSeason;
                      const isPeak = idx === PEAK_SEASON_INDEX;
                      return (
                        <th
                          key={idx}
                          onMouseEnter={() => setSelectedSeason(idx)}
                          className={`cursor-pointer px-4 py-5 text-center align-bottom transition-colors duration-300 ${
                            isActive
                              ? "bg-ivory text-navy"
                              : "text-ink-soft hover:bg-sea-pale/50"
                          }`}
                        >
                          <div
                            className={`data-label text-xs tabular-nums leading-snug ${
                              isActive ? "text-navy" : "text-ink-soft"
                            }`}
                          >
                            {t(season)}
                          </div>
                          {isPeak && (
                            <div className="mt-1.5 flex justify-center">
                              <span className="data-label rounded-full bg-gold-foil px-2 py-0.5 text-[0.55rem] uppercase tracking-wider text-white">
                                {t(C.prices.peak)}
                              </span>
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ROWS.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-b border-sea-mist/40 last:border-b-0"
                    >
                      <td className="bg-ivory/50 px-6 py-4">
                        <div className="font-sans text-sm font-semibold text-navy">
                          {t(row.room)}
                        </div>
                        <div className="mt-0.5 text-xs text-ink-soft">
                          {t(row.tier)}
                        </div>
                      </td>
                      {row.rates.map((rate, sIdx) => {
                        const isActive = sIdx === selectedSeason;
                        return (
                          <td
                            key={sIdx}
                            onMouseEnter={() => setSelectedSeason(sIdx)}
                            className={`relative cursor-pointer px-4 py-4 text-center transition-colors duration-300 ${
                              isActive
                                ? "bg-ivory text-navy"
                                : "text-ink-soft hover:bg-sea-pale/40"
                            }`}
                          >
                            {isActive && (
                              <>
                                <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gold-foil" />
                                <span className="pointer-events-none absolute inset-y-0 right-0 w-[3px] bg-gold-foil" />
                              </>
                            )}
                            <span
                              className={`data-label text-base tabular-nums ${
                                isActive ? "font-semibold text-navy" : ""
                              }`}
                            >
                              {rate} €
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* MOBILE list for selected season */}
        <div className="mt-8 md:hidden">
          <div className="overflow-hidden rounded-3xl border border-sea-mist/60 bg-cream shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between border-b border-sea-mist/50 bg-ivory/50 px-5 py-4">
              <span className="eyebrow text-sea-deep">{t(C.prices.roomCol)}</span>
              <span className="data-label text-xs tabular-nums text-navy">
                {t(PRICE_SEASONS[selectedSeason])}
              </span>
            </div>
            <ul>
              {PRICE_ROWS.map((row, rIdx) => (
                <li
                  key={rIdx}
                  className="flex items-center justify-between gap-4 border-b border-sea-mist/40 px-5 py-4 last:border-b-0"
                >
                  <div className="min-w-0">
                    <div className="truncate font-sans text-sm font-semibold text-navy">
                      {t(row.room)}
                    </div>
                    <div className="mt-0.5 truncate text-xs text-ink-soft">
                      {t(row.tier)}
                    </div>
                  </div>
                  <div className="data-label shrink-0 font-display text-2xl tabular-nums text-gold-foil">
                    {row.rates[selectedSeason]} €
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offers + note */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              <div className="grain glass-dark relative overflow-hidden rounded-3xl bg-navy px-8 py-10 text-cream md:px-12 md:py-12">
                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold-foil opacity-20 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-gold-light" />
                    <span className="eyebrow text-sea-mist">
                      {t(C.prices.offerTitle)}
                    </span>
                  </div>
                  <p className="pretty balance mt-5 max-w-xl font-display text-2xl italic leading-snug text-cream md:text-3xl">
                    {t(C.prices.offerText)}
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollToId("contact")}
                    className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-gold-foil px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {t(CTA_AVAIL)}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal i={1}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-sea-mist/60 bg-ivory/60 px-7 py-8">
              <Tag className="h-5 w-5 text-sea-deep" strokeWidth={1.5} />
              <p className="pretty mt-4 text-sm leading-relaxed text-ink-soft">
                {t(C.prices.note)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
