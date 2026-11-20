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
      <div
        aria-hidden
        className="absolute -inset-3 rounded-lg bg-surface blur-xl"
      />
      <article className="relative overflow-hidden rounded-lg border border-white/20 bg-white shadow-sm">
        <div className="bg-primary-dark px-6 py-5 text-white">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white p-1">
                <Image
                  src={siteLogo.src}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-heading text-lg font-bold leading-tight">Playpen</p>
                <p className="text-[10px] font-bold text-primary">
                  School of Excellence
                </p>
              </div>
            </div>
            <CreditCard className="h-8 w-8 text-accent/90" strokeWidth={1.5} />
          </div>
        </div>

        <div className="grid grid-cols-[96px_1fr] gap-4 p-5 sm:p-6">
          <div className="flex aspect-[3/4] items-center justify-center rounded-lg border border-dashed border-primary/20 bg-primary/[0.04]">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-heading text-lg font-bold">PP</span>
              </div>
              <p className="mt-2 text-[10px] font-bold tracking-wide text-muted-foreground">
                Photo
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-[10px] font-bold text-primary">
                Student Name
              </p>
              <p className="mt-1 font-heading text-lg font-bold text-foreground">Student Name</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] font-bold text-primary">
                  Class
                </p>
                <p className="mt-1 font-semibold text-foreground">Class —</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary">
                  ID No.
                </p>
                <p className="mt-1 font-semibold text-foreground">PP-0000</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-primary">
                Academic Year
              </p>
              <p className="mt-1 font-semibold text-foreground">2025 – 2026</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 bg-muted/30 px-5 py-3 sm:px-6">
          <p className="text-center text-[10px] font-bold text-muted-foreground">
            Official Student Identification
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
            eyebrow="Student Identification"
            title="Your Playpen ID card — issued, worn, and protected"
            description={identityCardIntro}
            className="max-w-xl"
          />

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-primary/15 bg-primary/[0.04] p-5 sm:rounded-lg sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Daily on campus</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {identityCardDailyWear}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-amber-200/80 bg-amber-50/70 p-5 sm:rounded-lg sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-amber-600 text-white">
                  <RefreshCw className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-amber-950">
                    Lost or damaged cards
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-950/80">
                    {identityCardReplacement}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IdentityCardMock />
      </div>

      <div className="mt-14 sm:mt-16">
        <SectionHeader
          eyebrow="Policy at a glance"
          title="Three simple rules every family should know"
          description="Clear expectations that keep students identifiable, secure, and accounted for on campus."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
          {identityCardPolicies.map((policy, index) => {
            const Icon = policyIcons[index];
            return (
              <article
                key={policy.title}
                className="group rounded-lg border border-border/60 bg-white p-6 shadow-sm transition hover:border-primary/20 hover:shadow-sm sm:rounded-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/[0.08] text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-5 text-[11px] font-bold text-primary">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                  {policy.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{policy.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
