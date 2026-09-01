"use client";

import { GameCard } from "@/components/game/GameCard";
import { DailyCheckinCard } from "@/components/gamification/DailyCheckinCard";

const FEATURED_GAMES = [
  { slug: "mobile-legends", name: "Mobile Legends: Bang Bang", publisher: "Moonton", isActive: true },
  { slug: "free-fire", name: "Free Fire", publisher: "Garena", isActive: true },
  { slug: "genshin-impact", name: "Genshin Impact", publisher: "HoYoverse", isActive: true },
  { slug: "valorant", name: "Valorant", publisher: "Riot Games", isActive: true },
  { slug: "pubg-mobile", name: "PUBG Mobile", publisher: "Tencent Games", isActive: true },
  { slug: "honkai-star-rail", name: "Honkai: Star Rail", publisher: "HoYoverse", isActive: true },
];

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 space-y-10">
      {/* Banner Gamifikasi */}
      <section>
        <DailyCheckinCard
          streakCount={3}
          hasCheckedInToday={false}
          onCheckin={() => alert("Check-in streak berhasil! +1 Poin.")}
        />
      </section>

      {/* Katalog Game */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Katalog Game Populer</h2>
          <p className="text-xs text-slate-400">Pilih game favoritmu dan top-up instan 24/7</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {FEATURED_GAMES.map((game) => (
            <GameCard key={game.slug} {...game} />
          ))}
        </div>
      </section>
    </div>
  );
}
