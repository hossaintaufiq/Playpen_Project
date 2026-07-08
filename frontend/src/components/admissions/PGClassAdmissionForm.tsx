"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import {
  FormField,
  FormGrid,
  FormSection,
  formInputClass,
  formLabelClass,
} from "@/components/admissions/AdmissionFormUI";
import { admissionFormConfigs } from "@/lib/admission-forms";
import {
  PG_CLASS_LEVELS,
  PG_CLASS_SESSION,
  PG_CLASS_SUBMISSION_NOTE,
  getPGClassInitialValues,
  validatePGClassApplication,
} from "@/lib/pg-class-admission";

type Props = {
  onBack: () => void;
  onSuccess: () => void;
};

export function PGClassAdmissionForm({ onBack, onSuccess }: Props) {
  const config = admissionFormConfigs["pg-class-ix"];
  const [values, setValues] = useState(getPGClassInitialValues);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function setValue(key: string, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const missing = validatePGClassApplication(values);
    if (missing.length > 0) {
      setError(`Please complete: ${missing.slice(0, 3).join(", ")}${missing.length > 3 ? "…" : ""}`);
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admissions/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "pg-class-ix", values }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-5xl">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to form selection
      </button>

      <div className="mt-5 overflow-hidden rounded-3xl border border-border/60 bg-muted/20 shadow-sm">
        <div className="border-b border-primary/15 bg-gradient-to-br from-primary via-primary to-primary-dark px-5 py-8 text-center text-white sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">Playpen</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">Admission Form</h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/95">
            Playgroup – Class X
          </p>
          <p className="mt-3 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide">
            Academic Year: {PG_CLASS_SESSION}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-xs leading-relaxed text-white/80 sm:text-sm">
            Please fill in all information clearly in block letters. Complete every section
            accurately before submission.
          </p>
          <a
            href={config.pdfPath}
            download={config.pdfFileName}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/90"
          >
            <Download className="h-4 w-4" />
            Download printable PDF
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-4 sm:p-6">
          <FormGrid>
            <FormField label="Money receipt no.">
              <input
                value={values.moneyReceiptNo}
                onChange={(e) => setValue("moneyReceiptNo", e.target.value)}
                className={formInputClass}
              />
            </FormField>
            <FormField label="Date">
              <input
                type="date"
                value={values.applicationDate}
                onChange={(e) => setValue("applicationDate", e.target.value)}
                className={formInputClass}
              />
            </FormField>
          </FormGrid>

          <FormSection title="A. Personal Information">
            <FormGrid>
              <FormField label="Student's name" required className="sm:col-span-2">
                <input
                  value={values.studentName}
                  onChange={(e) => setValue("studentName", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Class applying for" required>
                <select
                  value={values.classApplying}
                  onChange={(e) => setValue("classApplying", e.target.value)}
                  className={formInputClass}
                >
                  <option value="">Select class...</option>
                  {PG_CLASS_LEVELS.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField label="Date of birth" required>
                <input
                  type="date"
                  value={values.dateOfBirth}
                  onChange={(e) => setValue("dateOfBirth", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Gender" required>
                <select
                  value={values.gender}
                  onChange={(e) => setValue("gender", e.target.value)}
                  className={formInputClass}
                >
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </FormField>
              <FormField label="Nationality" required>
                <input
                  value={values.nationality}
                  onChange={(e) => setValue("nationality", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Religion" required>
                <input
                  value={values.religion}
                  onChange={(e) => setValue("religion", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
            </FormGrid>
          </FormSection>

          <FormSection title="B. Family Details">
            <div className="space-y-5">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">Father</p>
                <FormGrid>
                  <FormField label="Father's full name" required className="sm:col-span-2">
                    <input value={values.fatherName} onChange={(e) => setValue("fatherName", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Educational qualification" className="sm:col-span-2">
                    <input value={values.fatherEducation} onChange={(e) => setValue("fatherEducation", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Profession">
                    <input value={values.fatherProfession} onChange={(e) => setValue("fatherProfession", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Designation">
                    <input value={values.fatherDesignation} onChange={(e) => setValue("fatherDesignation", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Office address" className="sm:col-span-2">
                    <textarea rows={2} value={values.fatherOfficeAddress} onChange={(e) => setValue("fatherOfficeAddress", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Office contact no.">
                    <input type="tel" value={values.fatherOfficeContact} onChange={(e) => setValue("fatherOfficeContact", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="E-mail">
                    <input type="email" value={values.fatherEmail} onChange={(e) => setValue("fatherEmail", e.target.value)} className={formInputClass} />
                  </FormField>
                </FormGrid>
              </div>

              <div className="border-t border-border/60 pt-5">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">Mother</p>
                <FormGrid>
                  <FormField label="Mother's full name" required className="sm:col-span-2">
                    <input value={values.motherName} onChange={(e) => setValue("motherName", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Educational qualification" className="sm:col-span-2">
                    <input value={values.motherEducation} onChange={(e) => setValue("motherEducation", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Occupation" className="sm:col-span-2">
                    <input value={values.motherOccupation} onChange={(e) => setValue("motherOccupation", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Office address" className="sm:col-span-2">
                    <textarea rows={2} value={values.motherOfficeAddress} onChange={(e) => setValue("motherOfficeAddress", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="Office contact no.">
                    <input type="tel" value={values.motherOfficeContact} onChange={(e) => setValue("motherOfficeContact", e.target.value)} className={formInputClass} />
                  </FormField>
                  <FormField label="E-mail">
                    <input type="email" value={values.motherEmail} onChange={(e) => setValue("motherEmail", e.target.value)} className={formInputClass} />
                  </FormField>
                </FormGrid>
              </div>
            </div>
          </FormSection>

          <FormSection title="C. Residential Address & Contact No.">
            <FormGrid>
              <FormField label="Residential address" required className="sm:col-span-2">
                <textarea rows={3} value={values.residenceAddress} onChange={(e) => setValue("residenceAddress", e.target.value)} className={formInputClass} />
              </FormField>
              <FormField label="Contact number" required className="sm:col-span-2">
                <input type="tel" value={values.residenceContact} onChange={(e) => setValue("residenceContact", e.target.value)} className={formInputClass} />
              </FormField>
            </FormGrid>
          </FormSection>

          <FormSection title="D. Second Person to be Contacted in Case of Emergency">
            <FormGrid>
              <FormField label="Name" required className="sm:col-span-2">
                <input value={values.emergencyName} onChange={(e) => setValue("emergencyName", e.target.value)} className={formInputClass} />
              </FormField>
              <FormField label="Relationship with applicant" required className="sm:col-span-2">
                <input value={values.emergencyRelationship} onChange={(e) => setValue("emergencyRelationship", e.target.value)} className={formInputClass} />
              </FormField>
              <FormField label="Address" required className="sm:col-span-2">
                <textarea rows={2} value={values.emergencyAddress} onChange={(e) => setValue("emergencyAddress", e.target.value)} className={formInputClass} />
              </FormField>
              <FormField label="Contact no." required className="sm:col-span-2">
                <input type="tel" value={values.emergencyContact} onChange={(e) => setValue("emergencyContact", e.target.value)} className={formInputClass} />
              </FormField>
            </FormGrid>
            <p className="mt-3 text-xs text-muted-foreground">
              Must be different from the residential address and contact number.
            </p>
          </FormSection>

          <FormSection title="E – I. Additional Information">
            <FormGrid>
              <FormField label="E. Previous school attended" className="sm:col-span-2">
                <input value={values.previousSchool} onChange={(e) => setValue("previousSchool", e.target.value)} className={formInputClass} />
              </FormField>
              <FormField label="F. Single parent" required>
                <select value={values.singleParent} onChange={(e) => setValue("singleParent", e.target.value)} className={formInputClass}>
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </FormField>
              <div>
                <p className={formLabelClass}>G. Siblings</p>
                <div className="mt-2 flex flex-wrap gap-4">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={values.siblingsNone === "true"} onChange={(e) => setValue("siblingsNone", e.target.checked ? "true" : "false")} />
                    None
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    Brother(s)
                    <input type="number" min={0} value={values.brothersCount} onChange={(e) => setValue("brothersCount", e.target.value)} className="w-16 rounded-lg border border-border/80 px-2 py-1" />
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    Sister(s)
                    <input type="number" min={0} value={values.sistersCount} onChange={(e) => setValue("sistersCount", e.target.value)} className="w-16 rounded-lg border border-border/80 px-2 py-1" />
                  </label>
                </div>
              </div>
            </FormGrid>

            <div className="mt-5 overflow-x-auto rounded-xl border border-border/70">
              <p className="border-b border-border/60 bg-muted/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                H. Details of any sibling or cousin studying in Playpen
              </p>
              <table className="min-w-full text-sm">
                <thead className="bg-primary/5">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Name</th>
                    <th className="px-3 py-2 text-left font-semibold">Relationship</th>
                    <th className="px-3 py-2 text-left font-semibold">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map((row) => (
                    <tr key={row} className="border-t border-border/60">
                      <td className="p-2">
                        <input value={values[`playpenRelative${row}Name`]} onChange={(e) => setValue(`playpenRelative${row}Name`, e.target.value)} className={formInputClass} />
                      </td>
                      <td className="p-2">
                        <input value={values[`playpenRelative${row}Relationship`]} onChange={(e) => setValue(`playpenRelative${row}Relationship`, e.target.value)} className={formInputClass} />
                      </td>
                      <td className="p-2">
                        <input value={values[`playpenRelative${row}Class`]} onChange={(e) => setValue(`playpenRelative${row}Class`, e.target.value)} className={formInputClass} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <FormField label="I. Referred to Playpen by" className="sm:col-span-2">
                <input value={values.referredBy} onChange={(e) => setValue("referredBy", e.target.value)} className={formInputClass} />
              </FormField>
            </div>
          </FormSection>

          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-amber-950/90">
            * {PG_CLASS_SUBMISSION_NOTE}
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          )}

          <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <a href={config.pdfPath} download={config.pdfFileName} className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline">
              <Download className="h-4 w-4" />
              Download blank PDF for printing
            </a>
            <button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60">
              {submitting ? "Submitting..." : "Submit application"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
