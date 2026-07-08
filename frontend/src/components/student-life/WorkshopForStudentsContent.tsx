import {
  Globe2,
  GraduationCap,
  Laptop,
  Mic,
  Sparkles,
  Award,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  workshopHighlights,
  workshopIntro,
  workshopTopics,
} from "@/lib/workshop-for-students";

const highlightIcons = [Mic, GraduationCap, Globe2, Laptop] as const;
const topicIcons = [Laptop, GraduationCap, Globe2, Sparkles, Award] as const;

export function WorkshopForStudentsContent() {
  return (
    <>
      <SectionHeader
        eyebrow="Workshops for Students"
        title="Seminars that prepare students for the world ahead"
        description={workshopIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {workshopHighlights.map((item, index) => {
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

      <div className="mt-10 sm:mt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
          Workshop Topics
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workshopTopics.map((topic, index) => {
            const Icon = topicIcons[index];
            return (
              <article
                key={topic.title}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition hover:border-primary/20 hover:shadow-md sm:rounded-3xl sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-primary/10 bg-[#5a0000] p-6 text-white sm:mt-12 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
          Beyond the Classroom
        </p>
        <p className="mt-4 font-serif text-xl font-semibold leading-relaxed sm:text-2xl">
          Playpen workshops equip students with digital responsibility, university readiness, and
          leadership skills for life after school.
        </p>
      </div>
    </>
  );
}
