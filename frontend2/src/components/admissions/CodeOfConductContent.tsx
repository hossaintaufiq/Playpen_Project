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
        eyebrow="01 // Institutional Regulations"
        title="Rules that keep Playpen safe, respectful, and orderly"
        description="Every student and family is expected to uphold these standards — from discipline and attendance to devices, traffic, and contact information."
      />

      <div className="mt-10 space-y-8 sm:mt-12">
        <article
          id="discipline"
          className="scroll-mt-24 brutal-border bg-[#faf7f2] p-6 sm:p-8 brutal-shadow border-l-8 border-l-[#6b0c26]"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6b0c26] text-white">
              <Scale className="h-6 w-6" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
                01 // Discipline and Behaviour
              </p>
              <p className="mt-3 font-serif text-lg leading-relaxed text-[#121212]">
                {disciplineIntro}
              </p>
              <ul className="mt-4 space-y-2.5 border-t border-[#121212]/15 pt-4">
                {disciplineRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2.5 text-sm text-[#121212] font-medium">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#6b0c26]" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-xs sm:text-sm leading-relaxed text-[#121212]/80">
                {disciplinaryCommitteeNote}
              </p>
              <div className="mt-4 brutal-border bg-white p-4 text-sm leading-relaxed text-[#121212] font-bold">
                {parentsDisciplineNote}
              </div>
            </div>
          </div>
        </article>

        <article
          id="prohibited"
          className="scroll-mt-24 brutal-border bg-white p-6 brutal-shadow sm:p-8 border-l-8 border-l-red-600"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-600 text-white">
              <Ban className="h-6 w-6" strokeWidth={2} />
            </div>
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-widest text-red-600">
                02 // Prohibited on Campus
              </p>
              <p className="mt-3 font-serif text-lg leading-relaxed text-[#121212]">
                {prohibitedItemsIntro}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">
                {prohibitedItemsPolicy}
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article
            id="mobile"
            className="scroll-mt-24 brutal-border bg-white p-6 brutal-shadow sm:p-8"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
              <PhoneOff className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="mt-4 font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
              03 // Mobile Phone Policy
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#121212]/85">
              {mobilePhonePolicy}
            </p>
          </article>

          <article
            id="attendance"
            className="scroll-mt-24 brutal-border bg-white p-6 brutal-shadow sm:p-8"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
              <ClipboardCheck className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="mt-4 font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
              04 // School Attendance and Absence
            </p>
            <ul className="mt-3 space-y-2 border-t border-[#121212]/15 pt-3">
              {attendanceRules.map((rule) => (
                <li key={rule} className="flex items-start gap-2 text-xs sm:text-sm text-[#121212]/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#d97706]" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article
          id="security"
          className="scroll-mt-24 brutal-border bg-[#faf7f2] p-6 sm:p-8 brutal-shadow border-l-8 border-l-[#d97706]"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#d97706] text-white">
              <Car className="h-6 w-6" strokeWidth={2} />
            </div>
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-widest text-[#d97706]">
                05 // Security, Traffic &amp; Gate Protocols
              </p>
              <ul className="mt-4 space-y-3 border-t border-[#121212]/15 pt-4">
                {securityTrafficRules.map((rule) => (
                  <li key={rule} className="text-sm leading-relaxed text-[#121212] font-medium">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article
          id="contact"
          className="scroll-mt-24 brutal-border bg-white p-6 brutal-shadow sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#6b0c26] text-white">
              <UserCheck className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
                06 // Change of Address / Contact Information
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#121212]/85">
                {contactChangePolicy}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

