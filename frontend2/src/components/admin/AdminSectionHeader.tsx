"use client";

import { usePathname } from "next/navigation";
import { AdminPageHeader } from "@/components/admin/AdminUI";
import { getAdminNavItem } from "@/lib/admin-nav";

export function AdminSectionHeader({
  title,
  description,
  whereOnSite,
  saving,
  message,
  error,
  onSave,
}: {
  title?: string;
  description?: string;
  whereOnSite?: string;
  saving?: boolean;
  message?: string | null;
  error?: string | null;
  onSave?: () => void;
}) {
  const pathname = usePathname();
  const meta = getAdminNavItem(pathname);

  return (
    <AdminPageHeader
      title={title ?? meta?.label ?? "Admin"}
      description={description ?? meta?.description ?? "Manage website content."}
      whereOnSite={whereOnSite ?? meta?.whereOnSite}
      saving={saving}
      message={message}
      error={error}
      onSave={onSave}
    />
  );
}
