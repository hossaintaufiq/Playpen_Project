"use client";

import { useCallback, useEffect, useState } from "react";
import type { CMSData } from "@/lib/cms/types";

export function useAdminCMS() {
  const [data, setData] = useState<CMSData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/cms");
      if (!res.ok) throw new Error("Failed to load CMS data");
      const json = (await res.json()) as CMSData;
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const save = useCallback(async (patch: Partial<CMSData>) => {
    if (!data) return false;
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      const merged = { ...data, ...patch };
      const res = await fetch("/api/admin/cms", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(merged),
      });
      if (!res.ok) throw new Error("Failed to save");
      const json = (await res.json()) as CMSData;
      setData(json);
      setMessage("Changes saved successfully.");
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
      return false;
    } finally {
      setSaving(false);
    }
  }, [data]);

  const updateLocal = useCallback((patch: Partial<CMSData>) => {
    setData((current) => (current ? { ...current, ...patch } : current));
  }, []);

  return { data, loading, saving, error, message, load, save, updateLocal, setMessage };
}
