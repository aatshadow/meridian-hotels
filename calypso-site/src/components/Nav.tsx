import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Phone } from "lucide-react";
import { NAV, CTA_BOOK, HOTEL } from "@/lib/hotel";
import { useT } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { BookingDock } from "./BookingDock";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { getLenis, scrollToId, scrollToTop } from "@/lib/useLenis";

export function Nav() {
  const t = useT();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 28);
    setShowBar(v > 620);
  });

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
            scrolled ? "border-b border-line/70 bg-cream/85 backdrop-blur-xl backdrop-saturate-150" : "border-b border-transparent bg-transparent"
          }`}
        />
        <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <button onClick={scrollToTop} aria-label="Хотел Калипсо — начало">
            <Logo light={!scrolled} />
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <button key={item.id} onClick={() => nav(item.id)} className="group relative py-1">
                <span className={`text-[0.95rem] transition-colors ${scrolled ? "text-ink-soft hover:text-navy" : "text-cream/85 hover:text-white"}`}>{t(item.label)}</span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-foil transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <LangToggle light={!scrolled} />
            <button
              onClick={() => nav("contact")}
              data-cursor="hover"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition-colors ${
                scrolled ? "bg-navy text-cream hover:bg-navy-soft" : "bg-cream/95 text-navy hover:bg-cream"
              }`}
            >
              {t(CTA_BOOK)}
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <LangToggle light={!scrolled && !open} />
            <button
              aria-label="Меню"
              onClick={() => setOpen((o) => !o)}
              className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <span className={`block h-px w-6 origin-center transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45 bg-cream" : scrolled ? "bg-navy" : "bg-cream"}`} />
              <span className={`block h-px w-6 origin-center transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45 bg-cream" : scrolled ? "bg-navy" : "bg-cream"}`} />
            </button>
          </div>
        </nav>

        {/* Sticky availability bar — the dock that detaches from the hero on scroll */}
        <AnimatePresence>
          {showBar && !open && (
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="relative hidden border-b border-line/60 bg-cream/85 backdrop-blur-xl md:block"
            >
              <div className="mx-auto max-w-[1440px] px-6 py-2.5 md:px-10">
                <BookingDock variant="bar" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="grain fixed inset-0 z-[100] flex flex-col justify-center bg-navy px-8 lg:hidden"
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
                  className="text-left font-display text-[2.6rem] leading-tight text-cream"
                >
                  {t(item.label)}
                </motion.button>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 flex flex-col gap-4">
              <button
                onClick={() => nav("contact")}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-foil px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white"
              >
                {t(CTA_BOOK)}
              </button>
              <a href={HOTEL.phone1Tel} className="mt-2 inline-flex items-center gap-2 font-sans text-cream/70">
                <Phone size={15} /> {HOTEL.phone1Display}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
