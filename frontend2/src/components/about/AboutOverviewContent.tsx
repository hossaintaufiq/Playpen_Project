import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Heart,
  BookOpen,
  Award,
  Users,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import type { GalleryImage } from "@/lib/gallery-data";
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
      {aboutStats.map((stat, idx) => (
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
  section: (typeof aboutSectionPreviews)[number];
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
          <span className="uppercase">Explore Section</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function AboutOverviewContent({
  photoPreview,
}: {
  photoPreview?: { title: string; href: string; images: GalleryImage[] } | null;
}) {
  const featured = aboutSectionPreviews.find((section) => section.featured)!;
  const otherSections = aboutSectionPreviews.filter((section) => !section.featured);

  return (
    <>
      <section className="relative overflow-hidden bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-b-3 border-[#121212]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#6b0c26] text-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#121212]">
                <Sparkles className="h-3.5 w-3.5 text-[#d97706]" />
                <span>{aboutMission.eyebrow}</span>
              </div>
              <h2 className="font-serif font-black text-3xl sm:text-5xl leading-[1.06] tracking-tight text-[#121212] uppercase">
                {aboutMission.title}
              </h2>
              <p className="font-sans text-base leading-relaxed text-[#403d39]">
                {aboutMission.description}
              </p>
              <blockquote className="border-l-4 border-[#6b0c26] bg-[#ffffff] p-5 sm:p-6 shadow-[3px_3px_0px_#121212] border-2 border-r-2 border-t-2 border-b-2 border-[#121212]">
                <p className="font-serif text-base sm:text-lg font-semibold leading-relaxed text-[#121212] italic">
                  &ldquo;{aboutMission.quote}&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Right Photo & Stat Strip */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-3 border-[#121212] bg-[#ffffff] p-2.5 shadow-[6px_6px_0px_#121212]">
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-[#121212] bg-[#121212]">
                  <Image
                    src="/images/schools/senior.webp"
                    alt="Playpen students on campus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 550px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                    <div>
                      <p className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#d97706]">
                        <MapPin className="h-3.5 w-3.5" />
                        Bashundhara R/A, Dhaka
                      </p>
                      <p className="mt-1 font-serif font-bold text-lg sm:text-xl uppercase">
                        {schoolContact.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <StatStrip />
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

      {/* 4 Pillars */}
      <section className="bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-b-3 border-[#121212]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Four Pillars That Guide Every Playpen Journey"
            description="From the earliest years in playgroup to A-Level graduation, our educational philosophy stays rooted in academic rigour, character, care, and global vision."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="border-2 border-[#121212] bg-[#ffffff] p-6 sm:p-7 shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] border-b-2 border-[#121212] pb-2 mb-4">
                    <span>PILLAR // 0{index + 1}</span>
                    <ShieldCheck className="h-4 w-4 text-[#d97706]" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#121212] uppercase leading-tight">{pillar.title}</h3>
                  <p className="mt-2.5 font-sans text-xs text-[#524d46] leading-relaxed">{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* School Divisions */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b-2 border-[#121212]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#d97706] text-[#121212] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest border border-[#121212] shadow-[2px_2px_0px_#121212] mb-3">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Campus Divisions</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#121212] leading-[1.06] uppercase">
              Four Divisions. One Purpose-Built Home.
            </h2>
            <p className="mt-3 font-sans text-base text-[#524d46] leading-relaxed">
              Playpen brings together Early Childhood, Junior, Middle, and Senior School under a single modern facility designed for safety and excellence.
            </p>
          </div>

          <Link
            href="/about/our-campus"
            className="shrink-0 bg-[#6b0c26] hover:bg-[#54081e] text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:shadow-[5px_5px_0px_#121212] transition-all"
          >
            <span>Explore Campus Facilities →</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-10">
          {schoolDivisions.map((division, idx) => (
            <article
              key={division.name}
              className="border-2 border-[#121212] bg-[#ffffff] shadow-[4px_4px_0px_#121212] overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#121212] border-b-2 border-[#121212]">
                <Image
                  src={division.image}
                  alt={division.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#d97706] bg-black/60 px-2 py-0.5 border border-white/20 mb-1 inline-block">
                    {division.grades}
                  </span>
                  <h3 className="font-serif font-bold text-lg leading-tight uppercase">{division.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y-3 border-[#121212] bg-[#f4efe6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="School Leadership"
            title="Guided by Dedicated Educational Stewards"
            description="Playpen's governing board and administration bring decades of pedagogical expertise to sustain our standards of academic rigour and pastoral care."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {schoolManagement.map((leader, idx) => (
              <article
                key={leader.role}
                className="border-2 border-[#121212] bg-[#ffffff] p-7 text-center shadow-[4px_4px_0px_#121212]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center border-2 border-[#121212] bg-[#6b0c26] text-white shadow-[2px_2px_0px_#121212] mb-4">
                  <Users className="h-6 w-6 text-[#d97706]" />
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#6b0c26]">
                  {leader.role}
                </p>
                <h3 className="mt-2 font-serif font-bold text-xl sm:text-2xl text-[#121212] uppercase">
                  {leader.name}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about/school-administration"
              className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#faf7f2] text-[#121212] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:shadow-[5px_5px_0px_#121212] transition-all"
            >
              <span>Meet Full Administration &amp; Faculty</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Exploration Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Explore Playpen"
          title="Everything You Need to Know About Our School"
          description="Learn more about our campus facilities, safeguarding policies, alumni legacy, and career pathways."
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

      {/* Dual CTA */}
      <section className="pb-16 sm:pb-20 lg:py-24 border-t-3 border-[#121212] bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/about/playpen-alumni-association"
              className="group relative overflow-hidden border-3 border-[#121212] bg-[#6b0c26] p-8 text-white shadow-[6px_6px_0px_#121212] sm:p-10"
            >
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-[#d97706] bg-black/40 px-2 py-0.5 border border-white/20 mb-3">
                ALUMNI ASSOCIATION
              </span>
              <h3 className="font-serif font-black text-2xl sm:text-3xl uppercase leading-tight">
                Reconnect with Your Playpen Family
              </h3>
              <p className="mt-3 font-sans text-sm text-[#e8dfd1]/90 leading-relaxed">
                Register with the Playpen Alumni Network, connect with classmates worldwide, and give back to the school community.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#d97706] group-hover:underline">
                <span>Join Alumni Network</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/about/career-at-playpen"
              className="group relative overflow-hidden border-3 border-[#121212] bg-[#ffffff] p-8 text-[#121212] shadow-[6px_6px_0px_#121212] sm:p-10"
            >
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-[#6b0c26] bg-[#f4efe6] px-2 py-0.5 border border-[#121212] mb-3">
                CAREERS AT PLAYPEN
              </span>
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] leading-tight group-hover:text-[#6b0c26] transition-colors uppercase">
                Build a Meaningful Teaching Career
              </h3>
              <p className="mt-3 font-sans text-sm text-[#524d46] leading-relaxed">
                Join our passionate faculty of educators and administrative leaders. Browse open teaching vacancies and apply online.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#6b0c26]">
                <span>View Open Positions</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
