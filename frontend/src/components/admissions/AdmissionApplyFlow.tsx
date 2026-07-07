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
    <div className="mx-auto max-w-2xl rounded-2xl border border-green-200 bg-green-50 p-6 text-center sm:rounded-3xl sm:p-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        <BookOpen className="h-7 w-7" />
      </div>
      <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">
        Application submitted
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Thank you for applying to Playpen School. Our admissions team will review your {title}{" "}
        application and contact you soon.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
        >
          Choose another form
        </button>
        <Link
          href="/admissions"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
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
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Select the admission level that applies to your child. Each form matches the official
            Playpen document — complete it online or download the printable PDF.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <AdmissionFormCards onSelect={setSelected} />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Need help? Visit the{" "}
          <Link href="/admissions/admission-procedure" className="font-semibold text-primary hover:underline">
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
