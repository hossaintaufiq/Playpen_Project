import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/gallery/GallerySection";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";
import { getGalleryEventsFromFolders } from "@/lib/school-images";
import type { GalleryCategory } from "@/lib/gallery-data";

type GalleryPageProps = {
  searchParams?: Promise<{
    search?: string;
    category?: string;
  }>;
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const cms = getPublishedCMS(await getCMSData());
  const dynamicEvents = await getGalleryEventsFromFolders();
  const params = (await searchParams) ?? {};
  const category = (params.category ?? "All") as GalleryCategory;
  const initialCategory: GalleryCategory =
    ["All", "Events", "Sports", "Academics", "Arts", "Celebrations", "Campus"].includes(category)
      ? category
      : "All";
  const galleryEvents = dynamicEvents.length ? dynamicEvents : cms.galleryEvents;

  return (
    <SiteLayout>
      <PageHero
        title="Gallery"
        subtitle="Moments and memories from life at Playpen School."
        image="/images/marquee/eca.jpg"
        imageAlt="Playpen gallery"
      />
      <GallerySection
        initialEvents={galleryEvents}
        initialSearch={params.search ?? ""}
        initialCategory={initialCategory}
      />
    </SiteLayout>
  );
}
