"use client";

import Link from "next/link";
import { Zap, Coins, User, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#00F0FF]/15 bg-[#050811]/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* WETRI Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center bg-gradient-to-tr from-[#00F0FF] via-[#7928CA] to-[#FF007F] p-[1.5px] cyber-cut-sm shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="h-full w-full bg-[#050811] flex items-center justify-center cyber-cut-sm">
              <Zap className="h-6 w-6 text-[#00F0FF] fill-[#00F0FF]/30 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black italic tracking-tighter text-white">
              WETRI<span className="text-[#00F0FF] glow-text-cyan">.COM</span>
            </span>
            <span className="text-[9px] font-bold tracking-widest text-[#FF007F] uppercase -mt-1">
              Esports Top-Up & PPOB
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold uppercase tracking-wider text-slate-300">
          <Link href="/" className="hover:text-[#00F0FF] transition-colors flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] glow-cyan-sm"></span>
            Katalog Game
          </Link>
          <Link href="/dashboard/transactions" className="hover:text-[#00F0FF] transition-colors">
            Lacak Pesanan
          </Link>
          <Link href="/dashboard/vouchers" className="hover:text-[#FF007F] transition-colors flex items-center gap-1.5">
            <span className="px-1.5 py-0.2 bg-[#FF007F]/20 text-[#FF007F] border border-[#FF007F]/40 text-[9px]">HOT</span>
            Voucher & Rewards
          </Link>
          <Link href="/admin" className="hover:text-slate-400 text-slate-500 text-[11px]">
            Admin Panel
          </Link>
        </nav>

        {/* User & Gamification Area */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 rounded-md bg-slate-900/90 border border-[#00F0FF]/30 px-3.5 py-1.5 text-xs text-[#00F0FF] font-black glow-cyan-sm">
            <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>0 PTS</span>
          </div>
          <Link href="/dashboard">
            <Button size="sm" variant="outline" className="gap-2 border-[#00F0FF]/50 text-[#00F0FF]">
              <User className="w-3.5 h-3.5" />
              <span>Login Gmail</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
