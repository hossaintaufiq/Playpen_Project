import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";

const uniformGuidelines = [
  "Pupils must wear the official Playpen school uniform on all school days unless otherwise notified.",
  "Uniforms should be clean, neat, and worn with pride as a representation of the school.",
  "Hair, shoes, and accessories must comply with school guidelines communicated at the start of the year.",
  "Sports and PE kits are required for physical education and designated activities.",
  "Parents should label uniform items to help with identification and lost-property returns.",
];

export default function SchoolUniformPage() {
  return (
    <SectionPageShell
      section="/admissions/school-uniform"
      title="School Uniform"
      subtitle="A smart, consistent dress code that reflects Playpen's values of discipline and unity."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <AboutContentSection title="Uniform Policy">
          <p>
            The school uniform helps create a sense of belonging and equality among pupils.
            Details of required items for each division are shared with families at admission
            and at the beginning of each academic year.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {uniformGuidelines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Uniform items may be available through the school bookshop. Please contact the
            Admin Office for the current uniform list and suppliers.
          </p>
        </AboutContentSection>
      </section>
    </SectionPageShell>
  );
}
