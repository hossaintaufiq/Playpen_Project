"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { JobVacancy } from "@/lib/cms/types";
import { Trash2 } from "lucide-react";

export default function AdminVacanciesPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateVacancy(id: string, patch: Partial<JobVacancy>) {
    updateLocal({
      vacancies: data!.vacancies.map((vacancy) =>
        vacancy.id === id ? { ...vacancy, ...patch } : vacancy
      ),
    });
  }

  function addVacancy() {
    const vacancy: JobVacancy = {
      id: createId("vacancy"),
      title: "New vacancy",
      description: "Describe the role, requirements, and division.",
      published: true,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    updateLocal({ vacancies: [vacancy, ...data!.vacancies] });
  }

  return (
    <div>
      <AdminPageHeader
        title="Job Vacancies"
        description="Add, edit, or remove career vacancies shown on the Career at Playpen page. Only published vacancies can be applied to."
      />

      <div className="space-y-4">
        {data.vacancies.length === 0 && (
          <AdminCard>
            <p className="text-sm text-muted-foreground">No vacancies yet. Add one to open applications.</p>
          </AdminCard>
        )}

        {data.vacancies.map((vacancy) => (
          <AdminCard key={vacancy.id}>
            <div className="grid gap-4">
              <AdminField label="Job title">
                <input
                  className={adminInputClass}
                  value={vacancy.title}
                  onChange={(e) => updateVacancy(vacancy.id, { title: e.target.value })}
                />
              </AdminField>
              <AdminField label="Description">
                <textarea
                  className={adminInputClass}
                  rows={4}
                  value={vacancy.description}
                  onChange={(e) => updateVacancy(vacancy.id, { description: e.target.value })}
                />
              </AdminField>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={vacancy.published}
                  onChange={(e) => updateVacancy(vacancy.id, { published: e.target.checked })}
                />
                Published (visible on website and open for applications)
              </label>
            </div>
            <button
              type="button"
              onClick={() =>
                updateLocal({ vacancies: data.vacancies.filter((item) => item.id !== vacancy.id) })
              }
              className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
            >
              <Trash2 className="h-4 w-4" /> Delete vacancy
            </button>
          </AdminCard>
        ))}
      </div>

      <button
        type="button"
        onClick={addVacancy}
        className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary"
      >
        + Add vacancy
      </button>

      <AdminSaveBar
        saving={saving}
        message={message}
        error={error}
        onSave={() => save({ vacancies: data.vacancies })}
      />
    </div>
  );
}
