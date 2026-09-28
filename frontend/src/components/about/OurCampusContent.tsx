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
        {schoolDivisions.map((division) => (
          <article
            key={division.name}
            className="group overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={division.image}
                alt={division.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                  {division.grades}
                </span>
                <h3 className="font-extrabold text-xl leading-tight">{division.name}</h3>
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
      <div className="mt-16 grid gap-8 lg:grid-cols-12">
        <div className="relative overflow-hidden rounded-3xl lg:col-span-5 shadow-xl ring-1 ring-black/10">
          <div className="relative aspect-[4/5] min-h-[360px] sm:aspect-auto sm:min-h-[460px]">
            <Image
              src="/school-images/about/our-campus/DSC01243.webp"
              alt="Playpen school campus building"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                Established 1977
              </span>
              <p className="font-extrabold text-2xl sm:text-3xl leading-tight">
                Custom-built for generations of Playpen students
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7 flex flex-col justify-between">
          <AboutContentSection title={leadershipNote.title}>
            {leadershipNote.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </AboutContentSection>

          <div className="grid gap-4 sm:grid-cols-3">
            {studentCareHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border/80 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-primary/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-extrabold text-base text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Location Banner */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-primary/[0.05] via-surface to-accent/[0.06] p-8 sm:p-10 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{campusAddress.title}</span>
            </div>
            <h3 className="mt-2 font-extrabold text-2xl sm:text-3xl text-foreground">
              Bashundhara Residential Area, Dhaka
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {campusAddress.description}
            </p>
            <address className="mt-4 space-y-1 not-italic text-sm font-semibold text-foreground">
              <p>{schoolContact.address.line1}</p>
              <p>{schoolContact.address.line2}</p>
              <p>{schoolContact.address.line3}</p>
            </address>
          </div>
          <a
            href={schoolContact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
          >
            <span>Open in Google Maps</span>
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
              <h3 className="mb-4 font-extrabold text-xl text-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>{group.title}</span>
              </h3>
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-border/80 bg-white px-4.5 py-4 shadow-sm transition hover:border-primary/20"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                      <item.icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-foreground/90">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Note */}
      <div className="mt-12 rounded-3xl border border-border/80 bg-surface p-6 shadow-sm sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-hover">
            <BookOpen className="h-6 w-6" />
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{facultyNote}</p>
        </div>
      </div>

      {/* Phase II Expansion */}
      <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#520215] to-[#7a0826] text-white shadow-xl">
        <div className="grid lg:grid-cols-12">
          <div className="p-8 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Phase II Masterplan</span>
            </div>
            <h3 className="mt-4 font-extrabold text-2xl sm:text-3xl lg:text-4xl">{futureExpansion.title}</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
              {futureExpansion.text}
            </p>
          </div>
          <div className="relative min-h-[260px] lg:col-span-5 bg-black/20">
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
      <div className="mt-12 overflow-hidden rounded-3xl border border-border/70 shadow-sm">
        <iframe
          title="Playpen School location"
          src={schoolContact.mapsEmbedUrl}
          className="h-72 w-full border-0 sm:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
