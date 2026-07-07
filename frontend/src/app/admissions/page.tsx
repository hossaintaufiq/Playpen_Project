import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { SectionHubGrid } from "@/components/ui/SectionHubGrid";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";
import { schoolContact } from "@/lib/contact";

export default function AdmissionsPage() {
  return (
    <SectionPageShell
      section="/admissions"
      title="Admissions"
      subtitle="Join the Playpen family — applications open for the upcoming academic year."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Our admission process is designed to be simple and transparent. Forms are available
            in the Admin Office and on the website. Contact our admissions office for
            assistance during office hours.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <a
            href="/admissions/apply"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Apply Now
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:mt-12 sm:rounded-3xl sm:p-6">
          <p className="text-sm font-semibold text-foreground sm:text-base">Admissions Office</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground sm:text-base">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {schoolContact.address.line1}, {schoolContact.address.line2},{" "}
                {schoolContact.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={schoolContact.mobileHref} className="hover:text-primary">
                {schoolContact.mobile}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={schoolContact.phoneHref} className="hover:text-primary">
                {schoolContact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={schoolContact.emailHref} className="break-all hover:text-primary">
                {schoolContact.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="Before You Apply">
          <p>
            Review the admission procedure, school uniform requirements, and code of conduct
            so your family understands Playpen&apos;s expectations from the very beginning.
          </p>
          </AboutContentSection>
        </div>

        <SectionHubGrid items={admissionsNavItems} rootHref="/admissions" />
      </section>
    </SectionPageShell>
  );
}
