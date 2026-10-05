import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Palette, Rocket, Users, Sparkles } from "lucide-react";

const activities = [
  {
    title: "Sports & Athletics",
    description: "Inter-school football, basketball tournaments, annual sports day, and wellness.",
    image: "/school-images/site-wide/marquee/eca.webp",
    icon: Trophy,
    href: "/student-life/annual-sports",
    tag: "Athletics",
  },
  {
    title: "Arts & Cultural Gala",
    description: "Music, dramatic arts, dance ensembles, and national language competitions.",
    image: "/school-images/academics/student-achievements/Poem Recitation Competition – KG II/DSC05045.webp",
    icon: Palette,
    href: "/student-life/cultural-programme",
    tag: "Creativity",
  },
  {
    title: "Science & Robotics",
    description: "Olympiad training, science fairs, IT coding fests, and space exploration projects.",
    image: "/school-images/site-wide/marquee/achievements.webp",
    icon: Rocket,
    href: "/student-life/science-fair",
    tag: "Innovation",
  },
  {
    title: "Leadership & Prefect Body",
    description: "Student council, community outreach initiatives, and global debate delegations.",
    image: "/school-images/academics/student-achievements/Prefect Badge Giving Ceremony 2025/1.webp",
    icon: Users,
    href: "/student-life/community-service",
    tag: "Character",
  },
];

export function StudentLifeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-hover mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Beyond the Classroom</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
              VIBRANT STUDENT LIFE. <br />
              <span className="text-primary">PASSION IN ACTION.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From athletic championships and science symposiums to cultural stage performances, Playpen students explore diverse passions that build lifelong confidence.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/student-life"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-white transition hover:bg-primary"
            >
              <span>Explore All Activities</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <Link
                key={act.title}
                href={act.href}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
                      {act.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                      {act.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {act.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary">
                    <span>Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
