import { ArrowRight, Heart, Ear, Lock, Sparkles } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { schoolContact } from "@/lib/contact";

const supportAreas = [
  {
    icon: Heart,
    title: "Emotional Wellbeing",
    text: "A confidential space for pupils to discuss worries, stress, or personal challenges.",
  },
  {
    icon: Ear,
    title: "Active Listening",
    text: "Counselling sessions that help pupils feel heard, understood, and supported.",
  },
  {
    icon: Sparkles,
    title: "Personal Growth",
    text: "Guidance on confidence, relationships, study habits, and positive decision-making.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    text: "Matters are handled sensitively, with safeguarding procedures followed when needed.",
  },
];

export default function CounsellorPage() {
  return (
    <AcademicsPageShell
      section="/academics/counsellor"
      title="Counsellor"
      subtitle="Professional pastoral support to help pupils navigate academic and personal challenges."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Playpen&apos;s counselling service supports the whole child — helping pupils manage
            emotions, build resilience, and access the help they need to succeed in school and
            beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {supportAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <AboutContentSection title="How Counselling Works">
            <p>
              Pupils may be referred by teachers or parents, or may request support themselves.
              The counsellor works in partnership with division heads and families where
              appropriate, always keeping pupil welfare at the centre.
            </p>
            <p>
              For counselling enquiries, please contact the school administration office.
            </p>
          </AboutContentSection>

          <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.06] p-6 sm:rounded-3xl sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div className="md:max-w-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                Need to speak with someone?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Contact the admin office to arrange a meeting or learn more about counselling
                support at Playpen.
              </p>
            </div>
            <a
              href={schoolContact.emailHref}
              className="playpen-bg mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark md:mt-0 md:w-auto"
            >
              Contact School
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
