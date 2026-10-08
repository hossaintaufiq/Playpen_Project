import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, HeartHandshake, GraduationCap, Globe2 } from "lucide-react";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";

export function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background Decorative Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e9e2d9_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Big Headline & Storytelling */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Welcome to Playpen
            </div>

            <h2 className="mt-3.5 sm:mt-4 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.14] tracking-tight text-foreground">
              MORE THAN A SCHOOL.
              <span className="block text-primary mt-1">
                A{" "}
                <span className="relative inline-block">
                  COMMUNITY
                  <HandDrawnUnderline className="text-primary" />
                </span>{" "}
                TO GROW.
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              Founded with a commitment to holistic education, Playpen provides a warm, stimulating environment where academic curiosity is matched by compassion, creativity, and moral character.
            </p>

            {/* Value Pillars Mini-Grid — Premium Minimalist Cards */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full">
              {/* Card 1: Inspiring Potential */}
              <div className="group relative overflow-hidden flex items-start gap-3 sm:gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 border border-border/80 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_12px_24px_-8px_rgba(122,8,38,0.1)] hover:-translate-y-0.5">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 border border-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary shadow-xs">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground tracking-tight transition-colors duration-200 group-hover:text-primary">
                    Inspiring Potential
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mt-0.5 sm:mt-1">
                    Every child receives tailored encouragement to excel.
                  </p>
                </div>
              </div>

              {/* Card 2: Caring Atmosphere */}
              <div className="group relative overflow-hidden flex items-start gap-3 sm:gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 border border-border/80 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-accent/30 hover:shadow-[0_12px_24px_-8px_rgba(249,115,22,0.12)] hover:-translate-y-0.5">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent shadow-xs">
                  <HeartHandshake className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground tracking-tight transition-colors duration-200 group-hover:text-accent">
                    Caring Atmosphere
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mt-0.5 sm:mt-1">
                    A secure campus where students feel seen and valued.
                  </p>
                </div>
              </div>

              {/* Card 3: Cambridge Excellence */}
              <div className="group relative overflow-hidden flex items-start gap-3 sm:gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 border border-border/80 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_12px_24px_-8px_rgba(122,8,38,0.1)] hover:-translate-y-0.5">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 border border-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary shadow-xs">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground tracking-tight transition-colors duration-200 group-hover:text-primary">
                    Cambridge Excellence
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mt-0.5 sm:mt-1">
                    Global benchmark curriculum recognized worldwide.
                  </p>
                </div>
              </div>

              {/* Card 4: Global Outlook */}
              <div className="group relative overflow-hidden flex items-start gap-3 sm:gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 border border-border/80 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-accent/30 hover:shadow-[0_12px_24px_-8px_rgba(249,115,22,0.12)] hover:-translate-y-0.5">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent shadow-xs">
                  <Globe2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground tracking-tight transition-colors duration-200 group-hover:text-accent">
                    Global Outlook
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mt-0.5 sm:mt-1">
                    Preparing responsible 21st-century global citizens.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Editorial CTA Button */}
            <div className="mt-6 sm:mt-7 flex w-full sm:w-auto items-center gap-4">
              <Link
                href="/about"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#8c1032] to-primary-dark px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(122,8,38,0.35)] transition-all duration-300 hover:shadow-[0_12px_32px_-2px_rgba(122,8,38,0.5)] hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Shimmer light sweep */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                
                <span className="relative tracking-wide">Read Our Full Story</span>
                <span className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:translate-x-0.5">
                  <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Responsive Visual Card */}
          <div className="relative w-full lg:col-span-6 xl:col-span-6 mt-6 lg:mt-0 flex flex-col justify-end">
            <div className="relative mx-auto aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[14/11] w-full max-w-lg md:max-w-xl lg:max-w-none overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2rem] shadow-xl sm:shadow-2xl ring-1 ring-black/10">
              <Image
                src="/school-images/gallery/campus/Gemini_Generated_Image_1aj5a31aj5a31aj5.jpg"
                alt="Playpen School Campus Building and Community"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 600px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent sm:from-black/65 sm:via-transparent" />

              {/* Bottom-Docked Quote Badge */}
              <div className="absolute bottom-0 inset-x-0 rounded-b-2xl sm:rounded-b-3xl lg:rounded-b-[2rem] bg-white/95 backdrop-blur-md p-3.5 sm:p-4.5 lg:p-5 shadow-lg border-t border-white/60">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-xs border border-border/80 overflow-hidden">
                    <Image
                      src="/frontend-images/logo/Playpen logo-01.webp"
                      alt="Playpen School Logo"
                      width={44}
                      height={44}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs md:text-sm font-bold text-foreground leading-snug">
                      &ldquo;Shaping learners who think clearly, act responsibly, and lead with integrity.&rdquo;
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-primary uppercase tracking-wider mt-0.5 sm:mt-1">
                      Playpen School Creed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Responsive Offset Accent Box */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 -z-10 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-accent/20 blur-2xl sm:blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

