import React from "react";
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
}

export function ToastAlert({
  className,
  variant = "info",
  title,
  message,
  ...props
}: ToastAlertProps) {
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-indigo-400 shrink-0" />
  };

  const borderStyles = {
    success: "border-emerald-500/30 bg-emerald-950/30",
    error: "border-rose-500/30 bg-rose-950/30",
    warning: "border-amber-500/30 bg-amber-950/30",
    info: "border-indigo-500/30 bg-indigo-950/30"
  };

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4 shadow-lg backdrop-blur-sm",
        borderStyles[variant],
        className
      )}
      {...props}
    >
      {icons[variant]}
      <div className="space-y-0.5">
        {title && <h4 className="text-sm font-semibold text-slate-100">{title}</h4>}
        <p className="text-xs text-slate-300 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
