import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { SchoolLevelsSection } from "@/components/home/SchoolLevelsSection";
import { StudentLifeSection } from "@/components/home/StudentLifeSection";
import { CampusSection } from "@/components/home/CampusSection";
import { GovernanceHighlightSection } from "@/components/home/GovernanceHighlightSection";
import { CommunityHubSection } from "@/components/home/CommunityHubSection";
import { AdmissionsCTASection } from "@/components/home/AdmissionsCTASection";
import { HeritageIntroAnimation } from "@/components/ui/HeritageIntroAnimation";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";
import { getHeroSlidesFromFolder } from "@/lib/hero-slides";

export default async function Home() {
  const cms = getPublishedCMS(await getCMSData());
  const uploadedHeroSlides = await getHeroSlidesFromFolder();
  const heroSlides = uploadedHeroSlides.length ? uploadedHeroSlides : cms.heroSlides;

  return (
    <SiteLayout>
      {/* 49-Year Anniversary Intro Splash */}
      <HeritageIntroAnimation />

      {/* 01 — HERO SECTION */}
      <HeroSection slides={heroSlides} />

      {/* 02 — WELCOME TO PLAYPEN SECTION */}
      <IntroductionSection />

      {/* 03 — RECORD OF EXCELLENCE (ACHIEVEMENTS, STATS & SLIDER) */}
      <AchievementsSection achievements={cms.studentAchievements} />

      {/* 04 — ACADEMIC JOURNEY: EARLY CHILDHOOD TO SENIOR SCHOOL */}
      <SchoolLevelsSection />

      {/* 05 — STUDENT LIFE: SPORTS, ARTS, SCIENCE & LEADERSHIP */}
      <StudentLifeSection />

      {/* 06 — CAMPUS: SPACE TO LEARN. SPACE TO DREAM. */}
      <CampusSection />

      {/* 07 — SCHOOL GOVERNANCE & LEADERSHIP HIGHLIGHT */}
      <GovernanceHighlightSection />

      {/* 08 — COMMUNITY PULSE (NOTICES & UPCOMING EVENTS) */}
      <CommunityHubSection notices={cms.notices} events={cms.schoolEvents} />

      {/* 09 — ADMISSIONS CALL TO ACTION */}
      <AdmissionsCTASection />
    </SiteLayout>
  );
}
