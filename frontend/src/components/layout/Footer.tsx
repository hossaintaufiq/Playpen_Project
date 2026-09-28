import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Smartphone, ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { schoolContact } from "@/lib/contact";
import { siteLogo } from "@/lib/brand";

const quickLinks = [
  { label: "About Playpen", href: "/about" },
  { label: "Our Campus", href: "/about/our-campus" },
  { label: "Mission & Philosophy", href: "/about/mission-and-philosophy" },
  { label: "Faculty & Leadership", href: "/about/school-administration" },
  { label: "Career Opportunities", href: "/about/career-at-playpen" },
  { label: "Alumni Association", href: "/about/alumni-association" },
];

const academicLinks = [
  { label: "Early Childhood (Playgroup – KG II)", href: "/academics/early-childhood" },
  { label: "Junior School (Class I – III)", href: "/academics/junior-school" },
  { label: "Middle School (Class IV – VII)", href: "/academics/middle-school" },
  { label: "Senior School (Class VIII – XII)", href: "/academics/senior-school" },
  { label: "Student Achievements", href: "/academics/student-achievements" },
  { label: "Examinations & Assessments", href: "/academics/examinations" },
];

const portalLinks = [
  { label: "Online Admissions Application", href: "/admissions/apply" },
  { label: "Admissions Criteria & Fees", href: "/admissions/admission-procedure" },
  { label: "Student & Parent Portal", href: "https://portal.playpen.edu.bd/", external: true },
  { label: "School Notices & Circulars", href: "/notices" },
  { label: "Campus Gallery", href: "/gallery" },
  { label: "Admin Portal", href: "/portal/admin" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto w-full bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & About Column (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src={siteLogo.src}
                  alt={siteLogo.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-primary">
                  Playpen
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  School of Excellence
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A premier English-medium Cambridge International institution in Bashundhara R/A, Dhaka. Nurturing young minds to think clearly, act responsibly, and lead with integrity since 1977.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Cambridge Assessment International Education</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>Bashundhara Residential Area, Dhaka-1229</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              About School
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Column (3 cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Academics &amp; Divisions
            </h3>
            <ul className="mt-4 space-y-2.5">
              {academicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions & Contact Column (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Contact &amp; Admissions
            </h3>
            <ul className="mt-4 space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <address className="not-italic text-muted-foreground leading-snug">
                  {schoolContact.address.line1}, {schoolContact.address.line2}, {schoolContact.address.line3}
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={schoolContact.phoneHref}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {schoolContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Smartphone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={schoolContact.mobileHref}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {schoolContact.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={schoolContact.emailHref}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {schoolContact.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-border">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-dark transition"
              >
                <span>Online Application Portal</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-14 border-t border-border/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Playpen School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/admissions/code-of-conduct" className="hover:text-primary transition-colors">
              Code of Conduct
            </Link>
            <Link href="/about/child-protection-policy" className="hover:text-primary transition-colors">
              Child Protection Policy
            </Link>
            <a
              href={schoolContact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors font-semibold"
            >
              <span>Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
