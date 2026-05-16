export type Role = "contributor" | "driver" | "collector" | "admin";

export const ROLES: { id: Role; name: string; route: string; profile: string }[] = [
  { id: "contributor", name: "Nimal Perera", route: "/dashboard", profile: "Contributor" },
  { id: "driver", name: "Kasun Silva", route: "/driver", profile: "Driver · Truck LK-4521" },
  { id: "collector", name: "Sanjeewa Fernando", route: "/collector", profile: "Collector" },
  { id: "admin", name: "Admin User", route: "/admin", profile: "System Admin" },
];

export const collections = [
  { id: "BC10231", type: "Recyclable", weight: 4.5, date: "2026-05-10", status: "Verified", points: 90 },
  { id: "BC10232", type: "Organic", weight: 2.0, date: "2026-05-11", status: "Pending", points: 20 },
  { id: "BC10233", type: "E-Waste", weight: 1.2, date: "2026-05-12", status: "Verified", points: 60 },
  { id: "BC10234", type: "Recyclable", weight: 6.8, date: "2026-05-12", status: "Verified", points: 136 },
  { id: "BC10235", type: "Organic", weight: 3.4, date: "2026-05-13", status: "Verified", points: 34 },
  { id: "BC10236", type: "E-Waste", weight: 0.8, date: "2026-05-13", status: "Pending", points: 40 },
];

export const wasteTrend = [
  { m: "Dec", organic: 8, recyclable: 14, ewaste: 2 },
  { m: "Jan", organic: 10, recyclable: 16, ewaste: 3 },
  { m: "Feb", organic: 12, recyclable: 18, ewaste: 4 },
  { m: "Mar", organic: 14, recyclable: 22, ewaste: 5 },
  { m: "Apr", organic: 11, recyclable: 26, ewaste: 6 },
  { m: "May", organic: 16, recyclable: 30, ewaste: 8 },
];

export const leaderboard = [
  { name: "Anushka Jayawardena", pts: 4820, city: "Colombo 05" },
  { name: "Nimal Perera", pts: 2450, city: "Nugegoda" },
  { name: "Tharindu Bandara", pts: 2380, city: "Kandy" },
  { name: "Dilani Senanayake", pts: 2110, city: "Galle" },
  { name: "Ruwan Madushanka", pts: 1990, city: "Negombo" },
];

export const notifications = [
  { title: "Truck arriving in 12 min", body: "LK-4521 is approaching Nugegoda zone B", time: "2m ago", type: "info" },
  { title: "Verified: BC10234", body: "+136 points credited to your wallet", time: "1h ago", type: "success" },
  { title: "Reward unlocked", body: "Free reusable tote at Keells Super", time: "Yesterday", type: "reward" },
  { title: "Complaint resolved", body: "Overflowing bin · Borella reported by you", time: "2d ago", type: "info" },
];

export const wasteTypes = [
  { type: "Organic Waste", pts: 10, status: "Active" },
  { type: "Recyclable Waste", pts: 20, status: "Active" },
  { type: "E-Waste", pts: 50, status: "Active" },
  { type: "Hazardous", pts: 0, status: "Restricted" },
  { type: "Construction Debris", pts: 5, status: "Active" },
];

export const routes = [
  { id: "R-014", area: "Colombo 05 · Havelock", stops: 28, status: "In Progress", eta: "11:40" },
  { id: "R-015", area: "Nugegoda · Stanley Tilakaratne", stops: 22, status: "Scheduled", eta: "13:10" },
  { id: "R-016", area: "Dehiwala · Galle Road", stops: 31, status: "Scheduled", eta: "15:00" },
];
