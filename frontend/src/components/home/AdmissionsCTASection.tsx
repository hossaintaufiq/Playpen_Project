import Link from "next/link";
import { ArrowRight, Sparkles, Phone, Mail, FileText, CheckCircle2, Clock } from "lucide-react";
import { schoolContact } from "@/lib/contact";

export function AdmissionsCTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-[#520215] via-[#7a0826] to-[#991636] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          {/* Ambient Lighting Circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md mb-6">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span>Admissions Session 2025–2026</span>
            </div>

            {/* BIG HEADLINE */}
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-balance">
              READY TO JOIN THE <br />
              PLAYPEN COMMUNITY?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/85 font-normal leading-relaxed text-balance">
              Give your child the foundation to shine. Applications are open across all levels from Playgroup through A-Level.
            </p>

            {/* Checkpoints */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-white/90">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Cambridge Curriculum</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Modern Secure Campus</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Dedicated Faculty</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions/apply"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-extrabold text-primary shadow-xl transition-all duration-300 hover:bg-surface hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your Application</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white"
              >
                <FileText className="h-4 w-4 text-accent" />
                <span>Admissions Guide</span>
              </Link>
            </div>

            {/* Contact Hotline Bar */}
            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-accent" />
                <span>Admissions Helpline: {schoolContact.phone}</span>
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-accent" />
                <span>{schoolContact.email}</span>
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent" />
                <span>Office: Sun – Thu (8:30 AM – 3:30 PM)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
