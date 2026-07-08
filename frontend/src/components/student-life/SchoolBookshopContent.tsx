import { BookOpen, Clock, Package, ShoppingBag, Store } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  bookshopHighlights,
  bookshopHours,
  bookshopIntro,
  bookshopOfferings,
  bookshopParentNote,
} from "@/lib/school-bookshop";

const highlightIcons = [Store, BookOpen, Package, Clock] as const;

export function SchoolBookshopContent() {
  return (
    <>
      <SectionHeader
        eyebrow="School Bookshop"
        title="Everything your child needs for the year ahead"
        description={bookshopIntro}
      />

      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3 sm:mt-12">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[#5a0000] via-primary to-[#5a0000] p-6 text-white shadow-lg sm:p-8 lg:col-span-1">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.2),transparent_55%)]" />
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
              <Clock className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              {bookshopHours.label}
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold">{bookshopHours.time}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/85">{bookshopHours.note}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
              <ShoppingBag className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                Start of Every Session
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {bookshopParentNote}
              </p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {bookshopOfferings.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-foreground/90"
              >
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {bookshopHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm transition hover:border-primary/15 hover:shadow-md sm:p-6"
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

      <div className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.05] p-6 text-center sm:mt-12 sm:p-10">
        <Store className="mx-auto h-10 w-10 text-primary" strokeWidth={1.5} />
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl font-semibold text-foreground sm:text-2xl">
          One stop for books, copies, and supplies — right here on the Playpen campus.
        </p>
      </div>
    </>
  );
}
