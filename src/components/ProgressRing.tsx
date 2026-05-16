import { useEffect, useState } from "react";

export function ProgressRing({
  value,
  size = 160,
  stroke = 14,
  label,
  sub,
}: {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  sub?: string;
}) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setV(value));
    return () => cancelAnimationFrame(id);
  }, [value]);

  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (v / 100) * c;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.14 152)" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 150)" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="oklch(0.92 0.04 150)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#ring-grad)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="font-display text-3xl font-bold text-gradient">{Math.round(v)}%</div>
        {label && <div className="text-xs font-semibold text-foreground mt-0.5">{label}</div>}
        {sub && <div className="text-[10px] text-muted-foreground">{sub}</div>}
      </div>
    </div>
  );
}
