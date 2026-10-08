"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Palette, Rocket, Users, Compass } from "lucide-react";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";

const activities = [
  {
    title: "Sports & Athletics",
    description: "Inter-school football, basketball championships, annual track & field tournaments, and wellness programs.",
    image: "/school-images/site-wide/marquee/eca.webp",
    icon: Trophy,
    href: "/student-life/annual-sports",
    tag: "Athletics",
    action: "View Sports",
  },
  {
    title: "Arts & Cultural Gala",
    description: "Vocal and instrumental ensembles, dramatic stage arts, dance galas, and national language recitation contests.",
    image: "/school-images/academics/student-achievements/Poem Recitation Competition – KG II/DSC05045.webp",
    icon: Palette,
    href: "/student-life/cultural-programme",
    tag: "Creativity",
    action: "Explore Culture",
  },
  {
    title: "Science & Robotics",
    description: "National Olympiad prep, interactive science exhibitions, robotics design labs, and coding competitions.",
    image: "/school-images/site-wide/marquee/achievements.webp",
    icon: Rocket,
    href: "/student-life/science-fair",
    tag: "Innovation",
    action: "Discover Science",
  },
  {
    title: "Leadership & Prefects",
    description: "Elected student council bodies, community outreach initiatives, and international Model UN delegations.",
    image: "/school-images/academics/student-achievements/Prefect Badge Giving Ceremony 2025/1.webp",
    icon: Users,
    href: "/student-life/community-service",
    tag: "Character",
    action: "View Leadership",
  },
];

export function StudentLifeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Compass className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
              <span>Beyond the Classroom</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
              VIBRANT STUDENT LIFE. <br className="hidden sm:inline" />
              <span className="relative inline-block text-primary">
                PASSION IN ACTION.
                <HandDrawnUnderline variant="broken" />
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From athletic championships and science symposiums to cultural stage performances, Playpen students explore diverse passions that build lifelong character and confidence.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/student-life"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All Activities</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* 4 Premium Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <Link
                key={act.title}
                href={act.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Container with floating Category & Glass Icon */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Top Floating Tag & Icon */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-primary shadow-xs">
                        {act.tag}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-extrabold text-lg sm:text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                      {act.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {act.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                  <div className="flex items-center justify-between border-t border-border/60 pt-3.5 text-xs font-bold text-primary group-hover:text-primary-dark">
                    <span>{act.action}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

