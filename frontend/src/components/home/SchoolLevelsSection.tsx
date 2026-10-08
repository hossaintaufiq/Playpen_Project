"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, Compass, Smile, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";

const schools = [
  {
    name: "Elementary",
    tagline: "Foundation of Joy & Curiosity",
    grades: "Playgroup – KG II",
    ages: "Ages 2.5 – 5 Years",
    description:
      "Play-based sensory learning, phonics, fine motor development, and social confidence in a warm, patient, and stimulating setting.",
    image: "/images/schools/elementary.webp",
    href: "/academics/early-childhood",
    badge: "bg-amber-100 text-amber-900 border border-amber-200",
    icon: Smile,
  },
  {
    name: "Junior School",
    tagline: "Building Core Skills & Discovery",
    grades: "Class I – III",
    ages: "Ages 6 – 8 Years",
    description:
      "Nurturing strong literacy, numeracy, science, and bilingual communication through joyful interactive lessons and group activities.",
    image: "/images/schools/junior.webp",
    href: "/academics/junior-school",
    badge: "bg-blue-100 text-blue-900 border border-blue-200",
    icon: BookOpen,
  },
  {
    name: "Middle School",
    tagline: "Critical Thinking & Exploration",
    grades: "Class IV – VII",
    ages: "Ages 9 – 12 Years",
    description:
      "Broadening scientific inquiry, ICT skills, creative arts, and independent problem-solving as students discover their passions.",
    image: "/images/schools/middle.webp",
    href: "/academics/middle-school",
    badge: "bg-teal-100 text-teal-900 border border-teal-200",
    icon: Compass,
  },
  {
    name: "Senior School",
    tagline: "Cambridge O & A Level Excellence",
    grades: "Class VIII – XII",
    ages: "Ages 13 – 18 Years",
    description:
      "Rigorous Cambridge curriculum, specialized laboratory experiments, leadership roles, and global university placement mentorship.",
    image: "/images/schools/senior.webp",
    href: "/academics/senior-school",
    badge: "bg-rose-100 text-rose-900 border border-rose-200 font-bold",
    icon: GraduationCap,
  },
] as const;

export function SchoolLevelsSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24 lg:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
            <GraduationCap className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            <span>Academic Pathways</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
            LEARNING DESIGNED <br className="hidden sm:inline" />
            FOR{" "}
            <span className="relative inline-block text-primary">
              EVERY STAGE.
              <HandDrawnUnderline variant="broken" />
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A continuous Cambridge International journey tailored to each developmental milestone, ensuring confident progress from elementary to global university entry.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school) => {
            const Icon = school.icon;
            return (
              <article
                key={school.name}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white shadow-xs transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                    <Image
                      src={school.image}
                      alt={school.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3.5 left-3.5">
                      <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${school.badge}`}>
                        {school.grades}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-xs font-semibold text-white/90">{school.ages}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {school.tagline}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-xl sm:text-2xl text-foreground leading-tight group-hover:text-primary transition-colors">
                      {school.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {school.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={school.href}
                    className="inline-flex w-full items-center justify-between rounded-xl bg-surface p-3 text-xs font-bold text-foreground transition group-hover:bg-primary group-hover:text-white"
                  >
                    <span>Explore Curriculum</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* High-End Institutional Academic Overview Banner */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-white via-white to-primary/[0.02] p-6 sm:p-8 lg:p-10 shadow-sm transition-all hover:border-primary/30">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Col: Accreditation & Description */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-extrabold tracking-wider uppercase text-primary border border-primary/15">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                  Centre BD019
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase text-amber-800 border border-amber-500/20">
                  Cambridge International
                </span>
                <span className="text-xs font-semibold text-muted-foreground hidden sm:inline">
                  • 49 Years of Rigorous Pedagogy
                </span>
              </div>

              <h3 className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-foreground tracking-tight">
                Complete Academic Continuum & Global Qualifications
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Discover our comprehensive subject frameworks, laboratory syllabi, language programs, and university counselling system from foundation years to senior graduation.
              </p>

              {/* Feature Highlights */}
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-foreground/80">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={1.75} />
                  Direct O & A Level Progression
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={1.75} />
                  STEM & Humanities Dual Tracks
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={1.75} />
                  Worldwide University Placement
                </span>
              </div>
            </div>

            {/* Right Col: High-End Flagship CTA Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/academics"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Academic Overview</span>
                <ArrowUpRight className="h-4 w-4 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

