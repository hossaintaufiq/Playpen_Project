import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

const activities = [
  "Annual Sports & Athletics",
  "Extra Curricular Activities",
  "Community Service",
  "Cultural Programmes",
  "Science Fair",
  "Workshops & Career Guidance",
];

export default function StudentLifePage() {
  return (
    <SiteLayout>
      <PageHero
        title="Student Life"
        subtitle="A vibrant community where students learn, grow, and thrive beyond the classroom."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li
              key={activity}
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 shadow-sm"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">{activity}</span>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
