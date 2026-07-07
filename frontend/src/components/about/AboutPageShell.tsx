import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { AboutSubNav } from "./AboutSubNav";
import { aboutNavItems, type AboutNavHref } from "@/lib/about-nav";

type AboutPageShellProps = {
  section: AboutNavHref;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function AboutPageShell({ section, title, subtitle, children }: AboutPageShellProps) {
  const navItem = aboutNavItems.find((item) => item.href === section);

  return (
    <SiteLayout>
      <PageHero
        title={title}
        subtitle={subtitle}
        image={navItem?.heroImage}
        imageAlt={title}
      />
      <AboutSubNav />
      {children}
    </SiteLayout>
  );
}
