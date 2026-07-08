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
        eyebrow="Dress Code"
        title="School uniform policy for every level"
        description="Playpen maintains a clear dress code from early years through senior school — ensuring students are smart, comfortable, and ready for learning."
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {uniformHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 space-y-5 sm:mt-12">
        <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            Early Years
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {playgroupUniformNote}
          </p>
        </div>

        <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 sm:rounded-3xl sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            KG I Onwards
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {compulsoryUniformNote}
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            Class IV Onwards
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {classFourUniformNote}
          </p>
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <SectionHeader
          align="left"
          eyebrow="Authorized Tailoring Houses"
          title="Where to get Playpen uniforms made"
          description={tailoringIntro}
          className="max-w-3xl"
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {tailoringBranches.map((branch) => (
            <article
              key={branch.name}
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-[0_4px_24px_-12px_rgba(128,0,0,0.1)] sm:rounded-3xl"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground">{branch.name}</h3>
              <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {branch.address}
              </p>
              <div className="mt-4 space-y-2">
                {branch.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {phone}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            Footwear
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {footwearNote}
          </p>
        </article>

        <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:rounded-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-800/70">
            Winter Season
          </p>
          <p className="mt-3 text-sm leading-relaxed text-amber-950/85 sm:text-base">
            {winterUniformNote}
          </p>
        </article>
      </div>
    </section>
  );
}
