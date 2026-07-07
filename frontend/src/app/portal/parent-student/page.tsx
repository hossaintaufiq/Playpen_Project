import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

export default function ParentStudentPortalPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Parent / Student Portal"
        subtitle="Access notices, academic updates, and school services online."
        image="/images/marquee/student-services.jpg"
        imageAlt="Parent student portal"
      />
      <section className="mx-auto w-full max-w-md px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-border/60 bg-white p-6 text-center shadow-sm sm:rounded-3xl sm:p-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 sm:mb-6 sm:h-16 sm:w-16">
            <span className="font-serif text-xl font-bold text-primary sm:text-2xl">P</span>
          </div>
          <h2 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
            Parent &amp; Student Login
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Portal login for parents and students coming soon. Families will use this portal
            for notices, results, and online payments.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
