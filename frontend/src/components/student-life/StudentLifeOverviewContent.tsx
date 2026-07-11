import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import type { GalleryImage } from "@/lib/gallery-data";
import {
  studentLifeMission,
  studentLifeMoments,
  studentLifePillars,
  studentLifeSectionPreviews,
  studentLifeStats,
  studentLifeSummary,
  yearlyActivityCategories,
} from "@/lib/student-life-overview";

function StatStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {studentLifeStats.map((stat) => (
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
  section: (typeof studentLifeSectionPreviews)[number];
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
        {section.image ? (
          <Image
            src={section.image}
            alt={section.label}
            fill
            sizes={large ? "(max-width: 1024px) 100vw, 42vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#5a0000] via-primary to-[#800000]" />
        )}
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
              <span className="line-clamp-2">{item}</span>
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

export function StudentLifeOverviewContent({
  photoPreview,
}: {
  photoPreview?: { title: string; href: string; images: GalleryImage[] } | null;
}) {
  const featured = studentLifeSectionPreviews.find((section) => section.featured)!;
  const otherSections = studentLifeSectionPreviews.filter((section) => !section.featured);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.04),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/60 sm:text-xs">
                {studentLifeMission.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {studentLifeMission.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {studentLifeMission.description}
              </p>
              <blockquote className="mt-6 border-l-2 border-primary/25 pl-5">
                <p className="font-serif text-base font-medium leading-relaxed text-foreground/90 sm:text-lg">
                  {studentLifeMission.quote}
                </p>
              </blockquote>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/student-life/extra-curricular-activities"
                  className="playpen-bg inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Explore activities
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/student-life/annual-sports"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
                >
                  Annual sports
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(128,0,0,0.25)]">
                <Image
                  src="/school-images/student-life/overview/overview-1.webp"
                  alt="Playpen students in extra-curricular activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    <Sparkles className="h-3.5 w-3.5" />
                    Vibrant Campus Life
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold sm:text-2xl">
                    Sport, art, service & discovery
                  </p>
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

      {photoPreview ? (
        <SectionPhotoPreview
          title={photoPreview.title}
          href={photoPreview.href}
          images={photoPreview.images}
        />
      ) : null}

      <section className="bg-muted/30 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What Makes Playpen"
            title="Four pillars of student life on campus"
            description="Competition, creativity, compassion, and daily support — woven into every school year."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {studentLifePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm transition hover:border-primary/15 hover:shadow-md sm:rounded-3xl sm:p-6"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <SectionHeader
          align="left"
          eyebrow="A Year on Campus"
          title="Moments that shape the Playpen experience"
          description="From the first sports practice to graduation — here is how student life unfolds across the calendar."
          className="max-w-3xl"
        />

        <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {studentLifeMoments.map((moment, index) => (
            <li
              key={moment.title}
              className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/[0.08] font-serif text-lg font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{moment.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{moment.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border/60 bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.04] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="School Calendar"
            title="Yearly events that bring our community together"
            description="Cultural programmes, national days, academic milestones, and sporting highlights across every session."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {yearlyActivityCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {category.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <Link
            href="/student-life/cultural-programme"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            View cultural programme
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <SectionHeader
          eyebrow="Explore Student Life"
          title="Programmes, facilities, and services for every pupil"
          description="Browse the sections below — from sports and ECA to health care, bookshop, transport, and online payments."
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

      <section className="border-t border-border/60 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.05] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg lg:aspect-auto lg:min-h-[280px]">
              <Image
                src="/school-images/student-life/overview/overview-6.webp"
                alt="Playpen student services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5a0000]/80 via-[#800000]/40 to-transparent" />
            </div>

            <div className="rounded-3xl border border-primary/20 bg-[#5a0000] p-8 text-white shadow-lg sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                For Parents
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
                Stay connected through our online portal
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Track academic progress, attendance, homework, and events — and pay school fees
                online through EBL, bKash, Nagad, Rocket, and more.
              </p>
              <Link
                href="/student-life/online-facility-and-payment"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
              >
                Online facility & payment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Complete Summary"
            title="Student life at Playpen — at a glance"
            description="A quick reference to everything covered across the Student Life section."
          />

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {studentLifeSummary.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border/50 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
