"use client";

import { Globe2, Heart, Mail, Users, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import { AlumniRegistrationForm } from "@/components/about/AlumniRegistrationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  alumniCallToAction,
  alumniEmail,
  alumniIntro,
  tagoreQuote,
} from "@/lib/alumni-association";

const highlights = [
  {
    icon: Users,
    title: "Reconnect",
    text: "Find old batch mates and relive the friendships and memories that began at Playpen.",
  },
  {
    icon: Globe2,
    title: "Worldwide Network",
    text: "Stay linked with alumni excelling across Bangladesh, Ivy League, Russell Group, and premier institutions globally.",
  },
  {
    icon: Heart,
    title: "Shared Heritage",
    text: "Celebrate milestones from 49 years of Playpen and inspire the next generation of students.",
  },
];

export function AlumniAssociationContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 w-full min-w-0">
      <div className="space-y-14 sm:space-y-18">
        {/* 01 — Tagore Heritage Plaque Quote */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] via-surface to-accent/[0.08] px-6 py-10 sm:px-12 sm:py-16 text-center shadow-md">
          <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-primary/5 blur-2xl" />
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-md px-4 py-1 text-xs font-black uppercase tracking-[0.25em] text-primary border border-primary/15 shadow-xs mb-6">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>{tagoreQuote.attributionEn} &bull; {tagoreQuote.attribution}</span>
            </span>

            <blockquote className="font-bengali mt-2 text-xl sm:text-2xl md:text-3xl lg:text-[2rem] leading-relaxed md:leading-relaxed text-foreground font-bold tracking-tight">
              {tagoreQuote.lines.map((line) => (
                <p key={line} className="mt-2 break-words first:mt-0 drop-shadow-2xs">
                  &ldquo;{line}&rdquo;
                </p>
              ))}
            </blockquote>
          </div>
        </div>

        {/* 02 — Introduction Narratives */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-accent mb-1">
            <GraduationCap className="h-4 w-4" />
            <span>Playpen Alumni Community</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
            A Lifelong Bond Beyond the Classroom
          </h2>
          {alumniIntro.map((paragraph, i) => (
            <p key={i} className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 03 — Three Core Network Pillars */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-border/80 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-md transition-transform duration-300 group-hover:scale-110 mb-5">
                  <item.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-center gap-1 text-xs font-bold text-accent">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Global Alumni Fellowship</span>
              </div>
            </article>
          ))}
        </div>

        {/* 04 — Alumni Registration Section */}
        <div className="w-full min-w-0 pt-6">
          <SectionHeader
            eyebrow="Alumni Registration"
            title="Join the Official Playpen Alumni Network"
            description={alumniCallToAction}
          />

          <div className="mx-auto mt-6 flex w-full max-w-2xl justify-center">
            <a
              href={`mailto:${alumniEmail}`}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-6 py-3 text-xs sm:text-sm font-bold text-primary transition hover:bg-primary hover:text-white shadow-sm"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span>{alumniEmail}</span>
            </a>
          </div>

          <div className="mx-auto mt-10 w-full min-w-0 max-w-3xl">
            <AlumniRegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
