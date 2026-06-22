import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BRAND, NAV } from "@/lib/brand";
import { LogoMark } from "./Logo";
import { MaskText } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { HorizonLine } from "./HorizonLine";
import { viewportOnce } from "@/lib/motion";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-sea-deep text-pearl">
      {/* CTA band */}
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-32">
        <span className="eyebrow text-gold">( Да започнем )</span>
        <h2 className="mt-7 max-w-4xl font-display text-[3rem] font-light leading-[0.98] text-pearl sm:text-[4.2rem] md:text-[5.4rem]">
          <MaskText text="Да разпродадем" />
          <br />
          <MaskText text="вашето лято." delay={0.12} />
        </h2>
        <div className="mt-10">
          <MagneticButton to="/contact" variant="gold">
            Запази разговор
          </MagneticButton>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <HorizonLine left={BRAND.home} right={BRAND.coordinates} tone="sea" className="mb-14" />

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="inline-flex items-center gap-2.5">
              <LogoMark size={30} />
              <span className="font-display text-xl tracking-[0.04em] text-pearl">{BRAND.name}</span>
            </span>
            <p className="pretty mt-4 max-w-xs text-sm leading-relaxed text-pearl/55">
              {BRAND.descriptor}. Помагаме на хотелите по Черноморието да пълнят стаите си — директно, сезон след сезон.
            </p>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">Страници</span>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-pearl/70 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">Контакт</span>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-pearl/70">
              <li>
                <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-gold">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${BRAND.instagram.replace("@", "")}`} className="transition-colors hover:text-gold">
                  {BRAND.instagram}
                </a>
              </li>
              <li className="text-pearl/50">{BRAND.home}</li>
            </ul>
          </div>

          <div>
            <span className="eyebrow text-sea-mist">Студио</span>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-pearl/70">
              <li className="data-label text-pearl/50">{BRAND.est}</li>
              <li className="data-label text-pearl/50">{BRAND.coordinates}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized watermark wordmark */}
      <div className="relative -mb-[2vw] select-none overflow-hidden px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2 }}
          className="text-center font-display text-[20vw] leading-none tracking-tight text-pearl"
        >
          {BRAND.name}
        </motion.div>
      </div>

      <div className="border-t border-pearl/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-7 md:flex-row md:px-10">
          <span className="data-label text-xs text-pearl/40">
            © {BRAND.name} — {BRAND.descriptor}
          </span>
          <span className="data-label text-xs text-pearl/40">{BRAND.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
