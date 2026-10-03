import {
  Dumbbell,
  Medal,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  annualSportsCompetitionNote,
  annualSportsFacilities,
  annualSportsHighlights,
  annualSportsIntro,
  annualSportsTeamsNote,
} from "@/lib/annual-sports";

const highlightIcons = [Medal, Dumbbell, Trophy, Users] as const;

export function AnnualSportsContent() {
  return (
    <>
      <SectionHeader
        eyebrow="01 // Annual Athletics & Competition"
        title="Competition, teamwork, and school spirit all year round"
        description={annualSportsIntro}
      />

      <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {annualSportsHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="brutal-border bg-white p-5 sm:p-6 brutal-shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b0c26]">
                Pillar 0{index + 1}
              </p>
              <h3 className="mt-1 font-serif text-lg font-bold text-[#121212]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#121212]/80">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 brutal-border bg-[#faf7f2] p-6 sm:mt-16 sm:p-8 brutal-shadow border-l-8 border-l-[#d97706]">
        <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
          02 // Sports &amp; Games Facilities
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {annualSportsFacilities.map((sport) => (
            <span
              key={sport}
              className="brutal-btn inline-flex items-center gap-2 bg-white text-[#121212] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider"
            >
              <Target className="h-3.5 w-3.5 text-[#6b0c26]" />
              <span>{sport}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 border-t-2 border-[#121212] pt-12">
        <article className="brutal-border bg-white p-6 sm:p-8 brutal-shadow">
          <div className="flex h-10 w-10 items-center justify-center bg-[#6b0c26] text-white">
            <Trophy className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-[#121212]">Inter-School Tournaments</h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#121212]/80">
            {annualSportsCompetitionNote}
          </p>
        </article>

        <article className="brutal-border bg-white p-6 sm:p-8 brutal-shadow">
          <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
            <Users className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-[#121212]">Official School Teams</h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#121212]/80">
            {annualSportsTeamsNote}
          </p>
        </article>
      </div>
    </>
  );
}

