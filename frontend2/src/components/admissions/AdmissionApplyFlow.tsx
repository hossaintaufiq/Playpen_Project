"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ALevelAdmissionForm } from "@/components/admissions/ALevelAdmissionForm";
import { AdmissionFormCards } from "@/components/admissions/AdmissionFormCards";
import { PGClassAdmissionForm } from "@/components/admissions/PGClassAdmissionForm";
import { admissionFormConfigs, type AdmissionFormType } from "@/lib/admission-forms";

function SuccessMessage({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl brutal-border bg-white p-6 text-center sm:p-10 brutal-shadow border-l-8 border-l-emerald-600">
      <div className="mx-auto flex h-14 w-14 items-center justify-center bg-emerald-600 text-white">
        <BookOpen className="h-7 w-7" />
      </div>
      <h2 className="mt-5 font-serif text-3xl font-black text-[#121212]">
        Application Submitted
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">
        Thank you for applying to Playpen School. Our admissions team will review your {title}{" "}
        application and contact you soon with assessment and interview schedules.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 border-t-2 border-[#121212] pt-6">
        <button
          type="button"
          onClick={onBack}
          className="brutal-btn bg-white text-[#121212] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#faf7f2]"
        >
          Choose another form
        </button>
        <Link
          href="/admissions"
          className="brutal-btn bg-[#6b0c26] text-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#121212]"
        >
          Back to admissions
        </Link>
      </div>
    </div>
  );
}

export function AdmissionApplyFlow() {
  const [selected, setSelected] = useState<AdmissionFormType | null>(null);
  const [success, setSuccess] = useState(false);

  const config = selected ? admissionFormConfigs[selected] : null;

  function closeForm() {
    setSelected(null);
    setSuccess(false);
  }

  if (!selected || !config) {
    return (
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-base sm:text-lg leading-relaxed text-[#121212]/85">
            Select the admission level that applies to your child. Each form matches the official
            Playpen document — complete it online or download the printable PDF.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <AdmissionFormCards onSelect={setSelected} />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-xs text-[#121212]/70">
          Need help? Visit the{" "}
          <Link href="/admissions/admission-procedure" className="font-bold text-[#6b0c26] underline">
            admission procedure
          </Link>{" "}
          page or contact the admissions office during office hours.
        </p>
      </div>
    );
  }

  if (success) {
    return <SuccessMessage title={config.title} onBack={closeForm} />;
  }

  if (config.id === "pg-class-ix") {
    return <PGClassAdmissionForm onBack={closeForm} onSuccess={() => setSuccess(true)} />;
  }

  return <ALevelAdmissionForm onBack={closeForm} onSuccess={() => setSuccess(true)} />;
}

