import { Truck } from "lucide-react";

export function MiniMap({ height = 240 }: { height?: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border"
      style={{
        height,
        background:
          "radial-gradient(at 30% 20%, oklch(0.92 0.07 150 / 0.5), transparent 50%), linear-gradient(135deg, oklch(0.96 0.03 140), oklch(0.93 0.05 160))",
      }}
    >
      {/* grid */}
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 400 240" preserveAspectRatio="none">
        <defs>
          <pattern id="g" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="oklch(0.85 0.04 150)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="240" fill="url(#g)" />
        {/* roads */}
        <path d="M0 160 Q120 130 200 150 T400 110" stroke="oklch(0.6 0.05 150)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M50 0 Q70 80 140 120 T260 220" stroke="oklch(0.55 0.14 152)" strokeWidth="3.5" fill="none" strokeDasharray="6 6" />
        {/* stops */}
        {[
          [60, 40],
          [200, 80],
          [320, 60],
          [140, 180],
          [300, 200],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="oklch(0.55 0.14 152)" />
        ))}
      </svg>
      <div className="absolute left-[35%] top-[50%] -translate-x-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] animate-pulse-soft">
        <Truck className="h-4 w-4" />
      </div>
      <div className="absolute bottom-3 left-3 glass-card px-3 py-1.5 text-xs">
        <span className="font-semibold text-foreground">LK-4521</span>{" "}
        <span className="text-muted-foreground">· 12 min away</span>
      </div>
      <div className="absolute right-3 top-3 glass-card px-2.5 py-1 text-[10px] font-semibold text-primary">
        ● LIVE
      </div>
    </div>
  );
}
