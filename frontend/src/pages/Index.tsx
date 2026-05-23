import { Layout } from '@/components/layout/Layout';
import { HeroSlider } from '@/components/home/HeroSlider';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsSection } from '@/components/home/NewsSection';
import { SocialWall } from '@/components/home/SocialWall';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <StatsSection />
      <AboutPreview />
      <ProgramsSection />
      <TestimonialsSection />
      <NewsSection />
      <SocialWall />
      <CTASection />
    </Layout>
  );
};

export default Index;
