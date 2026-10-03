import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Shield, Laptop, BookOpen, Dumbbell, Stethoscope, Sparkles } from "lucide-react";

const campusFacilities = [
  {
    number: "01",
    name: "Sunlit Smart Classrooms",
    desc: "Acoustically treated, climate-controlled spaces with smart interactive displays.",
    href: "/about/our-campus",
  },
  {
    number: "02",
    name: "STEM & Science Labs",
    desc: "Dedicated Physics, Chemistry, and Biology laboratories built to Cambridge specifications.",
    href: "/academics/laboratories",
  },
  {
    number: "03",
    name: "Central Library & Resource Hub",
    desc: "Extensive physical collection and digital research repository for all grade levels.",
    href: "/academics/library",
  },
  {
    number: "04",
    name: "Athletic Ground & Activity Arenas",
    desc: "Outdoor sports spaces, indoor games arenas, and dedicated athletic training grounds.",
    href: "/student-life/annual-sports",
  },
  {
    number: "05",
    name: "Health & Medical Center",
    desc: "On-campus medical facility staffed by qualified healthcare professionals.",
    href: "/student-life/health-center",
  },
];

export function CampusSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28 border-b-3 border-[#121212]">
      {/* Swiss Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#121212] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6b0c26] text-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#121212] mb-3">
              <Building2 className="h-3.5 w-3.5" />
              <span>03 // THE CAMPUS</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#121212] leading-[1.05] tracking-tight uppercase">
              WHERE LEARNING <br />
              <span className="text-[#6b0c26] italic font-serif">MEETS ARCHITECTURE.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#524d46] uppercase max-w-xs text-right hidden md:block">
            // 100,000 SQ FT PURPOSE-BUILT <br />
            BASHUNDHARA R/A, DHAKA
          </div>
        </div>

        {/* Editorial Architecture Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Large Campus Hero Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative border-3 border-[#121212] bg-[#ffffff] p-3 shadow-[8px_8px_0px_#121212] flex flex-col h-full">
              <div className="relative aspect-[16/11] w-full overflow-hidden border-2 border-[#121212] bg-[#121212]">
                <Image
                  src="/school-images/about/our-campus/DSC01243.webp"
                  alt="Playpen School Main Campus Building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-[#121212] text-white border border-white/30 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
                  <MapPin className="h-3 w-3 text-[#d97706] inline mr-1" />
                  BASHUNDHARA R/A CAMPUS
                </div>

                <div className="absolute bottom-4 right-4 bg-[#d97706] text-[#121212] border-2 border-[#121212] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#000000]">
                  PURPOSE-BUILT COMPLEX
                </div>
              </div>

              {/* Photo Caption Strip */}
              <div className="mt-4 p-2 bg-[#f4efe6] border border-[#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-[#121212]">
                <span className="font-bold">PLATE 02 — CENTRAL ACADEMIC BUILDING</span>
                <span className="text-[#524d46]">SUNLIT ATRIUM &bull; 10 STOREYS &bull; SECURE GATED PERIMETER</span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Architectural Facility Index (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="border-2 border-[#121212] bg-[#ffffff] p-2 shadow-[6px_6px_0px_#121212]">
              <div className="border-b-2 border-[#121212] bg-[#f4efe6] p-3 mb-2 flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26]">
                <span className="uppercase tracking-widest">FACILITY DIRECTORY</span>
                <span>05 ZONES</span>
              </div>

              <div className="divide-y-2 divide-[#121212]/15">
                {campusFacilities.map((fac) => (
                  <Link
                    key={fac.number}
                    href={fac.href}
                    className="group flex items-start gap-3 p-3.5 hover:bg-[#f4efe6] transition-colors"
                  >
                    <span className="font-mono text-xs font-bold bg-[#6b0c26] text-white px-2 py-0.5 border border-[#121212] mt-0.5">
                      {fac.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-sans font-bold text-sm sm:text-base text-[#121212] group-hover:text-[#6b0c26] transition-colors">
                          {fac.name}
                        </h3>
                        <ArrowRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="font-sans text-xs text-[#524d46] mt-1 leading-relaxed line-clamp-2">
                        {fac.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about/our-campus"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#121212] hover:bg-[#6b0c26] text-white px-6 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#6b0c26] hover:shadow-[6px_6px_0px_#121212] transition-all"
            >
              <span>Explore All Campus Facilities</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Lower Brutalist Feature Strips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="border-2 border-[#121212] bg-[#ffffff] p-3.5 shadow-[3px_3px_0px_#121212] flex items-center gap-2.5">
            <Shield className="h-4 w-4 text-[#6b0c26] shrink-0" />
            <span className="font-mono text-[11px] font-bold text-[#121212] uppercase leading-tight">
              24/7 CCTV &amp; Guards
            </span>
          </div>

          <div className="border-2 border-[#121212] bg-[#ffffff] p-3.5 shadow-[3px_3px_0px_#121212] flex items-center gap-2.5">
            <Laptop className="h-4 w-4 text-[#d97706] shrink-0" />
            <span className="font-mono text-[11px] font-bold text-[#121212] uppercase leading-tight">
              Smart Displays
            </span>
          </div>

          <div className="border-2 border-[#121212] bg-[#ffffff] p-3.5 shadow-[3px_3px_0px_#121212] flex items-center gap-2.5">
            <Dumbbell className="h-4 w-4 text-[#6b0c26] shrink-0" />
            <span className="font-mono text-[11px] font-bold text-[#121212] uppercase leading-tight">
              Sports Complexes
            </span>
          </div>

          <div className="border-2 border-[#121212] bg-[#ffffff] p-3.5 shadow-[3px_3px_0px_#121212] flex items-center gap-2.5">
            <Stethoscope className="h-4 w-4 text-[#d97706] shrink-0" />
            <span className="font-mono text-[11px] font-bold text-[#121212] uppercase leading-tight">
              Medical Center
            </span>
          </div>

          <div className="border-2 border-[#121212] bg-[#ffffff] p-3.5 shadow-[3px_3px_0px_#121212] flex items-center gap-2.5">
            <BookOpen className="h-4 w-4 text-[#6b0c26] shrink-0" />
            <span className="font-mono text-[11px] font-bold text-[#121212] uppercase leading-tight">
              School Bookshop
            </span>
          </div>

          <div className="border-2 border-[#121212] bg-[#ffffff] p-3.5 shadow-[3px_3px_0px_#121212] flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-[#d97706] shrink-0" />
            <span className="font-mono text-[11px] font-bold text-[#121212] uppercase leading-tight">
              Transport Fleet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
