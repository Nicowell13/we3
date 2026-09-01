import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  glow?: "cyan" | "pink" | "none";
}

export function Card({ className, hoverable = false, glow = "none", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "cyber-card cyber-cut rounded-lg p-5",
        hoverable && "hover:border-[#00F0FF]/60 cursor-pointer",
        glow === "cyan" && "border-[#00F0FF]/40 glow-cyan-sm",
        glow === "pink" && "border-[#FF007F]/40 glow-pink-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
