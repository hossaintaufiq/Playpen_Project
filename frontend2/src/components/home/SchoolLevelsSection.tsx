import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Compass, Smile, ShieldCheck } from "lucide-react";

const schoolLevels = [
  {
    number: "01",
    name: "Early Childhood",
    tagline: "FOUNDATION OF JOY & SENSORY DISCOVERY",
    grades: "Playgroup – KG II",
    ages: "Ages 2.5 – 5 Years",
    desc: "Play-based sensory learning, early phonics, motor skill development, and social confidence in a safe, nurturing environment.",
    subjects: ["Sensory Mathematics", "Phonics & Storytelling", "Creative Expression", "Social Cohesion"],
    href: "/academics/school-structure",
    accent: "#6b0c26",
  },
  {
    number: "02",
    name: "Junior School",
    tagline: "CORE LITERACY & INQUIRY BUILDING",
    grades: "Class I – III",
    ages: "Ages 6 – 8 Years",
    desc: "Nurturing fundamental literacy, numeracy, environmental sciences, and bilingual fluency through structured classroom exploration.",
    subjects: ["English Language Arts", "Cambridge Primary Math", "Elementary Science", "Bangla & Arts"],
    href: "/academics/school-structure",
    accent: "#d97706",
  },
  {
    number: "03",
    name: "Middle School",
    tagline: "CRITICAL ANALYSIS & SCIENTIFIC EXPLORATION",
    grades: "Class IV – VII",
    ages: "Ages 9 – 12 Years",
    desc: "Deepening inquiry across STEM, computing, literature, history, and independent problem-solving methodologies.",
    subjects: ["Advanced Mathematics", "General Sciences", "Computer Science", "Global Perspectives"],
    href: "/academics/school-structure",
    accent: "#1e3a8a",
  },
  {
    number: "04",
    name: "Senior School & A-Levels",
    tagline: "CAMBRIDGE IGCSE & INTERNATIONAL A-LEVELS",
    grades: "Class VIII – XII",
    ages: "Ages 13 – 18 Years",
    desc: "Rigorous Cambridge examination preparation, intensive laboratory research, leadership development, and university placement counselling.",
    subjects: ["Pure Sciences & Math", "Business & Economics", "Humanities & Law", "University Mentorship"],
    href: "/academics/school-structure",
    accent: "#6b0c26",
  },
];

export function SchoolLevelsSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28 border-b-3 border-[#121212]">
      {/* Swiss Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#121212] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#121212] text-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#6b0c26] mb-3">
              <GraduationCap className="h-3.5 w-3.5 text-[#d97706]" />
              <span>04 // ACADEMIC STRUCTURE</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#121212] leading-[1.05] tracking-tight uppercase">
              LEARNING DESIGNED <br />
              <span className="text-[#6b0c26] italic font-serif">FOR EVERY STAGE.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#524d46] uppercase max-w-xs text-right hidden md:block">
            // PLAYGROUP TO A-LEVELS <br />
            CONTINUOUS CAMBRIDGE PATHWAY
          </div>
        </div>

        {/* 4-Block Typographic Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {schoolLevels.map((level) => (
            <article
              key={level.name}
              className="border-2 border-[#121212] bg-[#ffffff] p-6 shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <div>
                {/* Header with Number & Stamp */}
                <div className="flex items-center justify-between border-b-2 border-[#121212] pb-3 mb-4">
                  <span className="font-mono text-xs font-bold bg-[#6b0c26] text-white px-2 py-0.5 border border-[#121212]">
                    LEVEL // {level.number}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#d97706] bg-[#f4efe6] px-2 py-0.5 border border-[#121212]">
                    {level.grades}
                  </span>
                </div>

                {/* Level Title */}
                <h3 className="font-serif font-black text-2xl text-[#121212] uppercase leading-tight">
                  {level.name}
                </h3>

                <p className="font-mono text-[11px] font-bold text-[#524d46] uppercase tracking-wider mt-1.5">
                  {level.ages}
                </p>

                <p className="font-sans text-xs text-[#403d39] mt-3 leading-relaxed">
                  {level.desc}
                </p>

                {/* Focus Areas List */}
                <div className="mt-5 border-t border-[#121212]/15 pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#6b0c26] block mb-2">
                    CORE FOCUS MODULES:
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-[#121212]">
                    {level.subjects.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-[#6b0c26]" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t-2 border-[#121212]">
                <Link
                  href={level.href}
                  className="inline-flex w-full items-center justify-between font-mono text-xs font-bold uppercase text-[#121212] hover:text-[#6b0c26] transition-colors"
                >
                  <span>Curriculum Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Cambridge Benchmark Callout Strip */}
        <div className="border-3 border-[#121212] bg-[#ffffff] p-6 sm:p-8 shadow-[6px_6px_0px_#121212] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 shrink-0 border-2 border-[#121212] bg-[#6b0c26] text-white flex items-center justify-center shadow-[3px_3px_0px_#121212]">
              <ShieldCheck className="h-6 w-6 text-[#d97706]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-[#121212] uppercase">
                Cambridge Assessment International Education Centre BD042
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#524d46] mt-1">
                Delivering globally recognized IGCSE and International A-Level certifications with distinction since 1977.
              </p>
            </div>
          </div>

          <Link
            href="/academics"
            className="shrink-0 bg-[#d97706] hover:bg-[#b45309] text-[#121212] hover:text-white px-7 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] transition-all"
          >
            <span>Explore All Academics →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
