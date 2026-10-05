import Image from "next/image";
import Link from "next/link";
import {
  Smile,
  BookOpen,
  Sparkles,
  Heart,
  Palette,
  Music,
  Activity,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  ShieldCheck,
} from "lucide-react";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { getSectionPreview } from "@/lib/school-images";

const pillars = [
  {
    icon: BookOpen,
    title: "Phonics & Early Literacy",
    desc: "Letter-sound relationships through Jolly Phonics, rich storytelling, guided vocabulary building, and conversational English.",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: Sparkles,
    title: "Foundational Numeracy",
    desc: "Concrete sensory manipulatives, counting games, spatial awareness, shape recognition, and playful early logic.",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    icon: Palette,
    title: "Creative Arts & Music",
    desc: "Sensory painting, clay sculpting, rhythm exploration, and musical expression that cultivate imagination and fine motor control.",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: Activity,
    title: "Gross & Fine Motor Skills",
    desc: "Safe indoor and outdoor play spaces designed to build balance, hand-eye coordination, agility, and physical confidence.",
    color: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    icon: Heart,
    title: "Social & Emotional Growth",
    desc: "Sharing, active listening, empathy, following daily routines, and building friendships in a nurturing, caring environment.",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: Smile,
    title: "Bilingual Exposure",
    desc: "Immersion in English communication while cultivating early love and appreciation for Bengali language and culture.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

const gradeLevels = [
  {
    grade: "Playgroup",
    age: "Age 2.5 – 3.5 Years",
    focus: "Gentle transition from home to school, social interaction, sensory discovery, and motor play.",
  },
  {
    grade: "Nursery",
    age: "Age 3.5 – 4.5 Years",
    focus: "Phonics exploration, number recognition, pre-writing strokes, structured play, and expressive speech.",
  },
  {
    grade: "Kindergarten I (KG I)",
    age: "Age 4.5 – 5.5 Years",
    focus: "Emergent reading, basic addition concepts, creative writing readiness, science discovery, and independence.",
  },
  {
    grade: "Kindergarten II (KG II)",
    age: "Age 5.5 – 6.5 Years",
    focus: "Confident sentence reading, mathematical reasoning, inquiry projects, and preparation for Junior School.",
  },
];

export default async function EarlyChildhoodPage() {
  const photoPreview = await getSectionPreview(
    "academics/early-childhood",
    "Early Childhood Photo Highlights",
    "early childhood",
  );

  return (
    <AcademicsPageShell
      section="/academics/early-childhood"
      title="Early Childhood Division"
      subtitle="Playgroup to Kindergarten II — A warm, joyful foundation for lifelong learning."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {/* Intro Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-border/80 bg-white p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900 mb-4">
              <Smile className="h-3.5 w-3.5" />
              <span>Foundation Years (Playgroup – KG II)</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Where Curiosity, Play &amp; Joyful Learning Begin
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Playpen, our Early Childhood curriculum blends the best of early-years inquiry and play-based pedagogy. We create a safe, stimulating sanctuary where young minds explore the world around them, develop language confidence, and form a natural love for discovery.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border/60">
              <div className="flex items-center gap-2.5">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <span className="block text-xs font-bold text-foreground">Low Student-Teacher Ratio</span>
                  <span className="text-[11px] text-muted-foreground">Individualized Care</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <div>
                  <span className="block text-xs font-bold text-foreground">Child-Safe Campus</span>
                  <span className="text-[11px] text-muted-foreground">Padded &amp; Monitored</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <span className="block text-xs font-bold text-foreground">Morning &amp; Day Sessions</span>
                  <span className="text-[11px] text-muted-foreground">Age-Tailored Timetables</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-muted">
            <Image
              src="/images/schools/elementary.webp"
              alt="Playpen Early Childhood Classroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* 6 Curriculum Pillars */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Core Curriculum Pillars
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              A comprehensive developmental approach covering cognitive, social, emotional, and physical milestones.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-primary/30"
                >
                  <div>
                    <div className={`inline-flex p-3 rounded-2xl border ${pillar.color} mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-foreground">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grade Levels Breakdown */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Progression Across Early Years
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Structured stages ensuring every child transitions smoothly with confidence into formal primary schooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradeLevels.map((lvl, idx) => (
              <div
                key={lvl.grade}
                className="relative rounded-2xl border border-border/80 bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
                  Stage 0{idx + 1}
                </span>
                <h4 className="mt-1 font-heading text-xl font-bold text-foreground">
                  {lvl.grade}
                </h4>
                <p className="text-xs font-semibold text-amber-700 mt-0.5">
                  {lvl.age}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {lvl.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Preview if available */}
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
              Junior School (Class I – III)
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Discover how pupils transition into structured Cambridge Primary fundamentals.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/academics/junior-school"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
            >
              <span>Explore Junior School</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
