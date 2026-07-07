import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { DiscoverMarqueeSection } from "@/components/home/DiscoverMarqueeSection";
import { SchoolLevelsSection } from "@/components/home/SchoolLevelsSection";
import { MissionSection } from "@/components/home/MissionSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CommunityHubSection } from "@/components/home/CommunityHubSection";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <DiscoverMarqueeSection />
      <SchoolLevelsSection />
      <MissionSection />
      <WhyChooseSection />
      <CommunityHubSection />
    </SiteLayout>
  );
}
