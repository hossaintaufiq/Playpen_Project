import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import type { GalleryImage } from "@/lib/gallery-data";
import { studentLifeHeroImages, studentLifeNavItems } from "@/lib/student-life-nav";

type Props = {
  section: (typeof studentLifeNavItems)[number]["href"];
  title: string;
  subtitle: string;
  children: React.ReactNode;
  photoPreview?: { title: string; href: string; images: GalleryImage[] } | null;
};

export function StudentLifeSubPage({
  section,
  title,
  subtitle,
  children,
  photoPreview,
}: Props) {
  return (
    <SectionPageShell
      section={section}
      title={title}
      subtitle={subtitle}
      navItems={studentLifeNavItems}
      rootHref="/student-life"
      ariaLabel="Student life sections"
      heroImages={studentLifeHeroImages}
    >
      {photoPreview ? (
        <SectionPhotoPreview
          title={photoPreview.title}
          href={photoPreview.href}
          images={photoPreview.images}
        />
      ) : null}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {children}
      </section>
    </SectionPageShell>
  );
}

export function StudentLifeContent({ title, children }: { title: string; children: React.ReactNode }) {
  return <AboutContentSection title={title}>{children}</AboutContentSection>;
}
