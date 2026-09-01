import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "neon-cyan" | "neon-pink" | "success" | "warning";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-900/80 text-slate-300 border-slate-700",
    "neon-cyan": "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30 glow-cyan-sm",
    "neon-pink": "bg-[#FF007F]/15 text-[#FF007F] border-[#FF007F]/40 glow-pink-sm",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider border rounded-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
