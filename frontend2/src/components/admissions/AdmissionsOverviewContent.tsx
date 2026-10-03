import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import type { GalleryImage } from "@/lib/gallery-data";
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
      {admissionsStats.map((stat, i) => (
        <div
          key={stat.label}
          className="brutal-border bg-white p-4 text-center brutal-shadow-sm"
        >
          <p className="font-mono text-2xl sm:text-3xl font-black text-[#6b0c26]">{stat.value}</p>
          <p className="mt-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#121212]/70">
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
      className={`group relative flex h-full flex-col overflow-hidden brutal-border bg-white brutal-shadow transition-transform hover:-translate-y-1 ${
        large ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#121212] ${
          large ? "aspect-[16/10] lg:aspect-auto lg:min-h-full lg:w-[45%]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={section.image}
          alt={section.label}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-[#121212] text-white border-2 border-white">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${large ? "lg:p-8" : ""}`}>
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b0c26]">
          {section.description}
        </p>
        <h3
          className={`mt-1 font-serif font-black text-[#121212] group-hover:text-[#6b0c26] transition-colors ${
            large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {section.label}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#121212]/80 line-clamp-3">
          {section.excerpt}
        </p>

        <ul className="mt-4 flex-1 space-y-2 border-t border-[#121212]/15 pt-3">
          {section.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#121212] font-medium">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#d97706]" />
              <span className="line-clamp-2">{item}</span>
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#6b0c26] group-hover:gap-3 transition-all">
          <span>Read dossier</span>
          <ArrowRight className="h-3.5 w-3.5" />
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
      <section className="relative overflow-hidden bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-b-2 border-[#121212]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#6b0c26] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                <span>{admissionsMission.eyebrow}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-[#121212]">
                {admissionsMission.title}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#121212]/80">
                {admissionsMission.description}
              </p>
              <div className="mt-6 brutal-border bg-white p-5 sm:p-6 brutal-shadow-sm border-l-8 border-l-[#6b0c26]">
                <p className="font-serif text-sm sm:text-base font-bold text-[#121212] leading-relaxed">
                  {admissionsSummary}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/admissions/apply"
                  className="brutal-btn inline-flex items-center gap-2 bg-[#6b0c26] text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#121212]"
                >
                  <span>Start Online Application</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/admissions/admission-procedure"
                  className="brutal-btn inline-flex items-center gap-2 bg-white text-[#121212] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#faf7f2]"
                >
                  <FileText className="h-4 w-4 text-[#6b0c26]" />
                  <span>Admission Guidelines</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden brutal-border bg-[#121212] brutal-shadow">
                <Image
                  src="/images/schools/elementary.webp"
                  alt="Playpen students joining the school family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-[#d97706] mb-1">
                    Join Our Community
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-bold">
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
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b-2 border-[#121212]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="02 // Step-by-Step Pathway"
            title="The Playpen Admissions Journey"
            description="Our admissions process is designed to be clear, transparent, and supportive for parents at every stage."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {admissionsJourneySteps.map((step, index) => (
              <article
                key={step.title}
                className="relative flex flex-col justify-between brutal-border bg-[#faf7f2] p-6 brutal-shadow-sm transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center bg-[#6b0c26] text-white font-mono font-black text-sm mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#121212]">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#121212]/80">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Admissions Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="03 // Why Choose Playpen"
          title="Nurturing Excellence in Every Learner"
          description="A balanced environment where character, creativity, and academic ambition go hand in hand."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionsPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="brutal-border bg-white p-6 sm:p-7 brutal-shadow transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white font-mono font-black text-sm mb-4">
                0{index + 1}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#121212]">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#121212]/80">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Exploration Grid */}
      <section className="bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-t-2 border-[#121212]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="04 // Admissions Resources"
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

