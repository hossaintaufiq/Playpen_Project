"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  CalendarDays,
  ArrowRight,
  Sparkles,
  FileText,
  MapPin,
  CreditCard,
  Bus,
  ShieldCheck,
  Radio,
  Clock,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import type { Notice, SchoolEvent } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";

type CommunityHubSectionProps = {
  notices?: Notice[];
  events?: SchoolEvent[];
};

const communityPortals = [
  {
    title: "Parent & Student Portal",
    desc: "Academic progress, attendance, and homework bulletins.",
    href: "/portal/parent-student",
    icon: ShieldCheck,
    badge: "Secure Access",
    color: "from-primary/10 to-primary/5 text-primary border-primary/20",
  },
  {
    title: "School Transportation",
    desc: "Safe, AC shuttle fleet covering major Dhaka routes.",
    href: "/student-life/school-transportation",
    icon: Bus,
    badge: "GPS Monitored",
    color: "from-amber-500/10 to-amber-500/5 text-amber-700 border-amber-500/20",
  },
  {
    title: "Online Payment Gateway",
    desc: "Hassle-free online tuition and examination fee payment.",
    href: "/student-life/online-facility-and-payment",
    icon: CreditCard,
    badge: "Instant & Safe",
    color: "from-blue-600/10 to-blue-600/5 text-blue-700 border-blue-600/20",
  },
  {
    title: "Admissions Helpdesk",
    desc: "Book a campus tour and consult academic counselors.",
    href: "/admissions/apply",
    icon: Sparkles,
    badge: "Join Playpen",
    color: "from-rose-600/10 to-rose-600/5 text-rose-700 border-rose-600/20",
  },
];

export function CommunityHubSection({
  notices = defaultCMSData.notices,
  events = defaultCMSData.schoolEvents,
}: CommunityHubSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "notices" | "events">("all");

  const publishedNotices = notices.filter((n) => n.published !== false);
  const publishedEvents = events.filter((e) => e.published !== false);
  const featuredNotice = publishedNotices[0] ?? null;
  const standardNotices = publishedNotices.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24 lg:py-28 border-y border-border/60">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Community Pulse</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
            CAMPUS BULLETINS &amp; <br className="hidden sm:inline" />
            <span className="text-primary">COMMUNITY HAPPENINGS.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Stay up to date with official administrative notices, upcoming calendar dates, parent-teacher conferences, and essential campus resources.
          </p>
        </div>

        {/* Main Content Grid: Notices on Left, Events on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Circulars & Notices (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Column Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/70">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/15">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-foreground">
                      Official Circulars
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Latest academic guidelines &amp; bulletins
                    </p>
                  </div>
                </div>

                <Link
                  href="/notices"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary transition hover:text-primary-dark hover:gap-1.5"
                >
                  <span>All Notices ({publishedNotices.length})</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Featured / Hero Notice Card */}
              {featuredNotice && (
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-primary-dark p-6 sm:p-7 text-white shadow-md mb-4 transition-all duration-300 hover:shadow-xl">
                  <div className="pointer-events-none absolute -right-6 -bottom-6 h-36 w-36 rounded-full bg-white/10 blur-xl" />

                  <div className="relative flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-xs px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-300 border border-white/15">
                      <Radio className="h-3 w-3 animate-pulse" />
                      Priority Circular
                    </span>
                    <span className="text-xs font-medium text-white/80">
                      {featuredNotice.createdAt || "Current Session"}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug">
                    {featuredNotice.title}
                  </h4>

                  {featuredNotice.description && (
                    <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-2">
                      {featuredNotice.description}
                    </p>
                  )}

                  <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
                    <Link
                      href={featuredNotice.href || "/notices"}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-primary shadow-xs transition hover:bg-amber-100"
                    >
                      <span>Read Full Notice</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <span className="text-[11px] font-medium text-white/70">
                      Playpen Administration
                    </span>
                  </div>
                </div>
              )}

              {/* Additional Notices Feed */}
              <div className="space-y-3">
                {standardNotices.map((notice) => (
                  <Link
                    key={notice.id}
                    href={notice.href || "/notices"}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-border/80 bg-white p-4.5 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-accent-hover">
                          {notice.createdAt || "Notice"}
                        </span>
                      </div>
                      <h5 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug truncate">
                        {notice.title}
                      </h5>
                      {notice.description && (
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-1 leading-relaxed">
                          {notice.description}
                        </p>
                      )}
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-surface border border-border/70 text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary mt-0.5">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Upcoming Events & Open House (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Column Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/70">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent-hover border border-accent/20">
                    <CalendarDays className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-foreground">
                      Upcoming Events
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Mark your academic calendar
                    </p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary transition hover:text-primary-dark hover:gap-1.5"
                >
                  <span>Calendar</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Events Cards */}
              <div className="space-y-3.5">
                {publishedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 rounded-2xl border border-border/80 bg-white p-4.5 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/30"
                  >
                    {/* Prestigious Date Stamp Badge */}
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-white shadow-xs border border-primary/20">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 leading-none">
                        {event.month}
                      </span>
                      <span className="text-xl font-black leading-tight mt-0.5 tracking-tight">
                        {event.day}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-sm sm:text-base text-foreground leading-snug">
                        {event.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 text-accent shrink-0" />
                        <span className="truncate">Main Campus Auditorium / Online</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Admissions Open House Callout Card */}
                <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent-soft via-white to-amber-50/40 p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-accent-hover mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">
                      Admissions Open House
                    </span>
                  </div>
                  <h4 className="font-extrabold text-base sm:text-lg text-foreground tracking-tight">
                    Visit Our 10-Storey Bashundhara Campus
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Guided school tours, laboratory walk-throughs, and one-on-one counselor sessions every Saturday.
                  </p>
                  <div className="mt-4 pt-3.5 border-t border-accent/20 flex items-center justify-between">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition hover:text-primary-dark hover:gap-2"
                    >
                      <span>Plan Your Campus Visit</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      9:00 AM – 1:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Community Gateways Bento Bar */}
        <div className="mt-14 pt-10 border-t border-border/70">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl text-foreground tracking-tight">
                Essential Community Portals
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Quick digital access for parents, students, and prospective families
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {communityPortals.map((portal) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={portal.title}
                  href={portal.href}
                  className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${portal.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-surface px-2 py-0.5 rounded-md border border-border/60">
                        {portal.badge}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                      {portal.title}
                    </h4>

                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {portal.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-primary">
                    <span>Access Portal</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
