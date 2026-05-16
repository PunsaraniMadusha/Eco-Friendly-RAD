import { createFileRoute } from "@tanstack/react-router";
import { notifications } from "@/lib/mock";
import { Bell, CheckCircle2, Gift, Truck } from "lucide-react";

export const Route = createFileRoute("/_app/notifications")({
  component: Notifications,
});

const iconFor = (t: string) => (t === "success" ? CheckCircle2 : t === "reward" ? Gift : Truck);

function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold flex items-center gap-3"><Bell className="h-7 w-7 text-primary"/> Notifications</h1>
          <p className="text-sm text-muted-foreground mt-1">Pickup updates, rewards, and announcements.</p>
        </div>
        <button className="text-sm font-semibold text-primary hover:underline">Mark all read</button>
      </div>

      <div className="glass-card divide-y divide-border">
        {[...notifications, ...notifications].map((n, i) => {
          const Icon = iconFor(n.type);
          return (
            <div key={i} className="flex gap-4 p-4 hover:bg-secondary/40 transition-colors">
              <span className={`grid h-10 w-10 place-items-center rounded-xl shrink-0 ${n.type === "success" ? "bg-primary/15 text-primary" : n.type === "reward" ? "bg-warning/20 text-earth" : "bg-mint/40 text-foreground"}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="font-semibold text-sm">{n.title}</div>
                <div className="text-xs text-muted-foreground">{n.body}</div>
              </div>
              <div className="text-[11px] text-muted-foreground">{n.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
