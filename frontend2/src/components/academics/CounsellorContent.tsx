import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Compass,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { schoolContact } from "@/lib/contact";
import {
  careerCounsellorDescription,
  careerCounsellorSupportAreas,
  careerCounsellorTitle,
  studentCounsellorDescription,
  studentCounsellorSupportAreas,
  studentCounsellorTitle,
} from "@/lib/counsellor";

function CounsellorCard({
  eyebrow,
  title,
  description,
  areas,
  icon: Icon,
  accent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  areas: readonly string[];
  icon: LucideIcon;
  accent: "primary" | "maroon";
}) {
  const isMaroon = accent === "maroon";

  return (
    <article
      className={`border-3 border-[#121212] p-6 sm:p-8 shadow-[6px_6px_0px_#121212] flex flex-col justify-between ${
        isMaroon
          ? "bg-[#6b0c26] text-white"
          : "bg-[#ffffff] text-[#121212]"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-4 border-b-2 border-current pb-4 mb-4">
          <div>
            <span
              className={`font-mono text-xs font-bold uppercase tracking-wider ${
                isMaroon ? "text-[#d97706]" : "text-[#6b0c26]"
              }`}
            >
              // {eyebrow}
            </span>
            <h3 className="mt-1 font-serif font-bold text-2xl sm:text-3xl uppercase leading-tight">{title}</h3>
          </div>
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center border-2 border-current ${
              isMaroon ? "bg-white/10 text-[#d97706]" : "bg-[#f4efe6] text-[#6b0c26]"
            }`}
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
        </div>

        <p
          className={`font-sans text-sm leading-relaxed sm:text-base ${
            isMaroon ? "text-white/90" : "text-[#403d39]"
          }`}
        >
          {description}
        </p>

        <div className="mt-6 border-t border-current/20 pt-4">
          <span
            className={`font-mono text-[11px] font-bold uppercase tracking-wider block mb-2 ${
              isMaroon ? "text-[#d97706]" : "text-[#6b0c26]"
            }`}
          >
            SUPPORT DELIVERABLES:
          </span>
          <ul className="space-y-2">
            {areas.map((area) => (
              <li
                key={area}
                className={`flex items-start gap-2.5 font-sans text-xs sm:text-sm leading-relaxed ${
                  isMaroon ? "text-white/90" : "text-[#121212]"
                }`}
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${
                    isMaroon ? "bg-[#d97706]" : "bg-[#6b0c26]"
                  }`}
                />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function CounsellorContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Guidance &amp; Wellbeing"
        title="Two Dedicated Counselling Wings for Every Stage"
        description="Playpen ensures students always have someone to turn to — whether they need day-to-day personal support or strategic guidance on university placements."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <CounsellorCard
          eyebrow="ON-CAMPUS WELLBEING"
          title={studentCounsellorTitle}
          description={studentCounsellorDescription}
          areas={studentCounsellorSupportAreas}
          icon={HeartHandshake}
          accent="primary"
        />
        <CounsellorCard
          eyebrow="GLOBAL UNIVERSITY PLACEMENTS"
          title={careerCounsellorTitle}
          description={careerCounsellorDescription}
          areas={careerCounsellorSupportAreas}
          icon={GraduationCap}
          accent="maroon"
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          {
            number: "01",
            icon: MessageCircle,
            title: "Always Available",
            text: "Faculty counsellors remain on standby whenever students need guidance, advice, or academic clarity.",
          },
          {
            number: "02",
            icon: Compass,
            title: "Holistic Guidance",
            text: "Support spans academic, non-academic, developmental, and behavioral aspects referred by teachers.",
          },
          {
            number: "03",
            icon: Briefcase,
            title: "Career & University",
            text: "Senior leadership guides application essays, admissions procedures, and international scholarship portfolios.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="border-2 border-[#121212] bg-[#ffffff] p-6 shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] border-b-2 border-[#121212] pb-2 mb-4">
                <span>0{item.number} // PILLAR</span>
                <item.icon className="h-4 w-4 text-[#d97706]" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#121212] uppercase leading-tight">{item.title}</h3>
              <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-[#524d46]">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 border-3 border-[#121212] bg-[#f4efe6] p-8 shadow-[6px_6px_0px_#121212] md:flex md:items-center md:justify-between md:gap-8">
        <div className="md:max-w-2xl">
          <span className="font-mono text-xs font-bold text-[#6b0c26] uppercase">// CONFIDENTIAL DESK</span>
          <h3 className="font-serif font-bold text-2xl text-[#121212] uppercase mt-1">
            Speak with a Student Counsellor
          </h3>
          <p className="mt-2 font-sans text-sm text-[#524d46] leading-relaxed">
            For counselling inquiries or university placement appointments, contact the administrative office.
          </p>
        </div>
        <Link
          href={schoolContact.emailHref}
          className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 bg-[#6b0c26] hover:bg-[#54081e] text-white px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#121212] transition-all md:mt-0"
        >
          <span>Contact School Office</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
