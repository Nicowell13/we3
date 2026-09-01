"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Flame, ShieldCheck, Zap, Sparkles, Trophy } from "lucide-react";
import { GameCard } from "@/components/game/GameCard";
import { DailyCheckinCard } from "@/components/gamification/DailyCheckinCard";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const GAMES_DATA = [
  { slug: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", isActive: true },
  { slug: "free-fire", name: "Free Fire Max", publisher: "Garena", isActive: true },
  { slug: "genshin-impact", name: "Genshin Impact", publisher: "HoYoverse", isActive: true },
  { slug: "valorant", name: "Valorant Points", publisher: "Riot Games", isActive: true },
  { slug: "pubg-mobile", name: "PUBG Mobile UC", publisher: "Tencent Games", isActive: true },
  { slug: "honkai-star-rail", name: "Honkai: Star Rail", publisher: "HoYoverse", isActive: true },
  { slug: "arena-of-valor", name: "Arena of Valor", publisher: "Garena", isActive: true },
  { slug: "point-blank", name: "Point Blank Zepetto", publisher: "Zepetto", isActive: true },
  { slug: "ragnarok-origin", name: "Ragnarok Origin", publisher: "Gravity", isActive: true },
  { slug: "call-of-duty-mobile", name: "Call of Duty Mobile", publisher: "Garena", isActive: true },
  { slug: "steam-wallet-idr", name: "Steam Wallet IDR", publisher: "Valve", isActive: true },
  { slug: "roblox", name: "Roblox Robux", publisher: "Roblox Corp", isActive: true },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
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
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Top-Up Game & PPOB Terpercaya #1</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Top-Up Kilat, <span className="text-indigo-400">Bonus Poin</span> Setiap Transaksi.
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Dapatkan +1 Poin tiap Rp1.000, kumpulkan streak kunjungan harian, dan tukar voucher diskon spesial.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Proses Otomatis 24/7</h4>
              <p className="text-xs text-slate-400">Masuk detik ini juga</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Multi-Payment Resmi</h4>
              <p className="text-xs text-slate-400">QRIS, VA & E-Wallet DOKU</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-600/20 text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Loyalty & Gamifikasi</h4>
              <p className="text-xs text-slate-400">Streak visit bonus poin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Check-in Gamification Module */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Gamifikasi & Misi Harian</h2>
          </div>
          <Badge variant="purple">Streak Booster</Badge>
        </div>
        <DailyCheckinCard
          streakCount={streak}
          hasCheckedInToday={hasCheckedIn}
          onCheckin={handleCheckin}
        />
      </section>

      {/* Catalog Search & Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Katalog Top-Up Populer</h2>
            <p className="text-xs text-slate-400">Pilih game atau layanan PPOB yang ingin Anda top-up</p>
          </div>
          <div className="w-full sm:w-72">
            <Input
              placeholder="Cari game atau voucher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-900 border-slate-800"
            />
          </div>
        </div>

        {filteredGames.length === 0 ? (
          <Card className="p-12 text-center text-slate-400">
            <p>Game &ldquo;{search}&rdquo; tidak ditemukan.</p>
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
