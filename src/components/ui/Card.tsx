import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ className, hoverable = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-slate-900/60 border border-slate-800 p-5 shadow-sm backdrop-blur-sm",
        hoverable && "transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
