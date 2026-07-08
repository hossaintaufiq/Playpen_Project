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
    "/portal/admin/dashboard/notices": data.notices.filter((notice) => notice.published).length,
    "/portal/admin/dashboard/events": data.schoolEvents.filter((event) => event.published).length,
    "/portal/admin/dashboard/gallery": data.galleryEvents.length,
    "/portal/admin/dashboard/teachers": data.teachers.filter((teacher) => teacher.published).length,
    "/portal/admin/dashboard/vacancies": publishedVacancies,
    "/portal/admin/dashboard/achievements": data.studentAchievements.filter((item) => item.published)
      .length,
    "/portal/admin/dashboard/alumni": pendingAlumni,
  };

  return (
    <div>
      <AdminPageHeader
        title="Welcome to your website manager"
        description="Everything you need to keep the Playpen website up to date is right here. Tap a section below, make your changes, and press Save — it's that simple."
        steps={[
          "Choose what you want to update from the cards or the menu on the left.",
          "Edit the text, photos, or settings on that page.",
          "Press Save changes at the bottom — visitors will see updates immediately.",
        ]}
      />

      {highlights.length > 0 && (
        <div className="mb-6 space-y-2">
          {highlights.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm transition sm:rounded-3xl sm:px-5 ${
                item.tone === "amber"
                  ? "border-amber-200 bg-amber-50 text-amber-900 hover:border-amber-300"
                  : "border-border/60 bg-white text-foreground hover:border-primary/20"
              }`}
            >
              <span className="font-medium">{item.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0 opacity-60" />
            </Link>
          ))}
        </div>
      )}

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {adminManageItems.map((item) => {
          const Icon = icons[item.icon];
          const count = counts[item.href] ?? 0;
          const countLabel =
            item.href === "/portal/admin/dashboard/alumni"
              ? count > 0
                ? `${count} pending`
                : "All reviewed"
              : item.href === "/portal/admin/dashboard/announcements"
                ? count > 0
                  ? "Ticker ON"
                  : "Ticker OFF"
                : `${count} live`;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md sm:rounded-3xl sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                  {countLabel}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                {item.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <p className="mt-3 text-xs font-medium text-primary/70">{item.whereOnSite}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Open section
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <AdminCard title="Three simple steps">
          <ol className="space-y-3">
            {[
              "Pick a section from the menu or cards above.",
              "Change text, photos, or switch items ON/OFF.",
              "Press Save changes — the website updates instantly.",
            ].map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </AdminCard>

        <AdminCard title="Last saved">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-[#8a6f1a]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {new Date(data.updatedAt).toLocaleString()}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every time you save, the public Playpen website is updated right away. No waiting, no
                extra steps.
              </p>
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminHelpBox
        title="Need help?"
        steps={[
          "Each page has a yellow guide box at the top explaining exactly what to do.",
          "Use the maroon menu on the left to jump between sections anytime.",
          "Press View live website at the bottom of the menu to check how changes look.",
        ]}
        className="mt-6"
      />
    </div>
  );
}
