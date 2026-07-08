import { HandHeart, Heart, Home, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  communityServiceActivities,
  communityServiceActivitiesIntro,
  communityServiceHighlights,
  communityServiceIntro,
} from "@/lib/community-service";

const highlightIcons = [HandHeart, Users, Heart, Home] as const;
const activityIcons = [Heart, HandHeart, Users, Home] as const;

export function CommunityServiceContent() {
  return (
    <>
      <SectionHeader
        eyebrow="Community Service"
        title="Serving others with compassion and responsibility"
        description={communityServiceIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {communityServiceHighlights.map((item, index) => {
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
          How Students Serve
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {communityServiceActivitiesIntro}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {communityServiceActivities.map((activity, index) => {
            const Icon = activityIcons[index];
            return (
              <div
                key={activity}
                className="flex items-start gap-3 rounded-2xl border border-border/50 bg-white p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{activity}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-primary/10 bg-[#5a0000] p-6 text-white sm:mt-12 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
          A Playpen Tradition
        </p>
        <p className="mt-4 font-serif text-xl font-semibold leading-relaxed sm:text-2xl">
          Learning empathy, civic duty, and the power of collective action — one community at a
          time.
        </p>
      </div>
    </>
  );
}
