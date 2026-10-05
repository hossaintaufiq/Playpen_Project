"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Compass, Smile } from "lucide-react";

const schools = [
  {
    name: "Early Childhood",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
            <GraduationCap className="h-3.5 w-3.5 text-accent" />
            <span>Academic Pathways</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
            LEARNING DESIGNED <br className="hidden sm:inline" />
            <span className="text-primary">FOR EVERY STAGE.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A continuous Cambridge International journey tailored to each developmental milestone, ensuring confident progress from early childhood to global university entry.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school) => {
            const Icon = school.icon;
            return (
              <article
                key={school.name}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1.5"
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
                      <Icon className="h-4 w-4 text-accent" />
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
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-3xl border border-primary/15 bg-gradient-to-r from-primary/[0.05] via-accent/[0.05] to-primary/[0.03] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg sm:text-xl text-foreground">
                Registered Cambridge International School
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Official Cambridge assessment center preparing candidates for worldwide academic recognition.
              </p>
            </div>
          </div>

          <Link
            href="/academics"
            className="shrink-0 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg"
          >
            View Academic Overview
          </Link>
        </div>
      </div>
    </section>
  );
}
