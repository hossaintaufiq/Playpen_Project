import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { studentLifeHeroImages, studentLifeNavItems } from "@/lib/student-life-nav";

type Props = {
  section: (typeof studentLifeNavItems)[number]["href"];
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function StudentLifeSubPage({ section, title, subtitle, children }: Props) {
  return (
    <SectionPageShell
      section={section}
      title={title}
      subtitle={subtitle}
      navItems={studentLifeNavItems}
      rootHref="/student-life"
      ariaLabel="Student life sections"
      heroImages={studentLifeHeroImages}
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {children}
      </section>
    </SectionPageShell>
  );
}

export function StudentLifeContent({ title, children }: { title: string; children: React.ReactNode }) {
  return <AboutContentSection title={title}>{children}</AboutContentSection>;
}
