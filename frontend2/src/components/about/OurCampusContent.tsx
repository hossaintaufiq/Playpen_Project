import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  MapPin,
  Sparkles,
  Building2,
  Shield,
  Layers,
} from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { GalleryImage } from "@/lib/gallery-data";
import { schoolContact } from "@/lib/contact";
import {
  campusAddress,
  campusFacilityGroups,
  campusIntro,
  facultyNote,
  futureExpansion,
  leadershipNote,
  schoolDivisions,
  studentCareHighlights,
} from "@/lib/our-campus";

export function OurCampusContent({
  photoPreview,
}: {
  photoPreview?: { title: string; href: string; images: GalleryImage[] } | null;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Playpen Campus"
        title="A Modern Campus Built for Learning, Care &amp; Community"
        description={campusIntro}
      />

      {/* 4 School Divisions Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
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

      {photoPreview ? (
        <div className="mt-12">
          <SectionPhotoPreview
            title={photoPreview.title}
            href={photoPreview.href}
            images={photoPreview.images}
          />
        </div>
      ) : null}

      {/* Main Architectural Highlight */}
      <div className="mt-16 grid gap-8 lg:grid-cols-12 items-stretch">
        <div className="relative border-3 border-[#121212] bg-[#ffffff] p-2.5 shadow-[8px_8px_0px_#121212] lg:col-span-5 flex flex-col justify-between">
          <div className="relative aspect-[4/5] min-h-[360px] sm:aspect-auto sm:min-h-[460px] overflow-hidden border-2 border-[#121212] bg-[#121212]">
            <Image
              src="/school-images/about/our-campus/DSC01243.webp"
              alt="Playpen school campus building"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <span className="inline-flex items-center gap-1.5 bg-[#6b0c26] text-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider border border-white mb-3">
                ESTABLISHED 1977
              </span>
              <p className="font-serif font-bold text-2xl sm:text-3xl leading-tight uppercase">
                Custom-built for generations of Playpen students
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7 flex flex-col justify-between">
          <AboutContentSection title={leadershipNote.title}>
            {leadershipNote.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-sans text-base text-[#403d39] leading-relaxed">{paragraph}</p>
            ))}
          </AboutContentSection>

          <div className="grid gap-4 sm:grid-cols-3">
            {studentCareHighlights.map((item, idx) => (
              <article
                key={item.title}
                className="border-2 border-[#121212] bg-[#ffffff] p-5 shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] mb-3">
                    <span>0{idx + 1}</span>
                    <item.icon className="h-4 w-4 text-[#d97706]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#121212] uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs text-[#524d46] leading-relaxed">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Location Banner */}
      <div className="mt-16 border-3 border-[#121212] bg-[#f4efe6] p-8 sm:p-10 shadow-[6px_6px_0px_#121212]">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#6b0c26] font-mono font-bold text-xs uppercase tracking-wider mb-2">
              <MapPin className="h-4 w-4 text-[#d97706]" />
              <span>// {campusAddress.title}</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase">
              Bashundhara Residential Area, Dhaka
            </h3>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#524d46] leading-relaxed">
              {campusAddress.description}
            </p>
            <address className="mt-4 space-y-1 not-italic font-mono text-xs sm:text-sm font-bold text-[#121212]">
              <p>{schoolContact.address.line1}</p>
              <p>{schoolContact.address.line2}</p>
              <p>{schoolContact.address.line3}</p>
            </address>
          </div>
          <a
            href={schoolContact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#6b0c26] hover:bg-[#54081e] text-white px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] transition-all"
          >
            <span>Open Google Maps</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Facilities & Features Groups */}
      <div className="mt-16 sm:mt-20">
        <SectionHeader
          eyebrow="Facilities &amp; Spaces"
          title="Spaces Designed for Comfort, Safety &amp; Excellence"
          description="Our school provides a comfortable and congenial atmosphere where pupils learn, explore, and grow with confidence."
        />

        <div className="mt-10 space-y-10">
          {campusFacilityGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-4 border-b-2 border-[#121212] pb-2 flex items-center justify-between font-mono text-xs font-bold uppercase text-[#6b0c26]">
                <h3 className="font-serif font-bold text-xl text-[#121212] uppercase">
                  {group.title}
                </h3>
                <span>// CATEGORY</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 border-2 border-[#121212] bg-[#ffffff] p-4 shadow-[3px_3px_0px_#121212]"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#121212] bg-[#f4efe6] text-[#6b0c26]">
                      <item.icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <p className="font-sans text-xs sm:text-sm font-medium leading-relaxed text-[#121212]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Note */}
      <div className="mt-12 border-2 border-[#121212] bg-[#ffffff] p-6 sm:p-8 shadow-[4px_4px_0px_#121212]">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#121212] bg-[#6b0c26] text-white">
            <BookOpen className="h-5 w-5 text-[#d97706]" />
          </div>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#403d39]">{facultyNote}</p>
        </div>
      </div>

      {/* Phase II Expansion */}
      <div className="mt-10 border-3 border-[#121212] bg-[#6b0c26] text-white shadow-[8px_8px_0px_#121212] overflow-hidden">
        <div className="grid lg:grid-cols-12">
          <div className="p-8 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#d97706] text-[#121212] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider border border-black self-start">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Phase II Masterplan</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl uppercase">{futureExpansion.title}</h3>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#e8dfd1]/90">
              {futureExpansion.text}
            </p>
          </div>
          <div className="relative min-h-[260px] lg:col-span-5 bg-black/20 border-t-2 lg:border-t-0 lg:border-l-2 border-white/20">
            <Image
              src="/school-images/about/our-campus/DSC01245.webp"
              alt="Playpen campus expansion"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>

      {/* Interactive Map Embed */}
      <div className="mt-12 border-3 border-[#121212] bg-[#ffffff] p-2 shadow-[6px_6px_0px_#121212] overflow-hidden">
        <iframe
          title="Playpen School location"
          src={schoolContact.mapsEmbedUrl}
          className="h-72 w-full border-2 border-[#121212] sm:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
