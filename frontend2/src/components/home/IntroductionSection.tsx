import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Compass, Shield, Award, CheckCircle2 } from "lucide-react";

export function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28 border-b-3 border-[#121212]">
      {/* Swiss Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#121212] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#121212] text-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#6b0c26] mb-3">
              <span>01 // THE INSTITUTION</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#121212] leading-[1.05] tracking-tight uppercase">
              EDUCATION IS MORE THAN <br />
              <span className="text-[#6b0c26] italic font-serif">A CLASSROOM.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#524d46] uppercase max-w-xs text-right hidden md:block">
            // PLAYPEN SCHOOL • EST. 1977 <br />
            PURPOSE-BUILT CAMPUS • DHAKA
          </div>
        </div>

        {/* Editorial 2-Column Spread */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Storytelling (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-l-4 border-[#6b0c26] pl-6 space-y-4">
              <p className="font-serif text-xl sm:text-2xl text-[#121212] font-semibold leading-snug">
                &ldquo;We do not simply prepare students for examinations; we prepare young minds to engage with the world with intellectual rigor and moral clarity.&rdquo;
              </p>
              <p className="font-sans text-base text-[#403d39] leading-relaxed">
                Since 1977, Playpen has stood as a bastion of Cambridge International education in Bangladesh. Situated in our custom-designed, 10-storey campus in Bashundhara R/A, we cultivate a harmonious balance of academic mastery, artistic exploration, scientific inquiry, and athletic vigor.
              </p>
            </div>

            {/* Neo-Brutalist 4-Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-[#121212] bg-[#ffffff] p-5 shadow-[4px_4px_0px_#121212]">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] mb-2">
                  <span>// 01</span>
                  <BookOpen className="h-4 w-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-[#121212] uppercase tracking-wide">
                  Cambridge Benchmark
                </h3>
                <p className="font-sans text-xs text-[#524d46] mt-1.5 leading-relaxed">
                  Rigorous CAIE syllabus from Playgroup through IGCSE and International A-Levels.
                </p>
              </div>

              <div className="border-2 border-[#121212] bg-[#ffffff] p-5 shadow-[4px_4px_0px_#121212]">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#d97706] mb-2">
                  <span>// 02</span>
                  <Shield className="h-4 w-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-[#121212] uppercase tracking-wide">
                  Moral &amp; Civic Duty
                </h3>
                <p className="font-sans text-xs text-[#524d46] mt-1.5 leading-relaxed">
                  Instilling compassion, disciplinary integrity, and empathy through active service.
                </p>
              </div>

              <div className="border-2 border-[#121212] bg-[#ffffff] p-5 shadow-[4px_4px_0px_#121212]">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] mb-2">
                  <span>// 03</span>
                  <Compass className="h-4 w-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-[#121212] uppercase tracking-wide">
                  Modern Facilities
                </h3>
                <p className="font-sans text-xs text-[#524d46] mt-1.5 leading-relaxed">
                  Advanced science labs, computing centers, athletic arenas, and multimedia auditoriums.
                </p>
              </div>

              <div className="border-2 border-[#121212] bg-[#ffffff] p-5 shadow-[4px_4px_0px_#121212]">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#d97706] mb-2">
                  <span>// 04</span>
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-[#121212] uppercase tracking-wide">
                  Global Placements
                </h3>
                <p className="font-sans text-xs text-[#524d46] mt-1.5 leading-relaxed">
                  Alumni enrolled across premier universities across North America, Europe, Asia &amp; Australia.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-[#121212] hover:bg-[#6b0c26] text-white px-7 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#6b0c26] hover:shadow-[6px_6px_0px_#121212] transition-all"
              >
                <span>Discover School Heritage</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Monumental Framed Photography (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative border-3 border-[#121212] bg-[#ffffff] p-3 shadow-[8px_8px_0px_#121212]">
              <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-[#121212] bg-[#121212]">
                <Image
                  src="/school-images/gallery/campus/Gemini_Generated_Image_1aj5a31aj5a31aj5.jpg"
                  alt="Playpen School Campus Building and Community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />

                {/* Corner Stamp */}
                <div className="absolute bottom-4 left-4 bg-[#ffffff] border-2 border-[#121212] p-4 shadow-[4px_4px_0px_#121212] max-w-xs">
                  <span className="font-mono text-[10px] font-bold text-[#6b0c26] uppercase tracking-widest block">
                    ARCHIVE // 1977–2026
                  </span>
                  <p className="font-serif font-bold text-sm text-[#121212] mt-1 leading-snug">
                    49+ Years of Inspiring Young Minds in Dhaka.
                  </p>
                </div>
              </div>

              {/* Photo Caption Strip */}
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#524d46] px-1">
                <span>PLATE NO. 01 — BASHUNDHARA MAIN CAMPUS</span>
                <span className="text-[#6b0c26] font-bold">100,000 SQ FT</span>
              </div>
            </div>

            {/* Bottom Offset Callout */}
            <div className="border-2 border-[#121212] bg-[#f4efe6] p-4 flex items-center justify-between shadow-[4px_4px_0px_#121212]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#6b0c26] shrink-0" />
                <span className="font-mono text-xs font-bold text-[#121212] uppercase tracking-wider">
                  Accredited Cambridge Examination Centre BD042
                </span>
              </div>
              <Link
                href="/about/our-campus"
                className="font-mono text-xs font-bold text-[#6b0c26] hover:underline uppercase shrink-0"
              >
                Campus Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
