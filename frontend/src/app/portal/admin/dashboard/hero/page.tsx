"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { HeroSlide } from "@/lib/cms/types";
import { Trash2 } from "lucide-react";

export default function AdminHeroPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateSlide(id: string, patch: Partial<HeroSlide>) {
    updateLocal({
      heroSlides: data!.heroSlides.map((slide) =>
        slide.id === id ? { ...slide, ...patch } : slide
      ),
    });
  }

  function addSlide() {
    const slide: HeroSlide = {
      id: createId("hero"),
      src: "/images/schools/elementary.jpg",
      alt: "New hero slide",
      order: data!.heroSlides.length + 1,
      active: true,
    };
    updateLocal({ heroSlides: [...data!.heroSlides, slide] });
  }

  function removeSlide(id: string) {
    updateLocal({ heroSlides: data!.heroSlides.filter((slide) => slide.id !== id) });
  }

  return (
    <div>
      <AdminPageHeader
        title="Hero Slides"
        description="Manage the home page hero background slideshow. Use image paths like /images/schools/elementary.jpg or upload paths."
      />

      <div className="space-y-4">
        {data.heroSlides.map((slide) => (
          <AdminCard key={slide.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Image URL">
                <input
                  className={adminInputClass}
                  value={slide.src}
                  onChange={(e) => updateSlide(slide.id, { src: e.target.value })}
                />
              </AdminField>
              <AdminField label="Alt text">
                <input
                  className={adminInputClass}
                  value={slide.alt}
                  onChange={(e) => updateSlide(slide.id, { alt: e.target.value })}
                />
              </AdminField>
              <AdminField label="Order">
                <input
                  type="number"
                  className={adminInputClass}
                  value={slide.order}
                  onChange={(e) => updateSlide(slide.id, { order: Number(e.target.value) })}
                />
              </AdminField>
              <label className="flex items-center gap-2 pt-6 text-sm">
                <input
                  type="checkbox"
                  checked={slide.active}
                  onChange={(e) => updateSlide(slide.id, { active: e.target.checked })}
                />
                Active on homepage
              </label>
            </div>
            <button
              type="button"
              onClick={() => removeSlide(slide.id)}
              className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
            >
              <Trash2 className="h-4 w-4" /> Remove slide
            </button>
          </AdminCard>
        ))}
      </div>

      <button
        type="button"
        onClick={addSlide}
        className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
      >
        + Add slide
      </button>

      <AdminSaveBar
        saving={saving}
        message={message}
        error={error}
        onSave={() => save({ heroSlides: data.heroSlides })}
      />
    </div>
  );
}
