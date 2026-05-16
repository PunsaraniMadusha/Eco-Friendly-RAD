export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]"
        style={{ width: size, height: size }}
      >
        <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 17l-3-2 3-5h4l1.5-2.5M17 7l3 2-3 5h-4l-1.5 2.5M9 7L12 3l3 4M15 17l-3 4-3-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display font-bold text-foreground">EcoCycle</div>
        <div className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase -mt-0.5">
          Lanka
        </div>
      </div>
    </div>
  );
}
