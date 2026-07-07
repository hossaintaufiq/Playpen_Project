import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionSubNav, type SectionSubNavItem } from "@/components/ui/SectionSubNav";

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

export function SectionPageShell({
  section,
  title,
  subtitle,
  navItems,
  rootHref,
  ariaLabel,
  heroImages,
  children,
}: SectionPageShellProps) {
  return (
    <SiteLayout>
      <PageHero
        title={title}
        subtitle={subtitle}
        image={heroImages[section]}
        imageAlt={title}
      />
      <SectionSubNav items={navItems} ariaLabel={ariaLabel} rootHref={rootHref} />
      {children}
    </SiteLayout>
  );
}
