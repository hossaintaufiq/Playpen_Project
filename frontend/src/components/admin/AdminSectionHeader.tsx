"use client";

import { usePathname } from "next/navigation";
import { AdminPageHeader } from "@/components/admin/AdminUI";
import { getAdminNavItem } from "@/lib/admin-nav";

export function AdminSectionHeader({
  title,
  description,
  whereOnSite,
  steps,
}: {
  title?: string;
  description?: string;
  whereOnSite?: string;
  steps?: string[];
}) {
  const pathname = usePathname();
  const meta = getAdminNavItem(pathname);

  return (
    <AdminPageHeader
      title={title ?? meta?.label ?? "Admin"}
      description={description ?? meta?.description ?? "Manage website content."}
      whereOnSite={whereOnSite ?? meta?.whereOnSite}
      steps={steps ?? meta?.steps}
    />
  );
}
