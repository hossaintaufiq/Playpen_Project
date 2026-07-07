import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

const programs = [
  { name: "Elementary School", grades: "Playgroup – KG II" },
  { name: "Junior School", grades: "Class I – III" },
  { name: "Middle School", grades: "Class IV – VII" },
  { name: "Senior School", grades: "Class VIII – XII (O/A Level)" },
];

export default function AcademicsPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Academics"
        subtitle="Cambridge curriculum designed to inspire excellence at every level."
      />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {programs.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-border bg-white p-5 shadow-sm sm:rounded-2xl sm:p-6"
            >
              <h3 className="font-serif text-lg font-bold text-primary sm:text-xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.grades}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
