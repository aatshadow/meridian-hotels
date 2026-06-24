import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Facebook } from "lucide-react";
import { NAV, CTA_BOOK, HOTEL } from "@/lib/hotel";
import { C } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { Seagull } from "./Logo";
import { MaskText } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { HorizonLine } from "./HorizonLine";
import { viewportOnce } from "@/lib/motion";

export function Footer() {
  const t = useT();
  return (
    <footer className="grain relative overflow-hidden bg-navy text-cream">
      {/* CTA band */}
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-32">
        <span className="eyebrow text-gold">{t(C.home.ctaTitle)}</span>
        <h2 className="mt-7 max-w-4xl font-display text-[2.8rem] leading-[1.02] text-cream sm:text-[4rem] md:text-[5rem]">
          <MaskText text={t({ bg: "Морето ви чака.", en: "The sea is waiting." })} />
        </h2>
        <p className="pretty mt-6 max-w-md text-cream/60">{t(C.home.ctaSub)}</p>
        <div className="mt-9">
          <MagneticButton to="/book" variant="gold">
            {t(CTA_BOOK)}
          </MagneticButton>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <HorizonLine left={t(HOTEL.place)} right={HOTEL.coordinates} tone="sea" className="mb-14" />

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="inline-flex items-center gap-3">
              <Seagull size={36} className="text-gold" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-[0.14em] text-cream">ЧАЙКА</span>
                <span className="data-label mt-1 text-[0.55rem] tracking-[0.42em] text-gold">ПРИМОРСКО</span>
              </span>
            </span>
            <p className="pretty mt-5 max-w-xs text-sm leading-relaxed text-cream/55">{t(HOTEL.address)}</p>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">{t(C.ui.pages)}</span>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-cream/70 transition-colors hover:text-gold">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">{t(C.ui.contacts)}</span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <a href={HOTEL.tel} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Phone size={14} /> {HOTEL.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${HOTEL.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Mail size={14} /> {HOTEL.email}
                </a>
              </li>
              <li>
                <a href={HOTEL.viber} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <MessageCircle size={14} /> Viber
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">{t(C.ui.followUs)}</span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              <li>
                <a
                  href={HOTEL.facebook}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Facebook size={14} /> Facebook
                </a>
              </li>
              <li className="data-label text-cream/45">{HOTEL.coordinates}</li>
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
          className="text-center font-display text-[19vw] font-semibold leading-none tracking-[0.06em] text-cream"
        >
          ЧАЙКА
        </motion.div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-7 md:flex-row md:px-10">
          <span className="data-label text-xs text-cream/40">
            © {new Date().getFullYear()} ЧАЙКА · {t(HOTEL.town)} — {t(C.ui.rights)}
          </span>
          <span className="data-label text-xs text-cream/40">Hotel Chaika · Primorsko</span>
        </div>
      </div>
    </footer>
  );
}
