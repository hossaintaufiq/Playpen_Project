import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  MapPin,
  Sparkles,
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
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="Playpen Campus"
        title="A campus built for learning, care, and community"
        description={campusIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/75 via-[#5a0000]/15 to-transparent" />
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

      {photoPreview ? (
        <div className="mt-10">
          <SectionPhotoPreview
            title={photoPreview.title}
            href={photoPreview.href}
            images={photoPreview.images}
          />
        </div>
      ) : null}

      <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="relative overflow-hidden rounded-3xl lg:col-span-2">
          <div className="relative aspect-[4/5] min-h-[320px] sm:aspect-auto sm:min-h-[420px]">
            <Image
              src="/school-images/about/our-campus/DSC01243.webp"
              alt="Playpen school campus building"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/80 via-[#800000]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
                Established 1977
              </p>
              <p className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                Custom-built for generations of Playpen students
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-3">
          <AboutContentSection title={leadershipNote.title}>
            {leadershipNote.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </AboutContentSection>

          <div className="grid gap-4 sm:grid-cols-3">
            {studentCareHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.08] p-6 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">{campusAddress.title}</p>
            </div>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Bashundhara Residential Area, Dhaka
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {campusAddress.description}
            </p>
            <address className="mt-4 space-y-1 not-italic text-sm text-foreground">
              <p>{schoolContact.address.line1}</p>
              <p>{schoolContact.address.line2}</p>
              <p>{schoolContact.address.line3}</p>
            </address>
          </div>
          <a
            href={schoolContact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Open in Google Maps
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <SectionHeader
          eyebrow="Facilities & Features"
          title="Spaces designed for comfort, safety, and excellence"
          description="Our school provides a comfortable and congenial atmosphere where pupils learn, explore, and grow with confidence."
        />

        <div className="mt-8 space-y-8">
          {campusFacilityGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">{group.title}</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-white px-4 py-3.5 shadow-sm"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                      <item.icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:mt-12 sm:rounded-3xl sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-[#8a6d12]">
            <BookOpen className="h-5 w-5" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{facultyNote}</p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-[#5a0000] text-white">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Phase II
            </div>
            <h3 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">{futureExpansion.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {futureExpansion.text}
            </p>
          </div>
          <div className="relative min-h-[220px] bg-black/20 lg:min-h-full">
            <Image
              src="/school-images/about/our-campus/DSC01245.webp"
              alt="Playpen campus expansion"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#5a0000] via-[#5a0000]/40 to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border/50 sm:mt-12 sm:rounded-3xl">
        <iframe
          title="Playpen School location"
          src={schoolContact.mapsEmbedUrl}
          className="h-64 w-full border-0 sm:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
