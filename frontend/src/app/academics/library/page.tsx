import { BookOpen, Search, Clock, Users } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const features = [
  {
    icon: BookOpen,
    title: "Curriculum Resources",
    text: "Textbooks, reference materials, and reading programmes aligned with the Cambridge syllabus.",
  },
  {
    icon: Search,
    title: "Research Support",
    text: "Guidance for project work, extended reading, and independent study across divisions.",
  },
  {
    icon: Clock,
    title: "Scheduled Access",
    text: "Library periods integrated into the timetable for structured reading and study time.",
  },
  {
    icon: Users,
    title: "Librarian Support",
    text: "Staff assistance to help pupils find resources and develop strong reading habits.",
  },
];

export default function LibraryPage() {
  return (
    <AcademicsPageShell
      section="/academics/library"
      title="Library"
      subtitle="A quiet, resource-rich space that encourages reading, inquiry, and independent learning."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mt-0 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <AboutContentSection title="Our Library Services">
            <p>
              The Playpen library supports academic success by providing pupils with access to
              quality books and study materials. We encourage a culture of reading that extends
              beyond the classroom and builds lifelong learning habits.
            </p>
            <p>
              Pupils are expected to borrow and return materials responsibly and to maintain a
              respectful, quiet environment for all users.
            </p>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
