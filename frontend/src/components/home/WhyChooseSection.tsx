import { GraduationCap, BookOpen, Users, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionDivider } from "@/components/ui/SectionDivider";

const highlights = [
  {
    icon: GraduationCap,
    title: "Cambridge Curriculum",
    text: "Internationally recognized pathways from playgroup through A-Level.",
  },
  {
    icon: BookOpen,
    title: "Holistic Learning",
    text: "Academic depth balanced with arts, sports, and character development.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    text: "Educators who know each child and guide them with patience and care.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    text: "A trusted legacy of achievement built over decades of dedication.",
  },
];

function RoadCard({
  item,
  side,
  step,
}: {
  item: (typeof highlights)[number];
  side: "left" | "right";
  step: number;
}) {
  const isLeft = side === "left";

  return (
    <article
      className={`group relative w-full max-w-md rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_4px_24px_-10px_rgba(128,0,0,0.12)] transition duration-300 hover:border-primary/25 hover:shadow-[0_12px_32px_-12px_rgba(128,0,0,0.18)] sm:rounded-3xl sm:p-6 ${
        isLeft ? "lg:ml-auto" : "lg:mr-auto"
      }`}
    >
      <div
        className={`absolute top-1/2 hidden h-px w-8 -translate-y-1/2 lg:block ${
          isLeft
            ? "-right-8 bg-gradient-to-r from-primary/40 to-transparent"
            : "-left-8 bg-gradient-to-l from-primary/40 to-transparent"
        }`}
        aria-hidden
      />

      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_8px_20px_-8px_rgba(128,0,0,0.55)] transition duration-300 group-hover:bg-primary-dark sm:h-12 sm:w-12">
          <item.icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            Stop {String(step).padStart(2, "0")}
          </p>
          <h3 className="mt-1 font-serif text-lg font-semibold text-foreground sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.text}
          </p>
        </div>
      </div>
    </article>
  );
}

function RoadMilestone({ step }: { step: number }) {
  return (
    <div className="relative z-10 flex shrink-0 flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-accent bg-primary shadow-[0_0_0_6px_rgba(128,0,0,0.12)] sm:h-11 sm:w-11">
        <span className="font-serif text-sm font-bold text-white sm:text-base">{step}</span>
      </div>
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-muted/35 py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,0,0.04),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why Playpen"
          title="A school families choose with confidence"
          description="We combine academic rigour with a warm, supportive culture — so children feel at ease while they grow."
        />

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Desktop winding road */}
          <div
            className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-16 -translate-x-1/2 lg:block"
            aria-hidden
          >
            <svg
              viewBox="0 0 64 800"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
            >
              <path
                d="M32 0 C48 120, 16 200, 32 320 C48 440, 16 520, 32 640 C48 720, 24 760, 32 800"
                stroke="#5a0000"
                strokeWidth="30"
                strokeLinecap="round"
                opacity="0.25"
              />
              <path
                d="M32 0 C48 120, 16 200, 32 320 C48 440, 16 520, 32 640 C48 720, 24 760, 32 800"
                stroke="#800000"
                strokeWidth="20"
                strokeLinecap="round"
              />
              <path
                d="M32 0 C48 120, 16 200, 32 320 C48 440, 16 520, 32 640 C48 720, 24 760, 32 800"
                stroke="#c9a227"
                strokeWidth="2"
                strokeDasharray="10 14"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Mobile / tablet road */}
          <div
            className="pointer-events-none absolute bottom-4 left-5 top-4 w-3 rounded-full bg-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] sm:left-6 lg:hidden"
            aria-hidden
          >
            <div className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-accent" />
          </div>

          <div className="flex flex-col gap-12 sm:gap-14">
            {highlights.map((item, index) => {
              const isLeft = index % 2 === 0;
              const step = index + 1;

              return (
                <div
                  key={item.title}
                  className="relative lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 lg:py-2"
                >
                  <div className="absolute left-5 top-1 z-10 sm:left-6 lg:static lg:col-start-2 lg:flex lg:justify-center">
                    <RoadMilestone step={step} />
                  </div>

                  <div className="hidden lg:col-start-1 lg:row-start-1 lg:flex lg:justify-end lg:pr-6">
                    {isLeft && <RoadCard item={item} side="left" step={step} />}
                  </div>

                  <div
                    className={`pl-12 sm:pl-14 lg:col-start-3 lg:row-start-1 lg:pl-6 ${
                      isLeft ? "lg:hidden" : ""
                    }`}
                  >
                    <RoadCard item={item} side={isLeft ? "left" : "right"} step={step} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SectionDivider variant="soft" />
    </section>
  );
}
