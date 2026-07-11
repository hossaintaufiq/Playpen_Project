import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/gallery/GallerySection";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";
import {
  getGalleryEventsFromFolders,
  toSlimGalleryEvents,
  writePublicGalleryData,
} from "@/lib/school-images";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function GalleryPage() {
  const cms = getPublishedCMS(await getCMSData());
  const dynamicEvents = await getGalleryEventsFromFolders();
  const galleryEvents = dynamicEvents.length ? dynamicEvents : cms.galleryEvents;
  await writePublicGalleryData(galleryEvents).catch(() => undefined);
  const slimEvents = toSlimGalleryEvents(galleryEvents);
  const heroImage = slimEvents[0]?.coverImage || "/school-images/student-life/overview/overview-1.webp";

  return (
    <SiteLayout>
      <PageHero
        title="Gallery"
        subtitle="Moments and memories from life at Playpen School."
        image={heroImage}
        imageAlt="Playpen gallery"
      />
      <GallerySection initialEvents={slimEvents} />
    </SiteLayout>
  );
}
