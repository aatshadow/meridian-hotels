import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MapPin } from "lucide-react";
import { NAV, HOTEL } from "@/lib/hotel";
import { C } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { OmanCrest } from "./Logo";
import { HorizonLine } from "./HorizonLine";
import { scrollToId } from "@/lib/useLenis";
import { viewportOnce } from "@/lib/motion";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="grain relative overflow-hidden bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <HorizonLine left={t(HOTEL.place)} right={HOTEL.coords} tone="gold" className="mb-14" />

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="inline-flex items-center gap-3">
              <OmanCrest size={44} className="text-gold" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-[0.16em] text-cream">HOTEL OMAN</span>
                <span className="mt-1 text-[0.5rem] uppercase tracking-[0.34em] text-sea" style={{ fontWeight: 500 }}>ПРИМОРСКО</span>
              </span>
            </span>
            <p className="script mt-5 max-w-xs text-xl leading-snug text-gold">{t(C.footer.tagline)}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/45">{t(HOTEL.address)}</p>
          </div>

          <div>
            <span className="eyebrow text-sea">{t({ bg: "Навигация", en: "Explore" })}</span>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToId(item.id)} className="text-sm text-cream/70 transition-colors hover:text-gold-light">
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea">{t(C.contact.eyebrow)}</span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <a href={HOTEL.tel} className="inline-flex items-center gap-2 transition-colors hover:text-gold-light">
                  <Phone size={14} /> {HOTEL.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={HOTEL.mailto} className="inline-flex items-center gap-2 transition-colors hover:text-gold-light">
                  <Mail size={14} /> {HOTEL.email}
                </a>
              </li>
              <li className="text-cream/50">{t(HOTEL.address)}</li>
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea">{t({ bg: "Последвай ни", en: "Follow" })}</span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <a href={HOTEL.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold-light">
                  <Facebook size={14} /> Hotel Oman Primorsko
                </a>
              </li>
              <li>
                <a href={HOTEL.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold-light">
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
          whileInView={{ opacity: 0.07, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2 }}
          className="text-center font-display text-[19vw] leading-none tracking-[0.1em] text-gold"
        >
          OMAN
        </motion.div>
      </div>

      <div className="border-t" style={{ borderColor: "var(--gold-line)" }}>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-7 md:flex-row md:px-10">
          <span className="data-label text-xs text-cream/40">
            © {year} {t(HOTEL.name)} · {t(HOTEL.place)} — {t(C.footer.rights)}
          </span>
          <span className="data-label text-xs text-cream/40">Hotel Oman · Primorsko</span>
        </div>
      </div>
    </footer>
  );
}
