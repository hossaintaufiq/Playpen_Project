import { FlaskConical, Microscope, Monitor, ShieldCheck } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const labs = [
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    text: "Equipped for practical experiments in physics, chemistry, and biology across middle and senior levels.",
  },
  {
    icon: Microscope,
    title: "Hands-On Learning",
    text: "Pupils apply theoretical concepts through supervised practical work and scientific investigation.",
  },
  {
    icon: Monitor,
    title: "ICT Facilities",
    text: "Computer labs support digital literacy, coding, research, and Cambridge ICT requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "All laboratory sessions follow strict safety protocols under qualified teacher supervision.",
  },
];

export default function LaboratoriesPage() {
  return (
    <AcademicsPageShell
      section="/academics/laboratories"
      title="Laboratories"
      subtitle="Modern science and ICT facilities where theory meets practical discovery."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {labs.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="Practical Excellence">
            <p>
              Playpen&apos;s laboratories are an essential part of our Cambridge programme,
              giving pupils the opportunity to develop scientific skills, technical competence,
              and confidence through structured practical experience.
            </p>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
