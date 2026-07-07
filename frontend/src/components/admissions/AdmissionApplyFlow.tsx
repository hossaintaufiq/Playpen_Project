"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  GraduationCap,
  School,
} from "lucide-react";
import {
  admissionFormConfigs,
  admissionFormList,
  type AdmissionFormType,
} from "@/lib/admission-forms";

const cardIcons = {
  "pg-class-ix": School,
  "a-level": GraduationCap,
} as const;

function emptyValues(type: AdmissionFormType) {
  return Object.fromEntries(
    admissionFormConfigs[type].fields.map((field) => [field.name, ""])
  );
}

export function AdmissionApplyFlow() {
  const [selected, setSelected] = useState<AdmissionFormType | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const config = selected ? admissionFormConfigs[selected] : null;

  const requiredMissing = useMemo(() => {
    if (!config) return [];
    return config.fields
      .filter((field) => field.required && !values[field.name]?.trim())
      .map((field) => field.label);
  }, [config, values]);

  function openForm(type: AdmissionFormType) {
    setSelected(type);
    setValues(emptyValues(type));
    setError(null);
    setSuccess(false);
  }

  function closeForm() {
    setSelected(null);
    setValues({});
    setError(null);
    setSuccess(false);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!config || requiredMissing.length > 0) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admissions/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: config.id, values }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!selected || !config) {
    return (
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Choose the admission form that matches the level you are applying for. You can
            complete the form online or download a printable PDF.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:mt-12 sm:grid-cols-2">
          {admissionFormList.map((form) => {
            const Icon = cardIcons[form.id];
            return (
              <button
                key={form.id}
                type="button"
                onClick={() => openForm(form.id)}
                className="group rounded-2xl border border-border/60 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md sm:rounded-3xl sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                  {form.title}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/70">
                  {form.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {form.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open form
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </button>
            );
          })}
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
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-green-200 bg-green-50 p-6 text-center sm:rounded-3xl sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
          <BookOpen className="h-7 w-7" />
        </div>
        <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          Application submitted
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you for applying to Playpen School. Our admissions team will review your
          {config.title} application and contact you soon.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={closeForm}
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

  return (
    <div className="mx-auto max-w-3xl">
      <button
        type="button"
        onClick={closeForm}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to form selection
      </button>

      <div className="mt-5 rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
        <div className="flex flex-col gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-primary/70">
              {config.subtitle}
            </p>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              {config.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{config.description}</p>
          </div>
          <a
            href={config.pdfPath}
            download={config.pdfFileName}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            <Download className="h-4 w-4" />
            Download PDF form
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {config.fields.map((field) => (
              <label
                key={field.name}
                className={`block space-y-1.5 ${field.colSpan === 2 ? "sm:col-span-2" : ""}`}
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {field.label}
                  {field.required ? " *" : ""}
                </span>
                {field.type === "textarea" ? (
                  <textarea
                    value={values[field.name] ?? ""}
                    onChange={(e) =>
                      setValues((current) => ({ ...current, [field.name]: e.target.value }))
                    }
                    rows={field.name === "address" ? 3 : 4}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                  />
                ) : field.type === "select" ? (
                  <select
                    value={values[field.name] ?? ""}
                    onChange={(e) =>
                      setValues((current) => ({ ...current, [field.name]: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="">Select...</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={values[field.name] ?? ""}
                    onChange={(e) =>
                      setValues((current) => ({ ...current, [field.name]: e.target.value }))
                    }
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                  />
                )}
              </label>
            ))}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={config.pdfPath}
              download={config.pdfFileName}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <Download className="h-4 w-4" />
              Prefer paper? Download the blank PDF
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
