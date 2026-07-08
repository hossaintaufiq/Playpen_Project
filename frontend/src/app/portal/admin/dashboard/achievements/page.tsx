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
import type { AchievementCategory, StudentAchievement } from "@/lib/cms/types";

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

  if (loading || !data) return <AdminLoading />;

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
      <AdminSectionHeader />

      <div className="space-y-4">
        {sorted.length === 0 && (
          <AdminEmptyState
            title="No achievements yet"
            description="Add student competition results and awards to showcase on the website."
          />
        )}

        {sorted.map((achievement) => (
          <AdminCard key={achievement.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Event name">
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
              <AdminField label="Venue / place">
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
              <AdminField label="Display order" hint="Lower numbers appear first">
                <input
                  type="number"
                  className={adminInputClass}
                  value={achievement.order}
                  onChange={(e) =>
                    updateAchievement(achievement.id, { order: Number(e.target.value) || 0 })
                  }
                />
              </AdminField>
              <AdminField label="Photo path (optional)" hint="/images/marquee/achievements.jpg">
                <input
                  className={adminInputClass}
                  placeholder="/images/marquee/achievements.jpg"
                  value={achievement.image ?? ""}
                  onChange={(e) => updateAchievement(achievement.id, { image: e.target.value })}
                />
              </AdminField>
              <div className="md:col-span-2">
                <AdminPublishToggle
                  checked={achievement.published}
                  onChange={(published) => updateAchievement(achievement.id, { published })}
                />
              </div>
              <AdminField label="Results" hint="Write one student result per line">
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
            <AdminDeleteButton
              onClick={() =>
                updateLocal({
                  studentAchievements: data.studentAchievements.filter(
                    (item) => item.id !== achievement.id
                  ),
                })
              }
            >
              Remove this achievement
            </AdminDeleteButton>
          </AdminCard>
        ))}
      </div>

      <div className="mt-4">
        <AdminAddButton onClick={addAchievement}>Add achievement</AdminAddButton>
      </div>

      <AdminSaveBar
        saving={saving}
        message={message}
        error={error}
        onSave={() => save({ studentAchievements: data.studentAchievements })}
      />
    </div>
  );
}
