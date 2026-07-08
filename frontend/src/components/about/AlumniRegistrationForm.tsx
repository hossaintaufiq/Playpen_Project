"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FormFileUpload } from "@/components/ui/FormFileUpload";
import { alumniEmail } from "@/lib/alumni-association";

const inputClass =
  "w-full min-w-0 max-w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10";

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
      {children}
      {required ? " *" : ""}
    </span>
  );
}

export function AlumniRegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [oLevelYear, setOLevelYear] = useState("");
  const [aLevelYear, setALevelYear] = useState("");
  const [occupation, setOccupation] = useState("");
  const [graduationInfo, setGraduationInfo] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function resetForm() {
    setFullName("");
    setHomeAddress("");
    setEmail("");
    setContactNumber("");
    setOLevelYear("");
    setALevelYear("");
    setOccupation("");
    setGraduationInfo("");
    setPhoto(null);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("homeAddress", homeAddress);
      formData.append("email", email);
      formData.append("phone", contactNumber);
      formData.append("oLevelYear", oLevelYear);
      formData.append("aLevelYear", aLevelYear);
      formData.append("occupation", occupation);
      formData.append("graduationInfo", graduationInfo);
      if (photo) formData.append("photo", photo);

      const res = await fetch("/api/alumni/register", {
        method: "POST",
        body: formData,
      });

      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Registration failed. Please try again.");

      setSuccess(true);
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="w-full min-w-0 rounded-2xl border border-green-200 bg-green-50 p-4 sm:rounded-3xl sm:p-8">
        <h3 className="font-serif text-xl font-semibold text-foreground">Thank you for registering</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your alumni registration has been received and is pending review by our administration
          team. We will contact you after your details have been approved. You may also email{" "}
          <a
            href={`mailto:${alumniEmail}`}
            className="break-all font-semibold text-primary hover:underline"
          >
            {alumniEmail}
          </a>{" "}
          with any additional information.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-4 text-sm font-semibold text-primary hover:underline"
        >
          Submit another registration
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 max-w-full rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.06] p-4 sm:rounded-3xl sm:p-6 md:p-8"
    >
      <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
        Alumni Registration
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">Fields marked with * are required.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block min-w-0 space-y-1.5 sm:col-span-2">
          <FieldLabel required>Full Name</FieldLabel>
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Please enter your full name"
            className={inputClass}
          />
        </label>

        <label className="block min-w-0 space-y-1.5 sm:col-span-2">
          <FieldLabel required>Home Address</FieldLabel>
          <textarea
            required
            rows={3}
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
            placeholder="Please enter your present address"
            className={inputClass}
          />
        </label>

        <label className="block min-w-0 space-y-1.5">
          <FieldLabel>Email</FieldLabel>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your email"
            className={inputClass}
          />
        </label>

        <label className="block min-w-0 space-y-1.5">
          <FieldLabel required>Contact Number</FieldLabel>
          <input
            required
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Please enter your contact number"
            className={inputClass}
          />
        </label>

        <label className="block min-w-0 space-y-1.5">
          <FieldLabel>Year of &apos;O&apos; Level Graduation</FieldLabel>
          <input
            value={oLevelYear}
            onChange={(e) => setOLevelYear(e.target.value)}
            placeholder="Please enter the year"
            className={inputClass}
          />
        </label>

        <label className="block min-w-0 space-y-1.5">
          <FieldLabel>Year of &apos;A&apos; Level Graduation</FieldLabel>
          <input
            value={aLevelYear}
            onChange={(e) => setALevelYear(e.target.value)}
            placeholder="Please enter the year"
            className={inputClass}
          />
        </label>

        <label className="block min-w-0 space-y-1.5 sm:col-span-2">
          <FieldLabel required>Present Occupation</FieldLabel>
          <input
            required
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="Please enter your occupation"
            className={inputClass}
          />
        </label>

        <label className="block min-w-0 space-y-1.5 sm:col-span-2">
          <FieldLabel>Graduation Information</FieldLabel>
          <textarea
            rows={3}
            value={graduationInfo}
            onChange={(e) => setGraduationInfo(e.target.value)}
            placeholder="Ex: Physics - Dhaka University. Name of the university and department for undergraduates / post graduates"
            className={inputClass}
          />
        </label>

        <div className="min-w-0 sm:col-span-2">
          <FieldLabel>Photograph</FieldLabel>
          <div className="mt-1.5">
            <FormFileUpload
              hint="Upload a recent photograph (JPG or PNG, max 5 MB)"
              accept="image/jpeg,image/png,image/webp"
              onChange={setPhoto}
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
        {submitting ? "Submitting..." : "Submit Registration"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
