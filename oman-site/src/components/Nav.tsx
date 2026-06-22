import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Phone } from "lucide-react";
import { NAV, CTA_BOOK, HOTEL } from "@/lib/hotel";
import { useT } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { getLenis, scrollToId, scrollToTop } from "@/lib/useLenis";

export function Nav() {
  const t = useT();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 28));

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function nav(id: string) {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 380 : 0);
  }

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 1.7 }}
        className="fixed inset-x-0 top-0 z-[80]"
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled ? "border-b bg-navy-deep/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
          }`}
          style={scrolled ? { borderColor: "var(--gold-line)" } : undefined}
        />
        <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <button onClick={scrollToTop} aria-label="Хотел Оман — начало">
            <Logo light />
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <button key={item.id} onClick={() => nav(item.id)} className="group relative py-1">
                <span className="text-[0.92rem] tracking-wide text-cream/80 transition-colors group-hover:text-gold-light">
                  {t(item.label)}
                </span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-foil transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={HOTEL.tel} className="inline-flex items-center gap-2 text-[0.86rem] text-cream/70 transition-colors hover:text-gold-light">
              <Phone size={14} /> {HOTEL.phoneDisplay}
            </a>
            <LangToggle light />
            <button
              onClick={() => nav("contact")}
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full bg-gold-foil px-6 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] text-navy-deep transition-[filter] duration-300 hover:brightness-110"
            >
              {t(CTA_BOOK)}
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <LangToggle light />
            <button
              aria-label="Меню"
              onClick={() => setOpen((o) => !o)}
              className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <span className={`block h-px w-6 origin-center bg-gold transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 origin-center bg-gold transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="grain fixed inset-0 z-[100] flex flex-col justify-center bg-navy-deep px-8 lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <div className="flex flex-col gap-1">
              {NAV.map((item, idx) => (
                <motion.button
                  key={item.id}
                  onClick={() => nav(item.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + idx * 0.06, duration: 0.6, ease: EASE_OUT_EXPO }}
                  className="text-left font-display text-[2.4rem] leading-tight text-cream"
                >
                  {t(item.label)}
                </motion.button>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 flex flex-col gap-4">
              <button
                onClick={() => nav("contact")}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-foil px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.18em] text-navy-deep"
              >
                {t(CTA_BOOK)}
              </button>
              <a href={HOTEL.tel} className="mt-2 inline-flex items-center gap-2 text-cream/70">
                <Phone size={15} /> {HOTEL.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
