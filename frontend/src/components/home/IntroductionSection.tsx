import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Target, Users, BookOpen } from "lucide-react";

export function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      {/* Background Decorative Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e9e2d9_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Big Headline & Storytelling */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Welcome to Playpen
            </div>

            <h2 className="mt-4 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
              MORE THAN A SCHOOL.
              <span className="block text-primary mt-1">A COMMUNITY TO GROW.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Founded with a commitment to holistic education, Playpen provides a warm, stimulating environment where academic curiosity is matched by compassion, creativity, and moral character.
            </p>

            {/* Value Pillars Mini-Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border/60 transition hover:border-primary/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Inspiring Potential</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Every child receives tailored encouragement to excel.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border/60 transition hover:border-primary/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-hover">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Caring Atmosphere</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">A secure campus where students feel seen and valued.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border/60 transition hover:border-primary/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Cambridge Excellence</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Global benchmark curriculum recognized worldwide.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border/60 transition hover:border-primary/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-hover">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Global Outlook</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Preparing responsible 21st-century global citizens.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-white transition hover:bg-primary"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto aspect-[4/3] sm:aspect-[14/11] w-full max-w-lg overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/10">
              <Image
                src="/school-images/about/our-campus/DSC01243.webp"
                alt="Playpen School Campus Building and Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-lg border border-white/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-extrabold text-sm">
                    PS
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                      &ldquo;Shaping learners who think clearly, act responsibly, and lead with integrity.&rdquo;
                    </p>
                    <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-1">
                      Playpen School Creed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Offset Accent Box */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
