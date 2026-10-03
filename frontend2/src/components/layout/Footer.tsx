import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Smartphone, ArrowUpRight, Sparkles, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { schoolContact } from "@/lib/contact";
import { siteLogo } from "@/lib/brand";

const quickLinks = [
  { label: "About Playpen", href: "/about", number: "01" },
  { label: "Our Campus Facilities", href: "/about/our-campus", number: "02" },
  { label: "Faculty & Leadership", href: "/about/school-administration", number: "03" },
  { label: "Career Opportunities", href: "/about/career-at-playpen", number: "04" },
  { label: "Alumni Association", href: "/about/playpen-alumni-association", number: "05" },
  { label: "Child Protection Policy", href: "/about/child-protection-policy", number: "06" },
];

const academicLinks = [
  { label: "Academic Divisions & Structure", href: "/academics/school-structure", number: "01" },
  { label: "Student Achievements & Honors", href: "/academics/student-achievements", number: "02" },
  { label: "Examinations & Cambridge Assessments", href: "/academics/examinations", number: "03" },
  { label: "Science & Computer Laboratories", href: "/academics/laboratories", number: "04" },
  { label: "Central Library & Resource Hub", href: "/academics/library", number: "05" },
  { label: "Student Counselling & Wellbeing", href: "/academics/counsellor", number: "06" },
];

const studentLifeLinks = [
  { label: "Annual Sports & Athletics", href: "/student-life/annual-sports", number: "01" },
  { label: "Extra-Curricular Clubs", href: "/student-life/extra-curricular-activities", number: "02" },
  { label: "Cultural Programmes & Arts", href: "/student-life/cultural-programme", number: "03" },
  { label: "Science Fair & Innovation", href: "/student-life/science-fair", number: "04" },
  { label: "Community Service & Impact", href: "/student-life/community-service", number: "05" },
  { label: "Health Center & Wellness", href: "/student-life/health-center", number: "06" },
];

const portalLinks = [
  { label: "Online Admissions Application", href: "/admissions/apply" },
  { label: "Admission Criteria & Procedure", href: "/admissions/admission-procedure" },
  { label: "Code of Conduct & Discipline", href: "/admissions/code-of-conduct" },
  { label: "School Uniform Guide", href: "/admissions/school-uniform" },
  { label: "School Notices & Circulars", href: "/notices" },
  { label: "Official Campus Gallery", href: "/gallery" },
  { label: "Administrative Portal", href: "/portal/admin" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto w-full bg-[#121212] text-[#faf7f2] border-t-4 border-[#121212]">
      {/* Top Monumental Marquee */}
      <div className="border-b-2 border-white/15 bg-[#6b0c26] py-3 overflow-hidden">
        <div className="flex w-[200%] editorial-marquee gap-8 whitespace-nowrap font-mono text-xs sm:text-sm font-bold tracking-widest text-[#faf7f2] uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="text-[#d97706]">✦</span>
              <span>PLAYPEN SCHOOL OF EXCELLENCE</span>
              <span>•</span>
              <span>EST. 1977</span>
              <span>•</span>
              <span>CAMBRIDGE ASSESSMENT INTERNATIONAL EDUCATION</span>
              <span>•</span>
              <span>DHAKA, BANGLADESH</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Massive Editorial Header */}
        <div className="border-b-2 border-white/20 pb-12 mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d97706] text-[#121212] px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest border border-white mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>49 YEARS OF ACADEMIC DISTINCTION</span>
              </div>
              <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
                PLAYPEN <span className="text-[#d97706]">SCHOOL</span>
              </h2>
              <p className="mt-3 font-mono text-sm sm:text-base text-[#e8dfd1]/80 max-w-2xl uppercase tracking-wider">
                Where curious minds grow. Nurturing critical thinkers, moral courage, and global academic excellence since 1977.
              </p>
            </div>

            {/* Quick Action CTA Box */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center justify-center gap-2 bg-[#d97706] text-[#121212] hover:bg-white px-6 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#ffffff] hover:shadow-[6px_6px_0px_#ffffff] transition-all"
              >
                <span>Admissions 2026–27</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://portal.playpen.edu.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#6b0c26] text-white hover:bg-[#8e1436] px-6 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#d97706] hover:shadow-[6px_6px_0px_#d97706] transition-all"
              >
                <span>Student Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: School Identity & Accreditations (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 border-2 border-white bg-white p-1 shadow-[3px_3px_0px_#d97706]">
                <Image
                  src={siteLogo.src}
                  alt={siteLogo.alt}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl tracking-tight text-white uppercase block leading-none">
                  Playpen
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d97706] font-bold mt-1 block">
                  School of Excellence
                </span>
              </div>
            </div>

            <p className="font-sans text-sm leading-relaxed text-[#e8dfd1]/80">
              A premier English-medium institution delivering Cambridge Assessment International Education (CAIE) from Playgroup to A-Levels in Bashundhara Residential Area, Dhaka.
            </p>

            <div className="border-2 border-white/20 bg-white/5 p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#d97706]">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span className="font-bold">CAMBRIDGE AFFILIATED INSTITUTION</span>
              </div>
              <p className="text-xs text-[#e8dfd1]/70 leading-normal">
                Recognized Cambridge International examination centre delivering standard IGCSE &amp; International A-Level curricula.
              </p>
            </div>
          </div>

          {/* Column 2: About & Campus (2 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#d97706] border-b-2 border-white/20 pb-2 mb-4">
              01 // ABOUT
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-xs text-[#e8dfd1]/80 hover:text-[#d97706] transition-colors py-1"
                  >
                    <span className="font-medium">{link.label}</span>
                    <span className="font-mono text-[10px] text-white/40 group-hover:text-[#d97706]">{link.number}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics & Life (3 cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#d97706] border-b-2 border-white/20 pb-2 mb-4">
              02 // ACADEMICS &amp; LIFE
            </h3>
            <ul className="space-y-2.5">
              {academicLinks.slice(0, 4).concat(studentLifeLinks.slice(0, 2)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-xs text-[#e8dfd1]/80 hover:text-[#d97706] transition-colors py-1"
                  >
                    <span className="font-medium">{link.label}</span>
                    <span className="font-mono text-[10px] text-white/40 group-hover:text-[#d97706]">{link.number}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Dispatches (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#d97706] border-b-2 border-white/20 pb-2 mb-4">
              03 // DISPATCHES &amp; CONTACT
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#d97706] mt-0.5" />
                <address className="not-italic text-[#e8dfd1]/90 leading-snug font-sans text-xs">
                  {schoolContact.address.line1}, {schoolContact.address.line2}, {schoolContact.address.line3}
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#d97706]" />
                <a
                  href={schoolContact.phoneHref}
                  className="text-[#e8dfd1]/90 hover:text-[#d97706] transition-colors"
                >
                  {schoolContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Smartphone className="h-3.5 w-3.5 shrink-0 text-[#d97706]" />
                <a
                  href={schoolContact.mobileHref}
                  className="text-[#e8dfd1]/90 hover:text-[#d97706] transition-colors"
                >
                  {schoolContact.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#d97706]" />
                <a
                  href={schoolContact.emailHref}
                  className="text-[#e8dfd1]/90 hover:text-[#d97706] transition-colors lowercase"
                >
                  {schoolContact.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/20">
              <a
                href={schoolContact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#d97706] hover:text-white transition-colors"
              >
                <span>VIEW CAMPUS ON GOOGLE MAPS</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="mt-14 border-t-2 border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#e8dfd1]/60">
          <p>© {new Date().getFullYear()} PLAYPEN SCHOOL. ALL RIGHTS RESERVED. // ESTABLISHED 1977</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/admissions/code-of-conduct" className="hover:text-[#d97706] transition-colors">
              Code of Conduct
            </Link>
            <Link href="/about/child-protection-policy" className="hover:text-[#d97706] transition-colors">
              Child Protection Policy
            </Link>
            <Link href="/portal/admin" className="hover:text-[#d97706] transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
