import { createFileRoute } from "@tanstack/react-router";
import {
  Recycle,
  Sprout,
  Cpu,
  Coins,
  ScanLine,
  Truck,
  Gift,
  Bot,
  Trophy,
  Medal,
  Award,
  TrendingUp,
} from "lucide-react";
import { ProgressRing } from "@/components/ProgressRing";
import { MiniMap } from "@/components/MiniMap";
import { collections, leaderboard, notifications, wasteTrend } from "@/lib/mock";
import dashHero from "@/assets/dashboard-hero.jpg";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export const Route = createFileRoute("/_app/dashboard")({
  component: ContributorDashboard,
});

function ContributorDashboard() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-3xl glass-card p-6 lg:p-8"
        style={{
          backgroundImage: `linear-gradient(120deg, oklch(0.96 0.04 150 / 0.95), oklch(0.92 0.08 160 / 0.6)), url(${dashHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-primary">
              Contributor · Nugegoda
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold mt-2">
              Welcome back, <span className="text-gradient">Nimal!</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-lg">
              You're 78% of the way to your next badge. Keep recycling — every kilogram counts toward a
              cleaner Sri Lanka.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-3.5 py-1.5 border border-border">
              <Trophy className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold">Next Badge:</span>
              <span className="text-xs text-primary font-bold">Green Champion</span>
            </div>
          </div>
          <ProgressRing value={78} label="To next badge" sub="Green Champion" />
        </div>
      </section>

      {/* Quick actions */}
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { label: "AI Complaint", icon: Bot },
          { label: "Request Collection", icon: Truck },
          { label: "Track Truck", icon: Truck },
          { label: "Redeem Rewards", icon: Gift },
          { label: "Scan Barcode", icon: ScanLine },
        ].map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="glass-card p-4 hover-lift flex flex-col items-start gap-2 text-left"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-primary-foreground">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">{label}</span>
          </button>
        ))}
      </section>

      {/* Stat cards */}
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { label: "Total Waste", value: "184.2 kg", icon: Recycle, accent: "from-primary/15" },
          { label: "Organic", value: "62.4 kg", icon: Sprout },
          { label: "Recyclable", value: "98.6 kg", icon: Recycle },
          { label: "E-Waste", value: "23.2 kg", icon: Cpu },
          { label: "Monthly Points", value: "+1,240", icon: Coins },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-card p-4 hover-lift">
            <div className="flex items-center justify-between">
              <Icon className="h-4 w-4 text-primary" />
              <TrendingUp className="h-3.5 w-3.5 text-success" />
            </div>
            <div className="font-display text-2xl font-bold mt-3">{value}</div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </div>
        ))}
      </section>

      {/* Charts + leaderboard */}
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-display font-bold">Waste submission trends</h3>
              <p className="text-xs text-muted-foreground">Last 6 months · kg</p>
            </div>
            <div className="flex gap-3 text-[11px]">
              <Legend color="oklch(0.55 0.14 152)" label="Recyclable" />
              <Legend color="oklch(0.78 0.16 150)" label="Organic" />
              <Legend color="oklch(0.55 0.07 60)" label="E-Waste" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={wasteTrend}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.55 0.14 152)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="oklch(0.55 0.14 152)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.16 150)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="oklch(0.78 0.16 150)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.02 140)" />
              <XAxis dataKey="m" stroke="oklch(0.5 0.03 150)" fontSize={11} />
              <YAxis stroke="oklch(0.5 0.03 150)" fontSize={11} />
              <Tooltip
                contentStyle={{
                  background: "white",
                  border: "1px solid oklch(0.9 0.02 140)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Area type="monotone" dataKey="recyclable" stroke="oklch(0.55 0.14 152)" fill="url(#g1)" strokeWidth={2.5} />
              <Area type="monotone" dataKey="organic" stroke="oklch(0.78 0.16 150)" fill="url(#g2)" strokeWidth={2.5} />
              <Area type="monotone" dataKey="ewaste" stroke="oklch(0.55 0.07 60)" fill="transparent" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-display font-bold flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" /> Eco Leaderboard
          </h3>
          <ul className="mt-3 space-y-2.5">
            {leaderboard.map((u, i) => (
              <li key={u.name} className="flex items-center gap-3 rounded-xl p-2 hover:bg-secondary/60 transition-colors">
                <div
                  className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                    i === 0
                      ? "bg-warning text-earth-foreground"
                      : i === 1
                      ? "bg-mint text-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">{u.name}</div>
                  <div className="text-[11px] text-muted-foreground">{u.city}</div>
                </div>
                <div className="text-sm font-bold text-primary">{u.pts}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Collections + map */}
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-bold">Previous Collections</h3>
            <button className="text-xs font-semibold text-primary hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="py-2">Barcode</th>
                  <th>Type</th>
                  <th>Weight</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                {collections.map((c, i) => (
                  <tr
                    key={c.id}
                    className={`border-t border-border ${i % 2 === 0 ? "" : "bg-secondary/30"}`}
                  >
                    <td className="py-3 font-mono text-xs font-semibold">{c.id}</td>
                    <td>{c.type}</td>
                    <td>{c.weight} kg</td>
                    <td className="text-muted-foreground">{c.date}</td>
                    <td>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          c.status === "Verified"
                            ? "bg-primary/10 text-primary"
                            : "bg-warning/15 text-earth"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="text-right font-bold text-primary">+{c.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-5">
            <h3 className="font-display font-bold mb-3">Live truck</h3>
            <MiniMap height={180} />
          </div>
          <div className="glass-card p-5">
            <h3 className="font-display font-bold mb-3">Recent notifications</h3>
            <ul className="space-y-3">
              {notifications.slice(0, 3).map((n) => (
                <li key={n.title} className="flex gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{n.title}</div>
                    <div className="text-xs text-muted-foreground">{n.body}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{n.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Badges + impact */}
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 lg:col-span-2">
          <h3 className="font-display font-bold mb-4">Reward Badges</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Green Champion", icon: Trophy, color: "from-primary to-primary-glow", earned: false },
              { name: "Gold Collector", icon: Medal, color: "from-warning to-mint", earned: true },
              { name: "Eco Contributor", icon: Award, color: "from-mint to-primary", earned: true },
            ].map(({ name, icon: Icon, color, earned }) => (
              <div key={name} className={`relative rounded-2xl p-5 text-center bg-gradient-to-br ${color} ${!earned ? "opacity-50 grayscale" : ""} text-primary-foreground hover-lift`}>
                <Icon className="h-8 w-8 mx-auto" />
                <div className="font-display font-bold mt-2">{name}</div>
                <div className="text-[11px] opacity-90">{earned ? "Earned" : "In progress"}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5 gradient-soft">
          <h3 className="font-display font-bold">Community Impact</h3>
          <p className="text-xs text-muted-foreground mb-4">Your contribution this year</p>
          <div className="space-y-3">
            {[
              { l: "CO₂ saved", v: "284 kg" },
              { l: "Trees equivalent", v: "12" },
              { l: "Plastic diverted", v: "47 kg" },
            ].map((s) => (
              <div key={s.l} className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0">
                <span className="text-sm text-muted-foreground">{s.l}</span>
                <span className="font-display font-bold text-primary">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-muted-foreground">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
