import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { SectionHubGrid } from "@/components/ui/SectionHubGrid";
import { studentLifeHeroImages, studentLifeNavItems } from "@/lib/student-life-nav";

export default function StudentLifePage() {
  return (
    <SectionPageShell
      section="/student-life"
      title="Student Life"
      subtitle="A vibrant community where students learn, grow, and thrive beyond the classroom."
      navItems={studentLifeNavItems}
      rootHref="/student-life"
      ariaLabel="Student life sections"
      heroImages={studentLifeHeroImages}
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            At Playpen, education extends far beyond lessons. Pupils enjoy sports, arts,
            service, workshops, and campus services that support their wellbeing and
            development as whole individuals.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="Explore Student Life">
          <p>
            Discover the programmes, facilities, and opportunities that make Playpen a
            dynamic place to grow — from annual sports and cultural events to health
            services, bookshop, and transportation.
          </p>
          </AboutContentSection>
        </div>

        <SectionHubGrid items={studentLifeNavItems} rootHref="/student-life" />
      </section>
    </SectionPageShell>
  );
}
