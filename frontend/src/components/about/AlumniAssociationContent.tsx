import { Globe2, Heart, Mail, Users } from "lucide-react";
import { AlumniRegistrationForm } from "@/components/about/AlumniRegistrationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  alumniCallToAction,
  alumniEmail,
  alumniIntro,
  tagoreQuote,
} from "@/lib/alumni-association";

const highlights = [
  {
    icon: Users,
    title: "Reconnect",
    text: "Find old batch mates and relive the friendships that began at Playpen.",
  },
  {
    icon: Globe2,
    title: "Worldwide Network",
    text: "Stay linked with alumni excelling across Bangladesh and around the globe.",
  },
  {
    icon: Heart,
    title: "Shared Memories",
    text: "Celebrate beautiful moments from Playpen and the journeys that followed.",
  },
];

export function AlumniAssociationContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.08] via-white to-accent/[0.08] px-6 py-10 text-center sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
          {tagoreQuote.attributionEn}
        </p>
        <p className="mt-1 text-sm text-primary/80">{tagoreQuote.attribution}</p>
        <blockquote className="font-bengali mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl md:leading-relaxed">
          {tagoreQuote.lines.map((line) => (
            <p key={line} className="mt-2 first:mt-0">
              &ldquo;{line}&rdquo;
            </p>
          ))}
        </blockquote>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center sm:mt-12">
        {alumniIntro.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border/60 bg-white p-6 text-center shadow-sm sm:rounded-3xl"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
              <item.icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 sm:mt-14">
        <SectionHeader
          eyebrow="Alumni Registration"
          title="Join the Playpen Alumni Association"
          description={alumniCallToAction}
        />

        <div className="mx-auto mt-6 flex max-w-2xl justify-center">
          <a
            href={`mailto:${alumniEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            <Mail className="h-4 w-4" />
            {alumniEmail}
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <AlumniRegistrationForm />
        </div>
      </div>
    </section>
  );
}
