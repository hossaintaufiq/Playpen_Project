import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schoolContact } from "@/lib/contact";
import {
  aboutMission,
  aboutPillars,
  aboutSectionPreviews,
  aboutStats,
  schoolDivisions,
  schoolManagement,
} from "@/lib/about-overview";

function StatStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {aboutStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-primary/10 bg-white/80 px-4 py-5 text-center shadow-[0_4px_24px_-12px_rgba(128,0,0,0.12)] backdrop-blur-sm sm:rounded-3xl sm:px-5 sm:py-6"
        >
          <p className="font-serif text-2xl font-semibold text-primary sm:text-3xl">{stat.value}</p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function SectionPreviewCard({
  section,
  large = false,
}: {
  section: (typeof aboutSectionPreviews)[number];
  large?: boolean;
}) {
  const Icon = section.icon;

  return (
    <Link
      href={section.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_-10px_rgba(128,0,0,0.1)] transition duration-300 hover:border-primary/20 hover:shadow-[0_16px_40px_-14px_rgba(128,0,0,0.18)] sm:rounded-3xl ${
        large ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-muted ${
          large ? "aspect-[16/10] lg:aspect-auto lg:min-h-full lg:w-[42%]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={section.image}
          alt={section.label}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 42vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/70 via-[#800000]/10 to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-sm">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${large ? "lg:p-8" : ""}`}>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60">
          {section.description}
        </p>
        <h3
          className={`mt-2 font-serif font-semibold text-foreground ${
            large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {section.label}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {section.excerpt}
        </p>

        <ul className="mt-4 flex-1 space-y-2">
          {section.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <span className="playpen-text mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5">
          Explore section
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function AboutOverviewContent() {
  const featured = aboutSectionPreviews.find((section) => section.featured)!;
  const otherSections = aboutSectionPreviews.filter((section) => !section.featured);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.04),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/60 sm:text-xs">
                {aboutMission.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {aboutMission.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {aboutMission.description}
              </p>
              <blockquote className="mt-6 border-l-2 border-primary/25 pl-5">
                <p className="font-serif text-base font-medium leading-relaxed text-foreground/90 sm:text-lg">
                  {aboutMission.quote}
                </p>
              </blockquote>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(128,0,0,0.25)]">
                <Image
                  src="/images/schools/senior.jpg"
                  alt="Playpen students on campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                      <MapPin className="h-3.5 w-3.5" />
                      Bashundhara, Dhaka
                    </p>
                    <p className="mt-2 font-serif text-xl font-semibold sm:text-2xl">
                      {schoolContact.tagline}
                    </p>
                  </div>
                  <Sparkles className="hidden h-8 w-8 text-accent sm:block" strokeWidth={1.5} />
                </div>
              </div>
              <div className="relative z-10 -mt-8 mx-4 sm:mx-6">
                <StatStrip />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="soft" />

      <section className="bg-muted/30 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Four pillars that guide every Playpen journey"
            description="From the earliest years in playgroup to A-Level graduation, our approach stays rooted in excellence, care, safety, and community."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm transition hover:border-primary/15 hover:shadow-md sm:rounded-3xl sm:p-6"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <SectionHeader
          align="left"
          eyebrow="Our Campus"
          title="Four divisions, one purpose-built home for learning"
          description="Playpen brings together Elementary, Junior, Middle, and Senior School under a single campus designed for academic rigour and student wellbeing."
          className="max-w-3xl"
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {schoolDivisions.map((division) => (
            <article
              key={division.name}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md sm:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={division.image}
                  alt={division.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/80 via-[#5a0000]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    {division.grades}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold">{division.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/about/our-campus"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          Explore campus facilities
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="border-y border-border/60 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.05] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Leadership"
            title="Guided by experienced school management"
            description="Playpen's leadership team brings together governance, academic direction, and divisional supervision to maintain the highest standards of care."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
            {schoolManagement.map((leader) => (
              <article
                key={leader.role}
                className="rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-sm sm:rounded-3xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">
                  {leader.role}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                  {leader.name}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about/school-administration"
              className="playpen-text inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              Meet the full administration team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <SectionHeader
          eyebrow="Explore About Playpen"
          title="Everything you need to know about our school"
          description="Dive deeper into campus life, leadership, safeguarding, alumni connections, and career opportunities — each section tells part of the Playpen story."
        />

        <div className="mt-10 sm:mt-12">
          <SectionPreviewCard section={featured} large />
        </div>

        <div className="mt-5 grid gap-5 sm:mt-6 lg:grid-cols-2">
          {otherSections.map((section) => (
            <SectionPreviewCard key={section.href} section={section} />
          ))}
        </div>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/about/playpen-alumni-association"
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-[#5a0000] p-8 text-white shadow-lg transition hover:shadow-xl sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.2),transparent_55%)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Alumni Association
              </p>
              <h3 className="relative mt-3 font-serif text-2xl font-semibold sm:text-3xl">
                Reconnect with your Playpen family
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/80">
                Register with the alumni association, share your journey, and stay connected with
                batch mates around the world.
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Register as alumni
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/about/career-at-playpen"
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white p-8 shadow-lg transition hover:border-primary/20 hover:shadow-xl sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(128,0,0,0.06),transparent_60%)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/60">
                Careers
              </p>
              <h3 className="relative mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                Build a meaningful career at Playpen
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Join a community of dedicated educators and staff. Browse open vacancies and apply
                online with your CV.
              </p>
              <span className="playpen-text relative mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                View career opportunities
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
