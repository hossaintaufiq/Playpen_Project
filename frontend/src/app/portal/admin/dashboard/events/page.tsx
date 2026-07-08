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
import type { SchoolEvent } from "@/lib/cms/types";

export default function AdminEventsPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <AdminLoading />;

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
      <AdminSectionHeader />

      <div className="space-y-4">
        {data.schoolEvents.length === 0 && (
          <AdminEmptyState
            title="No events yet"
            description="Add your first school event to show it on the home page."
          />
        )}

        {data.schoolEvents.map((event) => (
          <AdminCard key={event.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Event name">
                <input
                  className={adminInputClass}
                  value={event.title}
                  onChange={(e) => updateEvent(event.id, { title: e.target.value })}
                />
              </AdminField>
              <AdminField label="Extra details (optional)">
                <input
                  className={adminInputClass}
                  value={event.description ?? ""}
                  onChange={(e) => updateEvent(event.id, { description: e.target.value })}
                />
              </AdminField>
              <AdminField label="Month" hint="e.g. Jan, Feb, Mar">
                <input
                  className={adminInputClass}
                  value={event.month}
                  onChange={(e) => updateEvent(event.id, { month: e.target.value })}
                />
              </AdminField>
              <AdminField label="Day" hint="e.g. 15">
                <input
                  className={adminInputClass}
                  value={event.day}
                  onChange={(e) => updateEvent(event.id, { day: e.target.value })}
                />
              </AdminField>
              <div className="md:col-span-2">
                <AdminPublishToggle
                  checked={event.published}
                  onChange={(published) => updateEvent(event.id, { published })}
                />
              </div>
            </div>
            <AdminDeleteButton
              onClick={() => updateLocal({ schoolEvents: data.schoolEvents.filter((e) => e.id !== event.id) })}
            >
              Remove this event
            </AdminDeleteButton>
          </AdminCard>
        ))}
      </div>

      <div className="mt-4">
        <AdminAddButton onClick={addEvent}>Add event</AdminAddButton>
      </div>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ schoolEvents: data.schoolEvents })} />
    </div>
  );
}
