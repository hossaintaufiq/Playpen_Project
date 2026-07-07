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
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {programs.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-primary">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.grades}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
