import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, Sparkles, Megaphone, FileText } from "lucide-react";
import type { Notice, SchoolEvent } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";

type CommunityHubSectionProps = {
  notices?: Notice[];
  events?: SchoolEvent[];
};

export function CommunityHubSection({
  notices = defaultCMSData.notices,
  events = defaultCMSData.schoolEvents,
}: CommunityHubSectionProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24 lg:py-28 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
            <Megaphone className="h-3.5 w-3.5 text-accent" />
            <span>Community Pulse</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
            NOTICES &amp; HAPPENINGS. <br />
            <span className="text-primary">STAY CONNECTED.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Important circulars, semester schedules, parent-teacher meetings, and campus events to keep our community well-informed.
          </p>
        </div>

        {/* 2 Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official Notices & Announcements (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 sm:p-8 shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-foreground">Official Notices</h3>
                    <p className="text-xs text-muted-foreground">Recent circulars &amp; academic bulletins</p>
                  </div>
                </div>

                <Link
                  href="/notices"
                  className="text-xs font-bold text-primary hover:text-primary-dark transition"
                >
                  View All ({notices.length})
                </Link>
              </div>

              <div className="space-y-4">
                {notices.map((notice) => (
                  <Link
                    key={notice.id}
                    href={notice.href}
                    className="group block rounded-2xl border border-border/60 bg-surface p-4.5 transition-all duration-200 hover:border-primary/30 hover:bg-primary-soft hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                          {notice.createdAt ?? "Academic Update"}
                        </span>
                        <h4 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                          {notice.title}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {notice.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-primary group-hover:translate-x-1 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <Link
                href="/notices"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary transition hover:gap-3"
              >
                <span>Browse all school notices &amp; policies</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Upcoming School Events (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 sm:p-8 shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent-hover">
                    <CalendarDays className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-foreground">Upcoming Events</h3>
                    <p className="text-xs text-muted-foreground">Mark your academic calendar</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface p-4 transition-all hover:border-primary/20"
                  >
                    {/* Date badge */}
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent leading-none">
                        {event.month}
                      </span>
                      <span className="text-lg font-extrabold leading-tight mt-0.5">
                        {event.day}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold text-sm sm:text-base text-foreground leading-snug">
                        {event.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Playpen Main Campus Auditorium / Online
                      </p>
                    </div>
                  </div>
                ))}

                {/* Additional Event Highlight Card */}
                <div className="rounded-2xl border border-accent/20 bg-accent-soft p-4.5">
                  <div className="flex items-center gap-2 text-accent-hover mb-1">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Admissions Open House</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    Campus tour &amp; interaction session every working Saturday.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary transition hover:gap-3"
              >
                <span>View full academic schedule</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
