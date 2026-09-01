import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cyber" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed uppercase text-xs";

    const variants = {
      primary: "bg-[#00F0FF] hover:bg-[#38f4ff] text-[#050811] glow-cyan font-extrabold cyber-cut-sm active:scale-[0.98]",
      secondary: "bg-[#FF007F] hover:bg-[#ff3399] text-white glow-pink font-extrabold cyber-cut-sm active:scale-[0.98]",
      cyber: "bg-gradient-to-r from-[#00F0FF] via-[#7928CA] to-[#FF007F] text-white hover:brightness-110 shadow-lg shadow-cyan-500/25 cyber-cut-sm active:scale-[0.98]",
      outline: "border border-[#00F0FF]/40 bg-slate-950/60 hover:bg-[#00F0FF]/10 text-[#00F0FF] hover:border-[#00F0FF] cyber-cut-sm",
      danger: "bg-rose-600 hover:bg-rose-500 text-white glow-pink-sm cyber-cut-sm",
      ghost: "hover:bg-slate-800/60 text-slate-300 hover:text-white rounded-md"
    };

    const sizes = {
      sm: "px-3 py-1.5 gap-1.5 text-[11px]",
      md: "px-5 py-2.5 gap-2 text-xs",
      lg: "px-7 py-3.5 gap-2.5 text-sm"
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
