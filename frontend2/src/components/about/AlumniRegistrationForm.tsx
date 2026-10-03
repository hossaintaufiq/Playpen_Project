"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormFileUpload } from "@/components/ui/FormFileUpload";
import { alumniEmail } from "@/lib/alumni-association";

const inputClass =
  "w-full min-w-0 max-w-full border-2 border-[#121212] bg-white px-3.5 py-3 font-sans text-sm outline-none focus:bg-[#faf7f2] focus:border-[#6b0c26] shadow-[2px_2px_0px_#121212] transition-all";

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
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
      <div className="w-full min-w-0 border-3 border-[#121212] bg-[#f4efe6] p-6 sm:p-10 shadow-[6px_6px_0px_#121212]">
        <div className="flex items-center gap-3 text-[#6b0c26] mb-3">
          <CheckCircle2 className="h-6 w-6 text-[#d97706]" />
          <h3 className="font-serif font-bold text-2xl text-[#121212] uppercase">Thank you for registering</h3>
        </div>
        <p className="font-sans text-sm leading-relaxed text-[#403d39]">
          Your alumni registration has been received and is pending review by our administration
          team. We will contact you after your details have been approved. You may also email{" "}
          <a
            href={`mailto:${alumniEmail}`}
            className="font-bold text-[#6b0c26] underline"
          >
            {alumniEmail}
          </a>{" "}
          with any additional information.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 bg-[#6b0c26] text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#121212]"
        >
          Submit another registration
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
          <span className="font-mono text-xs font-bold text-[#6b0c26] uppercase">// REGISTRATION FORM</span>
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase mt-0.5">
            Alumni Registration
          </h3>
        </div>
        <span className="font-mono text-xs text-[#524d46]">* REQUIRED</span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

      {error && <p className="mt-4 font-mono text-xs font-bold text-red-600 uppercase">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex items-center justify-center gap-2 bg-[#6b0c26] hover:bg-[#54081e] text-white px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] disabled:opacity-60 transition-all cursor-pointer"
      >
        {submitting ? "Submitting Registration..." : "Submit Registration"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
