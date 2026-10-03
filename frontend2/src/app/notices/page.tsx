import { SiteLayout } from "@/components/layout/SiteLayout";
import { NoticesAnnouncementsContent } from "@/components/notices/NoticesAnnouncementsContent";
import { PageHero } from "@/components/ui/PageHero";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";

export default async function NoticesPage() {
  const cms = getPublishedCMS(await getCMSData());

  return (
    <SiteLayout>
      <PageHero
        title="Notices & Announcements"
        subtitle="Official school updates, reminders, and important communications for Playpen families."
        image="/images/marquee/student-services.jpg"
        imageAlt="Playpen school notices and announcements"
      />
      <NoticesAnnouncementsContent notices={cms.notices} newsTicker={cms.newsTicker} />
    </SiteLayout>
  );
}
