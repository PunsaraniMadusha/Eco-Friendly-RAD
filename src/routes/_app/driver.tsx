import { createFileRoute } from "@tanstack/react-router";
import { Fuel, Gauge, MapPin, Wrench, Phone, ScanLine, AlertTriangle, Bot, CheckCircle2 } from "lucide-react";
import { MiniMap } from "@/components/MiniMap";
import { ProgressRing } from "@/components/ProgressRing";
import { routes } from "@/lib/mock";

export const Route = createFileRoute("/_app/driver")({
  component: DriverDashboard,
});

function DriverDashboard() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-6 lg:p-7 grid lg:grid-cols-[1fr_auto] gap-6 items-center gradient-soft">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Driver</div>
          <h1 className="font-display text-3xl font-bold mt-1">Good morning, <span className="text-gradient">Kasun!</span></h1>
          <p className="text-sm text-muted-foreground mt-1">Truck <strong>LK-4521</strong> · Shift 06:00 – 14:00 · Zone Colombo South</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge tone="primary" icon={CheckCircle2}>18 / 28 stops complete</Badge>
            <Badge tone="warning" icon={AlertTriangle}>Maintenance due in 320 km</Badge>
          </div>
        </div>
        <ProgressRing value={64} label="Today" sub="Pickup progress" />
      </section>

      <section className="grid lg:grid-cols-4 gap-3">
        <Stat icon={Fuel} label="Fuel efficiency" value="6.8 km/L" hint="+0.3 vs last week" />
        <Stat icon={Gauge} label="Load capacity" value="74%" hint="3.7 / 5.0 tons" />
        <Stat icon={MapPin} label="Distance today" value="142 km" hint="3 routes" />
        <Stat icon={Wrench} label="Next service" value="May 22" hint="Routine check" />
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-bold">GPS Route · R-014</h3>
            <span className="text-xs glass-card px-2.5 py-1 inline-flex items-center gap-1.5 text-primary font-semibold">
              <Bot className="h-3 w-3" /> AI optimized
            </span>
          </div>
          <MiniMap height={300} />
        </div>
        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3">Daily route schedule</h3>
          <ul className="space-y-3">
            {routes.map((r) => (
              <li key={r.id} className="rounded-xl border border-border p-3 hover-lift">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary">{r.id}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${r.status === "In Progress" ? "bg-primary/15 text-primary" : "bg-secondary text-foreground"}`}>{r.status}</span>
                </div>
                <div className="text-sm font-semibold mt-1">{r.area}</div>
                <div className="text-xs text-muted-foreground">{r.stops} stops · ETA {r.eta}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><ScanLine className="h-4 w-4 text-primary"/> Scan waste bag</h3>
          <div className="aspect-square rounded-2xl border-2 border-dashed border-primary/40 grid place-items-center bg-secondary/40">
            <div className="text-center">
              <ScanLine className="h-10 w-10 mx-auto text-primary animate-pulse-soft" />
              <div className="text-xs text-muted-foreground mt-2">Position QR within frame</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-5 lg:col-span-2">
          <h3 className="font-display font-bold mb-3">Real-time alerts</h3>
          <ul className="space-y-3">
            {[
              { i: AlertTriangle, t: "Heavy traffic on Galle Road", b: "Reroute via Duplication Rd suggested by AI", tone: "warning" },
              { i: Wrench, t: "Tire pressure low (rear-left)", b: "Inspect at next checkpoint", tone: "warning" },
              { i: CheckCircle2, t: "Stop completed: Havelock City", b: "Verified by collector at 09:42", tone: "primary" },
            ].map((a) => (
              <li key={a.t} className="flex gap-3 rounded-xl bg-secondary/40 p-3">
                <span className={`grid h-9 w-9 place-items-center rounded-xl ${a.tone === "warning" ? "bg-warning/20 text-earth" : "bg-primary/15 text-primary"}`}>
                  <a.i className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{a.t}</div>
                  <div className="text-xs text-muted-foreground">{a.b}</div>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full h-11 rounded-2xl glass-card font-semibold text-sm flex items-center justify-center gap-2 hover-lift">
            <Phone className="h-4 w-4 text-primary" /> Emergency contact · 1919
          </button>
        </div>
      </section>
    </div>
  );
}

function Stat({ icon: Icon, label, value, hint }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; hint: string }) {
  return (
    <div className="glass-card p-4 hover-lift">
      <Icon className="h-4 w-4 text-primary" />
      <div className="font-display text-2xl font-bold mt-3">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-[10px] text-success mt-1">{hint}</div>
    </div>
  );
}

function Badge({ children, tone, icon: Icon }: { children: React.ReactNode; tone: "primary" | "warning"; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${tone === "primary" ? "bg-primary/15 text-primary" : "bg-warning/20 text-earth"}`}>
      <Icon className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}
