import type { ReactNode } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "gold" | "outline" | "light";

const VARIANTS: Record<Variant, string> = {
  solid: "bg-navy text-cream hover:bg-navy-soft",
  gold: "bg-gold-foil text-navy hover:brightness-105",
  outline: "border border-navy/20 text-navy hover:border-navy/50 hover:bg-navy/[0.03]",
  light: "border border-cream/30 text-cream hover:border-gold hover:text-gold",
};

export function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "solid",
  arrow = true,
  className = "",
  type = "button",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition-[background,color,border,filter] duration-300 ${VARIANTS[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={15}
          strokeWidth={1.6}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className="inline-block">
      {to ? (
        <Link to={to} className={cls} onClick={onClick}>
          {inner}
        </Link>
      ) : href ? (
        <a href={href} className={cls} onClick={onClick}>
          {inner}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={cls}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
