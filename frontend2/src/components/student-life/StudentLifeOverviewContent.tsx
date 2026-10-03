import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Trophy,
  Palette,
  Rocket,
  Users,
} from "lucide-react";
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
  section: (typeof studentLifeSectionPreviews)[number];
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
        {section.image ? (
          <Image
            src={section.image}
            alt={section.label}
            fill
            sizes={large ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-[#6b0c26]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
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
          <span>Explore activity</span>
          <ArrowRight className="h-3.5 w-3.5" />
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
      <section className="relative overflow-hidden bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-b-2 border-[#121212]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#d97706] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-[#121212] mb-4">
                <span>{studentLifeMission.eyebrow}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-[#121212]">
                {studentLifeMission.title}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#121212]/80">
                {studentLifeMission.description}
              </p>
              <div className="mt-6 brutal-border bg-white p-5 sm:p-6 brutal-shadow-sm border-l-8 border-l-[#6b0c26]">
                <p className="font-serif text-sm sm:text-base font-bold text-[#121212] leading-relaxed">
                  {studentLifeSummary}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden brutal-border bg-[#121212] brutal-shadow">
                <Image
                  src="/school-images/site-wide/marquee/eca.webp"
                  alt="Playpen students participating in activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-[#d97706] mb-1">
                    Holistic Education
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-bold">
                    Sports, Creative Arts, Leadership &amp; Clubs
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

      {/* Activity Highlights */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b-2 border-[#121212]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="02 // Core Activity Spheres"
            title="Co-Curriculars That Build Lifelong Confidence"
            description="Playpen provides students with structured avenues to compete, create, lead, and serve both on and off campus."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {studentLifePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="brutal-border bg-[#faf7f2] p-6 sm:p-7 brutal-shadow transition-transform hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-[#6b0c26] text-white font-mono font-black text-sm mb-4">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#121212]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#121212]/80">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Exploration Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="03 // Explore Activities &amp; Services"
          title="Student Life Departments, Transport &amp; Amenities"
          description="Everything from annual sports meets and science symposiums to campus medical clinics and school bookshops."
        />

        <div className="mt-12">
          <SectionPreviewCard section={featured} large />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {otherSections.map((section) => (
            <SectionPreviewCard key={section.href} section={section} />
          ))}
        </div>
      </section>
    </>
  );
}

