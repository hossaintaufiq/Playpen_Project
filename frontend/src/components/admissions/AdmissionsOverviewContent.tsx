import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import type { GalleryImage } from "@/lib/gallery-data";
import { schoolContact } from "@/lib/contact";
import {
  admissionsJourneySteps,
  admissionsMission,
  admissionsPillars,
  admissionsSectionPreviews,
  admissionsStats,
  admissionsSummary,
} from "@/lib/admissions-overview";

function StatStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {admissionsStats.map((stat) => (
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
  section: (typeof admissionsSectionPreviews)[number];
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
          sizes={large ? "(max-width: 1024px) 100vw, 42vw" : "(max-width: 768px) 100vw, 50vw"}
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

export function AdmissionsOverviewContent({
  photoPreview,
}: {
  photoPreview?: { title: string; href: string; images: GalleryImage[] } | null;
}) {
  const featured = admissionsSectionPreviews.find((section) => section.featured)!;
  const otherSections = admissionsSectionPreviews.filter((section) => !section.featured);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.04),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/60 sm:text-xs">
                {admissionsMission.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {admissionsMission.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {admissionsMission.description}
              </p>
              <blockquote className="mt-6 border-l-2 border-primary/25 pl-5">
                <p className="font-serif text-base font-medium leading-relaxed text-foreground/90 sm:text-lg">
                  {admissionsMission.quote}
                </p>
              </blockquote>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions/apply"
                  className="playpen-bg inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/admissions/admission-procedure"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
                >
                  View procedure
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(128,0,0,0.25)]">
                <Image
                  src="/images/schools/elementary.jpg"
                  alt="Playpen students"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    New Students Welcome
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold sm:text-2xl">
                    Applications when space is available
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
            eyebrow="Your Journey"
            title="Four pillars of the Playpen admission experience"
            description="From your first enquiry to your first day on campus — here is what every family should know."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {admissionsPillars.map((pillar, index) => (
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
          eyebrow="How It Works"
          title="From application to acceptance"
          description="A simplified view of the Playpen admission journey — full details are on the Admission Procedure page."
          className="max-w-3xl"
        />

        <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {admissionsJourneySteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/[0.08] font-serif text-lg font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <SectionHeader
          eyebrow="Explore Admissions"
          title="Everything you need before your child joins Playpen"
          description="Procedure, uniform, conduct, and how to apply — all in one place."
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

      <section className="border-y border-border/60 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.05] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Admissions Office"
                title="We're here to help"
                description="Contact the Front Office or Admission Department for enquiries, forms, and assistance."
                className="max-w-xl"
              />

              <ul className="mt-8 space-y-4">
                <li className="flex gap-3 text-sm text-muted-foreground sm:text-base">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {schoolContact.address.line1}, {schoolContact.address.line2},{" "}
                    {schoolContact.address.line3}
                  </span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={schoolContact.mobileHref} className="text-muted-foreground hover:text-primary">
                    {schoolContact.mobile}
                  </a>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={schoolContact.phoneHref} className="text-muted-foreground hover:text-primary">
                    {schoolContact.phone}
                  </a>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={schoolContact.emailHref}
                    className="break-all text-muted-foreground hover:text-primary"
                  >
                    {schoolContact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-[#5a0000] p-8 text-white shadow-lg sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Ready to begin?
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
                Start your application today
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Apply online for Playgroup – Class IX or A&apos; Level, or download the official
                PDF forms from the Admission Procedure page.
              </p>
              <Link
                href="/admissions/apply"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
              >
                Apply Now
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
            title="Admissions at Playpen — at a glance"
            description="A quick reference to everything covered across the Admissions section."
          />

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
            {admissionsSummary.map((item) => (
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
