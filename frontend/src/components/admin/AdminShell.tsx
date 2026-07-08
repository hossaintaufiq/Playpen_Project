"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";
import { getAdminNavItem } from "@/lib/admin-nav";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const section = getAdminNavItem(pathname);
  const isDashboard = pathname === "/portal/admin/dashboard";

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.04),transparent_50%)] lg:h-[calc(100dvh-64px)] lg:overflow-hidden">
      <div className="flex w-full flex-col lg:h-full lg:flex-row">
        <AdminSidebar currentPath={pathname} />
        <div className="min-w-0 flex-1 lg:flex lg:h-full lg:flex-col">
          {!isDashboard && section && (
            <div className="border-b border-primary/10 bg-white/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/60">
                You are editing
              </p>
              <p className="mt-0.5 font-serif text-lg font-semibold text-foreground">{section.label}</p>
            </div>
          )}
          <main className="p-4 sm:p-6 lg:flex-1 lg:overflow-y-auto lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
