import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { CounsellorContent } from "@/components/academics/CounsellorContent";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { getSectionPreview } from "@/lib/school-images";

export default async function CounsellorPage() {
  const photoPreview = await getSectionPreview(
    "academics/counsellor",
    "Counsellor Photo Highlights",
    "counsellor",
  );

  return (
    <AcademicsPageShell
      section="/academics/counsellor"
      title="Counsellor"
      subtitle="Student and career counselling — guidance, support, and pathways for every pupil."
    >
      {photoPreview ? (
        <SectionPhotoPreview
          title={photoPreview.title}
          href={photoPreview.href}
          images={photoPreview.images}
        />
      ) : null}
      <CounsellorContent />
    </AcademicsPageShell>
  );
}
