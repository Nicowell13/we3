"use client";

import { Flame, CheckCircle, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface DailyCheckinCardProps {
  streakCount: number;
  hasCheckedInToday: boolean;
  onCheckin: () => void;
  isLoading?: boolean;
}

export function DailyCheckinCard({
  streakCount,
  hasCheckedInToday,
  onCheckin,
  isLoading = false,
}: DailyCheckinCardProps) {
  const days = [1, 2, 3, 4, 5];

  return (
    <Card className="p-6 relative overflow-hidden border-[#00F0FF]/30 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-[#00F0FF]/5 backdrop-blur-xl">
      {/* Background Accent Lights */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#FF007F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FF007F]/20 border border-[#FF007F]/40 cyber-cut-sm glow-pink-sm">
              <Flame className="w-5 h-5 text-[#FF007F] fill-[#FF007F]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-white uppercase tracking-wider">
                  Daily Check-in Streak
                </h3>
                <Badge variant="neon-pink">5 Hari = Bonus +5 PTS</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Klaim reward harianmu setiap hari dan raih bonus poin ekstra untuk diskon top-up.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onCheckin}
          disabled={hasCheckedInToday || isLoading}
          variant={hasCheckedInToday ? "outline" : "cyber"}
          size="md"
          className="shrink-0"
        >
          {hasCheckedInToday ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Sudah Check-In Hari Ini</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-[#00F0FF]" />
              <span>Klaim Streak Hari {streakCount + 1}</span>
            </>
          )}
        </Button>
      </div>

      {/* Streak Track Grid */}
      <div className="relative z-10 grid grid-cols-5 gap-3 mt-6">
        {days.map((day) => {
          const isCompleted = streakCount >= day;
          const isCurrent = streakCount + 1 === day && !hasCheckedInToday;

          return (
            <div
              key={day}
              className={`cyber-cut-sm p-3.5 flex flex-col items-center justify-center text-center transition-all ${
                isCompleted
                  ? "bg-[#00F0FF]/15 border border-[#00F0FF] text-[#00F0FF] glow-cyan-sm"
                  : isCurrent
                  ? "bg-[#FF007F]/15 border border-[#FF007F] text-[#FF007F] glow-pink-sm animate-pulse"
                  : "bg-slate-950/60 border border-slate-800 text-slate-500"
              }`}
            >
              <span className="text-[11px] font-black uppercase tracking-wider">Day {day}</span>
              <span className="text-xs font-extrabold mt-1">
                {day === 5 ? "🔥 +5 PTS" : "+1 PTS"}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
