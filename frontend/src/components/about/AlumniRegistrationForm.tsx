"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function AlumniRegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/alumni/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, batch, message }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Registration failed. Please try again.");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setBatch("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 sm:rounded-3xl sm:p-8">
        <h3 className="font-serif text-xl font-semibold text-foreground">Thank you for registering</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your alumni registration has been received. Our administration team will review your
          request and be in touch soon.
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
      className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.06] p-6 sm:rounded-3xl sm:p-8"
    >
      <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
        Register as an alumnus
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Let us know where you are and what you are doing — we would love to hear from you.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-xs font-medium text-muted-foreground">Full name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-medium text-muted-foreground">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-medium text-muted-foreground">Phone (optional)</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
        </label>
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-xs font-medium text-muted-foreground">Graduation batch / year</span>
          <input
            required
            placeholder="e.g. Class of 2018"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
        </label>
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-xs font-medium text-muted-foreground">Message (optional)</span>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="playpen-bg mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Submitting..." : "Register Now"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
