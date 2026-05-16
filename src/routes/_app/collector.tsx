import { createFileRoute } from "@tanstack/react-router";
import { ScanLine, CheckCircle2, Clock, Bot, Shield, MessageCircle, TrendingUp, Award } from "lucide-react";
import { ProgressRing } from "@/components/ProgressRing";
import { collections } from "@/lib/mock";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export const Route = createFileRoute("/_app/collector")({
  component: CollectorDashboard,
});

const weight = [
  { d: "Mon", kg: 240 },
  { d: "Tue", kg: 310 },
  { d: "Wed", kg: 280 },
  { d: "Thu", kg: 360 },
  { d: "Fri", kg: 410 },
  { d: "Sat", kg: 380 },
  { d: "Sun", kg: 220 },
];

function CollectorDashboard() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-6 grid lg:grid-cols-[1fr_auto] gap-6 items-center gradient-soft">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Collector</div>
          <h1 className="font-display text-3xl font-bold mt-1">Hello, <span className="text-gradient">Sanjeewa!</span></h1>
          <p className="text-sm text-muted-foreground mt-1">Working with Truck LK-4521 · Zone Colombo South</p>
          <div className="flex gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/15 text-primary">
              <Award className="h-3.5 w-3.5"/> Rank #4 this month
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-mint/40 text-foreground">
              <TrendingUp className="h-3.5 w-3.5"/> Score 92.4
            </span>
          </div>
        </div>
        <ProgressRing value={82} label="Tasks" sub="Today" />
      </section>

      <section className="grid lg:grid-cols-4 gap-3">
        {[
          { i: CheckCircle2, l: "Completed pickups", v: "23" },
          { i: Clock, l: "Pending pickups", v: "5" },
          { i: ScanLine, l: "Bags scanned", v: "146" },
          { i: Shield, l: "Verifications", v: "31" },
        ].map((s) => (
          <div key={s.l} className="glass-card p-4 hover-lift">
            <s.i className="h-4 w-4 text-primary" />
            <div className="font-display text-2xl font-bold mt-3">{s.v}</div>
            <div className="text-xs text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 lg:col-span-2">
          <h3 className="font-display font-bold mb-3">Collection weight · this week</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={weight}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.02 140)" />
              <XAxis dataKey="d" stroke="oklch(0.5 0.03 150)" fontSize={11}/>
              <YAxis stroke="oklch(0.5 0.03 150)" fontSize={11}/>
              <Tooltip contentStyle={{ background:"white", border:"1px solid oklch(0.9 0.02 140)", borderRadius:12, fontSize:12 }}/>
              <Bar dataKey="kg" radius={[8,8,0,0]} fill="oklch(0.55 0.14 152)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><Shield className="h-4 w-4 text-primary"/> Safety checklist</h3>
          <ul className="space-y-2.5 text-sm">
            {["Gloves & vest", "Sanitizer station", "First-aid kit", "Truck inspection log", "Hazardous bin tag"].map((s, i) => (
              <li key={s} className="flex items-center gap-2.5">
                <span className={`grid h-5 w-5 place-items-center rounded-md ${i < 4 ? "bg-primary text-primary-foreground" : "border border-border"}`}>
                  {i < 4 && <CheckCircle2 className="h-3 w-3" />}
                </span>
                <span className={i < 4 ? "" : "text-muted-foreground"}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-bold">Pending verifications</h3>
            <span className="text-[11px] glass-card px-2 py-1 text-primary font-semibold inline-flex items-center gap-1"><Bot className="h-3 w-3"/> AI category suggested</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-2">Barcode</th><th>AI Category</th><th>Weight</th><th>Action</th>
              </tr></thead>
              <tbody>
                {collections.slice(0,5).map((c, i) => (
                  <tr key={c.id} className={`border-t border-border ${i%2 ? "bg-secondary/30" : ""}`}>
                    <td className="py-3 font-mono text-xs font-semibold">{c.id}</td>
                    <td>{c.type}</td>
                    <td>{c.weight} kg</td>
                    <td>
                      <div className="flex gap-1.5">
                        <button className="px-2.5 py-1 rounded-lg gradient-primary text-primary-foreground text-[11px] font-semibold">Verify</button>
                        <button className="px-2.5 py-1 rounded-lg border border-border text-[11px] font-semibold">Reject</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary"/> Driver chat</h3>
          <div className="space-y-2 mb-3">
            <Bubble who="Kasun" me={false} text="Reaching Stop 19 in 5 min." />
            <Bubble who="Sanjeewa" me text="Roger. Bags ready." />
            <Bubble who="Kasun" me={false} text="Need help with the e-waste bin." />
          </div>
          <div className="flex gap-2">
            <input className="flex-1 h-10 rounded-xl bg-secondary px-3 text-sm outline-none" placeholder="Message Kasun…" />
            <button className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Bubble({ who, text, me }: { who: string; text: string; me?: boolean }) {
  return (
    <div className={`flex ${me ? "justify-end" : ""}`}>
      <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs ${me ? "gradient-primary text-primary-foreground" : "bg-secondary"}`}>
        <div className="text-[10px] font-bold opacity-70 mb-0.5">{who}</div>
        {text}
      </div>
    </div>
  );
}
