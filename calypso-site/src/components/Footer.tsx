import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MapPin } from "lucide-react";
import { NAV, HOTEL } from "@/lib/hotel";
import { C } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { CalypsoMark } from "./Logo";
import { HorizonLine } from "./HorizonLine";
import { scrollToId } from "@/lib/useLenis";
import { viewportOnce } from "@/lib/motion";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="grain relative overflow-hidden bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <HorizonLine left={t(HOTEL.place)} right={HOTEL.coords} tone="sea" className="mb-14" />

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="inline-flex items-center gap-3">
              <CalypsoMark size={38} />
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-semibold tracking-[0.2em] text-cream">CALYPSO</span>
                <span className="data-label mt-1 text-[0.5rem] tracking-[0.34em] text-sea">BLUE · ПРИМОРСКО</span>
              </span>
            </span>
            <p className="pretty mt-5 max-w-xs text-sm leading-relaxed text-cream/55">{t(C.footer.tagline)}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/45">{t(HOTEL.address)}</p>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">{t({ bg: "Навигация", en: "Explore" })}</span>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToId(item.id)} className="text-sm text-cream/70 transition-colors hover:text-gold">
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">{t(C.contact.eyebrow)}</span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <a href={HOTEL.phone1Tel} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Phone size={14} /> {HOTEL.phone1Display}
                </a>
              </li>
              <li>
                <a href={HOTEL.phone2Tel} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Phone size={14} /> {HOTEL.phone2Display}
                </a>
              </li>
              <li>
                <a href={HOTEL.mailto} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Mail size={14} /> {HOTEL.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">{t({ bg: "Последвай ни", en: "Follow" })}</span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <a href={HOTEL.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Facebook size={14} /> Calypso Primorsko
                </a>
              </li>
              <li>
                <a href={HOTEL.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <MapPin size={14} /> {t(C.location.directions)}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized watermark */}
      <div className="relative -mb-[1.5vw] select-none overflow-hidden px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.06, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2 }}
          className="text-center font-display text-[18vw] font-semibold leading-none tracking-[0.08em] text-cream"
        >
          CALYPSO
        </motion.div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-7 md:flex-row md:px-10">
          <span className="data-label text-xs text-cream/40">
            © {year} {HOTEL.company} · {t(HOTEL.name)} — {t(C.footer.rights)}
          </span>
          <span className="data-label text-xs text-cream/40">Hotel Calypso Blue · Primorsko</span>
        </div>
      </div>
    </footer>
  );
}
