import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 py-8 mt-20 text-slate-400 text-xs">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-slate-300">Gaming Top-Up & PPOB Platform</span>
        </div>
        <p>&copy; 2026 TOPUP PPOB. All rights reserved.</p>
      </div>
    </footer>
  );
}
