import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { MissionSection } from "@/components/home/MissionSection";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Cambridge Curriculum",
    text: "Internationally recognized education from playgroup through A-Level.",
  },
  {
    icon: BookOpen,
    title: "Holistic Learning",
    text: "Academic excellence balanced with arts, sports, and character building.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    text: "Dedicated educators committed to every child's growth and success.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    text: "Decades of outstanding results and a legacy of achievement.",
  },
];

const stats = [
  { value: "5000+", label: "Students" },
  { value: "200+", label: "Teachers" },
  { value: "48+", label: "Years" },
  { value: "50+", label: "Awards" },
];

export default function Home() {
  return (
    <SiteLayout>
      <section className="playpen-bg relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/90 sm:px-4 sm:text-xs">
              Welcome to Playpen
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Nurturing Young Minds for a Brighter Future
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base md:text-lg">
              Where every child discovers their potential through innovative learning,
              creativity, and care in a world-class environment.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/admissions"
                className="playpen-text w-full rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-primary transition hover:bg-white/90 sm:w-auto"
              >
                Apply for Admission
              </Link>
              <Link
                href="/about"
                className="w-full rounded-lg border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="h-12 bg-gradient-to-b from-transparent to-background sm:h-16" />
      </section>

      <section className="bg-background py-10 sm:py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-6 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-white p-4 text-center shadow-sm sm:rounded-2xl sm:p-6"
            >
              <p className="playpen-text font-serif text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <MissionSection />

      <section className="bg-muted py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Why Choose Playpen?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
              A legacy of educational excellence built on trust, innovation, and community.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:rounded-2xl sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="playpen-bg bg-primary px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Begin Your Child&apos;s Journey Today
          </h2>
          <p className="mt-3 text-sm text-white/80 sm:mt-4 sm:text-base">
            Admissions are open for the upcoming academic year. Join the Playpen family.
          </p>
          <Link
            href="/admissions"
            className="playpen-text mt-6 inline-flex w-full justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-white/90 sm:mt-8 sm:w-auto"
          >
            Start Application
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
