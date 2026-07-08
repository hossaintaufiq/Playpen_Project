"use client";

import {
  AdminCard,
  AdminField,
  AdminLoading,
  AdminPublishToggle,
  AdminSaveBar,
  adminInputClass,
} from "@/components/admin/AdminUI";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";
import { useAdminCMS } from "@/hooks/useAdminCMS";

export default function AdminAnnouncementsPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <AdminLoading />;

  const ticker = data.newsTicker;

  return (
    <div>
      <AdminSectionHeader />

      <AdminCard>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <AdminPublishToggle
              checked={ticker.enabled}
              onChange={(enabled) => updateLocal({ newsTicker: { ...ticker, enabled } })}
              label="Show scrolling announcement bar"
              hint="When ON, the message bar appears below the menu on every page."
            />
          </div>
          <AdminField label="Academic year" hint="e.g. 2025–2026">
            <input
              className={adminInputClass}
              value={ticker.academicYear}
              onChange={(e) => updateLocal({ newsTicker: { ...ticker, academicYear: e.target.value } })}
            />
          </AdminField>
          <AdminField label="Level / programme" hint="e.g. Playgroup – A' Level">
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
          <AdminField label="Phone numbers" hint="Separate multiple numbers with commas">
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
