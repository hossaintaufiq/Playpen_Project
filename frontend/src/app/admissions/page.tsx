import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

export default function AdmissionsPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Admissions"
        subtitle="Join the Playpen family — applications open for the upcoming academic year."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-muted-foreground leading-relaxed">
          Our admission process is designed to be simple and transparent. Submit your
          application online, attend an assessment interview, and receive a decision within
          one week. Contact our admissions office for more information.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-muted p-6">
          <p className="text-sm font-semibold text-foreground">Admissions Office</p>
          <p className="mt-2 text-sm text-muted-foreground">admissions@playpen.edu.bd</p>
          <p className="text-sm text-muted-foreground">+880 1234-567890</p>
        </div>
      </section>
    </SiteLayout>
  );
}
