import { createFileRoute, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { TopBar } from "@/components/TopBar";
import type { Role } from "@/lib/mock";

export const Route = createFileRoute("/_app")({
  component: AppShell,
});

function AppShell() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>("contributor");

  useEffect(() => {
    if (path.startsWith("/driver")) setRole("driver");
    else if (path.startsWith("/collector")) setRole("collector");
    else if (path.startsWith("/admin")) setRole("admin");
    else setRole("contributor");
  }, [path]);

  const handleSetRole = (r: Role) => {
    setRole(r);
    const map: Record<Role, string> = {
      contributor: "/dashboard",
      driver: "/driver",
      collector: "/collector",
      admin: "/admin",
    };
    navigate({ to: map[r] });
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar role={role} setRole={handleSetRole} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar role={role} />
        <main className="flex-1 px-4 lg:px-8 py-6 animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
