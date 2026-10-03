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
        eyebrow="01 // Campus Medical Care"
        title="Caring for students every school day"
        description={healthCenterIntro}
      />

      <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {healthCenterHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="brutal-border bg-white p-5 sm:p-6 brutal-shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b0c26]">
                Facility 0{index + 1}
              </p>
              <h3 className="mt-1 font-serif text-lg font-bold text-[#121212]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#121212]/80">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2">
        <article className="brutal-border bg-white p-6 sm:p-8 brutal-shadow border-l-8 border-l-[#6b0c26]">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
            During the School Day
          </p>
          <p className="mt-4 font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
            {healthCenterCareNote}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#121212]/80">
            {healthCenterCampusNote}
          </p>
        </article>

        <article className="brutal-border bg-[#faf7f2] p-6 sm:p-8 brutal-shadow border-l-8 border-l-red-600">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-red-600 text-white">
              <AlertCircle className="h-6 w-6" strokeWidth={2} />
            </div>
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-widest text-red-600">
                Critical &amp; Serious Cases
              </p>
              <p className="mt-3 font-serif text-base sm:text-lg font-bold leading-relaxed text-[#121212]">
                {healthCenterSeriousCasesNote}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">
                {healthCenterParentNote}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-12 brutal-border bg-white p-6 sm:mt-16 sm:p-8 brutal-shadow border-t-8 border-t-[#121212]">
        <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
          What the Health Center Provides
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {healthCenterServices.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 text-sm leading-relaxed text-[#121212] font-medium"
            >
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#6b0c26]" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 border-t-2 border-[#121212] pt-12">
        <article className="brutal-border bg-[#faf7f2] p-6 sm:p-8 brutal-shadow-sm">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
            Guidelines For Parents
          </p>
          <ul className="mt-4 space-y-3 border-t border-[#121212]/15 pt-4">
            {parentGuidelines.map((guideline) => (
              <li
                key={guideline}
                className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[#121212]/85"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#d97706]" />
                <span>{guideline}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="brutal-border bg-[#121212] p-6 text-white sm:p-8 brutal-shadow">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#d97706]">
            Medical Enquiries Desk
          </p>
          <p className="mt-4 font-serif text-base leading-relaxed text-white/85">
            For health-related enquiries or to update your child&apos;s medical records,
            please contact the school office during operating hours.
          </p>
          <div className="mt-6 space-y-3 border-t border-white/20 pt-4">
            <Link
              href={schoolContact.phoneHref}
              className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-white hover:text-[#d97706] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{schoolContact.phone}</span>
            </Link>
            <Link
              href={schoolContact.mobileHref}
              className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-white hover:text-[#d97706] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{schoolContact.mobile}</span>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

