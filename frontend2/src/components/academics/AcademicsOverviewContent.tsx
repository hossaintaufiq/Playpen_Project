import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import type { GalleryImage } from "@/lib/gallery-data";
import {
  academicsMission,
  academicsPillars,
  academicsSectionPreviews,
  academicsStats,
  academicsSummary,
  schoolDivisions,
} from "@/lib/academics-overview";

function StatStrip({ achievementCount }: { achievementCount?: number }) {
  const displayStats =
    achievementCount !== undefined
      ? [
          academicsStats[0],
          academicsStats[1],
          academicsStats[2],
          { value: String(achievementCount), label: "Student Honors" },
        ]
      : academicsStats;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {displayStats.map((stat, idx) => (
        <div
          key={stat.label}
          className="border-2 border-[#121212] bg-[#ffffff] px-4 py-4 text-center shadow-[4px_4px_0px_#121212]"
        >
          <span className="font-mono text-[10px] font-bold text-[#6b0c26] block mb-1">
            0{idx + 1}
          </span>
          <p className="font-mono font-black text-2xl sm:text-3xl text-[#6b0c26] leading-none">
            {stat.value}
          </p>
          <p className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#524d46]">
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
  section: (typeof academicsSectionPreviews)[number];
  large?: boolean;
}) {
  const Icon = section.icon;

  return (
    <Link
      href={section.href}
      className={`group relative flex h-full flex-col overflow-hidden border-2 border-[#121212] bg-[#ffffff] shadow-[5px_5px_0px_#121212] hover:shadow-[8px_8px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ${
        large ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b-2 lg:border-b-0 ${
          large ? "aspect-[16/10] lg:aspect-auto lg:min-h-full lg:w-[45%] lg:border-r-2 lg:border-[#121212]" : "aspect-[16/10] border-[#121212]"
        } bg-[#121212]`}
      >
        <Image
          src={section.image}
          alt={section.label}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute left-3.5 top-3.5 flex h-9 w-9 items-center justify-center border border-[#121212] bg-[#ffffff] text-[#6b0c26] shadow-[2px_2px_0px_#121212]">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${large ? "lg:p-8" : ""}`}>
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#6b0c26]">
          {section.description}
        </p>
        <h3
          className={`mt-1 font-serif font-bold text-[#121212] group-hover:text-[#6b0c26] transition-colors uppercase ${
            large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {section.label}
        </h3>
        <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#524d46] line-clamp-3">
          {section.excerpt}
        </p>

        <ul className="mt-4 flex-1 space-y-2 border-t border-[#121212]/15 pt-3">
          {section.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 font-sans text-xs sm:text-sm text-[#121212] font-medium">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#d97706]" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-3 border-t border-[#121212]/15 flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26]">
          <span className="uppercase">Explore Academic Section</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function AcademicsOverviewContent({
  photoPreview,
  achievementCount,
}: {
  photoPreview?: { title: string; href: string; images: GalleryImage[] } | null;
  achievementCount?: number;
}) {
  const featured = academicsSectionPreviews.find((section) => section.featured)!;
  const otherSections = academicsSectionPreviews.filter((section) => !section.featured);

  return (
    <>
      <section className="relative overflow-hidden bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-b-3 border-[#121212]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#6b0c26] text-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#121212]">
                <GraduationCap className="h-3.5 w-3.5 text-[#d97706]" />
                <span>{academicsMission.eyebrow}</span>
              </div>
              <h2 className="font-serif font-black text-3xl sm:text-5xl leading-[1.06] tracking-tight text-[#121212] uppercase">
                {academicsMission.title}
              </h2>
              <p className="font-sans text-base leading-relaxed text-[#403d39]">
                {academicsMission.description}
              </p>
              <div className="border-l-4 border-[#6b0c26] bg-[#ffffff] p-5 sm:p-6 shadow-[3px_3px_0px_#121212] border-2 border-r-2 border-t-2 border-b-2 border-[#121212]">
                <p className="font-serif text-base sm:text-lg font-semibold leading-relaxed text-[#121212]">
                  {academicsSummary}
                </p>
              </div>
            </div>

            {/* Right Photo & Stat Strip */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-3 border-[#121212] bg-[#ffffff] p-2.5 shadow-[6px_6px_0px_#121212]">
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-[#121212] bg-[#121212]">
                  <Image
                    src="/images/schools/senior.webp"
                    alt="Playpen Cambridge students in classroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 550px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#d97706] bg-black/60 px-2 py-0.5 border border-white/20 mb-1 inline-block">
                      REGISTERED CENTRE BD042
                    </span>
                    <p className="font-serif font-bold text-lg sm:text-xl uppercase">
                      Cambridge Assessment International Education
                    </p>
                  </div>
                </div>
              </div>
              <StatStrip achievementCount={achievementCount} />
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

      {/* 4 School Divisions Progression */}
      <section className="bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-b-3 border-[#121212]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Academic Progression"
            title="A Continuous Journey of Learning &amp; Discovery"
            description="Our four school divisions offer developmentally tailored learning pathways, guiding pupils with patience, structure, and academic ambition."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {schoolDivisions.map((division) => (
              <article
                key={division.name}
                className="border-2 border-[#121212] bg-[#ffffff] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#121212] border-b-2 border-[#121212]">
                    <Image
                      src={division.image}
                      alt={division.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#121212] text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase border border-white/30">
                        {division.grades}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif font-bold text-xl text-[#121212] uppercase leading-tight">
                      {division.name}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-[#524d46] leading-relaxed line-clamp-3">
                      {division.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#121212]/15">
                  <Link
                    href={division.href}
                    className="inline-flex w-full items-center justify-between font-mono text-xs font-bold uppercase text-[#6b0c26] hover:text-[#121212] transition-colors"
                  >
                    <span>Division Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Pedagogical Strengths"
          title="What Makes Playpen Academics Exceptional"
          description="We combine rigorous international benchmarks with individual mentorship to bring out the best in every learner."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicsPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="border-2 border-[#121212] bg-[#ffffff] p-6 shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] border-b-2 border-[#121212] pb-2 mb-4">
                  <span>STRENGTH // 0{index + 1}</span>
                  <ShieldCheck className="h-4 w-4 text-[#d97706]" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#121212] uppercase leading-tight">{pillar.title}</h3>
                <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-[#524d46]">{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Exploration Grid */}
      <section className="bg-[#f4efe6] py-16 sm:py-20 lg:py-24 border-t-3 border-[#121212]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Academic Resources"
            title="Explore Specialized Departments &amp; Facilities"
            description="From high-tech science laboratories and resource libraries to college counseling and examination guidelines."
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
