import { createFileRoute } from "@tanstack/react-router";
import { collections } from "@/lib/mock";
import { Filter, Download, Plus } from "lucide-react";

export const Route = createFileRoute("/_app/collections")({
  component: Collections,
});

function Collections() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">Collections</h1>
          <p className="text-sm text-muted-foreground mt-1">All your verified and pending waste submissions.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-10 px-3 rounded-xl glass-card text-sm font-semibold inline-flex items-center gap-2"><Filter className="h-4 w-4 text-primary"/> Filter</button>
          <button className="h-10 px-3 rounded-xl glass-card text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4 text-primary"/> Export</button>
          <button className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold inline-flex items-center gap-2"><Plus className="h-4 w-4"/> New request</button>
        </div>
      </div>

      <div className="glass-card p-5">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-3">Barcode ID</th>
                <th>Waste Type</th>
                <th>Weight (kg)</th>
                <th>Collection Date</th>
                <th>Status</th>
                <th className="text-right">Points Earned</th>
              </tr>
            </thead>
            <tbody>
              {[...collections, ...collections].map((c, i) => (
                <tr key={i} className={`border-t border-border ${i % 2 ? "bg-secondary/30" : ""}`}>
                  <td className="py-3 font-mono text-xs font-semibold">{c.id}</td>
                  <td>{c.type}</td>
                  <td>{c.weight}</td>
                  <td className="text-muted-foreground">{c.date}</td>
                  <td><span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${c.status === "Verified" ? "bg-primary/15 text-primary" : "bg-warning/20 text-earth"}`}>{c.status}</span></td>
                  <td className="text-right font-bold text-primary">+{c.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
