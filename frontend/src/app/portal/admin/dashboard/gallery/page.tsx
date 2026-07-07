"use client";

import { useState } from "react";
import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { GalleryEvent, GalleryImage } from "@/lib/gallery-data";
import { galleryCategories } from "@/lib/gallery-data";
import { Trash2 } from "lucide-react";

export default function AdminGalleryPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateEvent(id: string, patch: Partial<GalleryEvent>) {
    updateLocal({
      galleryEvents: data!.galleryEvents.map((event) =>
        event.id === id ? { ...event, ...patch } : event
      ),
    });
  }

  function updateImage(eventId: string, imageId: string, patch: Partial<GalleryImage>) {
    updateLocal({
      galleryEvents: data!.galleryEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              images: event.images.map((img) =>
                img.id === imageId ? { ...img, ...patch } : img
              ),
            }
          : event
      ),
    });
  }

  function addEvent() {
    const event: GalleryEvent = {
      id: createId("gallery"),
      title: "New gallery event",
      category: "Events",
      date: "January 2025",
      year: 2025,
      description: "Event description",
      coverImage: "/images/schools/elementary.jpg",
      images: [],
    };
    updateLocal({ galleryEvents: [event, ...data!.galleryEvents] });
    setExpandedId(event.id);
  }

  function addImage(eventId: string) {
    const image: GalleryImage = {
      id: createId("img"),
      src: "/images/schools/elementary.jpg",
      alt: "New photo",
      caption: "Caption",
    };
    updateLocal({
      galleryEvents: data!.galleryEvents.map((event) =>
        event.id === eventId ? { ...event, images: [...event.images, image] } : event
      ),
    });
  }

  return (
    <div>
      <AdminPageHeader
        title="Gallery"
        description="Manage gallery events, categories, cover images, and photo collections."
      />

      <div className="space-y-4">
        {data.galleryEvents.map((event) => (
          <AdminCard key={event.id}>
            <button
              type="button"
              onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}
              className="mb-4 flex w-full items-center justify-between text-left"
            >
              <div>
                <p className="font-semibold text-foreground">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.category} · {event.images.length} photos</p>
              </div>
              <span className="text-sm text-primary">{expandedId === event.id ? "Hide" : "Edit"}</span>
            </button>

            {expandedId === event.id && (
              <div className="space-y-4 border-t border-border/60 pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <AdminField label="Title">
                    <input className={adminInputClass} value={event.title} onChange={(e) => updateEvent(event.id, { title: e.target.value })} />
                  </AdminField>
                  <AdminField label="Category">
                    <select
                      className={adminInputClass}
                      value={event.category}
                      onChange={(e) => updateEvent(event.id, { category: e.target.value as GalleryEvent["category"] })}
                    >
                      {galleryCategories.filter((c) => c !== "All").map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </AdminField>
                  <AdminField label="Date label">
                    <input className={adminInputClass} value={event.date} onChange={(e) => updateEvent(event.id, { date: e.target.value })} />
                  </AdminField>
                  <AdminField label="Year">
                    <input type="number" className={adminInputClass} value={event.year} onChange={(e) => updateEvent(event.id, { year: Number(e.target.value) })} />
                  </AdminField>
                  <AdminField label="Cover image URL">
                    <input className={adminInputClass} value={event.coverImage} onChange={(e) => updateEvent(event.id, { coverImage: e.target.value })} />
                  </AdminField>
                  <AdminField label="Description">
                    <textarea className={adminInputClass} rows={3} value={event.description} onChange={(e) => updateEvent(event.id, { description: e.target.value })} />
                  </AdminField>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold">Photos</p>
                  <div className="space-y-3">
                    {event.images.map((image) => (
                      <div key={image.id} className="grid gap-3 rounded-xl border border-border/50 p-3 md:grid-cols-3">
                        <input className={adminInputClass} value={image.src} placeholder="Image URL" onChange={(e) => updateImage(event.id, image.id, { src: e.target.value })} />
                        <input className={adminInputClass} value={image.alt} placeholder="Alt text" onChange={(e) => updateImage(event.id, image.id, { alt: e.target.value })} />
                        <div className="flex gap-2">
                          <input className={adminInputClass} value={image.caption ?? ""} placeholder="Caption" onChange={(e) => updateImage(event.id, image.id, { caption: e.target.value })} />
                          <button type="button" onClick={() => updateEvent(event.id, { images: event.images.filter((img) => img.id !== image.id) })} className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addImage(event.id)} className="mt-3 text-sm font-semibold text-primary hover:underline">
                    + Add photo
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => updateLocal({ galleryEvents: data.galleryEvents.filter((e) => e.id !== event.id) })}
                  className="inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
                >
                  <Trash2 className="h-4 w-4" /> Delete event
                </button>
              </div>
            )}
          </AdminCard>
        ))}
      </div>

      <button type="button" onClick={addEvent} className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary">
        + Add gallery event
      </button>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ galleryEvents: data.galleryEvents })} />
    </div>
  );
}
