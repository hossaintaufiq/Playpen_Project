import {
  Award,
  BookOpen,
  Palette,
  Sparkles,
  Trophy,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ecaActivities,
  ecaCategories,
  ecaClosingNote,
  ecaHighlights,
  ecaIntro,
} from "@/lib/extra-curricular-activities";

const highlightIcons = [BookOpen, Sparkles, Palette, Award] as const;
const categoryIcons = [Trophy, Palette, BookOpen, Award] as const;

export function ExtraCurricularContent() {
  return (
    <>
      <SectionHeader
        eyebrow="Extra Curricular Activities"
        title="Well-rounded education beyond the Cambridge classroom"
        description={ecaIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {ecaHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.05] p-6 sm:mt-12 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
          Activities Include
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {ecaActivities.map((activity) => (
            <span
              key={activity}
              className="inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {activity}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2">
        {ecaCategories.map((category, index) => {
          const Icon = categoryIcons[index];
          return (
            <article
              key={category.title}
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-primary/10 bg-[#5a0000] p-6 text-white sm:mt-12 sm:p-8">
        <p className="font-serif text-xl font-semibold leading-relaxed sm:text-2xl">
          {ecaClosingNote}
        </p>
      </div>
    </>
  );
}
