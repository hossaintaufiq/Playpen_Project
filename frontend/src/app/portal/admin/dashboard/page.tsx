"use client";

import Link from "next/link";
import { AdminPageHeader, AdminCard } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { adminNavItems } from "@/lib/admin-nav";

export default function AdminDashboardPage() {
  const { data, loading } = useAdminCMS();

  if (loading || !data) {
    return <p className="text-sm text-muted-foreground">Loading dashboard...</p>;
  }

  const stats = [
    { label: "Hero slides", value: data.heroSlides.filter((s) => s.active).length },
    { label: "Notices", value: data.notices.filter((n) => n.published).length },
    { label: "Events", value: data.schoolEvents.filter((e) => e.published).length },
    { label: "Gallery events", value: data.galleryEvents.length },
    { label: "Teachers", value: data.teachers.filter((t) => t.published).length },
    { label: "Open vacancies", value: data.vacancies.filter((v) => v.published).length },
    { label: "Student achievements", value: data.studentAchievements.filter((a) => a.published).length },
    { label: "Pending alumni", value: data.alumniRequests.filter((a) => a.status === "pending").length },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Dashboard"
        description="Manage all Playpen website content from one place — hero images, announcements, gallery, teachers, and alumni."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <AdminCard key={stat.label}>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold text-primary">{stat.value}</p>
          </AdminCard>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <AdminCard title="Quick actions">
          <ul className="space-y-2">
            {adminNavItems.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="playpen-text text-sm font-semibold hover:underline">
                  Manage {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </AdminCard>
        <AdminCard title="Last updated">
          <p className="text-sm text-muted-foreground">
            {new Date(data.updatedAt).toLocaleString()}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Changes you save here update the public website immediately.
          </p>
        </AdminCard>
      </div>
    </div>
  );
}
