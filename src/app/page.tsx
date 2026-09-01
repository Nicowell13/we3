"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Flame, ShieldCheck, Zap, Sparkles, Trophy, ArrowRight, Gamepad2, ChevronRight } from "lucide-react";
import { GameCard } from "@/components/game/GameCard";
import { DailyCheckinCard } from "@/components/gamification/DailyCheckinCard";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const GAMES_DATA = [
  { slug: "mobile-legends", name: "Mobile Legends: Bang Bang", publisher: "Moonton", isActive: true, isPopular: true },
  { slug: "free-fire", name: "Free Fire Max", publisher: "Garena", isActive: true, isPopular: true },
  { slug: "genshin-impact", name: "Genshin Impact", publisher: "HoYoverse", isActive: true, isPopular: true },
  { slug: "valorant", name: "Valorant Points", publisher: "Riot Games", isActive: true, isPopular: true },
  { slug: "pubg-mobile", name: "PUBG Mobile UC", publisher: "Tencent Games", isActive: true, isPopular: true },
  { slug: "honkai-star-rail", name: "Honkai: Star Rail", publisher: "HoYoverse", isActive: true, isPopular: false },
  { slug: "arena-of-valor", name: "Arena of Valor", publisher: "Garena", isActive: true, isPopular: false },
  { slug: "point-blank", name: "Point Blank Zepetto", publisher: "Zepetto", isActive: true, isPopular: false },
  { slug: "ragnarok-origin", name: "Ragnarok Origin", publisher: "Gravity", isActive: true, isPopular: false },
  { slug: "call-of-duty-mobile", name: "Call of Duty Mobile", publisher: "Garena", isActive: true, isPopular: false },
  { slug: "steam-wallet-idr", name: "Steam Wallet IDR", publisher: "Valve", isActive: true, isPopular: true },
  { slug: "roblox", name: "Roblox Robux", publisher: "Roblox Corp", isActive: true, isPopular: false },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [streak, setStreak] = useState(3);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);

  const filteredGames = GAMES_DATA.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase()) ||
    game.publisher.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheckin = () => {
    setStreak((prev) => prev + 1);
    setHasCheckedIn(true);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 space-y-12">
      {/* Cyber Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-[#00F0FF]/30 bg-gradient-to-br from-[#050811] via-[#0B0F19] to-[#131b2e] p-8 sm:p-12 shadow-2xl">
        {/* Glow Spheres */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FF007F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 border border-[#00F0FF]/40 bg-[#00F0FF]/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-[#00F0FF] cyber-cut-sm glow-cyan-sm">
              <Sparkles className="w-4 h-4" />
              <span>Official Esports Top-Up Center</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black italic tracking-tighter text-white leading-none uppercase">
              LEVEL UP YOUR GAME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#7928CA] to-[#FF007F] glow-text-cyan">
                INSTANT TOP-UP
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
              Platform top-up game & PPOB resmi dengan kecepatan transaksi instan, sistem poin loyalitas gamifikasi, dan harga termurah se-Indonesia.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#catalog">
                <Button variant="cyber" size="lg" className="gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  <span>Mulai Top-Up Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard/vouchers">
                <Button variant="outline" size="lg">
                  Klaim Voucher Promo
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats Showcase */}
          <div className="grid grid-cols-2 gap-3 shrink-0 lg:w-80">
            <Card className="p-4 border-[#00F0FF]/30 bg-slate-950/80 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">Waktu Proses</p>
              <h4 className="text-xl font-black text-[#00F0FF] glow-text-cyan mt-1">&lt; 3 Detik</h4>
            </Card>
            <Card className="p-4 border-[#FF007F]/30 bg-slate-950/80 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">Gamifikasi</p>
              <h4 className="text-xl font-black text-[#FF007F] glow-text-pink mt-1">+1 Poin/1k</h4>
            </Card>
            <Card className="p-4 border-slate-700 bg-slate-950/80 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">Metode Bayar</p>
              <h4 className="text-base font-black text-slate-200 mt-1">DOKU / QRIS</h4>
            </Card>
            <Card className="p-4 border-slate-700 bg-slate-950/80 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">Layanan</p>
              <h4 className="text-base font-black text-emerald-400 mt-1">24 Jam Nonstop</h4>
            </Card>
          </div>
        </div>

        {/* Feature Icons Row */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] cyber-cut-sm glow-cyan-sm">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">Multi-Supplier Router</h4>
              <p className="text-[11px] text-slate-400">Jalur otomatis anti-delay & gagal</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 cyber-cut-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">Garansi Transaksi 100%</h4>
              <p className="text-[11px] text-slate-400">Idempotency & Audit Trail aman</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FF007F]/15 border border-[#FF007F]/40 text-[#FF007F] cyber-cut-sm glow-pink-sm">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">Rewards & Streak System</h4>
              <p className="text-[11px] text-slate-400">Kumpulkan poin & tukar voucher</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gamification Daily Checkin Module */}
      <section className="space-y-3">
        <DailyCheckinCard
          streakCount={streak}
          hasCheckedInToday={hasCheckedIn}
          onCheckin={handleCheckin}
        />
      </section>

      {/* Game Catalog Section */}
      <section id="catalog" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-black text-[#00F0FF] uppercase tracking-wider">
              <Gamepad2 className="w-4 h-4" />
              <span>Katalog Game Populer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-white tracking-tight mt-1">
              Pilih Game Favorit
            </h2>
          </div>

          <div className="w-full sm:w-80">
            <Input
              placeholder="Cari Game (cth: Mobile Legends, FF)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-950/80 border-[#00F0FF]/30 text-white placeholder:text-slate-500 focus:border-[#00F0FF] focus:ring-[#00F0FF]/30"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {["Semua Game", "Mobile Games", "PC Games", "Voucher Console", "PPOB & Pulsa"].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setCategory(tab)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all cyber-cut-sm whitespace-nowrap ${
                (idx === 0 && category === "all") || category === tab
                  ? "bg-[#00F0FF] text-[#050811] glow-cyan-sm"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Card */}
        {filteredGames.length === 0 ? (
          <Card className="p-12 text-center text-slate-400 border-slate-800">
            <p>Game &ldquo;{search}&rdquo; tidak ditemukan dalam katalog.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredGames.map((game) => (
              <GameCard key={game.slug} {...game} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
