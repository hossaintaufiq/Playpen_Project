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
  Sparkles,
  FileText,
  Calendar,
} from "lucide-react";
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
          className="rounded-2xl border border-border/80 bg-white/95 px-4 py-5 text-center shadow-md backdrop-blur-md sm:rounded-3xl sm:px-5 sm:py-6"
        >
          <p className="font-extrabold text-2xl sm:text-3xl text-primary">{stat.value}</p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
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
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 ${
        large ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-muted ${
          large ? "aspect-[16/10] lg:aspect-auto lg:min-h-full lg:w-[45%]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={section.image}
          alt={section.label}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-md">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${large ? "lg:p-8" : ""}`}>
        <p className="text-xs font-bold uppercase tracking-wider text-accent">
          {section.description}
        </p>
        <h3
          className={`mt-1 font-extrabold text-foreground group-hover:text-primary transition-colors ${
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
            <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-medium">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="line-clamp-2">{item}</span>
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition group-hover:gap-2.5">
          <span>Explore details</span>
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
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>{admissionsMission.eyebrow}</span>
              </div>
              <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.12] tracking-tight text-foreground">
                {admissionsMission.title}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {admissionsMission.description}
              </p>
              <div className="mt-6 rounded-2xl bg-surface border-l-4 border-primary p-5 sm:p-6 shadow-sm">
                <p className="text-sm sm:text-base font-semibold text-foreground/90 leading-relaxed">
                  {admissionsSummary}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
                >
                  <span>Start Online Application</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/admissions/admission-procedure"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-foreground shadow-sm transition hover:bg-surface"
                >
                  <FileText className="h-4 w-4 text-primary" />
                  <span>Admission Guidelines</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10">
                <Image
                  src="/images/schools/elementary.webp"
                  alt="Playpen students joining the school family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                    Join Our Community
                  </span>
                  <p className="font-extrabold text-xl sm:text-2xl">
                    Admissions Open for Playgroup through A-Level
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

      {photoPreview ? (
        <SectionPhotoPreview
          title={photoPreview.title}
          href={photoPreview.href}
          images={photoPreview.images}
        />
      ) : null}

      {/* 5 Steps Admissions Roadmap */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Step-by-Step Pathway"
            title="The Playpen Admissions Journey"
            description="Our admissions process is designed to be clear, transparent, and supportive for parents at every stage."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {admissionsJourneySteps.map((step, index) => (
              <article
                key={step.title}
                className="relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white font-extrabold text-sm mb-4 shadow-sm">
                    0{index + 1}
                  </div>
                  <h3 className="font-extrabold text-lg text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Admissions Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Why Choose Playpen"
          title="Nurturing Excellence in Every Learner"
          description="A balanced environment where character, creativity, and academic ambition go hand in hand."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionsPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm transition duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary font-extrabold text-sm mb-4">
                0{index + 1}
              </div>
              <h3 className="font-extrabold text-xl text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Exploration Grid */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Admissions Resources"
            title="Explore Procedures, Uniform &amp; Code of Conduct"
            description="Important information on age criteria, admission tests, required documents, fee schedules, and student guidelines."
          />

          <div className="mt-12">
            <SectionPreviewCard section={featured} large />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {otherSections.map((section) => (
              <SectionPreviewCard key={section.href} section={section} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
