"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, GraduationCap, Crown, Users2, Layers, CheckCircle2 } from "lucide-react";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";

const leaders = [
  {
    role: "Chairman",
    name: "Mr. A. Mannan Khan",
    tagline: "Strategic Vision & Institutional Heritage",
    description:
      "Guiding Playpen's founding mission and long-term institutional development with a steadfast commitment to holistic academic excellence.",
    image: "/school-images/Admintration-main/A Mannan Khan.jpg",
    badge: "Governing Body",
    icon: Crown,
    fitMode: "object-contain p-3 bg-stone-100",
  },
  {
    role: "Managing Director",
    name: "Mr. Mir Masud Kabir",
    tagline: "Operations & Modern Infrastructure",
    description:
      "Overseeing institutional expansion, state-of-the-art campus infrastructure, and continuous technological modernization.",
    image: "/school-images/Admintration-main/Masud Kabir.jpg",
    badge: "Executive Leadership",
    icon: ShieldCheck,
    fitMode: "object-contain p-3 bg-stone-100",
  },
  {
    role: "Principal",
    name: "Mrs. Sorabon Tohura",
    tagline: "Academic Excellence & Pedagogy",
    description:
      "Championing Cambridge curriculum rigor, faculty development, student welfare, and moral character-building across all divisions.",
    image: "/school-images/about/school-administration/Principal Madam/Principal Madam.webp",
    badge: "Academic Leadership",
    icon: GraduationCap,
    fitMode: "object-cover object-top",
  },
];

const divisions = [
  {
    title: "Senior School",
    grades: "Class VIII – XII",
    head: "Vice Principal & Cambridge Deans",
  },
  {
    title: "Middle School",
    grades: "Class IV – VII",
    head: "Section Head & Pastoral Leads",
  },
  {
    title: "Junior School",
    grades: "Class I – III",
    head: "Section Head & Form Mentors",
  },
  {
    title: "Elementary",
    grades: "Playgroup – KG II",
    head: "Early Years Head & Coordinators",
  },
];

export function GovernanceHighlightSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Crown className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
              <span>School Governance</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
              LEADERSHIP DEDICATED TO <br className="hidden sm:inline" />
              <span className="relative inline-block text-primary">
                VISION & EXCELLENCE.
                <HandDrawnUnderline variant="broken" />
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our experienced governing body and academic leadership provide the strategic stewardship, ethical foundation, and educational rigor that make Playpen a premier institution.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about/school-administration"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Full Leadership Directory</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* 3 Governance Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {leaders.map((leader) => {
            const Icon = leader.icon;
            return (
              <article
                key={leader.role}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Portrait Framing */}
                  <div className="relative aspect-[4/3.6] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      className={`${leader.fitMode} transition-transform duration-700 ease-out group-hover:scale-105`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Top Position & Category Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-primary shadow-xs">
                        <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                        <span>{leader.role}</span>
                      </span>

                      <span className="inline-flex items-center rounded-md bg-black/50 backdrop-blur-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/15">
                        {leader.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      {leader.tagline}
                    </div>

                    <h3 className="font-extrabold text-xl sm:text-2xl text-foreground leading-tight group-hover:text-primary transition-colors">
                      {leader.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {leader.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                  <div className="flex items-center justify-between border-t border-border/60 pt-4 text-xs font-bold text-primary group-hover:text-primary-dark">
                    <Link
                      href="/about/school-administration"
                      className="inline-flex items-center gap-1.5 hover:underline"
                    >
                      <span>View Profile &amp; Governance</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Professional Institutional Divisional Administration Hierarchy */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-white to-primary/[0.02] p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 border-b border-border/60">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-extrabold tracking-wider uppercase text-primary border border-primary/15 mb-2">
                <Layers className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                <span>Sectional Coordination</span>
              </div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                Divisional Administration &amp; Academic Leadership
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Dedicated Vice Principals, Teachers-in-Charge, and Sectional Coordinators supervise daily learning, pastoral care, and Cambridge syllabus adherence across every level.
              </p>
            </div>

            <Link
              href="/about/school-administration"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground shadow-xs transition hover:border-primary hover:bg-primary hover:text-white"
            >
              <span>Explore Sectional Heads</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </Link>
          </div>

          {/* 4 Divisional Pillars */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {divisions.map((div) => (
              <div
                key={div.title}
                className="flex flex-col justify-between rounded-2xl border border-border/70 bg-white p-4 sm:p-5 shadow-2xs transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                      {div.grades}
                    </span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-extrabold text-base text-foreground">
                    {div.title}
                  </h4>
                </div>
                <div className="mt-3 pt-2.5 border-t border-border/50">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {div.head}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

