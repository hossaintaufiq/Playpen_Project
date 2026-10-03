import { SectionSubNav } from "@/components/ui/SectionSubNav";
import { academicsNavItems } from "@/lib/academics-nav";

export function AcademicsSubNav() {
  return (
    <SectionSubNav
      items={academicsNavItems}
      ariaLabel="Academics sections"
      rootHref="/academics"
    />
  );
}
