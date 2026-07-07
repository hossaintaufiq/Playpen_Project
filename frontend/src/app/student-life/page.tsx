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
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <ul className="space-y-3 sm:space-y-4">
          {activities.map((activity) => (
            <li
              key={activity}
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-4"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-sm text-foreground sm:text-base">{activity}</span>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
