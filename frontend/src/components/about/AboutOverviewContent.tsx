"use client";

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
  GraduationCap,
  Building2,
  Compass,
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
      {aboutStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl sm:rounded-3xl border border-border/80 bg-white/95 px-4 py-5 text-center shadow-lg backdrop-blur-md transition hover:border-primary/30 hover:shadow-xl sm:px-5 sm:py-6"
        >
          <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight">
            {stat.value}
          </p>
          <p className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
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
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 ${
        large ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-muted ${
          large ? "aspect-[16/10] lg:aspect-auto lg:min-h-full lg:w-[46%]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={section.image}
          alt={section.label}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 46vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-md backdrop-blur-md">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col justify-between p-6 sm:p-7 ${large ? "lg:p-9" : ""}`}>
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-accent-hover mb-2">
            <span>{section.description}</span>
          </div>
          <h3
            className={`font-extrabold text-foreground group-hover:text-primary transition-colors ${
              large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {section.label}
          </h3>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {section.excerpt}
          </p>

          <ul className="mt-4 space-y-2">
            {section.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 font-medium leading-snug">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary transition-all duration-200 group-hover:gap-2.5">
            <span>Explore section</span>
            <ArrowRight className="h-4 w-4" />
          </span>
          <span className="text-[11px] font-bold text-muted-foreground/60 uppercase">Playpen</span>
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
      {/* 01 — Mission & Heritage Statement */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-4 border border-primary/15">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>{aboutMission.eyebrow}</span>
              </div>
              <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.12] tracking-tight text-foreground">
                {aboutMission.title}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {aboutMission.description}
              </p>
              
              <blockquote className="mt-6 relative overflow-hidden rounded-2xl bg-surface border-l-4 border-primary p-5 sm:p-6 shadow-xs">
                <p className="text-sm sm:text-base font-semibold leading-relaxed text-foreground/90 italic">
                  &ldquo;{aboutMission.quote}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>The Playpen Creed of Excellence</span>
                </div>
              </blockquote>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10">
                <Image
                  src="/images/schools/senior.webp"
                  alt="Playpen students on campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8 text-white">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                      <MapPin className="h-3.5 w-3.5" />
                      Bashundhara R/A, Dhaka
                    </p>
                    <p className="mt-1 font-bold text-lg sm:text-xl">
                      {schoolContact.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase text-white border border-white/20">
                    Est. 1977
                  </span>
                </div>
              </div>
              
              {/* Floating Stat Bar */}
              <div className="relative z-10 -mt-8 sm:-mt-10 mx-3 sm:mx-6">
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

      {/* 02 — Four Core Pillars */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24 border-y border-border/60">
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
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black text-sm transition-colors group-hover:bg-primary group-hover:text-white">
                      0{index + 1}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
                      Pillar 0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-1.5 text-xs font-bold text-accent">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Core Value</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — School Divisions */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/60">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-3">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              <span>Campus Divisions</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.12] tracking-tight text-foreground">
              Four Divisions. One Purpose-Built Home.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Playpen brings together Early Childhood, Junior, Middle, and Senior School under a single modern facility designed for safety and excellence.
            </p>
          </div>

          <Link
            href="/about/our-campus"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
          >
            <span>Explore Campus Facilities</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {schoolDivisions.map((division) => (
            <article
              key={division.name}
              className="group overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl"
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
      </section>

      {/* 04 — Leadership Highlights */}
      <section className="border-y border-border/60 bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="School Leadership"
            title="Guided by Dedicated Educational Stewards"
            description="Playpen's governing board and administration bring decades of pedagogical expertise to sustain our standards of academic rigour and pastoral care."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {schoolManagement.map((leader) => (
              <article
                key={leader.role}
                className="group rounded-3xl border border-border/80 bg-white p-7 text-center shadow-sm transition duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-6 w-6" />
                </div>
                <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent-hover mb-2">
                  {leader.role}
                </span>
                <h3 className="font-extrabold text-xl sm:text-2xl text-foreground">
                  {leader.name}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about/school-administration"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-primary shadow-xs transition hover:bg-primary hover:text-white"
            >
              <span>Meet Full Administration &amp; Faculty</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — Exploration Grid */}
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

      {/* 06 — Dual CTA */}
      <section className="pb-16 sm:pb-20 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/about/playpen-alumni-association"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#520215] via-[#7a0826] to-[#991636] p-8 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-accent/20 blur-2xl" />
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-3 backdrop-blur-md">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Alumni Association</span>
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl leading-tight">
                Reconnect with Your Playpen Family
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                Register with the Playpen Alumni Network, connect with classmates worldwide, and give back to the school community.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-accent group-hover:underline">
                <span>Join Alumni Network</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/about/career-at-playpen"
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white p-8 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 sm:p-10"
            >
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <Building2 className="h-3.5 w-3.5" />
                <span>Careers at Playpen</span>
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground leading-tight group-hover:text-primary transition-colors">
                Build a Meaningful Teaching Career
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Join our passionate faculty of educators and administrative leaders. Browse open teaching vacancies and apply online.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary">
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
