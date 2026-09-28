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
    text: "Find old batch mates and relive the friendships and memories that began at Playpen.",
  },
  {
    icon: Globe2,
    title: "Worldwide Network",
    text: "Stay linked with alumni excelling across Bangladesh and around the globe.",
  },
  {
    icon: Heart,
    title: "Shared Heritage",
    text: "Celebrate beautiful milestones from Playpen and support the next generation of students.",
  },
];

export function AlumniAssociationContent() {
  return (
    <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      {/* Tagore Quote Banner */}
      <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-surface to-accent/[0.08] px-6 py-10 text-center sm:px-10 sm:py-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          {tagoreQuote.attributionEn} · {tagoreQuote.attribution}
        </span>
        <blockquote className="font-bengali mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl md:leading-relaxed font-semibold">
          {tagoreQuote.lines.map((line) => (
            <p key={line} className="mt-2 break-words first:mt-0">
              &ldquo;{line}&rdquo;
            </p>
          ))}
        </blockquote>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4 text-center">
        {alumniIntro.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-border/80 bg-white p-7 text-center shadow-sm transition hover:shadow-md hover:border-primary/20"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
              <item.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 font-extrabold text-xl text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 w-full min-w-0">
        <SectionHeader
          eyebrow="Alumni Registration"
          title="Join the Official Playpen Alumni Network"
          description={alumniCallToAction}
        />

        <div className="mx-auto mt-6 flex w-full max-w-2xl justify-center">
          <a
            href={`mailto:${alumniEmail}`}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-5 py-2.5 text-xs font-bold text-primary transition hover:bg-primary hover:text-white shadow-sm"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>{alumniEmail}</span>
          </a>
        </div>

        <div className="mx-auto mt-10 w-full min-w-0 max-w-3xl">
          <AlumniRegistrationForm />
        </div>
      </div>
    </section>
  );
}
