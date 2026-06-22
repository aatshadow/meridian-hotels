import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { BRAND, NAV } from "@/lib/brand";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { getLenis } from "@/lib/useLenis";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 28));

  // close menu + lock body scroll
  useEffect(() => setOpen(false), [pathname]);
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
            scrolled ? "border-b border-hairline/70 bg-pearl/80 backdrop-blur-xl backdrop-saturate-150" : "border-b border-transparent bg-transparent"
          }`}
        />
        <nav className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" aria-label={`${BRAND.name} — home`}>
            <Logo />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => {
              const active = item.to === pathname;
              return (
                <Link key={item.to} to={item.to} className="group relative py-1">
                  <span
                    className={`font-sans text-[0.92rem] tracking-tight transition-colors ${
                      active ? "text-sea-deep" : "text-ink-soft hover:text-sea-deep"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold-foil transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <MagneticButton to="/contact" variant="solid" className="!px-6 !py-3">
              Book a call
            </MagneticButton>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
            className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-6 origin-center transition-all duration-300 ${
                open ? "translate-y-[3.5px] rotate-45 bg-pearl" : "bg-sea-deep"
              }`}
            />
            <span
              className={`block h-px w-6 origin-center transition-all duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45 bg-pearl" : "bg-sea-deep"
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="grain fixed inset-0 z-[100] flex flex-col justify-center bg-sea-deep px-8 lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <div className="flex flex-col gap-2">
              {NAV.map((item, idx) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + idx * 0.07, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <Link
                    to={item.to}
                    className={`font-display text-[2.6rem] leading-tight ${
                      item.to === pathname ? "text-gold" : "text-pearl"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-14 flex flex-col gap-1"
            >
              <span className="eyebrow text-sea-mist">{BRAND.coordinates}</span>
              <a href={`mailto:${BRAND.email}`} className="font-sans text-pearl/70">
                {BRAND.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
