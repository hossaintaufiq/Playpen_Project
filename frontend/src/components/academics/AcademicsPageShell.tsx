import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { academicsNavItems, type AcademicsNavHref } from "@/lib/academics-nav";

type AcademicsPageShellProps = {
  section: AcademicsNavHref;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function AcademicsPageShell({
  section,
  title,
  subtitle,
  children,
}: AcademicsPageShellProps) {
  const navItem = academicsNavItems.find((item) => item.href === section);

  return (
    <SiteLayout>
      <PageHero
        title={title}
        subtitle={subtitle}
        image={navItem?.heroImage}
        imageAlt={title}
      />
      {children}
    </SiteLayout>
  );
}
