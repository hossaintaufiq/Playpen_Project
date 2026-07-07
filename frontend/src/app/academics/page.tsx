import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { academicsNavItems } from "@/lib/academics-nav";

const programs = [
  { name: "Elementary School", grades: "Playgroup – KG II" },
  { name: "Junior School", grades: "Class I – III" },
  { name: "Middle School", grades: "Class IV – VII" },
  { name: "Senior School", grades: "Class VIII – XII (O & A Level)" },
];

const subPages = academicsNavItems.filter((item) => item.href !== "/academics");

export default function AcademicsPage() {
  return (
    <AcademicsPageShell
      section="/academics"
      title="Academics"
      subtitle="Cambridge curriculum designed to inspire excellence at every level."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Playpen offers a rigorous Cambridge pathway from playgroup through A-Level,
            supported by modern facilities, dedicated faculty, and comprehensive pupil support.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.name}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-primary sm:text-xl">
                {program.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{program.grades}</p>
            </div>
          ))}
        </div>

        <AboutContentSection title="Explore Academic Life">
          <p>
            Learn more about our school structure, learning resources, examinations, pupil
            support services, and the standards that help every Playpen student succeed.
          </p>
        </AboutContentSection>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_-10px_rgba(128,0,0,0.1)] transition duration-300 hover:border-primary/20 hover:shadow-[0_12px_32px_-12px_rgba(128,0,0,0.15)] sm:rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={page.heroImage}
                  alt={page.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/55 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
                  {page.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {page.description}
                </p>
                <span className="playpen-text mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </AcademicsPageShell>
  );
}
