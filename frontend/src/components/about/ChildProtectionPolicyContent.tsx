"use client";

import { HeartHandshake, Mail, Phone, Shield, ShieldCheck, CheckCircle2, Lock, AlertCircle, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schoolContact } from "@/lib/contact";
import {
  childProtectionStatement,
  policyFramework,
  protectionCommitments,
} from "@/lib/child-protection-policy";

export function ChildProtectionPolicyContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 w-full min-w-0">
      <div className="space-y-14 sm:space-y-18">
        {/* 01 — Official Safeguarding Charter */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-surface to-accent/[0.08] p-7 sm:p-10 md:p-12 shadow-sm">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-white shadow-md mb-4">
              <Shield className="h-8 w-8" strokeWidth={2} />
            </div>
            
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-primary border border-primary/15 shadow-2xs mb-4">
              <Lock className="h-3.5 w-3.5 text-accent" />
              <span>Official Safeguarding Policy Statement</span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold leading-relaxed text-foreground md:leading-relaxed">
              {childProtectionStatement}
            </h2>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-primary">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Cambridge International Safeguarding Aligned</span>
              </span>
              <span>&bull;</span>
              <span>National Child Protection Protocols</span>
            </div>
          </div>
        </div>

        {/* 02 — Four Core Safeguarding Commitments */}
        <div>
          <SectionHeader
            eyebrow="Our Commitment"
            title="Safeguarding in Every Area of School Life"
            description="Playpen's child protection approach reflects both national statutory expectations and Cambridge International standards, applied consistently across education, pastoral care, campus infrastructure, and staff training."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {protectionCommitments.map((item, index) => (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-105">
                    <ShieldCheck className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-extrabold text-lg text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-border/50 flex items-center gap-1 text-[11px] font-bold text-accent uppercase tracking-wider">
                  <span>Standard 0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 03 — Policy Framework & Concern Reporting Desk */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left: Policy Framework List */}
          <div className="lg:col-span-7 rounded-3xl border border-border/80 bg-white p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>Institutional Protocol</span>
              </div>
              <h3 className="font-extrabold text-2xl text-foreground mb-3">
                Safeguarding &amp; Policy Framework
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Playpen is committed to protecting children through systematic policies and continuous supervision that prioritize safety, emotional wellbeing, and dignity.
              </p>

              <div className="space-y-3">
                {policyFramework.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90 leading-snug">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-hover mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Direct Safeguarding Reporting Desk */}
          <div className="lg:col-span-5 rounded-3xl border border-primary/25 bg-gradient-to-br from-surface via-white to-surface-subtle p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                <HeartHandshake className="h-6 w-6" strokeWidth={2} />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-accent mb-1">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>Direct Support Channel</span>
              </div>
              <h3 className="font-extrabold text-2xl text-foreground mb-2">
                Reporting a Safeguarding Concern
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                If you have any safeguarding or wellbeing concern regarding a pupil at Playpen, please notify school management immediately. All inquiries are treated with utmost confidentiality.
              </p>
            </div>

            <div className="mt-6 space-y-3 pt-4 border-t border-border/60">
              <a
                href={schoolContact.emailHref}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-border/80 shadow-2xs transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Confidential Email</p>
                  <p className="text-xs sm:text-sm font-bold text-foreground truncate">{schoolContact.email}</p>
                </div>
              </a>

              <a
                href={schoolContact.phoneHref}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-border/80 shadow-2xs transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-hover">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Direct Desk</p>
                  <p className="text-xs sm:text-sm font-bold text-foreground truncate">{schoolContact.phone}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
