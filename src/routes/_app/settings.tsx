import { createFileRoute } from "@tanstack/react-router";
import { User, Bell, Globe, Shield, Palette } from "lucide-react";

export const Route = createFileRoute("/_app/settings")({
  component: Settings,
});

function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="font-display text-3xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account, preferences and privacy.</p>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] gap-6">
        <nav className="glass-card p-2 h-fit">
          {[
            { i: User, l: "Profile" },
            { i: Bell, l: "Notifications" },
            { i: Globe, l: "Language" },
            { i: Palette, l: "Appearance" },
            { i: Shield, l: "Privacy" },
          ].map(({ i: Icon, l }, idx) => (
            <button key={l} className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold ${idx === 0 ? "gradient-primary text-primary-foreground" : "hover:bg-secondary"}`}>
              <Icon className="h-4 w-4" /> {l}
            </button>
          ))}
        </nav>

        <div className="glass-card p-6 space-y-5">
          <h3 className="font-display font-bold text-lg">Profile</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Full name" value="Nimal Perera" />
            <Input label="Email" value="nimal@ecocycle.lk" />
            <Input label="Phone" value="+94 77 234 5678" />
            <Input label="District" value="Colombo" />
            <Input label="Address" value="14/3 Stanley Tilakaratne Mw, Nugegoda" className="sm:col-span-2"/>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button className="h-10 px-4 rounded-xl border border-border text-sm font-semibold">Cancel</button>
            <button className="h-10 px-5 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <input defaultValue={value} className="mt-1.5 w-full h-11 rounded-xl bg-secondary px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"/>
    </label>
  );
}
