"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  MapPin,
  Sparkles,
  Building2,
  Shield,
  Layers,
  Compass,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
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
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 w-full min-w-0">
      <div className="space-y-14 sm:space-y-18">
        {/* 01 — Section Header */}
        <SectionHeader
          eyebrow="Playpen Campus"
          title="A Modern Campus Built for Learning, Care &amp; Community"
          description={campusIntro}
        />

        {/* 02 — 4 School Divisions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {schoolDivisions.map((division) => (
            <article
              key={division.name}
              className="group overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={division.image}
                  alt={division.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="inline-block rounded-full bg-accent/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white mb-1.5 shadow-xs">
                    {division.grades}
                  </span>
                  <h3 className="font-extrabold text-xl leading-tight text-white">{division.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {photoPreview ? (
          <SectionPhotoPreview
            title={photoPreview.title}
            href={photoPreview.href}
            images={photoPreview.images}
          />
        ) : null}

        {/* 03 — Main Architectural Highlight & Leadership Note */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          <div className="relative overflow-hidden rounded-3xl lg:col-span-5 shadow-xl ring-1 ring-black/10 flex flex-col justify-end">
            <div className="relative min-h-[380px] sm:min-h-[480px] w-full h-full">
              <Image
                src="/school-images/about/our-campus/DSC01243.webp"
                alt="Playpen school campus building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-accent mb-3 border border-white/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Established 1977</span>
                </span>
                <h3 className="font-extrabold text-2xl sm:text-3xl leading-tight text-white">
                  Custom-Built for Generations of Learners
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                  Purpose-designed educational infrastructure engineered for safety, sunlight, and holistic development.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-3xl border border-border/80 bg-white p-6 sm:p-8 shadow-sm">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-2">
                <Building2 className="h-4 w-4 text-accent" />
                <span>Architectural Vision</span>
              </div>
              <h3 className="font-extrabold text-2xl text-foreground mb-4">
                {leadershipNote.title}
              </h3>
              <div className="space-y-3.5">
                {leadershipNote.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {studentCareHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border/80 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="font-extrabold text-base text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* 04 — Location Banner */}
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-primary/[0.05] via-surface to-accent/[0.06] p-7 sm:p-10 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-extrabold text-xs uppercase tracking-wider">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{campusAddress.title}</span>
              </div>
              <h3 className="mt-2 font-extrabold text-2xl sm:text-3xl text-foreground">
                Bashundhara Residential Area, Dhaka
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {campusAddress.description}
              </p>
              <address className="mt-4 space-y-0.5 not-italic text-xs sm:text-sm font-semibold text-foreground/90">
                <p>{schoolContact.address.line1}</p>
                <p>{schoolContact.address.line2}</p>
                <p>{schoolContact.address.line3}</p>
              </address>
            </div>
            <a
              href={schoolContact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* 05 — Facilities & Features Groups */}
        <div>
          <SectionHeader
            eyebrow="Facilities &amp; Spaces"
            title="Spaces Designed for Comfort, Safety &amp; Excellence"
            description="Our school provides a comfortable and congenial atmosphere where pupils learn, explore, and grow with confidence."
          />

          <div className="mt-10 space-y-10">
            {campusFacilityGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 font-extrabold text-xl text-foreground flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{group.title}</span>
                </h3>
                <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-2xl border border-border/80 bg-white px-4.5 py-4 shadow-2xs transition hover:border-primary/30 hover:shadow-sm"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                        <item.icon className="h-4.5 w-4.5" strokeWidth={2} />
                      </div>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-foreground/90">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 06 — Faculty Note */}
        <div className="rounded-3xl border border-border/80 bg-surface p-6 sm:p-8 shadow-2xs">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-hover">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                Faculty Environment
              </span>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">{facultyNote}</p>
            </div>
          </div>
        </div>

        {/* 07 — Phase II Expansion */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#520215] via-[#7a0826] to-[#991636] text-white shadow-xl">
          <div className="grid lg:grid-cols-12 items-center">
            <div className="p-7 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-md mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Phase II Masterplan</span>
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">{futureExpansion.title}</h3>
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-white/85">
                {futureExpansion.text}
              </p>
            </div>
            <div className="relative min-h-[260px] lg:min-h-full lg:col-span-5 bg-black/20">
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

        {/* 08 — Interactive Map Embed */}
        <div className="overflow-hidden rounded-3xl border border-border/80 shadow-sm">
          <iframe
            title="Playpen School location"
            src={schoolContact.mapsEmbedUrl}
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
