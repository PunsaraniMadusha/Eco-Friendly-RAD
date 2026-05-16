import { Bell, Search, Coins } from "lucide-react";
import { ROLES, type Role } from "@/lib/mock";

export function TopBar({ role }: { role: Role }) {
  const me = ROLES.find((r) => r.id === role)!;
  const initials = me.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 px-4 lg:px-8 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="hidden md:flex items-center gap-2 glass-card px-3 py-2 flex-1 max-w-md">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search collections, complaints, trucks…"
          className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex-1 md:hidden" />
      <div className="flex items-center gap-2 rounded-full gradient-primary px-3.5 py-1.5 text-primary-foreground shadow-[var(--shadow-soft)]">
        <Coins className="h-4 w-4" />
        <span className="text-sm font-bold">2,450</span>
        <span className="text-[10px] opacity-80 hidden sm:inline">pts</span>
      </div>
      <button className="relative grid h-10 w-10 place-items-center rounded-full glass-card hover-lift">
        <Bell className="h-4 w-4 text-foreground" />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
      </button>
      <div className="flex items-center gap-2.5 glass-card pr-3 pl-1 py-1">
        <div className="grid h-8 w-8 place-items-center rounded-full gradient-primary text-primary-foreground text-xs font-bold">
          {initials}
        </div>
        <div className="hidden sm:block leading-tight">
          <div className="text-xs font-semibold">{me.name}</div>
          <div className="text-[10px] text-muted-foreground">{me.profile}</div>
        </div>
      </div>
    </header>
  );
}
