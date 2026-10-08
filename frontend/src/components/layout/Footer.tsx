"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Smartphone, ArrowUpRight, ShieldCheck, ExternalLink, GraduationCap, Award } from "lucide-react";
import { schoolContact } from "@/lib/contact";
import { siteLogo } from "@/lib/brand";

const quickLinks = [
  { label: "About Playpen", href: "/about" },
  { label: "Our Campus", href: "/about/our-campus" },
  { label: "Leadership & Governance", href: "/about/school-administration" },
  { label: "Career Opportunities", href: "/about/career-at-playpen" },
  { label: "Alumni Association", href: "/about/playpen-alumni-association" },
  { label: "Notices & Circulars", href: "/notices" },
];

const academicLinks = [
  { label: "Elementary (PG – KG II)", href: "/academics/early-childhood" },
  { label: "Junior School (Class I – III)", href: "/academics/junior-school" },
  { label: "Middle School (Class IV – VII)", href: "/academics/middle-school" },
  { label: "Senior School (Class VIII – XII)", href: "/academics/senior-school" },
  { label: "Student Achievements", href: "/academics/student-achievements" },
  { label: "Cambridge Examinations", href: "/academics/examinations" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto w-full bg-white border-t border-border/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-6 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand & About Column (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
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
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    School of Excellence
                  </p>
                </div>
              </Link>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-sm">
                A premier English-medium Cambridge International institution in Bashundhara R/A, Dhaka. Nurturing future leaders to think critically, act responsibly, and lead with moral integrity since 1977.
              </p>

              {/* Badges / Accreditation Strip */}
              <div className="mt-5 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-primary/8 px-2.5 py-1 text-[11px] font-bold text-primary border border-primary/15">
                  <Award className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                  <span>Cambridge Assessment (BD019)</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-2.5 py-1 text-[11px] font-bold text-foreground/80 border border-border/70">
                  <GraduationCap className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                  <span>49 Years of Heritage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid: Side-by-Side 2 Columns on Mobile (5 cols on lg) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Column 1: About School */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-primary">
                About School
              </h3>
              <ul className="mt-3.5 sm:mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Academics */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-primary">
                Academics
              </h3>
              <ul className="mt-3.5 sm:mt-4 space-y-2.5">
                {academicLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Admissions & Contact Column (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-primary">
              Contact &amp; Admissions
            </h3>
            <ul className="mt-3.5 sm:mt-4 space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" strokeWidth={1.75} />
                <address className="not-italic text-muted-foreground leading-snug">
                  {schoolContact.address.line1}, {schoolContact.address.line2}, {schoolContact.address.line3}
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                <a
                  href={schoolContact.phoneHref}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {schoolContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Smartphone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                <a
                  href={schoolContact.mobileHref}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {schoolContact.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                <a
                  href={schoolContact.emailHref}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {schoolContact.email}
                </a>
              </li>
            </ul>

            {/* Flagship CTA Button */}
            <div className="mt-5 pt-4 border-t border-border/60">
              <Link
                href="/admissions/apply"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white shadow-xs hover:bg-primary-dark transition-all duration-200"
              >
                <span>Online Admission Portal</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="mt-12 sm:mt-16 border-t border-border/80 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Playpen School. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium">
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
              className="inline-flex items-center gap-1 hover:text-primary transition-colors font-semibold text-primary"
            >
              <span>Google Maps Direction</span>
              <ExternalLink className="h-3 w-3" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

