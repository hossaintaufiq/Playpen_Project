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
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      {/* Policy Hero Statement Banner */}
      <div className="border-3 border-[#121212] bg-[#f4efe6] p-8 sm:p-12 shadow-[8px_8px_0px_#121212]">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center border-2 border-[#121212] bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212]">
            <Shield className="h-6 w-6 text-[#d97706]" strokeWidth={1.75} />
          </div>
          <span className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#6b0c26] bg-white px-2.5 py-0.5 border border-[#121212]">
            OFFICIAL SAFEGUARDING STATEMENT
          </span>
          <p className="mt-4 font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-[#121212] uppercase">
            &ldquo;{childProtectionStatement}&rdquo;
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <SectionHeader
          eyebrow="Our Commitment"
          title="Safeguarding in Every Area of School Life"
          description="Playpen's child protection approach reflects both national expectations and Cambridge International standards, applied consistently across education, campus care, and daily operations."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {protectionCommitments.map((item, idx) => (
            <article
              key={item.title}
              className="border-2 border-[#121212] bg-[#ffffff] p-6 shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] border-b-2 border-[#121212] pb-2 mb-4">
                  <span>STANDARD // 0{idx + 1}</span>
                  <ShieldCheck className="h-4 w-4 text-[#d97706]" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#121212] uppercase leading-tight">{item.title}</h3>
                <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-[#524d46]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <AboutContentSection title="Policy Framework">
          <p>
            Playpen is committed to protecting children through policies and practices that
            support their dignity, safety, and wellbeing at all times.
          </p>
          <ul className="list-disc space-y-2.5 pl-5 pt-2">
            {policyFramework.map((point) => (
              <li key={point} className="font-sans text-sm text-[#333333]">{point}</li>
            ))}
          </ul>
        </AboutContentSection>

        <div className="border-2 border-[#121212] bg-[#ffffff] p-6 sm:p-8 shadow-[5px_5px_0px_#121212] flex flex-col justify-between">
          <div>
            <div className="border-b-2 border-[#121212] pb-3 mb-4 flex items-center justify-between">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#121212] uppercase">
                Reporting a Concern
              </h2>
              <HeartHandshake className="h-5 w-5 text-[#6b0c26]" />
            </div>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#403d39]">
              If you have a safeguarding concern regarding a pupil at Playpen, please contact
              the school administration immediately. All reports are handled with utmost care, urgency, and confidentiality.
            </p>
            <div className="mt-6 border-t border-[#121212]/15 pt-4 space-y-3 font-mono text-xs sm:text-sm font-bold">
              <div className="flex items-center gap-2 text-[#121212]">
                <Mail className="h-4 w-4 text-[#6b0c26]" />
                <a href={schoolContact.emailHref} className="text-[#6b0c26] hover:underline lowercase">
                  {schoolContact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#121212]">
                <Phone className="h-4 w-4 text-[#6b0c26]" />
                <a href={schoolContact.phoneHref} className="text-[#6b0c26] hover:underline">
                  {schoolContact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
