import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

export default function AdminPortalPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Admin Portal"
        subtitle="Secure access for Playpen staff and administration."
        image="/images/marquee/faculty.jpg"
        imageAlt="Admin portal"
      />
      <section className="mx-auto w-full max-w-md px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-border/60 bg-white p-6 text-center shadow-sm sm:rounded-3xl sm:p-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 sm:mb-6 sm:h-16 sm:w-16">
            <span className="font-serif text-xl font-bold text-primary sm:text-2xl">A</span>
          </div>
          <h2 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
            Admin Login
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Admin portal login and dashboard coming soon. Authorized staff will sign in here
            to manage school operations.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
