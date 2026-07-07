"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { Teacher } from "@/lib/cms/types";
import { Trash2 } from "lucide-react";

export default function AdminTeachersPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateTeacher(id: string, patch: Partial<Teacher>) {
    updateLocal({
      teachers: data!.teachers.map((t) => (t.id === id ? { ...t, ...patch } : t)),
    });
  }

  function addTeacher() {
    const teacher: Teacher = {
      id: createId("teacher"),
      name: "New teacher",
      role: "Teacher",
      department: "Academics",
      published: true,
    };
    updateLocal({ teachers: [teacher, ...data!.teachers] });
  }

  return (
    <div>
      <AdminPageHeader
        title="Teachers"
        description="Add and edit faculty members with roles, contact details, and bios."
      />

      <div className="space-y-4">
        {data.teachers.map((teacher) => (
          <AdminCard key={teacher.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Name">
                <input className={adminInputClass} value={teacher.name} onChange={(e) => updateTeacher(teacher.id, { name: e.target.value })} />
              </AdminField>
              <AdminField label="Role">
                <input className={adminInputClass} value={teacher.role} onChange={(e) => updateTeacher(teacher.id, { role: e.target.value })} />
              </AdminField>
              <AdminField label="Department">
                <input className={adminInputClass} value={teacher.department} onChange={(e) => updateTeacher(teacher.id, { department: e.target.value })} />
              </AdminField>
              <AdminField label="Email">
                <input className={adminInputClass} value={teacher.email ?? ""} onChange={(e) => updateTeacher(teacher.id, { email: e.target.value })} />
              </AdminField>
              <AdminField label="Phone">
                <input className={adminInputClass} value={teacher.phone ?? ""} onChange={(e) => updateTeacher(teacher.id, { phone: e.target.value })} />
              </AdminField>
              <AdminField label="Photo URL">
                <input className={adminInputClass} value={teacher.image ?? ""} onChange={(e) => updateTeacher(teacher.id, { image: e.target.value })} />
              </AdminField>
              <AdminField label="Bio">
                <textarea className={adminInputClass} rows={3} value={teacher.bio ?? ""} onChange={(e) => updateTeacher(teacher.id, { bio: e.target.value })} />
              </AdminField>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={teacher.published} onChange={(e) => updateTeacher(teacher.id, { published: e.target.checked })} />
                Published
              </label>
            </div>
            <button
              type="button"
              onClick={() => updateLocal({ teachers: data.teachers.filter((t) => t.id !== teacher.id) })}
              className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </AdminCard>
        ))}
      </div>

      <button type="button" onClick={addTeacher} className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary">
        + Add teacher
      </button>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ teachers: data.teachers })} />
    </div>
  );
}
