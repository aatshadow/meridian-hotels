/* The OMAN crest — an antique-gold "O" monogram framed by a double ring,
   flanked by symmetric flourishes with a small pendant below. A refined,
   scalable interpretation of the hotel's heraldic logo. Uses currentColor
   so it recolours per context. */
export function OmanCrest({ size = 56, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={(size * 130) / 220}
      viewBox="0 0 220 130"
      fill="none"
      className={className}
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* crown dot + sprig */}
      <circle cx="110" cy="12" r="2.4" fill="currentColor" stroke="none" />
      <path d="M110 16 V24" strokeWidth="1.4" strokeLinecap="round" />

      {/* frame rings */}
      <circle cx="110" cy="60" r="31" strokeWidth="1.3" />
      <circle cx="110" cy="60" r="26.5" strokeWidth="1" opacity="0.6" />
      {/* the "O" */}
      <circle cx="110" cy="60" r="14.5" strokeWidth="3" />

      {/* side flourishes (left, then mirrored right) */}
      <g strokeWidth="1.5" strokeLinecap="round">
        <path d="M79 60 C64 70 50 52 36 60" />
        <circle cx="33" cy="60" r="2.3" fill="currentColor" stroke="none" />
        <path d="M84 47 C72 38 60 44 50 41" />
        <path d="M84 73 C72 82 60 76 50 79" />

        <path d="M141 60 C156 70 170 52 184 60" />
        <circle cx="187" cy="60" r="2.3" fill="currentColor" stroke="none" />
        <path d="M136 47 C148 38 160 44 170 41" />
        <path d="M136 73 C148 82 160 76 170 79" />
      </g>

      {/* pendant */}
      <path d="M110 91 V102" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M110 104 l5 5 -5 5 -5 -5 z" strokeWidth="1.2" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

/* Horizontal lockup for the navigation bar. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const ink = light ? "#F4EFE4" : "#04142b";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <OmanCrest size={42} className="text-gold" />
      <span className="flex flex-col items-start leading-none">
        <span className="font-display text-[1.4rem] leading-none tracking-[0.16em]" style={{ color: ink }}>
          HOTEL OMAN
        </span>
        <span className="mt-1.5 text-[0.5rem] uppercase tracking-[0.42em] text-sea" style={{ fontWeight: 500 }}>
          ПРИМОРСКО
        </span>
      </span>
    </span>
  );
}

/* Stacked lockup for the preloader / footer. */
export function LogoStacked({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <OmanCrest size={88} className="text-gold" />
      <span className="mt-4 font-display text-3xl tracking-[0.2em] text-cream">HOTEL OMAN</span>
      <span className="mt-2 text-[0.58rem] uppercase tracking-[0.5em] text-sea" style={{ fontWeight: 500 }}>
        ПРИМОРСКО
      </span>
    </span>
  );
}
