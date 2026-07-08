import Link from "next/link";
import {
  Bus,
  Hand,
  MessageCircle,
  ShieldCheck,
  UtensilsCrossed,
  Volume2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schoolContact } from "@/lib/contact";
import {
  busGuidelines,
  busGuidelinesIntro,
  transportationApplyNote,
  transportationHighlights,
  transportationIntro,
  transportationSafetyNote,
} from "@/lib/school-transportation";

const highlightIcons = [Bus, ShieldCheck, Volume2, Bus] as const;
const guidelineIcons = [ShieldCheck, Volume2, UtensilsCrossed, Hand, MessageCircle] as const;

export function SchoolTransportationContent() {
  return (
    <>
      <SectionHeader
        eyebrow="School Transportation"
        title="Safe, supervised bus travel since 2014"
        description={transportationIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {transportationHighlights.map((item, index) => {
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
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {transportationSafetyNote}
        </p>
      </div>

      <div className="mt-10 sm:mt-12">
        <SectionHeader
          align="left"
          eyebrow="Bus Guidelines"
          title="Rules every student must follow on the bus"
          description={busGuidelinesIntro}
          className="max-w-3xl"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {busGuidelines.map((rule, index) => {
            const Icon = guidelineIcons[index];
            return (
              <article
                key={rule}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition hover:border-primary/20 hover:shadow-md sm:rounded-3xl"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="pt-1.5 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {rule}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2 sm:mt-12">
        <article className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#5a0000] p-6 text-white shadow-lg sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,162,39,0.18),transparent_55%)]" />
          <div className="relative">
            <Bus className="h-10 w-10 text-accent" strokeWidth={1.5} />
            <h3 className="mt-5 font-serif text-2xl font-semibold">How to Apply</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              {transportationApplyNote}
            </p>
            <p className="mt-4 text-sm text-white/75">
              Visit the Administrative Office for route availability, registration, and fee
              details at the start of the academic year.
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-border/60 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            Transport Enquiries
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            For questions about school bus routes, schedules, or registration, contact the
            school administration.
          </p>
          <Link
            href={schoolContact.emailHref}
            className="playpen-text mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
          >
            {schoolContact.email}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>
    </>
  );
}
