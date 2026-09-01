import { AdminSidebar } from "@/components/layout/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-slate-800 px-8 flex items-center justify-between bg-slate-900/40">
          <h1 className="text-base font-semibold text-slate-200">Admin Control Center</h1>
          <div className="text-xs text-slate-400">Environment: Production / Flag Sync Active</div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
