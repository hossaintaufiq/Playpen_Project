import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutPageShell } from "@/components/about/AboutPageShell";
import { aboutNavItems } from "@/lib/about-nav";

const subPages = aboutNavItems.filter((item) => item.href !== "/about");

export default function AboutPage() {
  return (
    <AboutPageShell
      section="/about"
      title="About Playpen"
      subtitle="48 years of excellence in education — shaping future leaders since 1977."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Playpen is one of Bangladesh&apos;s leading English medium schools, offering the
            Cambridge curriculum from playgroup through A-Level. Our mission is to develop
            well-rounded individuals who excel academically and grow into responsible global
            citizens.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {subPages.map((page, index) => (
            <Link
              key={page.href}
              href={page.href}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-6 shadow-[0_4px_24px_-10px_rgba(128,0,0,0.1)] transition duration-300 hover:border-primary/20 hover:shadow-[0_12px_32px_-12px_rgba(128,0,0,0.15)] sm:rounded-3xl sm:p-7"
            >
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                <Image
                  src={`/images/schools/${["elementary", "junior", "middle", "senior", "elementary"][index]}.jpg`}
                  alt={page.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/50 to-transparent" />
              </div>
              <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                {page.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {page.description}
              </p>
              <span className="playpen-text mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5">
                Read more
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </AboutPageShell>
  );
}
