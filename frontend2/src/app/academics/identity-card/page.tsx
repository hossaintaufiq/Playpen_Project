import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { IdentityCardContent } from "@/components/academics/IdentityCardContent";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { getSectionPreview } from "@/lib/school-images";

export default async function IdentityCardPage() {
  const photoPreview = await getSectionPreview(
    "academics/identity-card",
    "Identity Card Photo Highlights",
    "identity",
  );

  return (
    <AcademicsPageShell
      section="/academics/identity-card"
      title="The Identity Card"
      subtitle="Official student identification — issued on admission and required on campus every day."
    >
      {photoPreview ? (
        <SectionPhotoPreview
          title={photoPreview.title}
          href={photoPreview.href}
          images={photoPreview.images}
        />
      ) : null}
      <IdentityCardContent />
    </AcademicsPageShell>
  );
}
