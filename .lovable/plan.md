# EcoCycle Lanka — Urban Waste Management UI

A frontend-only, mock-data prototype with eco-friendly glassmorphism design across 5 surfaces.

## Design system (src/styles.css)
- Palette (oklch): forest green primary, mint accent, earthy brown, soft cream background, light gray surfaces, subtle green→mint gradients.
- Glassmorphism utility classes (`.glass-card`), soft shadows, large radii (1rem+).
- Animations: fade-in, float (leaves), ring-progress, slide-in, hover-lift.
- Typography: Plus Jakarta Sans (body) + Sora (display) via Google Fonts.

## Routes (TanStack Start, file-based)
```
src/routes/
  index.tsx                    -> redirect to /login
  login.tsx                    -> split-screen auth (login/signup tabs)
  _app.tsx                     -> sidebar layout shell (Outlet)
  _app/dashboard.tsx           -> Contributor dashboard (Nimal Perera)
  _app/track-truck.tsx         -> Live truck map (mock)
  _app/awards.tsx              -> Badges + leaderboard
  _app/collections.tsx         -> Collection history table
  _app/complaints.tsx          -> AI complaint center
  _app/notifications.tsx
  _app/settings.tsx
  _app/driver.tsx              -> Driver dashboard (Kasun Silva, LK-4521)
  _app/collector.tsx           -> Collector dashboard (Sanjeewa Fernando)
  _app/admin.tsx               -> Admin control panel
```
Role switcher in sidebar footer to jump between Contributor / Driver / Collector / Admin views (since this is a UI prototype with no auth backend).

## Components
- `AppSidebar` — EcoCycle Lanka logo, vertical nav with lucide icons, role-aware menu items, hover/active states.
- `TopBar` — profile (Nimal Perera), notification bell, points pill.
- `GlassCard`, `StatCard`, `ProgressRing` (SVG circular animated), `MiniMap` (stylized SVG map with animated truck dot), `TrendChart` (recharts line), `Leaderboard`, `BadgeGrid`.
- `AuthIllustration` — generated hero illustration + floating animated leaves (CSS).

## Mock data
- All Sri Lankan names, BC10231-style barcodes, LK-#### plates, Colombo/Kandy/Galle routes.
- Recharts for line/area/bar charts.

## Images
- Generate one auth-page eco illustration (`src/assets/auth-hero.jpg`).
- Generate one dashboard hero background (`src/assets/dashboard-hero.jpg`).
- Logo as inline SVG component (no generation needed).

## Out of scope (prototype)
- Real auth, real GPS, real DB. All interactions are visual/mock. No Lovable Cloud needed.

This is a large build — I'll execute it in one pass focused on visual polish and consistency.