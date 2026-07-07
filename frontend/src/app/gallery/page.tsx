import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/gallery/GallerySection";

export default function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Gallery"
        subtitle="Moments and memories from life at Playpen School."
        image="/images/marquee/eca.jpg"
        imageAlt="Playpen gallery"
      />
      <GallerySection />
    </SiteLayout>
  );
}
