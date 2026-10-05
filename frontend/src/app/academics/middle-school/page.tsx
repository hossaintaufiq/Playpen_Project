import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  FlaskConical,
  Binary,
  Globe2,
  BookOpen,
  Calculator,
  Languages,
  Palette,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { getSectionPreview } from "@/lib/school-images";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";

const subjectCategories = [
  {
    category: "Sciences & Mathematics",
    color: "bg-teal-50 border-teal-200 text-teal-800",
    icon: FlaskConical,
    subjects: [
      { name: "General Science (Physics, Chemistry, Biology)", desc: "Lab-based experiments, hypothesis testing, and foundational theory." },
      { name: "Mathematics", desc: "Pre-algebra, Euclidean geometry, data handling, and mathematical problem-solving." },
    ],
  },
  {
    category: "Computing & Digital Innovation",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    icon: Binary,
    subjects: [
      { name: "Computer Science & ICT", desc: "Block-based coding, Python basics, web principles, logic, and digital safety." },
      { name: "Robotics & STEM Labs", desc: "Hands-on projects and problem-solving through technology clubs." },
    ],
  },
  {
    category: "Languages & Humanities",
    color: "bg-amber-50 border-amber-200 text-amber-800",
    icon: Globe2,
    subjects: [
      { name: "English Language & Literature", desc: "Critical reading, textual analysis, essay composition, and public speaking." },
      { name: "Bengali Language & Culture", desc: "Advanced grammar, Bangladeshi history, classical poetry, and composition." },
      { name: "History & Global Geography", desc: "World civilizations, environmental studies, and global affairs." },
    ],
  },
  {
    category: "Creative Arts & Co-Curriculars",
    color: "bg-purple-50 border-purple-200 text-purple-800",
    icon: Palette,
    subjects: [
      { name: "Visual Art & Design", desc: "Fine arts, multi-medium crafting, graphic appreciation, and exhibitions." },
      { name: "Physical Education & Athletics", desc: "Team sports (football, basketball, cricket, badminton) and fitness." },
    ],
  },
];

export default async function MiddleSchoolPage() {
  const photoPreview = await getSectionPreview(
    "academics/middle-school",
    "Middle School Photo Highlights",
    "middle school",
  );

  return (
    <AcademicsPageShell
      section="/academics/middle-school"
      title="Middle School Division"
      subtitle="Class IV to VII (Ages 9 – 12) — Fostering Critical Thinking, Laboratory Discovery & Leadership."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {/* Intro Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-border/80 bg-white p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-900 mb-4">
              <Compass className="h-3.5 w-3.5" />
              <span>Cambridge Lower Secondary Stage (Class IV – VII)</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Expanding Intellectual Horizons &amp; Scientific Curiosity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Middle School is a formative period of growth where students deepen their academic inquiry, engage in hands-on science laboratories, develop structured study habits, and discover their personal passions through a rich Cambridge Lower Secondary framework.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-border/60 text-xs sm:text-sm font-semibold text-foreground/90">
              <div className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-teal-600 shrink-0" />
                <span>Modern Science &amp; Computer Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent shrink-0" />
                <span>Olympiads &amp; House Competitions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary shrink-0" />
                <span>Student Leadership &amp; Prefect Council</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-600 shrink-0" />
                <span>Cambridge Checkpoint Preparation</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-muted">
            <Image
              src="/images/schools/middle.webp"
              alt="Playpen Middle School Lab and Students"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Subjects & Disciplines */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Academic Curriculum Structure
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              A balanced, rigorous curriculum that equips students for future O and A Level specialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjectCategories.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="rounded-3xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md hover:border-primary/30"
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/60">
                    <div className={`p-2.5 rounded-2xl border ${group.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-foreground">
                      {group.category}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {group.subjects.map((sub, i) => (
                      <div key={i} className="rounded-xl bg-surface/70 p-3.5 border border-border/60">
                        <h5 className="font-bold text-sm text-foreground">
                          {sub.name}
                        </h5>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {sub.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Photo Preview */}
        {photoPreview ? (
          <div className="mt-16">
            <SectionPhotoPreview
              title={photoPreview.title}
              href={photoPreview.href}
              images={photoPreview.images}
            />
          </div>
        ) : null}

        {/* Next Stage Navigation */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Next Academic Stage
            </span>
            <h4 className="font-heading text-xl font-bold text-foreground mt-0.5">
              Senior School (Class VIII – XII)
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Explore our Cambridge O Level &amp; A Level examination pathways and university admissions mentorship.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/academics/senior-school"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
            >
              <span>Explore Senior School</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
