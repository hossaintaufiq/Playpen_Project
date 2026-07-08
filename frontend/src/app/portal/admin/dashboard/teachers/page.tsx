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
import type { Teacher } from "@/lib/cms/types";

export default function AdminTeachersPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <AdminLoading />;

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
      <AdminSectionHeader />

      <div className="space-y-4">
        {data.teachers.map((teacher) => (
          <AdminCard key={teacher.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Full name">
                <input className={adminInputClass} value={teacher.name} onChange={(e) => updateTeacher(teacher.id, { name: e.target.value })} />
              </AdminField>
              <AdminField label="Job title / role">
                <input className={adminInputClass} value={teacher.role} onChange={(e) => updateTeacher(teacher.id, { role: e.target.value })} />
              </AdminField>
              <AdminField label="Department">
                <input className={adminInputClass} value={teacher.department} onChange={(e) => updateTeacher(teacher.id, { department: e.target.value })} />
              </AdminField>
              <AdminField label="Email (optional)">
                <input className={adminInputClass} value={teacher.email ?? ""} onChange={(e) => updateTeacher(teacher.id, { email: e.target.value })} />
              </AdminField>
              <AdminField label="Phone (optional)">
                <input className={adminInputClass} value={teacher.phone ?? ""} onChange={(e) => updateTeacher(teacher.id, { phone: e.target.value })} />
              </AdminField>
              <AdminField label="Photo path" hint="e.g. /images/marquee/faculty.jpg">
                <input className={adminInputClass} value={teacher.image ?? ""} onChange={(e) => updateTeacher(teacher.id, { image: e.target.value })} />
              </AdminField>
              <AdminField label="Short bio (optional)">
                <textarea className={adminInputClass} rows={3} value={teacher.bio ?? ""} onChange={(e) => updateTeacher(teacher.id, { bio: e.target.value })} />
              </AdminField>
              <div className="md:col-span-2">
                <AdminPublishToggle
                  checked={teacher.published}
                  onChange={(published) => updateTeacher(teacher.id, { published })}
                />
              </div>
            </div>
            <AdminDeleteButton
              onClick={() => updateLocal({ teachers: data.teachers.filter((t) => t.id !== teacher.id) })}
            >
              Remove this teacher
            </AdminDeleteButton>
          </AdminCard>
        ))}
      </div>

      <div className="mt-4">
        <AdminAddButton onClick={addTeacher}>Add teacher</AdminAddButton>
      </div>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ teachers: data.teachers })} />
    </div>
  );
}
