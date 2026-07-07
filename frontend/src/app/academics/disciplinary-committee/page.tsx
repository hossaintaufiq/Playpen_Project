import { Scale, FileText, Users, AlertCircle } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const principles = [
  {
    icon: Scale,
    title: "Fair Process",
    text: "Every matter is reviewed fairly, consistently, and in accordance with school policy.",
  },
  {
    icon: FileText,
    title: "Clear Standards",
    text: "Pupils are expected to understand and follow the school's code of conduct.",
  },
  {
    icon: Users,
    title: "Collaborative Review",
    text: "The committee includes senior staff who consider cases with care and objectivity.",
  },
  {
    icon: AlertCircle,
    title: "Corrective Approach",
    text: "Discipline aims to guide pupils toward responsible behaviour and better choices.",
  },
];

const responsibilities = [
  "Reviewing serious breaches of school rules and conduct",
  "Recommending appropriate corrective or disciplinary measures",
  "Ensuring consistency in how policies are applied across divisions",
  "Maintaining records and reporting to school administration as required",
  "Supporting a safe, respectful environment for all pupils and staff",
];

export default function DisciplinaryCommitteePage() {
  return (
    <AcademicsPageShell
      section="/academics/disciplinary-committee"
      title="Disciplinary Committee"
      subtitle="Upholding standards of conduct, respect, and responsibility across the school community."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            The Disciplinary Committee helps maintain the order and values that make Playpen a
            safe and positive place to learn. Its work supports both accountability and pupil
            development.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
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
          <AboutContentSection title="Committee Responsibilities">
            <ul className="list-disc space-y-2 pl-5">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
