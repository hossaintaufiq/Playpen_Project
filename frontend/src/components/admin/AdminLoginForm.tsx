"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("That password didn't work. Please check and try again.");
      return;
    }

    const from = searchParams.get("from") || "/portal/admin/dashboard";
    router.push(from);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_8px_40px_-16px_rgba(128,0,0,0.2)] sm:rounded-3xl">
        <div className="bg-gradient-to-br from-[#5a0000] to-primary px-6 py-8 text-center text-white sm:px-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-2xl font-semibold">Website Manager</h1>
          <p className="mt-2 text-sm text-white/80">
            Sign in to update notices, photos, events, and more.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Admin password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-border/70 px-3 py-3 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
              placeholder="Enter your password"
              required
            />
          </label>

          {error && (
            <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Open dashboard"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>

          <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
            For Playpen staff only. After signing in, use the simple step-by-step guides on each
            page to update the website.
          </p>
        </div>
      </div>
    </form>
  );
}
