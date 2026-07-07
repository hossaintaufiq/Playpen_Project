"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Lock } from "lucide-react";

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
      setError("Invalid password. Please try again.");
      return;
    }

    const from = searchParams.get("from") || "/portal/admin/dashboard";
    router.push(from);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="text-center font-serif text-2xl font-semibold text-foreground">Admin Login</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Sign in to manage website content, gallery, notices, and more.
        </p>

        <div className="mt-6 space-y-4">
          <label className="block space-y-1.5">
            <span className="text-xs font-medium text-muted-foreground">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-border/70 px-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
              placeholder="Enter admin password"
              required
            />
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Default dev password: <code className="rounded bg-muted px-1.5 py-0.5">playpen123</code>
        </p>
      </div>
    </form>
  );
}
