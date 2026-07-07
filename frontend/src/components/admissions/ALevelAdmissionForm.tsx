"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import {
  FormField,
  FormGrid,
  FormSection,
  formInputClass,
  formLabelClass,
} from "@/components/admissions/AdmissionFormUI";
import {
  A_LEVEL_REQUIRED_DOCUMENTS,
  A_LEVEL_SESSION,
  A_LEVEL_SUBJECTS,
  A_LEVEL_SUBJECT_NOTES,
  getALevelInitialValues,
  parseSelectedSubjects,
  validateALevelApplication,
  type ALevelSubjectId,
} from "@/lib/a-level-admission";
import { admissionFormConfigs } from "@/lib/admission-forms";

type Props = {
  onBack: () => void;
  onSuccess: () => void;
};

function ParentColumn({
  title,
  prefix,
  values,
  onChange,
}: {
  title: string;
  prefix: "father" | "mother";
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  const fields = [
    { key: "Name", label: "Name", required: prefix === "father" || prefix === "mother" },
    { key: "Education", label: "Educational qualification" },
    { key: "Occupation", label: "Current occupation" },
    { key: "Designation", label: "Designation" },
    { key: "OfficeAddress", label: "Office address" },
    { key: "Email", label: "E-mail address", type: "email" as const },
    { key: "Contact", label: "Contact no.", type: "tel" as const },
  ];

  return (
    <div className="space-y-4">
      <p className="border-b border-border/60 pb-2 text-center text-sm font-bold uppercase tracking-wider text-primary">
        {title}
      </p>
      {fields.map((field) => {
        const name = `${prefix}${field.key}`;
        return (
          <FormField
            key={name}
            label={field.label}
            required={field.key === "Name"}
          >
            <input
              type={field.type ?? "text"}
              value={values[name] ?? ""}
              onChange={(e) => onChange(name, e.target.value)}
              className={formInputClass}
            />
          </FormField>
        );
      })}
    </div>
  );
}

export function ALevelAdmissionForm({ onBack, onSuccess }: Props) {
  const config = admissionFormConfigs["a-level"];
  const [values, setValues] = useState(getALevelInitialValues);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedSubjects = useMemo(
    () => parseSelectedSubjects(values.selectedSubjects),
    [values.selectedSubjects]
  );

  function setValue(key: string, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function toggleSubject(id: ALevelSubjectId) {
    const subject = A_LEVEL_SUBJECTS.find((item) => item.id === id);
    if (!subject) return;

    let next = [...selectedSubjects];

    if (next.includes(id)) {
      next = next.filter((item) => item !== id);
    } else {
      if (subject.orGroup) {
        next = next.filter(
          (item) =>
            A_LEVEL_SUBJECTS.find((s) => s.id === item)?.orGroup !== subject.orGroup
        );
      }
      next.push(id);
    }

    setValue("selectedSubjects", JSON.stringify(next));
    setValue("totalSubjects", String(next.length));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const missing = validateALevelApplication(values);
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
        body: JSON.stringify({ formType: "a-level", values }),
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
    <div className="mx-auto max-w-5xl">
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
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Advanced Subsidiary (AS) Level
          </h2>
          <p className="mt-1 text-sm font-medium uppercase tracking-widest text-white/90">
            Admission Form
          </p>
          <p className="mt-3 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide">
            Session: {A_LEVEL_SESSION}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-xs leading-relaxed text-white/80 sm:text-sm">
            All information should be written clearly in block letters. Please complete and return
            the admission form to the school with all necessary documents attached. Incomplete forms
            will not be accepted.
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
          <FormSection title="Personal Details">
            <FormGrid>
              <FormField label="Student's name (as in passport)" required className="sm:col-span-2">
                <input
                  value={values.studentName}
                  onChange={(e) => setValue("studentName", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Date of birth (as in passport)" required>
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
              <FormField label="E-mail address" required className="sm:col-span-2">
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => setValue("email", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Land phone">
                <input
                  type="tel"
                  value={values.landPhone}
                  onChange={(e) => setValue("landPhone", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Mobile phone" required>
                <input
                  type="tel"
                  value={values.mobilePhone}
                  onChange={(e) => setValue("mobilePhone", e.target.value)}
                  className={formInputClass}
                />
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

          <FormSection title="Parents' Details">
            <div className="grid gap-6 lg:grid-cols-2">
              <ParentColumn title="Father" prefix="father" values={values} onChange={setValue} />
              <ParentColumn title="Mother" prefix="mother" values={values} onChange={setValue} />
            </div>
            <div className="mt-5 border-t border-border/60 pt-5">
              <FormField label="Residence address" required>
                <textarea
                  rows={3}
                  value={values.residenceAddress}
                  onChange={(e) => setValue("residenceAddress", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
            </div>
          </FormSection>

          <FormSection title="Emergency Contact">
            <FormGrid>
              <FormField label="Name" required className="sm:col-span-2">
                <input
                  value={values.emergencyName}
                  onChange={(e) => setValue("emergencyName", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Relationship with applicant" required className="sm:col-span-2">
                <input
                  value={values.emergencyRelationship}
                  onChange={(e) => setValue("emergencyRelationship", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Address" required className="sm:col-span-2">
                <textarea
                  rows={2}
                  value={values.emergencyAddress}
                  onChange={(e) => setValue("emergencyAddress", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Contact no." required className="sm:col-span-2">
                <input
                  type="tel"
                  value={values.emergencyContact}
                  onChange={(e) => setValue("emergencyContact", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
            </FormGrid>
          </FormSection>

          <FormSection title="Additional Information">
            <FormGrid>
              <FormField label="Single parent" required>
                <select
                  value={values.singleParent}
                  onChange={(e) => setValue("singleParent", e.target.value)}
                  className={formInputClass}
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </FormField>
              <FormField label="Health issue of student (if any)">
                <input
                  value={values.healthIssues}
                  onChange={(e) => setValue("healthIssues", e.target.value)}
                  placeholder="Mention if any"
                  className={formInputClass}
                />
              </FormField>
              <div className="sm:col-span-2">
                <p className={formLabelClass}>Siblings</p>
                <div className="mt-2 flex flex-wrap gap-4">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={values.siblingsNone === "true"}
                      onChange={(e) => setValue("siblingsNone", e.target.checked ? "true" : "false")}
                    />
                    None
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    Brother(s)
                    <input
                      type="number"
                      min={0}
                      value={values.brothersCount}
                      onChange={(e) => setValue("brothersCount", e.target.value)}
                      className="w-16 rounded-lg border border-border/80 px-2 py-1"
                    />
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    Sister(s)
                    <input
                      type="number"
                      min={0}
                      value={values.sistersCount}
                      onChange={(e) => setValue("sistersCount", e.target.value)}
                      className="w-16 rounded-lg border border-border/80 px-2 py-1"
                    />
                  </label>
                </div>
              </div>
            </FormGrid>

            <div className="mt-5 overflow-x-auto rounded-xl border border-border/70">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/50">
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
                        <input
                          value={values[`playpenRelative${row}Name`]}
                          onChange={(e) => setValue(`playpenRelative${row}Name`, e.target.value)}
                          className={formInputClass}
                          placeholder="Details of siblings/cousins at Playpen"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          value={values[`playpenRelative${row}Relationship`]}
                          onChange={(e) =>
                            setValue(`playpenRelative${row}Relationship`, e.target.value)
                          }
                          className={formInputClass}
                        />
                      </td>
                      <td className="p-2">
                        <input
                          value={values[`playpenRelative${row}Class`]}
                          onChange={(e) => setValue(`playpenRelative${row}Class`, e.target.value)}
                          className={formInputClass}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FormSection>

          <FormSection title="Academic Performance">
            <FormGrid>
              <FormField label="Last educational institution attended" required className="sm:col-span-2">
                <input
                  value={values.lastInstitution}
                  onChange={(e) => setValue("lastInstitution", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Year of O' Level exam" required className="sm:col-span-2">
                <input
                  value={values.oLevelYear}
                  onChange={(e) => setValue("oLevelYear", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
            </FormGrid>

            <p className="mt-4 text-xs text-muted-foreground">
              Mention the subjects only if the results are not yet published.
            </p>

            <div className="mt-3 grid gap-4 lg:grid-cols-2">
              {[1, 2].map((column) => (
                <div key={column} className="overflow-hidden rounded-xl border border-border/70">
                  <table className="min-w-full text-sm">
                    <thead className="bg-primary/5">
                      <tr>
                        <th className="w-12 px-2 py-2 text-left">Sl#</th>
                        <th className="px-2 py-2 text-left">Subject</th>
                        <th className="w-20 px-2 py-2 text-left">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 5 }, (_, index) => {
                        const sl = (column - 1) * 5 + index + 1;
                        return (
                          <tr key={sl} className="border-t border-border/60">
                            <td className="px-2 py-2 font-medium text-muted-foreground">{sl}</td>
                            <td className="p-1">
                              <input
                                value={values[`oLevelSubject${sl}`]}
                                onChange={(e) => setValue(`oLevelSubject${sl}`, e.target.value)}
                                className={formInputClass}
                              />
                            </td>
                            <td className="p-1">
                              <input
                                value={values[`oLevelGrade${sl}`]}
                                onChange={(e) => setValue(`oLevelGrade${sl}`, e.target.value)}
                                className={formInputClass}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </FormSection>

          <FormSection title="Subject Choice for A' Levels at Playpen">
            <p className="text-sm font-medium text-foreground">
              Tick your choice of subjects (minimum 3):
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {A_LEVEL_SUBJECTS.map((subject) => {
                const checked = selectedSubjects.includes(subject.id);
                return (
                  <label
                    key={subject.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${
                      checked
                        ? "border-primary/40 bg-primary/5"
                        : "border-border/70 hover:border-primary/20"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSubject(subject.id)}
                      className="mt-1"
                    />
                    <span className="text-sm leading-snug">{subject.label}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/80 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-900">N.B.</p>
              <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-amber-950/90">
                {A_LEVEL_SUBJECT_NOTES.map((note) => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
            </div>

            <FormGrid className="mt-5">
              <FormField label="Total number of subjects">
                <input
                  value={values.totalSubjects}
                  readOnly
                  className={`${formInputClass} bg-muted/40`}
                />
              </FormField>
              <div className="hidden sm:block" />
              <FormField label="Hobbies" className="sm:col-span-2">
                <input
                  value={values.hobbies}
                  onChange={(e) => setValue("hobbies", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Other achievements" className="sm:col-span-2">
                <textarea
                  rows={3}
                  value={values.achievements}
                  onChange={(e) => setValue("achievements", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
            </FormGrid>
          </FormSection>

          <FormSection title="Undertaking">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We declare that the information provided in this admission form and all of its
              attachments are true, correct and complete.
            </p>
            <FormGrid className="mt-4">
              <FormField label="Father's full name (use block letters)" required>
                <input
                  value={values.fatherNameUndertaking}
                  onChange={(e) => setValue("fatherNameUndertaking", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Mother's full name (use block letters)" required>
                <input
                  value={values.motherNameUndertaking}
                  onChange={(e) => setValue("motherNameUndertaking", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
              <FormField label="Student's full name (use block letters)" required className="sm:col-span-2">
                <input
                  value={values.studentNameUndertaking}
                  onChange={(e) => setValue("studentNameUndertaking", e.target.value)}
                  className={formInputClass}
                />
              </FormField>
            </FormGrid>
            <p className="mt-3 text-xs text-muted-foreground">
              Signatures are required on the printed PDF submitted to the admissions office.
            </p>
          </FormSection>

          <FormSection title="Documents to Submit">
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {A_LEVEL_REQUIRED_DOCUMENTS.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ol>
          </FormSection>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={config.pdfPath}
              download={config.pdfFileName}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <Download className="h-4 w-4" />
              Download blank PDF for printing
            </a>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit application"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
