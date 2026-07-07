import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
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
      {/* Hero */}
      <section className="playpen-bg relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90">
              Welcome to Playpen
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nurturing Young Minds for a Brighter Future
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Where every child discovers their potential through innovative learning,
              creativity, and care in a world-class environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="playpen-text rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
              >
                Apply for Admission
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Stats */}
      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
            >
              <p className="playpen-text font-serif text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Playpen?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A legacy of educational excellence built on trust, innovation, and community.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="playpen-bg bg-primary px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Begin Your Child&apos;s Journey Today
          </h2>
          <p className="mt-4 text-white/80">
            Admissions are open for the upcoming academic year. Join the Playpen family.
          </p>
          <Link
            href="/admissions"
            className="playpen-text mt-8 inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
          >
            Start Application
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
