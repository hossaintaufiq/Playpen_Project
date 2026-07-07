import { HeartHandshake, BookMarked, Accessibility, MessageCircle } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const services = [
  {
    icon: BookMarked,
    title: "Academic Guidance",
    text: "Support for study skills, homework routines, and navigating the Cambridge curriculum.",
  },
  {
    icon: HeartHandshake,
    title: "Pastoral Care",
    text: "A caring approach that helps pupils feel secure, valued, and ready to learn.",
  },
  {
    icon: Accessibility,
    title: "Individual Needs",
    text: "Attention to pupils who may need additional support to access learning effectively.",
  },
  {
    icon: MessageCircle,
    title: "Parent Partnership",
    text: "Regular communication with families to address concerns and celebrate progress.",
  },
];

export default function StudentSupportPage() {
  return (
    <AcademicsPageShell
      section="/academics/student-support"
      title="Student Support"
      subtitle="Comprehensive care and guidance so every pupil can learn with confidence."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            We assure you of the best possible care and education for your child. Our student
            support services work alongside classroom teaching to help pupils thrive academically
            and personally.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
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
          <AboutContentSection title="How We Help">
            <p>
              Class teachers, division heads, and support staff collaborate to identify pupils
              who may benefit from additional guidance. Parents are encouraged to reach out
              early if they have concerns about their child&apos;s learning or wellbeing.
            </p>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
