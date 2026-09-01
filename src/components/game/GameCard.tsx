import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Zap } from "lucide-react";

export interface GameCardProps {
  slug: string;
  name: string;
  publisher?: string;
  iconUrl?: string;
  isActive?: boolean;
  isPopular?: boolean;
}

export function GameCard({
  slug,
  name,
  publisher = "Official Publisher",
  iconUrl,
  isActive = true,
  isPopular = false,
}: GameCardProps) {
  return (
    <Link href={isActive ? `/order/${slug}` : "#"} className="block group">
      <Card
        hoverable
        className="p-4 flex flex-col items-center text-center relative overflow-hidden bg-slate-900/60 border-slate-800/80 group-hover:border-[#00F0FF]/80 group-hover:glow-cyan-sm transition-all duration-300"
      >
        {/* Top Badges */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 z-10">
          {!isActive && <Badge variant="neon-pink">Offline</Badge>}
          {isPopular && isActive && <Badge variant="neon-cyan">POPULAR</Badge>}
        </div>

        {/* Thumbnail Box */}
        <div className="relative w-20 h-20 mb-3.5 mt-1 cyber-cut-sm bg-gradient-to-tr from-slate-950 to-slate-900 border border-slate-700/60 group-hover:border-[#00F0FF]/60 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
          {iconUrl ? (
            <img src={iconUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Zap className="w-6 h-6 text-[#00F0FF]/40 group-hover:text-[#00F0FF] transition-colors" />
              <span className="text-xs font-black text-slate-400 mt-1">{name.slice(0, 3).toUpperCase()}</span>
            </div>
          )}
        </div>

        {/* Title & Info */}
        <h3 className="font-extrabold text-xs text-slate-100 group-hover:text-[#00F0FF] transition-colors line-clamp-1 uppercase tracking-tight">
          {name}
        </h3>
        <p className="text-[10px] font-medium text-slate-400 mt-0.5">{publisher}</p>
        
        {/* Instant Process Bar */}
        <div className="w-full mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-center gap-1 text-[10px] text-slate-400 group-hover:text-[#00F0FF]/90 font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Proses Instan</span>
        </div>
      </Card>
    </Link>
  );
}
