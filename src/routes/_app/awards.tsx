import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal, Award, Sparkles, Crown, Leaf } from "lucide-react";
import { leaderboard } from "@/lib/mock";

export const Route = createFileRoute("/_app/awards")({
  component: Awards,
});

const badges = [
  { name: "Green Champion", desc: "Reach 3,000 points", icon: Trophy, gradient: "from-primary to-primary-glow", earned: false, progress: 78 },
  { name: "Gold Collector", desc: "100 verified pickups", icon: Medal, gradient: "from-warning to-mint", earned: true, progress: 100 },
  { name: "Eco Contributor", desc: "Recycle 50 kg", icon: Award, gradient: "from-mint to-primary", earned: true, progress: 100 },
  { name: "Plastic Buster", desc: "Divert 25 kg of plastic", icon: Sparkles, gradient: "from-primary-glow to-mint", earned: true, progress: 100 },
  { name: "Community Hero", desc: "Resolve 10 complaints", icon: Crown, gradient: "from-earth to-warning", earned: false, progress: 30 },
  { name: "Tree Planter", desc: "Save 20 trees worth of CO₂", icon: Leaf, gradient: "from-leaf to-primary", earned: false, progress: 55 },
];

function Awards() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">Awards & <span className="text-gradient">Recognition</span></h1>
        <p className="text-sm text-muted-foreground mt-1">Earn badges, climb the leaderboard, and unlock real-world rewards.</p>
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((b) => (
          <div key={b.name} className={`relative overflow-hidden rounded-3xl p-6 text-primary-foreground hover-lift bg-gradient-to-br ${b.gradient} ${!b.earned ? "opacity-90" : ""}`}>
            <b.icon className="h-10 w-10" />
            <div className="font-display text-xl font-bold mt-3">{b.name}</div>
            <div className="text-xs opacity-90">{b.desc}</div>
            <div className="mt-4 h-1.5 rounded-full bg-white/30 overflow-hidden">
              <div className="h-full bg-white transition-all duration-1000" style={{ width: `${b.progress}%` }} />
            </div>
            <div className="text-[11px] mt-1 font-semibold">{b.earned ? "Earned" : `${b.progress}% complete`}</div>
          </div>
        ))}
      </section>

      <section className="glass-card p-5">
        <h3 className="font-display font-bold flex items-center gap-2"><Trophy className="h-4 w-4 text-primary"/> Eco Leaderboard · This month</h3>
        <ul className="mt-4 divide-y divide-border">
          {leaderboard.map((u, i) => (
            <li key={u.name} className="flex items-center gap-4 py-3">
              <div className={`grid h-10 w-10 place-items-center rounded-full font-bold ${i === 0 ? "gradient-primary text-primary-foreground" : "bg-secondary"}`}>{i + 1}</div>
              <div className="flex-1">
                <div className="font-semibold">{u.name}</div>
                <div className="text-xs text-muted-foreground">{u.city}</div>
              </div>
              <div className="text-right">
                <div className="font-display font-bold text-primary">{u.pts}</div>
                <div className="text-[10px] text-muted-foreground">points</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
