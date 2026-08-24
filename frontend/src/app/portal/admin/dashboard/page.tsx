"use client";

import { useEffect, useState } from "react";
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
  Trophy,
  Users,
  AlertCircle,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { AdminCard, AdminLoading, AdminPageHeader } from "@/components/admin/AdminUI";
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
  book: BookOpen,
};

export default function AdminDashboardPage() {
  const { data, loading } = useAdminCMS();
  const [pendingAdmissions, setPendingAdmissions] = useState(0);
  const [loadingAdmissions, setLoadingAdmissions] = useState(true);

  useEffect(() => {
    async function fetchAdmissions() {
      try {
        const res = await fetch("/api/admin/admissions");
        if (res.ok) {
          const apps = await res.json();
          const pending = apps.filter((app: any) => app.status === "pending").length;
          setPendingAdmissions(pending);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingAdmissions(false);
      }
    }
    fetchAdmissions();
  }, []);

  if (loading || !data) {
    return <AdminLoading />;
  }

  const pendingAlumni = data.alumniRequests.filter((request) => request.status === "pending").length;
  const publishedVacancies = data.vacancies.filter((vacancy) => vacancy.published).length;
  const activeHeroSlides = data.heroSlides.filter((slide) => slide.active).length;
  const activeNotices = data.notices.filter((notice) => notice.published).length;
  const activeEvents = data.schoolEvents.filter((event) => event.published).length;

  const highlights = [
    pendingAdmissions > 0 && {
      label: `${pendingAdmissions} admission application${pendingAdmissions === 1 ? "" : "s"} waiting for review`,
      href: "/portal/admin/dashboard/admissions",
      tone: "amber" as const,
    },
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
    "/portal/admin/dashboard/admissions": pendingAdmissions,
    "/portal/admin/dashboard/vacancies": publishedVacancies,
    "/portal/admin/dashboard/achievements": data.studentAchievements.filter((item) => item.published).length,
    "/portal/admin/dashboard/alumni": pendingAlumni,
  };

  const statsOverview = [
    { label: "Active Notices", value: activeNotices, icon: Bell, color: "text-primary bg-primary/5" },
    { label: "Active Events", value: activeEvents, icon: Calendar, color: "text-emerald-700 bg-emerald-50" },
    { label: "Pending Alumni", value: pendingAlumni, icon: GraduationCap, color: pendingAlumni > 0 ? "text-amber-700 bg-amber-50" : "text-slate-500 bg-slate-50" },
    { label: "Pending Admissions", value: pendingAdmissions, icon: BookOpen, color: pendingAdmissions > 0 ? "text-amber-700 bg-amber-50" : "text-slate-500 bg-slate-50" },
  ];

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Website Manager"
        description="Select a section below to update news, slides, notices, and details. Changes publish immediately."
      />

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {statsOverview.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_1px_4px_rgba(0,0,0,0.005)]">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${stat.color}`}>
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground truncate">{stat.label}</p>
                <p className="text-lg font-bold leading-none mt-0.5 text-foreground">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {highlights.length > 0 && (
        <div className="space-y-2">
          {highlights.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-xs transition-all duration-300 ${
                item.tone === "amber"
                  ? "border-amber-200 bg-amber-50/50 text-amber-900 shadow-sm hover:border-amber-300 hover:bg-amber-50"
                  : "border-slate-100 bg-white text-foreground hover:border-primary/10"
              }`}
            >
              <span className="flex items-center gap-2 font-bold">
                <AlertCircle className={`h-4 w-4 shrink-0 ${item.tone === "amber" ? "text-amber-600" : "text-slate-400"}`} />
                {item.label}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 opacity-60" />
            </Link>
          ))}
        </div>
      )}

      {/* Section Grid */}
      <div>
        <h3 className="mb-3 text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground/75">
          Select Content Section
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {adminManageItems.map((item) => {
            const Icon = icons[item.icon];
            const count = counts[item.href] ?? 0;
            
            let countLabel = "";
            let badgeStyle = "text-slate-600 bg-slate-50";
            
            if (item.href === "/portal/admin/dashboard/alumni" || item.href === "/portal/admin/dashboard/admissions") {
              if (count > 0) {
                countLabel = `${count} pending`;
                badgeStyle = "text-amber-700 bg-amber-50/70 border border-amber-200/30";
              } else {
                countLabel = "Reviewed";
                badgeStyle = "text-emerald-700 bg-emerald-50 border border-emerald-100/50";
              }
            } else if (item.href === "/portal/admin/dashboard/announcements") {
              if (count > 0) {
                countLabel = "Active";
                badgeStyle = "text-emerald-700 bg-emerald-50 border border-emerald-100/50";
              } else {
                countLabel = "Off";
                badgeStyle = "text-slate-400 bg-slate-50";
              }
            } else {
              countLabel = count > 0 ? `${count} Live` : "No items";
              badgeStyle = count > 0 ? "text-primary bg-primary/5 border border-primary/10" : "text-slate-400 bg-slate-50";
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-4.5 shadow-[0_1px_4px_rgba(0,0,0,0.005)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_4px_16px_rgba(128,0,0,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.04] text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${badgeStyle}`}>
                      {countLabel}
                    </span>
                  </div>
                  
                  <h4 className="mt-4 font-serif text-sm font-bold text-primary group-hover:underline">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-xs leading-normal text-muted-foreground/80 font-medium">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/50">
                    {item.whereOnSite}
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-xs font-bold text-primary">
                    Edit
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Simple Status & Footer Summary */}
      <AdminCard>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-[#8a6f1a]">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Last Site Update</p>
              <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                {new Date(data.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
          <p className="text-xs font-medium text-muted-foreground/85 max-w-md text-right sm:block hidden leading-normal">
            Changes publish immediately. Next.js rebuilds static website pages on-demand.
          </p>
        </div>
      </AdminCard>
    </div>
  );
}
