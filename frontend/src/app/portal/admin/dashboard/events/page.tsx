"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { SchoolEvent } from "@/lib/cms/types";
import { Trash2 } from "lucide-react";

export default function AdminEventsPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateEvent(id: string, patch: Partial<SchoolEvent>) {
    updateLocal({
      schoolEvents: data!.schoolEvents.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    });
  }

  function addEvent() {
    const event: SchoolEvent = {
      id: createId("event"),
      title: "New school event",
      month: "Jan",
      day: "01",
      published: true,
    };
    updateLocal({ schoolEvents: [event, ...data!.schoolEvents] });
  }

  return (
    <div>
      <AdminPageHeader
        title="School Events"
        description="Create and manage upcoming events displayed on the home page."
      />

      <div className="space-y-4">
        {data.schoolEvents.map((event) => (
          <AdminCard key={event.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Event title">
                <input
                  className={adminInputClass}
                  value={event.title}
                  onChange={(e) => updateEvent(event.id, { title: e.target.value })}
                />
              </AdminField>
              <AdminField label="Description (optional)">
                <input
                  className={adminInputClass}
                  value={event.description ?? ""}
                  onChange={(e) => updateEvent(event.id, { description: e.target.value })}
                />
              </AdminField>
              <AdminField label="Month">
                <input
                  className={adminInputClass}
                  value={event.month}
                  onChange={(e) => updateEvent(event.id, { month: e.target.value })}
                />
              </AdminField>
              <AdminField label="Day">
                <input
                  className={adminInputClass}
                  value={event.day}
                  onChange={(e) => updateEvent(event.id, { day: e.target.value })}
                />
              </AdminField>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={event.published}
                  onChange={(e) => updateEvent(event.id, { published: e.target.checked })}
                />
                Published
              </label>
            </div>
            <button
              type="button"
              onClick={() => updateLocal({ schoolEvents: data.schoolEvents.filter((e) => e.id !== event.id) })}
              className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </AdminCard>
        ))}
      </div>

      <button type="button" onClick={addEvent} className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary">
        + Add event
      </button>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ schoolEvents: data.schoolEvents })} />
    </div>
  );
}
