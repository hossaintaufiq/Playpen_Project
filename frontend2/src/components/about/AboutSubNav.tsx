import { SectionSubNav } from "@/components/ui/SectionSubNav";
import { aboutNavItems } from "@/lib/about-nav";

export function AboutSubNav() {
  return (
    <SectionSubNav
      items={aboutNavItems}
      ariaLabel="About sections"
      rootHref="/about"
    />
  );
}
