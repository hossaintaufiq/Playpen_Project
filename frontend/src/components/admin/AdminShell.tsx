"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-[calc(100dvh-64px)] bg-muted/30">
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
        <AdminSidebar currentPath={pathname} />
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
