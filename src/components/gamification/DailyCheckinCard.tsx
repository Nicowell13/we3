"use client";

import { Flame, CheckCircle, Gift } from "lucide-react";
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
    <Card className="p-6 border-indigo-500/30 bg-gradient-to-br from-slate-900 to-indigo-950/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h3 className="text-base font-bold text-slate-100">Daily Visit Streak</h3>
            <Badge variant="purple">Streak: {streakCount} Hari</Badge>
          </div>
          <p className="text-xs text-slate-400">
            Check-in 5 hari berturut-turut untuk mendapatkan reward bonus +5 Poin Gamifikasi!
          </p>
        </div>

        <Button
          onClick={onCheckin}
          disabled={hasCheckedInToday || isLoading}
          variant={hasCheckedInToday ? "outline" : "primary"}
          className="shrink-0"
        >
          {hasCheckedInToday ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Sudah Check-In</span>
            </>
          ) : (
            <>
              <Gift className="w-4 h-4 text-amber-300" />
              <span>Klaim Check-In Hari Ini</span>
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-2.5 mt-6">
        {days.map((day) => {
          const isCompleted = streakCount >= day;
          const isCurrent = streakCount + 1 === day && !hasCheckedInToday;
          return (
            <div
              key={day}
              className={`rounded-xl border p-3 flex flex-col items-center justify-center text-center transition-all ${
                isCompleted
                  ? "bg-indigo-600/20 border-indigo-500/50 text-indigo-300"
                  : isCurrent
                  ? "bg-amber-500/10 border-amber-500/40 text-amber-300 ring-1 ring-amber-500/30"
                  : "bg-slate-900/60 border-slate-800 text-slate-500"
              }`}
            >
              <span className="text-xs font-semibold">Hari {day}</span>
              <span className="text-[10px] mt-1">
                {day === 5 ? "+5 Pts" : "+1 Pts"}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
