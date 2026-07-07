import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

export default function PortalPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Portal"
        subtitle="Access the Playpen admin and student portal."
      />
      <section className="mx-auto w-full max-w-md px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-xl border border-border bg-white p-6 text-center shadow-sm sm:rounded-2xl sm:p-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 sm:mb-6 sm:h-16 sm:w-16">
            <span className="font-serif text-xl font-bold text-primary sm:text-2xl">P</span>
          </div>
          <h2 className="font-serif text-lg font-bold text-foreground sm:text-xl">Admin Portal</h2>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
            Portal login and dashboard coming soon.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
