import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface GameCardProps {
  slug: string;
  name: string;
  publisher?: string;
  iconUrl?: string;
  isActive?: boolean;
}

export function GameCard({ slug, name, publisher = "Official Publisher", iconUrl, isActive = true }: GameCardProps) {
  return (
    <Link href={isActive ? `/order/${slug}` : "#"} className="block group">
      <Card hoverable className="p-4 flex flex-col items-center text-center relative overflow-hidden">
        {!isActive && (
          <div className="absolute top-2 right-2">
            <Badge variant="danger">Maintenance</Badge>
          </div>
        )}
        <div className="w-20 h-20 rounded-2xl bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform overflow-hidden">
          {iconUrl ? (
            <img src={iconUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl font-bold text-indigo-400">{name.charAt(0)}</span>
          )}
        </div>
        <h3 className="font-semibold text-sm text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">
          {name}
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">{publisher}</p>
      </Card>
    </Link>
  );
}
