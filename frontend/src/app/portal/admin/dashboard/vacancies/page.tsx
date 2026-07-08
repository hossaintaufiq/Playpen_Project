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
import type { JobVacancy } from "@/lib/cms/types";

export default function AdminVacanciesPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <AdminLoading />;

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
      <AdminSectionHeader />

      <div className="space-y-4">
        {data.vacancies.length === 0 && (
          <AdminEmptyState
            title="No job vacancies yet"
            description="Add a vacancy to show it on the Career at Playpen page and accept applications."
          />
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
              <AdminField label="Job description" hint="Explain the role and what you are looking for">
                <textarea
                  className={adminInputClass}
                  rows={4}
                  value={vacancy.description}
                  onChange={(e) => updateVacancy(vacancy.id, { description: e.target.value })}
                />
              </AdminField>
              <AdminPublishToggle
                checked={vacancy.published}
                onChange={(published) => updateVacancy(vacancy.id, { published })}
                label="Accept applications for this job"
                hint="Only published vacancies appear on the website."
              />
            </div>
            <AdminDeleteButton
              onClick={() =>
                updateLocal({ vacancies: data.vacancies.filter((item) => item.id !== vacancy.id) })
              }
            >
              Remove this vacancy
            </AdminDeleteButton>
          </AdminCard>
        ))}
      </div>

      <div className="mt-4">
        <AdminAddButton onClick={addVacancy}>Add vacancy</AdminAddButton>
      </div>

      <AdminSaveBar
        saving={saving}
        message={message}
        error={error}
        onSave={() => save({ vacancies: data.vacancies })}
      />
    </div>
  );
}
