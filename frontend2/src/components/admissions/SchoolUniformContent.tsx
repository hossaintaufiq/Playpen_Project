import { MapPin, Phone, Shirt, Snowflake, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  classFourUniformNote,
  compulsoryUniformNote,
  footwearNote,
  playgroupUniformNote,
  tailoringBranches,
  tailoringIntro,
  uniformHighlights,
  winterUniformNote,
} from "@/lib/school-uniform";

const highlightIcons = [Users, Shirt, Shirt, Snowflake] as const;

export function SchoolUniformContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="01 // Dress Code Regulations"
        title="School uniform policy for every level"
        description="Playpen maintains a clear dress code from early years through senior school — ensuring students are smart, comfortable, and ready for learning."
      />

      <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {uniformHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="brutal-border bg-white p-5 sm:p-6 brutal-shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white font-mono font-bold">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b0c26]">
                Level 0{index + 1}
              </p>
              <h3 className="mt-1 font-serif text-lg font-bold text-[#121212]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#121212]/80">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 space-y-6 sm:mt-16">
        <div className="brutal-border bg-white p-6 sm:p-8 brutal-shadow border-l-8 border-l-[#6b0c26]">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
            Early Years &amp; Playgroup
          </p>
          <p className="mt-3 font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
            {playgroupUniformNote}
          </p>
        </div>

        <div className="brutal-border bg-[#faf7f2] p-6 sm:p-8 brutal-shadow border-l-8 border-l-[#d97706]">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#d97706]">
            KG I Onwards
          </p>
          <p className="mt-3 font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
            {compulsoryUniformNote}
          </p>
        </div>

        <div className="brutal-border bg-white p-6 sm:p-8 brutal-shadow border-l-8 border-l-[#121212]">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#121212]">
            Class IV Onwards
          </p>
          <p className="mt-3 font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
            {classFourUniformNote}
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 border-t-2 border-[#121212] pt-12">
        <SectionHeader
          align="left"
          eyebrow="02 // Authorized Tailoring Houses"
          title="Where to get Playpen uniforms made"
          description={tailoringIntro}
          className="max-w-3xl"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {tailoringBranches.map((branch, index) => (
            <article
              key={branch.name}
              className="brutal-border bg-white p-6 sm:p-8 brutal-shadow"
            >
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#6b0c26]">
                Branch 0{index + 1}
              </span>
              <h3 className="mt-1 font-serif text-2xl font-bold text-[#121212]">{branch.name}</h3>
              <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-[#121212]/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#6b0c26]" />
                <span>{branch.address}</span>
              </p>
              <div className="mt-4 space-y-2 border-t border-[#121212]/15 pt-3">
                {branch.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#6b0c26] hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2 border-t-2 border-[#121212] pt-12">
        <article className="brutal-border bg-white p-6 sm:p-8 brutal-shadow-sm">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
            Footwear Standards
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#121212]/85">
            {footwearNote}
          </p>
        </article>

        <article className="brutal-border bg-[#faf7f2] p-6 sm:p-8 brutal-shadow-sm border-l-8 border-l-[#d97706]">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-[#d97706]">
            Winter Season Attire
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#121212]/85">
            {winterUniformNote}
          </p>
        </article>
      </div>
    </section>
  );
}

