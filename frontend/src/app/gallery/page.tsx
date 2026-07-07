import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/gallery/GallerySection";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";

export default async function GalleryPage() {
  const cms = getPublishedCMS(await getCMSData());

  return (
    <SiteLayout>
      <PageHero
        title="Gallery"
        subtitle="Moments and memories from life at Playpen School."
        image="/images/marquee/eca.jpg"
        imageAlt="Playpen gallery"
      />
      <GallerySection initialEvents={cms.galleryEvents} />
    </SiteLayout>
  );
}
