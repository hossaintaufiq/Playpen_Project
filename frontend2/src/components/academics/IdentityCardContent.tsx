import Image from "next/image";
import { BadgeCheck, CreditCard, RefreshCw, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteLogo } from "@/lib/brand";
import {
  identityCardDailyWear,
  identityCardIntro,
  identityCardPolicies,
  identityCardReplacement,
} from "@/lib/identity-card";

const policyIcons = [BadgeCheck, ShieldCheck, RefreshCw] as const;

function IdentityCardMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <article className="relative overflow-hidden brutal-border bg-white brutal-shadow">
        {/* Card Header */}
        <div className="bg-[#121212] px-6 py-5 text-white border-b-2 border-[#121212]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden bg-white p-1 border border-white">
                <Image
                  src={siteLogo.src}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-lg font-black tracking-tight text-white">PLAYPEN</p>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#d97706]">
                  School of Excellence
                </p>
              </div>
            </div>
            <CreditCard className="h-6 w-6 text-[#d97706]" strokeWidth={2} />
          </div>
        </div>

        {/* Card Body */}
        <div className="grid grid-cols-[96px_1fr] gap-4 p-5 sm:p-6 bg-[#faf7f2]">
          <div className="flex aspect-[3/4] flex-col items-center justify-center border-2 border-dashed border-[#121212]/30 bg-white p-2">
            <div className="flex h-12 w-12 items-center justify-center bg-[#6b0c26] text-white font-mono font-bold text-sm">
              PP
            </div>
            <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-wider text-[#121212]/60">
              Student Photo
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-[#6b0c26]">
                Student Name
              </p>
              <p className="mt-0.5 font-serif text-base font-bold text-[#121212]">Official Full Name</p>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-b border-[#121212]/15 py-2">
              <div>
                <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-[#6b0c26]">
                  Class Level
                </p>
                <p className="mt-0.5 font-mono font-bold text-[#121212]">Class —</p>
              </div>
              <div>
                <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-[#6b0c26]">
                  Student ID
                </p>
                <p className="mt-0.5 font-mono font-bold text-[#121212]">PP-0000</p>
              </div>
            </div>
            <div>
              <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-[#6b0c26]">
                Session Validity
              </p>
              <p className="mt-0.5 font-mono font-bold text-[#121212]">2025 – 2026 Academic Year</p>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="border-t-2 border-[#121212] bg-[#121212] px-5 py-2.5 sm:px-6">
          <p className="text-center font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#faf7f2]/80">
            Official Student Credential · Playpen Dhaka
          </p>
        </div>
      </article>
    </div>
  );
}

export function IdentityCardContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Student Identification Protocol"
            title="Your Playpen ID Card — issued, worn, and protected"
            description={identityCardIntro}
            className="max-w-xl"
          />

          <div className="mt-8 space-y-4">
            <div className="brutal-border bg-white p-5 sm:p-6 brutal-shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#6b0c26] text-white font-mono font-bold">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#121212]">Daily Campus Obligation</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#121212]/80">
                    {identityCardDailyWear}
                  </p>
                </div>
              </div>
            </div>

            <div className="brutal-border bg-[#faf7f2] p-5 sm:p-6 brutal-shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#d97706] text-white font-mono font-bold">
                  <RefreshCw className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#121212]">
                    Lost or Damaged Cards
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#121212]/80">
                    {identityCardReplacement}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IdentityCardMock />
      </div>

      <div className="mt-16 sm:mt-20 border-t-2 border-[#121212] pt-12">
        <SectionHeader
          eyebrow="02 // Policy Framework"
          title="Three simple rules every family should know"
          description="Clear expectations that keep students identifiable, secure, and accounted for across the entire campus perimeter."
        />

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3">
          {identityCardPolicies.map((policy, index) => {
            const Icon = policyIcons[index];
            return (
              <article
                key={policy.title}
                className="group relative flex flex-col justify-between brutal-border bg-white p-6 sm:p-8 brutal-shadow transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-[#121212] pb-4">
                    <span className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
                      Rule 0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center bg-[#121212] text-white">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-[#121212]">
                    {policy.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">{policy.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

