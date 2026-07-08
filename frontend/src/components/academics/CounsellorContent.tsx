import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Compass,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schoolContact } from "@/lib/contact";
import {
  careerCounsellorDescription,
  careerCounsellorSupportAreas,
  careerCounsellorTitle,
  studentCounsellorDescription,
  studentCounsellorSupportAreas,
  studentCounsellorTitle,
} from "@/lib/counsellor";

function CounsellorCard({
  eyebrow,
  title,
  description,
  areas,
  icon: Icon,
  accent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  areas: readonly string[];
  icon: LucideIcon;
  accent: "primary" | "maroon";
}) {
  const isMaroon = accent === "maroon";

  return (
    <article
      className={`relative overflow-hidden rounded-3xl border shadow-[0_16px_48px_-20px_rgba(128,0,0,0.2)] ${
        isMaroon
          ? "border-primary/20 bg-gradient-to-br from-[#5a0000] via-primary to-[#5a0000] text-white"
          : "border-border/60 bg-white"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isMaroon
            ? "bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(128,0,0,0.05),transparent_60%)]"
        }`}
      />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                isMaroon ? "text-white/70" : "text-primary/60"
              }`}
            >
              {eyebrow}
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">{title}</h3>
          </div>
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
              isMaroon ? "bg-white/10 text-accent" : "bg-primary/[0.08] text-primary"
            }`}
          >
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
        </div>

        <p
          className={`mt-5 text-sm leading-relaxed sm:text-base ${
            isMaroon ? "text-white/85" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>

        <div className="mt-6">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
              isMaroon ? "text-white/65" : "text-primary/60"
            }`}
          >
            How we support students
          </p>
          <ul className="mt-3 space-y-2.5">
            {areas.map((area) => (
              <li
                key={area}
                className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                  isMaroon ? "text-white/90" : "text-foreground/85"
                }`}
              >
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                    isMaroon ? "bg-accent" : "bg-primary"
                  }`}
                />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function CounsellorContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="Guidance & Wellbeing"
        title="Two dedicated counselling services for every stage of school life"
        description="Playpen ensures students always have someone to turn to — whether they need day-to-day support or guidance on their future beyond school."
      />

      <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
        <CounsellorCard
          eyebrow="On-campus support"
          title={studentCounsellorTitle}
          description={studentCounsellorDescription}
          areas={studentCounsellorSupportAreas}
          icon={HeartHandshake}
          accent="primary"
        />
        <CounsellorCard
          eyebrow="Future pathways"
          title={careerCounsellorTitle}
          description={careerCounsellorDescription}
          areas={careerCounsellorSupportAreas}
          icon={GraduationCap}
          accent="maroon"
        />
      </div>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
        {[
          {
            icon: MessageCircle,
            title: "Always Available",
            text: "Faculty counsellors remain on standby whenever students need advice or support.",
          },
          {
            icon: Compass,
            title: "Holistic Guidance",
            text: "Support spans academic, non-academic, and behavioural concerns referred by teachers.",
          },
          {
            icon: Briefcase,
            title: "Career & University",
            text: "Senior leadership guides applications, procedures, and higher studies at home and abroad.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
              <item.icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.06] p-6 sm:mt-12 sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
        <div className="md:max-w-2xl">
          <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Speak with a counsellor
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            For counselling enquiries or career guidance appointments, contact the school
            administration office.
          </p>
        </div>
        <Link
          href={schoolContact.emailHref}
          className="playpen-bg mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark md:mt-0 md:w-auto"
        >
          Contact School
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
