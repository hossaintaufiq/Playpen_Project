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
    <article className="brutal-border bg-white p-6 brutal-shadow transition-transform hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center bg-[#121212] text-white">
        <FileText className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-black tracking-tight text-[#121212]">{title}</h3>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row border-t-2 border-[#121212] pt-4">
        <a
          href={pdfPath}
          download={pdfFileName}
          className="brutal-btn inline-flex flex-1 items-center justify-center gap-2 bg-[#6b0c26] text-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#121212]"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
        <Link
          href={applyPath}
          className="brutal-btn inline-flex flex-1 items-center justify-center gap-2 bg-white text-[#121212] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#faf7f2]"
        >
          <span>Apply online</span>
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
        eyebrow="01 // Official Admission Forms"
        title="Download the form for your child's level"
        description={admissionFormIntro}
      />

      <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
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

      <p className="mx-auto mt-8 max-w-3xl text-center font-mono text-xs sm:text-sm leading-relaxed text-[#121212]/70">
        {admissionFormOfficeNote}
      </p>

      <div className="mt-14 brutal-border bg-[#faf7f2] p-6 sm:mt-16 sm:p-8 brutal-shadow border-l-8 border-l-[#d97706]">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#d97706] text-white">
            <Bell className="h-6 w-6" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
              Admission Notice
            </p>
            <p className="mt-3 font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
              {admissionNoticeIntro}
            </p>
            <ul className="mt-4 space-y-2 border-t border-[#121212]/15 pt-3">
              {admissionNoticePoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[#121212] font-medium">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#6b0c26]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 border-t-2 border-[#121212] pt-12">
        <SectionHeader
          align="left"
          eyebrow="02 // Admission Procedure"
          title="How the Playpen admission process works"
          description="From form submission to assessment, interview, and final selection — here is what families can expect."
          className="max-w-3xl"
        />

        <ol className="mt-8 space-y-4">
          {admissionProcedureSteps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 brutal-border bg-white p-5 brutal-shadow-sm sm:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#121212] text-white font-mono text-base font-black">
                0{index + 1}
              </span>
              <p className="pt-1.5 text-sm sm:text-base leading-relaxed text-[#121212]/85">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 brutal-border bg-[#faf7f2] p-5 sm:p-6 border-l-8 border-l-[#6b0c26]">
          <p className="font-mono text-xs sm:text-sm font-bold leading-relaxed text-[#121212]">
            {admissionClassXINote}
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3 border-t-2 border-[#121212] pt-12">
        <article className="brutal-border bg-white p-6 brutal-shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center bg-[#6b0c26] text-white">
            <Phone className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-bold text-[#121212]">
            Application Status
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">
            {applicationStatusNote}
          </p>
        </article>

        <article className="brutal-border bg-white p-6 brutal-shadow-sm lg:col-span-1">
          <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
            <ClipboardList className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-bold text-[#121212]">
            Required Documents
          </h3>
          <p className="mt-2 text-xs font-mono uppercase tracking-wider text-[#121212]/70">
            The following documents are required for admission:
          </p>
          <ul className="mt-4 space-y-2 border-t border-[#121212]/15 pt-3">
            {requiredDocuments.map((document) => (
              <li key={document} className="flex items-start gap-2 text-xs sm:text-sm text-[#121212]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#6b0c26]" />
                {document}
              </li>
            ))}
          </ul>
        </article>

        <article className="brutal-border bg-white p-6 brutal-shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center bg-[#d97706] text-white">
            <Wallet className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-bold text-[#121212]">
            Payment Contact
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">
            {paymentContactNote}
          </p>
        </article>
      </div>
    </section>
  );
}

