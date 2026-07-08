"use client";

import {
  AdminAddButton,
  AdminCard,
  AdminDeleteButton,
  AdminField,
  AdminLoading,
  AdminPublishToggle,
  AdminSaveBar,
  adminInputClass,
} from "@/components/admin/AdminUI";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { HeroSlide } from "@/lib/cms/types";

export default function AdminHeroPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <AdminLoading />;

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

  return (
    <div>
      <AdminSectionHeader />

      <div className="space-y-4">
        {data.heroSlides.map((slide) => (
          <AdminCard key={slide.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField
                label="Photo path"
                hint="Use a path like /images/schools/elementary.jpg"
              >
                <input
                  className={adminInputClass}
                  value={slide.src}
                  onChange={(e) => updateSlide(slide.id, { src: e.target.value })}
                />
              </AdminField>
              <AdminField label="Photo description" hint="Helps visitors using screen readers">
                <input
                  className={adminInputClass}
                  value={slide.alt}
                  onChange={(e) => updateSlide(slide.id, { alt: e.target.value })}
                />
              </AdminField>
              <AdminField label="Slide order" hint="1 shows first, then 2, 3, and so on">
                <input
                  type="number"
                  className={adminInputClass}
                  value={slide.order}
                  onChange={(e) => updateSlide(slide.id, { order: Number(e.target.value) })}
                />
              </AdminField>
              <div className="md:col-span-2">
                <AdminPublishToggle
                  checked={slide.active}
                  onChange={(active) => updateSlide(slide.id, { active })}
                  label="Show this slide on home page"
                />
              </div>
            </div>
            <AdminDeleteButton onClick={() => updateLocal({ heroSlides: data.heroSlides.filter((s) => s.id !== slide.id) })}>
              Remove this slide
            </AdminDeleteButton>
          </AdminCard>
        ))}
      </div>

      <div className="mt-4">
        <AdminAddButton onClick={addSlide}>Add slide</AdminAddButton>
      </div>

      <AdminSaveBar
        saving={saving}
        message={message}
        error={error}
        onSave={() => save({ heroSlides: data.heroSlides })}
      />
    </div>
  );
}
