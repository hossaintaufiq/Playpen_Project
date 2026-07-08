import Link from "next/link";
import {
  ArrowRight,
  Bell,
  ClipboardList,
  Download,
  FileText,
  Phone,
  Wallet,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  admissionClassXINote,
  admissionFormIntro,
  admissionFormOfficeNote,
  admissionForms,
  admissionNoticeIntro,
  admissionNoticePoints,
  admissionProcedureSteps,
  applicationStatusNote,
  paymentContactNote,
  requiredDocuments,
} from "@/lib/admission-procedure";

function FormDownloadCard({
  title,
  pdfPath,
  pdfFileName,
  applyPath,
}: {
  title: string;
  pdfPath: string;
  pdfFileName: string;
  applyPath: string;
}) {
  return (
    <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-[0_4px_24px_-12px_rgba(128,0,0,0.12)] sm:rounded-3xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
        <FileText className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={pdfPath}
          download={pdfFileName}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          <Download className="h-4 w-4" />
          Download
        </a>
        <Link
          href={applyPath}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/25 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
        >
          Apply online
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function AdmissionProcedureContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="Admission Form"
        title="Download the form for your child's level"
        description={admissionFormIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
        {admissionForms.map((form) => (
          <FormDownloadCard
            key={form.title}
            title={form.title}
            pdfPath={form.config.pdfPath}
            pdfFileName={form.config.pdfFileName}
            applyPath={form.applyPath}
          />
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        {admissionFormOfficeNote}
      </p>

      <div className="mt-14 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.05] p-6 sm:mt-16 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
            <Bell className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
              Admission Notice
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {admissionNoticeIntro}
            </p>
            <ul className="mt-4 space-y-2">
              {admissionNoticePoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <SectionHeader
          align="left"
          eyebrow="Admission Procedure"
          title="How the Playpen admission process works"
          description="From form submission to assessment, interview, and final selection — here is what families can expect."
          className="max-w-3xl"
        />

        <ol className="mt-8 space-y-4">
          {admissionProcedureSteps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] font-serif text-lg font-semibold text-primary">
                {index + 1}
              </span>
              <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:rounded-3xl sm:p-6">
          <p className="text-sm leading-relaxed text-amber-950/90 sm:text-base">
            {admissionClassXINote}
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
            <Phone className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
            Application Status
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {applicationStatusNote}
          </p>
        </article>

        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl lg:col-span-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
            <ClipboardList className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
            Required Documents
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The following documents are required for getting admission at Playpen:
          </p>
          <ul className="mt-4 space-y-2">
            {requiredDocuments.map((document) => (
              <li key={document} className="flex items-start gap-2 text-sm text-foreground/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {document}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
            <Wallet className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
            Payment Contact
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {paymentContactNote}
          </p>
        </article>
      </div>
    </section>
  );
}
