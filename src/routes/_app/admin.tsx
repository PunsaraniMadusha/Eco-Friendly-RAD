import { createFileRoute } from "@tanstack/react-router";
import { Users, Truck, ClipboardCheck, AlertCircle, Recycle, Gift, Send, Shield, Activity, Brain, Database, Flame } from "lucide-react";
import { MiniMap } from "@/components/MiniMap";
import { wasteTrend, wasteTypes, leaderboard } from "@/lib/mock";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, RadialBarChart, RadialBar, Legend } from "recharts";

export const Route = createFileRoute("/_app/admin")({
  component: AdminDashboard,
});

const radial = [
  { name: "Colombo", value: 88, fill: "oklch(0.55 0.14 152)" },
  { name: "Kandy", value: 72, fill: "oklch(0.78 0.16 150)" },
  { name: "Galle", value: 64, fill: "oklch(0.55 0.07 60)" },
  { name: "Jaffna", value: 48, fill: "oklch(0.78 0.15 75)" },
];

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-6 grid lg:grid-cols-[1fr_auto] gap-6 items-center gradient-soft">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">System Admin</div>
          <h1 className="font-display text-3xl font-bold mt-1">Control Center · <span className="text-gradient">EcoCycle Lanka</span></h1>
          <p className="text-sm text-muted-foreground mt-1">Real-time operational health across all districts</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 h-10 rounded-2xl glass-card text-sm font-semibold hover-lift inline-flex items-center gap-2"><Database className="h-4 w-4 text-primary"/> Backup</button>
          <button className="px-4 h-10 rounded-2xl gradient-primary text-primary-foreground text-sm font-semibold inline-flex items-center gap-2"><Send className="h-4 w-4"/> Broadcast</button>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-6 gap-3">
        {[
          { i: Users, l: "Total users", v: "12,840" },
          { i: Truck, l: "Active drivers", v: "184" },
          { i: ClipboardCheck, l: "Pickups today", v: "1,206" },
          { i: AlertCircle, l: "Verified complaints", v: "94" },
          { i: Recycle, l: "Monthly waste", v: "284 t" },
          { i: Gift, l: "Reward redemptions", v: "1.2k" },
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
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-display font-bold flex items-center gap-2"><Brain className="h-4 w-4 text-primary"/> AI waste prediction</h3>
              <p className="text-xs text-muted-foreground">Forecast vs actual · last 6 months (tons)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={wasteTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.02 140)" />
              <XAxis dataKey="m" stroke="oklch(0.5 0.03 150)" fontSize={11}/>
              <YAxis stroke="oklch(0.5 0.03 150)" fontSize={11}/>
              <Tooltip contentStyle={{ background:"white", border:"1px solid oklch(0.9 0.02 140)", borderRadius:12, fontSize:12 }}/>
              <Line type="monotone" dataKey="recyclable" stroke="oklch(0.55 0.14 152)" strokeWidth={3} dot={{ r:4 }}/>
              <Line type="monotone" dataKey="organic" stroke="oklch(0.78 0.16 150)" strokeWidth={3} dot={{ r:4 }}/>
              <Line type="monotone" dataKey="ewaste" stroke="oklch(0.55 0.07 60)" strokeWidth={2.5} strokeDasharray="5 5" dot={{ r:3 }}/>
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-display font-bold flex items-center gap-2"><Flame className="h-4 w-4 text-destructive"/> High-waste districts</h3>
          <ResponsiveContainer width="100%" height={240}>
            <RadialBarChart innerRadius="30%" outerRadius="100%" data={radial} startAngle={90} endAngle={-270}>
              <RadialBar background dataKey="value" cornerRadius={8} />
              <Legend iconSize={8} layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize:11 }}/>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 lg:col-span-2">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><Recycle className="h-4 w-4 text-primary"/> Waste type management</h3>
          <table className="w-full text-sm">
            <thead><tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <th className="py-2">Type</th><th>Pts/kg</th><th>Status</th><th className="text-right">Action</th>
            </tr></thead>
            <tbody>
              {wasteTypes.map((w, i) => (
                <tr key={w.type} className={`border-t border-border ${i%2 ? "bg-secondary/30" : ""}`}>
                  <td className="py-3 font-semibold">{w.type}</td>
                  <td className="text-primary font-bold">{w.pts}</td>
                  <td><span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${w.status === "Active" ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"}`}>{w.status}</span></td>
                  <td className="text-right">
                    <div className="inline-flex gap-1.5">
                      <button className="px-2.5 py-1 rounded-lg border border-border text-[11px] font-semibold">Edit</button>
                      <button className="px-2.5 py-1 rounded-lg border border-border text-[11px] font-semibold">{w.status === "Active" ? "Restrict" : "Allow"}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><Activity className="h-4 w-4 text-primary"/> Live tracking</h3>
          <MiniMap height={220} />
          <div className="grid grid-cols-3 gap-2 mt-3 text-center">
            <Mini v="184" l="Trucks"/>
            <Mini v="92%" l="On route"/>
            <Mini v="3" l="Alerts"/>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><Shield className="h-4 w-4 text-primary"/> Audit log</h3>
          <ul className="space-y-2.5 text-xs">
            {[
              { t: "Admin updated reward tier", who: "admin@ecocycle.lk", time: "10:42" },
              { t: "Driver Kasun signed in", who: "kasun.s", time: "06:01" },
              { t: "Complaint #C-3128 resolved", who: "sanjeewa.f", time: "Yesterday" },
              { t: "Waste type 'Hazardous' restricted", who: "admin@ecocycle.lk", time: "2d ago" },
            ].map((a) => (
              <li key={a.t} className="border-b border-border/60 pb-2 last:border-0">
                <div className="font-semibold text-sm">{a.t}</div>
                <div className="text-muted-foreground text-[11px]">{a.who} · {a.time}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><AlertCircle className="h-4 w-4 text-warning"/> Fraud alerts</h3>
          <ul className="space-y-3 text-sm">
            <li className="rounded-xl bg-warning/15 p-3">
              <div className="font-semibold">Duplicate barcode pattern</div>
              <div className="text-xs text-muted-foreground">User #4821 · 6 scans / 2 min</div>
            </li>
            <li className="rounded-xl bg-destructive/10 p-3">
              <div className="font-semibold">Weight anomaly</div>
              <div className="text-xs text-muted-foreground">BC10498 · reported 22kg vs avg 4kg</div>
            </li>
          </ul>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-display font-bold mb-3">Top contributors</h3>
          <ul className="space-y-2">
            {leaderboard.map((u, i) => (
              <li key={u.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary text-[11px] font-bold">{i+1}</span>
                  {u.name}
                </span>
                <span className="font-bold text-primary">{u.pts}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function Mini({ v, l }: { v: string; l: string }) {
  return (
    <div className="rounded-xl bg-secondary/60 py-2">
      <div className="font-display font-bold text-primary">{v}</div>
      <div className="text-[10px] text-muted-foreground">{l}</div>
    </div>
  );
}
