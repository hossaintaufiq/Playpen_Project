import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Globe,
  FlaskConical,
  Building2,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { CambridgeResultsShowcase } from "@/components/home/CambridgeResultsShowcase";
import { getSectionPreview } from "@/lib/school-images";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";

const pathways = [
  {
    level: "Cambridge O Level",
    classes: "Class VIII, IX & X",
    desc: "Comprehensive preparation across compulsory and elective subjects recognized internationally by employers and universities.",
    subjects: [
      "English Language",
      "Bengali",
      "Mathematics (Syllabus D)",
      "Additional Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Economics",
      "Accounting",
      "Business Studies",
      "Art & Design",
    ],
  },
  {
    level: "Cambridge International AS & A Level",
    classes: "Class XI & XII",
    desc: "Rigorous specialized subject mastery providing the gold standard qualification for worldwide top-tier university entrance.",
    subjects: [
      "Mathematics",
      "Further Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Economics",
      "Accounting",
      "Business",
      "Psychology",
      "English Language",
    ],
  },
];

const universityHighlights = [
  "Comprehensive career and college guidance starting from Class IX",
  "Dedicated support for UCAS (UK), Common App (USA), OUAC (Canada), and Australian university portals",
  "Direct assistance with recommendation letters, statement of purpose workshops, and scholarship applications",
  "Cambridge Outstanding Learner Awards — High Achievers, Top in Country & Top in World laurels",
];

export default async function SeniorSchoolPage() {
  const photoPreview = await getSectionPreview(
    "academics/senior-school",
    "Senior School Photo Highlights",
    "senior school",
  );

  return (
    <AcademicsPageShell
      section="/academics/senior-school"
      title="Senior School Division"
      subtitle="Class VIII to XII (Ages 13 – 18) — Cambridge O & A Level Excellence & Global University Pathways."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {/* Intro Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-border/80 bg-white p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-950 mb-4">
              <GraduationCap className="h-3.5 w-3.5 text-primary" />
              <span>Cambridge Upper Secondary &amp; Advanced (Class VIII – XII)</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              A Proven Record of Cambridge Laurels &amp; World University Placements
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Playpen Senior School provides a transformative academic experience. With world-class laboratory infrastructure approved by Cambridge Assessment and The British Council, students are mentored by premier faculty to achieve highest-tier distinctions in O, AS, and A Level examinations.
            </p>
            <div className="mt-6 space-y-2.5 pt-6 border-t border-border/60">
              {universityHighlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-muted">
            <Image
              src="/images/schools/senior.webp"
              alt="Playpen Senior Cambridge Students"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Cambridge Curriculum Breakdown */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Cambridge Academic Pathways &amp; Subject Streams
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Broad academic streams across Pure Sciences, Mathematics, Commerce, ICT, and Humanities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pathways.map((path) => (
              <div
                key={path.level}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-primary/30"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent-hover bg-accent-soft px-2.5 py-0.5 rounded-md">
                        {path.classes}
                      </span>
                      <h4 className="font-heading text-xl font-bold text-foreground mt-1.5">
                        {path.level}
                      </h4>
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {path.desc}
                  </p>

                  <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Subjects Offered ({path.subjects.length})
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {path.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-lg bg-surface border border-border/80 px-2.5 py-1 text-xs font-semibold text-foreground/90"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cambridge Examination Results Section */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-hover mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Official Examination Performance</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Cambridge Examination Results Breakdown
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Consistent record of world distinctions, outstanding learner awards, and high pass rates.
            </p>
          </div>

          <CambridgeResultsShowcase />
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

        {/* University Placements Banner */}
        <div className="mt-16 rounded-3xl bg-linear-to-r from-primary to-primary-dark p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xs border border-white/20">
                <Globe className="h-7 w-7 text-amber-300" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-white">
                  University Placements &amp; Alumni Gateway
                </h4>
                <p className="text-xs sm:text-sm text-white/85 mt-1 max-w-2xl leading-relaxed">
                  Our alumni study at premier global institutions including Oxford, Cambridge, UCL, Imperial College, Harvard, MIT, Toronto, UBC, Melbourne, and top local universities.
                </p>
              </div>
            </div>
            <Link
              href="/admissions"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-bold text-primary shadow-sm transition hover:bg-surface"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
