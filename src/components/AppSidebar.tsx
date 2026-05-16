import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Truck,
  Award,
  Package,
  MessageSquareWarning,
  Bell,
  Settings,
  Map,
  ClipboardList,
  Wrench,
  ScanLine,
  Users,
  BarChart3,
  Trash2,
  Send,
  Shield,
} from "lucide-react";
import { Logo } from "./Logo";
import { ROLES, type Role } from "@/lib/mock";
import { cn } from "@/lib/utils";

const menus: Record<Role, { to: string; label: string; icon: React.ComponentType<{ className?: string }> }[]> = {
  contributor: [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/track-truck", label: "Track Truck", icon: Map },
    { to: "/awards", label: "Awards", icon: Award },
    { to: "/collections", label: "Collections", icon: Package },
    { to: "/complaints", label: "Complaints", icon: MessageSquareWarning },
    { to: "/notifications", label: "Notifications", icon: Bell },
    { to: "/settings", label: "Settings", icon: Settings },
  ],
  driver: [
    { to: "/driver", label: "Dashboard", icon: LayoutDashboard },
    { to: "/track-truck", label: "Routes", icon: Map },
    { to: "/collections", label: "Assigned Collections", icon: ClipboardList },
    { to: "/awards", label: "Vehicle Status", icon: Wrench },
    { to: "/complaints", label: "Messages", icon: MessageSquareWarning },
    { to: "/notifications", label: "Notifications", icon: Bell },
  ],
  collector: [
    { to: "/collector", label: "Dashboard", icon: LayoutDashboard },
    { to: "/collections", label: "Tasks", icon: ClipboardList },
    { to: "/track-truck", label: "Route Progress", icon: Map },
    { to: "/awards", label: "Performance", icon: Award },
    { to: "/complaints", label: "Verification", icon: ScanLine },
    { to: "/notifications", label: "Notifications", icon: Bell },
  ],
  admin: [
    { to: "/admin", label: "Overview", icon: LayoutDashboard },
    { to: "/admin?tab=users", label: "Users", icon: Users },
    { to: "/admin?tab=waste", label: "Waste Types", icon: Trash2 },
    { to: "/track-truck", label: "Live Tracking", icon: Map },
    { to: "/admin?tab=analytics", label: "Analytics", icon: BarChart3 },
    { to: "/admin?tab=broadcast", label: "Broadcast", icon: Send },
    { to: "/admin?tab=audit", label: "Audit Log", icon: Shield },
    { to: "/notifications", label: "Notifications", icon: Bell },
  ],
};

export function AppSidebar({ role, setRole }: { role: Role; setRole: (r: Role) => void }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = menus[role];

  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-64 flex-col gap-2 px-4 py-6 glass-panel rounded-none border-r border-y-0 border-l-0">
      <div className="px-2">
        <Logo />
      </div>

      <nav className="mt-6 flex flex-col gap-1">
        {items.map(({ to, label, icon: Icon }) => {
          const active = path === to.split("?")[0];
          return (
            <Link
              key={to}
              to={to.split("?")[0] as string}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                active
                  ? "gradient-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:translate-x-0.5"
              )}
            >
              <Icon className={cn("h-4 w-4 transition-transform", !active && "group-hover:scale-110")} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto glass-card p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Switch role
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {ROLES.map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className={cn(
                "rounded-lg px-2 py-1.5 text-[11px] font-semibold capitalize transition-all",
                role === r.id
                  ? "gradient-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              )}
            >
              {r.id}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export { Truck, Bell };
