import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionDivider } from "@/components/ui/SectionDivider";

const marqueeItems = [
  {
    title: "ECA",
    subtitle: "Extra Curricular Activities",
    image: "/school-images/site-wide/marquee/eca.webp",
    href: "/student-life",
  },
  {
    title: "Student Services",
    subtitle: "Support at every step",
    image: "/school-images/site-wide/marquee/student-services.webp",
    href: "/admissions",
  },
  {
    title: "Faculty Members",
    subtitle: "Dedicated educators",
    image: "/school-images/site-wide/marquee/faculty.webp",
    href: "/about",
  },
  {
    title: "Alumni",
    subtitle: "A legacy of success",
    image: "/school-images/site-wide/marquee/alumni.webp",
    href: "/about",
  },
  {
    title: "Achievements",
    subtitle: "Excellence in every field",
    image: "/school-images/site-wide/marquee/achievements.webp",
    href: "/academics",
  },
];

function MarqueeCard({ item }: { item: (typeof marqueeItems)[number] }) {
  return (
    <Link
      href={item.href}
      className="group relative mx-3 block w-[220px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] ring-1 ring-border/60 transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(128,0,0,0.2)] hover:ring-primary/20 sm:mx-4 sm:w-[260px] sm:rounded-3xl"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="260px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/90 via-[#800000]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">
            {item.subtitle}
          </p>
          <h3 className="mt-1 font-serif text-lg font-semibold leading-tight text-white sm:text-xl">
            {item.title}
          </h3>
        </div>
      </div>
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-9 sm:w-9">
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}

export function DiscoverMarqueeSection() {
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <section className="overflow-hidden bg-background pb-4 pt-16 sm:pb-6 sm:pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Discover"
          title="Life beyond the classroom"
          description="From co-curricular programmes to alumni success — explore the people, services, and moments that shape the Playpen experience."
        />
      </div>

      <div className="relative mt-12 sm:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="marquee-rtl flex w-max">
          {track.map((item, index) => (
            <MarqueeCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12">
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/35 hover:bg-primary hover:text-white sm:px-8 sm:py-3.5"
        >
          Discover More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <SectionDivider variant="soft" />
    </section>
  );
}
