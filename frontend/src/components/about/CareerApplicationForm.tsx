"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FormFileUpload } from "@/components/ui/FormFileUpload";
import type { JobVacancy } from "@/lib/cms/types";
import { careerEmail } from "@/lib/career-at-playpen";

const inputClass =
  "w-full min-w-0 max-w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10";

type Props = {
  vacancies: JobVacancy[];
  selectedVacancyId: string;
  onVacancyChange: (id: string) => void;
};

export function CareerApplicationForm({ vacancies, selectedVacancyId, onVacancyChange }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!selectedVacancyId) {
      setError("Please select a vacancy to apply for.");
      return;
    }
    if (!cv) {
      setError("Please upload your CV in MS Word or PDF format.");
      return;
    }
    if (!photo) {
      setError("Please upload a recent passport-sized photograph in JPEG format.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("vacancyId", selectedVacancyId);
      formData.append("name", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("cv", cv);
      formData.append("photo", photo);

      const res = await fetch("/api/career/apply", {
        method: "POST",
        body: formData,
      });

      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Application failed. Please try again.");

      setSuccess(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setCv(null);
      setPhoto(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Application failed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 sm:rounded-3xl sm:p-8">
        <h3 className="font-serif text-xl font-semibold text-foreground">Application received</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thank you for applying to Playpen. We will contact you if your profile matches the role.
          You may also email{" "}
          <a href={`mailto:${careerEmail}`} className="font-semibold text-primary hover:underline">
            {careerEmail}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-4 text-sm font-semibold text-primary hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 max-w-full rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.06] p-4 sm:rounded-3xl sm:p-6 md:p-8"
    >
      <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">Drop your CV</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Select a posted vacancy and upload your CV (MS Word or PDF) with a passport-sized JPEG photo.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
            Vacancy applying for *
          </span>
          <select
            required
            value={selectedVacancyId}
            onChange={(e) => onVacancyChange(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a vacancy...</option>
            {vacancies.map((vacancy) => (
              <option key={vacancy.id} value={vacancy.id}>
                {vacancy.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
            Full name *
          </span>
          <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground/80">Email *</span>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground/80">Contact number</span>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
        </label>

        <div className="min-w-0 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground/80">CV (MS Word or PDF) *</span>
          <div className="mt-1.5">
            <FormFileUpload
              hint=".doc, .docx, or .pdf — max 10 MB"
              accept=".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
              onChange={setCv}
              required
              selectedFileName={cv?.name}
            />
          </div>
        </div>

        <div className="min-w-0 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
            Passport-sized photo (JPEG) *
          </span>
          <div className="mt-1.5">
            <FormFileUpload
              hint=".jpg or .jpeg — max 5 MB"
              accept="image/jpeg,.jpg,.jpeg"
              onChange={setPhoto}
              required
              selectedFileName={photo?.name}
            />
          </div>
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="playpen-bg mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Submitting..." : "Submit Application"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
