import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { AdmissionApplyFlow } from "@/components/admissions/AdmissionApplyFlow";

export default function AdmissionApplyPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Apply Now"
        subtitle="Select your admission level and complete the application online or download the form."
        image="/images/marquee/student-services.jpg"
        imageAlt="Playpen admissions"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <AdmissionApplyFlow />
      </section>
    </SiteLayout>
  );
}
