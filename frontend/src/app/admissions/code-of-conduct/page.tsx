import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";

const conductRules = [
  "Show respect to teachers, staff, fellow pupils, and school property at all times.",
  "Arrive on time, attend all classes, and come prepared with required materials.",
  "Maintain honesty, integrity, and responsible behaviour in academic and social settings.",
  "Follow school policies on mobile phones, dress code, and use of school facilities.",
  "Resolve conflicts peacefully and seek help from staff when needed.",
  "Represent Playpen positively in school events and in the wider community.",
];

export default function CodeOfConductPage() {
  return (
    <SectionPageShell
      section="/admissions/code-of-conduct"
      title="Code of Conduct"
      subtitle="The standards of behaviour and character expected of every Playpen pupil."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <AboutContentSection title="Our Expectations">
          <p>
            Playpen expects all pupils to conduct themselves with courtesy, responsibility, and
            self-discipline. The code of conduct supports a safe, positive learning environment
            for everyone.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {conductRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Breaches of conduct are addressed fairly by teachers and the disciplinary committee,
            with corrective measures designed to guide pupils toward better choices.
          </p>
        </AboutContentSection>
      </section>
    </SectionPageShell>
  );
}
