import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="About Playpen"
        subtitle="48 years of excellence in education — shaping future leaders since 1977."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-muted-foreground leading-relaxed">
          Playpen is one of Bangladesh&apos;s leading English medium schools, offering the
          Cambridge curriculum from playgroup through A-Level. Our mission is to develop
          well-rounded individuals who excel academically and grow into responsible global citizens.
        </p>
      </section>
    </SiteLayout>
  );
}
