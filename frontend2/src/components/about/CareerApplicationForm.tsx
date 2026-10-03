"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormFileUpload } from "@/components/ui/FormFileUpload";
import type { JobVacancy } from "@/lib/cms/types";
import { careerEmail } from "@/lib/career-at-playpen";

const inputClass =
  "w-full min-w-0 max-w-full border-2 border-[#121212] bg-white px-3.5 py-3 font-sans text-sm outline-none focus:bg-[#faf7f2] focus:border-[#6b0c26] shadow-[2px_2px_0px_#121212] transition-all";

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
      <div className="border-3 border-[#121212] bg-[#f4efe6] p-6 sm:p-10 shadow-[6px_6px_0px_#121212]">
        <div className="flex items-center gap-3 text-[#6b0c26] mb-3">
          <CheckCircle2 className="h-6 w-6 text-[#d97706]" />
          <h3 className="font-serif font-bold text-2xl text-[#121212] uppercase">Application Received</h3>
        </div>
        <p className="font-sans text-sm leading-relaxed text-[#403d39]">
          Thank you for applying to Playpen. We will contact you if your profile matches the role.
          You may also email{" "}
          <a href={`mailto:${careerEmail}`} className="font-mono font-bold text-[#6b0c26] underline">
            {careerEmail}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 bg-[#6b0c26] text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#121212]"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 max-w-full border-3 border-[#121212] bg-[#ffffff] p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_#121212]"
    >
      <div className="border-b-2 border-[#121212] pb-4 mb-6 flex items-center justify-between">
        <div>
          <span className="font-mono text-xs font-bold text-[#6b0c26] uppercase">// APPLICATION FORM</span>
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase mt-0.5">
            Submit Candidate Profile
          </h3>
        </div>
        <span className="font-mono text-xs text-[#524d46]">* REQUIRED</span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
            Vacancy Applying For *
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
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
            Full Name *
          </span>
          <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} placeholder="Enter your full name" />
        </label>

        <label className="block space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">Email Address *</span>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="name@domain.com" />
        </label>

        <label className="block space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">Contact Number *</span>
          <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+880 1..." />
        </label>

        <div className="min-w-0 sm:col-span-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">CV (MS Word or PDF) *</span>
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
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
            Passport-Sized Photo (JPEG) *
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

      {error && <p className="mt-4 font-mono text-xs font-bold text-red-600 uppercase">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex items-center justify-center gap-2 bg-[#6b0c26] hover:bg-[#54081e] text-white px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] disabled:opacity-60 transition-all cursor-pointer"
      >
        {submitting ? "Submitting Application..." : "Submit Application"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
