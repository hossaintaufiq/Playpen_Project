"use client";

import {
  HandHeart,
  Heart,
  Home,
  Users,
  Gift,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  GraduationCap,
  Calendar,
  Layers,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  communityServiceIntro,
  communityServiceHighlights,
  donationServiceInitiatives,
  serviceWorkflowSteps,
  type DonationServiceInitiative,
} from "@/lib/community-service";

const highlightIcons = [HandHeart, Users, Heart, Home] as const;

function getInitiativeIcon(name: DonationServiceInitiative["iconName"]) {
  switch (name) {
    case "Gift":
      return Gift;
    case "Heart":
      return Heart;
    case "Home":
      return Home;
    case "Users":
      return Users;
    default:
      return HandHeart;
  }
}

function getBadgeStyles(color: DonationServiceInitiative["badgeColor"]) {
  switch (color) {
    case "amber":
      return {
        badge: "bg-amber-500/10 text-amber-700 border-amber-500/30",
        iconBg: "bg-amber-500/10 text-amber-600",
        accentBorder: "group-hover:border-amber-500/40",
      };
    case "maroon":
      return {
        badge: "bg-primary/10 text-primary border-primary/25",
        iconBg: "bg-primary/10 text-primary",
        accentBorder: "group-hover:border-primary/40",
      };
    case "teal":
      return {
        badge: "bg-primary/10 text-primary border-primary/20",
        iconBg: "bg-primary/10 text-primary",
        accentBorder: "group-hover:border-primary/20",
      };
    case "blue":
      return {
        badge: "bg-primary/10 text-primary border-primary/20",
        iconBg: "bg-primary/10 text-primary",
        accentBorder: "group-hover:border-primary/20",
      };
  }
}

export function CommunityServiceContent() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 01 — Section Header */}
      <SectionHeader
        eyebrow="Community Service & Giving"
        title="Serving others with compassion, dignity & purpose"
        description={communityServiceIntro}
      />

      {/* 02 — Top Stat / Foundation Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {communityServiceHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-lg sm:rounded-lg border border-border/80 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-primary/30"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/[0.08] text-primary shadow-2xs mb-4">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 03 — Core Community Service & Donation Cards */}
      <div>
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/70 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mb-1">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Student-Led Initiatives</span>
            </div>
            <h3 className="font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Donation Drives &amp; Outreach Projects
            </h3>
          </div>
          <span className="text-xs font-semibold text-muted-foreground">
            Ongoing tradition across all school levels
          </span>
        </div>

        {/* Professional 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {donationServiceInitiatives.map((item) => {
            const Icon = getInitiativeIcon(item.iconName);
            const style = getBadgeStyles(item.badgeColor);

            return (
              <article
                key={item.id}
                className={`group flex flex-col justify-between rounded-lg border border-border/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md ${style.accentBorder}`}
              >
                <div>
                  {/* Card Header: Icon + Category Badge + Metric Pill */}
                  <div className="flex items-start justify-between gap-3 pb-4 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${style.iconBg} shadow-2xs transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <div>
                        <span
                          className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${style.badge}`}
                        >
                          {item.tag}
                        </span>
                        <h4 className="font-bold text-lg sm:text-xl text-foreground leading-snug mt-1">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {item.keyMetric && (
                      <div className="hidden sm:flex flex-col items-end text-right shrink-0">
                        <span className="text-xs font-bold text-primary tracking-tight">
                          {item.keyMetric.value}
                        </span>
                        <span className="text-[10px] font-semibold text-muted-foreground">
                          {item.keyMetric.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Subtitle / Tagline */}
                  <p className="mt-4 text-xs sm:text-sm font-semibold text-primary italic">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Target Beneficiaries & Student Role Box */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-surface p-4 border border-border/60">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground block mb-1">
                        Target Beneficiaries
                      </span>
                      <p className="text-xs font-medium text-foreground/90 leading-snug">
                        {item.targetGroup}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground block mb-1">
                        Student Leadership Role
                      </span>
                      <p className="text-xs font-medium text-foreground/90 leading-snug">
                        {item.studentRole}
                      </p>
                    </div>
                  </div>

                  {/* Key Impact Points Checklist */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-bold text-foreground block">
                      Key Highlights &amp; Execution
                    </span>
                    {item.impactPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/85 leading-snug"
                      >
                        <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-hover mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Stamp */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-bold text-muted-foreground">
                  <span className="flex items-center gap-1 text-primary">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    <span>Playpen Student Community Service</span>
                  </span>
                  <span className="text-[11px] text-muted-foreground/70 font-semibold">
                    Campus Coordinated
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 04 — How Students Organize & Deliver Service (Workflow) */}
      <div className="rounded-lg border border-border/80 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold text-primary">
            Our Methodology
          </span>
          <h3 className="mt-1 font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
            How Students Lead Community Giving
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Community service at Playpen follows a structured, student-led pipeline ensuring dignity for recipients and deep experiential learning for students.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {serviceWorkflowSteps.map((wf) => (
            <div
              key={wf.step}
              className="relative rounded-lg border border-border/70 bg-surface p-5 transition hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-2xl sm:text-3xl text-primary/40 font-mono">
                  {wf.step}
                </span>
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-foreground leading-tight">
                {wf.title}
              </h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {wf.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 05 — A Playpen Tradition of Compassion (Callout Banner) */}
      <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-primary-dark p-6 sm:p-10 text-white shadow-md">
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3.5 py-1 text-xs font-bold text-accent-soft backdrop-blur-md mb-4 border border-white/10">
            <Heart className="h-3.5 w-3.5 text-accent" />
            <span>A 49-Year Tradition</span>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight">
            Learning Empathy, Civic Duty, and the Power of Collective Action.
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
            Through real-world service and generous giving, Playpen students develop the moral compass, humility, and proactive leadership required to create meaningful positive change in Bangladesh and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
