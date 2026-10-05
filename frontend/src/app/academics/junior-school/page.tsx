import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  Microscope,
  Languages,
  Laptop,
  Palette,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  GraduationCap,
} from "lucide-react";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { getSectionPreview } from "@/lib/school-images";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";

const coreSubjects = [
  {
    icon: BookOpen,
    title: "English Language & Literature",
    desc: "Guided reading schemes, grammar mastery, creative writing, comprehension, and vocabulary development.",
    badge: "Core Literacy",
  },
  {
    icon: Calculator,
    title: "Mathematics & Mental Math",
    desc: "Number sense, basic operations, geometry, practical measurement, fractions, and logical problem solving.",
    badge: "Numeracy",
  },
  {
    icon: Microscope,
    title: "General Science",
    desc: "Hands-on discovery of living things, materials, earth and space, forces, and simple scientific experiments.",
    badge: "Scientific Inquiry",
  },
  {
    icon: Languages,
    title: "Bengali Language & Heritage",
    desc: "Bangla reading, writing, spelling, storytelling, cultural rhymes, and celebration of national history.",
    badge: "Bilingual Foundation",
  },
  {
    icon: Laptop,
    title: "Computer Science & Digital Literacy",
    desc: "Age-appropriate introduction to keyboarding, basic software tools, logic games, and safe internet awareness.",
    badge: "ICT Skills",
  },
  {
    icon: Palette,
    title: "Art, Craft & Performing Arts",
    desc: "Visual arts, sketching, drama, musical rhythm, and cultural performances cultivating creative expression.",
    badge: "Creative Expression",
  },
];

const juniorHighlights = [
  "Cambridge Primary aligned curriculum building foundational academic excellence",
  "Dedicated interactive classrooms equipped with multimedia visual learning tools",
  "Continuous formative assessment without high-stress testing pressure",
  "Structured co-curricular clubs including chess, music, yoga, and gymnastics",
  "Regular parent-teacher collaboration and detailed developmental progress reports",
];

export default async function JuniorSchoolPage() {
  const photoPreview = await getSectionPreview(
    "academics/junior-school",
    "Junior School Photo Highlights",
    "junior school",
  );

  return (
    <AcademicsPageShell
      section="/academics/junior-school"
      title="Junior School Division"
      subtitle="Class I to III (Ages 6 – 8) — Cultivating Core Competencies, Curiosity & Character."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {/* Intro Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-border/80 bg-white p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-900 mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Primary Stage (Class I – III)</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Building Strong Foundations in Literacy, Numeracy &amp; Inquiry
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Junior School represents an essential step where pupils transition into structured, subject-based learning. Following Cambridge Primary guidelines, we inspire curiosity, independence, and critical thinking while ensuring students master core academic disciplines in a supportive, encouraging atmosphere.
            </p>
            <div className="mt-6 space-y-2.5 pt-6 border-t border-border/60">
              {juniorHighlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-muted">
            <Image
              src="/images/schools/junior.webp"
              alt="Playpen Junior School Classroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Core Subject Breakdown */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Academic Curriculum &amp; Subjects
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Carefully designed subjects aligned with international benchmarks to develop well-rounded intellectual abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSubjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <div
                  key={subject.title}
                  className="flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-primary/30"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-surface px-2.5 py-1 rounded-md border border-border/60">
                        {subject.badge}
                      </span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-foreground">
                      {subject.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {subject.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pedagogical Approach */}
        <div className="mt-16 rounded-3xl bg-linear-to-br from-surface to-muted/40 p-8 sm:p-10 border border-border/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <Sparkles className="h-7 w-7 text-accent mb-3" />
              <h4 className="font-heading text-lg font-bold text-foreground">Inquiry-Led Learning</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Teachers guide students to ask questions, explore phenomena, and discover concepts through experiments and guided projects.
              </p>
            </div>
            <div className="p-4">
              <Award className="h-7 w-7 text-primary mb-3" />
              <h4 className="font-heading text-lg font-bold text-foreground">Holistic Development</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Emphasis is placed equally on academic rigor, moral integrity, empathy, and collaborative social skills.
              </p>
            </div>
            <div className="p-4">
              <Layers className="h-7 w-7 text-blue-600 mb-3" />
              <h4 className="font-heading text-lg font-bold text-foreground">Smooth Transition</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Prepares students seamlessly for Middle School subject depth, independent homework management, and scientific labs.
              </p>
            </div>
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
              Middle School (Class IV – VII)
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Explore how students advance into departmental science labs and Cambridge Lower Secondary rigor.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/academics/middle-school"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
            >
              <span>Explore Middle School</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
