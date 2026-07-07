"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { Notice } from "@/lib/cms/types";
import { Trash2 } from "lucide-react";

export default function AdminNoticesPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateNotice(id: string, patch: Partial<Notice>) {
    updateLocal({
      notices: data!.notices.map((n) => (n.id === id ? { ...n, ...patch } : n)),
    });
  }

  function addNotice() {
    const notice: Notice = {
      id: createId("notice"),
      title: "New announcement",
      href: "/about",
      published: true,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    updateLocal({ notices: [notice, ...data!.notices] });
  }

  return (
    <div>
      <AdminPageHeader
        title="Notices"
        description="Manage notice and announcement items shown on the home page community section."
      />

      <div className="space-y-4">
        {data.notices.map((notice) => (
          <AdminCard key={notice.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Title">
                <input
                  className={adminInputClass}
                  value={notice.title}
                  onChange={(e) => updateNotice(notice.id, { title: e.target.value })}
                />
              </AdminField>
              <AdminField label="Link URL">
                <input
                  className={adminInputClass}
                  value={notice.href}
                  onChange={(e) => updateNotice(notice.id, { href: e.target.value })}
                />
              </AdminField>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={notice.published}
                  onChange={(e) => updateNotice(notice.id, { published: e.target.checked })}
                />
                Published
              </label>
            </div>
            <button
              type="button"
              onClick={() => updateLocal({ notices: data.notices.filter((n) => n.id !== notice.id) })}
              className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </AdminCard>
        ))}
      </div>

      <button type="button" onClick={addNotice} className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary">
        + Add notice
      </button>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ notices: data.notices })} />
    </div>
  );
}
