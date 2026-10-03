import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { CampusSection } from "@/components/home/CampusSection";
import { SchoolLevelsSection } from "@/components/home/SchoolLevelsSection";
import { StudentLifeSection } from "@/components/home/StudentLifeSection";
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

      {/* 01 — HERO */}
      <HeroSection slides={heroSlides} />

      {/* 02 — SCHOOL INTRODUCTION: MORE THAN A SCHOOL */}
      <IntroductionSection />

      {/* 03 — ACHIEVEMENTS: PROUD OF WHAT WE'VE ACHIEVED / A RECORD OF EXCELLENCE */}
      <AchievementsSection achievements={cms.studentAchievements} />

      {/* 04 — CAMPUS: SPACE TO LEARN. SPACE TO DREAM. */}
      <CampusSection />

      {/* 05 — ACADEMICS: EARLY CHILDHOOD TO SENIOR SCHOOL */}
      <SchoolLevelsSection />

      {/* 06 — STUDENT LIFE: SPORTS, ARTS, CLUBS & LEADERSHIP */}
      <StudentLifeSection />

      {/* 07 — NOTICES & UPCOMING EVENTS */}
      <CommunityHubSection notices={cms.notices} events={cms.schoolEvents} />

      {/* 08 — ADMISSIONS: READY TO JOIN THE PLAYPEN COMMUNITY? */}
      <AdmissionsCTASection />
    </SiteLayout>
  );
}

