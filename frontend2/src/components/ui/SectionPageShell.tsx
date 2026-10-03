import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { type SectionSubNavItem } from "@/components/ui/SectionSubNav";

type SectionPageShellProps = {
  section: string;
  title: string;
  subtitle: string;
  navItems: readonly SectionSubNavItem[];
  rootHref: string;
  ariaLabel: string;
  heroImages: Record<string, string>;
  children: React.ReactNode;
};

export function SectionPageShell(props: SectionPageShellProps) {
  const { section, title, subtitle, heroImages, children } = props;
  return (
    <SiteLayout>
      <PageHero
        title={title}
        subtitle={subtitle}
        image={heroImages[section]}
        imageAlt={title}
      />
      {children}
    </SiteLayout>
  );
}
