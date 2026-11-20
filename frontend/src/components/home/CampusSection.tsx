import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Shield, Laptop, BookOpen, Dumbbell, Stethoscope } from "lucide-react";

export function CampusSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <h2 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-tight text-foreground text-balance">
            Space to learn. Space to dream.
          </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our purpose-built campus in Bashundhara R/A is designed from the ground up to give students room to breathe, collaborate, and explore safely.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about/our-campus"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-primary-dark hover:shadow-md"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Main Large Campus Hero Card (7 cols) */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-lg sm:rounded-lg bg-black min-h-[360px] sm:min-h-[460px] shadow-md">
            <Image
              src="/school-images/about/our-campus/DSC01243.webp"
              alt="Playpen School Main Campus Building"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white mb-2">
                <MapPin className="h-3 w-3 text-accent" />
                <span>Bashundhara R/A Campus</span>
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl text-white leading-tight">
                Architectural Excellence &amp; Open Learning Spaces
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/80 line-clamp-2">
                A modern 6-story academic building with sunlit classrooms, central atrium, and green recreational zones.
              </p>
            </div>
          </div>

          {/* Right Stack: Two Medium Cards (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5 sm:gap-6">
            {/* Science & Tech Lab */}
            <div className="relative group overflow-hidden rounded-lg bg-black min-h-[220px] sm:min-h-[220px] shadow-md">
              <Image
                src="/school-images/about/our-campus/DSC01235.webp"
                alt="Science and Computer Laboratories"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold text-white/80">Science &amp; Innovation</span>
                <h3 className="font-bold text-lg sm:text-xl text-white mt-0.5">
                  Science and IT laboratories
                </h3>
              </div>
            </div>

            {/* Library / Learning Center */}
            <div className="relative group overflow-hidden rounded-lg bg-black min-h-[220px] sm:min-h-[220px] shadow-md">
              <Image
                src="/school-images/about/our-campus/DSC01255.webp"
                alt="Playpen School Library"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold text-white/80">Resource Center</span>
                <h3 className="font-bold text-lg sm:text-xl text-white mt-0.5">
                  Rich Library &amp; Quiet Study Hub
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Features Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-surface p-3.5">
            <Shield className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs font-bold text-foreground">24/7 CCTV Security</span>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-surface p-3.5">
            <Laptop className="h-4 w-4 text-accent shrink-0" />
            <span className="text-xs font-bold text-foreground">Smart Classrooms</span>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-surface p-3.5">
            <Dumbbell className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs font-bold text-foreground">Sports &amp; Athletics Area</span>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-surface p-3.5">
            <Stethoscope className="h-4 w-4 text-accent shrink-0" />
            <span className="text-xs font-bold text-foreground">Campus Medical Clinic</span>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-surface p-3.5">
            <BookOpen className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs font-bold text-foreground">School Bookshop</span>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-surface p-3.5">
            <MapPin className="h-4 w-4 text-accent shrink-0" />
            <span className="text-xs font-bold text-foreground">Safe Transport Fleet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
