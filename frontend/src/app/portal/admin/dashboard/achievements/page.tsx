"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { AchievementCategory, StudentAchievement } from "@/lib/cms/types";
import { Trash2 } from "lucide-react";

const categories: { value: AchievementCategory; label: string }[] = [
  { value: "academic", label: "Academic" },
  { value: "science", label: "Science & Technology" },
  { value: "sports", label: "Sports" },
  { value: "arts", label: "Arts & Culture" },
  { value: "other", label: "Other" },
];

function resultsToText(results: string[]) {
  return results.join("\n");
}

function textToResults(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export default function AdminAchievementsPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateAchievement(id: string, patch: Partial<StudentAchievement>) {
    updateLocal({
      studentAchievements: data!.studentAchievements.map((achievement) =>
        achievement.id === id ? { ...achievement, ...patch } : achievement
      ),
    });
  }

  function addAchievement() {
    const nextOrder =
      data!.studentAchievements.reduce((max, item) => Math.max(max, item.order), 0) + 1;
    const achievement: StudentAchievement = {
      id: createId("achievement"),
      title: "New achievement event",
      organizer: "",
      venue: "",
      date: "",
      year: new Date().getFullYear().toString(),
      participatedBy: "",
      results: ["Student Name, Class – Achievement"],
      image: "/images/marquee/achievements.jpg",
      category: "academic",
      published: true,
      order: nextOrder,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    updateLocal({ studentAchievements: [achievement, ...data!.studentAchievements] });
  }

  const sorted = [...data.studentAchievements].sort((a, b) => a.order - b.order);

  return (
    <div>
      <AdminPageHeader
        title="Student Achievements"
        description="Manage competition results and awards shown on the Achievements of Playpen Students page. Only published entries appear on the website."
      />

      <div className="space-y-4">
        {sorted.length === 0 && (
          <AdminCard>
            <p className="text-sm text-muted-foreground">No achievements yet. Add one to get started.</p>
          </AdminCard>
        )}

        {sorted.map((achievement) => (
          <AdminCard key={achievement.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Event title">
                <input
                  className={adminInputClass}
                  value={achievement.title}
                  onChange={(e) => updateAchievement(achievement.id, { title: e.target.value })}
                />
              </AdminField>
              <AdminField label="Category">
                <select
                  className={adminInputClass}
                  value={achievement.category}
                  onChange={(e) =>
                    updateAchievement(achievement.id, {
                      category: e.target.value as AchievementCategory,
                    })
                  }
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </AdminField>
              <AdminField label="Organizer">
                <input
                  className={adminInputClass}
                  value={achievement.organizer ?? ""}
                  onChange={(e) => updateAchievement(achievement.id, { organizer: e.target.value })}
                />
              </AdminField>
              <AdminField label="Venue / Place">
                <input
                  className={adminInputClass}
                  value={achievement.venue ?? ""}
                  onChange={(e) => updateAchievement(achievement.id, { venue: e.target.value })}
                />
              </AdminField>
              <AdminField label="Date">
                <input
                  className={adminInputClass}
                  value={achievement.date ?? ""}
                  onChange={(e) => updateAchievement(achievement.id, { date: e.target.value })}
                />
              </AdminField>
              <AdminField label="Year">
                <input
                  className={adminInputClass}
                  value={achievement.year ?? ""}
                  onChange={(e) => updateAchievement(achievement.id, { year: e.target.value })}
                />
              </AdminField>
              <AdminField label="Participated by">
                <input
                  className={adminInputClass}
                  value={achievement.participatedBy ?? ""}
                  onChange={(e) =>
                    updateAchievement(achievement.id, { participatedBy: e.target.value })
                  }
                />
              </AdminField>
              <AdminField label="Display order">
                <input
                  type="number"
                  className={adminInputClass}
                  value={achievement.order}
                  onChange={(e) =>
                    updateAchievement(achievement.id, { order: Number(e.target.value) || 0 })
                  }
                />
              </AdminField>
              <AdminField label="Image path (optional)">
                <input
                  className={adminInputClass}
                  placeholder="/images/marquee/achievements.jpg"
                  value={achievement.image ?? ""}
                  onChange={(e) => updateAchievement(achievement.id, { image: e.target.value })}
                />
              </AdminField>
              <div className="flex items-end">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={achievement.published}
                    onChange={(e) =>
                      updateAchievement(achievement.id, { published: e.target.checked })
                    }
                  />
                  Published (visible on website)
                </label>
              </div>
              <AdminField label="Results (one per line)">
                <textarea
                  className={adminInputClass}
                  rows={6}
                  value={resultsToText(achievement.results)}
                  onChange={(e) =>
                    updateAchievement(achievement.id, { results: textToResults(e.target.value) })
                  }
                />
              </AdminField>
            </div>
            <button
              type="button"
              onClick={() =>
                updateLocal({
                  studentAchievements: data.studentAchievements.filter(
                    (item) => item.id !== achievement.id
                  ),
                })
              }
              className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
            >
              <Trash2 className="h-4 w-4" /> Delete achievement
            </button>
          </AdminCard>
        ))}
      </div>

      <button
        type="button"
        onClick={addAchievement}
        className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary"
      >
        + Add achievement
      </button>

      <AdminSaveBar
        saving={saving}
        message={message}
        error={error}
        onSave={() => save({ studentAchievements: data.studentAchievements })}
      />
    </div>
  );
}
