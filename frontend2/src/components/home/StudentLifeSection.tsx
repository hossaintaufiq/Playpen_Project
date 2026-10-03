import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Palette, Rocket, Users, Sparkles, Activity } from "lucide-react";

const activities = [
  {
    number: "01",
    title: "Annual Sports & Athletics",
    description: "Inter-house athletic meets, football leagues, basketball championships, and martial arts training.",
    image: "/school-images/site-wide/marquee/eca.webp",
    href: "/student-life/annual-sports",
    category: "ATHLETICS",
    badge: "ANNUAL SPORTS",
  },
  {
    number: "02",
    title: "Cultural Arts & Language Gala",
    description: "Music ensembles, dramatic arts, poetry recitation, and International Mother Language Day celebrations.",
    image: "/school-images/academics/student-achievements/Poem Recitation Competition – KG II/DSC05045.webp",
    href: "/student-life/cultural-programme",
    category: "ARTS & CULTURE",
    badge: "PERFORMING ARTS",
  },
  {
    number: "03",
    title: "Science, Robotics & Innovation",
    description: "Science fairs, robotics clubs, hackathons, math olympiad training, and space exploration projects.",
    image: "/school-images/site-wide/marquee/achievements.webp",
    href: "/student-life/science-fair",
    category: "STEM & TECH",
    badge: "SCIENCE FAIR",
  },
  {
    number: "04",
    title: "Prefect Council & Community Action",
    description: "Student leadership body, peer tutoring, environmental conservation, and social welfare drives.",
    image: "/school-images/academics/student-achievements/Prefect Badge Giving Ceremony 2025/1.webp",
    href: "/student-life/community-service",
    category: "LEADERSHIP",
    badge: "PREFECT BODY",
  },
];

export function StudentLifeSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28 border-b-3 border-[#121212]">
      {/* Swiss Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#121212] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d97706] text-[#121212] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest border border-[#121212] shadow-[2px_2px_0px_#121212] mb-3">
              <Activity className="h-3.5 w-3.5" />
              <span>05 // STUDENT LIFE &amp; SOCIETIES</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#121212] leading-[1.05] tracking-tight uppercase">
              VIBRANT STUDENT LIFE. <br />
              <span className="text-[#6b0c26] italic font-serif">PASSION IN ACTION.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#524d46] uppercase max-w-xs text-right hidden md:block">
            // 20+ CLUBS &amp; SOCIETIES <br />
            ATHLETICS • LEADERSHIP • ARTS
          </div>
        </div>

        {/* Asymmetric Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((act) => (
            <Link
              key={act.title}
              href={act.href}
              className="group border-2 border-[#121212] bg-[#ffffff] shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              {/* Image Container with Brutalist Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[#121212] bg-[#121212]">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-3 left-3 bg-[#121212] text-white border border-white/30 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                  {act.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#d97706] text-[#121212] border border-[#121212] px-2 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[1px_1px_0px_#000]">
                  #{act.number}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#6b0c26] uppercase tracking-wider block mb-1">
                    {act.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#121212] leading-snug group-hover:text-[#6b0c26] transition-colors">
                    {act.title}
                  </h3>
                  <p className="font-sans text-xs text-[#524d46] mt-2 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#121212]/15 flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26]">
                  <span className="uppercase">Explore Activity</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Hub Strip */}
        <div className="border-2 border-[#121212] bg-[#f4efe6] p-5 sm:p-6 shadow-[5px_5px_0px_#121212] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#6b0c26] bg-white px-2.5 py-1 border border-[#121212]">
              CLUBS &amp; EVENTS
            </span>
            <span className="font-mono text-xs text-[#121212] font-bold uppercase">
              Over 20 co-curricular activities active throughout the academic year.
            </span>
          </div>

          <Link
            href="/student-life"
            className="shrink-0 bg-[#6b0c26] hover:bg-[#54081e] text-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:shadow-[5px_5px_0px_#121212] transition-all"
          >
            <span>Student Life Hub →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
