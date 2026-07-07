import { Award, Trophy, Star, GraduationCap } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const areas = [
  {
    icon: Trophy,
    title: "Cambridge Results",
    text: "Strong performance in O and A Level examinations year after year.",
  },
  {
    icon: Star,
    title: "Academic Competitions",
    text: "Pupils recognised in olympiads, debates, quizzes, and inter-school events.",
  },
  {
    icon: Award,
    title: "Sports & Arts",
    text: "Achievement in athletics, cultural programmes, and co-curricular activities.",
  },
  {
    icon: GraduationCap,
    title: "University Placements",
    text: "Graduates admitted to respected universities at home and abroad.",
  },
];

const highlights = [
  "Consistent Cambridge examination success across senior divisions",
  "Individual and team awards in national and international competitions",
  "Recognition in science fairs, literary events, and public speaking",
  "Outstanding contributions in sports, music, and the arts",
  "Alumni who have gone on to excel in diverse professional fields",
];

export default function StudentAchievementsPage() {
  return (
    <AcademicsPageShell
      section="/academics/student-achievements"
      title="Achievements of Playpen Students"
      subtitle="Celebrating the excellence, dedication, and success of our pupils across every field."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 text-center shadow-sm sm:p-6"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="A Legacy of Excellence">
            <p>
              Playpen pupils are encouraged to pursue their best in academics, character, and
              co-curricular life. Their achievements reflect the quality of teaching, the
              support of families, and the determination of students themselves.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
