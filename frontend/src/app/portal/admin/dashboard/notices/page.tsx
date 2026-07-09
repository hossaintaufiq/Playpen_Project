"use client";

import {
  AdminAddButton,
  AdminCard,
  AdminDeleteButton,
  AdminEmptyState,
  AdminField,
  AdminLoading,
  AdminPublishToggle,
  AdminSaveBar,
  adminInputClass,
} from "@/components/admin/AdminUI";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { Notice } from "@/lib/cms/types";

export default function AdminNoticesPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <AdminLoading />;

  function updateNotice(id: string, patch: Partial<Notice>) {
    updateLocal({
      notices: data!.notices.map((n) => (n.id === id ? { ...n, ...patch } : n)),
    });
  }

  function addNotice() {
    const notice: Notice = {
      id: createId("notice"),
      title: "New notice",
      description: "Short preview text shown on the notice card.",
      content: "Full notice details shown when families click Read more.",
      href: "/notices",
      published: true,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    updateLocal({ notices: [notice, ...data!.notices] });
  }

  return (
    <div>
      <AdminSectionHeader />

      <div className="space-y-4">
        {data.notices.length === 0 && (
          <AdminEmptyState
            title="No notices yet"
            description="Press the button below to add your first notice link for the home page."
          />
        )}

        {data.notices.map((notice) => (
          <AdminCard key={notice.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Notice title" hint="Short, clear text visitors will read">
                <input
                  className={adminInputClass}
                  value={notice.title}
                  onChange={(e) => updateNotice(notice.id, { title: e.target.value })}
                />
              </AdminField>
              <AdminField label="Page link" hint="e.g. /notices, /admissions, or /about">
                <input
                  className={adminInputClass}
                  value={notice.href}
                  onChange={(e) => updateNotice(notice.id, { href: e.target.value })}
                />
              </AdminField>
              <div className="md:col-span-2">
                <AdminField
                  label="Short description"
                  hint="Preview text on the notice card (2 lines)"
                >
                  <textarea
                    className={adminInputClass}
                    rows={2}
                    value={notice.description ?? ""}
                    onChange={(e) => updateNotice(notice.id, { description: e.target.value })}
                  />
                </AdminField>
              </div>
              <div className="md:col-span-2">
                <AdminField
                  label="Full notice details"
                  hint="Shown in the detail window when visitors click Read more"
                >
                  <textarea
                    className={adminInputClass}
                    rows={5}
                    value={notice.content ?? ""}
                    onChange={(e) => updateNotice(notice.id, { content: e.target.value })}
                  />
                </AdminField>
              </div>
              <div className="md:col-span-2">
                <AdminPublishToggle
                  checked={notice.published}
                  onChange={(published) => updateNotice(notice.id, { published })}
                  hint="Only published notices appear on the website."
                />
              </div>
            </div>
            <AdminDeleteButton
              onClick={() => updateLocal({ notices: data.notices.filter((n) => n.id !== notice.id) })}
            >
              Remove this notice
            </AdminDeleteButton>
          </AdminCard>
        ))}
      </div>

      <div className="mt-4">
        <AdminAddButton onClick={addNotice}>Add notice</AdminAddButton>
      </div>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ notices: data.notices })} />
    </div>
  );
}
