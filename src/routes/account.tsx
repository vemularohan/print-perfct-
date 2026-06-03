import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, FolderOpen, Palette, Heart, MapPin, User, LogOut } from "lucide-react";
import { GradientPlaceholder } from "@/components/ui/gradient-placeholder";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account — PrintPerfect" },
      { name: "description", content: "View orders, saved projects, addresses and account settings." },
      { property: "og:title", content: "My Account — PrintPerfect" },
      { property: "og:description", content: "Your PrintPerfect dashboard." },
    ],
  }),
  component: AccountPage,
});

const NAV = [
  { key: "orders", label: "My Orders", Icon: ShoppingBag },
  { key: "projects", label: "My Projects", Icon: FolderOpen },
  { key: "designs", label: "My Designs", Icon: Palette },
  { key: "favourites", label: "Favourites", Icon: Heart },
  { key: "addresses", label: "Addresses", Icon: MapPin },
  { key: "profile", label: "Profile Settings", Icon: User },
  { key: "logout", label: "Logout", Icon: LogOut },
] as const;

const ORDERS = [
  { id: "VP-10238", date: "28 May 2026", items: "100 × Standard Visiting Cards", total: 200, status: "Delivered" as const },
  { id: "VP-10211", date: "14 May 2026", items: "25 × Polo T-Shirts", total: 13725, status: "Shipped" as const },
  { id: "VP-10197", date: "02 May 2026", items: "1 × Self Inking Stamp", total: 399, status: "Processing" as const },
  { id: "VP-10142", date: "20 Apr 2026", items: "6 × Photo Mugs", total: 1494, status: "Delivered" as const },
];

const STATUS_STYLES = {
  Delivered: "bg-success/15 text-success",
  Shipped: "bg-primary/10 text-primary",
  Processing: "bg-yellow-100 text-yellow-800",
} as const;

function AccountPage() {
  const [tab, setTab] = useState<(typeof NAV)[number]["key"]>("orders");

  return (
    <div className="container-page py-10 grid lg:grid-cols-[240px_1fr] gap-8">
      <aside>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="p-5 border-b border-border">
            <p className="text-sm text-muted-foreground">Signed in as</p>
            <p className="font-semibold">Priya Sharma</p>
          </div>
          <nav className="p-2">
            {NAV.map(({ key, label, Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-left transition-colors ${
                  tab === key ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <div>
        {tab === "orders" ? (
          <>
            <h1 className="mb-6">My Orders</h1>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-surface text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="text-left p-4">Order ID</th>
                    <th className="text-left p-4">Date</th>
                    <th className="text-left p-4">Items</th>
                    <th className="text-left p-4">Total</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-right p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ORDERS.map((o) => (
                    <tr key={o.id} className="border-t border-border">
                      <td className="p-4 font-mono">{o.id}</td>
                      <td className="p-4 text-muted-foreground">{o.date}</td>
                      <td className="p-4">{o.items}</td>
                      <td className="p-4 font-medium">₹{o.total.toLocaleString("en-IN")}</td>
                      <td className="p-4">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[o.status]}`}>{o.status}</span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-primary text-xs font-semibold hover:underline">Reorder</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}

        {tab === "projects" || tab === "designs" || tab === "favourites" ? (
          <>
            <h1 className="mb-6">{NAV.find((n) => n.key === tab)?.label}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {["Bakery cards", "Summer banner", "Team polo"].map((n) => (
                <div key={n} className="rounded-xl border border-border bg-card overflow-hidden">
                  <GradientPlaceholder name={n} ratio="4-5" label="" />
                  <div className="p-3">
                    <p className="font-medium text-sm">{n}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Last edited 2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {tab === "addresses" ? (
          <>
            <h1 className="mb-6">Addresses</h1>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-semibold mb-1">Home</p>
              <p className="text-sm text-muted-foreground">42, Marine Drive, Mumbai, MH 400002, India</p>
              <button className="mt-4 text-primary text-sm font-semibold hover:underline">+ Add new address</button>
            </div>
          </>
        ) : null}

        {tab === "profile" ? (
          <>
            <h1 className="mb-6">Profile Settings</h1>
            <form className="rounded-xl border border-border bg-card p-6 space-y-4 max-w-xl">
              {[
                { label: "Name", value: "Priya Sharma" },
                { label: "Email", value: "priya@example.com" },
                { label: "Phone", value: "+91 98765 43210" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-sm font-medium mb-1.5 block">{f.label}</label>
                  <input defaultValue={f.value} className="w-full border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
              ))}
              <button type="button" className="bg-primary text-primary-foreground rounded-md px-5 py-2.5 font-semibold hover:bg-primary/90">Save changes</button>
            </form>
          </>
        ) : null}

        {tab === "logout" ? (
          <>
            <h1 className="mb-3">Sign out</h1>
            <p className="text-muted-foreground mb-6">You will be returned to the home page.</p>
            <button className="bg-destructive text-destructive-foreground rounded-md px-5 py-2.5 font-semibold">Sign out</button>
          </>
        ) : null}
      </div>
    </div>
  );
}
