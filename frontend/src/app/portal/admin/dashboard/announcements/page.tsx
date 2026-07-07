"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";

export default function AdminAnnouncementsPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  const ticker = data.newsTicker;

  return (
    <div>
      <AdminPageHeader
        title="Announcements"
        description="Edit the rolling news ticker shown below the navigation bar on every page."
      />

      <AdminCard>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input
              type="checkbox"
              checked={ticker.enabled}
              onChange={(e) => updateLocal({ newsTicker: { ...ticker, enabled: e.target.checked } })}
            />
            Show news ticker on website
          </label>
          <AdminField label="Academic year">
            <input
              className={adminInputClass}
              value={ticker.academicYear}
              onChange={(e) => updateLocal({ newsTicker: { ...ticker, academicYear: e.target.value } })}
            />
          </AdminField>
          <AdminField label="Level / programme">
            <input
              className={adminInputClass}
              value={ticker.level}
              onChange={(e) => updateLocal({ newsTicker: { ...ticker, level: e.target.value } })}
            />
          </AdminField>
          <AdminField label="Office hours">
            <input
              className={adminInputClass}
              value={ticker.hours}
              onChange={(e) => updateLocal({ newsTicker: { ...ticker, hours: e.target.value } })}
            />
          </AdminField>
          <AdminField label="Forms note">
            <input
              className={adminInputClass}
              value={ticker.formsNote}
              onChange={(e) => updateLocal({ newsTicker: { ...ticker, formsNote: e.target.value } })}
            />
          </AdminField>
          <AdminField label="Phone numbers (comma separated)">
            <input
              className={adminInputClass}
              value={ticker.phones.join(", ")}
              onChange={(e) =>
                updateLocal({
                  newsTicker: {
                    ...ticker,
                    phones: e.target.value.split(",").map((p) => p.trim()).filter(Boolean),
                  },
                })
              }
            />
          </AdminField>
        </div>
      </AdminCard>

      <AdminSaveBar
        saving={saving}
        message={message}
        error={error}
        onSave={() => save({ newsTicker: data.newsTicker })}
      />
    </div>
  );
}
