import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Leaf } from "lucide-react";
import { Logo } from "@/components/Logo";
import authHero from "@/assets/auth-hero.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden gradient-soft p-10">
        <div className="relative z-10">
          <Logo />
        </div>

        {/* Floating leaves */}
        {[
          { top: "10%", left: "70%", delay: "0s" },
          { top: "30%", left: "15%", delay: "1.5s" },
          { top: "55%", left: "80%", delay: "0.7s" },
          { top: "75%", left: "25%", delay: "2.2s" },
        ].map((s, i) => (
          <Leaf
            key={i}
            className="absolute text-primary/40 animate-float"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            size={28}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src={authHero}
            alt="Sustainable Sri Lankan city illustration"
            width={520}
            height={650}
            className="w-full max-w-md drop-shadow-xl rounded-3xl"
          />
          <h1 className="mt-6 font-display text-3xl font-bold text-foreground max-w-md">
            Building a Cleaner <span className="text-gradient">Sri Lanka</span> Together
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Smart waste collection, real-time truck tracking, and rewards for every recyclable kilogram.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-3">
          <div className="glass-card p-4">
            <div className="font-display text-2xl font-bold text-gradient">10,000+</div>
            <div className="text-xs text-muted-foreground mt-0.5">Waste Collections</div>
          </div>
          <div className="glass-card p-4">
            <div className="font-display text-2xl font-bold text-gradient">5,000+</div>
            <div className="text-xs text-muted-foreground mt-0.5">Active Contributors</div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col p-6 sm:p-10 lg:p-16">
        <div className="lg:hidden mb-6">
          <Logo />
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full animate-slide-up">
          <h2 className="font-display text-3xl font-bold">Welcome back 🌱</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Sign in to continue your eco journey.
          </p>

          {/* Tabs */}
          <div className="relative mt-8 grid grid-cols-2 rounded-2xl bg-secondary p-1">
            <div
              className={cn(
                "absolute inset-y-1 w-[calc(50%-4px)] rounded-xl gradient-primary transition-transform",
                tab === "signup" && "translate-x-full"
              )}
            />
            {(["login", "signup"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "relative z-10 py-2 text-sm font-semibold capitalize transition-colors",
                  tab === t ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <form
            className="mt-6 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/dashboard" });
            }}
          >
            {tab === "signup" && (
              <Field icon={User} placeholder="Username" />
            )}
            <Field icon={Mail} placeholder="Email address" type="email" />
            <Field
              icon={Lock}
              placeholder="Password"
              type={showPwd ? "text" : "password"}
              right={
                <button type="button" onClick={() => setShowPwd((s) => !s)}>
                  {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />
            {tab === "signup" && (
              <Field icon={Lock} placeholder="Confirm password" type="password" />
            )}

            {tab === "login" && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="accent-primary h-3.5 w-3.5 rounded" />
                  Remember me
                </label>
                <a className="font-semibold text-primary hover:underline">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className="mt-2 h-12 rounded-2xl gradient-primary text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover-lift"
            >
              {tab === "login" ? "Sign in" : "Create account"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-[11px] text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            OR CONTINUE WITH
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <SocialBtn label="Google" />
            <SocialBtn label="Facebook" />
          </div>

          <footer className="mt-10 flex justify-between text-[11px] text-muted-foreground">
            <span>© 2026 EcoCycle Lanka</span>
            <div className="flex gap-3">
              <a className="hover:text-primary">Privacy</a>
              <a className="hover:text-primary">Support</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  right,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ComponentType<{ className?: string }>;
  right?: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-2.5 h-12 rounded-2xl bg-secondary/70 border border-border px-4 focus-within:border-primary focus-within:bg-card transition-colors">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <input
        {...props}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
      {right}
    </label>
  );
}

function SocialBtn({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="h-11 rounded-2xl glass-card text-sm font-semibold hover-lift flex items-center justify-center gap-2"
    >
      <span className="grid h-5 w-5 place-items-center rounded-full gradient-primary text-primary-foreground text-[10px] font-bold">
        {label[0]}
      </span>
      {label}
    </button>
  );
}
