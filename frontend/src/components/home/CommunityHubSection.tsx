import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, GraduationCap } from "lucide-react";

const notices = [
  { title: "First Semester Examination", href: "/about" },
  { title: "About Mobile Phones", href: "/about" },
];

const events = [
  { month: "Sep", day: "20", title: "Parents-Teachers Meeting-1" },
  { month: "Nov", day: "15", title: "Parents-Teachers Meeting-2" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-8 w-1 shrink-0 rounded-full bg-primary" />
      <h3 className="font-serif text-base font-bold uppercase tracking-wide text-primary sm:text-lg">
        {children}
      </h3>
    </div>
  );
}

function AlumniCollage() {
  const tiles = [
    "from-primary/80 to-primary-dark",
    "from-accent/90 to-accent/70",
    "from-primary-light/90 to-primary",
    "from-primary/70 to-accent/80",
    "from-accent/80 to-primary-light/90",
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

export function CommunityHubSection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(128,0,0,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
            <CalendarDays className="h-3.5 w-3.5" />
            School Life
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            A Community Parents Trust
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Stay informed, stay involved, and see the lasting success of a Playpen education —
            the kind of environment every family deserves for their child.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Notices */}
          <article className="group flex flex-col rounded-2xl border border-border/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg sm:rounded-3xl sm:p-6">
            <SectionTitle>Notice &amp; Announcement</SectionTitle>

            <ul className="mt-5 flex-1 space-y-3">
              {notices.map((notice) => (
                <li key={notice.title}>
                  <Link
                    href={notice.href}
                    className="flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition hover:border-border hover:bg-muted/50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Bell className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="pt-1.5 text-xs font-semibold uppercase leading-snug tracking-wide text-foreground sm:text-sm">
                      {notice.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="playpen-text mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5"
            >
              View More Notices
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* Events */}
          <article className="group flex flex-col rounded-2xl border border-border/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg sm:rounded-3xl sm:p-6">
            <SectionTitle>Upcoming Events</SectionTitle>

            <ul className="mt-5 flex-1 space-y-3">
              {events.map((event) => (
                <li
                  key={event.title}
                  className="flex items-center gap-3 rounded-xl border border-transparent p-2.5 transition hover:border-border hover:bg-muted/50"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-accent text-white shadow-sm">
                    <span className="text-[10px] font-bold uppercase leading-none opacity-90">
                      {event.month}
                    </span>
                    <span className="mt-0.5 font-serif text-lg font-bold leading-none">
                      {event.day}
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase leading-snug tracking-wide text-foreground sm:text-sm">
                    {event.title}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/student-life"
              className="playpen-text mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5"
            >
              View More Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* Alumni */}
          <article className="group flex flex-col rounded-2xl border border-border/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg md:col-span-2 lg:col-span-1 sm:rounded-3xl sm:p-6">
            <SectionTitle>Alumni</SectionTitle>

            <div className="mt-5 flex flex-1 flex-col">
              <AlumniCollage />

              <p className="mt-5 text-center text-sm leading-relaxed text-muted-foreground sm:text-left">
                Playpen wishes to connect with students who have excelled in their respective
                fields — proof of the foundation we build for every child who walks through our
                doors.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/admissions"
                  className="playpen-bg inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
                >
                  Register Now!
                </Link>
                <Link
                  href="/about"
                  className="playpen-text inline-flex items-center justify-center gap-1.5 text-sm font-semibold transition hover:gap-2.5 sm:justify-start"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/5 via-white to-accent/5 p-5 text-center sm:mt-10 sm:rounded-3xl sm:p-6 md:flex md:items-center md:justify-between md:text-left">
          <div className="md:max-w-xl">
            <p className="font-serif text-lg font-bold text-foreground sm:text-xl">
              Ready to give your child the Playpen advantage?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Join a school where excellence, care, and community come together every day.
            </p>
          </div>
          <Link
            href="/admissions"
            className="playpen-bg mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark md:mt-0 md:w-auto"
          >
            Apply for Admission
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
