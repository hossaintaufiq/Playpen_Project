import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

export default function PortalPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Portal"
        subtitle="Access the Playpen admin and student portal."
      />
      <section className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <span className="font-serif text-2xl font-bold text-primary">P</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-foreground">Admin Portal</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Portal login and dashboard coming soon.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
