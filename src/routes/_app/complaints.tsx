import { createFileRoute } from "@tanstack/react-router";
import { Bot, Camera, Send, MapPin } from "lucide-react";

export const Route = createFileRoute("/_app/complaints")({
  component: Complaints,
});

const items = [
  { id: "C-3128", t: "Overflowing bin · Borella", c: "Reported by Nimal P · resolved by Sanjeewa F", s: "Resolved" },
  { id: "C-3129", t: "Missed pickup · Nugegoda Lane 3", c: "AI flagged route deviation", s: "In review" },
  { id: "C-3130", t: "Illegal dumping · Wellawatte beach", c: "Photo evidence attached", s: "Open" },
];

function Complaints() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">AI Complaint Center</h1>
        <p className="text-sm text-muted-foreground mt-1">Submit issues — our AI categorizes and routes them automatically.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-6">
        <div className="glass-card p-5 space-y-3">
          <h3 className="font-display font-bold flex items-center gap-2"><Bot className="h-4 w-4 text-primary"/> File a complaint</h3>
          <input className="w-full h-11 rounded-xl bg-secondary px-3 text-sm outline-none" placeholder="Subject (e.g. Missed pickup)" />
          <textarea className="w-full min-h-[120px] rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none resize-none" placeholder="Describe the issue. Our AI will tag and prioritize it." />
          <div className="flex gap-3">
            <button className="h-10 px-3 rounded-xl glass-card text-sm font-semibold inline-flex items-center gap-2"><Camera className="h-4 w-4 text-primary"/> Photo</button>
            <button className="h-10 px-3 rounded-xl glass-card text-sm font-semibold inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary"/> Location</button>
            <button className="ml-auto h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold inline-flex items-center gap-2"><Send className="h-4 w-4"/> Submit</button>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-xs text-foreground">
            <strong className="text-primary">AI suggestion:</strong> Add nearby landmark for faster resolution.
          </div>
        </div>

        <div className="space-y-3">
          {items.map((c) => (
            <div key={c.id} className="glass-card p-4 hover-lift">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-primary">#{c.id}</span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.s === "Resolved" ? "bg-primary/15 text-primary" : c.s === "Open" ? "bg-destructive/15 text-destructive" : "bg-warning/20 text-earth"}`}>{c.s}</span>
              </div>
              <div className="font-semibold mt-1.5">{c.t}</div>
              <div className="text-xs text-muted-foreground">{c.c}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
