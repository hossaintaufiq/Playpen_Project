import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, UserCheck, GraduationCap, Award, Crown, Sparkles } from "lucide-react";
import { schoolManagement, administrationIntro } from "@/lib/school-administration";

const leaders = [
  {
    role: "Chairman",
    name: "Mr. A. Mannan Khan",
    tagline: "Strategic Vision & Institutional Heritage",
    description:
      "Guiding Playpen's founding mission and long-term institutional development with a steadfast commitment to holistic education.",
    image: "/school-images/Admintration-main/A Mannan Khan.jpg",
    badge: "Governing Body",
    positionColor: "from-amber-500/20 to-amber-500/5 text-amber-800 border-amber-500/30",
    roleBadgeBg: "bg-[#7a0826] text-amber-300 border-amber-400/40",
    icon: Crown,
    fitMode: "object-contain p-2.5 bg-gradient-to-b from-stone-200 via-stone-100 to-stone-50",
  },
  {
    role: "Managing Director",
    name: "Mr. Mir Masud Kabir",
    tagline: "Operations & Modern Development",
    description:
      "Overseeing institutional expansion, state-of-the-art campus infrastructure, and technological innovation for 21st-century learning.",
    image: "/school-images/Admintration-main/Masud Kabir.jpg",
    badge: "Executive Leadership",
    positionColor: "from-primary/20 to-primary/5 text-primary border-primary/30",
    roleBadgeBg: "bg-[#520215] text-white border-white/20",
    icon: ShieldCheck,
    fitMode: "object-contain p-2.5 bg-gradient-to-b from-stone-200 via-stone-100 to-stone-50",
  },
  {
    role: "Principal",
    name: "Mrs. Sorabon Tohura",
    tagline: "Academic Excellence & Pedagogy",
    description:
      "Championing Cambridge curriculum rigor, faculty development, student welfare, and character-building across all academic divisions.",
    image: "/school-images/about/school-administration/Principal Madam/Principal Madam.webp",
    badge: "Academic Leadership",
    positionColor: "from-rose-600/20 to-rose-600/5 text-rose-800 border-rose-600/30",
    roleBadgeBg: "bg-[#7a0826] text-white border-amber-300/30",
    icon: GraduationCap,
    fitMode: "object-cover object-top",
  },
];

export function GovernanceHighlightSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-b border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/70">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                School Governance
              </span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-foreground">
              Leadership Dedicated to <br className="hidden sm:inline" />
              <span className="text-primary">Vision &amp; Excellence.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our experienced governing body and academic administration provide the strategic direction and compassionate guidance that make Playpen a benchmark institution.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about/school-administration"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-foreground transition-all duration-300 hover:bg-foreground hover:text-white hover:border-foreground"
            >
              <span>View Full Leadership &amp; Administration</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Governance Leaders Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {leaders.map((leader) => {
            const Icon = leader.icon;
            return (
              <article
                key={leader.role}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Portrait / Photo Header with Zoomed-Out Framing */}
                  <div className="relative aspect-[4/3.5] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      className={`${leader.fitMode} transition-transform duration-700 ease-out group-hover:scale-105`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Prominent High-Visibility Position Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider shadow-md border ${leader.roleBadgeBg}`}>
                        <Icon className="h-3.5 w-3.5 text-amber-300" />
                        <span>{leader.role}</span>
                      </span>
                    </div>

                    {/* Secondary Leadership Tag */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/10">
                        {leader.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    {/* Position Highlight Ribbon */}
                    <div className="inline-flex items-center gap-2 rounded-lg bg-primary/8 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary mb-3">
                      <span>{leader.role}</span>
                      <span className="text-primary/40">&bull;</span>
                      <span className="text-[11px] font-semibold text-muted-foreground">{leader.tagline}</span>
                    </div>

                    <h3 className="font-extrabold text-2xl text-foreground leading-tight group-hover:text-primary transition-colors">
                      {leader.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {leader.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
                    <Link
                      href="/about/school-administration"
                      className="inline-flex items-center gap-1.5 hover:underline"
                    >
                      <span>View leadership profile</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Administration Overview Strip */}
        <div className="mt-12 rounded-3xl border border-border/80 bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/15">
              <UserCheck className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h4 className="font-extrabold text-base sm:text-lg text-foreground">
                Divisional Vice Principals &amp; Teacher-in-Charges
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Supported by dedicated sectional coordinators ensuring exceptional academic delivery across all classes.
              </p>
            </div>
          </div>

          <Link
            href="/about/school-administration"
            className="shrink-0 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Explore Leadership Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
