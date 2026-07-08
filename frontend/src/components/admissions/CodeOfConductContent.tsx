import {
  AlertTriangle,
  Ban,
  Car,
  ClipboardCheck,
  PhoneOff,
  Scale,
  UserCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  attendanceRules,
  contactChangePolicy,
  disciplineIntro,
  disciplineRules,
  disciplinaryCommitteeNote,
  mobilePhonePolicy,
  parentsDisciplineNote,
  prohibitedItemsIntro,
  prohibitedItemsPolicy,
  securityTrafficRules,
} from "@/lib/code-of-conduct";

export function CodeOfConductContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="Code of Conduct"
        title="Rules that keep Playpen safe, respectful, and orderly"
        description="Every student and family is expected to uphold these standards — from discipline and attendance to devices, traffic, and contact information."
      />

      <div className="mt-10 space-y-6 sm:mt-12">
        <article
          id="discipline"
          className="scroll-mt-24 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.04] p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
              <Scale className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                Discipline and Behaviour
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {disciplineIntro}
              </p>
              <ul className="mt-4 space-y-2">
                {disciplineRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2 text-sm text-foreground/90">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {rule}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {disciplinaryCommitteeNote}
              </p>
              <p className="mt-4 rounded-2xl border border-primary/10 bg-white/80 p-4 text-sm leading-relaxed text-foreground/90">
                {parentsDisciplineNote}
              </p>
            </div>
          </div>
        </article>

        <article
          id="prohibited"
          className="scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
              <Ban className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                Prohibited in School
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {prohibitedItemsIntro}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {prohibitedItemsPolicy}
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article
            id="mobile"
            className="scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
              <PhoneOff className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
              Mobile Phones
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {mobilePhonePolicy}
            </p>
          </article>

          <article
            id="attendance"
            className="scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
              <ClipboardCheck className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
              School Attendance and Absence
            </p>
            <ul className="mt-3 space-y-2">
              {attendanceRules.map((rule) => (
                <li key={rule} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {rule}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article
          id="security"
          className="scroll-mt-24 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:rounded-3xl sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white">
              <Car className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-800/80">
                School Security, Traffic and Parking
              </p>
              <ul className="mt-3 space-y-3">
                {securityTrafficRules.map((rule) => (
                  <li key={rule} className="text-sm leading-relaxed text-amber-950/85 sm:text-base">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article
          id="contact"
          className="scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
              <UserCheck className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                Change of Address / Contact Numbers
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {contactChangePolicy}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
