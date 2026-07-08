import { HeartHandshake, Mail, Phone, Shield, ShieldCheck } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schoolContact } from "@/lib/contact";
import {
  childProtectionStatement,
  policyFramework,
  protectionCommitments,
} from "@/lib/child-protection-policy";

export function ChildProtectionPolicyContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] via-white to-accent/[0.08] p-6 sm:p-8 md:p-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <Shield className="h-7 w-7" strokeWidth={1.75} />
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary/70">
            Official Policy Statement
          </p>
          <p className="mt-4 font-serif text-xl leading-relaxed text-foreground sm:text-2xl md:leading-relaxed">
            {childProtectionStatement}
          </p>
        </div>
      </div>

      <div className="mt-12 sm:mt-14">
        <SectionHeader
          eyebrow="Our Commitment"
          title="Safeguarding in every area of school life"
          description="Playpen's child protection approach reflects both national expectations and Cambridge Board standards, applied consistently across education, campus care, and daily operations."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {protectionCommitments.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <AboutContentSection title="Policy Framework">
          <p>
            Playpen is committed to protecting children through policies and practices that
            support their dignity, safety, and wellbeing at all times.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {policyFramework.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </AboutContentSection>

        <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <HeartHandshake className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <AboutContentSection title="Reporting a Concern">
              <p>
                If you have a safeguarding concern regarding a pupil at Playpen, please contact
                the school administration immediately. All reports are handled with care and
                confidentiality.
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href={schoolContact.emailHref} className="playpen-text hover:underline">
                    {schoolContact.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={schoolContact.phoneHref} className="playpen-text hover:underline">
                    {schoolContact.phone}
                  </a>
                </li>
              </ul>
            </AboutContentSection>
          </div>
        </div>
      </div>
    </section>
  );
}
