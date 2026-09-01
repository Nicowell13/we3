import Link from "next/link";
import { LayoutDashboard, Receipt, Sliders, Gamepad, LogOut } from "lucide-react";

export function AdminSidebar() {
  const menus = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Katalog & Produk", href: "/admin/catalog", icon: Gamepad },
    { label: "Transaksi & Audit", href: "/admin/transactions", icon: Receipt },
    { label: "System Configs", href: "/admin/configs", icon: Sliders },
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 p-6 flex flex-col justify-between min-h-screen">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
            A
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Admin Panel</h2>
            <p className="text-xs text-slate-400">Gaming Top-Up & PPOB</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menus.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.href}
                href={m.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4 text-slate-400" />
                <span>{m.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-slate-800">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-rose-400 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Keluar ke User Portal</span>
        </Link>
      </div>
    </aside>
  );
}
