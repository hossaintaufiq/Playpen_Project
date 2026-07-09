import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Notice, SchoolEvent } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";

type CommunityHubSectionProps = {
  notices?: Notice[];
  events?: SchoolEvent[];
};

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary/70">
      {children}
    </h3>
  );
}

function AlumniCollage() {
  const tiles = [
    "from-primary/75 to-primary-dark",
    "from-accent/85 to-accent/65",
    "from-primary-light/85 to-primary",
    "from-primary/65 to-accent/75",
    "from-accent/75 to-primary-light/85",
  ];

  return (
    <div className="relative mx-auto grid h-36 max-w-[220px] grid-cols-3 grid-rows-3 gap-2 sm:h-40 sm:max-w-[260px]">
      {tiles.map((gradient, index) => (
        <div
          key={gradient}
          className={`flex items-center justify-center rounded-lg bg-gradient-to-br shadow-sm ${gradient} ${
            index === 0
              ? "col-start-1 row-start-1 rotate-[-8deg]"
              : index === 1
                ? "col-start-2 row-start-1 rotate-[6deg]"
                : index === 2
                  ? "col-start-3 row-start-2 rotate-[-4deg]"
                  : index === 3
                    ? "col-start-1 row-start-2 rotate-[5deg]"
                    : "col-start-2 row-start-3 rotate-[-6deg]"
          }`}
        >
          <GraduationCap className="h-5 w-5 text-white/90 sm:h-6 sm:w-6" strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
}

export function CommunityHubSection({
  notices = defaultCMSData.notices,
  events = defaultCMSData.schoolEvents,
}: CommunityHubSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(128,0,0,0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Community"
          title="Stay connected with school life"
          description="Notices, events, and alumni stories — everything parents need to feel informed, involved, and reassured."
        />

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article className="group flex flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.06)] transition duration-300 hover:border-primary/15 hover:shadow-[0_8px_30px_-12px_rgba(128,0,0,0.12)] sm:rounded-3xl">
            <CardTitle>Notice &amp; Announcement</CardTitle>

            <ul className="mt-6 flex-1 space-y-2">
              {notices.map((notice) => (
                <li key={notice.id}>
                  <Link
                    href={notice.href}
                    className="flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-muted/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                      <Bell className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="pt-1.5 text-sm font-medium leading-snug text-foreground">
                      {notice.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/notices"
              className="playpen-text mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5"
            >
              View all notices
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="group flex flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.06)] transition duration-300 hover:border-primary/15 hover:shadow-[0_8px_30px_-12px_rgba(128,0,0,0.12)] sm:rounded-3xl">
            <CardTitle>Upcoming Events</CardTitle>

            <ul className="mt-6 flex-1 space-y-2">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-muted/40"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-accent/90 text-white">
                    <span className="text-[10px] font-semibold uppercase leading-none opacity-90">
                      {event.month}
                    </span>
                    <span className="mt-0.5 font-serif text-lg font-semibold leading-none">
                      {event.day}
                    </span>
                  </div>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    {event.title}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/student-life"
              className="playpen-text mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5"
            >
              View more events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="group flex flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.06)] transition duration-300 hover:border-primary/15 hover:shadow-[0_8px_30px_-12px_rgba(128,0,0,0.12)] md:col-span-2 lg:col-span-1 sm:rounded-3xl">
            <CardTitle>Alumni</CardTitle>

            <div className="mt-6 flex flex-1 flex-col">
              <AlumniCollage />

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-left">
                We celebrate graduates who have gone on to excel in their fields —
                a reflection of the foundation built for every child at Playpen.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/admissions"
                  className="playpen-bg inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Register Now
                </Link>
                <Link
                  href="/about/playpen-alumni-association"
                  className="playpen-text inline-flex items-center justify-center gap-1.5 text-sm font-semibold transition hover:gap-2.5 sm:justify-start"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.06] p-6 sm:mt-14 sm:rounded-3xl sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div className="md:max-w-lg">
            <p className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
              Ready to begin your child&apos;s journey?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Take the first step toward a school where excellence feels natural,
              and every child is known by name.
            </p>
          </div>
          <Link
            href="/admissions"
            className="playpen-bg mt-5 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark md:mt-0 md:w-auto"
          >
            Apply for Admission
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
