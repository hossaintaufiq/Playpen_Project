"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";
import { getAdminNavItem } from "@/lib/admin-nav";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const section = getAdminNavItem(pathname);
  const isDashboard = pathname === "/portal/admin/dashboard";

  return (
    <div className="relative min-h-screen bg-[#faf8f8] bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.05),transparent_60%)] lg:h-[calc(100dvh-64px)] lg:overflow-hidden">
      <div className="flex w-full flex-col lg:h-full lg:flex-row">
        <AdminSidebar currentPath={pathname} />
        
        <div className="min-w-0 flex-1 lg:flex lg:h-full lg:flex-col">
          {!isDashboard && section && (
            <div className="border-b border-primary/5 bg-white/70 px-6 py-4 backdrop-blur-md sm:px-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">
                  Website Editor
                </span>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
                    {section.label}
                  </h2>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    Live Updates Enabled
                  </span>
                </div>
              </div>
            </div>
          )}
          <main className="p-5 sm:p-6 lg:flex-1 lg:overflow-y-auto lg:p-8">
            <div className="mx-auto max-w-6xl w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
