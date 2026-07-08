import Link from "next/link";
import {
  AlertCircle,
  HeartPulse,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schoolContact } from "@/lib/contact";
import {
  healthCenterCampusNote,
  healthCenterCareNote,
  healthCenterHighlights,
  healthCenterIntro,
  healthCenterParentNote,
  healthCenterSeriousCasesNote,
  healthCenterServices,
  parentGuidelines,
} from "@/lib/health-center";

const highlightIcons = [HeartPulse, Stethoscope, Users, ShieldCheck] as const;

export function HealthCenterContent() {
  return (
    <>
      <SectionHeader
        eyebrow="Health Center"
        title="Caring for students every school day"
        description={healthCenterIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {healthCenterHighlights.map((item, index) => {
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

      <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
        <article className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 sm:rounded-3xl sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            During the School Day
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {healthCenterCareNote}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {healthCenterCampusNote}
          </p>
        </article>

        <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:rounded-3xl sm:p-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-800/80">
                Serious Cases
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-amber-950/90 sm:text-base">
                {healthCenterSeriousCasesNote}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-amber-950/80">
                {healthCenterParentNote}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-10 rounded-3xl border border-border/60 bg-white p-6 shadow-sm sm:mt-12 sm:rounded-3xl sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
          What the Health Center Provides
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {healthCenterServices.map((service) => (
            <li
              key={service}
              className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            For Parents
          </p>
          <ul className="mt-4 space-y-2.5">
            {parentGuidelines.map((guideline) => (
              <li
                key={guideline}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {guideline}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-primary/10 bg-[#5a0000] p-6 text-white sm:rounded-3xl sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Contact the School
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            For health-related enquiries or to update your child&apos;s medical information,
            please contact the school office during office hours.
          </p>
          <div className="mt-5 space-y-2">
            <Link
              href={schoolContact.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-white hover:underline"
            >
              <Phone className="h-4 w-4" />
              {schoolContact.phone}
            </Link>
            <Link
              href={schoolContact.mobileHref}
              className="flex items-center gap-2 text-sm font-semibold text-white hover:underline"
            >
              <Phone className="h-4 w-4" />
              {schoolContact.mobile}
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
