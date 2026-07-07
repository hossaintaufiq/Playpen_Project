import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { DiscoverMarqueeSection } from "@/components/home/DiscoverMarqueeSection";
import { SchoolLevelsSection } from "@/components/home/SchoolLevelsSection";
import { MissionSection } from "@/components/home/MissionSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CommunityHubSection } from "@/components/home/CommunityHubSection";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";

export default async function Home() {
  const cms = getPublishedCMS(await getCMSData());

  return (
    <SiteLayout>
      <HeroSection slides={cms.heroSlides} />
      <DiscoverMarqueeSection />
      <SchoolLevelsSection />
      <MissionSection />
      <WhyChooseSection />
      <CommunityHubSection notices={cms.notices} events={cms.schoolEvents} />
    </SiteLayout>
  );
}
