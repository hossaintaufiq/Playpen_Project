import Link from "next/link";
import { ArrowRight, Sparkles, Phone, Mail, FileText, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { schoolContact } from "@/lib/contact";

export function AdmissionsCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28">
      {/* Swiss Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-3 border-[#121212] bg-[#6b0c26] text-white p-8 sm:p-14 lg:p-20 shadow-[10px_10px_0px_#121212] relative overflow-hidden">
          {/* Top Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/20 pb-6 mb-8">
            <div className="inline-flex items-center gap-2 bg-[#d97706] text-[#121212] px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest border border-black shadow-[2px_2px_0px_#000000]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>ADMISSIONS OPEN // SESSION 2026–2027</span>
            </div>
            <div className="font-mono text-xs text-white/80 uppercase tracking-widest">
              PLAYGROUP THROUGH CAMBRIDGE A-LEVELS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Monumental Typography (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.96] text-white uppercase">
                READY TO BEGIN? <br />
                <span className="text-[#d97706] italic font-serif">ADMISSIONS</span> ARE OPEN.
              </h2>

              <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Give your child the foundation for a lifetime of curiosity, moral leadership, and Cambridge international distinction. Enrolling candidates from Early Childhood to Senior A-Levels.
              </p>

              {/* Checklist Badges */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs text-white/95 pt-2">
                <span className="flex items-center gap-2 bg-black/40 px-3 py-1.5 border border-white/20">
                  <CheckCircle2 className="h-4 w-4 text-[#d97706]" />
                  <span>Cambridge CAIE Standard</span>
                </span>
                <span className="flex items-center gap-2 bg-black/40 px-3 py-1.5 border border-white/20">
                  <CheckCircle2 className="h-4 w-4 text-[#d97706]" />
                  <span>Purpose-Built Campus</span>
                </span>
                <span className="flex items-center gap-2 bg-black/40 px-3 py-1.5 border border-white/20">
                  <CheckCircle2 className="h-4 w-4 text-[#d97706]" />
                  <span>Experienced Faculty</span>
                </span>
              </div>
            </div>

            {/* Right Col: Brutalist Action Triggers (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/admissions/apply"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#d97706] hover:bg-[#b45309] text-[#121212] hover:text-white px-8 py-5 font-mono text-sm font-bold uppercase tracking-wider border-2 border-white shadow-[6px_6px_0px_#ffffff] hover:shadow-[8px_8px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-center"
              >
                <span>Start Application</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/admissions/admission-procedure"
                className="inline-flex items-center justify-center gap-2 bg-[#121212] hover:bg-black text-white px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider border-2 border-white/60 shadow-[4px_4px_0px_#d97706] hover:shadow-[6px_6px_0px_#d97706] transition-all text-center"
              >
                <FileText className="h-4 w-4 text-[#d97706]" />
                <span>Criteria &amp; Fees Guide</span>
              </Link>
            </div>
          </div>

          {/* Contact Helpline Strip */}
          <div className="mt-12 pt-6 border-t-2 border-white/20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/80">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={schoolContact.phoneHref}
                className="inline-flex items-center gap-2 text-white hover:text-[#d97706] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#d97706]" />
                <span>HELPLINE: {schoolContact.phone}</span>
              </a>

              <span className="text-white/30 hidden sm:inline">•</span>

              <a
                href={schoolContact.emailHref}
                className="inline-flex items-center gap-2 text-white hover:text-[#d97706] transition-colors lowercase"
              >
                <Mail className="h-3.5 w-3.5 text-[#d97706]" />
                <span>{schoolContact.email}</span>
              </a>
            </div>

            <span className="text-white/60 uppercase">
              OFFICE HOURS: SUN – THU (8:30 AM – 3:30 PM)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
