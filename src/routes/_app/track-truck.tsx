import { createFileRoute } from "@tanstack/react-router";
import { MiniMap } from "@/components/MiniMap";
import { Truck, Clock, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/_app/track-truck")({
  component: TrackTruck,
});

function TrackTruck() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">Track Truck</h1>
        <p className="text-sm text-muted-foreground mt-1">Live position of trucks operating in your zone.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="glass-card p-4">
          <MiniMap height={520} />
        </div>
        <div className="space-y-4">
          {[
            { id: "LK-4521", driver: "Kasun Silva", area: "Nugegoda", eta: "12 min" },
            { id: "LK-4538", driver: "Pradeep Wickrama", area: "Dehiwala", eta: "26 min" },
            { id: "LK-4612", driver: "Roshan Gunasekera", area: "Mt. Lavinia", eta: "44 min" },
          ].map((t) => (
            <div key={t.id} className="glass-card p-4 hover-lift">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground"><Truck className="h-4 w-4"/></span>
                <div>
                  <div className="font-display font-bold">{t.id}</div>
                  <div className="text-xs text-muted-foreground">{t.driver}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-3.5 w-3.5"/>{t.area}</div>
                <div className="flex items-center gap-2 text-primary font-semibold"><Clock className="h-3.5 w-3.5"/>ETA {t.eta}</div>
              </div>
              <button className="mt-3 w-full h-9 rounded-xl glass-card text-xs font-semibold flex items-center justify-center gap-1.5"><Phone className="h-3.5 w-3.5 text-primary"/> Contact driver</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
