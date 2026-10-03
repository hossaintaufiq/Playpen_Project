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
      setError("Authorization failed. Access key incorrect.");
      return;
    }

    const from = searchParams.get("from") || "/portal/admin/dashboard";
    router.push(from);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md">
      <div className="overflow-hidden brutal-border bg-white brutal-shadow">
        <div className="bg-[#121212] px-6 py-8 text-center text-white border-b-2 border-[#121212]">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-[#6b0c26] text-white">
            <Lock className="h-6 w-6" strokeWidth={2} />
          </div>
          <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#d97706]">
            Administrative Terminal
          </span>
          <h1 className="mt-1 font-serif text-3xl font-black text-white">Playpen CMS Portal</h1>
          <p className="mt-2 font-mono text-xs text-white/70">
            Authorized administrative staff access only
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-white">
          <label className="block space-y-2">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-[#121212]">
              Administrative Passkey
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full brutal-border bg-[#faf7f2] px-3.5 py-3 font-mono text-sm outline-none transition focus:bg-white focus:border-[#6b0c26]"
              placeholder="Enter master key..."
              required
            />
          </label>

          {error && (
            <p className="mt-4 brutal-border bg-red-50 p-3 font-mono text-xs font-bold text-red-700 border-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 brutal-btn flex w-full items-center justify-center gap-2 bg-[#6b0c26] py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-[#121212] disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Access Control Terminal"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>

          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-wider text-[#121212]/60">
            For Playpen administration &amp; IT officers only · Secure Session
          </p>
        </div>
      </div>
    </form>
  );
}

