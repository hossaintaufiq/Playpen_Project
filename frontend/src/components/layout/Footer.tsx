import Link from "next/link";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { schoolContact } from "@/lib/contact";

const links = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Portal", href: "/portal" },
];

function FooterWave() {
  return (
    <div className="pointer-events-none relative -mb-px w-full leading-[0]" aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-14 md:h-16 lg:h-20"
      >
        <path
          fill="#ffffff"
          d="M0,64 C240,100 480,32 720,58 C960,84 1200,24 1440,52 L1440,0 L0,0 Z"
        />
        <path
          fill="#5a0000"
          d="M0,80 C240,120 480,40 720,70 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        />
        <path
          fill="#800000"
          fillOpacity="0.3"
          d="M0,95 C360,55 720,110 1080,75 C1260,58 1380,85 1440,90 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto w-full">
      <FooterWave />
      <div className="playpen-bg-dark w-full text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-serif text-2xl font-bold sm:text-3xl">{schoolContact.name}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                {schoolContact.tagline}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base">
                {schoolContact.description}
              </p>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 sm:text-sm">
                Quick Links
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 sm:text-sm">
                Contact Us
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50 sm:h-5 sm:w-5" />
                  <address className="not-italic text-sm leading-relaxed text-white/80 sm:text-base">
                    {schoolContact.address.line1}
                    <br />
                    {schoolContact.address.line2}
                    <br />
                    {schoolContact.address.line3}
                  </address>
                </li>
                <li className="flex gap-3">
                  <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-white/50 sm:h-5 sm:w-5" />
                  <div className="text-sm sm:text-base">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/50">Mobile</p>
                    <a
                      href={schoolContact.mobileHref}
                      className="text-white/80 transition hover:text-white"
                    >
                      {schoolContact.mobile}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50 sm:h-5 sm:w-5" />
                  <div className="text-sm sm:text-base">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/50">Telephone</p>
                    <a
                      href={schoolContact.phoneHref}
                      className="text-white/80 transition hover:text-white"
                    >
                      {schoolContact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/50 sm:h-5 sm:w-5" />
                  <div className="text-sm sm:text-base">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/50">Email</p>
                    <a
                      href={schoolContact.emailHref}
                      className="break-all text-white/80 transition hover:text-white"
                    >
                      {schoolContact.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:mt-10 sm:text-sm">
            © {new Date().getFullYear()} Playpen School. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
