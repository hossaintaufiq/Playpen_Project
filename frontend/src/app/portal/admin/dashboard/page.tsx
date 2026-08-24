"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Briefcase,
  Calendar,
  GraduationCap,
  ImageIcon,
  Images,
  Megaphone,
  Sparkles,
  Trophy,
  Users,
  AlertCircle,
  FileCheck,
} from "lucide-react";
import { AdminCard, AdminHelpBox, AdminLoading, AdminPageHeader } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { adminManageItems } from "@/lib/admin-nav";
import type { AdminNavIcon } from "@/lib/admin-nav";

const icons: Record<AdminNavIcon, typeof ImageIcon> = {
  layout: ImageIcon,
  image: ImageIcon,
  megaphone: Megaphone,
  bell: Bell,
  calendar: Calendar,
  gallery: Images,
  users: Users,
  briefcase: Briefcase,
  trophy: Trophy,
  graduation: GraduationCap,
};

export default function AdminDashboardPage() {
  const { data, loading } = useAdminCMS();

  if (loading || !data) {
    return <AdminLoading />;
  }

  const pendingAlumni = data.alumniRequests.filter((request) => request.status === "pending").length;
  const publishedVacancies = data.vacancies.filter((vacancy) => vacancy.published).length;
  const activeHeroSlides = data.heroSlides.filter((slide) => slide.active).length;
  const activeNotices = data.notices.filter((notice) => notice.published).length;
  const activeEvents = data.schoolEvents.filter((event) => event.published).length;

  const highlights = [
    pendingAlumni > 0 && {
      label: `${pendingAlumni} alumni registration${pendingAlumni === 1 ? "" : "s"} waiting for review`,
      href: "/portal/admin/dashboard/alumni",
      tone: "amber" as const,
    },
    publishedVacancies === 0 && {
      label: "No job vacancies are live on the website",
      href: "/portal/admin/dashboard/vacancies",
      tone: "muted" as const,
    },
    activeHeroSlides === 0 && {
      label: "No hero slides are active on the home page",
      href: "/portal/admin/dashboard/hero",
      tone: "muted" as const,
    },
  ].filter(Boolean) as { label: string; href: string; tone: "amber" | "muted" }[];

  const counts: Record<string, number> = {
    "/portal/admin/dashboard/hero": activeHeroSlides,
    "/portal/admin/dashboard/announcements": data.newsTicker.enabled ? 1 : 0,
    "/portal/admin/dashboard/notices": activeNotices,
    "/portal/admin/dashboard/events": activeEvents,
    "/portal/admin/dashboard/gallery": data.galleryEvents.length,
    "/portal/admin/dashboard/teachers": data.teachers.filter((teacher) => teacher.published).length,
    "/portal/admin/dashboard/vacancies": publishedVacancies,
    "/portal/admin/dashboard/achievements": data.studentAchievements.filter((item) => item.published)
      .length,
    "/portal/admin/dashboard/alumni": pendingAlumni,
  };

  // Modern overview statistics logic
  const statsOverview = [
    { label: "Active Notices", value: activeNotices, icon: Bell, color: "text-blue-600 bg-blue-50" },
    { label: "Active Events", value: activeEvents, icon: Calendar, color: "text-emerald-600 bg-emerald-50" },
    { label: "Pending Alumni", value: pendingAlumni, icon: GraduationCap, color: pendingAlumni > 0 ? "text-amber-600 bg-amber-50" : "text-slate-500 bg-slate-50" },
  ];

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Welcome to your website manager"
        description="Everything you need to keep the Playpen website up to date is right here. Tap a section below, make your changes, and press Publish — it's that simple."
      />

      {/* Metrics Bar */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {statsOverview.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.color}`}>
                <Icon className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                <p className="mt-0.5 text-2xl font-bold tracking-tight text-foreground">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {highlights.length > 0 && (
        <div className="space-y-3">
          {highlights.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-sm transition-all duration-300 sm:rounded-3xl ${
                item.tone === "amber"
                  ? "border-amber-200 bg-amber-50/70 text-amber-900 shadow-sm hover:border-amber-300 hover:bg-amber-50 hover:scale-[1.005]"
                  : "border-slate-100 bg-white text-foreground hover:border-primary/10 hover:scale-[1.005]"
              }`}
            >
              <span className="flex items-center gap-2.5 font-semibold">
                <AlertCircle className={`h-4.5 w-4.5 shrink-0 ${item.tone === "amber" ? "text-amber-600" : "text-slate-400"}`} />
                {item.label}
              </span>
              <ArrowRight className="h-4.5 w-4.5 shrink-0 opacity-60 transition-transform hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      )}

      {/* Admin Operations Grid */}
      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground/75">
          Select Content Section
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {adminManageItems.map((item) => {
            const Icon = icons[item.icon];
            const count = counts[item.href] ?? 0;
            
            // Styled count labels
            let countLabel = "";
            let badgeStyle = "text-slate-600 bg-slate-100";
            
            if (item.href === "/portal/admin/dashboard/alumni") {
              if (count > 0) {
                countLabel = `${count} pending`;
                badgeStyle = "text-amber-700 bg-amber-50 font-bold border border-amber-200/50";
              } else {
                countLabel = "Reviewed";
                badgeStyle = "text-emerald-700 bg-emerald-50 border border-emerald-200/50";
              }
            } else if (item.href === "/portal/admin/dashboard/announcements") {
              if (count > 0) {
                countLabel = "Live";
                badgeStyle = "text-emerald-700 bg-emerald-50 font-bold border border-emerald-200/50";
              } else {
                countLabel = "Disabled";
                badgeStyle = "text-slate-500 bg-slate-50";
              }
            } else {
              countLabel = count > 0 ? `${count} Live` : "No items";
              badgeStyle = count > 0 ? "text-primary bg-primary/5 font-semibold border border-primary/10" : "text-slate-500 bg-slate-50";
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(128,0,0,0.04)] sm:rounded-3xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(128,0,0,0.2)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${badgeStyle}`}>
                      {countLabel}
                    </span>
                  </div>
                  
                  <h4 className="mt-5 font-serif text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {item.label}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80 font-medium">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 group-hover:text-primary/70 transition-colors">
                    {item.whereOnSite}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:underline">
                    Edit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Guide Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminCard title="Administration Steps">
          <ol className="space-y-4">
            {[
              "Pick a content area from the cards or sidebar navigation menu.",
              "Adjust text content, upload links, or edit visual elements.",
              "Click Publish changes at the bottom to update the live website immediately.",
            ].map((step, index) => (
              <li key={step} className="flex gap-4 text-sm leading-relaxed text-foreground/90 font-medium">
                <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-serif text-xs font-bold">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </AdminCard>

        <AdminCard title="Save status">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-[#8a6f1a]">
              <Sparkles className="h-5.5 w-5.5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                Last Updated
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {new Date(data.updatedAt).toLocaleString()}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80 font-medium">
                Whenever changes are published, Next.js rebuilds the public caches automatically. Updates are visible instantly to visitors.
              </p>
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminHelpBox
        title="Admin Help Desk"
        steps={[
          "Each edit page contains step-by-step guidance indicators at the top.",
          "Use the sidebar to navigate to specific sections instantly.",
          "Select View live website from the navigation menu footer to preview changes.",
        ]}
      />
    </div>
  );
}
