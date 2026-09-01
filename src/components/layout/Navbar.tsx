import Link from "next/link";
import { Gamepad2, Coins, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-md shadow-indigo-500/20">
            <Gamepad2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            TOPUP<span className="text-indigo-400">PPOB</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition-colors">Katalog Game</Link>
          <Link href="/dashboard/transactions" className="hover:text-indigo-400 transition-colors">Lacak Pesanan</Link>
          <Link href="/dashboard/vouchers" className="hover:text-indigo-400 transition-colors">Voucher & Rewards</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-amber-300 font-semibold">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span>0 Pts</span>
          </div>
          <Link href="/dashboard">
            <Button size="sm" variant="outline" className="gap-2">
              <User className="w-4 h-4" />
              <span>Masuk</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
