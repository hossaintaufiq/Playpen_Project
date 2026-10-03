import { Globe2, Heart, Mail, Users } from "lucide-react";
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
    number: "01",
    icon: Users,
    title: "Reconnect",
    text: "Find old batch mates and relive the friendships and memories that began at Playpen.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Worldwide Network",
    text: "Stay linked with alumni excelling across Bangladesh and around the globe.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Shared Heritage",
    text: "Celebrate beautiful milestones from Playpen and support the next generation of students.",
  },
];

export function AlumniAssociationContent() {
  return (
    <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      {/* Tagore Quote Banner */}
      <div className="border-3 border-[#121212] bg-[#f4efe6] px-6 py-10 text-center sm:px-10 sm:py-14 shadow-[6px_6px_0px_#121212]">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#6b0c26] bg-[#ffffff] px-3 py-1 border border-[#121212] inline-block mb-4">
          {tagoreQuote.attributionEn} · {tagoreQuote.attribution}
        </span>
        <blockquote className="font-bengali mx-auto mt-4 max-w-3xl text-xl leading-relaxed text-[#121212] sm:text-2xl md:text-3xl font-semibold">
          {tagoreQuote.lines.map((line) => (
            <p key={line} className="mt-2 break-words first:mt-0">
              &ldquo;{line}&rdquo;
            </p>
          ))}
        </blockquote>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4 text-center">
        {alumniIntro.map((paragraph) => (
          <p key={paragraph} className="font-sans text-base leading-relaxed text-[#403d39]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="border-2 border-[#121212] bg-[#ffffff] p-7 text-center shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] border-b-2 border-[#121212] pb-2 mb-4">
                <span>PILLAR // {item.number}</span>
                <item.icon className="h-4 w-4 text-[#d97706]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#121212] uppercase">{item.title}</h3>
              <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-[#524d46]">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 w-full min-w-0">
        <SectionHeader
          eyebrow="Alumni Registration"
          title="Join the Official Playpen Alumni Network"
          description={alumniCallToAction}
        />

        <div className="mx-auto mt-6 flex w-full max-w-2xl justify-center">
          <a
            href={`mailto:${alumniEmail}`}
            className="inline-flex max-w-full items-center gap-2 bg-[#ffffff] border-2 border-[#121212] px-5 py-2.5 font-mono text-xs font-bold text-[#6b0c26] uppercase tracking-wider shadow-[3px_3px_0px_#121212] hover:bg-[#faf7f2] transition-all"
          >
            <Mail className="h-4 w-4 shrink-0 text-[#d97706]" />
            <span>DIRECT DESK: {alumniEmail}</span>
          </a>
        </div>

        <div className="mx-auto mt-10 w-full min-w-0 max-w-3xl">
          <AlumniRegistrationForm />
        </div>
      </div>
    </section>
  );
}
